webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_page_user_page_component__ = __webpack_require__("../../../../../src/app/components/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_page_admin_page_component__ = __webpack_require__("../../../../../src/app/components/admin-page/admin-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_changepassword_changepassword_component__ = __webpack_require__("../../../../../src/app/components/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_verify_verify_component__ = __webpack_require__("../../../../../src/app/components/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_userinfo_userinfo_component__ = __webpack_require__("../../../../../src/app/components/userinfo/userinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_help_help_component__ = __webpack_require__("../../../../../src/app/components/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_animation_screen_animation_screen_component__ = __webpack_require__("../../../../../src/app/components/animation-screen/animation-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_change_user_data_change_user_data_component__ = __webpack_require__("../../../../../src/app/components/change-user-data/change-user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var config = new __WEBPACK_IMPORTED_MODULE_18_angularx_social_login__["b" /* AuthServiceConfig */]([
    {
        id: __WEBPACK_IMPORTED_MODULE_18_angularx_social_login__["d" /* GoogleLoginProvider */].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_18_angularx_social_login__["d" /* GoogleLoginProvider */]("1086820069053-onfj0rb8tvv8ugt3ahjr05a9j8c8u99l.apps.googleusercontent.com")
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_18_angularx_social_login__["c" /* FacebookLoginProvider */].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_18_angularx_social_login__["c" /* FacebookLoginProvider */]("169092137053597")
    }
]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_page_user_page_component__["a" /* UserPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_admin_page_admin_page_component__["a" /* AdminPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_changepassword_changepassword_component__["a" /* ChangepasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_verify_verify_component__["a" /* VerifyComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_userinfo_userinfo_component__["a" /* UserinfoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_animation_screen_animation_screen_component__["a" /* AnimationScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_change_user_data_change_user_data_component__["a" /* ChangeUserDataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularx_social_login__["e" /* SocialLoginModule */].initialize(config),
                __WEBPACK_IMPORTED_MODULE_18_angularx_social_login__["e" /* SocialLoginModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'animationPage', pathMatch: 'full' },
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
                    { path: 'userPage', component: __WEBPACK_IMPORTED_MODULE_9__components_user_page_user_page_component__["a" /* UserPageComponent */] },
                    { path: 'adminPage', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_page_admin_page_component__["a" /* AdminPageComponent */] },
                    { path: 'changePassword', component: __WEBPACK_IMPORTED_MODULE_11__components_changepassword_changepassword_component__["a" /* ChangepasswordComponent */] },
                    { path: 'users/:email/confirm/:token', component: __WEBPACK_IMPORTED_MODULE_13__components_verify_verify_component__["a" /* VerifyComponent */] },
                    { path: 'userinfo', component: __WEBPACK_IMPORTED_MODULE_14__components_userinfo_userinfo_component__["a" /* UserinfoComponent */] },
                    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_15__components_help_help_component__["a" /* HelpComponent */] },
                    { path: 'animationPage', component: __WEBPACK_IMPORTED_MODULE_16__components_animation_screen_animation_screen_component__["a" /* AnimationScreenComponent */] },
                    { path: 'changeUserData', component: __WEBPACK_IMPORTED_MODULE_17__components_change_user_data_change_user_data_component__["a" /* ChangeUserDataComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-page/admin-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filterable {\r\n  margin-top: 15px;\r\n}\r\n.filterable .panel-heading .pull-right {\r\n  margin-top: -20px;\r\n}\r\n.filterable .filters input[disabled] {\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: auto;\r\n  box-shadow: none;\r\n  padding: 0;\r\n  height: auto;\r\n}\r\n.filterable .filters input[disabled]::-webkit-input-placeholder {\r\n  color: #333;\r\n}\r\n.filterable .filters input[disabled]::-moz-placeholder {\r\n  color: #333;\r\n}\r\n.filterable .filters input[disabled]:-ms-input-placeholder {\r\n  color: #333;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-page/admin-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12>\">\n    <div class=\"table-responsive\">\n           \n                    \n            <table class=\"table table-striped\">\n                    <thead>\n                        <tr class=\"filters\">\n                            <th>Id</th>\n                            <th>Name</th>\n                            <th>Username</th>\n                            <th>Email</th>\n                            <th>Permission</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let user of users\">\n                            <td width=\"8%\">{{user.id}}</td>\n                            <td width=\"15%\">{{user.name}}</td>\n                            <td width=\"15%\">{{user.username}}</td>\n                            <td width=\"25%\">{{user.email}}</td>\n                            <td width=\"15%\">{{user.permissions}}</td>\n                            <td width=\"5%\"><button (click)=\"redirectToChangeUserData(user.id)\" class=\" btn-xs\">Change </button></td>\n                        </tr>\n                       \n                    </tbody>\n                </table>\n            </div>\n            <button (click)=\"previous()\" [hidden]=\"!(page > 1)\" class=\" btn-sm\">Previous page </button>\n      <button (click)=\"next()\" [hidden]=\"!checkForUsers\" class=\"btn-sm\"> Next page </button>\n         \n        </div>\n    </div>\n    </div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-page/admin-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPageComponent = (function () {
    function AdminPageComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.page = 1;
        this.users = [];
        this.checkForUsers = false;
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('curentUser') == null) {
            this.router.navigate(['/login']);
        }
        else {
            if (JSON.parse(localStorage.getItem('curentUser')).user.permissions.includes('admin') == false) {
                this.router.navigate(['/userPage']);
            }
            else {
                this.getUsers();
            }
        }
    };
    AdminPageComponent.prototype.getUsers = function () {
        var _this = this;
        this.dataService.getUsers(JSON.parse(localStorage.getItem('curentUser')).token, this.page).subscribe(function (users) {
            _this.users = users;
            if (_this.users.length == 0) {
                _this.checkForUsers = false;
            }
            else {
                _this.checkForUsers = true;
            }
        });
    };
    AdminPageComponent.prototype.next = function () {
        this.page++;
        this.getUsers();
    };
    AdminPageComponent.prototype.previous = function () {
        this.page--;
        this.getUsers();
    };
    AdminPageComponent.prototype.redirectToChangeUserData = function (id) {
        this.customerId = id;
        console.log(this.customerId);
        this.router.navigate(['/changeUserData', { id: this.customerId }]);
    };
    AdminPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-page',
            template: __webpack_require__("../../../../../src/app/components/admin-page/admin-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-page/admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/animation-screen/animation-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    background-color: #000;\r\n  \r\n  }\r\n\r\n  div#background{\r\n    background-color: #000;\r\n    background-size: cover;\r\n    min-height: 100vh;\r\n    background-repeat: repeat-y;\r\n}\r\n  ul{\r\n    position: absolute;\r\n    top:50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    margin: 0px;\r\n    padding: 0px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n  ul li{\r\n  list-style: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  -webkit-animation: animate 1.6s ease-in-out infinite;\r\n          animation: animate 1.6s ease-in-out infinite;\r\n  margin: 0px;\r\npadding: 0;\r\n  }\r\n  @-webkit-keyframes animate{\r\n    0%, 40%, 100%\r\n    {\r\n      -webkit-transform: scale(0.2);\r\n              transform: scale(0.2);\r\n    }\r\n    20%\r\n    {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n  }\r\n  @keyframes animate{\r\n    0%, 40%, 100%\r\n    {\r\n      -webkit-transform: scale(0.2);\r\n              transform: scale(0.2);\r\n    }\r\n    20%\r\n    {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n  }\r\n  ul li:nth-child(1){\r\n    -webkit-animation-delay:-1.4s;\r\n            animation-delay:-1.4s;\r\n    background-color: #ffff00;\r\n    box-shadow: 0 0 50px #ffff00; \r\n  }\r\n  ul li:nth-child(2){\r\n    -webkit-animation-delay:-1.2s;\r\n            animation-delay:-1.2s;\r\n    background-color: #76ff30;\r\n    box-shadow: 0 0 50px #76ff30; \r\n  }\r\n  ul li:nth-child(3){\r\n    -webkit-animation-delay:-1s;\r\n            animation-delay:-1s;\r\n    background-color: #f06292;\r\n    box-shadow: 0 0 50px #f06292; \r\n  }\r\n  ul li:nth-child(4){\r\n    -webkit-animation-delay:-0.8s;\r\n            animation-delay:-0.8s;\r\n    background-color: #4fc3f7;\r\n    box-shadow: 0 0 50px #4fc3f7; \r\n  }\r\n  ul li:nth-child(5){\r\n    -webkit-animation-delay:-0.6s;\r\n            animation-delay:-0.6s;\r\n    background-color: #ba68c8;\r\n    box-shadow: 0 0 50px #ba68c8; \r\n  }\r\n  ul li:nth-child(6){\r\n    -webkit-animation-delay:-0.4s;\r\n            animation-delay:-0.4s;\r\n    background-color: #f57c00;\r\n    box-shadow: 0 0 50px #f57c00; \r\n  }\r\n  ul li:nth-child(7){\r\n    -webkit-animation-delay:-0.2s;\r\n            animation-delay:-0.2s;\r\n    background-color: #673ab7;\r\n    box-shadow: 0 0 50px #673ab7; \r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/animation-screen/animation-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"background\">\n\t<div class=\"row\">\n\t\t<ul>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/animation-screen/animation-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnimationScreenComponent = (function () {
    function AnimationScreenComponent(route, dataService, router) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
    }
    AnimationScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/login']);
        }, 1860);
    };
    AnimationScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-animation-screen',
            template: __webpack_require__("../../../../../src/app/components/animation-screen/animation-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/animation-screen/animation-screen.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AnimationScreenComponent);
    return AnimationScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/change-user-data/change-user-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.hidden {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n#profile-image1 {\r\n    width: 100px;\r\n    height: 100px;\r\n\tborder:2px solid #03b1ce ;}\r\n\t.tital{ font-size:16px; font-weight:500;}\r\n     .bot-border{ border-bottom:1px #f8f8f8 solid;  margin:5px 0  5px 0\r\n}\r\n\r\n.container#userinfo{\r\n    margin-top: 20px;\r\n}\r\n.textSize{\r\n    line-height: 34px !important;\r\n}\r\n\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n\r\n  .customAlert {\r\n    display:inline-block !important;\r\n  }\r\n\r\n  .alertSuccessful{\r\n      margin-top: 20px;\r\n      background-color: #42A948;\r\n  }\r\n\r\n  .alertUnsuccessful{\r\n    margin-top: 20px;\r\n    background-color: #a94442; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/change-user-data/change-user-data.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n</app-navbar>\n<div class=\"container\" id=\"userinfo\">\n\t<div class=\"row\">\n\t\n        \n        \n       <div class=\"col-md-7 col-md-offset-3 \">\n          <form #changeForm=\"ngForm\" (ngSubmit)=\"changeData(changeForm.value)\">\n              <fieldset>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">  <h4 >Change user informations</h4></div>\n   <div class=\"panel-body\">\n      \n    <div class=\"box box-info\">\n      \n        \n            <div class=\"box-body\">\n                     <div class=\"col-sm-12\">\n                     <div  align=\"center\"> <img alt=\"User Pic\" src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" id=\"profile-image1\" class=\"img-circle img-responsive\"> \n                \n                <input id=\"profile-image-upload\" class=\"hidden\" type=\"file\">\n\n                <!--Upload Image Js And Css-->\n          \n                     </div>\n              \n              <br>\n    \n              <!-- /input-group -->\n            </div>\n            \n\n             \n            <div class=\"col-sm-12 text-center\">\n            <h4 style=\"color:#03b1ce;\">{{username}} </h4>\n                         \n            </div>\n            <div class=\"clearfix\"></div>\n            <hr style=\"margin:5px 0 5px 0;\">\n    \n<div class=\"form-group\">     \n  <div class=\"col-sm-6 col-xs-6 tital textSize\">Name</div><div class=\"col-sm-6 \">\n    <input id=\"name\" name=\"name\" class=\"form-control\"\n               required\n               [(ngModel)]=\"oldName\" #name=\"ngModel\" >\n               <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"has-error\">\n              <span *ngIf=\"name.errors.required\" class=\"help-block\">  Name is required.</span>\n          </div>\n  </div>\n     <div class=\"clearfix\"></div>\n  <div class=\"bot-border\"></div>\n</div>\n\n\n  <div class=\"form-group\">\n      <div class=\"col-sm-6 col-xs-6 tital textSize\">Email</div><div class=\"col-sm-6 \">\n        <input class=\"form-control\" type=\"email\" [(ngModel)]=\"oldEmail\" name=\"email\" \n        #email=\"ngModel\" email pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required>\n                   <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"has-error\">\n                  <span *ngIf=\"email.errors.required\" class=\"help-block\">  Email is required.</span>\n                  <span *ngIf=\"email.errors\" class=\"help-block\">  Email is not valid.</span>\n              </div>\n      </div>\n         <div class=\"clearfix\"></div>\n      <div class=\"bot-border\"></div>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"col-sm-6 col-xs-6 tital textSize\">Password</div><div class=\"col-sm-6 \">\n          <input id=\"password\" name=\"password\" class=\"form-control\"\n                     required minlength=\"6\"\n                     [(ngModel)]=\"oldPassword\" #password=\"ngModel\" >\n                     <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"has-error\">\n                    <span *ngIf=\"password.errors.required\" class=\"help-block\">  Passwordis required.</span>\n                    <span *ngIf=\"password.errors.minlength\" class=\"help-block\">  Password must be at least 6 characters long.</span>\n                </div>\n        </div>\n           <div class=\"clearfix\"></div>\n        <div class=\"bot-border\"></div>\n      </div>\n            <!-- /.box-body -->\n          </div>\n          <!-- /.box -->\n        </div>\n    </div> \n  </div>\n    <div style=\"text-align:center\">\n    <input type=\"submit\" id=\"singlebutton\"  name=\"singlebutton\" class=\"btn btn-primary btn\" value=\"Change\" [disabled]=\"changeForm.invalid\" />\n    <div class=\"alert alert-success {{classAlert}}\" *ngIf=\"isValid\">\n        <strong>{{errorMessage}}</strong> \n      </div>\n  </div>\n  </fieldset>\n</form>\n    \n</div>    \n   </div>\n</div>\n\n\n\n\n         "

/***/ }),

/***/ "../../../../../src/app/components/change-user-data/change-user-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeUserDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeUserDataComponent = (function () {
    function ChangeUserDataComponent(route, dataService, router) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.isValid = false;
    }
    ChangeUserDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idCustomer = this.route.snapshot.params['id'];
        this.dataService.showUserDataForChange(JSON.parse(localStorage.getItem('curentUser')).token, this.idCustomer).subscribe(function (user) {
            _this.username = user.username;
            _this.oldName = user.name;
            _this.oldPassword = user.password;
            _this.oldEmail = user.email;
            _this.idCustomer = user.id;
        });
        console.log(this.isValid);
    };
    ChangeUserDataComponent.prototype.changeData = function (user) {
        var _this = this;
        if (user.name != null) {
            this.name = user.name;
        }
        if (user.password != null) {
            this.password = user.password;
        }
        if (user.email != null) {
            this.email = user.email;
        }
        console.log(this.idCustomer);
        this.dataService.changeUserData(this.idCustomer, this.username, this.password, this.name, this.email, JSON.parse(localStorage.getItem('curentUser')).token).subscribe(function (success) {
            console.log(success);
            if (success == true) {
                _this.errorMessage = "Successful data change";
                _this.classAlert = "alertSuccessful";
                _this.isValid = true;
            }
            else if (success == null) {
                _this.errorMessage = "Unsuccessful data change";
                _this.classAlert = "alertUnsuccessful";
                _this.isValid = true;
            }
        });
    };
    ChangeUserDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-user-data',
            template: __webpack_require__("../../../../../src/app/components/change-user-data/change-user-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/change-user-data/change-user-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ChangeUserDataComponent);
    return ChangeUserDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/changepassword/changepassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logoPic{\r\n    padding-top: 20px;\r\n}\r\n\r\n.btn-price:hover {\r\n    background: #fff !important;\r\n    color: #337ab7 !important;\r\n    -webkit-transition:  all .3s ease;\r\n}\r\n.btn-price {\r\n    background: #337ab7 !important;\r\n    color: #fff !important;\r\n    border: solid 1px rgb(185, 185, 185) !important;\r\n    -webkit-transition:  all .3s ease;\r\n}\r\n.first{\r\n    padding-top: 10px;\r\n}\r\n\r\n.left-form{\r\n    margin-top: 20px;\r\n}\r\n\r\n.right-form{\r\n    margin-top: 20px;\r\n}\r\n\r\n.jumbotron{\r\n    margin-top: 50px;\r\n    border-radius: 30px;\r\n    background-color: rgba(7, 7, 7, 0.75);\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\ndiv#background{\r\n    background: url(" + __webpack_require__("../../../../../src/app/components/changepassword/rainOnWindow.png") + ") no-repeat;\r\n    background-size: cover;\r\n    min-height: 100vh;\r\n    background-repeat: repeat-y;\r\n}\r\n\r\n\r\n.registerText{\r\n    color: white;\r\n}\r\n\r\n.registerText#legendRegister{\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.form-control{\r\n    height: 45px !important;\r\n    font-size: 18px;\r\n   \r\n}\r\n\r\nlabel{\r\n    font-size: 18px;\r\n}\r\n\r\n#havelogin{\r\n    padding-top: 20px;\r\n    \r\n}\r\n\r\nlabel.login#loginLabelBottom{\r\n    color: rgb(37, 172, 250);\r\n}\r\n\r\nlabel.login#loginLabelBottom:hover{\r\n    color: rgb(25, 109, 158);\r\n}\r\n\r\n.alert{\r\n    background: rgb(235, 102, 102);\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: -5px;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n.vertical-center-row {\r\n    margin:auto;\r\n   padding-bottom: 20px;\r\n   text-align:center;\r\n \r\n }\r\n\r\n .pForgotPassword{\r\n     font-size: 1em !important;\r\n     \r\n\r\n }\r\n\r\n .pForgotPassword:hover{\r\n    font-size: 1em !important;\r\n    color: rgb(206, 206, 206);\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/changepassword/changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\" id=\"background\" >\n    <div class=\"row\">\n      <div style=\"text-align:center\" class=\"col-md-12\">\n          <img id=\"logoPic\" width=\"180\" alt=\"logo\" src=\"../../../assets/sw.png\">\n        </div>\n      </div>\n        <div class=\"row\">\n    <div class=\"jumbotron col-md-8 col-md-offset-2\">\n  <div class=\"row text-center\">\n  </div>\n  <div class=\"row\">\n  <div class=\"col-md-12\" >\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"changePassword(rForm.value)\" class=\"form-horizontal left-form login_form\">\n      <fieldset>\n      \n      <!-- Form Name -->\n      <legend id=\"legendRegister\" class=\"text-center registerText\"><h3>Change password</h3></legend>\n     \n          <div class=\"row vertical-center-row\">\n              <div class=\"alert text-center col-md-2 col-md-offset-5\" *ngIf=\"isError\">{{errorMessage}}</div>\n          </div>\n      \n      \n      <!-- Email input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">Old password</label>\n      <div class=\"col-md-4\">\n        <input formControlName=\"oldPassword\" class=\"form-control input-md\" ng-hide=\"showpassword\" type=\"password\" ng-model=\"oldPassword\">\n        \n      </div>\n    </div>\n      \n      <!-- Text input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">New password</label>  \n        <div class=\"col-md-4\">\n        <input  formControlName=\"newPassword\" class=\"form-control input-md\" ng-hide=\"showpassword\" type=\"password\" ng-model=\"newPassword\">\n        <div class=\"alert\" *ngIf=\"!rForm.controls['newPassword'].valid && rForm.controls['newPassword'].touched\">\n          Password must be minimum 6 characters long\n        </div>\n        </div>\n      </div>\n\n       <!-- Text input-->\n       <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\"> Repeat new password</label>  \n        <div class=\"col-md-4\">\n        <input  formControlName=\"newPasswordConfirm\" class=\"form-control input-md turnGreen\" ng-hide=\"showpassword\" type=\"password\" ng-model=\"newPasswordConfirm\">\n        <div class=\"alert turnGreen\" *ngIf=\"!rForm.controls['newPasswordConfirm'].valid && rForm.controls['newPasswordConfirm'].touched\">\n          Password did not match\n        </div>\n        <div class=\"alert turnGreen\" *ngIf=\"isSucess\">\n          {{passwordAlert}}\n        </div>\n        </div>\n      </div>\n      \n      \n      \n      <!-- Button (Double) -->\n      <div style=\"text-align:center\">\n        \n        \n         <input type=\"submit\" id=\"singlebutton\"  name=\"singlebutton\" class=\"btn btn-primary btn-lg\" value=\"Change\" [disabled]=\"!rForm.valid\"/>\n          \n        \n      </div>\n  \n      <div id=\"havelogin\" style=\"text-align:center\">\n          \n          \n           \n           <label class=\"pForgotPassword\" (click)=\"redirectToLogin()\">Go back to login</label>\n            \n          \n        </div>\n\n      \n      \n      </fieldset>\n      </form>\n      \n  </div>\n</div>\n  \n</div>\n  </div>\n  </div>\n \n\n\n\n\n\n\n\n\n  \n  \n  \n  \n    \n    "

/***/ }),

/***/ "../../../../../src/app/components/changepassword/changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_other_validator__ = __webpack_require__("../../../../../src/app/components/changepassword/match-other-validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(router, fb, dataService) {
        this.router = router;
        this.fb = fb;
        this.dataService = dataService;
        this.username = '';
        this.newPassword = '';
        this.newPasswordConfirm = '';
        this.passwordAlert = '';
        this.isSucess = false;
        this.rForm = fb.group({
            'newPassword': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].minLength(6)])],
            'newPasswordConfirm': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_4__match_other_validator__["a" /* matchOtherValidator */])('newPassword')])],
            'oldPassword': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].minLength(6)])]
        });
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
    };
    ChangepasswordComponent.prototype.changePassword = function (user) {
        var _this = this;
        this.newPassword = user.newPassword;
        this.oldPassword = user.oldPassword;
        this.token = JSON.parse(localStorage.getItem('curentUser')).token;
        this.dataService.changePassword(this.token, this.oldPassword, this.newPassword).subscribe(function (user) {
            if (user.confirmed != false && user.password == _this.newPassword) {
                _this.passwordAlert = 'Password is changed sucessfuly';
                _this.isSucess = true;
                _this.dataService.login(user.username, user.password).subscribe(function (usertoken) {
                    //this.usertoken = usertoken;
                    _this.token = usertoken.token;
                    var isAdmin = usertoken.user.permissions.includes('admin');
                    localStorage.setItem('curentUser', _this.token);
                    // console.log(this.usertoken.token);
                    // let jeAdmin:boolean = false;
                    // if(this.usertoken.user.permissions.includes('admin')){
                    //   jeAdmin = true;
                    // }
                    // console.log("Je admin: " + jeAdmin);
                    console.log(_this.token);
                    if (isAdmin) {
                        console.log('User je admin');
                        _this.router.navigate(['/adminPage']);
                    }
                    else {
                        console.log('User nije admin');
                        _this.router.navigate(['/userPage']);
                    }
                });
            }
            else {
                _this.passwordAlert = 'You did not enter correct old password';
                _this.isSucess = true;
            }
        });
    };
    ChangepasswordComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    ChangepasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-changepassword',
            template: __webpack_require__("../../../../../src/app/components/changepassword/changepassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/changepassword/changepassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/changepassword/match-other-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchOtherValidator;
function matchOtherValidator(otherControlName) {
    var thisControl;
    var otherControl;
    return function matchOtherValidate(control) {
        if (!control.parent) {
            return null;
        }
        // Initializing the validator.
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName);
            if (!otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
            otherControl.valueChanges.subscribe(function () {
                thisControl.updateValueAndValidity();
            });
        }
        if (!otherControl) {
            return null;
        }
        if (otherControl.value !== thisControl.value) {
            return {
                matchOther: true
            };
        }
        return null;
    };
}


