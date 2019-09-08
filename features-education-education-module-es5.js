(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-education-education-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/education/education.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/education/education.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"mat-display-2\">{{ 'Sections.education' | translate }}</h1>\n    <h2>\n        {{ 'Education.line1' | translate }}\n    </h2>\n    <p> <strong>\n            {{ 'Education.line2' | translate }}\n        </strong></p>\n    <p>\n        <i>\n            {{ 'Education.line3' | translate }}\n        </i>\n    </p>\n    <h2>\n        {{ 'Education.line4' | translate }}\n    </h2>\n    <p>\n        <i>\n            {{ 'Education.line5' | translate }}\n        </i>\n    </p>\n    <h2>\n        {{ 'Education.line6' | translate }}\n    </h2>\n    <p>\n        <i>\n            {{ 'Education.line7' | translate }}\n        </i>\n    </p>\n    <p> <strong>\n            {{ 'Education.line8' | translate }}\n        </strong></p>\n    <p>\n        <h3>\n            {{ 'Education.line9' | translate }}\n        </h3>\n        <p>\n            {{ 'Education.line10' | translate }}\n        </p>\n        <p>\n            {{ 'Education.line11' | translate }}\n        </p>\n</div>"

/***/ }),

/***/ "./src/app/features/education/education-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/education/education-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EducationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationRoutingModule", function() { return EducationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education.component */ "./src/app/features/education/education.component.ts");




var routes = [
    {
        path: '',
        component: _education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"]
    }
];
var EducationRoutingModule = /** @class */ (function () {
    function EducationRoutingModule() {
    }
    EducationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EducationRoutingModule);
    return EducationRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/education/education.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/features/education/education.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZWR1Y2F0aW9uL0M6XFxVc2Vyc1xccmljaGFcXERvY3VtZW50c1xcY3YtYW5ndWxhci9zcmNcXGFwcFxcZmVhdHVyZXNcXGVkdWNhdGlvblxcZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbjogLjVyZW1cbn0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/features/education/education.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/education/education.component.ts ***!
  \***********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/features/education/education.component.scss")]
        })
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/features/education/education.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/education/education.module.ts ***!
  \********************************************************/
/*! exports provided: EducationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationModule", function() { return EducationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _education_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education-routing.module */ "./src/app/features/education/education-routing.module.ts");
/* harmony import */ var _education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education.component */ "./src/app/features/education/education.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






var EducationModule = /** @class */ (function () {
    function EducationModule() {
    }
    EducationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _education_routing_module__WEBPACK_IMPORTED_MODULE_3__["EducationRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], EducationModule);
    return EducationModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-education-education-module-es5.js.map