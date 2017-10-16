webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    margin-top: 100px;\r\n}\r\n\r\n.msg{\r\n    width:45%;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n@media(max-width:1025px){\r\n    #loginform{\r\n        width: 40%;\r\n    }\r\n}\r\n@media(max-width:992px){\r\n    .msg{\r\n        width:60%;\r\n    }\r\n}\r\n\r\n@media(max-width:768px){\r\n    .msg{\r\n        width:80%;\r\n    }\r\n}\r\n\r\n@media(max-width:375px){\r\n    .msg{\r\n        width:100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar-top></navbar-top>\n<div class=\"container\">\n  <div class=\"content\">\n    <div class=\"msg\">\n        <flash-messages></flash-messages>\n    </div>\n      <router-outlet ></router-outlet>\n  </div>\n</div>\n<chat [marginRight]=\"right\" [newMessage]=\"newMessage\" [username]=\"username\" (seen)=\"seen($event)\"  (sendMessage)=\"messageCome($event)\" [aMessage]=\"messages\" *ngIf=\"status\"></chat>\n<user-online [usersOnline]=\"usersInChat\" (renderUserOnline)=\"takeUsersOnline($event)\" *ngIf=\"status\"></user-online>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(userService, sharedService) {
        var _this = this;
        this.userService = userService;
        this.sharedService = sharedService;
        this.showForum = false;
        this.showGroup = true;
        this.username = "";
        this.forumMsg = "";
        this.groupMsg = "";
        this.right = 170;
        this.messages = [];
        this.status = false;
        this.newMessage = false;
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__('http://localhost:3000/');
        this.socket.on('socket_id', function (data) {
            _this.socket_id = data.socket_id;
            if (_this.status) {
                _this.socket.emit("addUserToChat", { username: _this.username, socket_id: _this.socket_id });
            }
        });
        this.socket.on("showOnlineUser", function (users) {
            console.log(users.userOnline);
            _this.usersInChat = JSON.parse(users.userOnline).map(function (onlineU) {
                return onlineU.username;
            });
            // if(this.allUsers){ 
            //   this.usersOffline=this.allUsers.filter((user)=>{
            //     if(this.usersInChat.indexOf(user.username)==-1){
            //       return true;
            //     }
            //   });
            //   this.usersOnline=this.allUsers.filter((user)=>{
            //     if(this.usersInChat.indexOf(user.username)>-1){
            //       return true;
            //     }
            //   });
            // }
        });
        this.socket.on('forumSendMessage', function (data) {
            _this.messages.push(data);
            console.log(_this.messages);
            _this.newMessage = true;
        });
        this.socket.on('userLeft', function (data) {
            var username = data.map(function (user) { return user.username; });
            _this.messages.push({ type: 'info', username: username, msg: ' disconnected!' });
            console.log(_this.messages);
        });
        this.socket.on('userIn', function (data) {
            _this.messages.push({ type: 'info', username: data.username, msg: ' connected!' });
            console.log(_this.messages);
        });
    }
    AppComponent.prototype.messageCome = function (data) {
        this.socket.emit('forumSendMessage', { type: "msg", username: this.username, msg: data });
    };
    AppComponent.prototype.takeUsersOnline = function (data) {
        this.usersInChat = this.usersInChat;
        console.log(this.usersInChat);
    };
    AppComponent.prototype.seen = function (seen) {
        this.newMessage = seen;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.checkUserOnLocal();
        this.sharedService.currentStatusLogin.subscribe(function (status) {
            _this.status = status;
            if (status) {
                if (!JSON.parse(localStorage.getItem('Zero_user')))
                    return false;
                var username = JSON.parse(localStorage.getItem('Zero_user')).username;
                _this.username = username;
                if (_this.socket_id) {
                    _this.socket.emit("addUserToChat", { username: _this.username, socket_id: _this.socket_id });
                    console.log("false");
                }
            }
            else {
                if (_this.socket_id) {
                    _this.socket.emit('removeUser', { username: _this.username, socket_id: _this.socket_id });
                    console.log("false");
                }
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pages_posts_posts_component__ = __webpack_require__("../../../../../src/app/components/pages/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_topic_service__ = __webpack_require__("../../../../../src/app/services/main-topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_user_guard__ = __webpack_require__("../../../../../src/app/guards/user.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_top_navbar_top_component__ = __webpack_require__("../../../../../src/app/components/navbar-top/navbar-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pages_home_home_component__ = __webpack_require__("../../../../../src/app/components/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_pages_register_register_component__ = __webpack_require__("../../../../../src/app/components/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pages_login_login_component__ = __webpack_require__("../../../../../src/app/components/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_users_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_online_user_online_component__ = __webpack_require__("../../../../../src/app/components/user-online/user-online.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_pages_admin_category_category_component__ = __webpack_require__("../../../../../src/app/components/pages/admin/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_pages_home_main_topic_main_topic_component__ = __webpack_require__("../../../../../src/app/components/pages/home/main-topic/main-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_pages_home_main_topic_user_created_category_user_created_category_component__ = __webpack_require__("../../../../../src/app/components/pages/home/main-topic/user-created-category/user-created-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_pages_users_user_info_user_info_component__ = __webpack_require__("../../../../../src/app/components/pages/users/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_pages_admin_post_post_component__ = __webpack_require__("../../../../../src/app/components/pages/admin/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_pages_each_post_each_post_component__ = __webpack_require__("../../../../../src/app/components/pages/each-post/each-post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var Routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_pages_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__components_pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_18__components_users_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_user_guard__["a" /* UserGuard */]]
    },
    {
        path: 'create/category', component: __WEBPACK_IMPORTED_MODULE_22__components_pages_admin_category_category_component__["a" /* CategoryComponent */]
    },
    {
        path: 'create/post/:category_id', component: __WEBPACK_IMPORTED_MODULE_26__components_pages_admin_post_post_component__["a" /* PostComponent */]
    },
    {
        path: 'categories/:category_id', component: __WEBPACK_IMPORTED_MODULE_1__components_pages_posts_posts_component__["a" /* PostsComponent */]
    },
    {
        path: 'user/info/:user_id', component: __WEBPACK_IMPORTED_MODULE_25__components_pages_users_user_info_user_info_component__["a" /* UserInfoComponent */]
    },
    {
        path: 'posts/:post_id', component: __WEBPACK_IMPORTED_MODULE_28__components_pages_each_post_each_post_component__["a" /* EachPostComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_navbar_top_navbar_top_component__["a" /* NavbarTopComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_pages_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_users_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_user_online_user_online_component__["a" /* UserOnlineComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_pages_admin_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_pages_home_main_topic_main_topic_component__["a" /* MainTopicComponent */],
            __WEBPACK_IMPORTED_MODULE_1__components_pages_posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_pages_home_main_topic_user_created_category_user_created_category_component__["a" /* UserCreatedCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_pages_users_user_info_user_info_component__["a" /* UserInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_pages_admin_post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_pages_each_post_each_post_component__["a" /* EachPostComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_router__["c" /* RouterModule */].forRoot(Routes),
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_21_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_27_ng2_ckeditor__["CKEditorModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__guards_user_guard__["a" /* UserGuard */], __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_3__services_categories_service__["a" /* CategoriesService */], __WEBPACK_IMPORTED_MODULE_2__services_main_topic_service__["a" /* MainTopicService */], __WEBPACK_IMPORTED_MODULE_0__services_posts_service__["a" /* PostsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/emailRegister.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emailTaken;
function emailTaken(userService) {
    return function (control) { return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (!control.value)
                return null;
            userService.checkEmailExist((control.value).trim()).subscribe(function (data) {
                if (data.success) {
                    resolve(null);
                }
                else {
                    resolve({ emailTaken: true });
                }
            });
        }, 2000);
    }); };
}
//# sourceMappingURL=emailRegister.validators.js.map

/***/ }),

/***/ "../../../../../src/app/common/formatemail.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = incorrectMailFormat;
function incorrectMailFormat(control) {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
        return { "incorrectMailFormat": true };
    }
    return null;
}
//# sourceMappingURL=formatemail.validators.js.map

/***/ }),

/***/ "../../../../../src/app/common/nospace.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CannotContainSpace;
function CannotContainSpace(control) {
    if (control.value.indexOf(' ') >= 0) {
        return { CannotContainSpace: true };
    }
    return null;
}
//# sourceMappingURL=nospace.validators.js.map

/***/ }),

/***/ "../../../../../src/app/common/usernameRegister.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = usernameTaken;
function usernameTaken(userService) {
    return function (control) { return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (!control.value)
                return null;
            userService.checkUsernameExist((control.value).trim()).subscribe(function (data) {
                if (data.success) {
                    resolve(null);
                }
                else {
                    resolve({ usernameTaken: true });
                }
            });
        }, 2000);
    }); };
}
//# sourceMappingURL=usernameRegister.validators.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chat-box{\r\n    overflow-y: hidden;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n.card{\r\n    width:300px;\r\n    overflow: hidden;\r\n}\r\n.card-body{\r\n    height: 200px; \r\n    overflow-y: auto;\r\n}\r\n.card-header{\r\n    cursor: pointer;\r\n    background-color: #0069D9;\r\n    color: white;\r\n    padding: 10px;\r\n}\r\n\r\n.right{\r\n    text-align: right;\r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n.message{\r\n    float: left;\r\n    padding: 6px;\r\n    margin-bottom: 10px;\r\n    border: 1px solid gray;\r\n    box-shadow: 1px 1px black;\r\n    border-radius: 5px;\r\n}\r\n.right{\r\n    float: right;\r\n    text-align: left;\r\n}\r\n.left{\r\n    float: left;\r\n    text-align: left;\r\n}\r\n.clearBoth{\r\n    clear: both;\r\n}\r\n.user{\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n.userLeft{\r\n    float: left;\r\n    color: red;\r\n    margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chat-box\">\n  <div class=\"card\">\n    <div class=\"card-header\" (click)=\"showTapChat()\"><h6>Forum <span *ngIf=\"newMessage && hide\" class=\"badge badge-warning\">news</span></h6></div>\n    <div class=\"chat\" [class.hide]=\"hide\">\n      <div class=\"card-body\">\n        <div id=\"message-forum\">\n          <div class=\"chat-content\" *ngIf=\"messages\">\n            <div *ngFor=\"let message of messages\">\n              <div *ngIf=\"message.type=='msg'\" class=\"message\" [class.right]=\"message.username==username\">\n                  <span class=\"badge user\" [ngClass]=\"{'badge-primary':message.username!=username,'badge-secondary':message.username==username}\">{{message.username}} : </span> {{message.msg}}\n              </div>\n              <div *ngIf=\"message.type=='info'\" class=\"userLeft\">\n                  <span class=\"badge badge-warning user\">{{message.username}} : </span> {{message.msg}}\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n          <div class=\"input-group\" >\n            <div class=\"input-group-addon\">Type</div>\n            <input   type=\"text\" [(ngModel)]=\"msg\" name=\"msg\" class=\"form-control\" (keyup.enter)=\"sendMsg()\" placeholder=\"Type Message...\">\n          </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
        this.marginRight = 0;
        this.sendMessage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.messages = [];
        this.username = "";
        this.seen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.msg = "";
        this.hide = true;
        this.newMessage = false;
    }
    ChatComponent.prototype.ngOnInit = function () {
        document.getElementById('chat-box').style.right = this.marginRight + "px";
        console.log(this.messages);
    };
    ChatComponent.prototype.sendMsg = function () {
        this.sendMessage.emit(this.msg);
        this.msg = "";
    };
    ChatComponent.prototype.showTapChat = function () {
        this.hide = (this.hide) ? false : true;
        if (this.hide) {
            this.seen.emit(false);
        }
    };
    return ChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('marginRight'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "marginRight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('sendMessage'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "sendMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('aMessage'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "messages", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('username'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "username", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('seen'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "seen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newMessage'),
    __metadata("design:type", Boolean)
], ChatComponent.prototype, "newMessage", void 0);
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat',
        template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar-top/navbar-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo{\r\n    width:45px;\r\n    margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar-top/navbar-top.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <img src=\"assets/images/logoZeroToZ.png\" class=\"logo\" alt=\"\">  \n    ZeroToZ</a>\n    <button style=\"cursor:pointer\" class=\"navbar-toggler\" (click)=\"toggleState()\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" [class.show]=\"openmenu\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"userService.isLoggedIn()\" class=\"nav-item\" routerLinkActive='active'><a class=\"nav-link\"  routerLink=\"/profile\">{{username}}</a></li>\n        <li *ngIf=\"userService.isLoggedIn()\" class=\"nav-item\" routerLinkActive='active'><a class=\"nav-link\"  routerLink=\"/create/category\">createCategory</a></li>        \n        <li *ngIf=\"userService.isLoggedIn()\" class=\"nav-item\" style=\"cursor:pointer\"><a class=\"nav-link active\" (click)=\"onLogoutClick()\" >Logout</a></li>\n        \n        <li *ngIf=\"!userService.isLoggedIn()\" class=\"nav-item\" routerLinkActive='active'><a class=\"nav-link\"  routerLink=\"/login\">Login</a></li>\n        <li *ngIf=\"!userService.isLoggedIn()\" class=\"nav-item\" routerLinkActive='active'><a class=\"nav-link disabled\"  routerLink=\"/register\">Register</a></li>\n      \n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar-top/navbar-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarTopComponent = (function () {
    function NavbarTopComponent(userService, route, flashMsg, sharedService) {
        this.userService = userService;
        this.route = route;
        this.flashMsg = flashMsg;
        this.sharedService = sharedService;
        this.openmenu = false;
        this.username = '';
        this.status = false;
    }
    NavbarTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.checkUserOnLocal();
        this.sharedService.currentUsername.subscribe(function (username) { return _this.username = username; });
        this.sharedService.currentStatusLogin.subscribe(function (status) { return _this.status = status; });
    };
    NavbarTopComponent.prototype.toggleState = function () {
        this.openmenu = (this.openmenu == false) ? true : false;
    };
    NavbarTopComponent.prototype.onLogoutClick = function () {
        this.userService.logout();
        this.route.navigate(['/login']);
        this.flashMsg.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.sharedService.loginStatus(false);
        return false;
    };
    return NavbarTopComponent;
}());
NavbarTopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'navbar-top',
        template: __webpack_require__("../../../../../src/app/components/navbar-top/navbar-top.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar-top/navbar-top.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], NavbarTopComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar-top.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category{\r\n    height: 80vh;\r\n}\r\n.col-md-6{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    height: 80vh;\r\n    background-color: rgb(61, 68, 81);\r\n    border-right: 1px solid gray;  \r\n    color: white;\r\n    text-align: center;\r\n}\r\n.content h1{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.content h5{\r\n    width: 70%;\r\n    font-size: 15px;\r\n    margin: 15px auto 0;\r\n}\r\n.content a{\r\n    margin-top: 15px;\r\n}\r\n.form{\r\n    text-align: left;\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    box-shadow: 0 0 5px  gray;\r\n}\r\n.select{\r\n    padding: 0.4rem 0.75rem;\r\n    border-radius: 0.25rem;\r\n    width:100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container category\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"content\">\n        <h1>Create Category for HomePage</h1>\n        <h5>Only Admin Users can access to this point!</h5>\n        <a routerLink=\"/\" class=\"btn btn-primary\">Wanna Back Home?</a>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form\">\n        <form [formGroup]=\"createCategoryForm\" (ngSubmit)=\"createCategory(createCategoryForm)\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Main Topic</label>\n            <select class=\"select\" style=\"display:block\" formControlName=\"topic_id\" >\n              <option *ngFor=\"let topic of mainTopics\" [value]=\"topic._id\">{{topic.topic}}</option>\n            </select>\n            <div class=\"alert alert-danger\" *ngIf=\"topic_id.errors && topic_id.touched\">\n              <div *ngIf=\"topic_id.errors.required\">Main Topic is Required.</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Category Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"category\" placeholder=\"Category Name..\">\n            <div class=\"alert alert-danger\" *ngIf=\"category.errors && category.touched\">\n              <div *ngIf=\"category.errors.required\">Category Name is Required.</div>\n            </div>\n          </div>\n          <button type=\"submit\" [disabled]=\"createCategoryForm.invalid\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_topic_service__ = __webpack_require__("../../../../../src/app/services/main-topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryComponent = (function () {
    function CategoryComponent(fb, categoryService, maintopicService, flashMsg, route) {
        this.categoryService = categoryService;
        this.maintopicService = maintopicService;
        this.flashMsg = flashMsg;
        this.route = route;
        this.mainTopics = [];
        this.createCategoryForm = fb.group({
            topic_id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    }
    CategoryComponent.prototype.createCategory = function (cC) {
        var _this = this;
        var user_id = JSON.parse(localStorage.getItem('Zero_user')).id;
        if (!user_id) {
            this.flashMsg.show('Check Your LocalStorage!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        var newCategory = {
            category: cC.value.category,
            topic_id: cC.value.topic_id,
            create_user: user_id
        };
        this.categoryService.createCategory(newCategory).subscribe(function (data) {
            if (data.success) {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.createCategoryForm.reset();
        });
    };
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maintopicService.getAllMainTopic()
            .subscribe(function (data) {
            console.log(data);
            _this.mainTopics = data.topics;
        });
    };
    Object.defineProperty(CategoryComponent.prototype, "category", {
        get: function () {
            return this.createCategoryForm.get('category');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryComponent.prototype, "topic_id", {
        get: function () {
            return this.createCategoryForm.get('topic_id');
        },
        enumerable: true,
        configurable: true
    });
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/components/pages/admin/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/admin/category/category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_categories_service__["a" /* CategoriesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_topic_service__["a" /* MainTopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_topic_service__["a" /* MainTopicService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _e || Object])
], CategoryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category{\r\n    height: 80vh;\r\n}\r\n.col-md-6{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    height: 80vh;\r\n    background-color: rgb(61, 68, 81);\r\n    border-right: 1px solid gray;  \r\n    color: white;\r\n    text-align: center;\r\n}\r\n.content h1{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.content h5{\r\n    width: 70%;\r\n    font-size: 15px;\r\n    margin: 15px auto 0;\r\n}\r\n.content a{\r\n    margin-top: 15px;\r\n}\r\n.form{\r\n    text-align: left;\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    box-shadow: 0 0 5px  gray;\r\n}\r\n.select{\r\n    padding: 0.4rem 0.75rem;\r\n    border-radius: 0.25rem;\r\n    width:100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><strong>Category Name:</strong> {{category.category}}</h1>\n\n<div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Title Post</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"titlePost\" placeholder=\"Your Name...\">\n</div>\n\n\n\n<ckeditor\n[(ngModel)]=\"ckeditorContent\">\n  <ckbutton [name]=\"'saveButton'\"\n    [command]=\"'saveCmd'\"\n    (click)=\"save($event)\"\n    [icon]=\"'save.png'\"\n    [label]=\"'Save Document'\"\n    [toolbar]=\"'clipboard,1'\">\n  </ckbutton>\n</ckeditor>\n\n<button class=\"btn btn-primary mt-4\" (click)=\"createPost()\">Submit</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostComponent = (function () {
    function PostComponent(flashMessage, postsService, route, router, categoryService) {
        this.flashMessage = flashMessage;
        this.postsService = postsService;
        this.route = route;
        this.router = router;
        this.categoryService = categoryService;
        this.ckeditorContent = '';
        this.titlePost = '';
        this.categoryId = '';
        this.category = {};
        this.ckeditorContent = "<p>My HTML</p>";
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.categoryId = params.get('category_id'); })
            .subscribe(function (data) { }, function (err) { return console.log(err); });
        this.categoryService.getContentCategory(this.categoryId).subscribe(function (data) {
            if (data.success) {
                _this.category = data.category;
                console.log(_this.category);
            }
        });
    };
    PostComponent.prototype.createPost = function () {
        var _this = this;
        if (this.titlePost === '' || this.ckeditorContent === '') {
            this.flashMessage.show('Pls fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!JSON.parse(localStorage.getItem('Zero_user'))) {
            return false;
        }
        var author_id = JSON.parse(localStorage.getItem('Zero_user')).id;
        var newPost = {
            title: this.titlePost,
            body: this.ckeditorContent,
            author_id: author_id,
            category_id: this.categoryId
        };
        this.postsService.createPost(newPost).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Created Post Successfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.titlePost = '';
                _this.ckeditorContent = '';
                return false;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        });
    };
    return PostComponent;
}());
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/components/pages/admin/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/admin/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */]) === "function" && _e || Object])
], PostComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/each-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/each-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">{{post.title}}</h2>\n  <div id=\"body-post\">\n    \n  </div>\n  <div class=\"time-created\">\n    <strong>Time Created: </strong>{{post.created_date}}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/each-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EachPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EachPostComponent = (function () {
    function EachPostComponent(route, postService, flashMessage) {
        this.route = route;
        this.postService = postService;
        this.flashMessage = flashMessage;
        this.post = {};
    }
    EachPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.postService.getPostContent(params.get('post_id')); })
            .subscribe(function (data) {
            if (data.success) {
                _this.post = data.post[0];
                document.getElementById('body-post').innerHTML = data.post[0].body;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }, function (err) { return console.log(err); });
    };
    return EachPostComponent;
}());
EachPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-each-post',
        template: __webpack_require__("../../../../../src/app/components/pages/each-post/each-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/each-post/each-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], EachPostComponent);

var _a, _b, _c;
//# sourceMappingURL=each-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    padding-top: 3.5rem;\r\n    overflow-y: hidden;\r\n    font-size: 1rem;\r\n}\r\n\r\n.header{\r\n    background-color: rgb(128, 157, 204);\r\n    padding: 10px 16px;\r\n    color: white;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.filter{\r\n    float: right;\r\n}\r\n\r\n.news{\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"allUsers\">\n  <div class=\"news\">\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n        <div class=\"header\">\n          New users\n        </div>\n        <div class=\"users\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngFor=\"let user of allUsers | paginate : {itemsPerPage: itemsPerPage, currentPage: p}\">{{user.username}}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-10\">\n        <div class=\"header\">\n          News Today!\n          <span class=\"filter\">\n            <select #selected (change)=\"getFilterValue(selected.value)\">\n              <option>5</option>\n              <option>10</option>\n              <option>15</option>\n            </select>\n          </span>\n        </div>\n        <div class=\"newpost\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"main-topic\">\n    <main-topic *ngFor=\"let topic of maintopics\" [topic]=\"topic\"></main-topic>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_topic_service__ = __webpack_require__("../../../../../src/app/services/main-topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(userService, mainTopicService, categoryService) {
        this.userService = userService;
        this.mainTopicService = mainTopicService;
        this.categoryService = categoryService;
        this.p = 1;
        this.itemsPerPage = 5;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userService.isLoggedIn()) {
            if (!JSON.parse(localStorage.getItem('Zero_user')))
                return false;
            var username = JSON.parse(localStorage.getItem('Zero_user')).username;
            this.userService.getAllUser(username).subscribe(function (users) {
                _this.allUsers = users;
            }, function (err) {
                console.log(err);
            });
        }
        this.mainTopicService.getAllMainTopic().
            subscribe(function (data) {
            _this.maintopics = data.topics;
        });
    };
    HomeComponent.prototype.getFilterValue = function (value) {
        this.itemsPerPage = value;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_topic_service__["a" /* MainTopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_topic_service__["a" /* MainTopicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/home/main-topic/main-topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/home/main-topic/main-topic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-3\">{{topic.topic}}</h1>\n  <ul class=\"list-group\" *ngFor=\"let category of categories\">\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/categories',category._id]\" role=\"button\" >{{category.category}}</a>\n      <user-created-category style=\"float:right\" [createUser]=\"category.create_user\"></user-created-category>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/home/main-topic/main-topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainTopicComponent = (function () {
    function MainTopicComponent(categoriesService) {
        this.categoriesService = categoriesService;
    }
    MainTopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getAllCategoryWithSpecificTopicId(this.topic._id).subscribe(function (data) {
            _this.categories = data.categories;
        }, function (err) { console.log(err); });
    };
    return MainTopicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('topic'),
    __metadata("design:type", Object)
], MainTopicComponent.prototype, "topic", void 0);
MainTopicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'main-topic',
        template: __webpack_require__("../../../../../src/app/components/pages/home/main-topic/main-topic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/home/main-topic/main-topic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */]) === "function" && _a || Object])
], MainTopicComponent);