/***/ }),

/***/ "../../../../../src/app/components/changepassword/rainOnWindow.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rainOnWindow.2e56eacf48e30db560fa.png";

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-form {\r\n    text-align: center;\r\n    margin: 0 auto; \r\n }\r\n \r\n .contact-form input, .contact-form textarea {\r\n     font-size: 17px;\r\n     width: 100%;\r\n     padding: 16px 20px;\r\n     border: 2px solid #9e9e9e;\r\n     margin-bottom: 15px;\r\n     color:#000000;\r\n }\r\n \r\n .contact-form .button {\r\n     background: #3b74af;\r\n     color: white;\r\n     padding: 18px 75px;\r\n     cursor: pointer;\r\n     margin: 0 auto;\r\n     border:none;\r\n }\r\n\r\n .alertGreen{\r\n    background: #4BB543;\r\n    color: #ffffff;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: -5px;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n.alertRed{\r\n    background: rgb(175, 0, 0);\r\n    color: #ffffff;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: -5px;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-lg-6 col-lg-offset-3 col-sm-6 col-sm-offset-3 col-xs-12\">\n          <h3 class=\"text-center\">Contact Us</h3>\n          <div class=\"contact\">\n             <form [formGroup]=\"rForm\" (ngSubmit)=\"sendMessage(rForm.value)\" class=\"contact-form\" action=\"\" method=\"post\">\n                      <input formControlName=\"subject\" type=\"text\" name=\"subject\" placeholder=\"Subject\" ng-model=\"subject\" required>\n                \n                <textarea formControlName=\"text\" name=\"text\" rows=\"10\" placeholder=\"Enter your message\" ng-model=\"text\" required></textarea>\n                <input class=\"button\" type=\"submit\">\n            </form>\n          </div>\n          <div class=\"{{alertClass}} text-center col-md-6 col-md-offset-3\" *ngIf=\"isOK\">\n              {{messageSuccess}}\n            </div>\n      </div>\n      \n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpComponent = (function () {
    function HelpComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        this.isOK = false;
        this.isNotOK = false;
        this.rForm = fb.group({
            'subject': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)])],
            'text': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)])]
        });
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.sendMessage = function (message) {
        var _this = this;
        this.subject = message.subject;
        this.text = message.text;
        this.dataService.sendMessage(this.subject, this.text, JSON.parse(localStorage.getItem('curentUser')).token).subscribe(function (success) {
            if (success === true) {
                _this.alertClass = 'alertGreen';
                _this.isOK = true;
                _this.messageSuccess = 'Message sent successfuly';
                console.log(success);
            }
            else {
                _this.alertClass = 'alertRed';
                _this.isOK = true;
                _this.messageSuccess = 'Message did not sent successfuly';
            }
        });
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/components/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.btn-price:hover {\r\n    background: #fff !important;\r\n    color: #337ab7 !important;\r\n    -webkit-transition:  all .3s ease;\r\n}\r\n.btn-price {\r\n    background: #337ab7 !important;\r\n    color: #fff !important;\r\n    border: solid 1px rgb(185, 185, 185) !important;\r\n    -webkit-transition:  all .3s ease;\r\n}\r\n.first{\r\n    padding-top: 10px;\r\n}\r\n\r\n.left-form{\r\n    margin-top: 20px;\r\n}\r\n\r\n.right-form{\r\n    margin-top: 20px;\r\n}\r\n\r\n.jumbotron{\r\n    margin-top: 50px;\r\n    border-radius: 30px;\r\n    background-color: rgba(7, 7, 7, 0.75);\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n@media(max-width:991px){\r\n    .jumbotron{\r\n        margin: 20px 10px;\r\n        padding: 0px 30px;\r\n        border-radius: 30px;\r\n        background-color: rgba(7, 7, 7, 0.75);\r\n        color: rgb(255, 255, 255);\r\n    }\r\n\r\n    #logoPic{\r\n        margin-top: 10px;\r\n    }\r\n    form.login_form{\r\n        margin-top: 0px;\r\n    }\r\n    div.form-text{\r\n        margin-top: -12px;\r\n    }\r\n}\r\n\r\n\r\ndiv#background{\r\n    background: url(" + __webpack_require__("../../../../../src/app/components/login/rainOnWindow.png") + ") no-repeat;\r\n    background-size: cover;\r\n    min-height: 100vh;\r\n    background-repeat: repeat-y;\r\n}\r\n\r\n.registerText{\r\n    color: white;\r\n}\r\n\r\n.registerText#legendRegister{\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.form-control{\r\n    height: 45px !important;\r\n    font-size: 18px;\r\n   \r\n}\r\n\r\nlabel{\r\n    font-size: 18px;\r\n}\r\n\r\n#havelogin{\r\n    padding-top: 20px;\r\n    \r\n}\r\n\r\nlabel.login#loginLabelBottom{\r\n    color: rgb(37, 172, 250);\r\n}\r\n\r\nlabel.login#loginLabelBottom:hover{\r\n    color: rgb(25, 109, 158);\r\n}\r\n\r\n.alert{\r\n    background: rgb(235, 102, 102);\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: -5px;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n.vertical-center-row {\r\n    margin:auto;\r\n   padding-bottom: 20px;\r\n   text-align:center;\r\n \r\n }\r\n\r\n .pForgotPassword{\r\n     font-size: 1em !important;\r\n     \r\n\r\n }\r\n\r\n .pForgotPassword:hover{\r\n    font-size: 1em !important;\r\n    color: rgb(206, 206, 206);\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container-fluid\" id=\"background\">\n        \n      <div class=\"row\">\n      <div class=\"jumbotron col-md-8 col-md-offset-2\">\n    <div class=\"row text-center\">\n    </div>\n    <div class=\"row\">\n    <div class=\"col-md-12\" >\n        <div style=\"text-align:center\">\n            <img id=\"logoPic\" width=\"80\" alt=\"logo\" src=\"../../../assets/sw.png\">\n          </div>\n      <form [formGroup]=\"rForm\" (ngSubmit)=\"loginUser(rForm.value)\" class=\"form-horizontal left-form login_form\">\n        <fieldset>\n        \n        <!-- Form Name -->\n       \n        <legend id=\"legendRegister\" class=\"text-center registerText\"><h3>Login</h3></legend>\n       \n            <div class=\"row vertical-center-row\">\n                <div class=\"alert text-center col-md-2 col-md-offset-5\" *ngIf=\"isError\">{{errorMessage}}</div>\n            </div>\n        \n        \n        <!-- Text input-->\n        <div class=\"form-group form-text\">\n          \n          \n          <label class=\"col-md-4 control-label\">Email</label>  \n          <div class=\"col-md-4\">\n          <input type=\"text\" formControlName=\"email\" class=\"form-control input-md\" ng-model=\"email\">\n            \n          </div>\n        </div>\n        \n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\">Password</label>  \n          <div class=\"col-md-4\">\n          <input  formControlName=\"password\" class=\"form-control input-md\" ng-hide=\"showpassword\" type=\"password\" ng-model=\"password\">\n          \n          </div>\n        </div>\n     \n        \n        \n        \n        <!-- Button (Double) -->\n        <div style=\"text-align:center\">\n          \n          \n           <input type=\"submit\" id=\"singlebutton\"  name=\"singlebutton\" class=\"btn btn-primary btn-lg\" value=\"Login\" [disabled]=\"!rForm.valid\"/>\n            \n          \n        </div>\n    \n        <div id=\"havelogin\" style=\"text-align:center\">\n            \n            \n             <label>Don't have an account? <label id=\"loginLabelBottom\" class=\"login\" (click)=\"redirectToRegister()\">Register</label></label>\n             <br>\n             <label class=\"pForgotPassword\" (click)=\"redirectToForgotPassword()\">Forgot my password</label>\n              \n            \n          </div>\n\n        \n        \n        </fieldset>\n        </form>\n        \n    </div>\n  </div>\n    \n    \n    </div>\n    </div>\n    </div>\n    \n    \n    \n    "

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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
    function LoginComponent(router, dataService, fb) {
        this.router = router;
        this.dataService = dataService;
        this.fb = fb;
        this.email = '';
        this.password = '';
        this.titleAlert = 'This field is required';
        this.isError = false;
        this.rForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].minLength(5)])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].minLength(6)])]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('curentUser') != null) {
            // this.username = user.username;
            // this.password = user.password;
            // this.dataService.login(this.username,this.password).subscribe((usertoken) => {
            //   this.isAdmin = usertoken.user.permissions.includes('admin');
            // },
            //          resError => this.errorMessage =  "User do not exist" );
            this.token = JSON.parse(localStorage.getItem('curentUser')).token;
            this.isAdmin = JSON.parse(localStorage.getItem('curentUser')).user.permissions.includes('admin');
            if (this.isAdmin) {
                this.router.navigate(['/adminPage']);
            }
            else {
                this.router.navigate(['/userPage']);
            }
            console.log("jeste logovan i permsiija: " + this.isAdmin);
        }
        else {
            console.log("nije logovan");
        }
        console.log('Local storage value:' + localStorage.getItem('curentUser'));
    };
    LoginComponent.prototype.redirectToRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.redirectToForgotPassword = function () {
        this.router.navigate(['/changePassword']);
    };
    LoginComponent.prototype.loginUser = function (user) {
        var _this = this;
        console.log('Logovanje usera');
        this.email = user.email;
        this.password = user.password;
        this.dataService.login(this.email, this.password).subscribe(function (usertoken) {
            //this.usertoken = usertoken;
            _this.token = usertoken.token;
            _this.isAdmin = usertoken.user.permissions.includes('admin');
            localStorage.setItem('curentUser', JSON.stringify(usertoken));
            console.log(_this.token);
            if (_this.isAdmin) {
                console.log('User je admin');
                _this.router.navigate(['/adminPage']);
            }
            else {
                console.log('User nije admin');
                _this.router.navigate(['/userPage']);
            }
        }, function (resError) { return _this.errorMessage = "User do not exist"; });
        this.isError = true;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/rainOnWindow.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rainOnWindow.2e56eacf48e30db560fa.png";

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logoPic{\r\n    padding-top: 20px;\r\n}\r\n\r\nli:hover#liHover {\r\n     background-color:rgb(216, 216, 216);\r\n     padding-left: 20px;\r\n }\r\n\r\nli#liHover{\r\n     \r\n     font-size: 1.1em;\r\n     padding-left: 10px;\r\n }\r\n\r\n label.labelLi{\r\n\r\n    font-weight: normal !important;\r\n    \r\n }\r\n\r\n\r\n\r\n a,label.labelLi,label.labelLo { cursor: pointer; }\r\n\r\n.labelLo{\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n\r\n@media(max-width:991px){\r\n  \r\n  .dropdown-menu{\r\n    color: rgb(216, 216, 216);\r\n  }\r\n \r\n}\r\n\r\n \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <div class=\"navbar-brand\">\n              <label (click)=\"redirectToHome()\" class=\"labelLo\"> SWaRM </label>     \n                    \n            </div>\n            <button data-toggle=\"collapse\" data-target=\"#navcol-1\" class=\"navbar-toggle collapsed\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown\"><a data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\" class=\"dropdown-toggle\">Welcome, {{name}} <span class=\"caret\"></span></a>\n                    <ul role=\"menu\" class=\"dropdown-menu\">\n                        <li role=\"presentation\" id=\"liHover\" (click)=\"redirectToHome()\"><label class=\"labelLi\">Home</label></li>\n                        <li role=\"presentation\" id=\"liHover\" (click)=\"redirectToUserInfo()\"><label class=\"labelLi\">See profile</label></li>\n                        <li role=\"presentation\" id=\"liHover\" (click)=\"redirectToChangePassword()\"><label class=\"labelLi\">Change password</label></li>\n                        <li role=\"presentation\" id=\"liHover\" (click)=\"redirectToHelp()\"><label class=\"labelLi\">Help</label></li>\n                        <li role=\"presentation\" id=\"liHover\" (click)=\"logOut()\" ><label class=\"labelLo\">Log out</label></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(dataService, router, authService) {
        this.dataService = dataService;
        this.router = router;
        this.authService = authService;
        this.hideLogo = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = JSON.parse(localStorage.getItem('curentUser')).token;
        this.dataService.getLogedUserInfo(this.token).subscribe(function (user) {
            _this.user = user;
            console.log(user);
            _this.name = user.name;
        });
    };
    NavbarComponent.prototype.logOut = function () {
        localStorage.removeItem('curentUser');
        this.router.navigate(['/login']);
        this.authService.signOut();
        this.user = null;
    };
    NavbarComponent.prototype.redirectToHome = function () {
        if (localStorage.getItem('curentUser') != null) {
            this.isAdmin = JSON.parse(localStorage.getItem('curentUser')).user.permissions.includes('admin');
            if (this.isAdmin) {
                this.router.navigate(['/adminPage']);
            }
            else {
                this.router.navigate(['/userPage']);
            }
        }
    };
    NavbarComponent.prototype.redirectToUserInfo = function () {
        this.router.navigate(['/userinfo']);
    };
    NavbarComponent.prototype.redirectToChangePassword = function () {
        this.router.navigate(['/changePassword']);
    };
    NavbarComponent.prototype.redirectToAdminPage = function () {
        this.router.navigate(['/adminPage']);
    };
    NavbarComponent.prototype.redirectToHelp = function () {
        this.router.navigate(['/help']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularx_social_login__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/rainOnWindow.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rainOnWindow.2e56eacf48e30db560fa.png";

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.btn-price:hover {\r\n    background: #fff !important;\r\n    color: #337ab7 !important;\r\n    -webkit-transition:  all .3s ease;\r\n}\r\n.btn-price {\r\n    background: #337ab7 !important;\r\n    color: #fff !important;\r\n    border: solid 1px rgb(185, 185, 185) !important;\r\n    -webkit-transition:  all .3s ease;\r\n}\r\n.first{\r\n    padding-top: 10px;\r\n}\r\n\r\n.left-form{\r\n    margin-top: 20px;\r\n}\r\n\r\n.right-form{\r\n    margin-top: 20px;\r\n}\r\n\r\n.jumbotron{\r\n    margin-top: 50px;\r\n    border-radius: 30px;\r\n    background-color: rgba(7, 7, 7, 0.75);\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n@media(max-width:991px){\r\n    .jumbotron{\r\n        margin: 20px 10px;\r\n        padding: 0px 30px;\r\n        border-radius: 30px;\r\n        background-color: rgba(7, 7, 7, 0.75);\r\n        color: rgb(255, 255, 255);\r\n    }\r\n\r\n    #logoPic{\r\n        margin-top: 10px;\r\n    }\r\n    form.login_form{\r\n        margin-top: 0px;\r\n    }\r\n    div.form-text{\r\n        margin-top: -12px;\r\n    }\r\n}\r\n\r\ndiv#background{\r\n    background: url(" + __webpack_require__("../../../../../src/app/components/register/rainOnWindow.png") + ") no-repeat;\r\n    background-size: cover;\r\n    min-height: 100vh;\r\n    background-repeat: repeat-y;\r\n}\r\n\r\n.registerText{\r\n    color: white;\r\n}\r\n\r\n.registerText#legendRegister{\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.form-control{\r\n    height: 45px !important;\r\n    font-size: 18px;\r\n   \r\n}\r\n\r\nlabel{\r\n    font-size: 18px;\r\n}\r\n\r\n#havelogin{\r\n    padding-top: 20px;\r\n    \r\n}\r\n\r\nlabel.login#loginLabelBottom{\r\n    color: rgb(37, 172, 250);\r\n}\r\n\r\nlabel.login#loginLabelBottom:hover{\r\n    color: rgb(25, 109, 158);\r\n}\r\n\r\n.alert{\r\n    background: rgb(235, 102, 102);\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: -5px;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n.alert1{\r\n    background: rgb(22, 163, 41);\r\n    color: #fff;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: -5px;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n.alert2{\r\n    background: rgb(235, 102, 102);\r\n    color: #fff;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: -5px;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n.vertical-center-row {\r\n    margin:auto;\r\n   padding-bottom: 20px;\r\n   text-align:center;\r\n \r\n }\r\n .registerBtn{\r\n     margin-top: -40px;\r\n }\r\n\r\n .socialDiv{\r\n     padding-bottom: 15px;\r\n }\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\" id=\"background\" >\n    \n        <div class=\"row\">\n    <div class=\"jumbotron col-md-8 col-md-offset-2\">\n  <div class=\"row text-center\">\n  </div>\n  <div class=\"row\">\n  <div class=\"col-md-12\" >\n      <div style=\"text-align:center\">\n          <img id=\"logoPic\" width=\"80\" alt=\"logo\" src=\"../../../assets/sw.png\">\n        </div>\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"addUser(rForm.value)\" class=\"form-horizontal left-form login_form\">\n      <fieldset>\n      \n      <!-- Form Name -->\n      <legend id=\"legendRegister\" class=\"text-center registerText\"><h3>Register</h3></legend>\n\n      \n      \n      <!-- Text input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Name</label>  \n        <div class=\"col-md-4\">\n        <input type=\"text\" formControlName=\"name\" class=\"form-control input-md\">\n          <div class=\"alert\" *ngIf=\"!rForm.controls['name'].valid && rForm.controls['name'].touched\">\n            {{titleAlert}} and must be minimum 5 characters long\n          </div>\n        </div>\n      </div>\n      \n      <!-- Text input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Password</label>  \n        <div class=\"col-md-4\">\n        <input  formControlName=\"password\" class=\"form-control input-md\" ng-hide=\"showpassword\" type=\"password\" ng-model=\"password\">\n        <div class=\"alert\" *ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">\n          Password must be minimum 6 characters long\n        </div>\n        </div>\n      </div>\n      \n      <!-- Text input-->\n    \n      \n      <!-- Password input-->\n     \n\n      <!-- Email input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Email</label>\n        <div class=\"col-md-4\">\n          <input formControlName=\"email\" type=\"email\" class=\"form-control input-md\">\n          <div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">\n            {{emailAlert}}\n          </div>\n        </div>\n      </div>\n      <div class=\"row vertical-center-row\">\n          <div class=\"alert1 text-center col-md-4 col-md-offset-4\" *ngIf=\"isOK\" (click)=\"redirectToLogin()\">{{messageEmail}}</div>\n          \n      </div>\n      <div class=\"row vertical-center-row\">\n          <div class=\"alert2 text-center col-md-4 col-md-offset-4\" *ngIf=\"isFAILED\">{{badmessageEmail}}</div>\n          \n      </div>\n      \n      \n      \n      <!-- Button (Double) -->\n      <div style=\"text-align:center\" class=\"registerBtn\">\n        \n        \n         <input type=\"submit\" id=\"singlebutton\"  name=\"singlebutton\" class=\"btn btn-primary btn-lg\" value=\"Register\" [disabled]=\"!rForm.valid\"/>\n          \n        \n      </div>\n  \n      <div id=\"havelogin\" style=\"text-align:center\">\n      \n      \n          \n           <label>Already have an account? <label id=\"loginLabelBottom\" class=\"login\" (click)=\"redirectToLogin()\">Login</label></label>\n            \n          \n        </div>\n      \n      </fieldset>\n      </form>\n      <div style=\"text-align:center\" class=\"socialDiv\">\n      <div class=\"card-block\">\n        <p class=\"card-text\">Or register with</p>\n      </div>\n      <div class=\"card-block\">\n        <button class=\"btn btn-social-icon btn-google\" (click)=\"signInWithGoogle()\"><span class=\"fa fa-google\"></span></button>\n        <button class=\"btn btn-social-icon btn-facebook\" (click)=\"signInWithFB()\"><span class=\"fa fa-facebook\"></span></button>\n      </div>\n    </div>\n  </div>\n</div>\n  \n</div>\n  </div>\n  </div>\n \n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
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
    function RegisterComponent(dataService, router, fb, authService) {
        this.dataService = dataService;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.name = '';
        this.password = '';
        this.surname = '';
        this.email = '';
        this.titleAlert = 'This field is required';
        this.emailAlert = 'Please enter the correct email, this email not valid';
        this.isOK = false;
        this.isFAILED = false;
        this.messageEmail = 'Verification email has been sent to your adress!\nCheck your email to complete registration!';
        this.badmessageEmail = 'That email adress does not exist!';
        this.rForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].minLength(5)])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].minLength(6)])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].email]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.userAuthout2 = null;
    };
    RegisterComponent.prototype.addUser = function (user) {
        var _this = this;
        console.log('Dodavanje usera');
        this.name = user.name;
        this.password = user.password;
        this.email = user.email;
        this.dataService.addUser(this.name, this.password, this.email, null).subscribe(function (success) {
            if (success == true) {
                _this.isOK = true;
                _this.isFAILED = false;
            }
            else {
                _this.isFAILED = true;
                _this.isOK = false;
            }
        });
    };
    RegisterComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_angularx_social_login__["d" /* GoogleLoginProvider */].PROVIDER_ID);
        this.authService.authState.subscribe(function (user) {
            _this.userAuthout2 = user;
            _this.loggedIn = (user != null);
            var photo = _this.userAuthout2.photoUrl;
            _this.dataService.addUser(_this.userAuthout2.name, null, _this.userAuthout2.email, photo).subscribe(function (success) {
                if (success == true) {
                    _this.isOK = true;
                    _this.isFAILED = false;
                }
                else {
                    _this.isFAILED = true;
                    _this.isOK = false;
                }
            });
        });
        console.log(this.userAuthout2);
    };
    RegisterComponent.prototype.signInWithFB = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_angularx_social_login__["c" /* FacebookLoginProvider */].PROVIDER_ID);
        this.authService.authState.subscribe(function (user) {
            _this.userAuthout2 = user;
            _this.loggedIn = (user != null);
            var photo = _this.userAuthout2.photoUrl;
            _this.dataService.addUser(_this.userAuthout2.name, null, _this.userAuthout2.email, photo).subscribe(function (success) {
                if (success == true) {
                    _this.isOK = true;
                    _this.isFAILED = false;
                }
                else {
                    _this.isFAILED = true;
                    _this.isOK = false;
                }
            });
        });
        console.log(this.userAuthout2);
    };
    RegisterComponent.prototype.signOut = function () {
        this.authService.signOut();
        this.user = null;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4_angularx_social_login__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-page/user-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-fixed thead {\r\n    width: 97%;\r\n    \r\n  }\r\n  .table-fixed tbody {\r\n    height: 370px;\r\n    overflow-y: auto;\r\n    width: 100%;\r\n  }\r\n  .table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\r\n    display: block;\r\n  }\r\n  .table-fixed tbody td, .table-fixed thead > tr> th {\r\n    float: left;\r\n    border-bottom-width: 0;\r\n  }\r\n.panel-default{\r\n    background-color: rgb(247, 247, 247);\r\n  }\r\n\r\n.table-fixed {\r\n    counter-reset: rowNumber=1;\r\n}\r\n\r\n.table-fixed tr {\r\n    counter-increment: rowNumber;\r\n}\r\n\r\n.table-fixed tr td:first-child::before {\r\n    content: counter(rowNumber);\r\n    min-width: 1em;\r\n    margin-right: 0.5em;\r\n}\r\n\r\n.paddingDiv{\r\n padding-top: 40px;\r\n}\r\n\r\n.chartDiv{\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.gmd {\r\n  background: #fff;\r\n  border-radius: 2px;\r\n  display: block;\r\n  margin: 1rem;\r\n}\r\n\r\n.gmd-1 {\r\n  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: all 0.25s ease-in-out;\r\n}\r\n\r\n.gmd-1:hover {\r\n  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n.panel-heading {\r\n  color: #333;\r\n  background-color: #e4e4e4;\r\n  border-color: rgb(0, 0, 0);\r\n}\r\n\r\n.panel-heading {\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.panel-heading {\r\n  padding: 10px 15px;\r\n  border-bottom: 1px solid transparent;\r\n  border-top-left-radius: 2px;\r\n  border-top-right-radius: 2px;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-page/user-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <div class=\"row paddingDiv\" >\r\n    <div class=\"col-md-6\" >\r\n      <div class=\"gmd gmd-1\">\r\n          <div class=\"panel-heading text-center\">pH value</div>\r\n          <div *ngIf=\"chartPh\">\r\n              <canvas id=\"ph\">{{chartPh}}</canvas>\r\n            </div>\r\n      </div> \r\n       \r\n    </div>\r\n\r\n     <div class=\"col-md-6\"> \r\n        <div class=\"gmd gmd-1\">\r\n            <div class=\"panel-heading text-center\">Temperature value</div>\r\n            <div *ngIf=\"chartTemp\">\r\n                <canvas id=\"temp\" >{{chartTemp}}</canvas>\r\n              </div>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\"> \r\n        <div class=\"gmd gmd-1\">\r\n            <div class=\"panel-heading text-center\">Hardness value</div>\r\n            <div *ngIf=\"chartHard\">\r\n                <canvas id=\"hard\" class=\"chartDiv\">{{chartHard}}</canvas>\r\n              </div>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\"> \r\n        <div class=\"gmd gmd-1\">\r\n            <div class=\"panel-heading text-center\">Chlorine level</div>\r\n            <div *ngIf=\"chartChlo\">\r\n                <canvas id=\"chlo\" >{{chartChlo}}</canvas>\r\n              </div>\r\n          </div>\r\n    </div>\r\n\r\n    \r\n\r\n    <div class=\"col-md-6\"> \r\n        <div class=\"gmd gmd-1\">\r\n            <div class=\"panel-heading text-center\">Consumption</div>\r\n            <table class=\"table table-bordered table-xs table-sm table-md m-0\">\r\n                <thead class=\"\">\r\n                    <tr>\r\n                        <th></th>\r\n                        <th>Today</th>\r\n                        <th>This week</th>\r\n                        <th>This month</th>\r\n                        <th>This year</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <th>Amount (dl)</th>\r\n                        <td>{{dailyConsumption}}</td>\r\n                        <td>{{weeklyConsumption}}</td>\r\n                        <td>{{monthlyConsumption}}</td>\r\n                        <td>{{yearlyConsumption}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Price</th>\r\n                        <td>{{priceForDailyConsumption | number : '.0-2' }} &euro;</td>\r\n                        <td>{{priceForWeeklyConsumption | number : '.0-2'}} &euro;</td>\r\n                        <td>{{priceForMonthlyConsumption | number : '.0-2'}} &euro;</td>\r\n                        <td>{{priceForYearlyConsumption | number : '.0-2'}} &euro;</td>\r\n                    </tr>\r\n                  \r\n                </tbody>\r\n            </table>\r\n            \r\n          </div>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user-page/user-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_rx_componentdestroyed__ = __webpack_require__("../../../../ng2-rx-componentdestroyed/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_rx_componentdestroyed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_rx_componentdestroyed__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserPageComponent = (function () {
    function UserPageComponent(dataService) {
        this.dataService = dataService;
        this.chartPh = [];
        this.chartTemp = [];
        this.chartHard = [];
        this.chartChlo = [];
        this.myObservable = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].interval(2000);
        this.timesPh = [];
        this.amountsPh = [];
        this.timesTemp = [];
        this.amountsTemp = [];
        this.timesHardness = [];
        this.amountsHardness = [];
        this.timesChlorine = [];
        this.amountsChlorine = [];
        this.consumptionPrice = 0.002;
    }
    UserPageComponent.prototype.ngOnDestroy = function () {
    };
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllSensors(JSON.parse(localStorage.getItem('curentUser')).token).subscribe(function (sensors) {
            _this.sensors = sensors;
            for (var _i = 0, sensors_1 = sensors; _i < sensors_1.length; _i++) {
                var sensor = sensors_1[_i];
                if (sensor.type == 'PH') {
                    _this.dataService.getWaterParameters(JSON.parse(localStorage.getItem('curentUser')).token, sensor.id).subscribe(function (parameters) {
                        var readings = parameters.reverse();
                        _this.lastReadingPhId = parameters[parameters.length - 1].id;
                        for (var _i = 0, readings_1 = readings; _i < readings_1.length; _i++) {
                            var reading = readings_1[_i];
                            var jsdate = new Date(reading.time);
                            _this.timesPh.push(jsdate.toLocaleTimeString('en-BG', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
                            _this.amountsPh.push(reading.amount);
                        }
                        _this.chartPh = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]('ph', {
                            type: 'line',
                            data: {
                                labels: _this.timesPh,
                                datasets: [
                                    {
                                        data: _this.amountsPh,
                                        backgroundColor: "rgba(71,192,255,0.4)",
                                        borderColor: '#47BEFF',
                                        borderHoverColor: "#0087D1",
                                        pointBoredColor: "#006DA8",
                                        pointHoverBackgroundColor: "#C4C4C4",
                                        pointHoverBorderColor: "#000000",
                                        pointBoredWidth: 1
                                    }
                                ]
                            },
                            options: {
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                            display: true
                                        }],
                                    yAxes: [{
                                            display: true
                                        }]
                                }
                            }
                        });
                    });
                }
                if (sensor.type == 'TEMP') {
                    _this.dataService.getWaterParameters(JSON.parse(localStorage.getItem('curentUser')).token, sensor.id).subscribe(function (parameters) {
                        var readings = parameters.reverse();
                        _this.lastReadingTempId = parameters[parameters.length - 1].id;
                        for (var _i = 0, readings_2 = readings; _i < readings_2.length; _i++) {
                            var reading = readings_2[_i];
                            var jsdate = new Date(reading.time);
                            _this.timesTemp.push(jsdate.toLocaleTimeString('en-BG', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
                            _this.amountsTemp.push(reading.amount);
                        }
                        _this.chartTemp = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]('temp', {
                            type: 'bar',
                            data: {
                                labels: _this.timesTemp,
                                datasets: [
                                    {
                                        data: _this.amountsTemp,
                                        backgroundColor: "rgba(4, 0, 242,0.4)",
                                        borderColor: '#47BEFF',
                                        pointBoredColor: "#006DA8",
                                        pointHoverBackgroundColor: "#C4C4C4",
                                        pointHoverBorderColor: "#000000",
                                        pointBoredWidth: 1
                                    }
                                ]
                            },
                            options: {
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                            display: true
                                        }],
                                    yAxes: [{
                                            display: true
                                        }]
                                }
                            }
                        });
                    });
                }
                if (sensor.type == 'HARDNESS') {
                    _this.dataService.getWaterParameters(JSON.parse(localStorage.getItem('curentUser')).token, sensor.id).subscribe(function (parameters) {
                        var readings = parameters.reverse();
                        _this.lastReadingHardenssId = parameters[parameters.length - 1].id;
                        for (var _i = 0, readings_3 = readings; _i < readings_3.length; _i++) {
                            var reading = readings_3[_i];
                            var jsdate = new Date(reading.time);
                            _this.timesHardness.push(jsdate.toLocaleTimeString('en-BG', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
                            _this.amountsHardness.push(reading.amount);
                        }
                        _this.chartHard = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]('hard', {
                            type: 'radar',
                            data: {
                                labels: _this.timesHardness,
                                datasets: [
                                    {
                                        data: _this.amountsHardness,
                                        backgroundColor: "rgba(204, 125, 0,0.4)",
                                        borderColor: '#efefef',
                                        borderHoverColor: "#0087D1",
                                        pointBoredColor: "#006DA8",
                                        pointHoverBackgroundColor: "#C4C4C4",
                                        pointHoverBorderColor: "#000000",
                                        pointBoredWidth: 0.5
                                    }
                                ]
                            },
                            options: {
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                            display: false
                                        }],
                                    yAxes: [{
                                            display: false
                                        }]
                                }
                            }
                        });
                    });
                }
                if (sensor.type == 'CHLORINE') {
                    _this.dataService.getWaterParameters(JSON.parse(localStorage.getItem('curentUser')).token, sensor.id).subscribe(function (parameters) {
                        var readings = parameters.reverse();
                        _this.lastReadingChlorineId = parameters[parameters.length - 1].id;
                        for (var _i = 0, readings_4 = readings; _i < readings_4.length; _i++) {
                            var reading = readings_4[_i];
                            var jsdate = new Date(reading.time);
                            _this.timesChlorine.push(jsdate.toLocaleTimeString('en-BG', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
                            _this.amountsChlorine.push(reading.amount);
                        }
                        _this.chartChlo = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]('chlo', {
                            type: 'bar',
                            data: {
                                labels: _this.timesChlorine,
                                datasets: [
                                    {
                                        data: _this.amountsChlorine,
                                        backgroundColor: "rgba(255, 0, 12,0.4)",
                                        borderColor: '#47BEFF',
                                        pointBoredColor: "#006DA8",
                                        pointHoverBackgroundColor: "#C4C4C4",
                                        pointHoverBorderColor: "#000000",
                                        pointBoredWidth: 1
                                    }
                                ]
                            },
                            options: {
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                            display: true
                                        }],
                                    yAxes: [{
                                            display: true
                                        }]
                                }
                            }
                        });
                    });
                }
            }
            _this.myObservable.takeUntil(Object(__WEBPACK_IMPORTED_MODULE_4_ng2_rx_componentdestroyed__["componentDestroyed"])(_this)).subscribe(function () {
                return _this.refresh();
            });
        });
        //consumption table
        this.dataService.getConsumptionDaily(JSON.parse(localStorage.getItem('curentUser')).token).subscribe(function (value) {
            _this.dailyConsumption = value;
            _this.priceForDailyConsumption = value * _this.consumptionPrice;
        });
        this.dataService.getConsumptionWeekly(JSON.parse(localStorage.getItem('curentUser')).token).subscribe(function (value) {
            _this.weeklyConsumption = value;
            _this.priceForWeeklyConsumption = value * _this.consumptionPrice;
        });
        this.dataService.getConsumptionMonthly(JSON.parse(localStorage.getItem('curentUser')).token).subscribe(function (value) {
            _this.monthlyConsumption = value;
            _this.priceForMonthlyConsumption = value * _this.consumptionPrice;
        });
        this.dataService.getConsumptionYearly(JSON.parse(localStorage.getItem('curentUser')).token).subscribe(function (value) {
            _this.yearlyConsumption = value;
            _this.priceForYearlyConsumption = value * _this.consumptionPrice;
        });
    };
    UserPageComponent.prototype.refresh = function () {
        //  this.timesPh.push(this.timesPh[0])
        //  this.amountsPh.push(10)
        //  this.amountsPh.shift()
        //  this.timesPh.shift()
        //  this.chartPh.update()
        var _this = this;
        for (var _i = 0, _a = this.sensors; _i < _a.length; _i++) {
            var sensor = _a[_i];
            if (sensor.type == 'PH') {
                this.dataService.getLastWaterParameters(JSON.parse(localStorage.getItem('curentUser')).token, sensor.id, this.lastReadingPhId).subscribe(function (parameters) {
                    if (parameters.length == 0) {
                        return;
                    }
                    var readings = parameters.reverse();
                    for (var i = 0; i < readings.length; i++) {
                        _this.timesPh.shift();
                        _this.amountsPh.shift();
                        _this.amountsPh.push(readings[i].amount);
                        var jsdate = new Date(readings[i].time);
                        _this.timesPh.push(jsdate.toLocaleTimeString('en-BG', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
                    }
                    _this.chartPh.update();
                    _this.lastReadingPhId = readings[readings.length - 1].id;
                });
            }
            if (sensor.type == 'TEMP') {
                this.dataService.getLastWaterParameters(JSON.parse(localStorage.getItem('curentUser')).token, sensor.id, this.lastReadingTempId).subscribe(function (parameters) {
                    if (parameters.length == 0) {
                        return;
                    }
                    var readings2 = parameters.reverse();
                    for (var i = 0; i < readings2.length; i++) {
                        _this.timesTemp.shift();
                        _this.amountsTemp.shift();
                        _this.amountsTemp.push(readings2[i].amount);
                        var jsdate = new Date(readings2[i].time);
                        _this.timesTemp.push(jsdate.toLocaleTimeString('en-BG', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
                    }
                    _this.chartTemp.update();
                    _this.lastReadingTempId = readings2[readings2.length - 1].id;
                });
            }
            if (sensor.type == 'HARDNESS') {
                this.dataService.getLastWaterParameters(JSON.parse(localStorage.getItem('curentUser')).token, sensor.id, this.lastReadingHardenssId).subscribe(function (parameters) {
                    if (parameters.length == 0) {
                        return;
                    }
                    var readings = parameters.reverse();
                    for (var i = 0; i < readings.length; i++) {
                        _this.timesHardness.shift();
                        _this.amountsHardness.shift();
                        _this.amountsHardness.push(readings[i].amount);
                        var jsdate = new Date(readings[i].time);
                        _this.timesHardness.push(jsdate.toLocaleTimeString('en-BG', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
                    }
                    _this.chartHard.update();
                    _this.lastReadingHardenssId = readings[readings.length - 1].id;
                });
            }
            if (sensor.type == 'CHLORINE') {
                this.dataService.getLastWaterParameters(JSON.parse(localStorage.getItem('curentUser')).token, sensor.id, this.lastReadingChlorineId).subscribe(function (parameters) {
                    if (parameters.length == 0) {
                        return;
                    }
                    var readings = parameters.reverse();
                    for (var i = 0; i < readings.length; i++) {
                        _this.timesChlorine.shift();
                        _this.amountsChlorine.shift();
                        _this.amountsChlorine.push(readings[i].amount);
                        var jsdate = new Date(readings[i].time);
                        _this.timesChlorine.push(jsdate.toLocaleTimeString('en-BG', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
                    }
                    _this.chartChlo.update();
                    _this.lastReadingChlorineId = readings[readings.length - 1].id;
                });
            }
        }
    };
    UserPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-page',
            template: __webpack_require__("../../../../../src/app/components/user-page/user-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-page/user-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/userinfo/userinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.hidden {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n#profile-image1 {\r\n    width: 100px;\r\n    height: 100px;\r\n\tborder:2px solid #03b1ce ;}\r\n\t.tital{ font-size:16px; font-weight:500;}\r\n     .bot-border{ border-bottom:1px #f8f8f8 solid;  margin:5px 0  5px 0\r\n}\r\n\r\n.container#userinfo{\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n div.wrapText{\r\n    word-wrap: break-word;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/userinfo/userinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" id=\"userinfo\">\n\t<div class=\"row\">\n\t\n        \n        \n       <div class=\"col-md-7 col-md-offset-3 \">\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">  <h4 >User Profile</h4></div>\n   <div class=\"panel-body\">\n       \n    <div class=\"box box-info\">\n        \n            <div class=\"box-body\">\n                     <div class=\"col-sm-12\">\n                     <div  align=\"center\"> <img alt=\"User Pic\" src=\"{{photoUrl}}\" id=\"profile-image1\" class=\"img-circle img-responsive\"> \n                \n                <input id=\"profile-image-upload\" class=\"hidden\" type=\"file\">\n\n                <!--Upload Image Js And Css-->                     \n                     </div>\n              \n              <br>\n    \n              <!-- /input-group -->\n            </div>\n            <div class=\"col-sm-12 text-center\">\n            <h4 style=\"color:#03b1ce;\">{{username}} </h4>\n                         \n            </div>\n            <div class=\"clearfix\"></div>\n            <hr style=\"margin:5px 0 5px 0;\">\n    \n              \n<div class=\"col-sm-6 col-xs-4 tital \" >Name:</div><div class=\"col-sm-6 col-xs-8 wrapText\">{{name}}</div>\n     <div class=\"clearfix\"></div>\n<div class=\"bot-border\"></div>\n\n\n\n<div class=\"col-sm-6 col-xs-4 tital \" >Email:</div><div class=\"col-sm-6 col-xs-8 wrapText\">{{email}}</div>\n\n  <div class=\"clearfix\"></div>\n<div class=\"bot-border\"></div>\n\n<div class=\"col-sm-6 col-xs-4 tital \" >Permission:</div><div class=\"col-sm-6 col-xs-8 wrapText\">{{permission}}</div>\n\n  \n\n            <!-- /.box-body -->\n          </div>\n          <!-- /.box -->\n\n        </div>\n       \n            \n    </div> \n    </div>\n</div>    \n   </div>\n</div>\n\n\n\n\n         "

/***/ }),

/***/ "../../../../../src/app/components/userinfo/userinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserinfoComponent = (function () {
    function UserinfoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    UserinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = JSON.parse(localStorage.getItem('curentUser')).token;
        if (this.token == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.dataService.userinfo(this.token).subscribe(function (user) {
                _this.photoUrl = user.photoUrl;
                _this.name = user.name;
                _this.permission = user.permissions;
                _this.email = user.email;
                if (_this.photoUrl == null) {
                    _this.photoUrl = "http://aiyd.org/wp-content/uploads/2016/09/no-image-icon-hi.png";
                }
            });
        }
    };
    UserinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userinfo',
            template: __webpack_require__("../../../../../src/app/components/userinfo/userinfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/userinfo/userinfo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserinfoComponent);
    return UserinfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/verify/rainOnWindow.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rainOnWindow.2e56eacf48e30db560fa.png";

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".animationload {\r\n    \r\n    height: 100%;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 10000;\r\n}\r\n.osahanloading {\r\n    -webkit-animation: 1.5s linear 0s normal none infinite running osahanloading;\r\n            animation: 1.5s linear 0s normal none infinite running osahanloading;\r\n    background: #fed37f none repeat scroll 0 0;\r\n    border-radius: 50px;\r\n    height: 50px;\r\n    left: 50%;\r\n    margin-left: -25px;\r\n    margin-top: -25px;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: 50px;\r\n}\r\n.osahanloading::after {\r\n    -webkit-animation: 1.5s linear 0s normal none infinite running osahanloading_after;\r\n            animation: 1.5s linear 0s normal none infinite running osahanloading_after;\r\n    border-color: #85d6de transparent;\r\n    border-radius: 80px;\r\n    border-style: solid;\r\n    border-width: 10px;\r\n    content: \"\";\r\n    height: 80px;\r\n    left: -15px;\r\n    position: absolute;\r\n    top: -15px;\r\n    width: 80px;\r\n}\r\n@-webkit-keyframes osahanloading {\r\n0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n}\r\n50% {\r\n    background: #85d6de none repeat scroll 0 0;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}\r\n100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n}\r\n}\r\n@keyframes osahanloading {\r\n0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n}\r\n50% {\r\n    background: #85d6de none repeat scroll 0 0;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}\r\n100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n}\r\n}\r\n\r\nh1{\r\n    position: absolute;\r\n    top: 35%;\r\n    width:100%;\r\n    text-align: center;\r\n}\r\n\r\nh3{\r\n    position: absolute;\r\n    top: 54%;\r\n    width:100%;\r\n    text-align: center;\r\n}\r\n\r\n#logoPic{\r\n    padding-top: 20px;\r\n}\r\n\r\n.btn-price:hover {\r\n    background: #fff !important;\r\n    color: #337ab7 !important;\r\n    -webkit-transition:  all .3s ease;\r\n}\r\n.btn-price {\r\n    background: #337ab7 !important;\r\n    color: #fff !important;\r\n    border: solid 1px rgb(185, 185, 185) !important;\r\n    -webkit-transition:  all .3s ease;\r\n}\r\n.first{\r\n    padding-top: 10px;\r\n}\r\n\r\n.left-form{\r\n    margin-top: 20px;\r\n}\r\n\r\n.right-form{\r\n    margin-top: 20px;\r\n}\r\n\r\n.jumbotron{\r\n    margin-top: 50px;\r\n    border-radius: 30px;\r\n    background-color: rgba(7, 7, 7, 0.75);\r\n    color: rgb(255, 255, 255);\r\n    \r\n    height: 400px;\r\n    \r\n    \r\n}\r\n\r\ndiv#background{\r\n    background: url(" + __webpack_require__("../../../../../src/app/components/verify/rainOnWindow.png") + ") no-repeat;\r\n    background-size: cover;\r\n    height: 100vh;\r\n}\r\n\r\n.registerText{\r\n    color: white;\r\n}\r\n\r\n.registerText#legendRegister{\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.form-control{\r\n    height: 45px !important;\r\n    font-size: 18px;\r\n   \r\n}\r\n\r\nlabel{\r\n    font-size: 18px;\r\n}\r\n\r\n#havelogin{\r\n    padding-top: 20px;\r\n    \r\n}\r\n\r\nlabel.login#loginLabelBottom{\r\n    color: rgb(37, 172, 250);\r\n}\r\n\r\nlabel.login#loginLabelBottom:hover{\r\n    color: rgb(25, 109, 158);\r\n}\r\n\r\n.alert{\r\n    background: rgb(235, 102, 102);\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: -5px;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n.vertical-center-row {\r\n    margin:auto;\r\n   padding-bottom: 20px;\r\n   text-align:center;\r\n \r\n }\r\n\r\n .pForgotPassword{\r\n     font-size: 1em !important;\r\n     \r\n\r\n }\r\n\r\n .pForgotPassword:hover{\r\n    font-size: 1em !important;\r\n    color: rgb(206, 206, 206);\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.html":
/***/ (function(module, exports) {

module.exports = "      <div class=\"container-fluid\" id=\"background\" >\n          <div style=\"text-align:center\">\n              <img id=\"logoPic\" width=\"180\" alt=\"logo\" src=\"../../../assets/sw.png\">\n            </div>\n        <div class=\"row\">\n        <div class=\"jumbotron col-md-8 col-md-offset-2\">\n            \n                \n                   \n                      <div class=\"animationload\">\n                          <h1>Verifying registration...</h1>\n                          <div class=\"osahanloading\"></div>\n                          <h3>You will be redirected to the login page</h3>\n                      </div>\n                \n             \n              \n              </div>    \n      </div>\n      </div>\n      \n\n\n\n\n      \n      \n      "

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyComponent = (function () {
    function VerifyComponent(route, dataService, router) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.email = params['email'];
            _this.token = params['token'];
        });
        this.dataService.verifyToken(this.email, this.token).subscribe(function (success) {
            if (success == true) {
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            }
            else {
                console.log("Error");
            }
        });
    };
    VerifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-verify',
            template: __webpack_require__("../../../../../src/app/components/verify/verify.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = (function () {
    function DataService(http) {
        this.http = http;
        console.log('Data service conected...');
    }
    DataService.prototype.addUser = function (name, password, email, photoUrl) {
        var user;
        console.log(photoUrl);
        if (password == null) {
            user = { name: name, email: email, photoUrl: photoUrl };
        }
        else {
            user = { name: name, password: password, email: email, photoUrl: photoUrl };
        }
        return this.http.post('https://swarmnetbackendusa.herokuapp.com/register', user).map(function (res) { return res.json(); });
    };
    DataService.prototype.login = function (email, password) {
        var user = { email: email, password: password };
        console.log(user);
        return this.http.post('https://swarmnetbackendusa.herokuapp.com/login', user).map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DataService.prototype._errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(error || "Server error");
    };
    DataService.prototype.getAllSensors = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/sensors/my', opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.dailyWaterData = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/readings/last10', opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.getWaterParameters = function (token, idSensor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/readings/' + idSensor, opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.getLastWaterParameters = function (token, idSensor, idLastReading) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/readings/' + idSensor + '/' + idLastReading + '/new', opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.getLogedUserInfo = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/userinfo', opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.verifyToken = function (email, token) {
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/users/' + email + '/confirm/' + token).map(function (res) { return res.json(); });
    };
    DataService.prototype.userinfo = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/userinfo', opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.changePassword = function (token, oldPassword, newPassword) {
        var user = { oldPassword: oldPassword, newPassword: newPassword };
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.put('https://swarmnetbackendusa.herokuapp.com/changepassword', user, opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.sendMessage = function (subject, text, token) {
        var message = { subject: subject, text: text };
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.post('https://swarmnetbackendusa.herokuapp.com/contact', message, opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.getConsumptionDaily = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/consumption/daily', opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.getConsumptionWeekly = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/consumption/weekly', opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.getConsumptionMonthly = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/consumption/monthsbefore/0', opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.getConsumptionYearly = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/consumption/yearly', opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.getUsers = function (token, page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/users/page/' + page, opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.showUserDataForChange = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get('https://swarmnetbackendusa.herokuapp.com/users/' + id, opts).map(function (res) { return res.json(); });
    };
    DataService.prototype.changeUserData = function (id, username, password, name, email, token) {
        var user = { id: id, username: username, password: password, name: name, email: email };
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + token);
        var opts = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.put('https://swarmnetbackendusa.herokuapp.com/users/', user, opts).map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map