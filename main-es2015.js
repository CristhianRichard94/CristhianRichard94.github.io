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

module.exports = "<div class=\"app\">\n    <app-navbar></app-navbar>\n    <div class=\"main-content\">\n            <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <button mat-button >\n        <a href=\"https://www.linkedin.com/in/cristhian-richard-bb9060174/\" target=\"_blank\" matTooltip=\"{{'Tooltips.linkedin' | translate}}\">\n            <i class=\"fab fa-linkedin\"></i>\n        </a>\n    </button>\n    <button mat-button >\n        <a href=\"https://github.com/CristhianRichard94\" target=\"_blank\" matTooltip=\"{{'Tooltips.github' | translate}}\">\n            <i class=\"fab fa-github\"></i>\n        </a>\n    </button>\n    <button mat-button>\n        <a href=\"../../../assets/{{'Other.Files.cv' | translate }}\" matTooltip=\"{{'Other.download' | translate}}\" download>\n            <mat-icon aria-hidden=\"false\">save_alt</mat-icon>\n        </a>\n    </button>\n    <button mat-button class=\"menu-trigger\" mat-button [matMenuTriggerFor]=\"languageMenu\" matTooltip=\"{{ 'Tooltips.lang' | translate}}\">\n        <mat-icon aria-hidden=\"false\">language</mat-icon>\n        </button>\n    <mat-menu #languageMenu class=\"lang-menu\">\n        <button mat-menu-item class=\"menu-buttons\"  [ngClass]=\"{'active': activeLang == 'es'}\" (click)=\"changeLang('es')\" >{{ 'Other.Languages.es' | translate }}</button>\n        <button mat-menu-item class=\"menu-buttons\" [ngClass]=\"{'active': activeLang == 'en'}\" (click)=\"changeLang('en')\" >{{ 'Other.Languages.en' | translate }}</button>\n    </mat-menu>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navbar/navbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"nav-bar\">\n    <div class=\"buttons-container\">\n        <button class=\"menu-trigger\" mat-button (click)=\"smMenu = !smMenu\">\n            <mat-icon >menu</mat-icon>\n        </button>\n        <div class=\"nav-button-container\">\n            <button mat-button routerLink=\"/home\"\n                routerLinkActive=\"active-link\">{{ 'Sections.home' | translate | uppercase}}</button>\n            <button mat-button routerLink=\"/experience\"\n                routerLinkActive=\"active-link\">{{ 'Sections.experience' | translate |uppercase }}</button>\n            <button mat-button routerLink=\"/education\"\n                routerLinkActive=\"active-link\">{{ 'Sections.education' | translate | uppercase}}</button>\n            <button mat-button routerLink=\"/about-me\"\n                routerLinkActive=\"active-link\">{{ 'Sections.info' | translate | uppercase}}</button>\n            <button mat-button routerLink=\"/projects\"\n                routerLinkActive=\"active-link\">{{ 'Sections.projects' | translate | uppercase}}</button>\n            <button mat-button>\n                <a href=\"../../../assets/{{'Other.Files.cv' | translate }}\" download>\n                    {{ 'Other.download' | translate | uppercase}}\n                </a>\n            </button>\n        </div>\n    </div>\n    <h4>Cristhian Richard</h4>\n</mat-toolbar>\n<div *ngIf=\"smMenu\" class=\"sm-menu\">\n        <div class=\"buttons\">\n            <button class=\"menu-buttons\" mat-button routerLink=\"/home\" (click)=\"smMenu = false\"\n                routerLinkActive=\"active-link-sm\">{{ 'Sections.home' | translate | uppercase}}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/experience\" (click)=\"smMenu = false\"\n                routerLinkActive=\"active-link-sm\">{{ 'Sections.experience' | translate | uppercase}}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/education\" (click)=\"smMenu = false\"\n                routerLinkActive=\"active-link-sm\">{{ 'Sections.education' | translate | uppercase }}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/about-me\" (click)=\"smMenu = false\"\n                routerLinkActive=\"active-link-sm\">{{ 'Sections.info' | translate | uppercase }}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/projects\" (click)=\"smMenu = false\"\n                routerLinkActive=\"active-link-sm\">{{ 'Sections.projects' | translate | uppercase}}</button>\n            <button class=\"menu-buttons\" mat-button (click)=\"smMenu = false\">\n                <a href=\"../../../assets/{{'Other.Files.cv' | translate }}\" download>\n                    {{ 'Other.download' | translate | uppercase}}\n                </a>\n            </button>\n            <button class=\"menu-buttons\" mat-button (click)=\"smMenu = false\">\n                <mat-icon>highlight_off</mat-icon>\n            </button>\n        </div>\n        <div class=\"backdrop\" (click)=\"smMenu = false\">\n        </div>\n    </div>"

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

