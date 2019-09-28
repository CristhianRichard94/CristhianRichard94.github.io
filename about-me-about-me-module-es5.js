(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-me-about-me-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/about-me/about-me.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/about-me/about-me.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"mat-display-2 sm-center\" >{{ 'PersonalInfo.title' | translate  | uppercase }}</h1>\n    <p class=\"lang-p\">{{ 'PersonalInfo.line1' | translate }}<strong> <img class=\"l-flag\" src=\"../../../assets/images/argentina.jpg\" matTooltip=\"Argentina\"></strong></p>\n    <p >{{ 'PersonalInfo.line2' | translate }}<strong>{{age}} </strong></p>\n    <p ><i class=\"fas fa-graduation-cap\"></i><strong> {{ 'Other.degree' | translate }}</strong></p>\n    <h3 >{{ 'PersonalInfo.hobbies' | translate }}</h3>\n    <mat-chip-list class=\"chip-list\">\n        <mat-chip>\n                <i class=\"fas fa-futbol\"></i>\n            </mat-chip>\n        <mat-chip>\n                <i class=\"fas fa-running\"></i>\n            </mat-chip>\n        <mat-chip>\n                <i class=\"fas fa-laptop\"></i>\n            </mat-chip>\n        <mat-chip>\n                <i class=\"fas fa-users\"></i>\n            </mat-chip>\n        <mat-chip>\n                <i class=\"fas fa-beer\"></i>\n            </mat-chip>\n        </mat-chip-list>\n    <h1 class=\"sm-center\" >\n        {{ 'PersonalInfo.skills' | translate }}\n    </h1>\n    <mat-chip-list class=\"chip-list\">\n        <mat-chip *ngFor=\"let skill of skills\">{{skill}}</mat-chip>\n    </mat-chip-list>\n</div>"

/***/ }),

/***/ "./src/app/features/about-me/about-me-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/about-me/about-me-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AboutMeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeRoutingModule", function() { return AboutMeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me.component */ "./src/app/features/about-me/about-me.component.ts");




var routes = [
    {
        path: '',
        component: _about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"]
    }
];
var AboutMeRoutingModule = /** @class */ (function () {
    function AboutMeRoutingModule() {
    }
    AboutMeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutMeRoutingModule);
    return AboutMeRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/about-me/about-me.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/features/about-me/about-me.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0.5rem;\n  display: flex;\n  flex-direction: column;\n}\n\nh1 {\n  width: 100%;\n  text-align: center;\n}\n\n.l-flag {\n  margin-left: 1rem;\n}\n\n.chip-list {\n  display: flex;\n  padding: 0 1rem;\n}\n\n.mat-chip-list, .mat-chip-list-wrapper {\n  display: flex;\n  justify-content: center !important;\n}\n\n.mat-chip {\n  background: #238ED8 !important;\n  color: #E1F1FF !important;\n}\n\n.mat-chip:hover {\n  background: #343434 !important;\n  color: #238ED8 !important;\n}\n\n@media (max-width: 450px) {\n  .chip-list {\n    padding: 0;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWJvdXQtbWUvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi9zcmNcXGFwcFxcZmVhdHVyZXNcXGFib3V0LW1lXFxhYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSx1QkFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9jb2xvcnNcIjtcblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oMSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubC1mbGFnIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5jaGlwLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG4ubWF0LWNoaXAtbGlzdCwgLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2hpcCB7XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWxpZ2h0LWNvbG9yICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAkdGV4dC1saWdodC1jb2xvciAhaW1wb3J0YW50O1xufVxuLm1hdC1jaGlwOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogJHRleHQtZGFyay1jb2xvciAhaW1wb3J0YW50O1xuICBjb2xvcjogJHByaW1hcnktbGlnaHQtY29sb3IgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jaGlwLWxpc3Qge1xuICAgIHBhZGRpbmc6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaDEge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubC1mbGFnIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5jaGlwLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5tYXQtY2hpcC1saXN0LCAubWF0LWNoaXAtbGlzdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jaGlwIHtcbiAgYmFja2dyb3VuZDogIzIzOEVEOCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0UxRjFGRiAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNoaXA6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzQzNDM0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjM4RUQ4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY2hpcC1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/features/about-me/about-me.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/about-me/about-me.component.ts ***!
  \*********************************************************/
/*! exports provided: devSkills, AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devSkills", function() { return devSkills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var devSkills = [
    'Pascal', 'Smalltalk', '.NET Framework', 'Python',
    'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Material Design',
    'Design', 'Angular', 'Vue.Js', 'R Studio', 'PostGreSQL',
    'MongoDB', 'Celery', 'Redis', 'Swagger', 'XAMPP',
    'AutoCad', 'Maple', 'Office', 'Astah'
];
var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
        this.age = 0;
        this.birthDate = new Date(1994, 10, 12);
        this.skills = devSkills;
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        this.calculateAge();
    };
    AboutMeComponent.prototype.calculateAge = function () {
        var ageDifMs = Date.now() - this.birthDate.getTime();
        var ageDate = new Date(ageDifMs);
        this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.scss */ "./src/app/features/about-me/about-me.component.scss")]
        })
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/features/about-me/about-me.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/about-me/about-me.module.ts ***!
  \******************************************************/
/*! exports provided: AboutMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeModule", function() { return AboutMeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_me_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me-routing.module */ "./src/app/features/about-me/about-me-routing.module.ts");
/* harmony import */ var _about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-me.component */ "./src/app/features/about-me/about-me.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






var AboutMeModule = /** @class */ (function () {
    function AboutMeModule() {
    }
    AboutMeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _about_me_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutMeRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], AboutMeModule);
    return AboutMeModule;
}());



/***/ })

}]);
//# sourceMappingURL=about-me-about-me-module-es5.js.map