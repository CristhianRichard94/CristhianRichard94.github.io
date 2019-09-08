(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n    <app-navbar></app-navbar>\n    <div class=\"main-content\">\n            <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n</div>\n<div class=\"backdrop\" *ngIf=\"false\">\n    <h1 >Work in progress</h1>\n    <img src=\"../assets/icons/Bulldozer-595b40b75ba036ed117d56f7.svg\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <button mat-button >\n        <a href=\"https://www.linkedin.com/in/cristhian-richard-bb9060174/\" target=\"_blank\" data-toggle=\"Linkedin\">\n            <i class=\"fab fa-linkedin\"></i>\n        </a>\n    </button>\n    <button mat-button >\n        <a href=\"https://github.com/CristhianRichard94\" target=\"_blank\" data-toggle=\"Github\">\n            <i class=\"fab fa-github\"></i>\n        </a>\n    </button>\n    <button mat-button>\n        <a href=\"/src/assets/{{'Other.Files.cv' | translate }}\" data-toggle=\"'Other.Languages.es' | translate\" download>\n            <mat-icon aria-hidden=\"false\">save_alt</mat-icon>\n        </a>\n    </button>\n    <button mat-button class=\"menu-trigger\" mat-button [matMenuTriggerFor]=\"languageMenu\">\n        <mat-icon aria-hidden=\"false\">language</mat-icon>\n    </button>\n    <mat-menu #languageMenu>\n        <button mat-menu-item class=\"menu-buttons\"  [ngClass]=\"{'active': activeLang == 'es'}\" (click)=\"changeLang('es')\" >{{ 'Other.Languages.es' | translate }}</button>\n        <button mat-menu-item class=\"menu-buttons\" [ngClass]=\"{'active': activeLang == 'en'}\" (click)=\"changeLang('en')\" >{{ 'Other.Languages.en' | translate }}</button>\n    </mat-menu>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navbar/navbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"nav-bar\">\n    <div class=\"buttons-container\">\n        <button class=\"menu-trigger\" mat-button [matMenuTriggerFor]=\"navbarMenu\">\n            <mat-icon aria-hidden=\"false\">menu</mat-icon>\n        </button>\n        <mat-menu #navbarMenu>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/home\" routerLinkActive=\"active-link-sm\"\n                >{{ 'Sections.home' | translate }}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/experience\" routerLinkActive=\"active-link-sm\"\n                >{{ 'Sections.experience' | translate }}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/education\" routerLinkActive=\"active-link-sm\"\n                >{{ 'Sections.education' | translate }}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/about-me\" routerLinkActive=\"active-link-sm\"\n                >{{ 'Sections.info' | translate }}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/projects\" routerLinkActive=\"active-link-sm\"\n                >{{ 'Sections.projects' | translate }}</button>\n            <button class=\"menu-buttons\" mat-button >\n                <a href=\"/src/assets/{{'Other.Files.cv' | translate }}\" download>\n                    {{ 'Other.download' | translate }}\n                </a>\n            </button>\n        </mat-menu>\n        <div class=\"nav-button-container\">\n            <button mat-button routerLink=\"/home\" routerLinkActive=\"active-link\" >{{ 'Sections.home' | translate }}</button>\n            <button mat-button routerLink=\"/experience\" routerLinkActive=\"active-link\" >{{ 'Sections.experience' | translate }}</button>\n            <button mat-button routerLink=\"/education\" routerLinkActive=\"active-link\" >{{ 'Sections.education' | translate }}</button>\n            <button mat-button routerLink=\"/about-me\" routerLinkActive=\"active-link\" >{{ 'Sections.info' | translate }}</button>\n            <button mat-button routerLink=\"/projects\" routerLinkActive=\"active-link\" >{{ 'Sections.projects' | translate }}</button>\n            <button mat-button>\n                <a href=\"/src/assets/{{'Other.Files.cv' | translate }}\" download>\n                    {{ 'Other.download' | translate }}\n                </a>\n            </button>\n        </div>\n    </div>\n    <h4>Cristhian Richard</h4>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | features-home-home-module */ "features-home-home-module").then(__webpack_require__.bind(null, /*! ./features/home/home.module */ "./src/app/features/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        path: 'education',
        loadChildren: () => __webpack_require__.e(/*! import() | features-education-education-module */ "features-education-education-module").then(__webpack_require__.bind(null, /*! ./features/education/education.module */ "./src/app/features/education/education.module.ts")).then(m => m.EducationModule)
    },
    {
        path: 'experience',
        loadChildren: () => __webpack_require__.e(/*! import() | features-experience-experience-module */ "features-experience-experience-module").then(__webpack_require__.bind(null, /*! ./features/experience/experience.module */ "./src/app/features/experience/experience.module.ts")).then(m => m.ExperienceModule)
    },
    {
        path: 'about-me',
        loadChildren: () => __webpack_require__.e(/*! import() | features-about-me-about-me-module */ "features-about-me-about-me-module").then(__webpack_require__.bind(null, /*! ./features/about-me/about-me.module */ "./src/app/features/about-me/about-me.module.ts")).then(m => m.AboutMeModule)
    },
    {
        path: 'projects',
        loadChildren: () => __webpack_require__.e(/*! import() | features-projects-projects-module */ "features-projects-projects-module").then(__webpack_require__.bind(null, /*! ./features/projects/projects.module */ "./src/app/features/projects/projects.module.ts")).then(m => m.ProjectsModule)
    },
    // ...
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.main-content {\n  flex-grow: 1;\n  margin-top: 10vh;\n  height: 84vh;\n  overflow-y: auto;\n  color: #343434;\n  background-color: whitesmoke;\n  display: flex;\n}\n\n.backdrop {\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 500;\n  color: whitesmoke;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  font-size: 2rem;\n}\n\n.backdrop img {\n  max-width: 40vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbFxcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNFVmdCO0VGV2hCLDRCQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREtBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL2NvbG9ycyc7XG5cbi5hcHAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG59XG4ubWFpbi1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBoZWlnaHQ6IDg0dmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGNvbG9yOiAkdGV4dC1kYXJrLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5cblxuLmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOSk7XG4gIHotaW5kZXg6IDUwMDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDJyZW1cbn1cblxuLmJhY2tkcm9wIGltZyB7XG4gIG1heC13aWR0aDogNDB2d1xufSIsIi5hcHAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBoZWlnaHQ6IDg0dmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGNvbG9yOiAjMzQzNDM0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIHotaW5kZXg6IDUwMDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5iYWNrZHJvcCBpbWcge1xuICBtYXgtd2lkdGg6IDQwdnc7XG59IiwiJHByaW1hcnktY29sb3I6ICMwMDVFODg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDBCNjkzO1xuJGFjY2VudC1jb2xvcjogI0Y5Rjg3MTtcbiR0ZXh0LWRhcmstY29sb3I6ICMzNDM0MzQ7XG4kdGV4dC1saWdodC1jb2xvcjogI0UxRjFGRjtcbiRiYWNrZ3JvdW5kLWRhcmstY29sb3I6ICMwNDMzNUU7XG4kYmFja2dyb3VuZC1saWdodC1jb2xvcjogd2hpdGVzbW9rZTsiXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.languageList = [{ code: 'en', label: 'English' }, { code: 'es', label: 'Espanol' }];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: (http) => {
                        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
                    },
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
        ],
        exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: #04335E;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #E1F1FF;\n  height: 6vh !important;\n}\n\n.container button {\n  font-size: 1.4rem;\n}\n\nbutton a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.active {\n  background-color: #E1F1FF;\n  color: #343434;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXBwXFxjb3JlXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9mb290ZXIvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbFxcX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb3JlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx5QkNDb0I7RURBcEIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ0plO0VES2Ysc0JBQUE7QUVGSjs7QUZLQTtFQUNJLGlCQUFBO0FFRko7O0FGS0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRUZKOztBRktBO0VBQ0kseUJDbkJlO0VEb0JmLGNDckJjO0VEc0JkLG1CQUFBO0FFRkoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9jb2xvcnMnO1xuXG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWRhcmstY29sb3I7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAkdGV4dC1saWdodC1jb2xvcjtcbiAgICBoZWlnaHQ6IDZ2aCFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuYnV0dG9uIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XG4gICAgY29sb3I6ICR0ZXh0LWRhcmstY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwNUU4ODtcbiRzZWNvbmRhcnktY29sb3I6ICMwMEI2OTM7XG4kYWNjZW50LWNvbG9yOiAjRjlGODcxO1xuJHRleHQtZGFyay1jb2xvcjogIzM0MzQzNDtcbiR0ZXh0LWxpZ2h0LWNvbG9yOiAjRTFGMUZGO1xuJGJhY2tncm91bmQtZGFyay1jb2xvcjogIzA0MzM1RTtcbiRiYWNrZ3JvdW5kLWxpZ2h0LWNvbG9yOiB3aGl0ZXNtb2tlOyIsIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQzMzVFO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNFMUYxRkY7XG4gIGhlaWdodDogNnZoICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbmJ1dHRvbiBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFGMUZGO1xuICBjb2xvcjogIzM0MzQzNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let FooterComponent = class FooterComponent {
    constructor(translate) {
        this.translate = translate;
        this.activeLang = 'es';
        this.translate.setDefaultLang(this.activeLang);
    }
    ngOnInit() {
    }
    changeLang(lang) {
        this.activeLang = lang;
        this.translate.use(lang);
    }
};
FooterComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav-bar {\n  position: fixed;\n  background-color: #04335E;\n  display: flex;\n  align-items: center;\n  height: 10vh !important;\n  color: #E1F1FF !important;\n  top: 0;\n  justify-content: space-between;\n}\n\n.menu-trigger {\n  display: none;\n}\n\n.menu-buttons {\n  width: 100%;\n}\n\n.active-link-sm {\n  background-color: #E1F1FF;\n  color: #343434;\n}\n\n.active-link {\n  border-bottom: 1px solid white;\n  border-radius: 0;\n}\n\n@media (max-width: 700px) {\n  .nav-button-container {\n    display: none !important;\n  }\n\n  .menu-trigger {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZiYXIvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXBwXFxjb3JlXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9uYXZiYXIvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbFxcX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb3JlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EseUJDQ29CO0VEQXBCLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsOEJBQUE7QUVESjs7QUZHQTtFQUNJLGFBQUE7QUVBSjs7QUZHQTtFQUNJLFdBQUE7QUVBSjs7QUZHQTtFQUNJLHlCQ2pCZTtFRGtCZixjQ25CYztBQ21CbEI7O0FGR0E7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0FFQUo7O0FGR0E7RUFDSTtJQUNJLHdCQUFBO0VFQU47O0VGRUU7SUFDSSx3QkFBQTtFRUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9jb2xvcnMnO1xuXG4jbmF2LWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWRhcmstY29sb3I7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTB2aCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yIWltcG9ydGFudDtcbiAgICB0b3A6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG59XG4ubWVudS10cmlnZ2VyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS1idXR0b25ze1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5hY3RpdmUtbGluay1zbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XG4gICAgY29sb3I6ICR0ZXh0LWRhcmstY29sb3I7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIC5uYXYtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tZW51LXRyaWdnZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiIsIiRwcmltYXJ5LWNvbG9yOiAjMDA1RTg4O1xuJHNlY29uZGFyeS1jb2xvcjogIzAwQjY5MztcbiRhY2NlbnQtY29sb3I6ICNGOUY4NzE7XG4kdGV4dC1kYXJrLWNvbG9yOiAjMzQzNDM0O1xuJHRleHQtbGlnaHQtY29sb3I6ICNFMUYxRkY7XG4kYmFja2dyb3VuZC1kYXJrLWNvbG9yOiAjMDQzMzVFO1xuJGJhY2tncm91bmQtbGlnaHQtY29sb3I6IHdoaXRlc21va2U7IiwiI25hdi1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDMzNUU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0UxRjFGRiAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1lbnUtdHJpZ2dlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZW51LWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZS1saW5rLXNtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRjFGRjtcbiAgY29sb3I6ICMzNDM0MzQ7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5uYXYtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1lbnUtdHJpZ2dlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/core/navbar/navbar.component.scss")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/custom-material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/custom-material.module.ts ***!
  \**************************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");





let CustomMaterialModule = class CustomMaterialModule {
};
CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
        ]
    })
], CustomMaterialModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-material.module */ "./src/app/shared/custom-material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
        ],
        exports: [
            _custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\richa\Documents\cv-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map