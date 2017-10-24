const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database');
const socket=require('socket.io');
const http=require('http');
const multer=require('multer');
const paypal=require('paypal-rest-sdk');
const paypalkeys=require('./config/key.paypal');


paypal.configure({
    'mode': 'sandbox', //sandbox or live 
    'client_id': paypalkeys.client_id,
    'client_secret': paypalkeys.client_secret
});

//connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database '+config.database);
})

mongoose.connection.on('error',(err)=>{
    console.log('error:' + err);
})




const app=express();

const users=require('./routes/users');
const topics=require('./routes/topics');
const create=require('./routes/create');
const maintopics=require('./routes/maintopics');
const categories=require('./routes/categories');
const posts=require('./routes/posts');
const comments=require('./routes/comments');
const upload=require('./routes/upload');
const checkout=require('./routes/checkout');

const port=process.env.PORT||3000;

//set static folder

app.use(express.static(path.join(__dirname,'public')));



//cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//passport middleware

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use('/api/users',users);
app.use('/api/topics',topics);
app.use('/api/create',create);
app.use('/api/maintopics',maintopics);
app.use('/api/categories',categories);
app.use('/api/posts',posts);
app.use('/api/comments',comments);
app.use('/api/upload',upload);
app.use('/api/checkout',checkout);

app.get('/',(req,res)=>{
    res.send('invalid endpoint');
})


app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})


//socket here
const server=http.createServer(app);
const io=socket(server);
const userChat=[];
const forumMsg=[];

io.on('connection',(socket)=>{
    socket.emit('socket_id',{socket_id:socket.id });
    
    
    socket.on('disconnect',()=>{
        console.log('disconnect');
        let index=userChat.findIndex(x=>x.socket_id==socket.id);
        let userDisconnect=userChat.splice(index,1);
        console.log(userChat);
        io.sockets.emit('showOnlineUser',{userOnline: JSON.stringify(userChat)});
        socket.broadcast.emit('userLeft',userDisconnect);
    })
    

    socket.on('forumSendMessage',(data)=>{
        io.sockets.emit('forumSendMessage',data);
    })

    socket.on('addUserToChat',(data)=>{
        userChat.push(data);
        console.log(userChat);
        io.sockets.emit('showOnlineUser',{userOnline: JSON.stringify(userChat)});
        socket.broadcast.emit('userIn',data);
    });

    socket.on('removeUser',(data)=>{
        console.log('removed');
        let index=userChat.findIndex((x)=>{x.username==data.username;});
        let userLogout=userChat.splice(index,1);
        console.log(userChat);
        io.sockets.emit('showOnlineUser',{userOnline: JSON.stringify(userChat)});
        socket.broadcast.emit('userLeft',userLogout);
    });
})



server.listen(port, (err)=>{
    if(err) throw err;
    console.log('server started on port '+port);
})