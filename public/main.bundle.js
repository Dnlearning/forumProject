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

module.exports = "<navbar-top></navbar-top>\n<div class=\"container\">\n  <div class=\"content\">\n    <div class=\"msg\">\n        <flash-messages></flash-messages>\n    </div>\n      <router-outlet ></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_user_guard__ = __webpack_require__("../../../../../src/app/guards/user.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_top_navbar_top_component__ = __webpack_require__("../../../../../src/app/components/navbar-top/navbar-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pages_home_home_component__ = __webpack_require__("../../../../../src/app/components/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pages_register_register_component__ = __webpack_require__("../../../../../src/app/components/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pages_login_login_component__ = __webpack_require__("../../../../../src/app/components/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_users_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/users/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var Routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_pages_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_users_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_user_guard__["a" /* UserGuard */]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_top_navbar_top_component__["a" /* NavbarTopComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_pages_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_users_profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */].forRoot(Routes),
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__guards_user_guard__["a" /* UserGuard */], __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <img src=\"assets/images/logoZeroToZ.png\" class=\"logo\" alt=\"\">  \n    ZeroToZ</a>\n    <button style=\"cursor:pointer\" class=\"navbar-toggler\" (click)=\"toggleState()\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" [class.show]=\"openmenu\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"userService.isLoggedIn()\" class=\"nav-item\" routerLinkActive='active'><a class=\"nav-link\"  routerLink=\"/profile\">{{username}}</a></li>\n        <li *ngIf=\"!userService.isLoggedIn()\" class=\"nav-item\" routerLinkActive='active'><a class=\"nav-link\"  routerLink=\"/login\">Login</a></li>\n        <li *ngIf=\"!userService.isLoggedIn()\" class=\"nav-item\" routerLinkActive='active'><a class=\"nav-link disabled\"  routerLink=\"/register\">Register</a></li>\n        <li *ngIf=\"userService.isLoggedIn()\" class=\"nav-item\" style=\"cursor:pointer\"><a class=\"nav-link active\" (click)=\"onLogoutClick()\" >Logout</a></li>\n      </ul>\n    </div>\n  </nav>"

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
    }
    NavbarTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.checkUserOnLocal();
        this.sharedService.currentUsername.subscribe(function (username) { return _this.username = username; });
    };
    NavbarTopComponent.prototype.toggleState = function () {
        this.openmenu = (this.openmenu == false) ? true : false;
    };
    NavbarTopComponent.prototype.onLogoutClick = function () {
        this.userService.logout();
        this.flashMsg.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.route.navigate(['/login']);
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

/***/ "../../../../../src/app/components/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    padding-top: 3.5rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">Hello, world!</h1>\n      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n      <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a></p>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <!-- Example row of columns -->\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <h2>Heading</h2>\n        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n      </div>\n      <div class=\"col-md-4\">\n        <h2>Heading</h2>\n        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n      </div>\n      <div class=\"col-md-4\">\n        <h2>Heading</h2>\n        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n      </div>\n    </div>\n\n    <hr>"

/***/ }),

/***/ "../../../../../src/app/components/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

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
        this.form = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__common_nospace_validators__["a" /* CannotContainSpace */]]),
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        //check infos from local
        var _this = this;
        this.sharedService.currentUsername.subscribe(function (username) { return _this.nameLogin = username; });
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
                _this.flashMsg.show('You are Logged In', { cssClass: 'alert-success', timeout: 2000 });
                var returnUrl = _this.route.snapshot.queryParamMap.get('returnUrl');
                _this.router.navigate([returnUrl || '/']);
            }
            else {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
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

module.exports = "\n<form id=\"registerform\" [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister(registerForm)\">\n    <h3 class=\"text-center\">Register Form</h3>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\"  placeholder=\"Your Name...\">\n      <div class=\"alert alert-danger\" *ngIf=\"name.errors && name.touched\">\n        <div *ngIf=\"name.errors.required\">Name is Required.</div>\n      </div>\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Username</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"username\"  placeholder=\"Your Password...\">\n      <div class=\"alert alert-danger\" *ngIf=\"username.errors && username.touched\">\n        <div *ngIf=\"username.errors.required\">Username is Required.</div>\n        <div *ngIf=\"username.errors.CannotContainSpace\">Username cannot contain space.</div>\n        <div *ngIf=\"username.errors.usernameTaken\">Username existed.</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\"> \n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n      <div class=\"alert alert-danger\" *ngIf=\"email.errors && email.touched\">\n        <div *ngIf=\"email.errors.required\">Email is Required.</div>\n        <div *ngIf=\"email.errors.CannotContainSpace\">Email cannot contain space.</div>\n        <div *ngIf=\"email.errors.emailTaken\">Username existed.</div>\n        <div *ngIf=\"email.errors.incorrectMailFormat\">Incorrect Email Format.</div>\n      </div>\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n      <div class=\"alert alert-danger\" *ngIf=\"password.errors && password.touched\">\n        <div *ngIf=\"password.errors.required\">Password is Required.</div>\n      </div>\n    </div>\n    <button [disabled]=\"registerForm.invalid || enableR\" type=\"submit\" class=\"btn btn-primary btn-block mt-4\" >Register</button>\n</form>"

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
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__common_nospace_validators__["a" /* CannotContainSpace */]], Object(__WEBPACK_IMPORTED_MODULE_4__common_usernameRegister_validators__["a" /* usernameTaken */])(userService)],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__common_nospace_validators__["a" /* CannotContainSpace */], __WEBPACK_IMPORTED_MODULE_6__common_formatemail_validators__["a" /* incorrectMailFormat */]], Object(__WEBPACK_IMPORTED_MODULE_5__common_emailRegister_validators__["a" /* emailTaken */])(userService)],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

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
        this.currentUsername = this.username.asObservable();
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
        return this.http.get('http://localhost:3000/users/' + username)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.checkEmailExist = function (email) {
        return this.http.get('http://localhost:3000/users/' + email)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.registerUser = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', newUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.storeUserDate = function (token, user) {
        localStorage.setItem('Zero_token', token);
        localStorage.setItem('Zero_user', JSON.stringify(user));
        this.userToken = token;
        this.user = user;
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


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map