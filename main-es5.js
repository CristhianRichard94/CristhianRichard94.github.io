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

module.exports = "<app-host></app-host>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <button mat-button>\n        <a href=\"https://www.linkedin.com/in/cristhian-richard-bb9060174/\" target=\"_blank\"\n            matTooltip=\"{{'Tooltips.linkedin' | translate}}\">\n            <i class=\"fab fa-linkedin\"></i>\n        </a>\n    </button>\n    <button mat-button>\n        <a href=\"https://github.com/CristhianRichard94\" target=\"_blank\" matTooltip=\"{{'Tooltips.github' | translate}}\">\n            <i class=\"fab fa-github\"></i>\n        </a>\n    </button>\n    <button mat-button>\n        <a href=\"../../../assets/{{'Other.Files.cv' | translate }}\" matTooltip=\"{{'Other.download' | translate}}\"\n            download>\n            <mat-icon aria-hidden=\"false\">save_alt</mat-icon>\n        </a>\n    </button>\n    <button mat-button class=\"menu-trigger\" mat-button [matMenuTriggerFor]=\"languageMenu\"\n        matTooltip=\"{{ 'Tooltips.lang' | translate}}\">\n        <mat-icon >translate</mat-icon>\n    </button>\n    <mat-menu #languageMenu class=\"lang-menu\">\n        <button mat-menu-item class=\"menu-buttons\" [ngClass]=\"{'active': activeLang == 'es'}\"\n            (click)=\"changeLang('es')\">\n            <img src=\"../../../assets/images/argentina.jpg\" matTooltip=\"{{ 'Other.Languages.es' | translate }}\" class=\"l-flag\">\n        </button>\n        <button mat-menu-item class=\"menu-buttons\" [ngClass]=\"{'active': activeLang == 'en'}\"\n            (click)=\"changeLang('en')\">\n            <img src=\"../../../assets/images/us.png\" matTooltip=\"{{ 'Other.Languages.en' | translate }}\" class=\"l-flag\">\n        </button>\n    </mat-menu>\n    <!-- Start of Simple-Counter Code -->\n    <img\n        src=\"https://smallseotools.com/counterDisplay?code=8f1c7f1bc9f2ccd118df0583ac8f8432&style=0013&pad=5&type=page&initCount=1\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navbar/navbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"nav-bar\">\n    <div class=\"buttons-container\">\n        <button class=\"menu-trigger\" mat-button (click)=\"smMenu = !smMenu\">\n            <mat-icon >menu</mat-icon>\n        </button>\n        <div class=\"nav-button-container\">\n            <button mat-button routerLink=\"/home\"\n                routerLinkActive=\"active-link\">{{ 'Sections.home' | translate | uppercase}}</button>\n            <button mat-button routerLink=\"/experience\"\n                routerLinkActive=\"active-link\">{{ 'Sections.experience' | translate |uppercase }}</button>\n            <button mat-button routerLink=\"/education\"\n                routerLinkActive=\"active-link\">{{ 'Sections.education' | translate | uppercase}}</button>\n            <button mat-button routerLink=\"/about-me\"\n                routerLinkActive=\"active-link\">{{ 'Sections.info' | translate | uppercase}}</button>\n            <button mat-button routerLink=\"/projects\"\n                routerLinkActive=\"active-link\">{{ 'Sections.projects' | translate | uppercase}}</button>\n            <button mat-button>\n                <a href=\"../../../assets/{{'Other.Files.cv' | translate }}\" download>\n                    {{ 'Other.download' | translate | uppercase}}\n                </a>\n            </button>\n        </div>\n    </div>\n    <h4>Cristhian Richard</h4>\n</mat-toolbar>\n<div *ngIf=\"smMenu\" class=\"sm-menu\">\n        <div class=\"buttons\">\n            <button class=\"menu-buttons\" mat-button routerLink=\"/home\" (click)=\"smMenu = false\"\n                routerLinkActive=\"active-link-sm\">{{ 'Sections.home' | translate | uppercase}}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/experience\" (click)=\"smMenu = false\"\n                routerLinkActive=\"active-link-sm\">{{ 'Sections.experience' | translate | uppercase}}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/education\" (click)=\"smMenu = false\"\n                routerLinkActive=\"active-link-sm\">{{ 'Sections.education' | translate | uppercase }}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/about-me\" (click)=\"smMenu = false\"\n                routerLinkActive=\"active-link-sm\">{{ 'Sections.info' | translate | uppercase }}</button>\n            <button class=\"menu-buttons\" mat-button routerLink=\"/projects\" (click)=\"smMenu = false\"\n                routerLinkActive=\"active-link-sm\">{{ 'Sections.projects' | translate | uppercase}}</button>\n            <button class=\"menu-buttons\" mat-button (click)=\"smMenu = false\">\n                <a href=\"../../../assets/{{'Other.Files.cv' | translate }}\" download>\n                    {{ 'Other.download' | translate | uppercase}}\n                </a>\n            </button>\n            <button class=\"menu-buttons\" mat-button (click)=\"smMenu = false\">\n                <mat-icon>highlight_off</mat-icon>\n            </button>\n        </div>\n        <div class=\"backdrop\" (click)=\"smMenu = false\">\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/host/host.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/host/host.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n    <app-navbar></app-navbar>\n    <div class=\"main-content\">\n        <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.languageList = [{ code: 'en', label: 'English' }, { code: 'es', label: 'Espanol' }];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _features_host_host_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/host/host.module */ "./src/app/features/host/host.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _features_host_host_module__WEBPACK_IMPORTED_MODULE_8__["HostModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: function (http) {
                            return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http);
                        },
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: #222;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #E1F1FF;\n  height: 6vh !important;\n}\n\n.container button {\n  font-size: 1.4rem;\n}\n\n.menu-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.lang-menu {\n  background-color: #222;\n}\n\nbutton a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.active {\n  background-color: #E1F1FF;\n  color: #343434;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi9zcmNcXGFwcFxcY29yZVxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvZm9vdGVyL0M6XFxVc2Vyc1xccmljaGFcXERvY3VtZW50c1xcY3Yvc3JjXFxhc3NldHNcXHN0eWxlc1xcZ2xvYmFsXFxfY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHNCQ0VvQjtFRERwQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNDSGU7RURJZixzQkFBQTtBRUZKOztBRktBO0VBQ0ksaUJBQUE7QUVGSjs7QUZJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FFREo7O0FGSUE7RUFDSSxzQkNoQm9CO0FDZXhCOztBRklBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUVESjs7QUZJQTtFQUNJLHlCQzNCZTtFRDRCZixjQzdCYztFRDhCZCxtQkFBQTtBRURKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvY29sb3JzJztcblxuXG4uY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1kYXJrLWNvbG9yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XG4gICAgaGVpZ2h0OiA2dmghaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG59XG4ubWVudS1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sYW5nLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWRhcmstY29sb3I7XG59XG5cbmJ1dHRvbiBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yO1xuICAgIGNvbG9yOiAkdGV4dC1kYXJrLWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59IiwiJHByaW1hcnktY29sb3I6ICMwMDVFODg7XG4kcHJpbWFyeS1saWdodC1jb2xvcjogIzIzOEVEODtcbiRzZWNvbmRhcnktY29sb3I6ICMwMEI2OTM7XG4kYWNjZW50LWNvbG9yOiAjRjlGODcxO1xuJHRleHQtZGFyay1jb2xvcjogIzM0MzQzNDtcbiR0ZXh0LWxpZ2h0LWNvbG9yOiAjRTFGMUZGO1xuJGJhY2tncm91bmQtZGFyay1jb2xvcjogIzIyMjtcbiRiYWNrZ3JvdW5kLWxpZ2h0LWNvbG9yOiB3aGl0ZXNtb2tlOyIsIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNFMUYxRkY7XG4gIGhlaWdodDogNnZoICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5tZW51LWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxhbmctbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG59XG5cbmJ1dHRvbiBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFGMUZGO1xuICBjb2xvcjogIzM0MzQzNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(translate) {
        this.translate = translate;
        this.activeLang = 'es';
        this.translate.setDefaultLang(this.activeLang);
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.changeLang = function (lang) {
        this.activeLang = lang;
        this.translate.use(lang);
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav-bar {\n  position: fixed;\n  background-color: #222;\n  display: flex;\n  align-items: center;\n  height: 10vh !important;\n  color: #E1F1FF !important;\n  top: 0;\n  justify-content: space-between;\n}\n\n.sm-menu {\n  position: absolute;\n  top: 10vh;\n  height: 100%;\n  width: 100%;\n}\n\n.buttons {\n  display: flex;\n  position: absolute;\n  left: 0;\n  flex-direction: column;\n  color: #E1F1FF !important;\n  background: #222;\n  width: 100%;\n  z-index: 2010;\n}\n\nhr {\n  margin: 0;\n}\n\n.menu-trigger {\n  display: none;\n}\n\n.menu-buttons {\n  width: 100%;\n}\n\n.active-link-sm {\n  background-color: #238ED8;\n  color: #E1F1FF;\n}\n\n.active-link {\n  color: #238ED8;\n  border-bottom: 1px solid #238ED8;\n  border-radius: 0;\n}\n\n.backdrop {\n  z-index: 2000;\n  color: whitesmoke;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\n\n@media (max-width: 930px) {\n  .nav-button-container {\n    display: none !important;\n  }\n\n  .menu-trigger {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZiYXIvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi9zcmNcXGFwcFxcY29yZVxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvbmF2YmFyL0M6XFxVc2Vyc1xccmljaGFcXERvY3VtZW50c1xcY3Yvc3JjXFxhc3NldHNcXHN0eWxlc1xcZ2xvYmFsXFxfY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxzQkNFb0I7RUREcEIsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSw4QkFBQTtBRURKOztBRkdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUVBSjs7QUZFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JDbEJvQjtFRG1CcEIsV0FBQTtFQUNBLGFBQUE7QUVDSjs7QUZDQTtFQUNJLFNBQUE7QUVFSjs7QUZBQTtFQUNJLGFBQUE7QUVHSjs7QUZBQTtFQUNJLFdBQUE7QUVHSjs7QUZBQTtFQUNJLHlCQ3ZDa0I7RUR3Q2xCLGNDcENlO0FDdUNuQjs7QUZBQTtFQUNJLGNDNUNrQjtFRDZDbEIsZ0NBQUE7RUFDQSxnQkFBQTtBRUdKOztBRkFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FFR0o7O0FGQ0E7RUFDSTtJQUNJLHdCQUFBO0VFRU47O0VGQUU7SUFDSSx3QkFBQTtFRUdOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9jb2xvcnMnO1xuXG4jbmF2LWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWRhcmstY29sb3I7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTB2aCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yIWltcG9ydGFudDtcbiAgICB0b3A6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG59XG4uc20tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTB2aDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiAkdGV4dC1saWdodC1jb2xvciFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtZGFyay1jb2xvcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAyMDEwO1xufVxuaHIge1xuICAgIG1hcmdpbjogMFxufVxuLm1lbnUtdHJpZ2dlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUtYnV0dG9uc3tcbiAgICB3aWR0aDogMTAwJVxufVxuXG4uYWN0aXZlLWxpbmstc20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWxpZ2h0LWNvbG9yO1xuICAgIGNvbG9yOiAkdGV4dC1saWdodC1jb2xvcjtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgICBjb2xvcjogJHByaW1hcnktbGlnaHQtY29sb3I7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwcmltYXJ5LWxpZ2h0LWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5iYWNrZHJvcCB7XG4gICAgei1pbmRleDogMjAwMDtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICBcbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCkge1xuICAgIC5uYXYtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tZW51LXRyaWdnZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiIsIiRwcmltYXJ5LWNvbG9yOiAjMDA1RTg4O1xuJHByaW1hcnktbGlnaHQtY29sb3I6ICMyMzhFRDg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDBCNjkzO1xuJGFjY2VudC1jb2xvcjogI0Y5Rjg3MTtcbiR0ZXh0LWRhcmstY29sb3I6ICMzNDM0MzQ7XG4kdGV4dC1saWdodC1jb2xvcjogI0UxRjFGRjtcbiRiYWNrZ3JvdW5kLWRhcmstY29sb3I6ICMyMjI7XG4kYmFja2dyb3VuZC1saWdodC1jb2xvcjogd2hpdGVzbW9rZTsiLCIjbmF2LWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMHZoICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRTFGMUZGICFpbXBvcnRhbnQ7XG4gIHRvcDogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc20tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNFMUYxRkYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDIwMTA7XG59XG5cbmhyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWVudS10cmlnZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUtYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWN0aXZlLWxpbmstc20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4RUQ4O1xuICBjb2xvcjogI0UxRjFGRjtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgY29sb3I6ICMyMzhFRDg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjM4RUQ4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYmFja2Ryb3Age1xuICB6LWluZGV4OiAyMDAwO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkzMHB4KSB7XG4gIC5uYXYtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1lbnUtdHJpZ2dlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.smMenu = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/core/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/features/host/host-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/host/host-routing.module.ts ***!
  \******************************************************/
/*! exports provided: HostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostRoutingModule", function() { return HostRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'home',
        loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/features/home/home.module.ts")).then(function (m) { return m.HomeModule; }); }
    },
    {
        path: 'education',
        loadChildren: function () { return __webpack_require__.e(/*! import() | education-education-module */ "education-education-module").then(__webpack_require__.bind(null, /*! ../education/education.module */ "./src/app/features/education/education.module.ts")).then(function (m) { return m.EducationModule; }); }
    },
    {
        path: 'experience',
        loadChildren: function () { return __webpack_require__.e(/*! import() | experience-experience-module */ "experience-experience-module").then(__webpack_require__.bind(null, /*! ../experience/experience.module */ "./src/app/features/experience/experience.module.ts")).then(function (m) { return m.ExperienceModule; }); }
    },
    {
        path: 'about-me',
        loadChildren: function () { return __webpack_require__.e(/*! import() | about-me-about-me-module */ "about-me-about-me-module").then(__webpack_require__.bind(null, /*! ../about-me/about-me.module */ "./src/app/features/about-me/about-me.module.ts")).then(function (m) { return m.AboutMeModule; }); }
    },
    {
        path: 'projects',
        loadChildren: function () { return __webpack_require__.e(/*! import() | projects-projects-module */ "projects-projects-module").then(__webpack_require__.bind(null, /*! ../projects/projects.module */ "./src/app/features/projects/projects.module.ts")).then(function (m) { return m.ProjectsModule; }); }
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var HostRoutingModule = /** @class */ (function () {
    function HostRoutingModule() {
    }
    HostRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HostRoutingModule);
    return HostRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/host/host.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/host/host.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.main-content {\n  flex-grow: 1;\n  margin-top: 10vh;\n  height: 84vh;\n  color: #343434;\n  background-color: whitesmoke;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: thin;\n  scrollbar-color: #238ED8;\n}\n\n.main-content::-webkit-scrollbar {\n  width: 6px;\n}\n\n.main-content::-webkit-scrollbar-thumb {\n  background: #238ED8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvaG9zdC9DOlxcVXNlcnNcXHJpY2hhXFxEb2N1bWVudHNcXGN2L3NyY1xcYXBwXFxmZWF0dXJlc1xcaG9zdFxcaG9zdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvaG9zdC9ob3N0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9ob3N0L0M6XFxVc2Vyc1xccmljaGFcXERvY3VtZW50c1xcY3Yvc3JjXFxhc3NldHNcXHN0eWxlc1xcZ2xvYmFsXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0RGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNFUmdCO0VGU2hCLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCRWpCb0I7QURpQnRCOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJFekJvQjtBRHlCdEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9ob3N0L2hvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvY29sb3JzXCI7XHJcblxyXG4uYXBwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIGhlaWdodDogODR2aDtcclxuICBjb2xvcjogJHRleHQtZGFyay1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gIHNjcm9sbGJhci1jb2xvcjogJHByaW1hcnktbGlnaHQtY29sb3I7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogJHByaW1hcnktbGlnaHQtY29sb3I7XHJcbn1cclxuXHJcbiIsIi5hcHAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBoZWlnaHQ6IDg0dmg7XG4gIGNvbG9yOiAjMzQzNDM0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjMjM4RUQ4O1xufVxuXG4ubWFpbi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5tYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzIzOEVEODtcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwNUU4ODtcbiRwcmltYXJ5LWxpZ2h0LWNvbG9yOiAjMjM4RUQ4O1xuJHNlY29uZGFyeS1jb2xvcjogIzAwQjY5MztcbiRhY2NlbnQtY29sb3I6ICNGOUY4NzE7XG4kdGV4dC1kYXJrLWNvbG9yOiAjMzQzNDM0O1xuJHRleHQtbGlnaHQtY29sb3I6ICNFMUYxRkY7XG4kYmFja2dyb3VuZC1kYXJrLWNvbG9yOiAjMjIyO1xuJGJhY2tncm91bmQtbGlnaHQtY29sb3I6IHdoaXRlc21va2U7Il19 */"

/***/ }),

/***/ "./src/app/features/host/host.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/host/host.component.ts ***!
  \*************************************************/
/*! exports provided: HostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostComponent", function() { return HostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HostComponent = /** @class */ (function () {
    function HostComponent() {
    }
    HostComponent.prototype.ngOnInit = function () {
    };
    HostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-host',
            template: __webpack_require__(/*! raw-loader!./host.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/host/host.component.html"),
            styles: [__webpack_require__(/*! ./host.component.scss */ "./src/app/features/host/host.component.scss")]
        })
    ], HostComponent);
    return HostComponent;
}());



/***/ }),

/***/ "./src/app/features/host/host.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/host/host.module.ts ***!
  \**********************************************/
/*! exports provided: HostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostModule", function() { return HostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _host_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./host-routing.module */ "./src/app/features/host/host-routing.module.ts");
/* harmony import */ var _host_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./host.component */ "./src/app/features/host/host.component.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");







var HostModule = /** @class */ (function () {
    function HostModule() {
    }
    HostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_host_component__WEBPACK_IMPORTED_MODULE_4__["HostComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _host_routing_module__WEBPACK_IMPORTED_MODULE_3__["HostRoutingModule"],
                src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [
                _host_component__WEBPACK_IMPORTED_MODULE_4__["HostComponent"]
            ]
        })
    ], HostModule);
    return HostModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");





var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
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
    return CustomMaterialModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-material.module */ "./src/app/shared/custom-material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\richa\Documents\cv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map