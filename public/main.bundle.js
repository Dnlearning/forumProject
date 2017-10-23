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
exports.push([module.i, ".content{\r\n    \r\n}\r\n\r\n.msg{\r\n    width:45%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n\r\n@media(max-width:1025px){\r\n    #loginform{\r\n        width: 40%;\r\n    }\r\n}\r\n@media(max-width:992px){\r\n    .msg{\r\n        width:60%;\r\n    }\r\n}\r\n\r\n@media(max-width:768px){\r\n    .msg{\r\n        width:80%;\r\n    }\r\n}\r\n\r\n@media(max-width:375px){\r\n    .msg{\r\n        width:100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar-top></navbar-top>\r\n<div class=\"content\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet ></router-outlet>\r\n</div>\r\n<chat [marginRight]=\"right\" [newMessage]=\"newMessage\" [username]=\"username\" (seen)=\"seen($event)\"  (sendMessage)=\"messageCome($event)\" [aMessage]=\"messages\" *ngIf=\"status\"></chat>\r\n<user-online [usersOnline]=\"usersInChat\" (renderUserOnline)=\"takeUsersOnline($event)\" *ngIf=\"status\"></user-online>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_check_out_paypal_service__ = __webpack_require__("../../../../../src/app/services/check-out-paypal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_check_out_stripe_service__ = __webpack_require__("../../../../../src/app/services/check-out-stripe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload_image_service__ = __webpack_require__("../../../../../src/app/services/upload-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_user_created_post_guard__ = __webpack_require__("../../../../../src/app/guards/user-created-post.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_pages_posts_posts_component__ = __webpack_require__("../../../../../src/app/components/pages/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_main_topic_service__ = __webpack_require__("../../../../../src/app/services/main-topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_user_guard__ = __webpack_require__("../../../../../src/app/guards/user.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_navbar_top_navbar_top_component__ = __webpack_require__("../../../../../src/app/components/navbar-top/navbar-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pages_home_home_component__ = __webpack_require__("../../../../../src/app/components/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_pages_register_register_component__ = __webpack_require__("../../../../../src/app/components/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_pages_login_login_component__ = __webpack_require__("../../../../../src/app/components/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_users_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_user_online_user_online_component__ = __webpack_require__("../../../../../src/app/components/user-online/user-online.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_pages_admin_dashboard_category_component__ = __webpack_require__("../../../../../src/app/components/pages/admin/dashboard/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_pages_home_main_topic_main_topic_component__ = __webpack_require__("../../../../../src/app/components/pages/home/main-topic/main-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_pages_home_main_topic_user_created_category_user_created_category_component__ = __webpack_require__("../../../../../src/app/components/pages/home/main-topic/user-created-category/user-created-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_pages_users_user_info_user_info_component__ = __webpack_require__("../../../../../src/app/components/pages/users/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_pages_admin_post_post_component__ = __webpack_require__("../../../../../src/app/components/pages/admin/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_pages_each_post_each_post_component__ = __webpack_require__("../../../../../src/app/components/pages/each-post/each-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_pages_admin_edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/components/pages/admin/edit-post/edit-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_pages_each_post_comments_comments_component__ = __webpack_require__("../../../../../src/app/components/pages/each-post/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_pages_shop_shop_component__ = __webpack_require__("../../../../../src/app/components/pages/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_pages_each_post_comments_edit_comment_edit_comment_component__ = __webpack_require__("../../../../../src/app/components/pages/each-post/comments/edit-comment/edit-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_pages_shop_product_product_component__ = __webpack_require__("../../../../../src/app/components/pages/shop/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_pages_shop_check_out_check_out_component__ = __webpack_require__("../../../../../src/app/components/pages/shop/check-out/check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_pages_shop_success_checkout_success_checkout_component__ = __webpack_require__("../../../../../src/app/components/pages/shop/success-checkout/success-checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_pages_posts_user_created_post_user_created_post_component__ = __webpack_require__("../../../../../src/app/components/pages/posts/user-created-post/user-created-post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































var Routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_18__components_pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register', component: __WEBPACK_IMPORTED_MODULE_19__components_pages_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_20__components_pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_24__components_users_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_user_guard__["a" /* UserGuard */]]
    },
    {
        path: 'create/admin', component: __WEBPACK_IMPORTED_MODULE_28__components_pages_admin_dashboard_category_component__["a" /* CategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_admin_guard__["a" /* AdminGuard */]]
    },
    {
        path: 'create/post/:category_id', component: __WEBPACK_IMPORTED_MODULE_32__components_pages_admin_post_post_component__["a" /* PostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_user_guard__["a" /* UserGuard */]]
    },
    {
        path: 'update/post/:post_id', component: __WEBPACK_IMPORTED_MODULE_35__components_pages_admin_edit_post_edit_post_component__["a" /* EditPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_user_created_post_guard__["a" /* UserCreatedPostGuard */]]
    },
    {
        path: 'categories/:category_id', component: __WEBPACK_IMPORTED_MODULE_7__components_pages_posts_posts_component__["a" /* PostsComponent */]
    },
    {
        path: 'user/info/:user_id', component: __WEBPACK_IMPORTED_MODULE_31__components_pages_users_user_info_user_info_component__["a" /* UserInfoComponent */]
    },
    {
        path: 'posts/:post_id', component: __WEBPACK_IMPORTED_MODULE_34__components_pages_each_post_each_post_component__["a" /* EachPostComponent */]
    },
    {
        path: 'shop', component: __WEBPACK_IMPORTED_MODULE_37__components_pages_shop_shop_component__["a" /* ShopComponent */]
    }, {
        path: 'product/checkout', component: __WEBPACK_IMPORTED_MODULE_41__components_pages_shop_check_out_check_out_component__["a" /* CheckOutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_user_guard__["a" /* UserGuard */]]
    }, {
        path: 'checkout/success', component: __WEBPACK_IMPORTED_MODULE_43__components_pages_shop_success_checkout_success_checkout_component__["a" /* SuccessCheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_user_guard__["a" /* UserGuard */]]
    },
    {
        path: "**", component: __WEBPACK_IMPORTED_MODULE_39__components_not_found_not_found_component__["a" /* NotFoundComponent */]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_14__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_navbar_top_navbar_top_component__["a" /* NavbarTopComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_pages_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_users_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_user_online_user_online_component__["a" /* UserOnlineComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_pages_admin_dashboard_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_pages_home_main_topic_main_topic_component__["a" /* MainTopicComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_pages_posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_pages_home_main_topic_user_created_category_user_created_category_component__["a" /* UserCreatedCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_pages_users_user_info_user_info_component__["a" /* UserInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_pages_admin_post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_pages_each_post_each_post_component__["a" /* EachPostComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_pages_admin_edit_post_edit_post_component__["a" /* EditPostComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_pages_each_post_comments_comments_component__["a" /* CommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_pages_shop_shop_component__["a" /* ShopComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_pages_each_post_comments_edit_comment_edit_comment_component__["a" /* EditCommentComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_pages_shop_product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_pages_shop_check_out_check_out_component__["a" /* CheckOutComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_pages_shop_success_checkout_success_checkout_component__["a" /* SuccessCheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_pages_posts_user_created_post_user_created_post_component__["a" /* UserCreatedPostComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_42__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_router__["c" /* RouterModule */].forRoot(Routes),
            __WEBPACK_IMPORTED_MODULE_21__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_21__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_27_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_33_ng2_ckeditor__["CKEditorModule"],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_check_out_paypal_service__["a" /* CheckOutPaypalService */], __WEBPACK_IMPORTED_MODULE_1__services_check_out_stripe_service__["a" /* CheckOutStripeService */], __WEBPACK_IMPORTED_MODULE_2__services_upload_image_service__["a" /* UploadImageService */], __WEBPACK_IMPORTED_MODULE_3__services_comments_service__["a" /* CommentsService */], __WEBPACK_IMPORTED_MODULE_4__guards_user_created_post_guard__["a" /* UserCreatedPostGuard */], __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__guards_user_guard__["a" /* UserGuard */], __WEBPACK_IMPORTED_MODULE_10__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_9__services_categories_service__["a" /* CategoriesService */], __WEBPACK_IMPORTED_MODULE_8__services_main_topic_service__["a" /* MainTopicService */], __WEBPACK_IMPORTED_MODULE_6__services_posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_5__guards_admin_guard__["a" /* AdminGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
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
exports.push([module.i, "#chat-box{\r\n    overflow-y: hidden;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n.card{\r\n    width:300px;\r\n    overflow: hidden;\r\n}\r\n.card-content{\r\n    height: 200px; \r\n    overflow-y: auto;\r\n}\r\n.card-header{\r\n    cursor: pointer;\r\n    background-color: #0069D9;\r\n    color: white;\r\n    padding: 10px;\r\n}\r\n\r\n.right{\r\n    text-align: right;\r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n.message{\r\n    float: left;\r\n    padding: 6px;\r\n    margin-bottom: 10px;\r\n    border: 1px solid gray;\r\n    box-shadow: 1px 1px black;\r\n    border-radius: 5px;\r\n    color: black;\r\n}\r\n.right{\r\n    float: right;\r\n    text-align: left;\r\n}\r\n.left{\r\n    float: left;\r\n    text-align: left;\r\n}\r\n.clearBoth{\r\n    clear: both;\r\n}\r\n.user{\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n.userLeft{\r\n    float: left;\r\n    color: red;\r\n    margin-bottom: 10px;\r\n}\r\n.card{\r\n    margin: 0;\r\n}\r\n.card-action{\r\n    padding: 0;\r\n}\r\n.card-action input{\r\n    margin: 0;\r\n    color: black;\r\n    padding: 10px;\r\n}\r\n\r\n::-webkit-input-placeholder { /* WebKit, Blink, Edge */\r\n    color:    gray;\r\n}\r\n:-moz-placeholder { /* Mozilla Firefox 4 to 18 */\r\n   color:    gray;\r\n   opacity:  1;\r\n}\r\n::-moz-placeholder { /* Mozilla Firefox 19+ */\r\n   color:    gray;\r\n   opacity:  1;\r\n}\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n   color:    gray;\r\n}\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n   color:    gray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chat-box\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" (click)=\"showTapChat()\"><h6>Forum <span *ngIf=\"newMessage && hide\" class=\"badge new lime accent-2 red-text\"></span></h6></div>\r\n    <div class=\"chat\" [class.hide]=\"hide\">\r\n      <div class=\"card-content\">\r\n        <div id=\"message-forum\">\r\n          <div class=\"chat-content\" *ngIf=\"messages\">\r\n            <div *ngFor=\"let message of messages\">\r\n              <div *ngIf=\"message.type=='msg'\" class=\"message\" [class.right]=\"message.username==username\">\r\n                  <span class=\"chip user\" [ngClass]=\"{'grey darken-1':message.username!=username,'teal lighten-1':message.username==username}\">{{message.username}} : </span> {{message.msg}}\r\n              </div>\r\n              <div *ngIf=\"message.type=='info'\" class=\"userLeft\">\r\n                  <span class=\"chip yellow darken-4\">{{message.username}} : </span> {{message.msg}}\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-action\">\r\n          <div class=\"input-group\" >\r\n            <input   type=\"text\" [(ngModel)]=\"msg\" name=\"msg\" class=\"form-control\" (keyup.enter)=\"sendMsg()\" placeholder=\"Type Message...\">\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
exports.push([module.i, ".logo{\r\n    width:45px;\r\n    position: relative;\r\n    top: 10px;\r\n}\r\n.nav-wrapper{\r\n    background-color: #212121;\r\n    padding: 0 20px;\r\n}\r\nnav{\r\n    height: 80px;\r\n    line-height: 80px;\r\n}\r\nnav li a{\r\n    font-size: 1.2rem;\r\n    color: gray;\r\n}\r\nnav ul li.active {\r\n\r\n    border-bottom: 2px solid white;\r\n}\r\nnav ul li.active a{\r\n    color: white;\r\n}\r\n\r\n@media only screen and (max-width: 992px){\r\n    nav .brand-logo {\r\n        left: 3%;\r\n        -webkit-transform: translateX(-0%);\r\n        transform: translateX(-0%); \r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar-top/navbar-top.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"nav-wrapper\">\r\n    <a routerLink=\"/\" class=\"brand-logo\"><img src=\"assets/images/logoZeroToZ.png\" class=\"logo\"  alt=\"\"></a>\r\n      <ul id=\"nav-mobile\" class=\"right\">\r\n        <li  class=\"nav-item\" routerLinkActive='active'><a routerLink=\"/shop\">Shop</a></li>    \r\n        <li *ngIf=\"userService.isLoggedIn()\" class=\"nav-item \" routerLinkActive='active'><a routerLink=\"/profile\">{{username}}</a></li>\r\n        <li *ngIf=\"userService.isAdmin()\" class=\"nav-item\" routerLinkActive='active'><a routerLink=\"/create/admin\">DashBoard</a></li>\r\n        <li *ngIf=\"userService.isLoggedIn()\" class=\"nav-item\" routerLinkActive='active'><a (click)=\"onLogoutClick()\">Logout</a></li>\r\n        <li *ngIf=\"!userService.isLoggedIn()\" class=\"nav-item\" routerLinkActive='active'><a routerLink=\"/login\">Login</a></li>\r\n        <li *ngIf=\"!userService.isLoggedIn()\" class=\"nav-item\" routerLinkActive='active'><a routerLink=\"/register\"s>Register</a></li>\r\n      </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar-top/navbar-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
        this.sharedSubscribe =
            __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].combineLatest([
                this.sharedService.currentUsername,
                this.sharedService.currentStatusLogin
            ])
                .subscribe(function (data) {
                _this.username = data[0];
                _this.status = Boolean(data[1]);
                console.log(data);
            });
        // this.sharedService.currentUsername.subscribe(username=>this.username=username);
        // this.sharedService.currentStatusLogin.subscribe(status=>this.status=status);
    };
    NavbarTopComponent.prototype.ngOnDestroy = function () {
        this.sharedSubscribe.unsubscribe();
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
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'navbar-top',
        template: __webpack_require__("../../../../../src/app/components/navbar-top/navbar-top.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar-top/navbar-top.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], NavbarTopComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar-top.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:80px;\">\r\n    <div class=\"card-panel red-text black darken-2 center\" style=\"border-radius:10px;box-shadow:0 0 20px white\">\r\n      <h1>Dont try to access something private!</h1>\r\n      <h4>I try to prevent some access!</h4>\r\n      <p>\r\n        <a routerLink=\"/\" class=\"btn large white black-text\">Go Back</a>\r\n      </p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/components/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/dashboard/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category{\r\n    height: 80vh;\r\n}\r\n.col-md-6{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    height: 80vh;\r\n    background-color: rgb(61, 68, 81);\r\n    border-right: 1px solid gray;  \r\n    color: white;\r\n    text-align: center;\r\n}\r\n.content h1{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.content h5{\r\n    width: 70%;\r\n    font-size: 15px;\r\n    margin: 15px auto 0;\r\n}\r\n.content a{\r\n    margin-top: 15px;\r\n}\r\n.form{\r\n    text-align: left;\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    box-shadow: 0 0 5px  gray;\r\n}\r\n.select{\r\n    padding: 0.4rem 0.75rem;\r\n    border-radius: 0.25rem;\r\n    width:100%;\r\n}\r\n.dashboard{\r\n    width:100%;\r\n    height: 100%;\r\n    position: fixed;\r\n}\r\n.sideMenu{\r\n    height: 100%;\r\n    background-color: #433D3D; \r\n}\r\n.sideMenu .control{\r\n    font-size: 25px;\r\n    padding-left: 10px;\r\n}\r\n.control p a{\r\n    color:gray;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    border-bottom: 1px solid gray;\r\n}\r\n.active{\r\n    color: white !important;\r\n}\r\n.filter{\r\n    color: black;\r\n    font-size: 1.25rem;\r\n}\r\n.card-action{\r\n    color: black;\r\n    font-size: 1.25rem;\r\n}\r\nselect{\r\n    color: black;\r\n}\r\nlabel{\r\n    font-size: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.form-group{\r\n    padding:10px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/dashboard/category.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row dashboard\">\r\n  <div class=\"col s3 sideMenu valign-wrapper\">\r\n    <div class=\"control\">\r\n      <p><a [class.active]=\"switch=='user'\" (click)=\"switch='user'\">Add/Change Admin User</a></p>\r\n      <p><a [class.active]=\"switch=='create'\" (click)=\"switch='create'\">Create Maintopic/Category</a></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col s9\" style=\"padding:50px;\">\r\n      <div *ngIf=\"switch=='user'\">\r\n        <div>\r\n          <span class=\"card-panel white-text grey darken-3 center\" style=\"width:40%; font-size:1.25rem; border-radius:10px; box-shadow:0 0 20px;\">Only User Admin can access this route</span> \r\n          <span class=\"filter\" style=\"float:right\">\r\n            <select class=\"browser-default\" #selected (change)=\"getFilterValue(selected.value)\">\r\n              <option value=\"\" disabled>Choose Username</option>\r\n              <option *ngFor=\"let user of allUsers\" [value]=\"user._id\">{{user.username}}</option>\r\n            </select>\r\n          </span>\r\n        </div>\r\n        <div *ngIf=\"showInfo\" class=\"content\" style=\"clear:both; margin-top:100px\">\r\n          <div class=\"col s4 offset-s2\">\r\n            <div class=\"card\">\r\n              <div class=\"card-image\">\r\n                <img src=\"assets/images/pro1.png\">\r\n                <span class=\"card-title\">{{userInfo.username}}</span>\r\n              </div>\r\n              <div class=\"card-action\">\r\n                <p>Name: {{userInfo.username}}</p>\r\n                <p>Created: {{userInfo.created_date}}</p>\r\n              </div>\r\n            </div>\r\n          </div> \r\n          <div class=\"col s5 offset-s1\">\r\n            <div class=\"desc\">\r\n              <p><strong>Posts:</strong> Later</p>\r\n              <p><strong>Comments:</strong> Later</p>\r\n              <p><strong>Rate(*):</strong> Later</p>\r\n              <p><strong>Roles:</strong> <span class=\"chip blue\" *ngFor=\"let role of userInfo.roles\"> {{role}} </span> </p>\r\n              <button *ngIf=\"!userInfo.roles.includes('admin')\" class=\"btn blue darken-3\" style=\"margin-top:20px;\" (click)=\"setAdmin()\">Set Admin</button>\r\n              <button *ngIf=\"userInfo.roles.includes('admin')\" class=\"btn red darken-3\" style=\"margin-top:20px;\" (click)=\"removeAdmin()\">Remove Admin</button>\r\n            </div>\r\n          </div> \r\n        </div>  \r\n      </div>\r\n      <div *ngIf=\"switch=='create'\">\r\n        <div>\r\n          <span class=\"card-panel white-text grey darken-3 center\" style=\"width:40%; font-size:1.25rem; border-radius:10px; box-shadow:0 0 20px;\">Only User Admin can access this route</span> \r\n        </div>\r\n        <div class=\"content\" style=\"clear:both; margin-top:100px\">\r\n            <div class=\"col s4 offset-s2\">\r\n                <h4>Create Main Topic</h4>\r\n                <form [formGroup]=\"createMaintopicForm\" (ngSubmit)=\"createMainTopic(createMaintopicForm)\">\r\n                  \r\n                    <div class=\"form-group\">\r\n                      <label for=\"exampleInputPassword1\">Main Topic</label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"maintopic\" placeholder=\"Maintopic Name..\">\r\n                      <div class=\"alert alert-danger\" *ngIf=\"maintopic.errors && maintopic.touched\">\r\n                        <div *ngIf=\"maintopic.errors.required\">Maintopic Name is Required.</div>\r\n                      </div>\r\n                    </div>\r\n                    <button type=\"submit\" [disabled]=\"createMaintopicForm.invalid\" class=\"btn\">Submit</button>\r\n                  </form>\r\n            </div> \r\n            <div class=\"col s4 offset-s1\">\r\n              <h4>Create Category</h4>\r\n              <form [formGroup]=\"createCategoryForm\" (ngSubmit)=\"createCategory(createCategoryForm)\">\r\n                  <div class=\"form-group selectForm\">\r\n                    <label for=\"exampleInputEmail1\">Main Topic</label>\r\n                    <select class=\"browser-default\" style=\"display:block\" formControlName=\"topic_id\" >\r\n                      <option value=\"\" disabled>Choose Maintopic Name</option>\r\n                      <option *ngFor=\"let topic of mainTopics\" [value]=\"topic._id\">{{topic.topic}}</option>\r\n                    </select>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"topic_id.errors && topic_id.touched\">\r\n                      <div *ngIf=\"topic_id.errors.required\">Main Topic is Required.</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputPassword1\">Category Name</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"category\" placeholder=\"Category Name..\">\r\n                    <div class=\"alert alert-danger\" *ngIf=\"category.errors && category.touched\">\r\n                      <div *ngIf=\"category.errors.required\">Category Name is Required.</div>\r\n                    </div>\r\n                  </div>\r\n                  <button type=\"submit\" [disabled]=\"createCategoryForm.invalid\" class=\"btn btn-primary\">Submit</button>\r\n                </form>\r\n            </div> \r\n          </div>  \r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/dashboard/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_main_topic_service__ = __webpack_require__("../../../../../src/app/services/main-topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__);
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
    function CategoryComponent(fb, categoryService, userService, maintopicService, flashMsg, route) {
        this.categoryService = categoryService;
        this.userService = userService;
        this.maintopicService = maintopicService;
        this.flashMsg = flashMsg;
        this.route = route;
        this.mainTopics = [];
        this.switch = 'user';
        this.allUsers = [];
        this.selectedIndex = 0;
        this.userInfo = {};
        this.showInfo = false;
        this.selectedUser_id = '';
        this.createCategoryForm = fb.group({
            topic_id: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]
        });
        this.createMaintopicForm = fb.group({
            maintopic: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]
        });
    }
    CategoryComponent.prototype.createMainTopic = function (cm) {
        var _this = this;
        var user_id = JSON.parse(localStorage.getItem('Zero_user')).id;
        if (!user_id) {
            return false;
        }
        var newMaintopic = {
            topic: cm.value.maintopic,
            create_user: user_id
        };
        this.createMaintopicSubscription = this.maintopicService.createMaintopic(newMaintopic).subscribe(function (data) {
            if (data.success) {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.createCategoryForm.reset();
        });
    };
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
        this.createCategorySubscription = this.categoryService.createCategory(newCategory).subscribe(function (data) {
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
        var username = JSON.parse(localStorage.getItem('Zero_user')).username;
        this.infosSubscription = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].combineLatest([
            this.maintopicService.getAllMainTopic(),
            this.userService.getAllUser(username),
        ])
            .subscribe(function (data) {
            _this.mainTopics = data[0].topics;
            _this.allUsers = data[1];
        });
    };
    CategoryComponent.prototype.ngOnDestroy = function () {
        this.infosSubscription.unsubscribe();
        if (this.createMaintopicSubscription) {
            this.createMaintopicSubscription.unsubscribe();
        }
        if (this.createCategorySubscription) {
            this.createCategorySubscription.unsubscribe();
        }
        if (this.changeInfoSubscription) {
            this.changeInfoSubscription.unsubscribe();
        }
    };
    Object.defineProperty(CategoryComponent.prototype, "maintopic", {
        get: function () {
            return this.createMaintopicForm.get('maintopic');
        },
        enumerable: true,
        configurable: true
    });
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
    CategoryComponent.prototype.getFilterValue = function (user_id) {
        this.selectedUser_id = user_id;
        var idArray = this.allUsers.map(function (user) { return user._id; });
        this.selectedIndex = idArray.indexOf(user_id);
        this.userInfo = this.allUsers[this.selectedIndex];
        this.showInfo = true;
    };
    CategoryComponent.prototype.setAdmin = function () {
        var _this = this;
        this.allUsers[this.selectedIndex].roles = ["user", "admin"];
        this.userInfo = this.allUsers[this.selectedIndex];
        this.changeInfoSubscription = this.userService.updateUserInfo(this.selectedUser_id, { roles: ["user", "admin"] })
            .subscribe(function (data) {
        }, function (err) {
            _this.allUsers[_this.selectedIndex].roles = ["user"];
            _this.userInfo = _this.allUsers[_this.selectedIndex];
        });
    };
    CategoryComponent.prototype.removeAdmin = function () {
        var _this = this;
        this.allUsers[this.selectedIndex].roles = ["user"];
        this.userInfo = this.allUsers[this.selectedIndex];
        this.userService.updateUserInfo(this.selectedUser_id, { roles: ["user"] })
            .subscribe(function (data) {
        }, function (err) {
            _this.allUsers[_this.selectedIndex].roles = ["user", "admin"];
            _this.userInfo = _this.allUsers[_this.selectedIndex];
        });
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/components/pages/admin/dashboard/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/admin/dashboard/category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_categories_service__["a" /* CategoriesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_main_topic_service__["a" /* MainTopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_main_topic_service__["a" /* MainTopicService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object])
], CategoryComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/edit-post/edit-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category{\r\n    height: 80vh;\r\n}\r\n.col-md-6{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    height: 80vh;\r\n    background-color: rgb(61, 68, 81);\r\n    border-right: 1px solid gray;  \r\n    color: white;\r\n    text-align: center;\r\n}\r\n.content h1{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.content h5{\r\n    width: 70%;\r\n    font-size: 15px;\r\n    margin: 15px auto 0;\r\n}\r\n.content a{\r\n    margin-top: 15px;\r\n}\r\n.form{\r\n    text-align: left;\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    box-shadow: 0 0 5px  gray;\r\n}\r\n.select{\r\n    padding: 0.4rem 0.75rem;\r\n    border-radius: 0.25rem;\r\n    width:100%;\r\n}\r\n\r\nlabel {\r\n    font-size: 1.3rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/edit-post/edit-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:80px\">\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleInputPassword1\">Title Post</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"titlePost\" placeholder=\"Your Name...\">\r\n  </div>\r\n\r\n  <ckeditor\r\n  [(ngModel)]=\"ckeditorContent\">\r\n    <ckbutton [name]=\"'saveButton'\"\r\n      [command]=\"'saveCmd'\"\r\n      (click)=\"save($event)\"\r\n      [icon]=\"'save.png'\"\r\n      [label]=\"'Save Document'\"\r\n      [toolbar]=\"'clipboard,1'\">\r\n    </ckbutton>\r\n  </ckeditor>\r\n  <button class=\"btn\" style=\"margin-top:40px;\" (click)=\"updatePost()\">Save</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/edit-post/edit-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
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





var EditPostComponent = (function () {
    function EditPostComponent(flashMessage, postsService, route, router) {
        this.flashMessage = flashMessage;
        this.postsService = postsService;
        this.route = route;
        this.router = router;
        this.ckeditorContent = '';
        this.titlePost = '';
        this.postId = '';
        this.author_id = '';
        this.category_id = '';
        this.ckeditorContent = "<p>My HTML</p>";
    }
    EditPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.postsService.getPostContent(params.get('post_id')); })
            .subscribe(function (data) {
            _this.postId = data.post._id;
            _this.titlePost = data.post.title;
            _this.ckeditorContent = data.post.body;
            _this.author_id = data.post.author_id;
            _this.category_id = data.post.category_id;
        }, function (err) { return console.log(err); });
    };
    EditPostComponent.prototype.ngOnDestroy = function () {
        if (this.postSubscription) {
            this.postSubscription.unsubscribe();
        }
    };
    EditPostComponent.prototype.updatePost = function () {
        var _this = this;
        if (!this.titlePost || !this.ckeditorContent) {
            this.flashMessage.show('pls fill all fields!' + this.titlePost, { cssClass: 'alert alert-success', timeout: 2000 });
            return false;
        }
        var newPost = {
            title: this.titlePost,
            body: this.ckeditorContent,
            author_id: this.author_id,
            category_id: this.category_id
        };
        // console.log(this.postId);
        this.postSubscription = this.postsService.updatePost(this.postId, newPost).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('updated Post ' + _this.titlePost, { cssClass: 'alert alert-success', timeout: 2000 });
                _this.router.navigate(['/categories/' + _this.category_id]);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert alert-danger', timeout: 2000 });
                return false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    return EditPostComponent;
}());
EditPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'edit-post',
        template: __webpack_require__("../../../../../src/app/components/pages/admin/edit-post/edit-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/admin/edit-post/edit-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object])
], EditPostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category{\r\n    height: 80vh;\r\n}\r\n.col-md-6{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    height: 80vh;\r\n    background-color: rgb(61, 68, 81);\r\n    border-right: 1px solid gray;  \r\n    color: white;\r\n    text-align: center;\r\n}\r\n.content h1{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.content h5{\r\n    width: 70%;\r\n    font-size: 15px;\r\n    margin: 15px auto 0;\r\n}\r\n.content a{\r\n    margin-top: 15px;\r\n}\r\n.form{\r\n    text-align: left;\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    box-shadow: 0 0 5px  gray;\r\n}\r\n.select{\r\n    padding: 0.4rem 0.75rem;\r\n    border-radius: 0.25rem;\r\n    width:100%;\r\n}\r\n\r\nlabel{\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n}\r\n.cke_editable{\r\n    font-size: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/admin/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1><strong>Category Name:</strong> {{category.category}}</h1>\r\n  \r\n  <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Title Post</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"titlePost\" placeholder=\"Your Post Name...\">\r\n  </div>\r\n  \r\n  \r\n  \r\n  <ckeditor\r\n  [(ngModel)]=\"ckeditorContent\">\r\n    <ckbutton [name]=\"'saveButton'\"\r\n      [command]=\"'saveCmd'\"\r\n      (click)=\"save($event)\"\r\n      [icon]=\"'save.png'\"\r\n      [label]=\"'Save Document'\"\r\n      [toolbar]=\"'clipboard,1'\">\r\n    </ckbutton>\r\n  </ckeditor>\r\n  \r\n  <button class=\"btn\" style=\"margin-top:20px;\" (click)=\"createPost()\">Submit</button>\r\n</div>\r\n\r\n"

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
            .switchMap(function (params) {
            _this.categoryId = params.get('category_id');
            return _this.categoryService.getContentCategory(_this.categoryId);
        })
            .subscribe(function (data) {
            if (data.success) {
                _this.category = data.category;
            }
        }, function (err) { return console.log(err); });
    };
    PostComponent.prototype.ngOnDestroy = function () {
        if (this.createPostSubscription) {
            this.createPostSubscription.unsubscribe();
        }
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
        this.createPostSubscription = this.postsService.createPost(newPost).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Created Post Successfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.titlePost = '';
                _this.ckeditorContent = '';
                _this.router.navigate(['/categories/' + _this.categoryId]);
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

/***/ "../../../../../src/app/components/pages/each-post/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".media-name{\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: #333;\r\n    color: white;\r\n    margin: 10px;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.post{\r\n    padding-bottom: 100px;\r\n}\r\n.signup{\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n    display: inline-block;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px gray;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"post\">\r\n    <p class=\"lead signup\" *ngIf=\"!userService.isLoggedIn()\">be the user to leave comment <a class=\"btn btn-sm btn-primary\" routerLink=\"/register\">Sign Up</a></p>\r\n    <h3 class=\"mt-4 mb-4\" *ngIf=\"comments.length!=0\">Comments: </h3>\r\n    <pagination-controls *ngIf=\"comments.length!=0\" class=\"text-left mt-4 mb-4\" (pageChange)=\"p = $event\"></pagination-controls>\r\n    <ul class=\"list-unstyled\" *ngIf=\"comments\">\r\n      <li *ngFor=\"let comment of comments | paginate : {itemsPerPage: itemsPerPage, currentPage: p}\" class=\"media\">\r\n        <div class=\"row valign-wrapper\">\r\n          <div class=\"col s2\">\r\n            <div class=\"chip\">\r\n              <img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png\" alt=\"Contact Person\">\r\n              {{comment.userComment}}\r\n            </div>\r\n          </div>\r\n          <div class=\"col s7\">\r\n            <h6 class=\"mt-0 mb-1\">{{comment.body}}</h6>\r\n            <strong style=\"font-size:12px; color:gray\"><i>Created date: {{comment.created_date}} </i></strong> \r\n          </div>\r\n          <div class=\"col s3\">\r\n            <button class=\"btn\" *ngIf=\"userService.isUserCreatedComment(comment.userComment)\" (click)=\"editComment(comment)\">Edit</button>\r\n            <button class=\"btn red darken-1\" *ngIf=\"userService.isAdmin() || userService.isUserCreatedComment(comment.userComment)\" (click)=\"deleteComment(comment)\">Delete</button>  \r\n          </div>\r\n        </div>\r\n      </li>\r\n      <edit-comment *ngIf=\"showEdit\" [index]=\"indexCommentEdit\" (update)=\"updateComment($event)\" [comment]=\"commentEdit\"></edit-comment>              \r\n    </ul>\r\n    <button class=\"btn btn-primary\" (click)=\"showFormComment()\" *ngIf=\"userService.isLoggedIn()\" style=\"cursor:pointer\">Leave Comment</button>\r\n    <div *ngIf=\"show\" style=\"margin-top:30px;\">\r\n      <div class=\"form-group\">\r\n        <textarea required class=\"form-control\" [(ngModel)]=\"comment\" aria-describedby=\"emailHelp\" placeholder=\"leave comment..\"></textarea>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"leaveComment()\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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






var CommentsComponent = (function () {
    function CommentsComponent(userService, commentService, route, flashMessage, router) {
        this.userService = userService;
        this.commentService = commentService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.router = router;
        this.show = false;
        this.comment = '';
        this.comments = [];
        this.indexCommentEdit = 0;
        this.postId = '';
        this.showEdit = false;
        this.p = 1;
        this.commentEdit = [];
        this.itemsPerPage = 5;
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsPerPage = 5;
        this.route.paramMap
            .switchMap(function (params) {
            _this.postId = params.get('post_id');
            return _this.commentService.getAllCommentsWithSpecificPostId(_this.postId);
        })
            .subscribe(function (data) {
            if (data.success) {
                _this.comments = data.comments;
            }
        }, function (err) {
            console.log(err);
        });
    };
    CommentsComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        this.showEdit = false;
        var index = this.comments.indexOf(comment);
        this.comments.splice(index, 1);
        this.commentService.deleteComment(comment._id).subscribe(null, function (error) {
            console.log(error);
            _this.comments.splice(index, 0, comment);
        });
    };
    CommentsComponent.prototype.editComment = function (comment) {
        this.commentEdit = comment;
        this.indexCommentEdit = this.comments.indexOf(comment);
        this.showEdit = (this.showEdit) ? false : true;
    };
    CommentsComponent.prototype.showFormComment = function () {
        this.show = (this.show) ? false : true;
        this.showEdit = false;
    };
    CommentsComponent.prototype.updateComment = function (data) {
        if (data.cancel) {
            this.comments[data.index] = data.content;
            this.showEdit = false;
            return false;
        }
        var comment_id = data.content._id;
        var newComment = {
            body: data.content.body
        };
        this.comments[data.index] = data.content;
        this.commentService.updateComment(comment_id, newComment).subscribe(function (data) {
            console.log(data);
        });
        this.showEdit = false;
    };
    CommentsComponent.prototype.leaveComment = function () {
        var _this = this;
        if (!this.userService.isLoggedIn()) {
            return false;
        }
        this.showEdit = false;
        var user = JSON.parse(localStorage.getItem('Zero_user'));
        var author_id = user.id;
        var username = user.username;
        var newComment = {
            body: this.comment,
            author_id: author_id,
            post_id: this.postId,
            userComment: username
        };
        this.commentService.createComment(newComment).subscribe(function (data) {
            if (data.success) {
                _this.comments.unshift(data.comment);
            }
        });
        this.comment = '';
        this.show = false;
    };
    return CommentsComponent;
}());
CommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'comments',
        template: __webpack_require__("../../../../../src/app/components/pages/each-post/comments/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/each-post/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_comments_service__["a" /* CommentsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], CommentsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/comments/edit-comment/edit-comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/comments/edit-comment/edit-comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"editComment\">\r\n  <div class=\"form-group\">\r\n    <textarea required class=\"form-control\" [(ngModel)]=\"newbody\" aria-describedby=\"emailHelp\" placeholder=\"leave comment..\"></textarea>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"updateComment()\">Save</button>\r\n  <button type=\"submit\" class=\"btn btn-secondary btn-sm\" (click)=\"cancel()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/comments/edit-comment/edit-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCommentComponent; });
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

var EditCommentComponent = (function () {
    function EditCommentComponent() {
        this.editComment = [];
        this.indexCommentEdit = 0;
        this.changeComment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.newbody = '';
    }
    EditCommentComponent.prototype.ngOnInit = function () {
        console.log(this.indexCommentEdit);
        this.newbody = this.editComment['body'];
    };
    EditCommentComponent.prototype.updateComment = function () {
        this.editComment['body'] = this.newbody;
        this.changeComment.emit({ cancel: false, index: this.indexCommentEdit, content: this.editComment });
        this.editComment = [];
    };
    EditCommentComponent.prototype.cancel = function () {
        this.changeComment.emit({ cancel: true, index: this.indexCommentEdit, content: this.editComment });
    };
    return EditCommentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('comment'),
    __metadata("design:type", Object)
], EditCommentComponent.prototype, "editComment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('index'),
    __metadata("design:type", Number)
], EditCommentComponent.prototype, "indexCommentEdit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('update'),
    __metadata("design:type", Object)
], EditCommentComponent.prototype, "changeComment", void 0);
EditCommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-comment',
        template: __webpack_require__("../../../../../src/app/components/pages/each-post/comments/edit-comment/edit-comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/each-post/comments/edit-comment/edit-comment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditCommentComponent);

//# sourceMappingURL=edit-comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/each-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\r\n    width: 100%;\r\n}\r\n.breadcrumb:before{\r\n    font-size: 1.25rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/each-post.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\" style=\"margin-top:80px\">\r\n  <div class=\"nav-wrapper center\">\r\n    <div class=\"col s12\">\r\n      <a routerLink='/' class=\"breadcrumb\">Forum</a>\r\n      <a [routerLink]=\"['/categories',post.category_id]\" class=\"breadcrumb\">{{categoryName}}</a>\r\n      <a routerLink='/' class=\"breadcrumb\">{{post.title}}</a>\r\n    </div>\r\n  </div>\r\n  <button *ngIf=\"userService.isUserCreatedPost(post['author_id'])\" type=\"button\" class=\"btn teal darken-3\" (click)=\"editPost(post._id)\" >Edit</button>\r\n  <button *ngIf=\"userService.isAdmin()\" type=\"button\" class=\"btn red darken-1\" (click)=\"deletePost(post._id)\">Delete</button>\r\n  <h2 class=\"page-header\">{{post.title}}</h2>\r\n  <div id=\"body-post\">\r\n    \r\n  </div>\r\n  <div class=\"time-created\">\r\n    <p><strong><i><u>Time Created:</u></i> </strong>{{post.created_date}}</p>\r\n    <p><strong><i><u>Author:</u></i> </strong> <span class=\"chip pink lighten-2 center\">{{author}}</span></p>\r\n  </div>\r\n</div>\r\n<comments></comments>"

/***/ }),

/***/ "../../../../../src/app/components/pages/each-post/each-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EachPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
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
    function EachPostComponent(route, postService, flashMessage, userService, router, categoryService) {
        this.route = route;
        this.postService = postService;
        this.flashMessage = flashMessage;
        this.userService = userService;
        this.router = router;
        this.categoryService = categoryService;
        this.post = {};
        this.post_id = '';
        this.author = '';
        this.categoryName = '';
    }
    EachPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            _this.post_id = params.get('post_id');
            return _this.postService.getPostContent(_this.post_id);
        })
            .subscribe(function (data) {
            if (data.success) {
                _this.post = data.post;
                // console.log(this.post);
                document.getElementById('body-post').innerHTML = data.post.body;
                _this.userSubscription = _this.userService.getUserInfor(_this.post['author_id']).subscribe(function (data) {
                    _this.author = data.user_info.username;
                });
                _this.categorySubscription = _this.categoryService.getContentCategory(_this.post['category_id']).subscribe(function (data) {
                    _this.categoryName = data.category.category;
                    // console.log(data);
                });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }, function (err) { return console.log(err); });
    };
    EachPostComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
        this.categorySubscription.unsubscribe();
        if (this.postSubscription) {
            this.postSubscription.unsubscribe();
        }
    };
    EachPostComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.postSubscription = this.postService.deletePost(id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg + " " + _this.post['title'], { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/categories/' + _this.post['category_id']]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    EachPostComponent.prototype.editPost = function (id) {
        this.router.navigate(['/update/post/' + id]);
    };
    return EachPostComponent;
}());
EachPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-each-post',
        template: __webpack_require__("../../../../../src/app/components/pages/each-post/each-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/each-post/each-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */]) === "function" && _f || Object])
], EachPostComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=each-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    padding-top: 3.5rem;\r\n    overflow-y: hidden;\r\n    font-size: 1rem;\r\n}\r\n\r\n.header{\r\n    background-color: rgb(128, 157, 204);\r\n    padding: 10px 16px;\r\n    color: white;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.filter{\r\n    float: right;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.col-sm-2{\r\n    margin-top: 52px;\r\n}\r\n\r\n.news{\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px black;\r\n    padding: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n.row .col.s6{\r\n    left: 25%;\r\n}\r\n.card-panel{\r\n    border-radius: 10px;\r\n    background-color: #433D3D;\r\n    color: #A7A7A7; \r\n}\r\n.userInfo{\r\n    padding-top: 50px;\r\n}\r\n\r\n.userInfo .header{\r\n    width: 100%;\r\n    background-color: #433D3D;\r\n    color: gray;\r\n    font-size: 2rem;\r\n}\r\n\r\n.userList li{\r\n    border-bottom: 1px solid gray;\r\n    width: 80%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.tabs.tabs-fixed-width {\r\n    background-color: #433D3D;\r\n}\r\n.tabs.tabs-fixed-width a{\r\n    color: gray;\r\n}\r\n\r\n.tab a.active {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    border-bottom: 2px solid #f6b2b5;\r\n    color: white;\r\n}\r\n.text-left{\r\n    text-align: left;\r\n    font-size: 18px;\r\n}\r\n\r\n.main-topic{\r\n    padding-top: 50px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container news\" *ngIf=\"allUsers\">\r\n  <div class=\"\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <div class=\"header\">\r\n          New users\r\n        </div>\r\n        <div class=\"users\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\" *ngFor=\"let user of allUsers | paginate : {itemsPerPage: itemsPerPage, currentPage: p}\"><a [routerLink]=\"['/user/info',user._id]\">{{user.username}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-10\">\r\n        <div class=\"header\">\r\n          News\r\n          <span class=\"filter\">\r\n            <select #selected (change)=\"getFilterValue(selected.value)\">\r\n              <option>5</option>\r\n              <option>10</option>\r\n              <option>15</option>\r\n            </select>\r\n          </span>\r\n        </div>\r\n        <div class=\"newpost mt-1\">\r\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"...\">\r\n            <button class=\"btn btn-primary\" (click)=\"mode='posts'\">New Post</button>\r\n            <button class=\"btn btn-secondary\" (click)=\"mode='category'\">New Category</button>\r\n            <button class=\"btn btn-success\" (click)=\"mode='views'\">Highest Views Post</button>\r\n          </div>\r\n            <div *ngIf=\"mode=='posts'\">\r\n              <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngFor=\"let post of posts | paginate : {itemsPerPage: itemsPerPage, currentPage: p}; let i =index\">\r\n                  <a [routerLink]=\"['/posts',post._id]\">{{i+1}}. {{post.title}}</a>\r\n                  <user-created-category style=\"float:right\" [createUser]=\"post.author_id\"></user-created-category>\r\n                </li>\r\n                \r\n              </ul>\r\n            </div>\r\n            <div *ngIf=\"mode=='category'\">\r\n              <ul class=\"list-group\">\r\n                  <li class=\"list-group-item\" *ngFor=\"let category of categories | paginate : {itemsPerPage: itemsPerPage, currentPage: p}; let i =index\">\r\n                      <a [routerLink]=\"['/categories',category._id]\">{{i+1}}. {{category.category}}</a>\r\n                      <user-created-category style=\"float:right\" [createUser]=\"category.create_user\"></user-created-category>\r\n                    </li>\r\n              </ul>\r\n            </div>\r\n            <div *ngIf=\"mode=='views'\">\r\n              <ul class=\"list-group\">\r\n                  <li class=\"list-group-item\" *ngFor=\"let highestView of highestViewsPost | paginate : {itemsPerPage: itemsPerPage, currentPage: p}; let i =index\">\r\n                    <div class=\"post\" style=\"float:left\">\r\n                        <a [routerLink]=\"['/posts',highestView._id]\">{{i+1}}. {{highestView.title}}</a>\r\n                        <p>Views: {{highestView.views}}</p>\r\n                    </div>  \r\n                    <user-created-category style=\"float:right\" [createUser]=\"highestView.author_id\"></user-created-category>\r\n                    </li>\r\n              </ul>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"container center\" style=\"margin-top:80px;\">\r\n    <div class=\"card-panel welcome\">\r\n      <h2>Welcome to My Forum Page!</h2>\r\n      <h5>Member can see more information!</h5>\r\n    </div>    \r\n\r\n    <div class=\"userInfo\" *ngIf=\"userService.isLoggedIn()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s4\">\r\n          <div class=\"header\">New User</div>            \r\n          <ul class=\"userList\">\r\n            <li *ngFor=\"let user of allUsers | paginate : {itemsPerPage: itemsPerPage, currentPage: p}\"><a [routerLink]=\"['/user/info',user._id]\"><strong class=\"pink-text\" ><i>{{user.username}}</i></strong></a> <i style=\"float:right\">{{user.created_date}}</i></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col s8\">\r\n          <div class=\"header\">\r\n            Play Some Filter News!\r\n            \r\n           <span class=\"filter\">\r\n             <select class=\"browser-default\" #selected (change)=\"getFilterValue(selected.value)\">\r\n               <option value=\"5\">5</option>\r\n               <option value=\"10\">10</option>\r\n               <option value=\"15\">15</option>\r\n             </select>\r\n           </span>\r\n            \r\n          </div>\r\n          <ul class=\"tabs tabs-fixed-width\">\r\n            <li class=\"tab\"><a (click)=\"mode='newpost'\" [class.active]=\"mode=='newpost'\" >New Post</a></li>\r\n            <li class=\"tab\"><a (click)=\"mode='newcategory'\" [class.active]=\"mode=='newcategory'\">New Category</a></li>\r\n            <li class=\"tab\"><a (click)=\"mode='highestview'\" [class.active]=\"mode=='highestview'\">Highest Views</a></li>\r\n          </ul>\r\n          <div *ngIf=\"mode=='newpost'\">\r\n            <ul class=\"userList\">\r\n              <li *ngFor=\"let post of posts | paginate : {itemsPerPage: itemsPerPage, currentPage: p}; let i =index\" class=\"text-left\">\r\n                <a [routerLink]=\"['/posts',post._id]\"><strong class=\"pink-text\" ><i>{{i+1}}. {{post.title}}</i></strong></a> \r\n                <user-created-category style=\"float:right\" [createUser]=\"post.author_id\"></user-created-category>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div *ngIf=\"mode=='newcategory'\">\r\n            <ul class=\"userList\">\r\n              <li *ngFor=\"let category of categories | paginate : {itemsPerPage: itemsPerPage, currentPage: p}; let i =index\" class=\"text-left\">\r\n                <a [routerLink]=\"['/categories',category._id]\"><strong class=\"pink-text\" ><i>{{i+1}}. {{category.category}}</i></strong></a> \r\n                <user-created-category style=\"float:right\" [createUser]=\"category.create_user\"></user-created-category>\r\n              </li>            \r\n            </ul>\r\n          </div>\r\n          <div *ngIf=\"mode=='highestview'\">\r\n            <ul class=\"userList\">\r\n              <li *ngFor=\"let highestView of highestViewsPost | paginate : {itemsPerPage: itemsPerPage, currentPage: p}; let i =index\" class=\"text-left\">\r\n                <a [routerLink]=\"['/posts',highestView._id]\"><strong class=\"pink-text\" ><i>{{i+1}}. {{highestView.title}}</i></strong> <i style=\"font-size:13px\"> Views: <Strong>{{highestView.views}} </Strong></i></a> \r\n                <user-created-category style=\"float:right\" [createUser]=\"highestView.author_id\"></user-created-category>\r\n              </li>            \r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"main-topic\">\r\n      <main-topic *ngFor=\"let topic of maintopics\" [topic]=\"topic\"></main-topic>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_topic_service__ = __webpack_require__("../../../../../src/app/services/main-topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest__);
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
    function HomeComponent(userService, mainTopicService, categoryService, postsService) {
        this.userService = userService;
        this.mainTopicService = mainTopicService;
        this.categoryService = categoryService;
        this.postsService = postsService;
        this.p = 1;
        this.itemsPerPage = 5;
        this.categories = [];
        this.posts = [];
        this.mode = 'newpost';
        this.highestViewsPost = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userService.isLoggedIn()) {
            if (!JSON.parse(localStorage.getItem('Zero_user')))
                return false;
            var username = JSON.parse(localStorage.getItem('Zero_user')).username;
            this.userSubscription = this.userService.getAllUser(username).subscribe(function (users) {
                _this.allUsers = users;
            }, function (err) {
                console.log(err);
            });
        }
        this.infosSubcription = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].combineLatest([
            this.mainTopicService.getAllMainTopic(),
            this.postsService.getAllPosts(),
            this.categoryService.getAllCategories(),
            this.postsService.getHighestViews()
        ])
            .subscribe(function (data) {
            _this.maintopics = data[0].topics;
            _this.posts = data[1].posts;
            _this.categories = data[2].topics;
            _this.highestViewsPost = data[3].posts;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.infosSubcription.unsubscribe();
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    };
    HomeComponent.prototype.getFilterValue = function (value) {
        console.log(value);
        this.itemsPerPage = value;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_topic_service__["a" /* MainTopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_topic_service__["a" /* MainTopicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/home/main-topic/main-topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n    width: 100%;\r\n    background-color: #433D3D;\r\n    color: gray;\r\n    padding: 10px;\r\n    font-size: 2rem;\r\n    box-shadow: 0 0 2px white;\r\n}\r\n.text-left{\r\n    text-align: left;\r\n}\r\n.userList li{\r\n    border-bottom: 1px solid gray;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    width: 90%;\r\n    margin: 10px auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/home/main-topic/main-topic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s12\">\r\n    <div class=\"header\">{{topic.topic}}</div>            \r\n    <ul class=\"userList\">\r\n        <li *ngFor=\"let category of categories\" class=\"text-left\">\r\n          <a style=\"font-size:20px;\" [routerLink]=\"['/categories',category._id]\"><strong class=\"pink-text\" ><i>{{category.category}}</i></strong></a> \r\n          <user-created-category style=\"float:right\" [createUser]=\"category.create_user\"></user-created-category>\r\n        </li>            \r\n      </ul>\r\n  </div>\r\n</div>\r\n"

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
        this.categorySubscription = this.categoriesService.getAllCategoryWithSpecificTopicId(this.topic._id).subscribe(function (data) {
            _this.categories = data.categories;
        }, function (err) { console.log(err); });
    };
    MainTopicComponent.prototype.ngOnDestroy = function () {
        this.categorySubscription.unsubscribe();
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
exports.push([module.i, ".user_created_category{\r\n    font-size:13px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/home/main-topic/user-created-category/user-created-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user_created_category\">\r\n  Name: <a [routerLink]=\"['/user/info',user_info._id]\">{{user_info.name}}</a> \r\n  Created Date: <span>{{user_info.created_date}}</span>\r\n</div>"

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
        this.userInfoSubscription = this.userService.getUserInfor(this.createUser).subscribe(function (data) {
            if (data.success) {
                _this.user_info = data.user_info;
                _this.user_info['created_date'] = _this.convertDateTime(_this.user_info['created_date']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        });
    };
    UserCreatedCategoryComponent.prototype.ngOnDestroy = function () {
        this.userInfoSubscription.unsubscribe();
    };
    UserCreatedCategoryComponent.prototype.convertDateTime = function (datetime) {
        var timeDisplay = new Date(datetime);
        var time = timeDisplay.getFullYear() + '-' + (timeDisplay.getMonth() + 1) + '-' + timeDisplay.getDate();
        return time;
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

module.exports = "\r\n<form id=\"loginform\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\" style=\"margin-top:80px\"> \r\n    <h3 class=\"text-center\">Login Form</h3>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter username\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"username.errors && username.touched\">\r\n        <div *ngIf=\"username.errors.required\">Username is Required.</div>\r\n        <div *ngIf=\"username.errors.CannotContainSpace\">Username Cannot Contain Space.</div>       \r\n      </div>      \r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Password</label>\r\n      <input type=\"password\"  class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"password.errors && password.touched\">\r\n          <div *ngIf=\"password.errors.required\">Password is required.</div>\r\n      </div>\r\n    </div>\r\n    <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-primary btn-block mt-4\" >Login</button>\r\n</form> "

/***/ }),

/***/ "../../../../../src/app/components/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_nospace_validators__ = __webpack_require__("../../../../../src/app/common/nospace.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__);
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
        this.form = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]({
            username: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_7__common_nospace_validators__["a" /* CannotContainSpace */]]),
            password: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        //check infos from local
        this.shareSubscription = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].combineLatest([
            this.sharedService.currentUsername,
            this.sharedService.currentStatusLogin
        ])
            .subscribe(function (data) {
            _this.nameLogin = data[0];
            _this.status = Boolean(data[1]);
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.shareSubscription.unsubscribe();
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
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n    width: 100%;\r\n    background-color: rgb(66, 134, 244);\r\n    padding: 16px;\r\n    margin-bottom: 10px;\r\n    font-size: 20px;\r\n    color: white;\r\n    border-radius: 10px;\r\n}\r\n.filter{\r\n    float: right;\r\n    color: black;\r\n    font-size: 20px;\r\n}\r\n\r\n.filter select{\r\n    border-radius: 5px;   \r\n}\r\n\r\n.posts{\r\n    margin-bottom: 50px;\r\n}\r\n.category{\r\n    border-bottom: 1px solid gray;\r\n    padding: 10px;\r\n    font-size: 40px;\r\n    color: white;\r\n    display: inline-block;\r\n}\r\n.noticed{\r\n    background-color: #3D3D3D;\r\n    padding: 15px;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    font-size: 16px;\r\n    box-shadow: 0 0 20px #F1F1F1;\r\n}\r\n\r\n.listPost li{\r\n    width: 90%;\r\n    border: 1px solid gray;\r\n    padding: 12px;\r\n    margin: 10px auto 0;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    color: black;\r\n}\r\n.listPost li a{\r\n    font-size: 1.25rem;\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p *ngIf=\"userService.isLoggedIn()\"><a [routerLink]=\"['/create/post',categoryId]\" class=\"btn btn-primary\">Create Post</a></p>\n<div *ngIf=\"posts.length==0\">Have no posts yet</div>\n<div *ngIf=\"posts.length!=0\">\n    <div class=\"header\">\n        News!\n        <span class=\"filter\">\n          <select #selected (change)=\"getFilterValue(selected.value)\">\n            <option>5</option>\n            <option>10</option>\n            <option>15</option>\n          </select>\n        </span>\n      </div>\n    <pagination-controls class=\"text-center mt-4 mb-4\" (pageChange)=\"p = $event\"></pagination-controls>\n    <div *ngIf=\"posts.length!=0\" class=\"posts\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let post of posts | paginate : {itemsPerPage: itemsPerPage, currentPage: p}\">\n          <a [routerLink]=\"['/posts',post._id]\">{{post.title}}</a>\n          <button *ngIf=\"userService.isAdmin()\" class=\"btn btn-sm btn-danger\" style=\"float:right;cursor:pointer\" (click)=\"deletePost(post)\">delete</button>\n        </li>\n      </ul>\n    </div>\n</div> -->\n\n\n<div class=\"container\" style=\"margin-top:80px\">\n  <div class=\"row\">\n    <div class=\"col s3\">\n        <p *ngIf=\"userService.isLoggedIn()\"><a [routerLink]=\"['/create/post',categoryId]\" class=\"btn\">Create Post</a></p>            \n    </div>\n    <div class=\"col s4 offset-s5\">\n        <div class=\"noticed\">Only user admin can delete this post!</div>\n    </div>\n  </div>\n  <div *ngIf=\"posts.length==0\">Have no posts yet</div>\n  <div *ngIf=\"posts.length!=0\">\n    <div class=\"row\">\n      <div class=\"col s12\" style=\"margin-top:20px;\">\n        <div class=\"category\">\n          {{category.category}}\n        </div>\n        <span class=\"filter\">\n            <select class=\"browser-default\" #selected (change)=\"getFilterValue(selected.value)\">\n              <option value=\"5\">5</option>\n              <option value=\"10\">10</option>\n              <option value=\"15\">15</option>\n            </select>\n          </span>\n      </div>\n    </div>\n    <div class=\"control\">\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n    <div class=\"posts\">\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <ul class=\"listPost\">\n            <li *ngFor=\"let post of posts | paginate : {itemsPerPage: itemsPerPage, currentPage: p}\">\n              <a [routerLink]=\"['/posts',post._id]\">{{post.title}}</a>\n              <button style=\"float:right\" *ngIf=\"userService.isAdmin()\" class=\"btn red darken-1\" style=\"float:right;cursor:pointer; position:relative; top:-5px;\" (click)=\"deletePost(post)\">delete</button>              \n              <user-created-post style=\"float:right; margin-right:30px;\" [post]=\"post\"></user-created-post>\n              \n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
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
    function PostsComponent(route, postsService, flashMessage, userService, router, categoryService) {
        this.route = route;
        this.postsService = postsService;
        this.flashMessage = flashMessage;
        this.userService = userService;
        this.router = router;
        this.categoryService = categoryService;
        this.categoryId = "agsgdagsagagdsa";
        this.posts = [];
        this.p = 1;
        this.itemsPerPage = 5;
        this.category = {};
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            _this.categoryId = params.get('category_id');
            return _this.postsService.getAllPostsSpecificCategory(_this.categoryId);
        })
            .subscribe(function (data) {
            if (data.success) {
                _this.posts = data.posts;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }, function (err) { return console.log(err); });
        this.categorySubscription = this.categoryService.getContentCategory(this.categoryId).subscribe(function (data) {
            _this.category = data.category;
            console.log(_this.category);
        });
    };
    PostsComponent.prototype.ngOnDestroy = function () {
        this.categorySubscription.unsubscribe();
    };
    PostsComponent.prototype.getFilterValue = function (value) {
        this.itemsPerPage = value;
    };
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        var index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.postsService.deletePost(post._id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg + " " + post['title'], { cssClass: 'alert-success', timeout: 3000 });
            }
        }, function (err) {
            _this.posts.splice(index, 0, post);
        });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__("../../../../../src/app/components/pages/posts/posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */]) === "function" && _f || Object])
], PostsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/posts/user-created-post/user-created-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user_created_category{\r\n    font-size:13px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/posts/user-created-post/user-created-post.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"user_created_category\">\n  Name: <a [routerLink]=\"['/user/info',user_info._id]\">{{user_info.name}}</a> \n  Created Date: <span>{{user_info.created_date}}</span>\n</span>"

/***/ }),

/***/ "../../../../../src/app/components/pages/posts/user-created-post/user-created-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreatedPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserCreatedPostComponent = (function () {
    function UserCreatedPostComponent(userService, flashMessage) {
        this.userService = userService;
        this.flashMessage = flashMessage;
        this.user_info = [];
    }
    UserCreatedPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInfoSubscription = this.userService.getUserInfor(this.post.author_id).subscribe(function (data) {
            if (data.success) {
                _this.user_info = data.user_info;
                _this.user_info['created_date'] = _this.convertDateTime(_this.user_info['created_date']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        });
    };
    UserCreatedPostComponent.prototype.ngOnDestroy = function () {
        this.userInfoSubscription.unsubscribe();
    };
    UserCreatedPostComponent.prototype.convertDateTime = function (datetime) {
        var timeDisplay = new Date(datetime);
        var time = timeDisplay.getFullYear() + '-' + (timeDisplay.getMonth() + 1) + '-' + timeDisplay.getDate();
        return time;
    };
    return UserCreatedPostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('post'),
    __metadata("design:type", Object)
], UserCreatedPostComponent.prototype, "post", void 0);
UserCreatedPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'user-created-post',
        template: __webpack_require__("../../../../../src/app/components/pages/posts/user-created-post/user-created-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/posts/user-created-post/user-created-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], UserCreatedPostComponent);

var _a, _b;
//# sourceMappingURL=user-created-post.component.js.map

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

module.exports = "\r\n<form id=\"registerform\" [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister(registerForm)\" style=\"margin-top:80px\">\r\n    <h3 class=\"text-center\">Register Form</h3>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\"  placeholder=\"Your Name...\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"name.errors && name.touched\">\r\n        <div *ngIf=\"name.errors.required\">Name is Required.</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Address</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"address\"  placeholder=\"Your Address...\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"username\"  placeholder=\"Username...\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"username.errors && username.touched\">\r\n        <div *ngIf=\"username.errors.required\">Username is Required.</div>\r\n        <div *ngIf=\"username.errors.CannotContainSpace\">Username cannot contain space.</div>\r\n        <div *ngIf=\"username.errors.usernameTaken\">Username existed.</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"> \r\n      <label for=\"exampleInputEmail1\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"email.errors && email.touched\">\r\n        <div *ngIf=\"email.errors.required\">Email is Required.</div>\r\n        <div *ngIf=\"email.errors.CannotContainSpace\">Email cannot contain space.</div>\r\n        <div *ngIf=\"email.errors.emailTaken\">Email existed.</div>\r\n        <div *ngIf=\"email.errors.incorrectMailFormat\">Incorrect Email Format.</div>\r\n      </div>\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\r\n      <div class=\"alert alert-danger\" *ngIf=\"password.errors && password.touched\">\r\n        <div *ngIf=\"password.errors.required\">Password is Required.</div>\r\n      </div>\r\n    </div>\r\n    <button [disabled]=\"registerForm.invalid || enableR\" type=\"submit\" class=\"btn btn-primary btn-block mt-4\" >Register</button>\r\n</form>"

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
        this.registerSubscription = this.userService.registerUser(rf.value)
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
    RegisterComponent.prototype.ngOnDestroy = function () {
        if (this.registerSubscription) {
            this.registerSubscription.unsubscribe();
        }
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

/***/ "../../../../../src/app/components/pages/shop/check-out/check-out.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/check-out/check-out.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:80px\">\n  <table>\n    <thead>\n      <tr>\n          <th>Item Name</th>\n          <th>price</th>\n          <th>Item Quantity</th>\n          <th>TotalPrice</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let cart of carts\">\n        <td>{{cart.name}}</td>\n        <td>{{cart.price | currency : 'USD':true}}</td>\n        <td>{{cart.quantity}}</td>\n        <td>{{cart.quantity * cart.price | currency :'USD':true}}</td>\n      </tr>\n      <tr>\n        <td>tax</td>\n        <td></td>\n        <td></td>\n        <td>0%</td>\n      </tr>\n      <tr style=\"border-top:1px solid white;\">\n        <td>Bill</td>\n        <td></td>\n        <td></td>\n        <td>{{totalPrice| currency : 'USD':true}}</td>\n      </tr>\n    </tbody>\n\n  </table>\n    <button class=\"btn\" [disabled]=\"paypalDisable\" (click)=\"paypalCheckout()\" >Paypal</button>\n    <button class=\"btn\" [disabled]=\"stripeDisable\" (click)=\"openCheckout($event)\">Stripe</button>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/check-out/check-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_check_out_paypal_service__ = __webpack_require__("../../../../../src/app/services/check-out-paypal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_check_out_stripe_service__ = __webpack_require__("../../../../../src/app/services/check-out-stripe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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





var CheckOutComponent = (function () {
    function CheckOutComponent(router, checkOutStripeService, checkOutPaypalService, flashMsg) {
        this.router = router;
        this.checkOutStripeService = checkOutStripeService;
        this.checkOutPaypalService = checkOutPaypalService;
        this.flashMsg = flashMsg;
        this.carts = [];
        this.totalPrice = 0;
        this.desc = '';
        this.stripeDisable = false;
        this.paypalDisable = false;
        this.publishableKey = '';
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carts = JSON.parse(localStorage.getItem('Zero_carts'));
        this.totalPrice = 0;
        this.carts.map(function (cart) {
            _this.totalPrice += cart.quantity * cart.price;
            _this.desc += cart.quantity + ' ' + cart.name + ' ';
        });
        this.userCheckout = JSON.parse(localStorage.getItem('Zero_user'));
        if (this.userCheckout) {
            this.getPublishableKey = this.checkOutStripeService.getPublishKey().subscribe(function (data) {
                _this.publishableKey = data.publishKey;
                _this.handler = StripeCheckout.configure({
                    key: _this.publishableKey,
                    image: 'assets/images/logoZeroToZ_black.png',
                    locale: 'auto',
                    token: function (token) {
                        var bill = {
                            token: token,
                            user: _this.userCheckout,
                            desc: _this.desc,
                            amount: _this.totalPrice * 100
                        };
                        _this.checkoutStripe = _this.checkOutStripeService.checkoutStripe(bill)
                            .subscribe(function (data) {
                            console.log(data);
                            if (data.success) {
                                localStorage.setItem('yourBill', JSON.stringify(data.bill));
                                localStorage.removeItem('Zero_carts');
                                _this.router.navigate(['/checkout/success']);
                            }
                            else {
                                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                            }
                        });
                    }
                });
            });
        }
    };
    CheckOutComponent.prototype.ngOnDestroy = function () {
        if (this.getPublishableKey) {
            this.getPublishableKey.unsubscribe();
        }
        if (this.checkoutStripe) {
            this.checkoutStripe.unsubscribe();
        }
    };
    CheckOutComponent.prototype.openCheckout = function (e) {
        this.handler.open({
            name: 'Pay Product',
            description: this.desc,
            amount: this.totalPrice * 100
        });
        e.stopPropagation();
    };
    CheckOutComponent.prototype.onPopstate = function () {
        this.handler.close();
    };
    CheckOutComponent.prototype.paypalCheckout = function () {
        var _this = this;
        var bill = {
            user: this.userCheckout,
            products: this.carts
        };
        this.checkOutPaypalService.checkoutPaypal(bill)
            .subscribe(function (data) {
            if (data.success) {
                window.location.href = data.link;
            }
            else {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        });
    };
    return CheckOutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["HostListener"])('window:popstate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CheckOutComponent.prototype, "onPopstate", null);
CheckOutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-check-out',
        template: __webpack_require__("../../../../../src/app/components/pages/shop/check-out/check-out.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/shop/check-out/check-out.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_check_out_stripe_service__["a" /* CheckOutStripeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_check_out_stripe_service__["a" /* CheckOutStripeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_check_out_paypal_service__["a" /* CheckOutPaypalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_check_out_paypal_service__["a" /* CheckOutPaypalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], CheckOutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=check-out.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addTocart, .control{\r\n    width:100%\r\n}\r\n/* .card{\r\n    margin: 20px;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-image\">\n    <img src=\"{{product.src}}\" alt=\"images product\">\n    <span class=\"card-title\">{{product.name}}</span>\n  </div>\n  <div class=\"card-action\">\n    <a *ngIf=\"cart.quantity==0\" class=\"btn addTocart\"  (click)=\"addCart(product)\">Add to cart</a>\n    <div class=\"control\" *ngIf=\"cart.quantity!=0\">\n        <a class=\"btn grey darken-1\" style=\"float:left\" (click)=\"decrease(product)\">-</a>\n        <a style=\"margin-left:20% \">{{cart.quantity}} in cart</a>\n        <a class=\"btn green accent-3\" style=\"float:right\" (click)=\"increase(product)\">+</a>\n        <div style=\"clear:both\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
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

var ProductComponent = (function () {
    function ProductComponent() {
        this.cartchange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.carts = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart = {
            name: this.product.name,
            price: 1,
            quantity: 0
        };
        if (JSON.parse(localStorage.getItem('Zero_carts'))) {
            this.carts = JSON.parse(localStorage.getItem('Zero_carts'));
            if (this.carts.length != 0) {
                this.carts.map(function (cart) {
                    if (_this.cart.name == cart.name) {
                        _this.cart.quantity = cart.quantity;
                    }
                });
            }
        }
    };
    ProductComponent.prototype.addCart = function () {
        this.cart.quantity = 1;
        this.cartchange.emit({ type: 'add', cart: this.cart });
    };
    ProductComponent.prototype.decrease = function () {
        this.cart.quantity -= 1;
        this.cartchange.emit({ type: 'decrease', cart: this.cart });
    };
    ProductComponent.prototype.increase = function () {
        this.cart.quantity += 1;
        this.cartchange.emit({ type: 'increase', cart: this.cart });
    };
    return ProductComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('product'),
    __metadata("design:type", Object)
], ProductComponent.prototype, "product", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('cartChanged'),
    __metadata("design:type", Object)
], ProductComponent.prototype, "cartchange", void 0);
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product',
        template: __webpack_require__("../../../../../src/app/components/pages/shop/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/shop/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/shop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    min-height: 75rem; /* Can be removed; just added for demo purposes */\r\n}\r\n  \r\n.navbar {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.jumbotron {\r\n  padding-top: 6rem;\r\n  padding-bottom: 6rem;\r\n  margin-bottom: 0;\r\n  background-color: #fff;\r\n}\r\n\r\n.jumbotron p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.jumbotron-heading {\r\n  font-weight: 300;\r\n}\r\n\r\n.jumbotron .container {\r\n  max-width: 40rem;\r\n}\r\n\r\n.album {\r\n  min-height: 50rem; /* Can be removed; just added for demo purposes */\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.card {\r\n  width:100%;\r\n}\r\n\r\n\r\n.card > img {\r\n  margin-bottom: .75rem;\r\n}\r\n\r\n.card-text {\r\n  font-size: 85%;\r\n}\r\n\r\nfooter {\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n}\r\n\r\nfooter p {\r\n  margin-bottom: .25rem;\r\n}\r\n\r\n.card-panel{\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px white;\r\n}\r\n.card[_ngcontent-c4] {\r\n  width: 100%;\r\n}\r\n\r\n.cart{\r\n  position: fixed;\r\n  bottom:50%;\r\n  right: 5%;\r\n  color: white;\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container center\" style=\"margin-top:80px;\">\r\n  <div class=\"card-panel teal lighten-2\">\r\n    <h2>ZeroToZ Shopping</h2>\r\n    <p>I create this page to test my skill in shopping cart and checkout with stripe! Function: localStorage, Bill, Checkout, passing data with angular 4!</p>\r\n    <p>\r\n      <a routerLink='/' class=\"btn btn-primary\">About Me!</a>\r\n      <a routerLink='/' class=\"btn btn-secondary\">Back Home</a>\r\n    </p>\r\n  </div>\r\n  <div class=\"row\" style=\"margin:80px 0 150px 0;\">\r\n    <div class=\"col s4\" *ngFor=\"let product of products; let i=index\">\r\n        <product class=\"product\" (cartChanged)=\"cartChanged($event)\" [product]=\"product\"></product>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cart center\" [class.amber-text]=\"carts.length!=0\">\r\n    <p *ngIf=\"carts.length!=0\">Click here to checkout</p>\r\n    <i class=\"material-icons\" (click)=\"checkout()\">add_shopping_cart </i><span>{{totalQuantity}}</span>\r\n</div>\r\n\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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



var ShopComponent = (function () {
    function ShopComponent(router, flashMsg) {
        this.router = router;
        this.flashMsg = flashMsg;
        this.products = [];
        this.carts = [];
        this.totalQuantity = 0;
        var snapshot = router.routerState.snapshot;
        this.returnUrl = snapshot.url;
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = [
            { 'name': 'product1', src: 'assets/images/pro1.png' },
            { 'name': 'product2', src: 'assets/images/pro2.png' },
            { 'name': 'product3', src: 'assets/images/pro3.png' }
        ];
        if (JSON.parse(localStorage.getItem('Zero_carts'))) {
            this.carts = JSON.parse(localStorage.getItem('Zero_carts'));
            this.carts.map(function (cart) {
                _this.totalQuantity += cart.quantity;
            });
        }
    };
    ShopComponent.prototype.cartChanged = function (event) {
        var _this = this;
        var cartsName = this.carts.map(function (cart) { return cart.name; });
        switch (event.type) {
            case 'add':
                this.carts.push(event.cart);
                break;
            case 'increase':
                var indexInc = cartsName.indexOf(event.cart.name);
                this.carts[indexInc] = event.cart;
                break;
            case 'decrease':
                var indexDec = cartsName.indexOf(event.cart.name);
                this.carts[indexDec] = event.cart;
                if (this.carts[indexDec].quantity == 0) {
                    this.carts.splice(indexDec, 1);
                }
                break;
        }
        this.totalQuantity = 0;
        this.carts.map(function (cart) {
            _this.totalQuantity += cart.quantity;
        });
        console.log(this.carts);
        localStorage.setItem('Zero_carts', JSON.stringify(this.carts));
    };
    ShopComponent.prototype.checkout = function () {
        if (this.totalQuantity == 0)
            return false;
        if (!JSON.parse(localStorage.getItem('Zero_user'))) {
            this.flashMsg.show('Pls login to check out', { cssClass: 'alert-danger', timeout: 3000 });
            this.router.navigate(['/login'], { queryParams: { returnUrl: '/product/checkout' } });
            return false;
        }
        this.router.navigate(['/product/checkout']);
    };
    return ShopComponent;
}());
ShopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'shop',
        template: __webpack_require__("../../../../../src/app/components/pages/shop/shop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/shop/shop.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ShopComponent);

var _a, _b;
//# sourceMappingURL=shop.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/success-checkout/success-checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/success-checkout/success-checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container center\" style=\"margin-top:80px;\">\n  <div class=\"card-panel teal lighten-2 \">\n    <h2>Thank you for purchase our product!</h2>\n    <p>\n      <a class=\"btn  blue darken-1\" (click)='redirect(\"\")' >Back Home</a>\n      <a class=\"btn pink accent-2\" (click)='redirect(\"shop\")'>Shopping</a>\n    </p>\n  </div>\n  <div *ngIf=\"bill\">\n    <h3>Your Bill</h3>\n    <table>\n        <thead>\n          <tr>\n              <th>User_id Checkout</th>\n              <th>Description</th>\n              <th>Email Buying</th>\n              <th>Amout</th>\n              <th>method</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{bill.user_buyer_id}}</td>\n            <td>{{bill.desc}}</td>\n            <td>{{bill.email_checkout}}</td>\n            <td>{{bill.amount/100 |currency:'USD':true}}</td>\n            <td>{{bill.method}}</td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/shop/success-checkout/success-checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessCheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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


var SuccessCheckoutComponent = (function () {
    function SuccessCheckoutComponent(router) {
        this.router = router;
    }
    SuccessCheckoutComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('yourBill'))) {
            this.bill = JSON.parse(localStorage.getItem('yourBill'));
        }
        console.log(this.bill);
    };
    SuccessCheckoutComponent.prototype.redirect = function (returnUrl) {
        localStorage.removeItem('yourBill');
        this.router.navigate(['/' + returnUrl]);
    };
    return SuccessCheckoutComponent;
}());
SuccessCheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-success-checkout',
        template: __webpack_require__("../../../../../src/app/components/pages/shop/success-checkout/success-checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/shop/success-checkout/success-checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SuccessCheckoutComponent);

var _a;
//# sourceMappingURL=success-checkout.component.js.map

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

module.exports = "<div class=\"container\" style=\"margin-top:80px;\">\r\n    <div class=\"row\">\r\n      <div class=\"col s6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-image\">\r\n            <img src=\"https://lorempixel.com/400/200/\">\r\n  \r\n            <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\r\n          </div>\r\n          <div class=\"card-action black\" style=\"font-size:20px;\">\r\n            <p>{{user_info.name}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s4 offset-s2\">\r\n        <div *ngIf=\"user_info\">\r\n          <h2 class=\"page-header\">{{user_info.name}}</h2>\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">Username: {{user_info.username}}</li>\r\n            <li class=\"list-group-item\">Email: {{user_info.email}}</li>\r\n            <li class=\"list-group-item\">Post: {{howManyPosts}}</li>\r\n            <li class=\"list-group-item\">Comments: {{howManyComments}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- <div *ngIf=\"user\">\r\n    <h2 class=\"page-header\">{{user.name}}</h2>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n      <li class=\"list-group-item\">email: {{user.email}}</li>\r\n    </ul>\r\n  </div> -->"

/***/ }),

/***/ "../../../../../src/app/components/pages/users/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest__);
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
    function UserInfoComponent(route, userService, postsService, commentsService) {
        this.route = route;
        this.userService = userService;
        this.postsService = postsService;
        this.commentsService = commentsService;
        this.user_info = [];
        this.howManyPosts = 0;
        this.howManyComments = 0;
        this.user_id = '';
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            _this.user_id = params.get('user_id');
            return _this.userService.getUserInfor(_this.user_id);
        })
            .subscribe(function (data) {
            _this.user_info = data.user_info;
            console.log(_this.user_info);
            _this.infoSubscription = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].combineLatest([
                _this.postsService.getPostsUserCreated(_this.user_id),
                _this.commentsService.getCommentsUserCreated(_this.user_id)
            ])
                .subscribe(function (data) {
                _this.howManyPosts = data[0].length;
                _this.howManyComments = data[1].length;
            });
        });
    };
    UserInfoComponent.prototype.ngOnDestroy = function () {
        this.infoSubscription.unsubscribe();
    };
    return UserInfoComponent;
}());
UserInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'user-info',
        template: __webpack_require__("../../../../../src/app/components/pages/users/user-info/user-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/users/user-info/user-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_comments_service__["a" /* CommentsService */]) === "function" && _d || Object])
], UserInfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-online/user-online.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#user-online{\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n.card{\r\n    width:170px;\r\n}\r\n.card-content{ \r\n    height: 350px;\r\n    overflow: scroll;\r\n}\r\n\r\n.card-header{\r\n    cursor: pointer;\r\n    background-color: #0069D9;\r\n    color: white;\r\n    padding: 10px;\r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n.user ul{\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-online/user-online.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"user-online\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" (click)=\"showTapChat()\"><h6>User Online</h6></div>\r\n      <div class=\"card-content\" [class.hide]=\"hide\">\r\n        <div class=\"user\">\r\n          <ul class=\"list-group\">\r\n              <li class=\"\" style=\"cursor:pointer\" *ngFor=\"let user of usersOnline \">\r\n                <span class=\"chip blue accent-3\"> {{user}} </span> Online\r\n              </li>            \r\n          </ul>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"container\" style=\"margin-top:80px\">\r\n  <div class=\"row\">\r\n    <div class=\"col s6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-image\">\r\n          <img src=\"https://lorempixel.com/400/200/\">\r\n\r\n          <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\r\n        </div>\r\n        <div class=\"card-action black\" style=\"font-size:20px;\">\r\n          <p>{{user.name}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col s5 offset-s1\">\r\n      <div *ngIf=\"user\">\r\n        <h2 class=\"page-header\">{{user.name}}</h2>\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n          <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n          <li class=\"list-group-item\">Post: {{howmanyPosts}}</li>\r\n          <li class=\"list-group-item\">Comments: {{howmanyComments}}</li>\r\n        </ul>\r\n        <form enctype=\"multipart/form-data\">\r\n          <div class=\"file-field input-field\">\r\n            <div class=\"btn grey darken-2\">\r\n              <span>Upload</span>\r\n              <input type=\"file\" (change)=\"onChange($event)\" >\r\n            </div>\r\n            <div class=\"file-path-wrapper\">\r\n              <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload your profile Image\">\r\n            </div>\r\n          </div>\r\n          <button class=\"btn\" (click)=\"upload()\">Submit</button>\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n    <li class=\"list-group-item\">email: {{user.email}}</li>\r\n  </ul>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/components/users/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_upload_image_service__ = __webpack_require__("../../../../../src/app/services/upload-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest__);
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
    function ProfileComponent(userService, postService, commentService, route, uploadImageService) {
        this.userService = userService;
        this.postService = postService;
        this.commentService = commentService;
        this.route = route;
        this.uploadImageService = uploadImageService;
        this.user = {};
        this.howmanyPosts = 0;
        this.howmanyComments = 0;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user_id = JSON.parse(localStorage.getItem('Zero_user')).id;
        console.log(user_id);
        this.profileSubscription =
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].combineLatest([
                this.userService.getProfile(),
                this.postService.getPostsUserCreated(user_id),
                this.commentService.getCommentsUserCreated(user_id)
            ])
                .subscribe(function (data) {
                _this.user = data[0].user;
                _this.howmanyPosts = data[1].length;
                _this.howmanyComments = data[2].length;
            }, function (err) {
                console.log(err);
            });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.profileSubscription.unsubscribe();
    };
    ProfileComponent.prototype.onChange = function (event) {
        this.file = event.srcElement.files;
        console.log(this.file[0]);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/users/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_comments_service__["a" /* CommentsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_upload_image_service__["a" /* UploadImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_upload_image_service__["a" /* UploadImageService */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
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



var AdminGuard = (function () {
    function AdminGuard(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (this.userService.isAdmin()) {
            return true;
        }
        else {
            this.route.navigate(['/']);
            return false;
        }
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminGuard);

var _a, _b;
//# sourceMappingURL=admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/user-created-post.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreatedPostGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserCreatedPostGuard = (function () {
    function UserCreatedPostGuard(userService, route, postService) {
        this.userService = userService;
        this.route = route;
        this.postService = postService;
    }
    UserCreatedPostGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var post_id = state.url.split('/')[3];
        var author_id = '';
        return new Promise(function (resolve, reject) {
            _this.postService.getPostContent(post_id).subscribe(function (data) {
                author_id = data.post.author_id;
                if (_this.userService.isUserCreatedPost(author_id)) {
                    resolve(true);
                }
                else {
                    _this.route.navigate(['/']);
                    resolve(false);
                }
            });
        });
    };
    return UserCreatedPostGuard;
}());
UserCreatedPostGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_posts_service__["a" /* PostsService */]) === "function" && _c || Object])
], UserCreatedPostGuard);

