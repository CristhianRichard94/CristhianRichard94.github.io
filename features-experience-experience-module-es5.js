(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-experience-experience-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/experience/experience.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/experience/experience.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"title mat-display-2 sm-center\">{{ 'Sections.experience' | translate  | uppercase}}</h1>\n    <div class=\"exp-container\">\n\n        <mat-accordion>\n            <!-- exp1 -->\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        {{ 'Experience.line1' | translate }}\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card-title>SIDESYS IT SOLUTIONS</mat-card-title>\n                <img mat-card-image src=\"../../../assets/images/sidesys.jpg\" alt=\"SIDESYS IT SOLUTIONS\">\n                <p>\n                    {{ 'Experience.line2' | translate }}\n                </p>\n            </mat-expansion-panel>\n            <!-- exp2 -->\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        {{ 'Experience.line4' | translate }}\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card-title>{{ 'Experience.line3' | translate }}</mat-card-title>\n                <p>\n                    {{ 'Experience.line5' | translate }}\n                </p>\n                <p>\n                    <i>\n                        {{ 'Experience.line6' | translate }}\n                    </i>\n                </p>\n            </mat-expansion-panel>\n            <!-- exp3 -->\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        {{ 'Experience.line7' | translate }}\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card-title>{{ 'Experience.line8' | translate }}</mat-card-title>\n                <p>\n                    {{ 'Experience.line9' | translate }}\n                </p>\n                <p>\n                    <i>\n                        {{ 'Experience.line13' | translate }}\n                    </i>\n                </p>\n            </mat-expansion-panel>\n            <!-- exp4 -->\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        {{ 'Experience.line10' | translate }}\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-card-title>{{ 'Experience.line11' | translate }}</mat-card-title>\n                <p>\n                    <i>\n                        {{ 'Experience.line12' | translate }}\n                    </i>\n                </p>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n</div>"

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

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  width: 100%;\n}\n\n.container {\n  margin: 0.5rem;\n  width: 100%;\n}\n\n.exp-container {\n  margin: 0.5rem;\n}\n\nimg {\n  width: 100%;\n}\n\n@media (min-width: 525px) {\n  .container {\n    width: 75%;\n  }\n}\n\n@media (min-width: 750px) {\n  .container {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZXhwZXJpZW5jZS9DOlxcVXNlcnNcXHJpY2hhXFxEb2N1bWVudHNcXGN2LWFuZ3VsYXIvc3JjXFxhcHBcXGZlYXR1cmVzXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQ0E7RUFDSTtJQUNJLFVBQUE7RUNFTjtBQUNGOztBREFBO0VBQ0k7SUFDSSxVQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmV4cC1jb250YWluZXIge1xuICAgIG1hcmdpbjogLjVyZW1cbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTAwJVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTI1cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDc1JVxuICAgIH1cbiAgfVxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1MCVcbiAgICB9XG4gIH0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDAuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leHAtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTI1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn0iXX0= */"

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