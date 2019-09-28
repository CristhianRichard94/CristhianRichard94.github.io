(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/features/home/home.component.ts");




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/features/home/home.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/home/home.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #E1F1FF;\n}\n\nbutton {\n  color: #E1F1FF;\n}\n\nh1 {\n  margin: auto !important;\n}\n\n:host {\n  background: url('photo-1534972195531-d756b9bfa9f2.jpg') no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  color: #E1F1FF;\n  width: 100%;\n}\n\n.buttons-container {\n  color: #E1F1FF;\n}\n\np {\n  margin: 0;\n}\n\n.container {\n  display: flex;\n  height: 100%;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: justify;\n  padding: 0.5rem 1rem;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.main h1 {\n  margin: 2rem 0;\n}\n\n.ps p {\n  margin: 0.5rem 0;\n}\n\n.under-construction {\n  background-color: #E1F1FF;\n  display: flex;\n  align-items: center;\n  color: #343434;\n  border-radius: 10px;\n}\n\n.under-construction p {\n  padding: 0.5rem;\n}\n\n.under-construction img {\n  max-width: 25vw;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvaG9tZS9DOlxcVXNlcnNcXHJpY2hhXFxEb2N1bWVudHNcXGN2L3NyY1xcYXBwXFxmZWF0dXJlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9ob21lL0M6XFxVc2Vyc1xccmljaGFcXERvY3VtZW50c1xcY3Yvc3JjXFxhc3NldHNcXHN0eWxlc1xcZ2xvYmFsXFxfY29sb3JzLnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2hvbWUvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRElBO0VBQ0ksY0VIZTtBREVuQjs7QURJQTtFQUNJLHVCQUFBO0FDREo7O0FFUkE7RUFDRSxpRUFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjREhpQjtFQ0lqQixXQUFBO0FGVUY7O0FFUkE7RUFDRSxjRFBpQjtBRGtCbkI7O0FFUkE7RUFDRSxTQUFBO0FGV0Y7O0FFUkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBRldGOztBRVJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FGV0Y7O0FFVEE7RUFDRSxjQUFBO0FGWUY7O0FFVkE7RUFDRSxnQkFBQTtBRmFGOztBRVZBO0VBQ0UseUJEcENpQjtFQ3FDakIsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0R4Q2dCO0VDeUNoQixtQkFBQTtBRmFGOztBRVhBO0VBQ0UsZUFBQTtBRmNGOztBRVpBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUZlRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vZ2xvYmFsL2NvbG9ycyc7XG5cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkdGV4dC1saWdodC1jb2xvcjtcbn1cbmJ1dHRvbiB7XG4gICAgY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yO1xufVxuXG5oMSB7XG4gICAgbWFyZ2luOiBhdXRvIWltcG9ydGFudDtcbn0iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0UxRjFGRjtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6ICNFMUYxRkY7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9waG90by0xNTM0OTcyMTk1NTMxLWQ3NTZiOWJmYTlmMi5qcGdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI0UxRjFGRjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjRTFGMUZGO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4ubWFpbiBoMSB7XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuXG4ucHMgcCB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi51bmRlci1jb25zdHJ1Y3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFGMUZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzM0MzQzNDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnVuZGVyLWNvbnN0cnVjdGlvbiBwIHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4udW5kZXItY29uc3RydWN0aW9uIGltZyB7XG4gIG1heC13aWR0aDogMjV2dztcbiAgcGFkZGluZzogMC41cmVtO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjMDA1RTg4O1xuJHByaW1hcnktbGlnaHQtY29sb3I6ICMyMzhFRDg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDBCNjkzO1xuJGFjY2VudC1jb2xvcjogI0Y5Rjg3MTtcbiR0ZXh0LWRhcmstY29sb3I6ICMzNDM0MzQ7XG4kdGV4dC1saWdodC1jb2xvcjogI0UxRjFGRjtcbiRiYWNrZ3JvdW5kLWRhcmstY29sb3I6ICMyMjI7XG4kYmFja2dyb3VuZC1saWdodC1jb2xvcjogd2hpdGVzbW9rZTsiLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19jb2xvcnMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGhvdG8tMTUzNDk3MjE5NTUzMS1kNzU2YjliZmE5ZjIuanBnXCIpXG4gICAgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yO1xuXG59XG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLm1haW4gaDEge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cbi5wcyBwIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLnVuZGVyLWNvbnN0cnVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHRleHQtZGFyay1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweFxufVxuLnVuZGVyLWNvbnN0cnVjdGlvbiBwIHtcbiAgcGFkZGluZzogLjVyZW1cbn1cbi51bmRlci1jb25zdHJ1Y3Rpb24gaW1nIHtcbiAgbWF4LXdpZHRoOiAyNXZ3O1xuICBwYWRkaW5nOiAuNXJlbVxufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/features/home/home.component.scss")]
    })
], HomeComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/features/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let HomeModule = class HomeModule {
};
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



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map