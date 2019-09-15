(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-projects-projects-module"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/features/projects/projects.component.ts");




const routes = [
    {
        path: '',
        component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
    }
];
let ProjectsRoutingModule = class ProjectsRoutingModule {
};
ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProjectsRoutingModule);



/***/ }),

/***/ "./src/app/features/projects/projects.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/features/projects/projects.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n}\n\n.container {\n  margin: 0.5rem;\n  text-align: justify;\n}\n\nh1 {\n  width: 100%;\n  text-align: center;\n}\n\nh3 {\n  background-color: #00B693;\n  border-radius: 5px;\n  color: #E1F1FF;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\nh3 a {\n  display: flex;\n}\n\nh3 button {\n  margin-left: 1rem;\n}\n\n.project-header {\n  display: flex;\n  align-items: center;\n}\n\n.project-header mat-icon {\n  color: #00B693 !important;\n}\n\n.skill-icon {\n  width: 28px;\n}\n\n.project-header a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvamVjdHMvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXBwXFxmZWF0dXJlc1xccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcHJvamVjdHMvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbFxcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKOztBREdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCRWZjO0VGZ0JkLGtCQUFBO0VBQ0EsY0VkZTtFRmVmLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNBSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEQUE7RUFDSSxXQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9jb2xvcnMnO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCVcbn1cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogLjVyZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeVxufVxuXG5oMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbmgzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbn1cbmgzIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5oMyBidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtXG59XG5cbi5wcm9qZWN0LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG59XG4ucHJvamVjdC1oZWFkZXIgbWF0LWljb24ge1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yIWltcG9ydGFudDtcbn1cblxuLnNraWxsLWljb24ge1xuICAgIHdpZHRoOiAyOHB4O1xufVxuXG4ucHJvamVjdC1oZWFkZXIgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG59IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5oMSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjY5MztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI0UxRjFGRjtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuaDMgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmgzIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucHJvamVjdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC1oZWFkZXIgbWF0LWljb24ge1xuICBjb2xvcjogIzAwQjY5MyAhaW1wb3J0YW50O1xufVxuXG4uc2tpbGwtaWNvbiB7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4ucHJvamVjdC1oZWFkZXIgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjMDA1RTg4O1xuJHNlY29uZGFyeS1jb2xvcjogIzAwQjY5MztcbiRhY2NlbnQtY29sb3I6ICNGOUY4NzE7XG4kdGV4dC1kYXJrLWNvbG9yOiAjMzQzNDM0O1xuJHRleHQtbGlnaHQtY29sb3I6ICNFMUYxRkY7XG4kYmFja2dyb3VuZC1kYXJrLWNvbG9yOiAjMDQzMzVFO1xuJGJhY2tncm91bmQtbGlnaHQtY29sb3I6IHdoaXRlc21va2U7Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/features/projects/projects.component.scss")]
    })
], ProjectsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/features/projects/projects-routing.module.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/features/projects/projects.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let ProjectsModule = class ProjectsModule {
};
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



/***/ })

}]);
//# sourceMappingURL=features-projects-projects-module-es2015.js.map