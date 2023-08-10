(self["webpackChunkadmin_template"] = self["webpackChunkadmin_template"] || []).push([["src_app_modules_auth_sign-up_sign-up_module_ts"],{

/***/ 9417:
/*!****************************************************************!*\
  !*** ./src/app/modules/auth/sign-up/sign-up-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpRoutingModule": () => (/* binding */ SignUpRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.component */ 2950);
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.component */ 9101);
/* harmony import */ var src_app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






const routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
        children: [
            {
                path: 'register',
                component: _sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent,
                data: { title: (0,src_app_core__WEBPACK_IMPORTED_MODULE_2__.extract)('Register') },
            }
        ]
    }
];
class SignUpRoutingModule {
}
SignUpRoutingModule.ɵfac = function SignUpRoutingModule_Factory(t) { return new (t || SignUpRoutingModule)(); };
SignUpRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SignUpRoutingModule });
SignUpRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SignUpRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 6503:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/sign-up/sign-up.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpModule": () => (/* binding */ SignUpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 9417);
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.component */ 9101);
/* harmony import */ var src_app_shell_shell_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shell/shell.module */ 5506);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 9866);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);








class SignUpModule {
}
SignUpModule.ɵfac = function SignUpModule_Factory(t) { return new (t || SignUpModule)(); };
SignUpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SignUpModule });
SignUpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpRoutingModule,
            primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            src_app_shell_shell_module__WEBPACK_IMPORTED_MODULE_2__.ShellModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SignUpModule, { declarations: [_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpRoutingModule,
        primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        src_app_shell_shell_module__WEBPACK_IMPORTED_MODULE_2__.ShellModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_sign-up_sign-up_module_ts.js.map