var _a;
//# sourceMappingURL=main-topic.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/home/main-topic/user-created-category/user-created-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/home/main-topic/user-created-category/user-created-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user_created_category\">\n  <p>Name: <a [routerLink]=\"['/user/info',user_info._id]\">{{user_info.name}}</a></p>\n  <p>Created Date: {{user_info.created_date}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/home/main-topic/user-created-category/user-created-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreatedCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserCreatedCategoryComponent = (function () {
    function UserCreatedCategoryComponent(userService, flashMessage) {
        this.userService = userService;
        this.flashMessage = flashMessage;
        this.user_info = [];
    }
    UserCreatedCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserInfor(this.createUser).subscribe(function (data) {
            if (data.success) {
                _this.user_info = data.user_info;
                _this.user_info = _this.user_info[0];
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        });
    };
    return UserCreatedCategoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('createUser'),
    __metadata("design:type", Object)
], UserCreatedCategoryComponent.prototype, "createUser", void 0);
UserCreatedCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'user-created-category',
        template: __webpack_require__("../../../../../src/app/components/pages/home/main-topic/user-created-category/user-created-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/home/main-topic/user-created-category/user-created-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], UserCreatedCategoryComponent);

var _a, _b;
//# sourceMappingURL=user-created-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loginform{\r\n    width: 35%;\r\n    margin:0 auto;\r\n    padding: 40px 30px;\r\n    border:2px solid gray;\r\n    border-radius: 10px;\r\n    box-shadow: 5px 5px 1px #888888;\r\n}\r\n.alert{\r\n    padding: 0.5rem 1rem;\r\n}\r\n\r\n@media(max-width:1025px){\r\n    #loginform{\r\n        width: 40%;\r\n    }\r\n}\r\n@media(max-width:992px){\r\n    #loginform{\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media(max-width:768px){\r\n    #loginform{\r\n        width: 70%;\r\n    }\r\n}\r\n\r\n@media(max-width:375px){\r\n    #loginform{\r\n        width: 95%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form id=\"loginform\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\">\n    <h3 class=\"text-center\">Login Form</h3>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Username</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter email\">\n      <div class=\"alert alert-danger\" *ngIf=\"username.errors && username.touched\">\n        <div *ngIf=\"username.errors.required\">Username is Required.</div>\n        <div *ngIf=\"username.errors.CannotContainSpace\">Username Cannot Contain Space.</div>       \n      </div>      \n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\"  class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n      <div class=\"alert alert-danger\" *ngIf=\"password.errors && password.touched\">\n          <div *ngIf=\"password.errors.required\">Password is required.</div>\n      </div>\n    </div>\n    <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-primary btn-block mt-4\" >Login</button>\n</form> "

/***/ }),