var _a, _b, _c;
//# sourceMappingURL=user-created-post.guard.js.map

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
        this.loadToken();
        headers.append('Authorization', this.userToken);
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
    CategoriesService.prototype.loadToken = function () {
        var token = localStorage.getItem('Zero_token');
        this.userToken = token;
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

/***/ "../../../../../src/app/services/check-out-paypal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutPaypalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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



var CheckOutPaypalService = (function () {
    function CheckOutPaypalService(http) {
        this.http = http;
    }
    CheckOutPaypalService.prototype.checkoutPaypal = function (bill) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/checkout/paypal', bill, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CheckOutPaypalService.prototype.loadToken = function () {
        var token = localStorage.getItem('Zero_token');
        this.userToken = token;
    };
    return CheckOutPaypalService;
}());
CheckOutPaypalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CheckOutPaypalService);

var _a;
//# sourceMappingURL=check-out-paypal.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/check-out-stripe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutStripeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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



var CheckOutStripeService = (function () {
    function CheckOutStripeService(http) {
        this.http = http;
    }
    CheckOutStripeService.prototype.checkoutStripe = function (bill) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/checkout/stripe', bill, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CheckOutStripeService.prototype.getPublishKey = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/checkout/stripe', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CheckOutStripeService.prototype.loadToken = function () {
        var token = localStorage.getItem('Zero_token');
        this.userToken = token;
    };
    return CheckOutStripeService;
}());
CheckOutStripeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CheckOutStripeService);

