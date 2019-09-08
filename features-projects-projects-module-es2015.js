(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-projects-projects-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/projects/projects.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/projects/projects.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"mat-display-2\" >{{ 'Projects.title' | translate }}</h1>\n    <div class=\"project\">\n        <div class=\"project-header\">\n            <h3 >{{ 'Projects.project1' | translate }}</h3>\n            <button mat-icon-button class=\"btn-primary\">\n                <a href=\"https://github.com/GIBDBigData/tweets-harvester\" target=\"_blank\" data-toggle=\"Github\">\n                    <mat-icon aria-hidden=\"false\">code</mat-icon>\n                </a>\n            </button>\n        </div>\n        <p >\n                {{ 'Projects.p1line1' | translate }}\n        </p>\n        <p >\n                {{ 'Projects.p1line2' | translate }}\n        </p>\n    </div>\n    <div class=\"project\">\n        <div class=\"project-header\">\n            <h3 >{{ 'Projects.project2' | translate }}</h3>\n            <button mat-icon-button class=\"btn-primary\">\n                <a href=\"https://gitlab.com/ClienteServidor2018/Logistica\" target=\"_blank\" data-toggle=\"Github\">\n                    <mat-icon aria-hidden=\"false\">code</mat-icon>\n                </a>\n            </button>\n        </div>\n        <p >\n                {{ 'Projects.p2line1' | translate }}\n        </p>\n        <p >    \n                {{ 'Projects.p2line2' | translate }}\n        </p>\n    </div>\n    <div class=\"project\">\n        <div class=\"project-header\">\n            <h3 >{{ 'Projects.project3' | translate }}</h3>\n            <button mat-icon-button class=\"btn-primary\">\n                <a href=\"https://github.com/CristhianRichard94/DigitalSignage\" target=\"_blank\" data-toggle=\"Github\">\n                    <mat-icon aria-hidden=\"false\">code</mat-icon>\n                </a>\n            </button>\n        </div>\n        <p >\n                {{ 'Projects.p3line1' | translate }}\n        </p>\n        <p >\n                {{ 'Projects.p3line2' | translate }}\n        </p>\n    </div>\n</div>"

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

module.exports = ":host {\n  width: 100%;\n}\n\n.container {\n  margin: 0.5rem;\n  text-align: justify;\n}\n\nh3 {\n  background-color: #00B693;\n  border-radius: 5px;\n  color: #E1F1FF;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\nh3 a {\n  display: flex;\n}\n\nh3 button {\n  margin-left: 1rem;\n}\n\n.project-header {\n  display: flex;\n  align-items: center;\n}\n\n.project-header mat-icon {\n  color: #00B693 !important;\n}\n\n.project-header a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvamVjdHMvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXBwXFxmZWF0dXJlc1xccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcHJvamVjdHMvQzpcXFVzZXJzXFxyaWNoYVxcRG9jdW1lbnRzXFxjdi1hbmd1bGFyL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbFxcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKOztBREdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSx5QkVWYztFRldkLGtCQUFBO0VBQ0EsY0VUZTtFRlVmLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNBSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9jb2xvcnMnO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCVcbn1cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogLjVyZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeVxufVxuXG5oMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yO1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5oMyBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuaDMgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbVxufVxuXG4ucHJvamVjdC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxufVxuLnByb2plY3QtaGVhZGVyIG1hdC1pY29uIHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvciFpbXBvcnRhbnQ7XG59XG4ucHJvamVjdC1oZWFkZXIgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG59IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5oMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEI2OTM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNFMUYxRkY7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbmgzIGEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5oMyBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnByb2plY3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtaGVhZGVyIG1hdC1pY29uIHtcbiAgY29sb3I6ICMwMEI2OTMgIWltcG9ydGFudDtcbn1cblxuLnByb2plY3QtaGVhZGVyIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwNUU4ODtcbiRzZWNvbmRhcnktY29sb3I6ICMwMEI2OTM7XG4kYWNjZW50LWNvbG9yOiAjRjlGODcxO1xuJHRleHQtZGFyay1jb2xvcjogIzM0MzQzNDtcbiR0ZXh0LWxpZ2h0LWNvbG9yOiAjRTFGMUZGO1xuJGJhY2tncm91bmQtZGFyay1jb2xvcjogIzA0MzM1RTtcbiRiYWNrZ3JvdW5kLWxpZ2h0LWNvbG9yOiB3aGl0ZXNtb2tlOyJdfQ== */"

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