/***/ "../../../../../src/app/components/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_nospace_validators__ = __webpack_require__("../../../../../src/app/common/nospace.validators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(userService, flashMsg, router, route, sharedService) {
        this.userService = userService;
        this.flashMsg = flashMsg;
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.enableR = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            username: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__common_nospace_validators__["a" /* CannotContainSpace */]]),
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        //check infos from local
        var _this = this;
        this.sharedService.currentUsername.subscribe(function (username) { return _this.nameLogin = username; });
        this.sharedService.currentStatusLogin.subscribe(function (status) { return _this.status = status; });
    };
    LoginComponent.prototype.onSubmit = function (rf) {
        var _this = this;
        this.enableR = true;
        this.userService.authenticateUser(rf.value)
            .subscribe(function (data) {
            if (data.success) {
                _this.userService.storeUserDate(data.token, data.user);
                //change username on shared service
                _this.sharedService.changeUsername(data.user.name);
                _this.sharedService.loginStatus(true);
                _this.flashMsg.show('You are Logged In', { cssClass: 'alert-success', timeout: 2000 });
                var returnUrl = _this.route.snapshot.queryParamMap.get('returnUrl');
                _this.router.navigate([returnUrl || '/']);
            }
            else {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a [routerLink]=\"['/create/post',categoryId]\" class=\"btn btn-primary\">Create Post</a></p>\n\n<div *ngIf=\"posts.length==0\">Have no posts yet</div>\n<div *ngIf=\"posts.length!=0\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let post of posts\"><a [routerLink]=\"['/posts',post._id]\">{{post.title}}</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostsComponent = (function () {
    function PostsComponent(route, postsService, flashMessage) {
        this.route = route;
        this.postsService = postsService;
        this.flashMessage = flashMessage;
        this.categoryId = "agsgdagsagagdsa";
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.categoryId = params.get('category_id'); })
            .subscribe(function (data) { }, function (err) { return console.log(err); });
        this.postsService.getAllPostsSpecificCategory(this.categoryId).subscribe(function (data) {
            if (data.success) {
                _this.posts = data.posts;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__("../../../../../src/app/components/pages/posts/posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], PostsComponent);

var _a, _b, _c;
//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#registerform{\r\n    width: 35%;\r\n    margin:0 auto;\r\n    padding: 40px 30px;\r\n    border:2px solid gray;\r\n    border-radius: 10px;\r\n    box-shadow: 5px 5px 1px #888888;\r\n}\r\n\r\n.alert{\r\n    padding: 0.5rem 1rem;\r\n}\r\n\r\n@media(max-width:1025px){\r\n    #registerform{\r\n        width: 40%;\r\n    }\r\n}\r\n@media(max-width:992px){\r\n    #registerform{\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media(max-width:768px){\r\n    #registerform{\r\n        width: 70%;\r\n    }\r\n}\r\n\r\n@media(max-width:375px){\r\n    #registerform{\r\n        width: 95%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form id=\"registerform\" [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister(registerForm)\">\n    <h3 class=\"text-center\">Register Form</h3>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\"  placeholder=\"Your Name...\">\n      <div class=\"alert alert-danger\" *ngIf=\"name.errors && name.touched\">\n        <div *ngIf=\"name.errors.required\">Name is Required.</div>\n      </div>\n\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Address</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"address\"  placeholder=\"Your Address...\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Username</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"username\"  placeholder=\"Username...\">\n      <div class=\"alert alert-danger\" *ngIf=\"username.errors && username.touched\">\n        <div *ngIf=\"username.errors.required\">Username is Required.</div>\n        <div *ngIf=\"username.errors.CannotContainSpace\">Username cannot contain space.</div>\n        <div *ngIf=\"username.errors.usernameTaken\">Username existed.</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\"> \n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n      <div class=\"alert alert-danger\" *ngIf=\"email.errors && email.touched\">\n        <div *ngIf=\"email.errors.required\">Email is Required.</div>\n        <div *ngIf=\"email.errors.CannotContainSpace\">Email cannot contain space.</div>\n        <div *ngIf=\"email.errors.emailTaken\">Username existed.</div>\n        <div *ngIf=\"email.errors.incorrectMailFormat\">Incorrect Email Format.</div>\n      </div>\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n      <div class=\"alert alert-danger\" *ngIf=\"password.errors && password.touched\">\n        <div *ngIf=\"password.errors.required\">Password is Required.</div>\n      </div>\n    </div>\n    <button [disabled]=\"registerForm.invalid || enableR\" type=\"submit\" class=\"btn btn-primary btn-block mt-4\" >Register</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_nospace_validators__ = __webpack_require__("../../../../../src/app/common/nospace.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_usernameRegister_validators__ = __webpack_require__("../../../../../src/app/common/usernameRegister.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_emailRegister_validators__ = __webpack_require__("../../../../../src/app/common/emailRegister.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_formatemail_validators__ = __webpack_require__("../../../../../src/app/common/formatemail.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterComponent = (function () {
    function RegisterComponent(fb, userService, route, flashMsg) {
        this.userService = userService;
        this.route = route;
        this.flashMsg = flashMsg;
        this.enableR = false;
        this.registerForm = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__common_nospace_validators__["a" /* CannotContainSpace */]], Object(__WEBPACK_IMPORTED_MODULE_4__common_usernameRegister_validators__["a" /* usernameTaken */])(userService)],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__common_nospace_validators__["a" /* CannotContainSpace */], __WEBPACK_IMPORTED_MODULE_6__common_formatemail_validators__["a" /* incorrectMailFormat */]], Object(__WEBPACK_IMPORTED_MODULE_5__common_emailRegister_validators__["a" /* emailTaken */])(userService)],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            address: ['']
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function (rf) {
        var _this = this;
        if (!rf.valid) {
            return false;
        }
        ;
        this.enableR = true;
        this.userService.registerUser(rf.value)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMsg.show('Register successfully! You are now can login', { cssClass: 'alert-success', timeout: 3000 });
                _this.route.navigate(['/login']);
            }
            else {
                _this.flashMsg.show('Something went Wrong!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.route.navigate(['/register']);
            }
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () {
            return this.registerForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () {
            return this.registerForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/pages/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/users/user-info/user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/users/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user_info\">\n    <h2 class=\"page-header\">{{user_info.name}}</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{user_info.username}}</li>\n      <li class=\"list-group-item\">email: {{user_info.email}}</li>\n    </ul>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/users/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserInfoComponent = (function () {
    function UserInfoComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.user_info = [];
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.userService.getUserInfor(params.get('user_id')); })
            .subscribe(function (data) {
            _this.user_info = data.user_info;
            _this.user_info = _this.user_info[0];
        });
    };
    return UserInfoComponent;
}());
UserInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'user-info',
        template: __webpack_require__("../../../../../src/app/components/pages/users/user-info/user-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/users/user-info/user-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], UserInfoComponent);

var _a, _b;
//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-online/user-online.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#user-online{\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n.card{\r\n    width:170px;\r\n}\r\n.card-body{ \r\n    height: 350px;\r\n    overflow: scroll;\r\n}\r\n\r\n.card-header{\r\n    cursor: pointer;\r\n    background-color: #0069D9;\r\n    color: white;\r\n    padding: 10px;\r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-online/user-online.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"user-online\">\n  <div class=\"card\">\n    <div class=\"card-header\" (click)=\"showTapChat()\"><h6>User Online</h6></div>\n      <div class=\"card-body\" [class.hide]=\"hide\">\n        <div id=\"user-online\">\n          <ul class=\"list-group\">\n              <li class=\"list-group-item\" style=\"cursor:pointer\" *ngFor=\"let user of usersOnline \">{{user}} <span class=\"badge badge-primary\">Online</span></li>            \n          </ul>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-online/user-online.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOnlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserOnlineComponent = (function () {
    function UserOnlineComponent() {
        this.hide = true;
        this.renderUserOnline = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserOnlineComponent.prototype.ngOnInit = function () {
        console.log('users online');
        console.log(this.usersOnline);
    };
    UserOnlineComponent.prototype.showTapChat = function () {
        this.hide = (this.hide) ? false : true;
        if (!this.hide) {
            this.renderUserOnline.emit({ key: 'render' });
        }
    };
    return UserOnlineComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('usersOnline'),
    __metadata("design:type", Object)
], UserOnlineComponent.prototype, "usersOnline", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('renderUserOnline'),
    __metadata("design:type", Object)
], UserOnlineComponent.prototype, "renderUserOnline", void 0);
UserOnlineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-online',
        template: __webpack_require__("../../../../../src/app/components/user-online/user-online.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-online/user-online.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserOnlineComponent);

//# sourceMappingURL=user-online.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/users/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getProfile()
            .subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/users/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/user.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGuard = (function () {
    function UserGuard(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserGuard.prototype.canActivate = function (next, state) {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        else {
            this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    return UserGuard;
}());
UserGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserGuard);

var _a, _b;
//# sourceMappingURL=user.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesService = (function () {
    function CategoriesService(http) {
        this.http = http;
    }
    CategoriesService.prototype.createCategory = function (newCategory) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/create/category', newCategory, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.getAllCategories = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/categories/all', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.getAllCategoryWithSpecificTopicId = function (topic_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/categories/' + topic_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.getContentCategory = function (category_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/categories/specific/' + category_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _a || Object])
], CategoriesService);

var _a;
//# sourceMappingURL=categories.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/main-topic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTopicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainTopicService = (function () {
    function MainTopicService(http) {
        this.http = http;
    }
    MainTopicService.prototype.getAllMainTopic = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/maintopics/all', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return MainTopicService;
}());
MainTopicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _a || Object])
], MainTopicService);

