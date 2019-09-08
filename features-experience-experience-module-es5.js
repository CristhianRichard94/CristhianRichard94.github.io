(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-experience-experience-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/experience/experience.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/experience/experience.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"title mat-display-2\">{{ 'Sections.experience' | translate }}</h1>\n    <mat-card class=\"card\">\n        <mat-card-header>\n            <mat-card-title>SIDESYS IT SOLUTIONS</mat-card-title>\n            <mat-card-subtitle>{{ 'Experience.line1' | translate }}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"../../../assets/images/sidesys.jpg\" alt=\"SIDESYS IT SOLUTIONS\">\n        <mat-card-content>\n            <p>\n                <i>\n                    {{ 'Experience.line2' | translate }}\n                </i>\n            </p>\n        </mat-card-content>\n    </mat-card>\n    <mat-card class=\"card\">\n        <mat-card-header>\n            <mat-card-title>{{ 'Experience.line3' | translate }}</mat-card-title>\n            <mat-card-subtitle>{{ 'Experience.line4' | translate }}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n            <p>\n                {{ 'Experience.line5' | translate }}\n            </p>\n            <p>\n                <i>\n                    {{ 'Experience.line6' | translate }}\n                </i>\n            </p>\n        </mat-card-content>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/features/experience/experience-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/experience/experience-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ExperienceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceRoutingModule", function() { return ExperienceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience.component */ "./src/app/features/experience/experience.component.ts");




var routes = [
    {
        path: '',
        component: _experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"]
    }
];
var ExperienceRoutingModule = /** @class */ (function () {
    function ExperienceRoutingModule() {
    }
    ExperienceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExperienceRoutingModule);
    return ExperienceRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/experience/experience.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/features/experience/experience.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  width: 100%;\n}\n\n.container {\n  margin: 0.5rem;\n}\n\n.title {\n  margin: 0;\n}\n\n.card {\n  margin: 1rem;\n}\n\n@media (min-width: 525px) {\n  .container {\n    width: 75%;\n  }\n}\n\n@media (min-width: 750px) {\n  .container {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZXhwZXJpZW5jZS9DOlxcVXNlcnNcXHJpY2hhXFxEb2N1bWVudHNcXGN2LWFuZ3VsYXIvc3JjXFxhcHBcXGZlYXR1cmVzXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLFNBQUE7QUNHSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QURBQTtFQUNJO0lBQ0ksVUFBQTtFQ0dOO0FBQ0Y7O0FEREE7RUFDSTtJQUNJLFVBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW46IC41cmVtXG59XG4udGl0bGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDUyNXB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA3NSVcbiAgICB9XG4gIH1cbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNTAlXG4gICAgfVxuICB9IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDFyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MjVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/experience/experience.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/experience/experience.component.ts ***!
  \*************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/features/experience/experience.component.scss")]
        })
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/features/experience/experience.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/experience/experience.module.ts ***!
  \**********************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _experience_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience-routing.module */ "./src/app/features/experience/experience-routing.module.ts");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience.component */ "./src/app/features/experience/experience.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






var ExperienceModule = /** @class */ (function () {
    function ExperienceModule() {
    }
    ExperienceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _experience_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExperienceRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ExperienceModule);
    return ExperienceModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-experience-experience-module-es5.js.map