module.exports = ".app {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.main-content {\n  flex-grow: 1;\n  margin-top: 10vh;\n  height: 84vh;\n  color: #343434;\n  background-color: whitesmoke;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: thin;\n  scrollbar-color: #005E88;\n}\n\n.main-content::-webkit-scrollbar {\n  width: 6px;\n}\n\n.main-content::-webkit-scrollbar-thumb {\n  background: #005E88;\n}\n\n.backdrop {\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 500;\n  color: whitesmoke;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  font-size: 2rem;\n}\n\n.backdrop img {\n  max-width: 40vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbFxcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjRVRnQjtFRlVoQiw0QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkVsQmM7QURrQmhCOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJFMUJjO0FEMEJoQjs7QURLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9jb2xvcnMnO1xuXG4uYXBwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxufVxuLm1haW4tY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgaGVpZ2h0OiA4NHZoO1xuICBjb2xvcjogJHRleHQtZGFyay1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbi5tYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweFxufVxuIFxuLm1haW4tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuXG5cbi5iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xuICB6LWluZGV4OiA1MDA7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAycmVtXG59XG5cbi5iYWNrZHJvcCBpbWcge1xuICBtYXgtd2lkdGg6IDQwdndcbn0iLCIuYXBwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgaGVpZ2h0OiA4NHZoO1xuICBjb2xvcjogIzM0MzQzNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogIzAwNUU4ODtcbn1cblxuLm1haW4tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xufVxuXG4ubWFpbi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICMwMDVFODg7XG59XG5cbi5iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgei1pbmRleDogNTAwO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmJhY2tkcm9wIGltZyB7XG4gIG1heC13aWR0aDogNDB2dztcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwNUU4ODtcbiRzZWNvbmRhcnktY29sb3I6ICMwMEI2OTM7XG4kYWNjZW50LWNvbG9yOiAjRjlGODcxO1xuJHRleHQtZGFyay1jb2xvcjogIzM0MzQzNDtcbiR0ZXh0LWxpZ2h0LWNvbG9yOiAjRTFGMUZGO1xuJGJhY2tncm91bmQtZGFyay1jb2xvcjogIzA0MzM1RTtcbiRiYWNrZ3JvdW5kLWxpZ2h0LWNvbG9yOiB3aGl0ZXNtb2tlOyJdfQ== */"

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

module.exports = ".container {\n  background-color: #04335E;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #E1F1FF;\n  height: 6vh !important;\n}\n\n.container button {\n  font-size: 1.4rem;\n}\n\n.lang-menu {\n  background-color: #04335E;\n}\n\nbutton a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.active {\n  background-color: #E1F1FF;\n  color: #343434;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXBwXFxjb3JlXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9mb290ZXIvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbFxcX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb3JlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx5QkNDb0I7RURBcEIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ0plO0VES2Ysc0JBQUE7QUVGSjs7QUZLQTtFQUNJLGlCQUFBO0FFRko7O0FGSUE7RUFDSSx5QkNYb0I7QUNVeEI7O0FGSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRURKOztBRklBO0VBQ0kseUJDdEJlO0VEdUJmLGNDeEJjO0VEeUJkLG1CQUFBO0FFREoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9jb2xvcnMnO1xuXG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWRhcmstY29sb3I7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAkdGV4dC1saWdodC1jb2xvcjtcbiAgICBoZWlnaHQ6IDZ2aCFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5sYW5nLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWRhcmstY29sb3I7XG59XG5cbmJ1dHRvbiBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yO1xuICAgIGNvbG9yOiAkdGV4dC1kYXJrLWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59IiwiJHByaW1hcnktY29sb3I6ICMwMDVFODg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDBCNjkzO1xuJGFjY2VudC1jb2xvcjogI0Y5Rjg3MTtcbiR0ZXh0LWRhcmstY29sb3I6ICMzNDM0MzQ7XG4kdGV4dC1saWdodC1jb2xvcjogI0UxRjFGRjtcbiRiYWNrZ3JvdW5kLWRhcmstY29sb3I6ICMwNDMzNUU7XG4kYmFja2dyb3VuZC1saWdodC1jb2xvcjogd2hpdGVzbW9rZTsiLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MzM1RTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjRTFGMUZGO1xuICBoZWlnaHQ6IDZ2aCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4ubGFuZy1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MzM1RTtcbn1cblxuYnV0dG9uIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMUYxRkY7XG4gIGNvbG9yOiAjMzQzNDM0O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */"

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