var _a;
//# sourceMappingURL=check-out-stripe.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
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



var CommentsService = (function () {
    function CommentsService(http) {
        this.http = http;
    }
    CommentsService.prototype.createComment = function (newComment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/create/comment', newComment, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.getAllCommentsWithSpecificPostId = function (post_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/comments/specific/' + post_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.deleteComment = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.delete('http://localhost:3000/api/comments/delete/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.updateComment = function (id, newComment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.put('http://localhost:3000/api/comments/update/' + id, newComment, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.getCommentsUserCreated = function (user_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/comments/howmany/' + user_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.loadToken = function () {
        var token = localStorage.getItem('Zero_token');
        this.userToken = token;
    };
    return CommentsService;
}());
CommentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _a || Object])
], CommentsService);

var _a;
//# sourceMappingURL=comments.service.js.map

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
    MainTopicService.prototype.createMaintopic = function (newMaintopic) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/create/maintopic', newMaintopic, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainTopicService.prototype.loadToken = function () {
        var token = localStorage.getItem('Zero_token');
        this.userToken = token;
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
        this.loadToken();
        headers.append('Authorization', this.userToken);
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
    PostsService.prototype.getAllPosts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/posts/for/all', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getHighestViews = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/posts/highest/views', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.deletePost = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.delete('http://localhost:3000/api/posts/delete/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.updatePost = function (id, newPost) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.put('http://localhost:3000/api/posts/update/' + id, newPost, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getPostsUserCreated = function (user_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://localhost:3000/api/posts/howmany/' + user_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.loadToken = function () {
        var token = localStorage.getItem('Zero_token');
        this.userToken = token;
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

/***/ "../../../../../src/app/services/upload-image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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



var UploadImageService = (function () {
    function UploadImageService(http) {
        this.http = http;
    }
    UploadImageService.prototype.loadToken = function () {
        var token = localStorage.getItem('Zero_token');
        this.userToken = token;
    };
    return UploadImageService;
}());
UploadImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UploadImageService);

var _a;
//# sourceMappingURL=upload-image.service.js.map

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
    UserService.prototype.isAdmin = function () {
        if (this.isLoggedIn()) {
            var user = JSON.parse(localStorage.getItem('Zero_user'));
            if (user.roles.includes('admin')) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    UserService.prototype.isUserCreatedComment = function (user_id) {
        if (this.isLoggedIn()) {
            var user = JSON.parse(localStorage.getItem('Zero_user'));
            if (user.username == user_id) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    UserService.prototype.isUserCreatedPost = function (user_id) {
        if (this.isLoggedIn()) {
            var user = JSON.parse(localStorage.getItem('Zero_user'));
            // console.log("author_id: "+ user_id);
            // console.log("local user id: "+ user.id);
            if (user.id == user_id) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    UserService.prototype.updateUserInfo = function (user_id, newRoles) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/users/infos/update/' + user_id, newRoles, { headers: headers })
            .map(function (res) { return res.json(); });
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