var _a;
//# sourceMappingURL=main-topic.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.createPost = function (newPost) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/create/post', newPost, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getAllPostsSpecificCategory = function (category_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/posts/' + category_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getPostContent = function (post_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/posts/specific/' + post_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return PostsService;
}());
PostsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _a || Object])
], PostsService);

var _a;
//# sourceMappingURL=posts.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = (function () {
    function SharedService() {
        this.username = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]("");
        this.login = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.currentUsername = this.username.asObservable();
        this.currentStatusLogin = this.login.asObservable();
    }
    SharedService.prototype.changeUsername = function (username) {
        this.username.next(username);
    };
    SharedService.prototype.checkUserOnLocal = function () {
        var user = JSON.parse(localStorage.getItem('Zero_user'));
        if (!user)
            return false;
        var loginName = user.name;
        this.changeUsername(loginName);
        this.loginStatus(true);
    };
    SharedService.prototype.loginStatus = function (login) {
        this.login.next(login);
    };
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.checkUsernameExist = function (username) {
        return this.http.get('http://localhost:3000/api/users/' + username)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.checkEmailExist = function (email) {
        return this.http.get('http://localhost:3000/api/users/' + email)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.registerUser = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/register', newUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/api/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getAllUser = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/api/users/all/' + username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.storeUserDate = function (token, user) {
        localStorage.setItem('Zero_token', token);
        localStorage.setItem('Zero_user', JSON.stringify(user));
        this.userToken = token;
        this.user = user;
    };
    UserService.prototype.getUserInfor = function (user_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/api/users/infos/' + user_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.loadToken = function () {
        var token = localStorage.getItem('Zero_token');
        this.userToken = token;
    };
    UserService.prototype.logout = function () {
        this.userToken = null;
        this.user = null;
        localStorage.removeItem('Zero_token');
        localStorage.removeItem('Zero_user');
    };
    UserService.prototype.isLoggedIn = function () {
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
        var token = localStorage.getItem('Zero_token');
        if (!token) {
            return false;
        }
        ;
        var expirationDate = jwtHelper.getTokenExpirationDate(token);
        var isExpired = jwtHelper.isTokenExpired(token);
        return !isExpired;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map