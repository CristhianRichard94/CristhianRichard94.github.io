(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/projects/projects.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/projects/projects.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"mat-display-2 sm-center\">{{ 'Projects.title' | translate  | uppercase}}</h1>\n    <div class=\"project\">\n        <div class=\"project-header\">\n            <h3>{{ 'Projects.project1' | translate }}</h3>\n            <button mat-icon-button class=\"btn-primary\">\n                <a href=\"https://github.com/GIBDBigData/tweets-harvester\" target=\"_blank\"\n                    matTooltip=\"{{'Other.viewCode' | translate}}\">\n                    <mat-icon aria-hidden=\"false\">code</mat-icon>\n                </a>\n            </button>\n            <mat-chip-list class=\"chip-list\">\n                <mat-chip color=\"primary\">\n                    <img src=\"../../../assets/images/vue.png\" alt=\"\" class=\"skill-icon\">\n                </mat-chip>\n                <mat-chip color=\"primary\">\n                    <img src=\"../../../assets/images/python.png\" alt=\"\" class=\"skill-icon\">\n                </mat-chip>\n            </mat-chip-list>\n        </div>\n        <p>\n            {{ 'Projects.p1line1' | translate }}\n        </p>\n        <p>\n            {{ 'Projects.p1line2' | translate }}\n        </p>\n    </div>\n    <div class=\"project\">\n        <div class=\"project-header\">\n            <h3>{{ 'Projects.project2' | translate }}</h3>\n            <button mat-icon-button class=\"btn-primary\">\n                <a href=\"https://gitlab.com/ClienteServidor2018/Logistica\" target=\"_blank\"\n                    matTooltip=\"{{'Other.viewCode' | translate}}\">\n                    <mat-icon aria-hidden=\"false\">code</mat-icon>\n                </a>\n            </button>\n            <mat-chip-list class=\"chip-list\">\n                <mat-chip color=\"primary\">\n                    <img src=\"../../../assets/images/angular.png\" alt=\"\" class=\"skill-icon\">\n                </mat-chip>\n            </mat-chip-list>\n        </div>\n        <p>\n            {{ 'Projects.p2line1' | translate }}\n        </p>\n        <p>\n            {{ 'Projects.p2line2' | translate }}\n        </p>\n    </div>\n    <div class=\"project\">\n        <div class=\"project-header\">\n            <h3>{{ 'Projects.project3' | translate }}</h3>\n            <button mat-icon-button class=\"btn-primary\">\n                <a href=\"https://github.com/CristhianRichard94/DigitalSignage\" target=\"_blank\"\n                    matTooltip=\"{{'Other.viewCode' | translate}}\">\n                    <mat-icon aria-hidden=\"false\">code</mat-icon>\n                </a>\n            </button>\n            <mat-chip-list class=\"chip-list\">\n                <mat-chip color=\"primary\">\n                    <img src=\"../../../assets/images/csharp.png\" alt=\"\" class=\"skill-icon\">\n                </mat-chip>\n            </mat-chip-list>\n        </div>\n        <p>\n            {{ 'Projects.p3line1' | translate }}\n        </p>\n        <p>\n            {{ 'Projects.p3line2' | translate }}\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/features/projects/projects-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/projects/projects-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/features/projects/projects.component.ts");




var routes = [
    {
        path: '',
        component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
    }
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/projects/projects.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/features/projects/projects.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n}\n\n.container {\n  margin: 0.5rem;\n  text-align: justify;\n}\n\nh1 {\n  width: 100%;\n  text-align: center;\n}\n\nh3 {\n  background-color: #238ED8;\n  border-radius: 5px;\n  color: #E1F1FF;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\nh3 a {\n  display: flex;\n}\n\nh3 button {\n  margin-left: 1rem;\n}\n\n.project-header {\n  display: flex;\n  align-items: center;\n}\n\n.project-header mat-icon {\n  color: #238ED8 !important;\n}\n\n.skill-icon {\n  width: 28px;\n}\n\n.project-header a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvamVjdHMvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi9zcmNcXGFwcFxcZmVhdHVyZXNcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3Byb2plY3RzL0M6XFxVc2Vyc1xccmljaGFcXERvY3VtZW50c1xcY3Yvc3JjXFxhc3NldHNcXHN0eWxlc1xcZ2xvYmFsXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJFZmtCO0VGZ0JsQixrQkFBQTtFQUNBLGNFYmU7RUZjZixjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtBQ0dKOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBREFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvY29sb3JzJztcblxuOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlXG59XG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW46IC41cmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnlcbn1cblxuaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG5oMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktbGlnaHQtY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAkdGV4dC1saWdodC1jb2xvcjtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuaDMgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbmgzIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW1cbn1cblxuLnByb2plY3QtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbn1cbi5wcm9qZWN0LWhlYWRlciBtYXQtaWNvbiB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0LWNvbG9yIWltcG9ydGFudDtcbn1cblxuLnNraWxsLWljb24ge1xuICAgIHdpZHRoOiAyOHB4O1xufVxuXG4ucHJvamVjdC1oZWFkZXIgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG59IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5oMSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzOEVEODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI0UxRjFGRjtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuaDMgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmgzIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucHJvamVjdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC1oZWFkZXIgbWF0LWljb24ge1xuICBjb2xvcjogIzIzOEVEOCAhaW1wb3J0YW50O1xufVxuXG4uc2tpbGwtaWNvbiB7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4ucHJvamVjdC1oZWFkZXIgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjMDA1RTg4O1xuJHByaW1hcnktbGlnaHQtY29sb3I6ICMyMzhFRDg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDBCNjkzO1xuJGFjY2VudC1jb2xvcjogI0Y5Rjg3MTtcbiR0ZXh0LWRhcmstY29sb3I6ICMzNDM0MzQ7XG4kdGV4dC1saWdodC1jb2xvcjogI0UxRjFGRjtcbiRiYWNrZ3JvdW5kLWRhcmstY29sb3I6ICMyMjI7XG4kYmFja2dyb3VuZC1saWdodC1jb2xvcjogd2hpdGVzbW9rZTsiXX0= */"

/***/ }),

/***/ "./src/app/features/projects/projects.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/projects/projects.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/features/projects/projects.component.scss")]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/features/projects/projects.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/projects/projects.module.ts ***!
  \******************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/features/projects/projects-routing.module.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/features/projects/projects.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ })

}]);
//# sourceMappingURL=projects-projects-module-es5.js.map