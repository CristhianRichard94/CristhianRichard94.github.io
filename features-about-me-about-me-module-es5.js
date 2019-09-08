(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-about-me-about-me-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/about-me/about-me.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/about-me/about-me.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"mat-display-2 sm-center\" >{{ 'PersonalInfo.title' | translate }}</h1>\n    <p >{{ 'PersonalInfo.line1' | translate }}<strong>Argentina</strong></p>\n    <p >{{ 'PersonalInfo.line2' | translate }}<strong>{{age}}</strong></p>\n    <p >{{ 'PersonalInfo.line3' | translate }}<strong>{{ 'Other.degree' | translate }}</strong></p>\n    <h3 >{{ 'PersonalInfo.hobbies' | translate }}</h3>\n    <mat-chip-list class=\"chip-list\">\n        <mat-chip color=\"primary\">\n                <i class=\"fas fa-futbol\"></i>\n            </mat-chip>\n        <mat-chip color=\"primary\">\n                <i class=\"fas fa-running\"></i>\n            </mat-chip>\n        <mat-chip color=\"primary\">\n                <i class=\"fas fa-laptop\"></i>\n            </mat-chip>\n        <mat-chip color=\"primary\">\n                <i class=\"fas fa-users\"></i>\n            </mat-chip>\n        <mat-chip color=\"primary\">\n                <i class=\"fas fa-beer\"></i>\n            </mat-chip>\n        </mat-chip-list>\n    <h1 class=\"sm-center\" >\n        {{ 'PersonalInfo.skills' | translate }}\n    </h1>\n    <mat-chip-list class=\"chip-list\">\n        <mat-chip color=\"primary\" *ngFor=\"let skill of skills\">{{skill}}</mat-chip>\n    </mat-chip-list>\n</div>"

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

module.exports = ".container {\n  margin: 0.5rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.chip-list {\n  display: flex;\n  padding: 0 1rem;\n}\n\n.mat-chip-list-wrapper {\n  justify-content: center !important;\n}\n\n@media (max-width: 450px) {\n  .chip-list {\n    padding: 0;\n    justify-content: center;\n  }\n\n  .sm-center {\n    align-self: center;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWJvdXQtbWUvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXBwXFxmZWF0dXJlc1xcYWJvdXQtbWVcXGFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxrQ0FBQTtBQ0VKOztBRENBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsdUJBQUE7RUNFRjs7RURBQTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7RUNHSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbn1cblxuLmNoaXAtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgMXJlbVxufVxuLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNoaXAtbGlzdCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc20tY2VudGVyIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jaGlwLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNoaXAtbGlzdCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5zbS1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"

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
//# sourceMappingURL=features-about-me-about-me-module-es5.js.map