module.exports = "#nav-bar {\n  position: fixed;\n  background-color: #04335E;\n  display: flex;\n  align-items: center;\n  height: 10vh !important;\n  color: #E1F1FF !important;\n  top: 0;\n  justify-content: space-between;\n}\n\n.sm-menu {\n  position: absolute;\n  top: 10vh;\n  height: 100%;\n  width: 100%;\n}\n\n.buttons {\n  display: flex;\n  position: absolute;\n  left: 0;\n  flex-direction: column;\n  color: #E1F1FF !important;\n  background: #343434;\n  width: 100%;\n  z-index: 2010;\n}\n\nhr {\n  margin: 0;\n}\n\n.menu-trigger {\n  display: none;\n}\n\n.menu-buttons {\n  width: 100%;\n}\n\n.active-link-sm {\n  background-color: #E1F1FF;\n  color: #343434;\n}\n\n.active-link {\n  border-bottom: 1px solid white;\n  border-radius: 0;\n}\n\n.backdrop {\n  z-index: 2000;\n  color: whitesmoke;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\n\n@media (max-width: 930px) {\n  .nav-button-container {\n    display: none !important;\n  }\n\n  .menu-trigger {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZiYXIvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXBwXFxjb3JlXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9uYXZiYXIvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbFxcX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb3JlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EseUJDQ29CO0VEQXBCLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsOEJBQUE7QUVESjs7QUZHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FFQUo7O0FGRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUVDSjs7QUZDQTtFQUNJLFNBQUE7QUVFSjs7QUZBQTtFQUNJLGFBQUE7QUVHSjs7QUZBQTtFQUNJLFdBQUE7QUVHSjs7QUZBQTtFQUNJLHlCQ3BDZTtFRHFDZixjQ3RDYztBQ3lDbEI7O0FGQUE7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0FFR0o7O0FGQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUVHSjs7QUZDQTtFQUNJO0lBQ0ksd0JBQUE7RUVFTjs7RUZBRTtJQUNJLHdCQUFBO0VFR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL2NvbG9ycyc7XG5cbiNuYXYtYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtZGFyay1jb2xvcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMHZoIWltcG9ydGFudDtcbiAgICBjb2xvcjogJHRleHQtbGlnaHQtY29sb3IhaW1wb3J0YW50O1xuICAgIHRvcDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbn1cbi5zbS1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHZoO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDIwMTA7XG59XG5ociB7XG4gICAgbWFyZ2luOiAwXG59XG4ubWVudS10cmlnZ2VyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS1idXR0b25ze1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5hY3RpdmUtbGluay1zbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XG4gICAgY29sb3I6ICR0ZXh0LWRhcmstY29sb3I7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5iYWNrZHJvcCB7XG4gICAgei1pbmRleDogMjAwMDtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICBcbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCkge1xuICAgIC5uYXYtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tZW51LXRyaWdnZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiIsIiRwcmltYXJ5LWNvbG9yOiAjMDA1RTg4O1xuJHNlY29uZGFyeS1jb2xvcjogIzAwQjY5MztcbiRhY2NlbnQtY29sb3I6ICNGOUY4NzE7XG4kdGV4dC1kYXJrLWNvbG9yOiAjMzQzNDM0O1xuJHRleHQtbGlnaHQtY29sb3I6ICNFMUYxRkY7XG4kYmFja2dyb3VuZC1kYXJrLWNvbG9yOiAjMDQzMzVFO1xuJGJhY2tncm91bmQtbGlnaHQtY29sb3I6IHdoaXRlc21va2U7IiwiI25hdi1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDMzNUU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0UxRjFGRiAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNtLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjRTFGMUZGICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMzNDM0MzQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyMDEwO1xufVxuXG5ociB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1lbnUtdHJpZ2dlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZW51LWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZS1saW5rLXNtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRjFGRjtcbiAgY29sb3I6ICMzNDM0MzQ7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJhY2tkcm9wIHtcbiAgei1pbmRleDogMjAwMDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCkge1xuICAubmF2LWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tZW51LXRyaWdnZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

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
        this.smMenu = false;
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
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"]
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