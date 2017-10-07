import { UserService } from './../services/user.service';

export function usernameTaken(userService: UserService) {
    
    return control => new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(!control.value) return null;
            userService.checkUsernameExist((control.value).trim()).subscribe(data => {
                if(data.success) {
                  resolve(null);
                } else {
                  resolve({ usernameTaken : true});
                }
              });
        },2000);
    });
}