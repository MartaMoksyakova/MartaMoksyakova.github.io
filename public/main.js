(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-category/admin-category.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-category/admin-category.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCategoryComponent", function() { return AdminCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_category_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/category.models */ "./src/app/shared/models/category.models.ts");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AdminCategoryComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCategoryComponent_tr_22_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const cat_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteCategory(cat_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r1.name, "");
} }
class AdminCategoryComponent {
    constructor(catService, afStorage) {
        this.catService = catService;
        this.afStorage = afStorage;
        this.editStatus = false;
        this.adminCategory = [];
        this.nameValid = false;
        this.addCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[А-Яа-я ]+$')]),
        });
    }
    ngOnInit() {
        this.getCategories();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getCategories() {
        this.subscription = this.catService.getFirebaseCategories().subscribe(data => {
            this.adminCategory = data.map(category => {
                const data = category.payload.doc.data();
                return data;
            });
            console.log(this.adminCategory);
        });
    }
    addCategory() {
        const category = new _shared_models_category_models__WEBPACK_IMPORTED_MODULE_1__["Category"]('1', this.addCategoryForm.value.name);
        console.log(category);
        if (this.adminCategory.length > 0) {
            category.id = (+this.adminCategory.slice(-1)[0].id + 1).toString();
        }
        this.catService.addFirebaseCategory(category)
            .then(() => {
            console.log('добавлено');
            this.addCategoryForm.reset();
        })
            // if (this.editStatus){
            //   // category.id = this.categoryID;
            //   this.catService.updateCategory(category).then(
            //     () => {
            //       this.addCategoryForm.reset();
            //       this.getCategories();
            //       this.editStatus =false;
            //     }
            //   );
            //   }
            // else {
            //   this.catService.addCategory(category).then(
            //     () =>{
            //       this.addCategoryForm.reset();
            //       this.getCategories();
            //     }
            //   )
            .catch(error => console.log(error));
    }
    // }
    editCategory() { }
    deleteCategory(cat) {
        this.catService.deleteFirebaseCategory(cat.id, cat)
            .then(() => {
            this.getCategories();
        })
            .catch(error => console.log(error));
    }
    checkName(addCategoryForm) {
        return this.nameValid = this.adminCategory.some((item, index, arr) => arr[index].name === addCategoryForm.value.name);
    }
}
AdminCategoryComponent.ɵfac = function AdminCategoryComponent_Factory(t) { return new (t || AdminCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"])); };
AdminCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminCategoryComponent, selectors: [["app-admin-category"]], decls: 23, vars: 4, consts: [[1, "border-0", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["name", "name", "formControlName", "name", "placeholder", "\u041D\u0430\u0437\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "alert", "alert-danger", 3, "hidden"], [1, "btn", "btn-success"], [1, "container"], [1, "row"], [1, "col-7"], [1, "table", "table-dark", "table-sm"], ["class", "text", 4, "ngFor", "ngForOf"], [1, "text"], ["type", "button", 1, "btn", "btn-danger", "m-2", 3, "click"]], template: function AdminCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminCategoryComponent_Template_form_ngSubmit_0_listener() { return ctx.addCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminCategoryComponent_Template_input_ngModelChange_5_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0422\u0430\u043A\u0435 \u0456\u043C'\u044F \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041D\u0430\u0437\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdminCategoryComponent_tr_22_Template, 8, 2, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addCategoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.checkName(ctx.addCategoryForm));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.adminCategory);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".btn-success[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.btn-warning[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tY2F0ZWdvcnkvYWRtaW4tY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tY2F0ZWdvcnkvYWRtaW4tY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4uYnRuLXdhcm5pbmd7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-category',
                templateUrl: './admin-category.component.html',
                styleUrls: ['./admin-category.component.scss']
            }]
    }], function () { return [{ type: _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/orders.service */ "./src/app/shared/services/orders.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AdminOrdersComponent_div_25_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + product_r5.image + ")");
} }
function AdminOrdersComponent_div_25_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, product_r6.name), " ", product_r6.count, " \u0448\u0442 ");
} }
function AdminOrdersComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminOrdersComponent_div_25_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const o_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteOrder(o_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminOrdersComponent_div_25_div_4_Template, 2, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminOrdersComponent_div_25_p_25_Template, 3, 4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", o_r1.ordersDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", o_r1.totalPayment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r1.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r1.userPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r1.userAdress, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", o_r1.ordersDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 7, o_r1.date, "shortDate"));
} }
class AdminOrdersComponent {
    constructor(ordersService) {
        this.ordersService = ordersService;
        this.cloudOrders = [];
    }
    ngOnInit() {
        this.getOrders();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getOrders() {
        this.subscription = this.ordersService.getFirebaseOrders().subscribe((data) => {
            this.cloudOrders = data.map((order) => {
                const o = order.payload.doc.data();
                return o;
            });
        });
    }
    deleteOrder(order) {
        this.ordersService.deleteFirebaseOrder(order).then(() => {
            this.getOrders();
        });
    }
}
AdminOrdersComponent.ɵfac = function AdminOrdersComponent_Factory(t) { return new (t || AdminOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"])); };
AdminOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminOrdersComponent, selectors: [["app-admin-orders"]], decls: 26, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "mt-15"], [1, "col-lg-12", "col-lg-push-6", "col-my-lt-12"], [1, "payItems", "smallSlideLeft", "animationDelay-1"], [1, "table"], [1, "tr", "thead"], [1, "tr"], [1, "td"], [1, "tr", "tbody"], ["class", "tr productOrder", 4, "ngFor", "ngForOf"], [1, "tr", "productOrder"], [1, "delateProduct", "remove-cart-product-popup", "open-popup", 3, "click"], [1, "td", "container_sm"], ["class", "smallProduct", 4, "ngFor", "ngForOf"], [1, "itemPrice", "productPrice"], [1, "tableMobTitle"], [1, "singleItemPrice"], [1, "Adress"], [1, "Order"], [4, "ngFor", "ngForOf"], [1, "smallProduct"], [1, "imgWrapper"]], template: function AdminOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0422\u043E\u0432\u0430\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0406\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0442\u0435\u043B\u0435\u0444\u043E\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0410\u0434\u0440\u0435\u0441\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0414\u0430\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminOrdersComponent_div_25_Template, 31, 10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cloudOrders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n\n.payItems[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  padding: 0 20px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: \"Comfortaa\";\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 20px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 24px 15px;\n  width: 12%;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:first-child {\n  padding: 0;\n  width: 4%;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: right;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  float: right;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 600;\n  padding: 30px 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #c80000;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  height: 120px;\n  width: 14%;\n}\n\n.payItems[_ngcontent-jlo-c51][_ngcontent-%COMP%]   .table[_ngcontent-jlo-c51][_ngcontent-%COMP%]   .td[_ngcontent-jlo-c51][_ngcontent-%COMP%]:nth-child(2) {\n  width: 14%;\n  padding-left: 0;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:first-child {\n  padding: 0;\n  width: 1%;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 0;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e6e6e6;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 7%;\n  padding-left: 0;\n}\n\n.payItems[_ngcontent-%COMP%]   .singleItemPrice[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.payItems[_ngcontent-%COMP%]   .singleItemPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.payItems[_ngcontent-%COMP%]   .itemPrice[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #000;\n}\n\n.payItems[_ngcontent-%COMP%]   .itemPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.smallProduct[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 13px;\n  line-height: 18px;\n  font-family: \"Roboto\";\n}\n\n.smallProduct[_ngcontent-%COMP%]   .as[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.smallProduct[_ngcontent-%COMP%]   .as[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 0.25s linear;\n}\n\n.smallProduct[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 90px;\n  height: 90px;\n  margin-top: -45px;\n  margin-left: 5px;\n  display: block;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  transition: opacity 0.25s linear;\n}\n\n.smallProduct[_ngcontent-%COMP%]   .smallProductInfo[_ngcontent-%COMP%] {\n  padding-left: 110px;\n}\n\n.container_sm[_ngcontent-%COMP%] {\n  width: 35%;\n}\n\n.delateProduct[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  cursor: pointer;\n}\n\n.delateProduct[_ngcontent-%COMP%]:before, .delateProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 15px;\n  height: 2px;\n  margin-left: -7px;\n  background: #c80000;\n  transform: rotate(-45deg);\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n.delateProduct[_ngcontent-%COMP%]:after {\n  transform: rotate(45deg);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.tableMobTitle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.emptyBasker[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.emptyBas[_ngcontent-%COMP%]   .payItems[_ngcontent-%COMP%] {\n  padding: 0;\n  display: none;\n}\n\n.emptyBas[_ngcontent-%COMP%]   .tablem[_ngcontent-%COMP%], .emptyBas[_ngcontent-%COMP%]   .paySelect[_ngcontent-%COMP%], .emptyBas[_ngcontent-%COMP%]   .btnWrapper[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.emptyBas[_ngcontent-%COMP%]   .emptyBasker[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  padding: 15px;\n  font-size: 24px;\n  line-height: 30px;\n  font-weight: 600;\n  font-family: \"Comfortaa\";\n}\n\n.emptyBas[_ngcontent-%COMP%]   .emptyBasker[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c80000;\n}\n\n.deliveryWarning[_ngcontent-%COMP%]   .errorMsg[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: rgba(212, 0, 0, 0.6);\n  border: 1px solid rgba(212, 0, 0, 0.3);\n  padding: 15px;\n  margin-top: 15px;\n  display: none;\n}\n\n.deliveryWarning[_ngcontent-%COMP%]   .errorMsg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 15px;\n  width: 24px;\n  height: 24px;\n  display: block;\n  margin-top: -12px;\n}\n\n.deliveryWarning[_ngcontent-%COMP%]   .errorMsg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n\n.invalidMsg[_ngcontent-%COMP%] {\n  padding: 5px 0 10px;\n  color: rgba(212, 0, 0, 0.6);\n  display: none;\n}\n\n.orderDiscount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 600;\n  padding: 30px 20px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.orderDiscount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n}\n\n.orderDiscount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .orderDiscount[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #c80000;\n}\n\n\n\nlabel[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  \n}\n\nlabel[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 0;\n  background: #0e0e0e;\n  z-index: 2;\n  content: \"\";\n  transition: height 300ms linear;\n}\n\nlabel[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 1px;\n  height: 0;\n  background: #0e0e0e;\n  transition: height 300ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  right: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  right: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel.active[_ngcontent-%COMP%]:before, label.active[_ngcontent-%COMP%]:after {\n  height: 100%;\n}\n\nlabel.active[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:before, label.active[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:after, label.active[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:before, label.active[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\nlabel.light[_ngcontent-%COMP%]   .simpleInput[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #fff;\n}\n\nlabel.light[_ngcontent-%COMP%]:before, label.light[_ngcontent-%COMP%]:after {\n  background: #fff;\n}\n\nlabel.light[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:before, label.light[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:after, label.light[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:before, label.light[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:after {\n  background: #fff;\n}\n\n.inputWrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.inputWrapper.searchInput[_ngcontent-%COMP%]   .simpleInput[_ngcontent-%COMP%] {\n  padding-right: 50px;\n}\n\n.inputWrapper.searchInput[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n\n.inputWrapper.searchInput[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: block;\n  margin: 15px auto;\n}\n\n.simpleInput[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 48px;\n  padding: 0 15px;\n  color: #0e0e0e;\n  height: 50px;\n  width: 100%;\n  border: 1px #e6e6e6 solid;\n  transition: all 200ms linear;\n  font-family: \"Roboto\";\n}\n\n.simpleInput.invalid[_ngcontent-%COMP%] {\n  z-index: 4;\n  border-color: #f11e1e !important;\n}\n\ntextarea.simpleInput[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 22px;\n  height: 140px;\n}\n\ntextarea.simpleInput.small[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-moz-placeholder, textarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder, textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-moz-placeholder, textarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder, textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\n\n\n\n\n.checkboxEntry[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  min-width: 20px;\n  min-height: 20px;\n}\n\n.checkboxEntry.light[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:before {\n  background-position: center center;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:after {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 18px;\n  line-height: 22px;\n  padding-left: 22px;\n  display: block;\n  font-family: \"Comfortaa\";\n  font-weight: 600;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  border: 2px #f7c200 solid;\n  border-radius: 1px;\n  z-index: 1;\n  content: \"\";\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  background: #f7c200;\n  transform: scale(0.05);\n  opacity: 1;\n  transition: opacity 0.45s linear, transform 0.45s linear;\n  content: \"\";\n}\n\n.checkboxEntry.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  border-radius: 10px;\n  background: none;\n}\n\n.checkboxEntry.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  border-radius: 100%;\n}\n\n\n\n\n\n.sumoWrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.SelectBox[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 15px;\n}\n\n.SumoSelect[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n  width: 100%;\n}\n\n.SumoSelect[_ngcontent-%COMP%]:before, .SumoSelect[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  z-index: 2;\n  transition: width 375ms linear;\n  content: \"\";\n}\n\n.SumoSelect[_ngcontent-%COMP%]:after {\n  left: auto;\n  right: 50%;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:before, .SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  z-index: 2;\n  transition: width 375ms linear;\n  content: \"\";\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:after {\n  left: auto;\n  right: 50%;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before, .SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 0%;\n  background: #0e0e0e;\n  z-index: 2;\n  transition: height 375ms linear;\n  content: \"\";\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  top: auto;\n  left: auto;\n  right: 0;\n  bottom: 0;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%] {\n  padding: 0;\n  border-bottom: 1px solid #e6e6e6;\n  transition: background 100ms linear;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%]:first-child, .SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%]:last-child {\n  border-radius: 0;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before, .SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  height: 100%;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:before, .SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]:before, .SumoSelect.open[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]    > .optWrapper[_ngcontent-%COMP%] {\n  top: 50px;\n}\n\n.productCountWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 24px;\n}\n\n.productCount[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  transform: translateY(-50%);\n}\n\n.productCount.lessProduct[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n.productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n\n.productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 38px;\n  font-weight: 500;\n  padding: 0 6px;\n  font-family: \"Roboto\";\n  border: 1px solid #eaeaea;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  font-weight: 400;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  background: none;\n  border: none;\n  margin: 0;\n  width: 100%;\n  font-family: \"Arial\";\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%]:before, .productCount.moreProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%]:after {\n  transform: rotate(-90deg);\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%]:before, .productCount.moreProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tb3JkZXJzL2FkbWluLW9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRko7O0FBTUU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUhKOztBQU1FO0VBQ0UsbUJBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU1FO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FOztFQUVFLGNBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFISjs7QUFNRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUhKOztBQU1FO0VBQ0UsZUFBQTtBQUhKOztBQU1FO0VBQ0UsZ0NBQUE7QUFISjs7QUFNRTtFQUNFLHNCQUFBO0FBSEo7O0FBTUU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtBQUhKOztBQU1FO0VBQ0UsaUJBQUE7QUFISjs7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1FO0VBQ0UsaUJBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7QUFISjs7QUFN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O0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBR0EsbUNBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0U7RUFHRSx5QkFBQTtBQUpKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBR0EsbUNBQUE7RUFDQSxXQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1vcmRlcnMvYWRtaW4tb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuLy8gLmJ0bi1ibG9ja3tcclxuLy8gICAgIHdpZHRoOiAyMCU7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4vLyB9XHJcbi5wYXlJdGVtcyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiO1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50aGVhZCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGhlYWQgLnRkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE1cHg7XHJcbiAgICB3aWR0aDogMTIlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50aGVhZCAudGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiA0JTtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGhlYWQgLnRkOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGZvb3Qge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRmb290IC50ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50Zm9vdCAuZnVsbFByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRmb290IC5mdWxsUHJpY2UgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRmb290IC5mdWxsUHJpY2Ugc3BhbixcclxuICAucGF5SXRlbXMgLnRhYmxlIC50Zm9vdCAuZnVsbFByaWNlIGkge1xyXG4gICAgY29sb3I6ICNjODAwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRib2R5IC50ZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDE0JTtcclxuXHJcbiAgfVxyXG4gIC5wYXlJdGVtc1tfbmdjb250ZW50LWpsby1jNTFdIC50YWJsZVtfbmdjb250ZW50LWpsby1jNTFdIC50ZFtfbmdjb250ZW50LWpsby1jNTFdOm50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogMTQlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGJvZHkgLnRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRib2R5IC50ZDpudGgtY2hpbGQoMikge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50ciAudHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogNyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAuc2luZ2xlSXRlbVByaWNlIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnNpbmdsZUl0ZW1QcmljZSBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLml0ZW1QcmljZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAuaXRlbVByaWNlIHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbWFsbFByb2R1Y3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICB9XHJcbiAgXHJcbiAgLnNtYWxsUHJvZHVjdCAuYXMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuc21hbGxQcm9kdWN0IC5hcyBhIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjI1MHMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogY29sb3IgLjI1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjI1MHMgbGluZWFyO1xyXG4gIH1cclxuICBcclxuICAuc21hbGxQcm9kdWN0IC5pbWdXcmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjI1MHMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMjUwcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNTBzIGxpbmVhcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNtYWxsUHJvZHVjdCAuc21hbGxQcm9kdWN0SW5mbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xyXG4gIH1cclxuICAuY29udGFpbmVyX3Nte1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gIH1cclxuICBcclxuICAuZGVsYXRlUHJvZHVjdCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmRlbGF0ZVByb2R1Y3Q6YmVmb3JlLFxyXG4gIC5kZWxhdGVQcm9kdWN0OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2M4MDAwMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZWxhdGVQcm9kdWN0OmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICBcclxuICAudGFibGUgLnRyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIC50ZCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIH1cclxuICBcclxuICAudGFibGVNb2JUaXRsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZW1wdHlCYXNrZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmVtcHR5QmFzIC5wYXlJdGVtcyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmVtcHR5QmFzIC50YWJsZW0sXHJcbiAgLmVtcHR5QmFzIC5wYXlTZWxlY3QsXHJcbiAgLmVtcHR5QmFzIC5idG5XcmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbXB0eUJhcyAuZW1wdHlCYXNrZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCI7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbXB0eUJhcyAuZW1wdHlCYXNrZXIgYSB7XHJcbiAgICBjb2xvcjogI2M4MDAwMDtcclxuICB9XHJcbiAgXHJcbiAgLmRlbGl2ZXJ5V2FybmluZyAuZXJyb3JNc2cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjEyLCAwLCAwLCAwLjYpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsIDAsIDAsIDAuMyk7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZWxpdmVyeVdhcm5pbmcgLmVycm9yTXNnIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZWxpdmVyeVdhcm5pbmcgLmVycm9yTXNnIHAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIH1cclxuICBcclxuICAuaW52YWxpZE1zZyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAxMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjEyLCAwLCAwLCAwLjYpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyRGlzY291bnQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyRGlzY291bnQgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlckRpc2NvdW50IHNwYW4sXHJcbiAgLm9yZGVyRGlzY291bnQgaSB7XHJcbiAgICBjb2xvcjogI2M4MDAwMDtcclxuICB9XHJcbiAgXHJcbiAgLypJbnB1dHMqL1xyXG4gIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLypMaWdodCBpbnB1dHMqL1xyXG4gIH1cclxuICBcclxuICBsYWJlbDpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6ICMwZTBlMGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGxpbmVhcjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwgLmZpcnN0Qm9yZGVyRWxlbWVudDpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICMwZTBlMGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwgLmZpcnN0Qm9yZGVyRWxlbWVudDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBlMGUwZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICBcclxuICBsYWJlbCAuc2Vjb25kQm9yZGVyRWxlbWVudDpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIC5zZWNvbmRCb3JkZXJFbGVtZW50OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBlMGUwZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5hY3RpdmU6YmVmb3JlLCBsYWJlbC5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5hY3RpdmUgLmZpcnN0Qm9yZGVyRWxlbWVudDpiZWZvcmUsIGxhYmVsLmFjdGl2ZSAuZmlyc3RCb3JkZXJFbGVtZW50OmFmdGVyLFxyXG4gIGxhYmVsLmFjdGl2ZSAuc2Vjb25kQm9yZGVyRWxlbWVudDpiZWZvcmUsXHJcbiAgbGFiZWwuYWN0aXZlIC5zZWNvbmRCb3JkZXJFbGVtZW50OmFmdGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLmxpZ2h0IC5zaW1wbGVJbnB1dCB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5saWdodDpiZWZvcmUsIGxhYmVsLmxpZ2h0OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLmxpZ2h0IC5maXJzdEJvcmRlckVsZW1lbnQ6YmVmb3JlLCBsYWJlbC5saWdodCAuZmlyc3RCb3JkZXJFbGVtZW50OmFmdGVyLFxyXG4gIGxhYmVsLmxpZ2h0IC5zZWNvbmRCb3JkZXJFbGVtZW50OmJlZm9yZSxcclxuICBsYWJlbC5saWdodCAuc2Vjb25kQm9yZGVyRWxlbWVudDphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRXcmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0V3JhcHBlci5zZWFyY2hJbnB1dCAuc2ltcGxlSW5wdXQge1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0V3JhcHBlci5zZWFyY2hJbnB1dCAuaW1nV3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRXcmFwcGVyLnNlYXJjaElucHV0IGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5zaW1wbGVJbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGNvbG9yOiAjMGUwZTBlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCAjZTZlNmU2IHNvbGlkO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICB9XHJcbiAgXHJcbiAgLnNpbXBsZUlucHV0LmludmFsaWQge1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIGJvcmRlci1jb2xvcjogI2YxMWUxZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYS5zaW1wbGVJbnB1dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYS5zaW1wbGVJbnB1dC5zbWFsbCB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxyXG4gIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDotbW96LXBsYWNlaG9sZGVyLFxyXG4gIHRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OjotbW96LXBsYWNlaG9sZGVyLFxyXG4gIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbiAgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcclxuICB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzBlMGUwZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIsXHJcbiAgdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzBlMGUwZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OjotbW96LXBsYWNlaG9sZGVyLFxyXG4gIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMGUwZTBlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxyXG4gIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzBlMGUwZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLmxpZ2h0IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxyXG4gIGxhYmVsLmxpZ2h0IHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5saWdodCBpbnB1dDotbW96LXBsYWNlaG9sZGVyLFxyXG4gIGxhYmVsLmxpZ2h0IHRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLmxpZ2h0IGlucHV0OjotbW96LXBsYWNlaG9sZGVyLFxyXG4gIGxhYmVsLmxpZ2h0IHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5saWdodCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbiAgbGFiZWwubGlnaHQgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAvKiBpbnB1dHMgKi9cclxuICBcclxuICAvKlJhZGlvIENoZWNrQm94Ki9cclxuICAuY2hlY2tib3hFbnRyeSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrYm94RW50cnkubGlnaHQgc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrYm94RW50cnkgaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrYm94RW50cnkgaW5wdXQ6Y2hlY2tlZCArIHNwYW46YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveEVudHJ5IGlucHV0OmNoZWNrZWQgKyBzcGFuOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveEVudHJ5IHNwYW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrYm94RW50cnkgc3BhbjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXI6IDJweCAjZjdjMjAwIHNvbGlkO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24tNi5wbmcpIDEwMHB4IGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrYm94RW50cnkgc3BhbjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmN2MyMDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wNSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC4wNSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wNSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC40NTBzIGxpbmVhciwgLXdlYmtpdC10cmFuc2Zvcm0gLjQ1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNDUwcyBsaW5lYXIsIC13ZWJraXQtdHJhbnNmb3JtIC40NTBzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjQ1MHMgbGluZWFyLCB0cmFuc2Zvcm0gLjQ1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNDUwcyBsaW5lYXIsIHRyYW5zZm9ybSAuNDUwcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40NTBzIGxpbmVhciwgdHJhbnNmb3JtIC40NTBzIGxpbmVhciwgLXdlYmtpdC10cmFuc2Zvcm0gLjQ1MHMgbGluZWFyO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveEVudHJ5LnJhZGlvIHNwYW46YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja2JveEVudHJ5LnJhZGlvIHNwYW46YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIH1cclxuICAvKiBDaGVja2JveCAqL1xyXG4gIFxyXG4gIC8qU3Vtb1NlbGVjdCovXHJcbiAgLnN1bW9XcmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLlNlbGVjdEJveCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuU3Vtb1NlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuU3Vtb1NlbGVjdDpiZWZvcmUsIC5TdW1vU2VsZWN0OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0OmFmdGVyIHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogNTAlO1xyXG4gIH1cclxuICBcclxuICAuU3Vtb1NlbGVjdCAuQ2FwdGlvbkNvbnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3QgLkNhcHRpb25Db250OmJlZm9yZSwgLlN1bW9TZWxlY3QgLkNhcHRpb25Db250OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0IC5DYXB0aW9uQ29udDphZnRlciB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3QgLkNhcHRpb25Db250ID4gc3BhbjpiZWZvcmUsIC5TdW1vU2VsZWN0IC5DYXB0aW9uQ29udCA+IHNwYW46YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzBlMGUwZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAzNzVtcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMzc1bXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDM3NW1zIGxpbmVhcjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICBcclxuICAuU3Vtb1NlbGVjdCAuQ2FwdGlvbkNvbnQgPiBzcGFuOmFmdGVyIHtcclxuICAgIHRvcDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3QgLkNhcHRpb25Db250ID4gc3BhbiwgLlN1bW9TZWxlY3QgLkNhcHRpb25Db250IGxhYmVsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3QgLm9wdFdyYXBwZXIge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAuU3Vtb1NlbGVjdCAub3B0V3JhcHBlciAub3B0aW9ucyB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0IC5vcHRXcmFwcGVyIC5vcHRpb25zIGxpLm9wdCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMTAwbXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDEwMG1zIGxpbmVhcjtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3QgLm9wdFdyYXBwZXIgLm9wdGlvbnMgbGkub3B0IGxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3QgLm9wdFdyYXBwZXIgLm9wdGlvbnMgbGkub3B0OmZpcnN0LWNoaWxkLCAuU3Vtb1NlbGVjdCAub3B0V3JhcHBlciAub3B0aW9ucyBsaS5vcHQ6bGFzdC1jaGlsZCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0Lm9wZW4gLkNhcHRpb25Db250ID4gc3BhbjpiZWZvcmUsIC5TdW1vU2VsZWN0Lm9wZW4gLkNhcHRpb25Db250ID4gc3BhbjphZnRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdW1vU2VsZWN0Lm9wZW4gLkNhcHRpb25Db250OmJlZm9yZSwgLlN1bW9TZWxlY3Qub3BlbiAuQ2FwdGlvbkNvbnQ6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3Qub3BlbjpiZWZvcmUsIC5TdW1vU2VsZWN0Lm9wZW46YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLlN1bW9TZWxlY3Qub3BlbiA+IC5vcHRXcmFwcGVyIHtcclxuICAgIHRvcDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3RDb3VudFdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3RDb3VudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0Q291bnQubGVzc1Byb2R1Y3Q6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNjODAwMDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdENvdW50V3JhcHBlciBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3RDb3VudFdyYXBwZXIgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0Q291bnQubW9yZVByb2R1Y3Qge1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdENvdW50Lm1vcmVQcm9kdWN0OmJlZm9yZSwgLnByb2R1Y3RDb3VudC5tb3JlUHJvZHVjdDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzgwMDAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3RDb3VudC5tb3JlUHJvZHVjdDphZnRlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0Q291bnQubW9yZVByb2R1Y3Q6YmVmb3JlLCAucHJvZHVjdENvdW50Lm1vcmVQcm9kdWN0OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNjODAwMDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuIFxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-orders',
                templateUrl: './admin-orders.component.html',
                styleUrls: ['./admin-orders.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/product.model */ "./src/app/shared/models/product.model.ts");
/* harmony import */ var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");











function AdminProductsComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", category_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r7.name);
} }
function AdminProductsComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r8.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.size);
} }
function AdminProductsComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductsComponent_tr_46_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const p_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteProduct(p_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r9.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r9.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, p_r9.price, "UAH"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r9.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r9.category == null ? null : p_r9.category.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + p_r9.image + ")");
} }
function AdminProductsComponent_img_52_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductsComponent_img_52_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return _r3.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminProductsComponent_div_54_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductsComponent_div_54_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const page_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return _r3.setCurrent(page_r15.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r15.label);
} }
function AdminProductsComponent_div_54_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r15.label);
} }
function AdminProductsComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminProductsComponent_div_54_span_1_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminProductsComponent_div_54_div_2_Template, 3, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r3.getCurrent() === page_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.getCurrent() !== page_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.getCurrent() === page_r15.value);
} }
function AdminProductsComponent_img_56_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductsComponent_img_56_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return _r3.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminProductsComponent {
    constructor(catService, afStorage, prodService) {
        this.catService = catService;
        this.afStorage = afStorage;
        this.prodService = prodService;
        this.adminCategory = [];
        this.adminProducts = [];
        this.productImagesArray = [];
        this.isEdited = false;
        this.p = 1;
        this.config = {
            id: 'custom',
            itemsPerPage: 6,
            currentPage: 1,
        };
        this.addProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[А-Яа-я ]+$')]),
            productDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            productCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            productSizes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.productSizes = [
            { size: '35', checked: false },
            { size: '36', checked: false },
            { size: '37', checked: false },
            { size: '38', checked: false },
            { size: '39', checked: false },
            { size: '40', checked: false },
            { size: '41', checked: false },
            { size: '42', checked: false }
        ];
    }
    ngOnInit() {
        this.getCategory();
        this.getProduct();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getCategory() {
        this.subscription = this.catService.getFirebaseCategories().subscribe(data => {
            this.adminCategory = data.map(category => {
                const data = category.payload.doc.data();
                return data;
            });
        });
    }
    uploadFile(event) {
        const file = event.target.files[0];
        const filePath = `images/${this.uuid()}.${file.type.split('/')[1]}`;
        const task = this.afStorage.upload(filePath, file);
        this.uploadProgress = task.percentageChanges();
        console.log(this.uploadProgress);
        task.then(e => {
            this.afStorage.ref(`${e.metadata.fullPath}`)
                .getDownloadURL()
                .subscribe(url => {
                this.productImagesArray.push(url);
                console.log(this.productImagesArray);
            });
        });
    }
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    addProduct() {
        const product = new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_3__["Product"]('1', this.addProductForm.value.productCategory, this.addProductForm.value.productName, this.addProductForm.value.productDescription, this.addProductForm.value.productPrice, 1, this.productImagesArray, this.addProductForm.value.productSizes);
        console.log(product);
        if (this.adminProducts.length > 0) {
            this.adminProducts = this.adminProducts.sort(function (a, b) {
                return +a.id - +b.id;
            });
            product.id = (+this.adminProducts.slice(-1)[0].id + 1).toString();
        }
        this.prodService.addFirebaseProduct(product)
            .then(() => {
            this.addProductForm.reset();
        });
    }
    getProduct() {
        this.subscription = this.prodService.getFirebaseProduct().subscribe(data => {
            this.adminProducts = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
            if (this.adminProducts.length > 0) {
                this.adminProducts = this.adminProducts.sort(function (a, b) {
                    return +a.id - +b.id;
                });
            }
        });
    }
    deleteProduct(p, id) {
        this.prodService.deleteFirebaseProduct(p.id, p)
            .then(() => {
            this.getProduct();
        })
            .catch(error => console.log(error));
    }
    onPageChange(page) {
        this.config.currentPage = page;
        window.scrollTo(0, 450);
    }
}
AdminProductsComponent.ɵfac = function AdminProductsComponent_Factory(t) { return new (t || AdminProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"])); };
AdminProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminProductsComponent, selectors: [["app-admin-products"]], decls: 58, vars: 19, consts: [[1, "border-0", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "productName", "placeholder", "\u041D\u0430\u0437\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u0443", "type", "text", 1, "form-control"], ["formControlName", "productDescription", "type", "text", "aria-label", "name", "aria-describedby", "addon-wrapping", "placeholder", "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u043E\u043F\u0438\u0441 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443", 1, "form-control"], ["formControlName", "productPrice", "type", "number", "aria-label", "name", "aria-describedby", "addon-wrapping", "placeholder", "\u0426\u0456\u043D\u0430", 1, "form-control"], ["formControlName", "productCategory", "name", "productCategory", "id", "inputGroupSelect01", 1, "custom-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["multiple", "", "formControlName", "productSizes"], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group", "is-invalid"], [1, "custom-file"], ["formControlName", "productImage", "type", "file", "id", "validatedInputGroupCustomFile", "required", "", 1, "custom-file-input", 3, "change"], ["for", "validatedInputGroupCustomFile", 1, "custom-file-label"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-danger"], ["type", "submit", 1, "btn", "btn-success"], [1, "container"], [1, "row"], [1, "col-12", "mt-5%"], [1, "table", "table-black", "table-sm"], ["class", "text", 4, "ngFor", "ngForOf"], [3, "id", "pageChange"], ["p", "paginationApi"], [1, "custom-pagination"], [1, "pagination-previous"], [3, "click", 4, "ngIf"], ["class", "page-number", 3, "current", 4, "ngFor", "ngForOf"], [1, "pagination-next"], [3, "ngValue"], [3, "value"], [1, "text"], [1, "td"], [1, "smallProduct"], [1, "imgWrapper"], ["type", "button", 1, "btn", "btn-danger", "m-2", 3, "click"], [3, "click"], [1, "page-number"], [4, "ngIf"]], template: function AdminProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminProductsComponent_Template_form_ngSubmit_0_listener() { return ctx.addProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminProductsComponent_option_9_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminProductsComponent_option_12_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminProductsComponent_Template_input_change_15_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0424\u043E\u0442\u043E \u0434\u043B\u044F \u0442\u043E\u0432\u0430\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041D\u0430\u0437\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u041E\u043F\u0438\u0441 \u0442\u043E\u0432\u0430\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0426\u0456\u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0420\u043E\u0437\u043C\u0456\u0440 \u0442\u043E\u0432\u0430\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0424\u043E\u0442\u043E \u0442\u043E\u0432\u0430\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AdminProductsComponent_tr_46_Template, 21, 11, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "pagination-template", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AdminProductsComponent_Template_pagination_template_pageChange_48_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AdminProductsComponent_img_52_Template, 1, 0, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " << ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AdminProductsComponent_div_54_Template, 3, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AdminProductsComponent_img_56_Template, 1, 0, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " >> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addProductForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.adminCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 14, ctx.uploadProgress) + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 16, ctx.adminProducts, ctx.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.config.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r3.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r3.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r3.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r3.isLastPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r3.isLastPage());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.btn-success[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\n  color: black;\n  border: 2px solid #000;\n  background-color: white;\n  margin-top: 5%;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  margin-left: 85%;\n  width: 15%;\n  background-color: black;\n  color: white;\n}\n\ntable[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.smallProduct[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-bottom: 10%;\n  width: 90px;\n  height: 90px;\n  margin-left: 5px;\n  display: block;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  transition: opacity 0.25s linear;\n}\n\n.custom-pagination[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 50%;\n  align-items: center;\n}\n\n.page-number.current[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 2px solid black;\n}\n\n.page-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 30px;\n  height: 30px;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-family: \"Oswald\", sans-serif;\n}\n\n.pagination-previous[_ngcontent-%COMP%], .pagination-next[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  cursor: pointer;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFFSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUdBLGdDQUFBO0FBRUo7O0FBQUU7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDRTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUVFOztFQUVFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1wcm9kdWN0cy9hZG1pbi1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5idG4tc3VjY2VzcywgLmJ0bntcclxuICAgIC8vIHdpZHRoOiAzMCU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIFxyXG59XHJcbi5idG4tc3VjY2Vzc3tcclxuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG50YWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zbWFsbFByb2R1Y3QgLmltZ1dyYXBwZXIge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjI1MHMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMjUwcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNTBzIGxpbmVhcjtcclxuICB9XHJcbiAgLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdlLW51bWJlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICB9XHJcbiAgLnBhZ2UtbnVtYmVyLmN1cnJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLW51bWJlciBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbi1wcmV2aW91cyxcclxuICAucGFnaW5hdGlvbi1uZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBzZWxlY3R7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-products',
                templateUrl: './admin-products.component.html',
                styleUrls: ['./admin-products.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }, { type: _shared_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["category"]; };
const _c1 = function () { return ["products"]; };
const _c2 = function () { return ["orders"]; };
class AdminComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    logout() {
        this.auth.logOut();
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 15, vars: 6, consts: [[1, "container-fluid"], [1, "row"], [1, "col-3"], ["role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], [1, "col-9"], ["id", "v-pills-tabContent", 1, "tab-content"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0422\u043E\u0432\u0430\u0440\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_10_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0412\u0438\u0445\u0456\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n@media screen and (max-width: 426px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding-top: 25%;\n  }\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background-color: black;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-left: 70%;\n  background-color: black;\n  color: white;\n  font-size: 17px;\n  border: 1px solid black;\n  margin-top: 5px;\n}\n@media screen and (max-width: 426px) {\n  .col-3[_ngcontent-%COMP%] {\n    max-width: 75%;\n  }\n}\n@media screen and (max-width: 426px) {\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 426px) {\n  form[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (max-width: 426px) {\n  .col-9[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKO0FBQUk7RUFGSjtJQUdRLGdCQUFBO0VBR047QUFDRjtBQURBO0VBQ0ksdUJBQUE7QUFJSjtBQUZBO0VBQ0ksWUFBQTtBQUtKO0FBSEE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBTUo7QUFISTtFQURKO0lBRVEsY0FBQTtFQU9OO0FBQ0Y7QUFKSTtFQURKO0lBRVEsc0JBQUE7RUFRTjtBQUNGO0FBTEk7RUFESjtJQUVRLFVBQUE7RUFTTjtBQUNGO0FBTkk7RUFESjtJQUVRLGNBQUE7RUFVTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI1JTtcclxuICAgICAgfVxyXG59XHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJ0bntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uY29sLTN7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgIG1heC13aWR0aDogNzUlOyBcclxuICAgICAgfVxyXG59XHJcbi5yb3d7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxufVxyXG5mb3Jte1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICB9XHJcbn1cclxuLmNvbC05e1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk1JTsgXHJcbiAgICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/basket/basket.component */ "./src/app/pages/basket/basket.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin-category/admin-category.component */ "./src/app/admin/admin-category/admin-category.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");














const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'product/:category', component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"] },
    { path: 'product-details/:category/:id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsComponent"] },
    { path: 'basket', component: _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_3__["BasketComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], canActivate: [_app_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], children: [
            { path: '', pathMatch: 'full', redirectTo: 'category' },
            { path: 'category', component: _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_5__["AdminCategoryComponent"] },
            { path: 'orders', component: _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_6__["AdminOrdersComponent"] },
            { path: 'products', component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_7__["AdminProductsComponent"] },
        ] },
    { path: '**', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");






class AppComponent {
    constructor() {
        this.title = 'KeltonProject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-ui-loader");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/basket/basket.component */ "./src/app/pages/basket/basket.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin-category/admin-category.component */ "./src/app/admin/admin-category/admin-category.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _shared_pipes_carrency_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/pipes/carrency.pipe */ "./src/app/shared/pipes/carrency.pipe.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _preload_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./preload.config */ "./src/app/preload.config.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-bootstrap/rating */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/rating/fesm2015/ngx-bootstrap-rating.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/__ivy_ngcc__/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");



















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_19__["NgxUiLoaderModule"].forRoot(_preload_config__WEBPACK_IMPORTED_MODULE_20__["ngxUiLoaderConfig"]),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_19__["NgxUiLoaderRouterModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_24__["CarouselModule"].forRoot(),
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_27__["NgxPaginationModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_28__["AlertModule"].forRoot(),
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
            ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_30__["RatingModule"].forRoot(),
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__["MatStepperModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_33__["CdkStepperModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_41__["CdkTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__["MatButtonToggleModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_42__["TextMaskModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_43__["InfiniteScrollModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_9__["BasketComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
        _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_11__["AdminCategoryComponent"],
        _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_12__["AdminOrdersComponent"],
        _shared_pipes_carrency_pipe__WEBPACK_IMPORTED_MODULE_14__["CarrencyPipe"],
        _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_13__["AdminProductsComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
        _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_22__["ProductDetailsComponent"],
        _pages_product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_19__["NgxUiLoaderModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_19__["NgxUiLoaderRouterModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_24__["CarouselModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_27__["NgxPaginationModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_28__["AlertModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_30__["RatingModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__["MatStepperModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_33__["CdkStepperModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_41__["CdkTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__["MatButtonToggleModule"],
        angular2_text_mask__WEBPACK_IMPORTED_MODULE_42__["TextMaskModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_43__["InfiniteScrollModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_9__["BasketComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                    _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_11__["AdminCategoryComponent"],
                    _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_12__["AdminOrdersComponent"],
                    _shared_pipes_carrency_pipe__WEBPACK_IMPORTED_MODULE_14__["CarrencyPipe"],
                    _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_13__["AdminProductsComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                    _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_22__["ProductDetailsComponent"],
                    _pages_product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_19__["NgxUiLoaderModule"].forRoot(_preload_config__WEBPACK_IMPORTED_MODULE_20__["ngxUiLoaderConfig"]),
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_19__["NgxUiLoaderRouterModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_24__["CarouselModule"].forRoot(),
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_27__["NgxPaginationModule"],
                    ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_28__["AlertModule"].forRoot(),
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                    ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_30__["RatingModule"].forRoot(),
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__["MatStepperModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_33__["CdkStepperModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_41__["CdkTableModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__["MatButtonToggleModule"],
                    angular2_text_mask__WEBPACK_IMPORTED_MODULE_42__["TextMaskModule"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_43__["InfiniteScrollModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
                ],
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
        this.x = 5;
        this.y = 2;
    }
    ngOnInit() {
    }
    scroll() {
        window.scrollTo(0, 760);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 33, vars: 0, consts: [["id", "footer"], [1, "laberFooter-top"], [1, "container", "d-flex", "flex-row", "justify-content-around", "justify-content-around"], [1, "row"], [1, "col-lg-10", "col-md-10", "col-sm-12", "col-xs-12", "content-footer", "align-center"], [1, "laber-footer-before", "col-lg-4", "col-md-4", "col-sm-12", "col-xs-12"], [1, "bcg_none", 3, "click"], ["href", "tel:093-1543760"], ["href", "tel:067-3085813"], [1, "laberFooter-bottom"], [1, "container"], [1, "icon_container", "d-flex", "flex-row"], [1, "copyright", "col-lg-12"], ["href", "https://www.instagram.com/fortunate.kelton/?hl=uk", "target", "_blank", 1, "social"], [1, "fa", "fa-instagram"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u0440\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_8_listener() { return ctx.scroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0411\u0456\u043B\u044C\u0448\u0435 4 \u0440\u043E\u043A\u0456\u0432 \u043D\u0430 \u0440\u0438\u043D\u043A\u0443 \u0443 \u041B\u044C\u0432\u043E\u0432\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "093-1543760");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "067-3085813");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A9 2020\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "KELTON \u041B\u042C\u0412\u0406\u0412 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {\n  background: #fff;\n  position: relative;\n  height: 40%;\n  padding-top: 5%;\n}\n@media screen and (max-width: 426px) {\n  #footer[_ngcontent-%COMP%] {\n    height: 28%;\n  }\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  #footer[_ngcontent-%COMP%] {\n    height: 25%;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  #footer[_ngcontent-%COMP%] {\n    height: 23%;\n  }\n}\n.laberFooter-top[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Oswald\", sans-serif;\n}\n@media screen and (max-width: 768px) {\n  .laberFooter-top[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n.laberFooter-bottom[_ngcontent-%COMP%], .container[_ngcontent-%COMP%], .icon_container[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 0 55px;\n}\n@media screen and (max-width: 426px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.copyright[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Oswald\", sans-serif;\n  line-height: 35px;\n  text-align: center;\n}\n@media screen and (max-width: 768px) {\n  .copyright[_ngcontent-%COMP%] {\n    line-height: 25px;\n  }\n}\na[_ngcontent-%COMP%] {\n  color: black;\n}\n.social[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 15px 10px;\n}\n.content-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-left: 17%;\n}\n@media screen and (max-width: 768px) {\n  .content-footer[_ngcontent-%COMP%] {\n    margin-left: 14%;\n  }\n}\n.laber-footer-before[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 426px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    font-weight: 500;\n    font-family: \"Oswald\", sans-serif;\n  }\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\np[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-family: \"Oswald\", sans-serif;\n}\n.fa[_ngcontent-%COMP%] {\n  font-size: large;\n}\n.bcg_none[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: none;\n  width: 24%;\n}\n@media screen and (max-width: 426px) {\n  .bcg_none[_ngcontent-%COMP%] {\n    width: 56%;\n  }\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .bcg_none[_ngcontent-%COMP%] {\n    width: 46%;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  .bcg_none[_ngcontent-%COMP%] {\n    width: 39%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7QUFDSTtFQUxKO0lBTVEsV0FBQTtFQUVOO0FBQ0Y7QUFESTtFQVJKO0lBU1EsV0FBQTtFQUlOO0FBQ0Y7QUFIUTtFQVhSO0lBWVksV0FBQTtFQU1WO0FBQ0Y7QUFKQTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBQU9KO0FBTkk7RUFISjtJQUlRLGVBQUE7RUFTTjtBQUNGO0FBUEE7RUFDSSxhQUFBO0FBVUo7QUFSQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBV0o7QUFWSTtFQUhKO0lBSVEsVUFBQTtFQWFOO0FBQ0Y7QUFYQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBY0o7QUFaQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFlSjtBQWRJO0VBUEo7SUFRUSxpQkFBQTtFQWlCTjtBQUNGO0FBZkE7RUFDSSxZQUFBO0FBa0JKO0FBaEJBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQW1CSjtBQWpCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFvQko7QUFuQkk7RUFMSjtJQU1RLGdCQUFBO0VBc0JOO0FBQ0Y7QUFwQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUF1Qko7QUFwQkk7RUFESjtJQUVRLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDSixpQ0FBQTtFQXdCRjtBQUNGO0FBdEJJO0VBUEo7SUFRUSxlQUFBO0VBeUJOO0FBQ0Y7QUF2QkE7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO0FBMEJKO0FBdkJBO0VBQ0ksZ0JBQUE7QUEwQko7QUF4QkE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBMkJKO0FBMUJJO0VBSko7SUFLTyxVQUFBO0VBNkJMO0FBQ0Y7QUE1QlE7RUFQUjtJQVFZLFVBQUE7RUErQlY7QUFDRjtBQTlCWTtFQVZaO0lBV2dCLFVBQUE7RUFpQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7IFxyXG4gICAgICAgIGhlaWdodDogMjglOyAgICBcclxuICAgICAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjdweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgICAgIGhlaWdodDogMjUlOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyBcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMyU7ICAgICAgXHJcbiAgICAgICAgICAgIH1cclxufVxyXG4ubGFiZXJGb290ZXItdG9wIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDsgICAgICBcclxuICAgICAgICB9XHJcbn1cclxuLmxhYmVyRm9vdGVyLWJvdHRvbSwgLmNvbnRhaW5lciwgLmljb25fY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDU1cHg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkgeyBcclxuICAgICAgICBwYWRkaW5nOiAwOyAgICAgIFxyXG4gICAgICAgIH1cclxufVxyXG4ucm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcbi5jb3B5cmlnaHQge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7ICAgICAgXHJcbiAgICAgICAgfVxyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnNvY2lhbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDE1cHggMTBweDtcclxufVxyXG4uY29udGVudC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE0JTsgICAgIFxyXG4gICAgICAgIH1cclxufVxyXG4ubGFiZXItZm9vdGVyLWJlZm9yZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmg1e1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHsgXHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgIFxyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjdweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDsgICAgICBcclxuICAgICAgICB9XHJcbn1cclxucHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmZhe1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4uYmNnX25vbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkgeyBcclxuICAgICAgIHdpZHRoOiA1NiU7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyN3B4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAgICAgICAgIHdpZHRoOiA0NiU7ICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzOSU7ICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/orders.service */ "./src/app/shared/services/orders.service.ts");
/* harmony import */ var src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










const _c0 = ["sidenav"];
const _c1 = function (a0) { return [a0]; };
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, "/product/" + category_r3.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, category_r3.name), " ");
} }
function HeaderComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, "/product/" + category_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, category_r4.name), " ");
} }
const _c2 = function () { return ["/home"]; };
const _c3 = function () { return ["/basket"]; };
const _c4 = function () { return ["/admin"]; };
class HeaderComponent {
    constructor(ordersService, catService) {
        this.ordersService = ordersService;
        this.catService = catService;
        this.getProducts = [];
        this.count = 0;
        this.cloudCategories = [];
        this.isVisible = false;
        this.isMenuOpen = false;
    }
    ngOnInit() {
        this.getProductsLength();
        this.basketFromLocal();
        this.getCategories();
    }
    getProductsLength() {
        this.productSubscription = this.ordersService.basket.subscribe(() => {
            this.basketFromLocal();
        });
    }
    basketFromLocal() {
        if (localStorage.length > 0 && localStorage.getItem('basket')) {
            this.getProducts = JSON.parse(localStorage.getItem('basket'));
            const count = this.getProducts.reduce((total, accum) => total + accum.count, 0);
            this.count = count;
        }
    }
    getCategories() {
        this.basketSubscription = this.catService.getFirebaseCategories().subscribe((data) => {
            this.cloudCategories = data.map((cat) => {
                const data = cat.payload.doc.data();
                const id = cat.payload.doc.id;
                data.id = id;
                return data;
            });
        });
    }
    showAlert() {
        if (this.isVisible) {
            return;
        }
        this.isVisible = true;
        setTimeout(() => this.isVisible = false, 2500);
    }
    onSidenavClick() {
        this.isMenuOpen = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 29, vars: 11, consts: [[1, "sidenav-container"], ["mat-button", "", 1, "menu-button", 3, "click"], ["autoFocus", "false", "mode", "over", 1, "sidenav", 3, "opened", "openedChange", "click"], ["sidenav", ""], [4, "ngFor", "ngForOf"], [1, "nav", "nav-pills"], [1, "nav_img"], ["routerLinkActive", "active", 1, "img_style", 3, "routerLink"], ["src", "../../../assets/keltons-srl-logo-1575557744.jpg", "alt", "", 1, "logo"], [1, "img_box"], ["src", "../../../assets/renome.png", "alt", "", 1, "lviv"], [1, "main_menu", "flex"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "icons"], [1, "nav-item", "contact"], ["href", "tel:093-1543760", 1, "btn"], [1, "fa", "fa-phone"], [1, "basket"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "basketPrice"], [1, "fa", "fa-shopping-cart"], [1, "nav-bar__counter"], [1, "icon"], [1, "fa", "fa-user"], ["mat-button", "", "href", "#", 3, "routerLink"], [1, "fa", "fa-angle-double-right"], [1, "nav-item"], ["href", "#", 1, "nav-link", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function HeaderComponent_Template_mat_sidenav_openedChange_5_listener($event) { return ctx.isMenuOpen = $event; })("click", function HeaderComponent_Template_mat_sidenav_click_5_listener() { return ctx.onSidenavClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 5, 6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 4, 6, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isMenuOpen ? "menu_open" : "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cloudCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cloudCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.count, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: ["header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  background-color: white;\n  height: 15%;\n  font-family: \"Oswald\", sans-serif;\n  z-index: 8000;\n  position: fixed;\n}\n@media screen and (max-width: 426px) {\n  header[_ngcontent-%COMP%] {\n    height: 11%;\n  }\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  header[_ngcontent-%COMP%] {\n    height: 12%;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    height: 12%;\n  }\n}\n.main_menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 1%;\n}\n@media screen and (max-width: 767px) {\n  .main_menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.logo[_ngcontent-%COMP%], .img_style[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 36%;\n  margin-top: 10%;\n}\n@media screen and (max-width: 426px) {\n  .logo[_ngcontent-%COMP%], .img_style[_ngcontent-%COMP%] {\n    margin-top: 7%;\n  }\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 20px;\n  text-align: center;\n}\n@media screen and (max-width: 426px) {\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\na[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  transition: 1s;\n}\n.nav[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-left: 3%;\n}\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  .nav[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n}\n.example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.icons[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-left: 31%;\n}\n@media screen and (max-width: 426px) {\n  .icons[_ngcontent-%COMP%] {\n    margin-left: 8%;\n    width: 48%;\n    margin-top: 1%;\n  }\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .icons[_ngcontent-%COMP%] {\n    margin-left: 5%;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  .icons[_ngcontent-%COMP%] {\n    margin-left: 23%;\n  }\n}\n.basket[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-top: 10%;\n}\n@media screen and (max-width: 426px) {\n  .basket[_ngcontent-%COMP%] {\n    margin-top: 7%;\n  }\n}\n.basketPrice[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n@media screen and (max-width: 426px) {\n  .basketPrice[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    width: 10%;\n  }\n}\n@media screen and (min-width: 427px) and (max-width: 1024px) {\n  .basketPrice[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    margin-top: 5px;\n  }\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #0f0f0f;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:hover {\n  transform: none;\n  transition: none;\n}\n.nav-item[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 20%;\n}\n.lviv[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 7%;\n  background-color: gray;\n  margin-left: 40%;\n}\n.nav_img[_ngcontent-%COMP%] {\n  width: 18%;\n}\n@media screen and (max-width: 426px) {\n  .nav_img[_ngcontent-%COMP%] {\n    width: 32%;\n    height: 45px;\n    margin-top: 17px;\n  }\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .nav_img[_ngcontent-%COMP%] {\n    margin-top: 1.5%;\n    width: 22%;\n    height: 85px;\n  }\n}\n.nav-bar__counter[_ngcontent-%COMP%] {\n  font-family: \"Oswald\", sans-serif;\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .nav-bar__counter[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.sidenav-container[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 426px) {\n  .sidenav-container[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.9);\n    min-width: 200px;\n    height: 100vh;\n  }\n  .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 14px 24px;\n    width: 100%;\n    text-align: left;\n    text-decoration: none;\n    font-size: 18px;\n    font-family: \"Oswald\", sans-serif;\n  }\n  .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: black;\n    color: white;\n    cursor: pointer;\n  }\n  .sidenav-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    padding: 18px 24px;\n  }\n  .sidenav-container[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    line-height: 2.5;\n  }\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: white;\n  overflow: unset;\n  height: 50px;\n}\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow: unset;\n}\nli[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n@media screen and (min-width: 767px) {\n  .body[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n#sidebarMenu[_ngcontent-%COMP%] {\n  height: 90%;\n  \n  position: fixed;\n  overflow: none;\n  width: 95%;\n  z-index: 100;\n  transform: translateY(-90%);\n  \n}\n.main-content-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  display: block;\n  background: #030303;\n  text-align: center;\n  padding-top: 15px;\n  border: 1px solid #4b4545;\n  color: whitesmoke;\n  text-decoration: none;\n}\n#sidebarMenu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n#sidebarMenu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n#sidebarMenu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background: #0000002e;\n  height: 50px;\n}\n.sidebarMenuInner[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n@media screen and (max-width: 426px) {\n  li[_ngcontent-%COMP%] {\n    color: white;\n  }\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ #sidebarMenu[_ngcontent-%COMP%] {\n  transform: translatey(0);\n  top: 50px;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  box-sizing: border-box;\n  display: none;\n}\n.sidebarIconToggle[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: absolute;\n  z-index: 99;\n  height: 22px;\n  width: 22px;\n  left: 10px;\n  top: 30px;\n  right: 10px;\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .sidebarIconToggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.spinner[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  box-sizing: border-box;\n  position: absolute;\n  height: 3px;\n  width: 100%;\n  background-color: black;\n}\n.horizontal[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  box-sizing: border-box;\n  position: relative;\n  float: left;\n  margin-top: 3px;\n}\n.diagonal.part-1[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all 0.3s;\n  box-sizing: border-box;\n  float: left;\n}\n.diagonal.part-2[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  box-sizing: border-box;\n  position: relative;\n  float: left;\n  margin-top: 3px;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ .sidebarIconToggle[_ngcontent-%COMP%]    > .horizontal[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  box-sizing: border-box;\n  opacity: 0;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ .sidebarIconToggle[_ngcontent-%COMP%]    > .diagonal.part-1[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  box-sizing: border-box;\n  transform: rotate(135deg);\n  margin-top: 8px;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ .sidebarIconToggle[_ngcontent-%COMP%]    > .diagonal.part-2[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  box-sizing: border-box;\n  transform: rotate(-135deg);\n  margin-top: -9px;\n}\n@media screen and (max-width: 426px) {\n  .sidebarIconToggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n@media screen and (max-width: 426px) {\n  .icon[_ngcontent-%COMP%] {\n    margin-top: 6%;\n  }\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .icon[_ngcontent-%COMP%] {\n    margin-top: 12%;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  margin-top: 13px;\n}\n.contact[_ngcontent-%COMP%] {\n  margin-left: 33%;\n}\n@media screen and (max-width: 426px) {\n  .contact[_ngcontent-%COMP%] {\n    width: 35%;\n    margin-top: -10%;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1023px) {\n  .contact[_ngcontent-%COMP%] {\n    margin-top: 7px;\n  }\n}\n.fa[_ngcontent-%COMP%] {\n  font-size: larger;\n  margin-left: 7%;\n}\n.fa-phone[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: larger;\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .fa-phone[_ngcontent-%COMP%] {\n    margin-top: 3px;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  .fa-phone[_ngcontent-%COMP%] {\n    margin-top: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBVEo7SUFVSSxXQUFBO0VBR0Y7QUFDRjtBQUZFO0VBWkY7SUFhSSxXQUFBO0VBS0Y7QUFDRjtBQUpBO0VBZkE7SUFnQkksV0FBQTtFQU9GO0FBQ0Y7QUFKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFPSjtBQU5JO0VBSko7SUFNWSxhQUFBO0VBUVY7QUFDRjtBQUxBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUUo7QUFQSTtFQUpKO0lBS08sY0FBQTtFQVVMO0FBQ0Y7QUFSQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFXSjtBQVZJO0VBSko7SUFLUSxlQUFBO0VBYU47QUFDRjtBQVhBO0VBR0sscUJBQUE7RUFDQSxjQUFBO0FBY0w7QUFaQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBZUo7QUFkSTtFQUhKO0lBSVEsY0FBQTtFQWlCTjtBQUNGO0FBZkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFrQko7QUFoQkE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQW1CSjtBQWxCSTtFQU5KO0lBT1EsZUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VBcUJOO0FBQ0Y7QUFwQk07RUFYTjtJQVlJLGVBQUE7RUF1QkY7QUFDRjtBQXRCSTtFQWRKO0lBZVEsZ0JBQUE7RUF5Qk47QUFDRjtBQXRCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBeUJKO0FBeEJJO0VBSEo7SUFJUSxjQUFBO0VBMkJOO0FBQ0Y7QUF6QkE7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SSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQTBEUjtBQXhESTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUEyRFI7QUF6REk7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQTREUjtBQXhESztFQUNLO0lBQ0ksY0FBQTtFQTJEWjtBQUNGO0FBeERBO0VBQ0ksZUFBQTtBQTBESjtBQXpESTtFQUZKO0lBR1EsY0FBQTtFQTRETjtBQUNGO0FBM0RNO0VBTE47SUFNUSxlQUFBO0VBOEROO0FBQ0Y7QUE1REE7RUFFSSxnQkFBQTtBQThESjtBQTVEQTtFQUNJLGdCQUFBO0FBK0RKO0FBN0RJO0VBSEo7SUFJUSxVQUFBO0lBRUEsZ0JBQUE7RUErRE47QUFDRjtBQTlETTtFQVJOO0lBU1EsZUFBQTtFQWlFTjtBQUNGO0FBL0RBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBa0VKO0FBOURBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQWdFSjtBQS9ESTtFQUhKO0lBSVEsZUFBQTtFQWtFTjtBQUNGO0FBakVJO0VBTko7SUFPUSxlQUFBO0VBb0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIHotaW5kZXg6IDgwMDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgaGVpZ2h0OiAxMSU7ICAgXHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyN3B4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICBoZWlnaHQ6IDEyJTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyBcclxuICAgIGhlaWdodDogMTIlO1xyXG59XHJcblxyXG59XHJcbi5tYWluX21lbnV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGxheTpub25lXHJcbiAgICAgICAgIFxyXG4gICAgICB9XHJcbn1cclxuLmxvZ28sIC5pbWdfc3R5bGV7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAzNiU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICAgIH1cclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDsgXHJcbiAgICAgIH1cclxufVxyXG5hOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgdHJhbnNpdGlvbjogMXM7ICAgIFxyXG59XHJcbi5uYXZ7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHsgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICB9XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbi5pY29uc3tcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMxJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTsgICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjMlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFza2V0e1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICAgIH1cclxufVxyXG4uYmFza2V0UHJpY2V7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxMCU7IFxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyN3B4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7IFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XHJcbn1cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluazpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbn1cclxuLm5hdi1pdGVte1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuLmx2aXZ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiA3JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG59XHJcbi5uYXZfaW1ne1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCl7XHJcbiAgICB3aWR0aDogMzIlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICB3aWR0aDogMjIlO1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG59XHJcbn1cclxuLm5hdi1iYXJfX2NvdW50ZXJ7XHJcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyN3B4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICBmb250LXNpemU6IDE0cHg7ICAgIH1cclxufVxyXG5cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCl7XHJcbiAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5zaWRlbmF2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAyNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi41O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxufVxyXG4ubWF0LWRyYXdlci1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiB1bnNldDtcclxufVxyXG5saXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmUgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAjc2lkZWJhck1lbnUge1xyXG4gICAgICAgIGhlaWdodDogOTAlOyAvKmNoYW5nZSBoZXJlIHJlbGF0ZWQgeW91ciBtZW51IGhlaWdodCovXHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIG92ZXJmbG93OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOTAlKTsgLypjaGFuZ2UgaGVyZSByZWxhdGVkIHlvdXIgbWVudSBoZWlnaHQqL1xyXG4gICAgfVxyXG4gICAgLm1haW4tY29udGVudC13cmFwcGVyIGF7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMzAzMDM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YjQ1NDU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXJNZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhck1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICB9XHJcbiAgICAjc2lkZWJhck1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXJNZW51SW5uZXJ7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTApO1xyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHsgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAjc2lkZWJhck1lbnUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuICAgICAgICB0b3A6NTBweCAvKmNoYW5nZSBoZXJlIHJlbGF0ZWQgeW91ciB0b3AgbWVudSBoZWlnaHQqL1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zaWRlYmFySWNvblRvZ2dsZSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBsZWZ0OjEwcHg7XHJcbiAgICAgICAgdG9wOjMwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBcclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyAgICBcclxuICAgICAgICAgICAgZGlzcGxheTpub25lICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNwaW5uZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLmhvcml6b250YWwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIH1cclxuICAgIC5kaWFnb25hbC5wYXJ0LTEge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmRpYWdvbmFsLnBhcnQtMiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB+IC5zaWRlYmFySWNvblRvZ2dsZSA+IC5ob3Jpem9udGFsIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkIH4gLnNpZGViYXJJY29uVG9nZ2xlID4gLmRpYWdvbmFsLnBhcnQtMSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiAuc2lkZWJhckljb25Ub2dnbGUgPiAuZGlhZ29uYWwucGFydC0yIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC05cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgICAuc2lkZWJhckljb25Ub2dnbGV7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpibG9ja1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4uaWNvbntcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMiU7XHJcbiAgICB9XHJcbn1cclxuLmJ0bntcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAxNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG4uY29udGFjdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMyU7XHJcbiAgICAvLyB3aWR0aDogMyU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7IFxyXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAxMyU7ICBcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTAlO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7IFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDdweDsgICAgIFxyXG4gICAgICAgIH1cclxufVxyXG4uZmF7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyN3B4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICB9XHJcbn1cclxuLmZhLXBob25le1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyBcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"] }, { type: src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav']
        }] }); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LoginComponent_form_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0430\u0448\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.signUp(ctx_r3.signUpForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_3_div_5_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0423\u0432\u0456\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.signUpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.controls["email"].invalid && ctx_r0.signUpForm.controls["email"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.signUpForm.valid);
} }
function LoginComponent_form_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0430\u0448\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.login(ctx_r7.loginForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_4_div_5_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0423\u0432\u0456\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.controls["email"].invalid && ctx_r1.loginForm.controls["email"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.loginForm.valid);
} }
class LoginComponent {
    constructor(auth) {
        this.auth = auth;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9_]+@[a-z]{2,6}.[a-z]{2,4}')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9_]+@[a-z]{2,6}.[a-z]{2,4}')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.isSignUpActive = true;
    }
    ngOnInit() {
    }
    signUp(formData) {
        console.log(formData);
        this.auth.signUp(formData['email'], formData['password']);
    }
    login(formData) {
        console.log(formData);
        this.auth.login(formData['email'], formData['password']);
    }
    check() {
        this.isSignUpActive = !this.isSignUpActive;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-7"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "signUpEmail"], ["id", "signUpEmail", "formControlName", "email", "name", "email", "type", "email", "placeholder", "\u0412\u0432\u0435\u0434\u0456\u0442\u044C  \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043A\u0443", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "signUpPassword"], ["id", "signUpPassword", "formControlName", "password", "name", "password", "type", "password", "placeholder", "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", 1, "form-control"], ["type", "submit", 1, "btn", "btn-block", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-block", "btn-info", 3, "click"], [1, "alert", "alert-danger"], ["for", "loginEmail"], ["id", "loginEmail", "formControlName", "email", "name", "email", "type", "email", "placeholder", "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443", 1, "form-control"], ["for", "loginPassword"], ["id", "loginPassword", "formControlName", "password", "name", "password", "type", "password", "placeholder", "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", 1, "form-control"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_3_Template, 14, 3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_form_4_Template, 14, 3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSignUpActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 10%;\n  width: 100%;\n}\n@media screen and (max-width: 426px) {\n  .container[_ngcontent-%COMP%] {\n    padding-top: 30%;\n  }\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding-top: 18%;\n  }\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.col-3[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: black;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBSEo7SUFJUSxnQkFBQTtFQUdOO0FBQ0Y7QUFGTTtFQU5OO0lBT1EsZ0JBQUE7RUFLTjtBQUNGO0FBSEE7RUFDSSxXQUFBO0FBTUo7QUFKQTtFQUNJLFdBQUE7QUFPSjtBQUxBO0VBQ0ksdUJBQUE7QUFRSjtBQU5BO0VBQ0ksdUJBQUE7QUFTSjtBQVBBO0VBQ0ksZ0JBQUE7QUFVSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwJTsgXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxOCU7IFxyXG4gICAgICB9XHJcbn1cclxuZm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb2wtM3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG4taW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4uYnRuLXN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/basket/basket.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/basket/basket.component.ts ***!
  \**************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_models_orders_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/orders.models */ "./src/app/shared/models/orders.models.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/orders.service */ "./src/app/shared/services/orders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/__ivy_ngcc__/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__);















function BasketComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u043E\u0448\u0438\u043A \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketComponent_div_3_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_3_div_17_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const o_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.deleteProduct(o_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_3_div_17_Template_span_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const o_r11 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.productCount(o_r11, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_3_div_17_Template_span_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const o_r11 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.productCount(o_r11, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + o_r11.image + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r11.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", o_r11.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r11.count * o_r11.price);
} }
function BasketComponent_div_3_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0442\u0430 \u0456\u043C\u044F");
} }
function BasketComponent_div_3_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u0443");
} }
function BasketComponent_div_3_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D");
} }
function BasketComponent_div_3_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");
} }
function BasketComponent_div_3_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u043E\u0448\u0438\u043A \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketComponent_div_3_div_82_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_3_div_82_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const o_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.deleteProduct(o_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0426\u0456\u043D\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_3_div_82_div_1_Template_span_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const o_r23 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.productCount(o_r23, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_3_div_82_div_1_Template_span_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const o_r23 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.productCount(o_r23, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + o_r23.image + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r23.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", o_r23.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r23.count * o_r23.price);
} }
function BasketComponent_div_3_div_82_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0442\u0430 \u0456\u043C\u044F");
} }
function BasketComponent_div_3_div_82_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u0443");
} }
function BasketComponent_div_3_div_82_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D");
} }
function BasketComponent_div_3_div_82_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");
} }
const _c0 = function (a0) { return { mask: a0 }; };
function BasketComponent_div_3_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BasketComponent_div_3_div_82_div_1_Template, 32, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-vertical-stepper", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-step", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BasketComponent_div_3_div_82_ng_template_20_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0442\u0430 \u0456\u043C'\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketComponent_div_3_div_82_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.order.userName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0414\u0430\u043B\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-step", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BasketComponent_div_3_div_82_ng_template_30_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0410\u0434\u0440\u0435\u0441\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketComponent_div_3_div_82_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.order.userAdress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0414\u0430\u043B\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-step", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BasketComponent_div_3_div_82_ng_template_42_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketComponent_div_3_div_82_Template_input_ngModelChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.order.userPhone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0414\u0430\u043B\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, BasketComponent_div_3_div_82_ng_template_53_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_3_div_82_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r17.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_3_div_82_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.addOrder(_r18); })("click", function BasketComponent_div_3_div_82_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.showAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.localProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r10.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r10.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.order.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r10.secondFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r10.secondFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.order.userAdress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r10.secondFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r10.secondFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r10.phoneMask))("ngModel", ctx_r10.order.userPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r18.invalid);
} }
function BasketComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0422\u043E\u0432\u0430\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0426\u0456\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BasketComponent_div_3_div_17_Template, 30, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-horizontal-stepper", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-step", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BasketComponent_div_3_ng_template_36_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0442\u0430 \u0456\u043C'\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketComponent_div_3_Template_input_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.order.userName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0414\u0430\u043B\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-step", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, BasketComponent_div_3_ng_template_46_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0410\u0434\u0440\u0435\u0441\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketComponent_div_3_Template_input_ngModelChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.order.userAdress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0414\u0430\u043B\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-step", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, BasketComponent_div_3_ng_template_58_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketComponent_div_3_Template_input_ngModelChange_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.order.userPhone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u0414\u0430\u043B\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, BasketComponent_div_3_ng_template_69_Template, 1, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_3_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r3.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_3_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.addOrder(_r4); })("click", function BasketComponent_div_3_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.showAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0434\u0430\u043D\u043E \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, BasketComponent_div_3_div_81_Template, 6, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, BasketComponent_div_3_div_82_Template, 59, 15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.localProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r1.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r1.secondFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.secondFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.userAdress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r1.thirdFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.thirdFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx_r1.phoneMask))("ngModel", ctx_r1.order.userPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r4.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx_r1.isVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.localProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.localProducts.length > 0);
} }
class BasketComponent {
    constructor(orderService, router, _formBuilder) {
        this.orderService = orderService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.order = {
            userName: '',
            userPhone: '',
            userAdress: '',
            userComment: ''
        };
        this.localProducts = [];
        this.subscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.isLinear = false;
        this.isVisible = false;
        this.phoneMask = [
            '(',
            /[0]/,
            /\d/,
            /\d/,
            ')',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
        ];
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.getBasket();
    }
    ngOnDestroy() {
        this.subscribe.unsubscribe();
    }
    getBasket() {
        if (localStorage.length > 0 && localStorage.getItem('basket')) {
            this.localProducts = JSON.parse(localStorage.getItem('basket'));
        }
        this.getTotalPrice();
    }
    productCount(product, status) {
        if (status) {
            product.count++;
        }
        else {
            if (product.count > 1) {
                product.count--;
            }
        }
        this.getTotalPrice();
        this.updateLocalProducts();
        this.orderService.basket.next(this.order);
    }
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    getTotalPrice() {
        this.totalPrice = this.localProducts.reduce((total, elem) => {
            return total + elem.count * elem.price;
        }, 0);
    }
    updateLocalProducts() {
        localStorage.setItem('basket', JSON.stringify(this.localProducts));
        this.orderService.basket.next(this.localProducts);
    }
    deleteProduct(product) {
        const index = this.localProducts.findIndex((prod) => prod.id === product.id);
        this.localProducts.splice(index, 1);
        this.updateLocalProducts();
        this.getBasket();
    }
    addOrder(form) {
        const date = Date.now();
        const order = new _shared_models_orders_models__WEBPACK_IMPORTED_MODULE_2__["Order"](this.uuid(), this.order.userName, this.order.userPhone, this.order.userAdress, this.localProducts, this.totalPrice.toString(), date);
        if (this.order.userComment !== null) {
            order.userComment = this.order.userComment;
        }
        this.localProducts = [];
        localStorage.setItem('basket', JSON.stringify(this.localProducts));
        this.orderService.basket.next(this.localProducts);
        this.orderService.addFirebaseOrder(order).then(() => {
            this.router.navigateByUrl('/');
            this.localProducts = [];
            this.updateLocalProducts();
        });
    }
    showAlert() {
        if (this.isVisible) {
            return;
        }
        this.isVisible = true;
        setTimeout(() => this.isVisible = false, 2500);
    }
}
BasketComponent.ɵfac = function BasketComponent_Factory(t) { return new (t || BasketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
BasketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasketComponent, selectors: [["app-basket"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["STEPPER_GLOBAL_OPTIONS"], useValue: { showError: true },
            }
        ])], decls: 4, vars: 2, consts: [[1, "container"], [1, "row"], ["class", "col-lg-12", 4, "ngIf"], ["class", "col-lg-12 mt-15", 4, "ngIf"], [1, "col-lg-12"], [1, "sectionTitle", "fadeInTop", "d-flex", "flex-column", "justify-content-center", "align-items-center", 2, "min-height", "35vh"], ["href", "/home", 2, "color", "#c80000"], [1, "col-lg-12", "mt-15"], [1, "col-lg-12", "col-lg-push-6", "col-my-lt-12"], [1, "payItems", "smallSlideLeft", "animationDelay-1"], [1, "table"], [1, "tr", "thead"], [1, "tr"], [1, "td"], [1, "td", "price"], [1, "tr", "tbody"], ["class", "tr productOrder", 4, "ngFor", "ngForOf"], [1, "tr", "tfoot"], [1, "fullPrice", "cart-total"], [1, "totalFullPrice", 2, "display", "block"], [1, "orders"], [1, "style"], ["stepper", ""], ["errorMessage", "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0456\u043C'\u044F.", 3, "stepControl"], [3, "formGroup"], ["orderForm", "ngForm"], ["matStepLabel", ""], ["matInput", "", "formControlName", "firstCtrl", "minlength", "3", "maxlength", "17", "required", "", "pattern", "[A-Z\u0410-\u042F][a-z\u0430-\u044F]*?\\s+[A-Z\u0410-\u042F][a-z\u0430-\u044F]*?", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matStepperNext", ""], ["errorMessage", "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0430.", 3, "stepControl"], ["placeholder", "\u0428\u0435\u0432\u0447\u0435\u043D\u043A\u0430 12/32", "matInput", "", "formControlName", "secondCtrl", "required", "", "pattern", "[A-Z\u0410-\u042F][a-z\u0430-\u044F]*?\\s\\d+(/\\d{1,3})?", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matStepperPrevious", ""], ["errorMessage", "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.", 3, "stepControl"], ["matInput", "", "formControlName", "thirdCtrl", "required", "", 3, "textMask", "ngModel", "ngModelChange"], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "disabled", "click"], [1, "alert"], [1, "align"], [1, "ic"], [1, "basket_text"], [1, "phone_container"], [1, "tr", "productOrder"], [1, "delateProduct", "remove-cart-product-popup", "open-popup", 3, "click"], [1, "smallProduct"], [1, "imgWrapper"], [1, "smallProductInfo"], [1, "h6", "as"], [1, "singleItemPrice"], [1, "productCountWrapper"], [1, "productCount", "lessProduct", 3, "click"], ["maxlength", "3", "type", "text", 1, "product-qty", 3, "value"], [1, "productCount", "moreProduct", "update-cart-product", 3, "click"], [1, "itemPrice", "productPrice"], [1, "tableMobTitle"], [1, "totalFullPrice", 2, "display", "flex", "flex-direction", "row", "margin-left", "34px"], [1, "priceT"], [1, "red"], ["matInput", "", "formControlName", "firstCtrl", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "formControlName", "secondCtrl", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "formControlName", "secondCtrl", "required", "", 3, "textMask", "ngModel", "ngModelChange"], [1, "itemPrice", "productPrice", "flex"]], template: function BasketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BasketComponent_div_2_Template, 6, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BasketComponent_div_3_Template, 83, 19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localProducts.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localProducts.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperPrevious"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["MaskedInputDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatVerticalStepper"]], styles: [".mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%]{font:400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.05em;margin:0 0 56px}.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.02em;margin:0 0 64px}.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.005em;margin:0 0 64px}.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-button-toggle[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-card[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]{font-size:14px}.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%]{font-size:18px}.mat-table[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(0.75);width:133.3333333333%}.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(0.75);width:133.3333433333%}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-0.84375em;padding-top:.84375em}.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);-ms-transform:translateY(-1.28125em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);-ms-transform:translateY(-1.28124em) scale(0.75);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);-ms-transform:translateY(-1.28123em) scale(0.75);width:133.3333533333%}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(0.75)}}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-0.5em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59375em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59374em) scale(0.75);width:133.3333433333%}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0 1em 0}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-0.25em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(0.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(0.75);width:133.3333433333%}.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]{font-size:14px}.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}input.mat-input-element[_ngcontent-%COMP%]{margin-top:-0.0625em}.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:400}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px}.mat-radio-button[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-select[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}.mat-slide-toggle-content[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:normal}.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-tab-group[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0}.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-list-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}.mat-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:16px}.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px}.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(0)}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast: active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}@keyframes cdk-text-field-autofill-start{}@keyframes cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}textarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}.mat-focus-indicator[_ngcontent-%COMP%]{position:relative}.mat-mdc-focus-indicator[_ngcontent-%COMP%]{position:relative}.mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}.mat-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#3f51b5}.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#ff4081}.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox[_ngcontent-%COMP%]::after{color:#fafafa}.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{color:#b0b0b0}.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#3f51b5}.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#ff4081}.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{background:#b0b0b0}.mat-app-background[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-elevation-z0[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z1[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z2[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z3[_ngcontent-%COMP%]{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z4[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z5[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z6[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-elevation-z7[_ngcontent-%COMP%]{box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mat-elevation-z9[_ngcontent-%COMP%]{box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)}.mat-elevation-z10[_ngcontent-%COMP%]{box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)}.mat-elevation-z11[_ngcontent-%COMP%]{box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)}.mat-elevation-z12[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z13[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z14[_ngcontent-%COMP%]{box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)}.mat-elevation-z15[_ngcontent-%COMP%]{box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z16[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z17[_ngcontent-%COMP%]{box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)}.mat-elevation-z18[_ngcontent-%COMP%]{box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)}.mat-elevation-z19[_ngcontent-%COMP%]{box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)}.mat-elevation-z20[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z21[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z22[_ngcontent-%COMP%]{box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)}.mat-elevation-z23[_ngcontent-%COMP%]{box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)}.mat-elevation-z24[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)}.mat-theme-loaded-marker[_ngcontent-%COMP%]{display:none}.mat-autocomplete-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#3f51b5}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{outline:solid 1px;border-radius:0}.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#ff4081;color:#fff}.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#f44336}.mat-badge[_ngcontent-%COMP%]{position:relative}.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{display:none}.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content[_ngcontent-%COMP%]{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%]{transition:none}.mat-badge-content.mat-badge-active[_ngcontent-%COMP%]{transform:none}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-8px}.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-8px}.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-16px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-16px}.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-16px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-8px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-8px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-8px}.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-11px}.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-11px}.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-22px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-22px}.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-22px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-11px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-11px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-11px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-14px}.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-14px}.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-28px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-28px}.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-28px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-14px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-14px}[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-14px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{color:inherit;background:transparent}.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]{color:#3f51b5}.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#ff4081}.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#f44336}.mat-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:transparent}.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{opacity:.1;background-color:currentColor}.mat-button-focus-overlay[_ngcontent-%COMP%]{background:#000}.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled){border-color:rgba(0,0,0,.12)}.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background-color:#fff}.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{color:#fff}.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081}.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-raised-button[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mat-raised-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mat-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{box-shadow:none}.mat-button-toggle[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:#000}.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#bdbdbd}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%]{line-height:48px}.mat-card[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-card-subtitle[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-checkbox-frame[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark[_ngcontent-%COMP%]{fill:#fafafa}.mat-checkbox-checkmark-path[_ngcontent-%COMP%]{stroke:#fafafa !important}.mat-checkbox-mixedmark[_ngcontent-%COMP%]{background-color:#fafafa}.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#ff4081}.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#b0b0b0}.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%]{border-color:#b0b0b0}.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%]{background:#3f51b5}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%]{background:#ff4081}.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%]{background:#f44336}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%]{opacity:.4}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}.mat-table[_ngcontent-%COMP%]{background:#fff}.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%]{background:inherit}mat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-calendar-arrow[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-calendar-table-header[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content[_ngcontent-%COMP%], .mat-date-range-input-separator[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:rgba(0,0,0,.38)}.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-date-range-input-separator[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:rgba(0,0,0,.04)}.mat-calendar-body-in-preview[_ngcontent-%COMP%]{color:rgba(0,0,0,.24)}.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:rgba(0,0,0,.18)}.mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(63,81,181,.2)}.mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}.mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}.mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}.mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}.mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(255,64,129,.2)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(255, 64, 129, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(255, 64, 129, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.4)}.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(244,67,54,.2)}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mat-datepicker-toggle-active[_ngcontent-%COMP%]{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-date-range-input-inner[disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-dialog-container[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical[_ngcontent-%COMP%]{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-action-row[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]){background:rgba(0,0,0,.04)}@media(hover: none){.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#fff}}.mat-expansion-panel-header-title[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{color:inherit}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:48px}.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]{height:64px}.mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#3f51b5}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#3f51b5}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#ff4081}.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#f44336}.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#f44336}.mat-error[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:transparent}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.06)}.mat-icon.mat-primary[_ngcontent-%COMP%]{color:#3f51b5}.mat-icon.mat-accent[_ngcontent-%COMP%]{color:#ff4081}.mat-icon.mat-warn[_ngcontent-%COMP%]{color:#f44336}.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}.mat-input-element[_ngcontent-%COMP%]{caret-color:#3f51b5}.mat-input-element[_ngcontent-%COMP%]::placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-form-field.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#ff4081}.mat-form-field.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-list-item-disabled[_ngcontent-%COMP%]{background-color:#eee}.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.04)}.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.12)}.mat-menu-panel[_ngcontent-%COMP%]{background:#fff}.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-menu-item[_ngcontent-%COMP%]{background:transparent;color:rgba(0,0,0,.87)}.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator[_ngcontent-%COMP%]{background:#fff}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-paginator-container[_ngcontent-%COMP%]{min-height:56px}.mat-progress-bar-background[_ngcontent-%COMP%]{fill:#c5cae9}.mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#c5cae9}.mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#3f51b5}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ff80ab}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ff80ab}.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#ff4081}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffcdd2}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffcdd2}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#f44336}.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#3f51b5}.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#ff4081}.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f44336}.mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#3f51b5}.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#ff4081}.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#f44336}.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#f44336}.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-select-placeholder[_ngcontent-%COMP%]{color:rgba(0,0,0,.42)}.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-select-panel[_ngcontent-%COMP%]{background:#fff}.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#3f51b5}.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#ff4081}.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-drawer-container[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push[_ngcontent-%COMP%]{background-color:#fff}.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side){box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}.mat-drawer-side[_ngcontent-%COMP%]{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#ff4081}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.54)}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(63,81,181,.54)}.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#f44336}.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}.mat-slide-toggle-thumb[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);background-color:#fafafa}.mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-primary[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(63,81,181,.2)}.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#ff4081}.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-accent[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.2)}.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#f44336}.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}.mat-warn[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.2)}.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);background-image:-moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.04)}@media(hover: none){.mat-step-header[_ngcontent-%COMP%]:hover{background:none}}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%]{background-color:transparent;color:#f44336}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%]{color:#f44336}.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{background-color:#fff}.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header[_ngcontent-%COMP%]{height:72px}.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%], .mat-vertical-stepper-header[_ngcontent-%COMP%]{padding:24px 24px}.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{top:-16px;bottom:-16px}.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::before{top:36px}.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]{top:36px}.mat-sort-header-arrow[_ngcontent-%COMP%]{color:#757575}.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#3f51b5}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#ff4081}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#f44336}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}.mat-toolbar[_ngcontent-%COMP%]{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent[_ngcontent-%COMP%]{background:#ff4081;color:#fff}.mat-toolbar.mat-warn[_ngcontent-%COMP%]{background:#f44336;color:#fff}.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:currentColor}.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:inherit}.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:currentColor}.mat-toolbar-multiple-rows[_ngcontent-%COMP%]{min-height:64px}.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows[_ngcontent-%COMP%]{min-height:56px}.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:56px}}.mat-tooltip[_ngcontent-%COMP%]{background:rgba(97,97,97,.9)}.mat-tree[_ngcontent-%COMP%]{background:#fff}.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}.mat-tree-node[_ngcontent-%COMP%]{min-height:48px}.mat-snack-bar-container[_ngcontent-%COMP%]{color:rgba(255,255,255,.7);background:#323232;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#ff4081}.container[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}.phone_container[_ngcontent-%COMP%] {\n  display: none;\n}@media screen and (max-width: 426px) {\n  .phone_container[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}@media screen and (min-width: 427px) and (max-width: 768px) {\n  .row[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n}@media screen and (max-width: 426px) {\n  .row[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n}.payItems[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  padding: 0 20px;\n}@media screen and (max-width: 426px) {\n  .payItems[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: \"Oswald\", sans-serif;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 20px;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 24px 15px;\n  width: 4.3333%;\n  padding-right: 55px;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:first-child {\n  padding: 0;\n  width: 4%;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: right;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 600;\n  padding: 30px 20px;\n  display: inline-block;\n  vertical-align: middle;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #c80000;\n}@media screen and (max-width: 426px) {\n  .tfoot[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}@media screen and (max-width: 426px) {\n  .singleItemPrice[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-size: large;\n    margin-top: 20px;\n    margin-bottom: 15px;\n    margin-left: 10px;\n  }\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  height: 120px;\n  width: 5%;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:first-child {\n  padding: 0;\n  width: 1%;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 0;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e6e6e6;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 45% !important;\n  padding-left: 0;\n}.payItems[_ngcontent-%COMP%]   .singleItemPrice[_ngcontent-%COMP%] {\n  color: #000;\n}.payItems[_ngcontent-%COMP%]   .singleItemPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}.payItems[_ngcontent-%COMP%]   .itemPrice[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #000;\n}.payItems[_ngcontent-%COMP%]   .itemPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}.smallProduct[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 13px;\n  line-height: 18px;\n  font-family: \"Oswald\", sans-serif;\n}@media screen and (max-width: 426px) {\n  .smallProduct[_ngcontent-%COMP%] {\n    width: 310px;\n    height: 285px;\n  }\n}.smallProduct[_ngcontent-%COMP%]   .as[_ngcontent-%COMP%] {\n  font-size: 16px;\n}.smallProduct[_ngcontent-%COMP%]   .as[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 0.25s linear;\n}.smallProduct[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 90px;\n  height: 90px;\n  margin-top: -28px;\n  margin-left: 5px;\n  display: block;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  transition: opacity 0.25s linear;\n}@media screen and (max-width: 426px) {\n  .smallProduct[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%] {\n    width: 265px;\n    height: 210px;\n    margin-top: 10px;\n  }\n}.smallProduct[_ngcontent-%COMP%] {\n  padding-left: 110px;\n}@media screen and (max-width: 426px) {\n  .smallProduct[_ngcontent-%COMP%] {\n    padding-left: 5px;\n  }\n}.smallProductInfo[_ngcontent-%COMP%] {\n  padding-left: 110px;\n}@media screen and (max-width: 426px) {\n  .smallProductInfo[_ngcontent-%COMP%] {\n    padding-top: 275px;\n    padding-left: 5px;\n  }\n}.delateProduct[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  cursor: pointer;\n}@media screen and (max-width: 426px) {\n  .delateProduct[_ngcontent-%COMP%] {\n    margin-top: 110px;\n  }\n}.delateProduct[_ngcontent-%COMP%]:before, .delateProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 15px;\n  height: 2px;\n  margin-left: -7px;\n  background: #c80000;\n  transform: rotate(-45deg);\n  transition: background 0.25s linear;\n  content: \"\";\n}@media screen and (max-width: 426px) {\n  .delateProduct[_ngcontent-%COMP%]:before, .delateProduct[_ngcontent-%COMP%]:after {\n    left: 2%;\n    width: 23px;\n    height: 3px;\n  }\n}.delateProduct[_ngcontent-%COMP%]:after {\n  transform: rotate(45deg);\n}.table[_ngcontent-%COMP%] {\n  display: table;\n}@media screen and (max-width: 426px) {\n  .table[_ngcontent-%COMP%] {\n    display: none;\n  }\n}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  display: table-row;\n}.table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  display: table-cell;\n}.tableMobTitle[_ngcontent-%COMP%] {\n  display: none;\n}.btnWrapp[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-left: 40%;\n  background-color: black;\n  height: 7%;\n  margin-top: 5%;\n  cursor: pointer;\n  border: 1px solid #000;\n  padding: 12px 10px;\n  font-size: 10px;\n  font-family: \"Oswald\", sans-serif;\n  color: #ffffff;\n  border: 1px solid #494747;\n  letter-spacing: 2px;\n  text-decoration: none;\n  position: relative;\n  transition: color 1.5s ease;\n  z-index: 2;\n  background-color: black(36, 34, 34);\n  text-transform: uppercase;\n  font-weight: 300;\n  outline: none;\n}.btnWrapp[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: white;\n  width: 0;\n  transition: all 1.5s ease;\n  z-index: -2;\n}.btnWrapp[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  left: 0;\n  right: auto;\n}.btnWrapp[_ngcontent-%COMP%]:hover {\n  color: black(36, 34, 34);\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #a8a6a6;\n}.productCountWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 24px;\n}@media screen and (max-width: 426px) {\n  .productCountWrapper[_ngcontent-%COMP%] {\n    margin-left: 8px;\n  }\n}.flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}.priceT[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-family: \"Oswald\", sans-serif;\n  font-size: large;\n  margin-top: 20px;\n  margin-left: 2%;\n}.red[_ngcontent-%COMP%] {\n  color: #c80000;\n}.productCount[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  transform: translateY(-50%);\n}.productCount.lessProduct[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}.productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}.productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 38px;\n  font-weight: 500;\n  padding: 0 6px;\n  font-family: \"Oswald\", sans-serif;\n  border: 1px solid #eaeaea;\n}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  font-weight: 400;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  background: none;\n  border: none;\n  margin: 0;\n  width: 100%;\n  font-family: \"Oswald\", sans-serif;\n}.productCount.moreProduct[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}.productCount.moreProduct[_ngcontent-%COMP%]:before, .productCount.moreProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}.productCount.moreProduct[_ngcontent-%COMP%]:after {\n  transform: rotate(-90deg);\n}.productCount.moreProduct[_ngcontent-%COMP%]:before, .productCount.moreProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}.mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}.mat-step-icon-state-error[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n}.mat-stepper-vertical[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}@media screen and (max-width: 426px) {\n  .orders[_ngcontent-%COMP%] {\n    display: none;\n  }\n}button[_ngcontent-%COMP%] {\n  background-color: none;\n  border: none;\n}.style[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}@media screen and (max-width: 426px) {\n  .style[_ngcontent-%COMP%] {\n    margin-top: 20%;\n  }\n}.price[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}.productOrder[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzIiwic3JjL2FwcC9wYWdlcy9iYXNrZXQvYmFza2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQixlQUFlLENBQUMsY0FBYyxDQUFDLGdEQUFnRCxDQUFDLG9DQUFvQyxhQUFhLENBQUMsb0NBQW9DLGNBQWMsQ0FBQyx5Q0FBeUMsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLHNDQUFzQyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsNkNBQTZDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyw2Q0FBNkMsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLDJCQUEyQixvRUFBb0UsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLG9FQUFvRSxDQUFDLGVBQWUsQ0FBQyw2QkFBNkIsdURBQXVELENBQUMscUJBQXFCLENBQUMsc0NBQXNDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLDRDQUE0QyxlQUFlLENBQUMsd0JBQXdCLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLDhDQUE4Qyx5REFBeUQsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsOENBQThDLHVEQUF1RCxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyw4Q0FBOEMsdURBQXVELENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLDhDQUE4Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLDRHQUE0RyxnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLG1CQUFtQixnREFBZ0QsQ0FBQyxVQUFVLGdEQUFnRCxDQUFDLGdCQUFnQixjQUFjLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxjQUFjLENBQUMscUNBQXFDLGNBQWMsQ0FBQyxj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YkE7RUFDRSxjQUFBO0FBZ0JGLENBZkU7RUFGRjtJQUdJLGVBQUE7RUFrQkY7QUFDRixDQWZBO0VBQ0UsZ0JBQUE7QUFrQkYsQ0FoQkE7RUFDRSxhQUFBO0FBbUJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFza2V0L2Jhc2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYmFkZ2UtY29udGVudHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjlweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6MjRweH0ubWF0LWgxLC5tYXQtaGVhZGxpbmUsLm1hdC10eXBvZ3JhcGh5IGgxe2ZvbnQ6NDAwIDI0cHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDIsLm1hdC10aXRsZSwubWF0LXR5cG9ncmFwaHkgaDJ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMywubWF0LXN1YmhlYWRpbmctMiwubWF0LXR5cG9ncmFwaHkgaDN7Zm9udDo0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNCwubWF0LXN1YmhlYWRpbmctMSwubWF0LXR5cG9ncmFwaHkgaDR7Zm9udDo0MDAgMTVweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNSwubWF0LXR5cG9ncmFwaHkgaDV7Zm9udDo0MDAgY2FsYygxNHB4ICogMC44MykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1oNiwubWF0LXR5cG9ncmFwaHkgaDZ7Zm9udDo0MDAgY2FsYygxNHB4ICogMC42NykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1ib2R5LXN0cm9uZywubWF0LWJvZHktMntmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtYm9keSwubWF0LWJvZHktMSwubWF0LXR5cG9ncmFwaHl7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJvZHkgcCwubWF0LWJvZHktMSBwLC5tYXQtdHlwb2dyYXBoeSBwe21hcmdpbjowIDAgMTJweH0ubWF0LXNtYWxsLC5tYXQtY2FwdGlvbntmb250OjQwMCAxMnB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZGlzcGxheS00LC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNHtmb250OjMwMCAxMTJweC8xMTJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotMC4wNWVtO21hcmdpbjowIDAgNTZweH0ubWF0LWRpc3BsYXktMywubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTN7Zm9udDo0MDAgNTZweC81NnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0wLjAyZW07bWFyZ2luOjAgMCA2NHB4fS5tYXQtZGlzcGxheS0yLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMntmb250OjQwMCA0NXB4LzQ4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LTAuMDA1ZW07bWFyZ2luOjAgMCA2NHB4fS5tYXQtZGlzcGxheS0xLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtmb250OjQwMCAzNHB4LzQwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgNjRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJ1dHRvbiwubWF0LXJhaXNlZC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9uLC5tYXQtZmxhdC1idXR0b24sLm1hdC1mYWIsLm1hdC1taW5pLWZhYntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1idXR0b24tdG9nZ2xle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2FyZHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjI0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyMHB4fS5tYXQtY2FyZC1zdWJ0aXRsZSwubWF0LWNhcmQtY29udGVudHtmb250LXNpemU6MTRweH0ubWF0LWNoZWNrYm94e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWx7bGluZS1oZWlnaHQ6MjRweH0ubWF0LWNoaXB7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2hpcCAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbiwubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbntmb250LXNpemU6MThweH0ubWF0LXRhYmxle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtaGVhZGVyLWNlbGx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2FsZW5kYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4fS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCwubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b257Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoe2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWRpYWxvZy10aXRsZXtmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Lm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudHtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS4xMjU7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbntmb250LXNpemU6MTUwJTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9ue2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257aGVpZ2h0OjEuMTI1ZW07bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjVlbSAwO2JvcmRlci10b3A6Ljg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzMzMzMzMzJX0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye3RvcDotMC44NDM3NWVtO3BhZGRpbmctdG9wOi44NDM3NWVtfS5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7Zm9udC1zaXplOjc1JTttYXJnaW4tdG9wOi42NjY2NjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNzkxNjY2NjY2N2VtKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNDM3NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxMDJweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNTMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjI4MTI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye21hcmdpbi10b3A6LjU0MTY2NjY2NjdlbTt0b3A6Y2FsYygxMDAlIC0gMS42NjY2NjY2NjY3ZW0pfUBtZWRpYSBwcmludHsubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoMC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMWVtKSBzY2FsZSgwLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMmVtKSBzY2FsZSgwLjc1KX19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouMjVlbSAwIC43NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMDkzNzVlbTttYXJnaW4tdG9wOi0wLjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41OTM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41OTM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzoxZW0gMCAxZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS44NDM3NWVtO21hcmdpbi10b3A6LTAuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1ncmlkLXRpbGUtaGVhZGVyLC5tYXQtZ3JpZC10aWxlLWZvb3Rlcntmb250LXNpemU6MTRweH0ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lLC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH1pbnB1dC5tYXQtaW5wdXQtZWxlbWVudHttYXJnaW4tdG9wOi0wLjA2MjVlbX0ubWF0LW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1wYWdpbmF0b3IsLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHh9Lm1hdC1yYWRpby1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3R7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3QtdHJpZ2dlcntoZWlnaHQ6MS4xMjVlbX0ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtc3RlcHBlci12ZXJ0aWNhbCwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXN0ZXAtbGFiZWx7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3J7Zm9udC13ZWlnaHQ6bm9ybWFsfS5tYXQtc3RlcC1sYWJlbC1lcnJvcntmb250LXNpemU6MTRweH0ubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWR7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdGFiLWdyb3Vwe2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdG9vbGJhciwubWF0LXRvb2xiYXIgaDEsLm1hdC10b29sYmFyIGgyLC5tYXQtdG9vbGJhciBoMywubWF0LXRvb2xiYXIgaDQsLm1hdC10b29sYmFyIGg1LC5tYXQtdG9vbGJhciBoNntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowfS5tYXQtdG9vbHRpcHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206NnB4fS5tYXQtdG9vbHRpcC1oYW5kc2V0e2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9Lm1hdC1saXN0LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1saXN0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweH0ubWF0LW9wdGdyb3VwLWxhYmVse2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1zaW1wbGUtc25hY2tiYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2xpbmUtaGVpZ2h0OjE7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo1MDB9Lm1hdC10cmVle2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE0cHh9Lm1hdC1yaXBwbGV7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpe3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVke292ZXJmbG93OnZpc2libGV9Lm1hdC1yaXBwbGUtZWxlbWVudHtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSx0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO3RyYW5zZm9ybTpzY2FsZSgwKX0uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnR7ZGlzcGxheTpub25lfS5jZGstdmlzdWFsbHktaGlkZGVue2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O291dGxpbmU6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uY2RrLW92ZXJsYXktY29udGFpbmVyLC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO29wYWNpdHk6MH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjF9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR7LyohKi99QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR7LyohKi99LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxse2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXN9LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpe2FuaW1hdGlvbjpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZXtyZXNpemU6bm9uZX10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5ne3BhZGRpbmc6MnB4IDAgIWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG8gIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudH10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3h7cGFkZGluZzoycHggMCAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ggIWltcG9ydGFudDtoZWlnaHQ6MCAhaW1wb3J0YW50fS5tYXQtZm9jdXMtaW5kaWNhdG9ye3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtbWRjLWZvY3VzLWluZGljYXRvcntwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1vcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksLm1hdC1vcHRpb246Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1hY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCk7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtb3B0aW9uLm1hdC1vcHRpb24tZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojM2Y1MWI1fS5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiNmZjQwODF9Lm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiNmNDQzMzZ9Lm1hdC1vcHRncm91cC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXBzZXVkby1jaGVja2JveHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1wc2V1ZG8tY2hlY2tib3g6OmFmdGVye2NvbG9yOiNmYWZhZmF9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWR7Y29sb3I6I2IwYjBiMH0ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiMzZjUxYjV9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmZjQwODF9Lm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCwubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWR7YmFja2dyb3VuZDojYjBiMGIwfS5tYXQtYXBwLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWVsZXZhdGlvbi16MHtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejF7Ym94LXNoYWRvdzowcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16Mntib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoze2JveC1zaGFkb3c6MHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejR7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejV7Ym94LXNoYWRvdzowcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejZ7Ym94LXNoYWRvdzowcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo3e2JveC1zaGFkb3c6MHB4IDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDdweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAycHggMTZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16OHtib3gtc2hhZG93OjBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejl7Ym94LXNoYWRvdzowcHggNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggOXB4IDEycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDNweCAxNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxMHtib3gtc2hhZG93OjBweCA2cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxMHB4IDE0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDRweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxMXtib3gtc2hhZG93OjBweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxMXB4IDE1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDRweCAyMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxMntib3gtc2hhZG93OjBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxM3tib3gtc2hhZG93OjBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxM3B4IDE5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDVweCAyNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxNHtib3gtc2hhZG93OjBweCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNHB4IDIxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDVweCAyNnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxNXtib3gtc2hhZG93OjBweCA4cHggOXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNXB4IDIycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAyOHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxNntib3gtc2hhZG93OjBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTd7Ym94LXNoYWRvdzowcHggOHB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE3cHggMjZweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDMycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE4e2JveC1zaGFkb3c6MHB4IDlweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxOHB4IDI4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDdweCAzNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxOXtib3gtc2hhZG93OjBweCA5cHggMTJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTlweCAyOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA3cHggMzZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjB7Ym94LXNoYWRvdzowcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDhweCAzOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyMXtib3gtc2hhZG93OjBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIxcHggMzNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOHB4IDQwcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIye2JveC1zaGFkb3c6MHB4IDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjJweCAzNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA4cHggNDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjN7Ym94LXNoYWRvdzowcHggMTFweCAxNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyM3B4IDM2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDlweCA0NHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyNHtib3gtc2hhZG93OjBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC10aGVtZS1sb2FkZWQtbWFya2Vye2Rpc3BsYXk6bm9uZX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpe2JhY2tncm91bmQ6I2ZmZn0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMzZjUxYjV9LmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LWJhZGdlLWNvbnRlbnR7b3V0bGluZTpzb2xpZCAxcHg7Ym9yZGVyLXJhZGl1czowfS5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtYmFkZ2V7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50e2Rpc3BsYXk6bm9uZX0ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNiOWI5Yjk7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYmFkZ2UtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDt0cmFuc2Zvcm06c2NhbGUoMC42KTtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cG9pbnRlci1ldmVudHM6bm9uZX0ubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsLm1hdC1iYWRnZS1jb250ZW50Ll9tYXQtYW5pbWF0aW9uLW5vb3BhYmxle3RyYW5zaXRpb246bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZXt0cmFuc2Zvcm06bm9uZX0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2xpbmUtaGVpZ2h0OjE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotOHB4fS5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2xpbmUtaGVpZ2h0OjIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTFweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2xpbmUtaGVpZ2h0OjI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntib3gtc2hhZG93OjBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2NvbG9yOiMzZjUxYjV9Lm1hdC1idXR0b24ubWF0LWFjY2VudCwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1idXR0b24ubWF0LXdhcm4sLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWljb24tYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXN0cm9rZWQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnR7b3BhY2l0eTouMTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQ6IzAwMH0ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZsYXQtYnV0dG9uLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LWZhYiwubWF0LW1pbmktZmFie2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeXtjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLC5tYXQtZmFiLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm57Y29sb3I6I2ZmZn0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmxhdC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZhYi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZhYi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmFiLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1taW5pLWZhYi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1mYWIubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLC5tYXQtZmFiLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmFiLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1taW5pLWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtZmxhdC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZmFiOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZmFiOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWI6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsLm1hdC1idXR0b24tdG9nZ2xlLWdyb3Vwe2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3gtc2hhZG93Om5vbmV9Lm1hdC1idXR0b24tdG9nZ2xle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfVtkaXI9cnRsXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpub25lO2JvcmRlci10b3A6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNiZGJkYmR9Lm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3JkZXI6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudHtsaW5lLWhlaWdodDo0OHB4fS5tYXQtY2FyZHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2FyZC5tYXQtY2FyZC1mbGF0Om5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWNhcmQtc3VidGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtZnJhbWV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNoZWNrYm94LWNoZWNrbWFya3tmaWxsOiNmYWZhZmF9Lm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aHtzdHJva2U6I2ZhZmFmYSAhaW1wb3J0YW50fS5tYXQtY2hlY2tib3gtbWl4ZWRtYXJre2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtY2hlY2tlZCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQ6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkgLm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6I2IwYjBiMH0ubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3ggLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6IzNmNTFiNX0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6I2ZmNDA4MX0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcHtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKTphY3RpdmV7Ym94LXNoYWRvdzowcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkgLm1hdC1jaGlwLXJlbW92ZTpob3ZlcntvcGFjaXR5Oi41NH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtZGlzYWJsZWR7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6OmFmdGVye2JhY2tncm91bmQ6IzAwMH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LXRhYmxle2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRhYmxlIHRoZWFkLC5tYXQtdGFibGUgdGJvZHksLm1hdC10YWJsZSB0Zm9vdCxtYXQtaGVhZGVyLXJvdyxtYXQtcm93LG1hdC1mb290ZXItcm93LFttYXQtaGVhZGVyLXJvd10sW21hdC1yb3ddLFttYXQtZm9vdGVyLXJvd10sLm1hdC10YWJsZS1zdGlja3l7YmFja2dyb3VuZDppbmhlcml0fW1hdC1yb3csbWF0LWhlYWRlci1yb3csbWF0LWZvb3Rlci1yb3csdGgubWF0LWhlYWRlci1jZWxsLHRkLm1hdC1jZWxsLHRkLm1hdC1mb290ZXItY2VsbHtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWhlYWRlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYWxlbmRhci1hcnJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQsLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvcntjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXI+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSwuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWNhbGVuZGFyLWJvZHktaW4tcHJldmlld3tjb2xvcjpyZ2JhKDAsMCwwLC4yNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSg2Myw4MSwxODEsLjIpfS5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCwubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSgyNDksMTcxLDAsLjIpfS5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlLFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNjMsIDgxLCAxODEsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSl9Lm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDYzLCA4MSwgMTgxLCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpfS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmFmdGVye2JhY2tncm91bmQ6I2E4ZGFiNX0ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQ6IzQ2YTM1ZX0ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjMsODEsMTgxLC40KX0ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudHtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmV7YmFja2dyb3VuZDpyZ2JhKDI1NSw2NCwxMjksLjIpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZXtiYWNrZ3JvdW5kOnJnYmEoMjQ5LDE3MSwwLC4yKX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDY0LCAxMjksIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCBbZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgyNTUsIDY0LCAxMjksIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U+Lm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmFmdGVye2JhY2tncm91bmQ6I2E4ZGFiNX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kOiM0NmEzNWV9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsNjQsMTI5LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSgyNDQsNjcsNTQsLjIpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSgyNDksMTcxLDAsLjIpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjQ0LCA2NywgNTQsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmFmdGVye2JhY2tncm91bmQ6I2E4ZGFiNX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQ6IzQ2YTM1ZX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaHtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmV7Y29sb3I6IzNmNTFiNX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWRhdGUtcmFuZ2UtaW5wdXQtaW5uZXJbZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWRpYWxvZy1jb250YWluZXJ7Ym94LXNoYWRvdzowcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kaXZpZGVye2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZGl2aWRlci12ZXJ0aWNhbHtib3JkZXItcmlnaHQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZXhwYW5zaW9uLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWFjdGlvbi1yb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSksLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhKGhvdmVyOiBub25lKXsubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZDojZmZmfX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiwubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbntjb2xvcjppbmhlcml0fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntoZWlnaHQ6NDhweH0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVke2hlaWdodDo2NHB4fS5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlcntjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50LC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZXJyb3J7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1oaW50e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQyKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjQyKSAzMyUsIHRyYW5zcGFyZW50IDAlKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXh9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjA2KX0ubWF0LWljb24ubWF0LXByaW1hcnl7Y29sb3I6IzNmNTFiNX0ubWF0LWljb24ubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtaWNvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCwubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6IzNmNTFiNX0ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCwubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbGlzdC1pdGVtLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWxpc3Qtb3B0aW9uOmhvdmVyLC5tYXQtbGlzdC1vcHRpb246Zm9jdXMsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIsLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1c3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbiwubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbjpob3ZlciwubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbjpmb2N1c3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LW1lbnUtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtbWVudS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LW1lbnUtaXRlbXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0sLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtcGFnaW5hdG9ye2JhY2tncm91bmQ6I2ZmZn0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7Ym9yZGVyLXJpZ2h0OjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZmlyc3QsLm1hdC1wYWdpbmF0b3ItbGFzdHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wYWdpbmF0b3ItY29udGFpbmVye21pbi1oZWlnaHQ6NTZweH0ubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2M1Y2FlOX0ubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojYzVjYWU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmY4MGFifS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmODBhYn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLC5tYXQtc3Bpbm5lciBjaXJjbGV7c3Ryb2tlOiMzZjUxYjV9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZXtzdHJva2U6I2ZmNDA4MX0ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGV7c3Ryb2tlOiNmNDQzMzZ9Lm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6IzNmNTFiNX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZmY0MDgxfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zZWxlY3QtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtc2VsZWN0LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWRyYXdlci1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpe2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYzLDgxLDE4MSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYiwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYzLDgxLDE4MSwuMil9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjIpfS5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYiwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC13YXJuIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuMil9Lm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhKGhvdmVyOiBub25lKXsubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6bm9uZX19Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZXtib3JkZXItbGVmdC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlciwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5le2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcntoZWlnaHQ6NzJweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciwubWF0LXZlcnRpY2FsLXN0ZXBwZXItaGVhZGVye3BhZGRpbmc6MjRweCAyNHB4fS5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmV7dG9wOi0xNnB4O2JvdHRvbTotMTZweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZXt0b3A6MzZweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmV7dG9wOjM2cHh9Lm1hdC1zb3J0LWhlYWRlci1hcnJvd3tjb2xvcjojNzU3NTc1fS5tYXQtdGFiLW5hdi1iYXIsLm1hdC10YWItaGVhZGVye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItbmF2LWJhciwubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVye2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtib3JkZXItYm90dG9tOm5vbmV9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItZ3JvdXBbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV17Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6bm9uZX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5NywyMDIsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwxMjgsMTcxLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIwNSwyMTAsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTk3LDIwMiwyMzMsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDEyOCwxNzEsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIwNSwyMTAsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRvb2xiYXJ7YmFja2dyb3VuZDojZjVmNWY1O2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRvb2xiYXIubWF0LXByaW1hcnl7YmFja2dyb3VuZDojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyLm1hdC1hY2NlbnR7YmFja2dyb3VuZDojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyLm1hdC13YXJue2JhY2tncm91bmQ6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC12YWx1ZSwubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtYXJyb3csLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjppbmhlcml0fS5tYXQtdG9vbGJhciAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dze21pbi1oZWlnaHQ6NjRweH0ubWF0LXRvb2xiYXItcm93LC5tYXQtdG9vbGJhci1zaW5nbGUtcm93e2hlaWdodDo2NHB4fUBtZWRpYShtYXgtd2lkdGg6IDU5OXB4KXsubWF0LXRvb2xiYXItbXVsdGlwbGUtcm93c3ttaW4taGVpZ2h0OjU2cHh9Lm1hdC10b29sYmFyLXJvdywubWF0LXRvb2xiYXItc2luZ2xlLXJvd3toZWlnaHQ6NTZweH19Lm1hdC10b29sdGlwe2JhY2tncm91bmQ6cmdiYSg5Nyw5Nyw5NywuOSl9Lm1hdC10cmVle2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRyZWUtbm9kZSwubWF0LW5lc3RlZC10cmVlLW5vZGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdHJlZS1ub2Rle21pbi1oZWlnaHQ6NDhweH0ubWF0LXNuYWNrLWJhci1jb250YWluZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyk7YmFja2dyb3VuZDojMzIzMjMyO2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257Y29sb3I6I2ZmNDA4MX1cbiIsIkBpbXBvcnQgJ35AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzJztcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgLy8gZGlzcGxheTogbm9uZVxyXG4gICAgfVxyXG59XHJcbi5waG9uZV9jb250YWluZXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gIH1cclxufVxyXG4ucm93e1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyN3B4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ucGF5SXRlbXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmOyAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRoZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50aGVhZCAudGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDI0cHggMTVweDtcclxuICAgIHdpZHRoOiA0LjMzMzMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGhlYWQgLnRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogNCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRoZWFkIC50ZDpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRmb290IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50Zm9vdCAudHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGZvb3QgLmZ1bGxQcmljZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50Zm9vdCAuZnVsbFByaWNlIHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50Zm9vdCAuZnVsbFByaWNlIHNwYW4sXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGZvb3QgLmZ1bGxQcmljZSBpIHtcclxuICAgIGNvbG9yOiAjYzgwMDAwO1xyXG4gIH1cclxuICAudGZvb3R7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2luZ2xlSXRlbVByaWNle1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgLy8gbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50Ym9keSAudGQge1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC50YWJsZSAudGJvZHkgLnRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRib2R5IC50ZDpudGgtY2hpbGQoMikge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAucGF5SXRlbXMgLnRhYmxlIC50ciAudHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAudGFibGUgLnRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogNDUlIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC5zaW5nbGVJdGVtUHJpY2Uge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAuc2luZ2xlSXRlbVByaWNlIHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXlJdGVtcyAuaXRlbVByaWNlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLnBheUl0ZW1zIC5pdGVtUHJpY2Ugc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLnNtYWxsUHJvZHVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmOyBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDI4NXB4O1xyXG4gICAgfSB9XHJcbiAgXHJcbiAgLnNtYWxsUHJvZHVjdCAuYXMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuc21hbGxQcm9kdWN0IC5hcyBhIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjI1MHMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogY29sb3IgLjI1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjI1MHMgbGluZWFyO1xyXG4gIH1cclxuICBcclxuICAuc21hbGxQcm9kdWN0IC5pbWdXcmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4yNTBzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjI1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjUwcyBsaW5lYXI7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICB3aWR0aDogMjY1cHg7XHJcbiAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zbWFsbFByb2R1Y3Qge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc21hbGxQcm9kdWN0SW5mb3tcclxuICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjc1cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGVsYXRlUHJvZHVjdCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDExMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmRlbGF0ZVByb2R1Y3Q6YmVmb3JlLFxyXG4gIC5kZWxhdGVQcm9kdWN0OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2M4MDAwMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgbGVmdDogMiU7XHJcbiAgICB3aWR0aDogMjNweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgLmRlbGF0ZVByb2R1Y3Q6YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICBcclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIC50ciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSAudGQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlTW9iVGl0bGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gLmVtcHR5QmFza2VyIHtcclxuICAvLyAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIC5lbXB0eUJhcyAucGF5SXRlbXMge1xyXG4gIC8vICAgcGFkZGluZzogMDtcclxuICAvLyAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIC5lbXB0eUJhcyAudGFibGVtLFxyXG4gIC8vIC5lbXB0eUJhcyAucGF5U2VsZWN0LFxyXG4gIC8vIC5lbXB0eUJhcyAuYnRuV3JhcHBlciB7XHJcbiAgLy8gICBkaXNwbGF5OiBub25lO1xyXG4gIC8vIH1cclxuICAuYnRuV3JhcHB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3JTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmc6IDEycHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNzMsIDcxLCA3MSk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMS41cyBlYXNlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrKDM2LCAzNCwgMzQpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEuNXMgZWFzZTtcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gIH1cclxuICAmOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrKDM2LCAzNCwgMzQpO1xyXG4gIH1cclxufVxyXG4gIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiKDE2OCwgMTY2LCAxNjYpO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdENvdW50V3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgLnByaWNlVHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfVxyXG4gIC5yZWR7XHJcbiAgICBjb2xvcjogI2M4MDAwMDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3RDb3VudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0Q291bnQubGVzc1Byb2R1Y3Q6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNjODAwMDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdENvdW50V3JhcHBlciBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3RDb3VudFdyYXBwZXIgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0Q291bnQubW9yZVByb2R1Y3Qge1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdENvdW50Lm1vcmVQcm9kdWN0OmJlZm9yZSwgLnByb2R1Y3RDb3VudC5tb3JlUHJvZHVjdDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzgwMDAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3RDb3VudC5tb3JlUHJvZHVjdDphZnRlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0Q291bnQubW9yZVByb2R1Y3Q6YmVmb3JlLCAucHJvZHVjdENvdW50Lm1vcmVQcm9kdWN0OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNjODAwMDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciAubWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbn1cclxuLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4ub3JkZXJze1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnN0eWxle1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgfVxyXG4gIFxyXG59XHJcbi5wcmljZXtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcbi5wcm9kdWN0T3JkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basket',
                templateUrl: './basket.component.html',
                styleUrls: ['./basket.component.scss'],
                providers: [
                    {
                        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["STEPPER_GLOBAL_OPTIONS"], useValue: { showError: true },
                    }
                ]
            }]
    }], function () { return [{ type: src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");




class HomeComponent {
    constructor() {
        this.itemsPerSlide = 4;
        this.singleSlideOffset = true;
        this.slides = [
            { image: '../../../assets/slide1.jpg' },
            { image: '../../../assets/slide2.jpg' },
            { image: '../../../assets/slide3.jpg' },
            { image: '../../../assets/slide4.jpg' },
            { image: '../../../assets/slide5.jpg' },
            { image: '../../../assets/slide6.jpg' },
            { image: '../../../assets/slide7.jpg' },
            { image: '../../../assets/slide8.jpg' },
        ];
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselConfig"], useValue: { interval: 2500, noPause: true, showIndicators: true } }
        ])], decls: 38, vars: 0, consts: [[1, "caros"], ["src", "../../../assets/e25fb9a2c8770bae6dbac403c0904e8f0b170e91_banner1home2.jpg", "alt", "first slide", 1, "mainImg", "compt"], ["src", "../../../assets/main.jpg", "alt", "first slide", 1, "mainImg", "mobile"], [1, "carousel-caption", "d-none", "d-md-block", "bonslick-caption", "col-xs-12", "col-sm-8"], ["src", "../../../assets/d70f0180c056755153f0bde47d4d12e05444a9a5_banner1home.jpg", "alt", "second slide", 1, "mainImg", 2, "display", "block", "width", "100%"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "text_center", "d-flex"], [1, "text"], [1, "justify"], [1, "images", "d-flex", "flex-row", "justify-content-around"], ["src", "../../../assets/banner1.jpg", "alt", "", 1, "img_baner"], ["src", "../../../assets/banner2.jpg", "alt", "", 1, "img_baner"], ["src", "../../../assets/banner3.jpg", "alt", "", 1, "img_baner"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "contact-us-homepage"], [1, "spacer", "s2"], [1, "box1", "col-lg-6", "col-md-6", "col-sm-12", "align-center", "border-right"], ["href", "tel:093-1543760", 1, "btn", "btn-primary", "add-to-cart", "bcg", "mt"], [1, "box1", "col-lg-6", "col-md-6", "col-sm-12", "align-center"], ["href", "mailto:Jura04041988@gmail.com", 1, "btn", "btn-primary", "add-to-cart"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u043E\u0432\u0456 \u043A\u043E\u043B\u0435\u043A\u0446\u0456\u0457 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F Kelton \u0431\u0443\u043B\u0430 \u0437\u0430\u0441\u043D\u043E\u0432\u0430\u043D\u0430 \u0432 1975 \u0440\u043E\u0446\u0456 \u0431\u0440\u0430\u0442\u0430\u043C\u0438 \u041F'\u0454\u0440\u043E\u043D\u0456 - \u0421\u0430\u0432\u0443\u0440\u043E \u0456 \u0414\u0436\u0443\u0437\u0435\u043F\u043F\u0435. Kelton - \u0454\u0434\u0438\u043D\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u0441\u043E\u0440\u043E\u043A\u0430\u0440\u0456\u0447\u043D\u0438\u0439 \u0443\u0441\u043F\u0456\u0445 \u044F\u043A\u043E\u0457 \u043F\u043E\u044F\u0441\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u0448\u0430\u043D\u043E\u0431\u043B\u0438\u0432\u0438\u043C \u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F\u043C \u0434\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432 \u0456 \u0431\u0435\u0437\u0434\u043E\u0433\u0430\u043D\u043D\u043E\u044E \u044F\u043A\u0456\u0441\u0442\u044E \u0432\u0437\u0443\u0442\u0442\u044F. \u0413\u043E\u043B\u043E\u0432\u043D\u0430 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0432\u0437\u0443\u0442\u0442\u044F Kelton - \u0430\u043D\u0430\u0442\u043E\u043C\u0456\u0447\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u0442\u0430\u043D\u043A\u0435\u0442\u043A\u0430 \u0437 \u0441\u043F\u0456\u043D\u0435\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0456\u0443\u0440\u0435\u0442\u0430\u043D\u0443, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u0447\u043E\u043C\u0443 \u0432\u0437\u0443\u0442\u0442\u044F \u043B\u0435\u0433\u043A\u0430, \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0430 \u0456 \u043D\u0430\u0434\u0456\u0439\u043D\u043E \u0437\u0430\u0445\u0438\u0449\u0430\u0454 \u0432\u0456\u0434 \u0445\u043E\u043B\u043E\u0434\u0443.\n\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u043C\u043E\u0434\u043D\u0435 \u0432\u0437\u0443\u0442\u0442\u044F Kelton, \u044F\u043A \u0456 \u0447\u043E\u0442\u0438\u0440\u0438 \u0434\u0435\u0441\u044F\u0442\u0438\u043B\u0456\u0442\u0442\u044F \u043D\u0430\u0437\u0430\u0434, \u0432\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0432\u0438\u043A\u043B\u044E\u0447\u043D\u043E \u0437 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432 \u0456 \u0442\u0456\u043B\u044C\u043A\u0438 \u0432 \u0406\u0442\u0430\u043B\u0456\u0457. \u0414\u0438\u0437\u0430\u0439\u043D \u0432\u0437\u0443\u0442\u0442\u044F \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0435\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E \u0456 \u0432\u0442\u0456\u043B\u044E\u0454 \u0432 \u0441\u043E\u0431\u0456 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0456 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0456\u0457 \u0441\u0432\u0456\u0442\u0443 \u043C\u043E\u0434\u0438. \u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 - \u043A\u043E\u043B\u0435\u0441\u043E \u0456 \u0434\u0432\u0430 \u043A\u0440\u0438\u043B\u0430, \u044F\u043A\u0456 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0437\u0443\u044E\u0442\u044C \u043A\u043E\u043C\u0444\u043E\u0440\u0442, \u043B\u0435\u0433\u043A\u0456\u0441\u0442\u044C \u0456 \u0441\u0432\u043E\u0431\u043E\u0434\u0443. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0417\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0432\u0430\u0442\u0438: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "093-1543760");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u041D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u043D\u0430\u043C email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041C\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043C\u043E \u0432\u043F\u0440\u043E\u0434\u043E\u0432\u0436 \u0434\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]], styles: [".cvc[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n.mainImg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  margin-top: 18vh;\n}\n\n@media screen and (max-width: 427px) {\n  .mainImg[_ngcontent-%COMP%] {\n    height: 48vh;\n    margin-top: 28%;\n    object-fit: cover;\n  }\n}\n\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .mainImg[_ngcontent-%COMP%] {\n    height: 60vh;\n    margin-top: 18%;\n    object-fit: cover;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  .mainImg[_ngcontent-%COMP%] {\n    height: 75vh;\n    margin-top: 18%;\n  }\n}\n\n.text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 427px) {\n  .mt[_ngcontent-%COMP%] {\n    margin-top: 20%;\n  }\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.justify[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  width: 37%;\n  text-align: center;\n  color: black;\n  margin-left: 30%;\n  margin-top: 10%;\n  font-size: 20px;\n}\n\n@media screen and (max-width: 426px) {\n  .justify[_ngcontent-%COMP%] {\n    width: 71%;\n    margin-left: 15%;\n    font-size: 13px;\n  }\n}\n\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .justify[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    width: 53%;\n  }\n}\n\n.info[_ngcontent-%COMP%] {\n  align-items: center;\n  width: 40%;\n  height: 30%;\n  margin-left: 30%;\n}\n\n.text_center[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.images[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 9%;\n}\n\n@media screen and (max-width: 1024px) {\n  .images[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n.img_baner[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 70vh;\n}\n\n@media screen and (max-width: 427px) {\n  .img_baner[_ngcontent-%COMP%] {\n    height: 30vh;\n    width: 45%;\n    margin-top: 3%;\n  }\n}\n\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .img_baner[_ngcontent-%COMP%] {\n    height: 47vh;\n    width: 45%;\n    margin-top: 3%;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  .img_baner[_ngcontent-%COMP%] {\n    height: 40vh;\n  }\n}\n\n.carousel[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 70%;\n  height: 30%;\n  margin-left: 15%;\n}\n\n.imgSlide[_ngcontent-%COMP%] {\n  width: 23%;\n}\n\n.contact-us-homepage[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 7%;\n  background: #f3f3f3;\n  padding: 45px 0;\n}\n\n.contact-us-homepage[_ngcontent-%COMP%]   .box1.border-right[_ngcontent-%COMP%] {\n  border-right: 1px solid #000000;\n}\n\n.contact-us-homepage[_ngcontent-%COMP%]   .box1[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2em;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.contact-us-homepage[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 130%;\n}\n\n@media screen and (max-width: 427px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n@media screen and (max-width: 427px) {\n  .bcg[_ngcontent-%COMP%] {\n    background-color: #f3f3f3;\n  }\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  line-height: 25px;\n  font-size: 18px;\n  color: #000000;\n  font-weight: 400;\n}\n\n@media screen and (max-width: 427px) {\n  p[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%], .btn-tertiary[_ngcontent-%COMP%] {\n  background: #000000 none repeat scroll 0 0;\n  border-radius: 0px;\n  box-shadow: 0;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 200;\n  height: 40px;\n  line-height: 35px;\n  margin-bottom: 30px;\n  padding: 0 40px;\n  text-transform: uppercase;\n  transition: all 300ms ease;\n}\n\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%], .btn-tertiary[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.1);\n  text-transform: uppercase;\n  font-weight: 200;\n  padding: 0.5rem 1.25rem;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #000;\n  border-color: transparent;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.25;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border-radius: 0;\n}\n\n.h1[_ngcontent-%COMP%] {\n  font-size: 52px;\n  font-weight: bold;\n  line-height: 58px;\n  transform: translateX(20%);\n  transition: all 1s ease-in-out 0.7s;\n  opacity: 0;\n  color: #ffffff;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 1px;\n}\n\n.bonslick-caption[_ngcontent-%COMP%] {\n  transform: translate(0, -50%);\n  padding-left: 30px;\n  text-align: center;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  font-size: 85px;\n  height: 40%;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  height: 150px;\n}\n\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .carousel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  slide[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n  }\n}\n\n.compt[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n@media screen and (max-width: 426px) {\n  .compt[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 426px) {\n  .mobile[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 427px) {\n  .caros[_ngcontent-%COMP%] {\n    width: 94%;\n    height: 70%;\n    margin-left: 3%;\n    margin-right: 3%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFBSTtFQUpKO0lBS1EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQUdOO0FBQ0Y7O0FBRlE7RUFUUjtJQVVZLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFLVjtBQUNGOztBQUphO0VBZGI7SUFlZ0IsWUFBQTtJQUNBLGVBQUE7RUFPZDtBQUNGOztBQUhBO0VBRUksV0FBQTtBQUtKOztBQUZJO0VBREo7SUFFUSxlQUFBO0VBTU47QUFDRjs7QUFKQTtFQUdJLGFBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUxJO0VBUko7SUFTUSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBUU47QUFDRjs7QUFQTTtFQWJOO0lBY1EsZ0JBQUE7SUFDQSxVQUFBO0VBVU47QUFDRjs7QUFQQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJBO0VBRUksV0FBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFXSjs7QUFWSTtFQUhKO0lBSVEsZUFBQTtFQWFOO0FBQ0Y7O0FBWEE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQWNKOztBQWJJO0VBSEo7SUFJUSxZQUFBO0lBQ0MsVUFBQTtJQUNBLGNBQUE7RUFnQlA7QUFDRjs7QUFmSTtFQVJKO0lBU1EsWUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VBa0JOO0FBQ0Y7O0FBaEJRO0VBZFI7SUFlWSxZQUFBO0VBbUJWO0FBQ0Y7O0FBakJBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFvQkY7O0FBbEJBO0VBQ0ksVUFBQTtBQXFCSjs7QUFsQkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXFCSjs7QUFuQkE7RUFDSSwrQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxPQUFBO0VBQ0EsWUFBQTtBQXVCSjs7QUFyQkE7RUFDSSxrQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxtQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBMEJKOztBQXpCSTtFQUhKO0lBSVEsZUFBQTtFQTRCTjtBQUNGOztBQTNCSTtFQU5KO0lBT1EsaUJBQUE7RUE4Qk47QUFDRjs7QUEzQkk7RUFESjtJQUVRLHlCQUFBO0VBK0JOO0FBQ0Y7O0FBM0JBO0VBQ1EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQThCUjs7QUE3QlE7RUFOUjtJQU9ZLGVBQUE7RUFnQ1Y7QUFDRjs7QUE5QkE7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSx5QkFBQTtFQUtBLDBCQUFBO0FBZ0NKOztBQTlCQTtFQUNJLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBaUNKOztBQS9CQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBa0NKOztBQWhDQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbUNKOztBQWpDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBb0NKOztBQWxDQTtFQUNJLGdCQUFBO0FBcUNKOztBQW5DQTtFQUtJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXNDSjs7QUFwQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQXVDSjs7QUFyQ0E7RUFDSSxTQUFBO0FBd0NKOztBQXRDQTtFQUNJLGFBQUE7QUF5Q0o7O0FBeENJO0VBRko7SUFHUSxXQUFBO0VBMkNOO0FBQ0Y7O0FBeENJO0VBREo7SUFFUSxXQUFBO0lBQ0EsZ0JBQUE7RUE0Q047QUFDRjs7QUExQ0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQTZDSjs7QUE1Q0k7RUFISjtJQUlRLGFBQUE7RUErQ047QUFDRjs7QUE3Q0E7RUFDSSxhQUFBO0FBZ0RKOztBQS9DSTtFQUZKO0lBR1EsY0FBQTtJQUNBLFdBQUE7RUFrRE47QUFDRjs7QUEvQ0k7RUFESjtJQUVRLFVBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBbUROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmN2Y3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ubWFpbkltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi10b3A6IDE4dmg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjdweCkgeyBcclxuICAgICAgICBoZWlnaHQ6IDQ4dmg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjglO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyAgXHJcbiAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyN3B4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAgICAgICAgIGhlaWdodDogNjB2aDsgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTglO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzV2aDsgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTglO1xyXG5cclxuICAgICAgICAgICAgfVxyXG59XHJcblxyXG4udGV4dHtcclxuICAgIC8vIG1hcmdpbi10b3A6IDglO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm10e1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI3cHgpIHsgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlOyBcclxuICAgICB9XHJcbn1cclxuLm1haW57XHJcbiAgICAvLyB3aWR0aDogMzAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5qdXN0aWZ5e1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICB3aWR0aDogMzclO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDs7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgIHdpZHRoOiA3MSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTsgICBcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlOyBcclxuICAgICAgICB3aWR0aDogNTMlOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG59XHJcbi5pbmZve1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuLnRleHRfY2VudGVye1xyXG4gICAgLy8gaGVpZ2h0OiA3MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltYWdlc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogOSU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHsgXHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyAgICBcclxuICAgICAgICB9XHJcbn1cclxuLmltZ19iYW5lcntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjdweCkgeyBcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgICAgICBoZWlnaHQ6IDQ3dmg7ICAgIFxyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyBcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHZoOyAgICAgXHJcbiAgICAgICAgICAgIH1cclxufVxyXG4uY2Fyb3VzZWx7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG59XHJcbi5pbWdTbGlkZXtcclxuICAgIHdpZHRoOiAyMyU7XHJcbn1cclxuXHJcbi5jb250YWN0LXVzLWhvbWVwYWdle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIHBhZGRpbmc6IDQ1cHggMDtcclxufVxyXG4uY29udGFjdC11cy1ob21lcGFnZSAuYm94MS5ib3JkZXItcmlnaHQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDtcclxufVxyXG4uY29udGFjdC11cy1ob21lcGFnZSAuYm94MSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG59XHJcbi5hbGlnbi1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWN0LXVzLWhvbWVwYWdlIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjdweCkgeyBcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjdweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOyAgICAgXHJcbiAgICAgICAgfVxyXG59XHJcbi5iY2d7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjdweCkgeyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxucHtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjdweCkgeyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4IDtcclxuICAgICAgICB9XHJcbn1cclxuLmJ0bi1wcmltYXJ5LCAuYnRuLXNlY29uZGFyeSwgLmJ0bi10ZXJ0aWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbn1cclxuLmJ0bi1wcmltYXJ5LCAuYnRuLXNlY29uZGFyeSwgLmJ0bi10ZXJ0aWFyeSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxLjI1cmVtO1xyXG59XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmgxIHtcclxuICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dCAwLjdzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbnNwYW57XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG59XHJcbi5ib25zbGljay1jYXB0aW9uIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbntcclxuICAgIGZvbnQtc2l6ZTogODVweDtcclxuICAgIGhlaWdodDogNDAlO1xyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmNhcm91c2Vse1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyN3B4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuc2xpZGV7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjdweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuLmNvbXB0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7IFxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuLm1vYmlsZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkgeyBcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4uY2Fyb3N7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjdweCkgeyBcclxuICAgICAgICB3aWR0aDogOTQlO1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
                providers: [
                    { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselConfig"], useValue: { interval: 2500, noPause: true, showIndicators: true } }
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");










function ProductComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412 \u0446\u0456\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u043D\u0435\u043C\u0430\u0454");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function ProductComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, "/product-details/" + prod_r3.category.name, prod_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", prod_r3.image[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, prod_r3.price, "UAH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, "/product-details/" + prod_r3.category.name, prod_r3.id));
} }
function ProductComponent_pagination_template_12_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_pagination_template_12_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r4.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_pagination_template_12_div_6_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_pagination_template_12_div_6_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r4.setCurrent(page_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label);
} }
function ProductComponent_pagination_template_12_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label);
} }
function ProductComponent_pagination_template_12_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_pagination_template_12_div_6_span_1_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_pagination_template_12_div_6_div_2_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r4.getCurrent() === page_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.getCurrent() !== page_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.getCurrent() === page_r10.value);
} }
function ProductComponent_pagination_template_12_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_pagination_template_12_img_8_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r4.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_pagination_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ProductComponent_pagination_template_12_Template_pagination_template_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductComponent_pagination_template_12_img_4_Template, 1, 0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " << ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductComponent_pagination_template_12_div_6_Template, 3, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductComponent_pagination_template_12_img_8_Template, 1, 0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " >> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.config.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r4.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r4.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r4.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.isLastPage());
} }
const _c1 = function () { return ["/home"]; };
class ProductComponent {
    constructor(prodService, catService, afStore, activatedRoute, router) {
        this.prodService = prodService;
        this.catService = catService;
        this.afStore = afStore;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.adminProduct = [];
        this.filteredProducts = [];
        this.cloudProductImage = [];
        this.p = 1;
        this.config = {
            id: 'custom',
            itemsPerPage: 6,
            currentPage: 1,
            totalItems: this.filteredProducts.length,
        };
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                let category = this.activatedRoute.snapshot.paramMap.get('category');
                this.getProducts(category);
            }
        });
    }
    ngOnInit() {
        this.getProducts();
        // window.scroll(0,0);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getProducts(prod) {
        prod = prod || this.activatedRoute.snapshot.paramMap.get('category');
        this.subscription = this.prodService.getFirebaseProduct().subscribe(data => {
            this.adminProduct = data.map(product => {
                const data = product.payload.doc.data();
                return data;
            });
            if (this.adminProduct.length > 0) {
                this.adminProduct = this.adminProduct.sort(function (a, b) {
                    return +a.id - +b.id;
                });
                this.filteredProducts = this.adminProduct.filter(product => product.category.name === prod);
            }
            this.config.totalItems = this.filteredProducts.length;
        });
    }
    onPageChange(page) {
        this.config.currentPage = page;
        window.scrollTo(0, 0);
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], useValue: { interval: 1500, noPause: true, showIndicators: true } }
        ])], decls: 13, vars: 8, consts: [[1, "laberBreadcrumb", "d-flex", "row"], [1, "container"], [1, "breadcrumb", "hidden-sm-down"], ["itemscope", ""], ["itemprop", "itemListElement", "itemscope", ""], ["routerLinkActive", "active", 1, "img_style", 3, "routerLink"], ["itemprop", "name", 1, "span"], ["class", "prodNone", 4, "ngIf"], [1, "fluid", "d-flex", "flex-row", "justify-content-around", "flex-wrap"], ["itemscope", "", "itemtype", "http://schema.org/Product", "class", "prod_card", 4, "ngFor", "ngForOf"], [3, "id", "pageChange", 4, "ngIf"], [1, "prodNone"], ["itemscope", "", "itemtype", "http://schema.org/Product", 1, "prod_card"], ["target", "blank", "routerLinkActive", "active", 1, "img_style", 3, "routerLink"], ["itemprop", "ImageObject", 1, "style", 3, "src"], [1, "card-body"], ["itemprop", "name", 1, "card-title", "card-text"], ["itemprop", "price", 1, "card-text", "price"], ["routerLinkActive", "active", 1, "btn", 3, "routerLink"], [3, "id", "pageChange"], ["p", "paginationApi"], ["autoscroll", "true", 1, "custom-pagination"], [1, "pagination-previous"], [3, "click", 4, "ngIf"], ["class", "page-number", 3, "current", 4, "ngFor", "ngForOf"], [1, "pagination-next"], [3, "click"], [1, "page-number"], [4, "ngIf"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0413\u043E\u043B\u043E\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductComponent_div_8_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductComponent_div_10_Template, 12, 14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductComponent_pagination_template_12_Template, 10, 8, "pagination-template", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredProducts.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 4, ctx.filteredProducts, ctx.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredProducts.length > 6);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsDirective"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n.prod_card[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-bottom: 5%;\n}\n@media screen and (max-width: 426px) {\n  .prod_card[_ngcontent-%COMP%] {\n    width: 45%;\n    margin-bottom: 10%;\n  }\n}\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .prod_card[_ngcontent-%COMP%] {\n    margin-bottom: 10%;\n  }\n}\n.img_style[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65%;\n  cursor: pointer;\n}\n@media screen and (max-width: 426px) {\n  .img_style[_ngcontent-%COMP%] {\n    height: 50%;\n  }\n}\n.fluid[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-left: 5%;\n}\n.style[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card-body[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  line-height: 14px;\n}\n@media screen and (max-width: 426px) {\n  .card-body[_ngcontent-%COMP%] {\n    line-height: 11px;\n  }\n}\n@media screen and (max-width: 426px) {\n  h3[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 426px) {\n  .card-title[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n}\n@media screen and (max-width: 426px) {\n  span[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: \"Oswald\", sans-serif;\n}\n.price[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n@media screen and (max-width: 426px) {\n  .price[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.img_hover[_ngcontent-%COMP%] {\n  display: none;\n}\n.img_hover[_ngcontent-%COMP%]:hover {\n  display: flex;\n}\n.btn[_ngcontent-%COMP%] {\n  background-color: black;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 18px;\n  width: 100%;\n  transition: all 0.5s;\n  cursor: pointer;\n  font-family: \"Oswald\", sans-serif;\n}\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.7s;\n}\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: \"\u00BB\";\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n.btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n.btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n.custom-pagination[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 50%;\n}\n.page-number.current[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 2px solid black;\n}\n.page-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 30px;\n  height: 30px;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-family: \"Oswald\", sans-serif;\n}\n.pagination-previous[_ngcontent-%COMP%], .pagination-next[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  cursor: pointer;\n}\n.laberBreadcrumb[_ngcontent-%COMP%] {\n  \n  padding: 0;\n  display: block;\n  width: 100%;\n}\n#wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  display: flex;\n  border: none;\n}\n#wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n.breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-size: 11px;\n  list-style: outside none none;\n  padding: 0 15px;\n  position: relative;\n}\n#wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000;\n}\n.breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000;\n  display: flex;\n  font-size: 13px;\n  line-height: 40px;\n}\na[_ngcontent-%COMP%] {\n  color: #000000;\n  transition: all 300ms ease;\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"/\";\n  color: #343434;\n  font-size: 13px;\n  left: -2px;\n  position: absolute;\n  line-height: 40px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  background-color: none;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  border-radius: 0.25rem;\n  background-color: white;\n  margin-left: 3%;\n}\n.laberBreadcrumb[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n@media screen and (max-width: 426px) {\n  .laberBreadcrumb[_ngcontent-%COMP%] {\n    padding-top: 18%;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  margin-left: 3%;\n}\n.custom-pagination[_ngcontent-%COMP%] {\n  height: 100px;\n  margin-left: 44%;\n}\n@media screen and (max-width: 426px) {\n  .custom-pagination[_ngcontent-%COMP%] {\n    font-size: 14px;\n    height: 50px;\n    margin-left: 32%;\n  }\n}\n.prodNone[_ngcontent-%COMP%] {\n  font-family: \"Oswald\", sans-serif;\n  color: #df2d2d;\n  margin-left: 25%;\n  font-size: 20px;\n  margin-top: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUVKO0FBREk7RUFISjtJQUlNLFVBQUE7SUFFQSxrQkFBQTtFQUdKO0FBQ0Y7QUFGSTtFQVJKO0lBU00sa0JBQUE7RUFLSjtBQUNGO0FBSEE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7QUFLSjtBQUpJO0VBTEo7SUFNTSxXQUFBO0VBT0o7QUFDRjtBQUhBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFNSjtBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUlKO0FBREE7RUFFSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBR0o7QUFGSTtFQUxKO0lBTU0saUJBQUE7RUFLSjtBQUNGO0FBRkU7RUFERjtJQUVJLGVBQUE7RUFNRjtBQUNGO0FBSEU7RUFERjtJQUVFLHFCQUFBO0VBT0E7QUFDRjtBQUhFO0VBREY7SUFFSSxlQUFBO0VBT0Y7QUFDRjtBQUpBO0VBQ0ksaUNBQUE7QUFPSjtBQUxBO0VBQ0ksZ0JBQUE7QUFRSjtBQVBJO0VBRko7SUFHTSxlQUFBO0VBVUo7QUFDRjtBQVJBO0VBQ0ksYUFBQTtBQVdKO0FBVEE7RUFDSSxhQUFBO0FBWUo7QUFWQTtFQUVJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFZSjtBQVJFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVdKO0FBUkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVdKO0FBUkU7RUFDRSxtQkFBQTtBQVdKO0FBUkU7RUFDRSxVQUFBO0VBQ0EsUUFBQTtBQVdKO0FBVEU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBWUo7QUFURTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUFZSjtBQVRFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBWUo7QUFSRTs7RUFFRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVdKO0FBUkE7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtBQVVGO0FBUkE7RUFFRSxVQUFBO0FBVUY7QUFSQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVdGO0FBVEE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFZRjtBQVZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBYUY7QUFYQTtFQUNFLGVBQUE7QUFjRjtBQVpBO0VBR0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBYUY7QUFYQTtFQUNFLGNBQUE7QUFjRjtBQVpBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFlRjtBQWJBO0VBQ0UsY0FBQTtFQUtBLDBCQUFBO0VBQ0EscUJBQUE7QUFnQkY7QUFiQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBZ0JGO0FBZEE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFpQkY7QUFmQTtFQUNFLGdCQUFBO0FBa0JGO0FBakJFO0VBRkY7SUFHSSxnQkFBQTtFQW9CRjtBQUNGO0FBbEJBO0VBQ0UsZUFBQTtBQXFCRjtBQW5CQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQXNCRjtBQXJCRTtFQUhGO0lBSUksZUFBQTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtFQXdCSjtBQUNGO0FBdEJBO0VBQ0UsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXlCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5wcm9kX2NhcmQge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XG4gIC5wcm9kX2NhcmQge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjdweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kX2NhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgfVxufVxuXG4uaW1nX3N0eWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xuICAuaW1nX3N0eWxlIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxufVxuXG4uZmx1aWQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5zdHlsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcbiAgLmNhcmQtYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xuICAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4uY2FyZC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xuICAucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG4uaW1nX2hvdmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmltZ19ob3Zlcjpob3ZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJ0biBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuLmJ0biBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCLCu1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0yMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYnRuOmhvdmVyIHNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4uYnRuOmhvdmVyIHNwYW46YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICByaWdodDogMDtcbn1cblxuLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdlLW51bWJlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucGFnZS1udW1iZXIuY3VycmVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5wYWdlLW51bWJlciBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wYWdpbmF0aW9uLXByZXZpb3VzLFxuLnBhZ2luYXRpb24tbmV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhYmVyQnJlYWRjcnVtYiB7XG4gIC8qIHBhZGRpbmc6IDBweCAwIDQ1cHggMDsgKi9cbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jd3JhcHBlciAuYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiN3cmFwcGVyIC5icmVhZGNydW1iIG9sIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYnJlYWRjcnVtYiBvbCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jd3JhcHBlciAuYnJlYWRjcnVtYiBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5icmVhZGNydW1iIG9sIGxpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uYnJlYWRjcnVtYiBvbCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGlzdC1zdHlsZTogb3V0c2lkZSBub25lIG5vbmU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jd3JhcHBlciAuYnJlYWRjcnVtYiBsaSBhIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5icmVhZGNydW1iIG9sIGxpIGEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnJlYWRjcnVtYiBvbCBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIi9cIjtcbiAgY29sb3I6ICMzNDM0MzQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGVmdDogLTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLmJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuLmxhYmVyQnJlYWRjcnVtYiB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xuICAubGFiZXJCcmVhZGNydW1iIHtcbiAgICBwYWRkaW5nLXRvcDogMTglO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5jdXN0b20tcGFnaW5hdGlvbiB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0NCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xuICAuY3VzdG9tLXBhZ2luYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMyJTtcbiAgfVxufVxuXG4ucHJvZE5vbmUge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNkZjJkMmQ7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogOCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss'],
                providers: [
                    { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], useValue: { interval: 1500, noPause: true, showIndicators: true } }
                ]
            }]
    }], function () { return [{ type: src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/preload.config.ts":
/*!***********************************!*\
  !*** ./src/app/preload.config.ts ***!
  \***********************************/
/*! exports provided: ngxUiLoaderConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngxUiLoaderConfig", function() { return ngxUiLoaderConfig; });
const ngxUiLoaderConfig = {
    fgsType: "three-strings",
    fgsSize: 150,
    fgsColor: 'black',
    overlayColor: 'rgba(218, 223, 225, 0,1)'
};


/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/orders.service */ "./src/app/shared/services/orders.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








function ProductDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("image", "url(" + ctx_r0.image + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.product.image[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.product.image[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.product.image[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.product.image[3], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductDetailsComponent_div_17_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductDetailsComponent_div_17_p_7_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_17_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.productCount(ctx_r6.product, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_17_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.productCount(ctx_r8.product, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041E\u043F\u0438\u0441 : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_17_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addToBasket(ctx_r9.product); })("click", function ProductDetailsComponent_div_17_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0414\u043E\u0434\u0430\u0442\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, ctx_r2.product.price, "UAH"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.product.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.product.size, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.product.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.product.description, " ");
} }
const _c0 = function () { return ["/basket"]; };
function ProductDetailsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, ctx_r3.product.price, "UAH"), " ");
} }
function ProductDetailsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0434\u0430\u043D\u043E \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("image", "url(" + ctx_r4.image + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.product.image[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function () { return ["/home"]; };
class ProductDetailsComponent {
    constructor(prodService, location, route, ordersService) {
        this.prodService = prodService;
        this.location = location;
        this.route = route;
        this.ordersService = ordersService;
        this.isVisible = false;
        this.productSizes = [
            { size: '35', checked: false },
            { size: '36', checked: false },
            { size: '37', checked: false },
            { size: '38', checked: false },
            { size: '39', checked: false },
            { size: '40', checked: false },
            { size: '41', checked: false },
            { size: '42', checked: false }
        ];
    }
    ngOnInit() {
        this.getMyProduct();
    }
    productCount(product, status) {
        if (status) {
            product.count++;
        }
        else {
            if (product.count > 1) {
                product.count--;
            }
        }
    }
    getMyProduct() {
        const id = this.route.snapshot.paramMap.get("id");
        console.log(id);
        this.prodService.getOneFirebaseProduct(id)
            .then(data => {
            this.product = data.data();
            console.log(this.product);
        });
    }
    change(product) {
        this.images = product.target.currentSrc;
        console.log(this.images);
    }
    addToBasket(product) {
        let order = [];
        if (localStorage.length > 0 && localStorage.getItem('basket')) {
            order = JSON.parse(localStorage.getItem('basket'));
            if (order.some((prod) => prod.id === product.id)) {
                const index = order.findIndex((prod) => prod.id === product.id);
                order[index].count += product.count;
            }
            else {
                order.push(product);
            }
        }
        else {
            order.push(product);
        }
        localStorage.setItem('basket', JSON.stringify(order));
        product.count = 1;
        this.ordersService.basket.next(order);
        console.log(order);
    }
    backToProducts() {
        this.location.back();
    }
    showAlert() {
        if (this.isVisible) {
            return;
        }
        this.isVisible = true;
        setTimeout(() => this.isVisible = false, 2500);
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 22, vars: 9, consts: [[1, "laberBreadcrumb", "d-flex", "row"], [1, "container"], [1, "breadcrumb", "hidden-sm-down"], ["routerLinkActive", "active", 1, "img_style", 3, "routerLink"], [1, "span"], [1, "fa", "fa-arrow-left", 3, "click"], [1, "fluid_img", "d-flex", "flex-column"], [1, "images-container"], [1, "card-main"], ["class", "img_style", 4, "ngIf"], ["class", "img_arr  ", 4, "ngIf"], [1, "prod_details"], ["class", "card-body col-md-25", 4, "ngIf"], [1, "alert"], ["class", "align", 4, "ngIf"], ["class", "flex row", 4, "ngIf"], [1, "img_style"], ["tabindex", "0", 3, "src"], [1, "img_arr"], [1, "img"], ["tabindex", "0", 1, "img_first", 3, "src"], [1, "card-body", "col-md-25"], [1, "card-title"], [1, "card-text"], ["class", "description", 4, "ngIf"], [1, "size", "d-flex", "flex-row"], ["type", "radio", 1, "input-radio"], [1, "radio-label"], [1, "product__cart"], [1, "description"], ["mat-button", "", 1, "product__btn-count", 3, "click"], ["type", "number", 1, "product__input", 3, "value"], ["mat-button", "", 1, "product__btn--count", 3, "click"], [1, "description_p"], [1, "btn", 3, "click"], [1, "text_btn"], [1, "align"], [1, "ic"], [1, "basket_name"], ["routerLinkActive", "active", 1, "nav-link", "fa", 3, "routerLink"], [1, "fa", "fa-angle-double-right"], [1, "basket_price"], [1, "flex", "row"], [1, "basket_img", 3, "src"], [1, "basket_text"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0413\u043E\u043B\u043E\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_i_click_9_listener() { return ctx.backToProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductDetailsComponent_div_14_Template, 2, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductDetailsComponent_div_15_Template, 7, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductDetailsComponent_div_17_Template, 30, 9, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductDetailsComponent_div_19_Template, 9, 7, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductDetailsComponent_div_21_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  height: 100%;\n  display: block;\n  width: 100%;\n}\n\n.card-main[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 100%;\n  margin-left: 3%;\n}\n\n@media screen and (max-width: 426px) {\n  .card-main[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n\n.img_arr[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 17%;\n  height: 73%;\n  margin-left: 3%;\n  margin-top: 0;\n}\n\n@media screen and (max-width: 426px) {\n  .img_arr[_ngcontent-%COMP%] {\n    flex-direction: row;\n    width: 76%;\n    margin-left: 12%;\n    margin-top: 2%;\n  }\n}\n\n.img_first[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  background-size: cover;\n  cursor: pointer;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 32%;\n}\n\n@media screen and (max-width: 426px) {\n  .img[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 32%;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  max-width: 100%;\n}\n\n@media screen and (max-width: 426px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.images-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n@media screen and (max-width: 426px) {\n  .images-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.prod_details[_ngcontent-%COMP%] {\n  width: 30%;\n  line-height: 30px;\n}\n\n@media screen and (max-width: 426px) {\n  .prod_details[_ngcontent-%COMP%] {\n    width: 95%;\n    line-height: 5px;\n  }\n}\n\n@media screen and (max-width: 426px) {\n  .card-title[_ngcontent-%COMP%] {\n    padding-top: 2%;\n    font-size: 16px;\n  }\n}\n\n.fluid_img[_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n@media screen and (max-width: 426px) {\n  .fluid_img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.img_style[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n@media screen and (max-width: 426px) {\n  h4[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n\n.style[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  width: 100%;\n}\n\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nli[_ngcontent-%COMP%] {\n  display: list-item;\n  text-align: -webkit-match-parent;\n}\n\n.input-radio[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  opacity: 0;\n  width: 4%;\n  height: 6%;\n  border: 1px solid #000;\n}\n\nspan[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n}\n\n.span[_ngcontent-%COMP%] {\n  border: none;\n}\n\n@media screen and (max-width: 426px) {\n  .span[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n.radio-label[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  padding: 5px 12px;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 17%;\n  border-radius: 0;\n  background-color: black;\n  color: white;\n  margin-top: 5%;\n}\n\n@media screen and (max-width: 426px) {\n  .btn[_ngcontent-%COMP%] {\n    width: 50%;\n    border-radius: 3px;\n  }\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  font-family: \"Oswald\", sans-serif;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  margin-top: 10%;\n}\n\n@media screen and (max-width: 426px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n.product__btn-count[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: black;\n  color: white;\n  width: 10%;\n}\n\n@media screen and (max-width: 426px) {\n  .product__btn-count[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    width: 12%;\n  }\n}\n\n.text_btn[_ngcontent-%COMP%] {\n  font-family: \"Oswald\", sans-serif;\n}\n\n@media screen and (max-width: 426px) {\n  .text_btn[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n\n.product__input[_ngcontent-%COMP%] {\n  width: 40px;\n  outline: none;\n  height: 35px;\n  text-align: center;\n  font-family: \"Oswald\", sans-serif;\n}\n\n.description_p[_ngcontent-%COMP%], .radio-label[_ngcontent-%COMP%], .product-input[_ngcontent-%COMP%] {\n  font-family: \"Oswald\", sans-serif;\n}\n\n@media screen and (max-width: 426px) {\n  .description_p[_ngcontent-%COMP%], .radio-label[_ngcontent-%COMP%], .product-input[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\nimg[tabindex=\"0\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nimg[tabindex=\"0\"][_ngcontent-%COMP%]:focus {\n  position: fixed;\n  z-index: 10;\n  margin-top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: auto;\n  height: auto;\n  max-width: 99%;\n  max-height: 78%;\n  margin: auto;\n  box-shadow: 0 0 20px #000, 0 0 0 1000px rgba(210, 210, 210, 0.4);\n}\n\n@media screen and (max-width: 426px) {\n  img[tabindex=\"0\"][_ngcontent-%COMP%]:focus {\n    top: 0;\n  }\n}\n\nimg[tabindex=\"0\"][_ngcontent-%COMP%]:focus, img[tabindex=\"0\"][_ngcontent-%COMP%]:focus    ~ *[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: pointer;\n}\n\n.alert[_ngcontent-%COMP%] {\n  font-family: \"Oswald\", sans-serif;\n  width: 25%;\n  position: fixed;\n  top: 25%;\n  right: 5%;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.25rem;\n  padding: 2rem;\n  background: #fff;\n  color: black;\n  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);\n  transition: all 0.7s ease-in-out;\n  opacity: 0;\n  font-size: 25px;\n}\n\n@media screen and (max-width: 426px) {\n  .alert[_ngcontent-%COMP%] {\n    width: 65%;\n    top: 23%;\n    left: 5%;\n  }\n}\n\n@media screen and (min-width: 427px) and (max-width: 769px) {\n  .alert[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n\n.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(1.25rem);\n}\n\n.basket_img[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n@media screen and (max-width: 426px) {\n  .basket_img[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n\n.basket_name[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 22px;\n  margin-top: 0;\n  margin-left: 2%;\n}\n\n@media screen and (max-width: 426px) {\n  .basket_name[_ngcontent-%COMP%] {\n    display: flex;\n    font-size: 14px;\n    line-height: 20px;\n  }\n}\n\n@media screen and (min-width: 427px) and (max-width: 769px) {\n  .basket_name[_ngcontent-%COMP%] {\n    line-height: 25px;\n  }\n}\n\n.fa[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 50%;\n  cursor: pointer;\n  color: black;\n}\n\n@media screen and (max-width: 426px) {\n  .fa[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n}\n\n.basket_text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-left: 4%;\n}\n\n@media screen and (max-width: 426px) {\n  .basket_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n.basket_price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n}\n\n@media screen and (max-width: 426px) {\n  .basket_price[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n.align[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 14px;\n  margin-left: 2%;\n}\n\n@media screen and (max-width: 426px) {\n  .align[_ngcontent-%COMP%] {\n    line-height: 3px;\n  }\n}\n\n.ic[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.basket[_ngcontent-%COMP%] {\n  width: 10%;\n  margin-top: 5%;\n}\n\n.laberBreadcrumb[_ngcontent-%COMP%] {\n  padding-top: 7%;\n  display: block;\n  width: 100%;\n}\n\n@media screen and (max-width: 426px) {\n  .laberBreadcrumb[_ngcontent-%COMP%] {\n    padding-top: 17%;\n    font-size: 12px;\n  }\n}\n\n@media screen and (min-width: 427px) and (max-width: 768px) {\n  .laberBreadcrumb[_ngcontent-%COMP%] {\n    padding-top: 15%;\n  }\n}\n\n#wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n#wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  display: flex;\n  border: none;\n}\n\n#wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-size: 11px;\n  list-style: outside none none;\n  padding: 0 15px;\n  position: relative;\n}\n\n#wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000;\n  display: flex;\n  font-size: 13px;\n  line-height: 40px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n  transition: all 300ms ease;\n  text-decoration: none;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"/\";\n  color: #343434;\n  font-size: 13px;\n  left: -2px;\n  position: absolute;\n  line-height: 40px;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  background-color: none;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  border-radius: 0.25rem;\n  background-color: white;\n  margin-left: 3%;\n}\n\n.fa-arrow-left[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: larger;\n}\n\n@media screen and (max-width: 426px) {\n  .fa-arrow-left[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    font-size: smaller;\n    margin-left: 10px;\n  }\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  font-size: 22px;\n  min-width: 50px;\n}\n\n@media screen and (max-width: 426px) {\n  .mat-button[_ngcontent-%COMP%] {\n    min-width: 30px;\n    font-size: 16px;\n  }\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 35px;\n  width: 16px;\n}\n\n.mat-icon[_ngcontent-usa-c103][_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 26px;\n  width: 4px;\n}\n\n@media screen and (max-width: 426px) {\n  .material-icons[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .mat-icon[_ngcontent-%COMP%] {\n    height: 24px;\n    width: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0MsV0FBQTtBQUNMOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FBQUo7O0FBQ0k7RUFMSjtJQU1RLFVBQUE7RUFFTjtBQUNGOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBRUo7O0FBREk7RUFSSjtJQVNRLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQUlOO0FBQ0Y7O0FBRkE7RUFFSSxjQUFBO0VBQ0Esc0JBQUE7RUFFQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0FBSUo7O0FBSEk7RUFGSjtJQUdRLFlBQUE7SUFDQSxVQUFBO0VBTU47QUFDRjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFPSjs7QUFOSTtFQUpKO0lBS1Esc0JBQUE7RUFTTjtBQUNGOztBQVBBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVUE7O0FBVEE7RUFIQTtJQUlJLHNCQUFBO0VBWUY7QUFDRjs7QUFWQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQWFKOztBQVpJO0VBSEo7SUFJUSxVQUFBO0lBQ0EsZ0JBQUE7RUFlTjtBQUNGOztBQVhJO0VBREo7SUFFUSxlQUFBO0lBQ0EsZUFBQTtFQWVOO0FBQ0Y7O0FBYkE7RUFDSSxVQUFBO0FBZ0JKOztBQWZJO0VBRko7SUFHUSxXQUFBO0VBa0JOO0FBQ0Y7O0FBaEJBO0VBQ0ksWUFBQTtBQW1CSjs7QUFkRTtFQUhGO0lBSUksaUJBQUE7RUFrQkY7QUFDRjs7QUFmQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWtCQTs7QUFoQkE7RUFDSSxnQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxr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OztBQTlFQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaUZKOztBQS9FQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBa0ZKOztBQTlFQTtFQUNJO0lBQ0ksZUFBQTtFQWlGTjs7RUEvRUM7SUFDQyxZQUFBO0lBQ0EsV0FBQTtFQWtGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuLmNhcmQtbWFpbntcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmltZ19hcnJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDE3JTtcclxuICAgIGhlaWdodDogNzMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogNzYlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgIH1cclxufVxyXG4uaW1nX2ZpcnN0e1xyXG4gICAgLy8gaGVpZ2h0OiAzMiU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbWd7XHJcbiAgICBoZWlnaHQ6IDMyJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMiU7XHJcbiAgICAgIH1cclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXgtd2lkdGg6ICAxMDAlO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbn1cclxuLmltYWdlcy1jb250YWluZXJ7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG4ucHJvZF9kZXRhaWxze1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcblxyXG4gICAgICB9XHJcbn1cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxufVxyXG4uZmx1aWRfaW1ne1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxufVxyXG4uaW1nX3N0eWxle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmg0e1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiBcclxufVxyXG4uc3R5bGV7XHJcbmJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbnVsLCBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxubGkge1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1tYXRjaC1wYXJlbnQ7XHJcbn1cclxuLmlucHV0LXJhZGlvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDogNTclO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiA0JTtcclxuICAgIGhlaWdodDogNiU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG5cclxufVxyXG5zcGFue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuXHJcbn1cclxuLnNwYW57XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG59XHJcbi5yYWRpby1sYWJlbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTclO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbn1cclxucHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWZcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzowXHJcbn1cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbn1cclxuLnByb2R1Y3RfX2J0bi1jb3VudCwgYnV0dG9ue1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEyJTtcclxuICAgICAgfVxyXG59XHJcbi50ZXh0X2J0bntcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7ICAgICAgICBcclxuICAgICAgfVxyXG59XHJcbi5wcm9kdWN0X19pbnB1dCB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZlxyXG4gIH1cclxuLmRlc2NyaXB0aW9uX3AsIC5yYWRpby1sYWJlbCwgLnByb2R1Y3QtaW5wdXR7XHJcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBpbWdbdGFiaW5kZXg9XCIwXCJdIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgaW1nW3RhYmluZGV4PVwiMFwiXTpmb2N1cyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG1hcmdpbi10b3A6IDAgO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDk5JTtcclxuICAgIG1heC1oZWlnaHQ6IDc4JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICMwMDAsIDAgMCAwIDEwMDBweCByZ2JhKDIxMCwyMTAsMjEwLC40KTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgaW1nW3RhYmluZGV4PVwiMFwiXTpmb2N1cywgIFxyXG4gIGltZ1t0YWJpbmRleD1cIjBcIl06Zm9jdXMgfiAqIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuYWxlcnQgIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogIGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICB0b3A6IDIzJTtcclxuICAgICAgICBsZWZ0OiA1JTsgICAgICBcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDI3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudmlzaWJsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuMjVyZW0pO1xyXG4gIH1cclxuICAuYmFza2V0X2ltZ3tcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5iYXNrZXRfbmFtZXtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQyN3B4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgLmZhe1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDsgICAgICB9XHJcbiAgfVxyXG4gIC5iYXNrZXRfdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gIH1cclxuICAuYmFza2V0X3ByaWNle1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLmFsaWdue1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogM3B4O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5pY3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmJhc2tldHtcclxuICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIC5sYWJlckJyZWFkY3J1bWIge1xyXG4gICAgcGFkZGluZy10b3A6IDclO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE3JTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTUlO1xyXG4gICAgfVxyXG59XHJcbiN3cmFwcGVyIC5icmVhZGNydW1iIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4jd3JhcHBlciAuYnJlYWRjcnVtYiBvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5icmVhZGNydW1iIG9sIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4jd3JhcHBlciAuYnJlYWRjcnVtYiBsaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uYnJlYWRjcnVtYiBvbCBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLmJyZWFkY3J1bWIgb2wgbGkge1xyXG4gICAgLy8gY29sb3I6ICM5ZjlmOWY7XHJcbiAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGlzdC1zdHlsZTogb3V0c2lkZSBub25lIG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI3dyYXBwZXIgLmJyZWFkY3J1bWIgbGkgYSB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uYnJlYWRjcnVtYiBvbCBsaSBhIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iIG9sIGxpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIi9cIjtcclxuICAgIGNvbG9yOiAjMzQzNDM0O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGVmdDogLTJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5icmVhZGNydW1iIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcbi8vIC5sYWJlckJyZWFkY3J1bWJ7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogNyU7XHJcbi8vIH1cclxuLmZhLWFycm93LWxlZnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG59XHJcbi5tYXQtYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbn1cclxuLm1hdC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxufVxyXG4ubWF0LWljb25bX25nY29udGVudC11c2EtYzEwM10ge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgIH1cclxuICAgLm1hdC1pY29uIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG59XHJcbiAgICBcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.scss']
            }]
    }], function () { return [{ type: _shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.checkLogin();
    }
    checkLogin() {
        if (this.auth.isLogin()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/models/category.models.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/category.models.ts ***!
  \**************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/shared/models/orders.models.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/orders.models.ts ***!
  \************************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
class Order {
    constructor(id, userName, userPhone, userAdress, ordersDetails, totalPayment, date, userComment) {
        this.id = id;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userAdress = userAdress;
        this.ordersDetails = ordersDetails;
        this.totalPayment = totalPayment;
        this.date = date;
        this.userComment = userComment;
    }
}


/***/ }),

/***/ "./src/app/shared/models/product.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/product.model.ts ***!
  \************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(id, category, name, description, price, count = 1, image, size) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.description = description;
        this.price = price;
        this.count = count;
        this.image = image;
        this.size = size;
    }
}


/***/ }),

/***/ "./src/app/shared/pipes/carrency.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/carrency.pipe.ts ***!
  \***********************************************/
/*! exports provided: CarrencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrencyPipe", function() { return CarrencyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CarrencyPipe {
    transform(value, ...args) {
        return null;
    }
}
CarrencyPipe.ɵfac = function CarrencyPipe_Factory(t) { return new (t || CarrencyPipe)(); };
CarrencyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "carrency", type: CarrencyPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrencyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'carrency'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthService {
    constructor(afAuth, firestore, router) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.router = router;
    }
    isLogin() {
        if (localStorage.getItem('user')) {
            return true;
        }
        return false;
    }
    signUp(email, password) {
        this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((userResponse) => {
            const user = {
                id: userResponse.user.uid,
                userName: userResponse.user.email,
                role: 'user'
            };
            this.firestore.collection('users').add(user)
                .then(u => {
                u.get().then(val => {
                    this.currentUser = val.data();
                    this.router.navigate(['/']);
                });
            })
                .catch(err => {
                console.log('Add to firestore', err);
            });
        })
            .catch(err => {
            console.log('Create user', err);
        });
    }
    login(email, password) {
        console.log(email, password);
        this.afAuth.signInWithEmailAndPassword(email, password)
            .then(user => {
            this.firestore.collection('users').ref.where('userName', '==', user.user.email)
                .onSnapshot(snap => {
                snap.forEach(userRef => {
                    this.currentUser = userRef.data();
                    if (userRef.data().role !== 'admin') {
                        this.router.navigate(['/']);
                    }
                    else {
                        localStorage.setItem('user', JSON.stringify(this.currentUser));
                        this.router.navigate(['/admin']);
                    }
                });
            });
        })
            .catch(err => {
            console.log(err);
        });
    }
    logOut() {
        this.afAuth.signOut()
            .then(() => {
            this.currentUser = null;
            localStorage.removeItem('user');
            this.router.navigate(['/login']);
        })
            .catch(err => {
            console.log(err);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/categories.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/categories.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class CategoriesService {
    // dataFromFirebase : Array<ICategory> = [];
    constructor(firestore) {
        this.firestore = firestore;
    }
    addFirebaseCategory(category) {
        return this.firestore.collection('categories').doc(category.id).set(Object.assign({}, category));
    }
    getFirebaseCategories() {
        return this.firestore.collection('categories').snapshotChanges();
    }
    deleteFirebaseCategory(id, category) {
        return this.firestore.collection('categories').doc(category.id).delete();
    }
    updateCategory(category) {
        return this.firestore.firestore.collection('categories').doc(category.id).update(Object.assign({}, category));
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/orders.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/orders.service.ts ***!
  \***************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");




class OrdersService {
    constructor(firestore) {
        this.firestore = firestore;
        this.basket = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    addFirebaseOrder(order) {
        return this.firestore
            .collection('orders')
            .doc(order.id.toString())
            .set(Object.assign({}, order))
            .then(() => console.log('order added'))
            .catch((error) => console.log(error));
    }
    getFirebaseOrders() {
        return this.firestore.collection('orders').snapshotChanges();
    }
    deleteFirebaseOrder(order) {
        return this.firestore.collection('orders').doc(order.id).delete();
    }
    updateOrderInfo(order) {
        return this.firestore
            .collection('users')
            .doc(this.userID)
            .collection('orders')
            .doc(order.id)
            .set(Object.assign({}, order));
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/products.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/products.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class ProductsService {
    // dataFromFirebase : Array<IProduct> = [];
    constructor(firestore) {
        this.firestore = firestore;
    }
    addFirebaseProduct(product) {
        return this.firestore.firestore.collection('product').doc(product.id).set(Object.assign({}, product)).then(() => {
        });
    }
    getFirebaseProduct() {
        return this.firestore.collection('product').snapshotChanges();
    }
    updateFirebaseProduct(product) {
        return this.firestore.firestore.collection('product').doc(product.id).update(Object.assign({}, product));
    }
    deleteFirebaseProduct(id, product) {
        return this.firestore.collection('product').doc(product.id).delete();
    }
    getOneFirebaseProduct(id) {
        return this.firestore.collection('product').doc(id).get().toPromise();
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCiskewRCs3-5_JqlbHZz1pUnf_v2KPcfM",
        authDomain: "kelton-project.firebaseapp.com",
        databaseURL: "https://kelton-project.firebaseio.com",
        projectId: "kelton-project",
        storageBucket: "kelton-project.appspot.com",
        messagingSenderId: "481177495742",
        appId: "1:481177495742:web:3b013dd5d33a26b7ead6ef"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Користувач\Desktop\Kelton_proj\KeltonProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map