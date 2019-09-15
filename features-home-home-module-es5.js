(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/home/home.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/home/home.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"main\">\n        <h1 class=\"mat-display-3 sm-center\">{{ 'Home.title' | translate | uppercase }}</h1>\n        <div class=\"ps\">\n            <p>\n                {{ 'Home.line1' | translate }}\n            </p>\n            <p>\n                {{ 'Home.line2' | translate }}\n            </p>\n            <ul>\n                <li>{{ 'Home.skills.skill1' | translate }}</li>\n                <li>{{ 'Home.skills.skill2' | translate }}</li>\n                <li>{{ 'Home.skills.skill3' | translate }}</li>\n            </ul>\n            <p>\n                {{ 'Home.line3' | translate }}\n            </p>\n        </div>\n        <div class=\"under-construction\">\n            <p>\n                {{'Home.underConstruction' | translate}}\n            </p>\n            <img src=\"../../../assets/icons/Bulldozer-595b40b75ba036ed117d56f7.svg\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/features/home/home-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/home/home-routing.module.ts ***!
  \******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/features/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/home/home.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/home/home.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #E1F1FF;\n}\n\nbutton {\n  color: #E1F1FF;\n}\n\nh1 {\n  margin: auto !important;\n}\n\n:host {\n  background: url('photo-1534972195531-d756b9bfa9f2.jpg') no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  color: #E1F1FF;\n  width: 100%;\n}\n\n.buttons-container {\n  color: #E1F1FF;\n}\n\np {\n  margin: 0;\n}\n\n.container {\n  display: flex;\n  height: 100%;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: justify;\n  padding: 0.5rem 1rem;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.main h1 {\n  margin: 2rem 0;\n}\n\n.ps p {\n  margin: 0.5rem 0;\n}\n\n.under-construction {\n  background-color: #E1F1FF;\n  display: flex;\n  align-items: center;\n  color: #343434;\n  border-radius: 10px;\n}\n\n.under-construction p {\n  padding: 0.5rem;\n}\n\n.under-construction img {\n  max-width: 25vw;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvaG9tZS9DOlxcVXNlcnNcXHJpY2hhXFxEb2N1bWVudHNcXGN2LWFuZ3VsYXIvc3JjXFxhcHBcXGZlYXR1cmVzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9ob21lL0M6XFxVc2Vyc1xccmljaGFcXERvY3VtZW50c1xcY3YtYW5ndWxhci9zcmNcXGFzc2V0c1xcc3R5bGVzXFxnbG9iYWxcXF9jb2xvcnMuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9ob21lL0M6XFxVc2Vyc1xccmljaGFcXERvY3VtZW50c1xcY3YtYW5ndWxhci9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHFCQUFBO0VBQ0EsY0NEZTtBQ0RuQjs7QUZJQTtFQUNJLGNDSmU7QUNHbkI7O0FGSUE7RUFDSSx1QkFBQTtBRURKOztBQ1JBO0VBQ0UsaUVBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0ZKaUI7RUVLakIsV0FBQTtBRFVGOztBQ1JBO0VBQ0UsY0ZSaUI7QUNtQm5COztBQ1JBO0VBQ0UsU0FBQTtBRFdGOztBQ1JBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QURXRjs7QUNSQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBRFdGOztBQ1RBO0VBQ0UsY0FBQTtBRFlGOztBQ1ZBO0VBQ0UsZ0JBQUE7QURhRjs7QUNWQTtFQUNFLHlCRnJDaUI7RUVzQ2pCLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNGekNnQjtFRTBDaEIsbUJBQUE7QURhRjs7QUNYQTtFQUNFLGVBQUE7QURjRjs7QUNaQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FEZUYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2dsb2JhbC9jb2xvcnMnO1xuXG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XG59XG5idXR0b24ge1xuICAgIGNvbG9yOiAkdGV4dC1saWdodC1jb2xvcjtcbn1cblxuaDEge1xuICAgIG1hcmdpbjogYXV0byFpbXBvcnRhbnQ7XG59IiwiJHByaW1hcnktY29sb3I6ICMwMDVFODg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDBCNjkzO1xuJGFjY2VudC1jb2xvcjogI0Y5Rjg3MTtcbiR0ZXh0LWRhcmstY29sb3I6ICMzNDM0MzQ7XG4kdGV4dC1saWdodC1jb2xvcjogI0UxRjFGRjtcbiRiYWNrZ3JvdW5kLWRhcmstY29sb3I6ICMwNDMzNUU7XG4kYmFja2dyb3VuZC1saWdodC1jb2xvcjogd2hpdGVzbW9rZTsiLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0UxRjFGRjtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6ICNFMUYxRkY7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9waG90by0xNTM0OTcyMTk1NTMxLWQ3NTZiOWJmYTlmMi5qcGdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI0UxRjFGRjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjRTFGMUZGO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4ubWFpbiBoMSB7XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuXG4ucHMgcCB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi51bmRlci1jb25zdHJ1Y3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFGMUZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzM0MzQzNDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnVuZGVyLWNvbnN0cnVjdGlvbiBwIHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4udW5kZXItY29uc3RydWN0aW9uIGltZyB7XG4gIG1heC13aWR0aDogMjV2dztcbiAgcGFkZGluZzogMC41cmVtO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvX2NvbG9ycy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9waG90by0xNTM0OTcyMTk1NTMxLWQ3NTZiOWJmYTlmMi5qcGdcIilcbiAgICBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiAkdGV4dC1saWdodC1jb2xvcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9ucy1jb250YWluZXIge1xuICBjb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XG5cbn1cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4ubWFpbiBoMSB7XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuLnBzIHAge1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4udW5kZXItY29uc3RydWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAkdGV4dC1kYXJrLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAxMHB4XG59XG4udW5kZXItY29uc3RydWN0aW9uIHAge1xuICBwYWRkaW5nOiAuNXJlbVxufVxuLnVuZGVyLWNvbnN0cnVjdGlvbiBpbWcge1xuICBtYXgtd2lkdGg6IDI1dnc7XG4gIHBhZGRpbmc6IC41cmVtXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/features/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/features/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/home/home.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/features/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-home-home-module-es5.js.map