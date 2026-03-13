(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/e8N":
/*!******************************************************!*\
  !*** ./src/app/buy-product/buy-product.component.ts ***!
  \******************************************************/
/*! exports provided: BuyProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyProductComponent", function() { return BuyProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cart_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/cart-state.service */ "Z1Xf");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function BuyProductComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Full name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuyProductComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Full address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuyProductComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuyProductComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter exactly 10 digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuyProductComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BuyProductComponent_tr_48_Template_select_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const product_r9 = ctx.$implicit; const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onQuantityChanged(_r10.value, product_r9.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r9.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r9.productDiscountedPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.getQuantityForProduct(product_r9.productId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.getCalculatedTotal(product_r9.productId, product_r9.productDiscountedPrice), " ");
} }
class BuyProductComponent {
    constructor(activatedRoute, cartStateService, productService, router, injector) {
        this.activatedRoute = activatedRoute;
        this.cartStateService = cartStateService;
        this.productService = productService;
        this.router = router;
        this.injector = injector;
        this.isSingleProductCheckout = '';
        this.productDetails = [];
        this.isSubmitting = false;
        this.orderDetails = {
            fullName: '',
            fullAddress: '',
            contactNumber: '',
            alternateContactNumber: '',
            transactionId: '',
            orderProductQuantityList: []
        };
    }
    ngOnInit() {
        this.productDetails = this.activatedRoute.snapshot.data['productDetails'];
        this.isSingleProductCheckout = this.activatedRoute.snapshot.paramMap.get("isSingleProductCheckout");
        this.productDetails.forEach(x => this.orderDetails.orderProductQuantityList.push({
            productId: x.productId,
            quantity: this.isSingleProductCheckout === 'true' ? 1 : this.cartStateService.getCartQuantity(x.productId)
        }));
        console.log(this.productDetails);
        console.log(this.orderDetails);
    }
    placeOrder(orderForm) {
        if (!this.hasValidOrderDetails(orderForm)) {
            return;
        }
        const orderPayload = Object.assign(Object.assign({}, this.orderDetails), { contactNumber: `+91${this.orderDetails.contactNumber}` });
        this.productService.placeOrder(orderPayload, this.isSingleProductCheckout).subscribe((resp) => {
            console.log(resp);
            orderForm.reset();
            this.isSubmitting = false;
            const ngZone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]);
            ngZone.run(() => {
                this.router.navigate(["/orderConfirm"]);
            });
        }, (err) => {
            this.isSubmitting = false;
            console.log(err);
        });
    }
    getQuantityForProduct(productId) {
        const filteredProduct = this.orderDetails.orderProductQuantityList.filter((productQuantity) => productQuantity.productId === productId);
        return filteredProduct[0].quantity;
    }
    getCalculatedTotal(productId, productDiscountedPrice) {
        const filteredProduct = this.orderDetails.orderProductQuantityList.filter((productQuantity) => productQuantity.productId === productId);
        return filteredProduct[0].quantity * productDiscountedPrice;
    }
    onQuantityChanged(q, productId) {
        this.orderDetails.orderProductQuantityList.filter((orderProduct) => orderProduct.productId === productId)[0].quantity = q;
    }
    getCalculatedGrandTotal() {
        let grandTotal = 0;
        this.orderDetails.orderProductQuantityList.forEach((productQuantity) => {
            const price = this.productDetails.filter(product => product.productId === productQuantity.productId)[0].productDiscountedPrice;
            grandTotal = grandTotal + price * productQuantity.quantity;
        });
        return grandTotal;
    }
    createTransactionAndPlaceOrder(orderForm) {
        if (!this.hasValidOrderDetails(orderForm)) {
            return;
        }
        this.isSubmitting = true;
        let amount = this.getCalculatedGrandTotal();
        this.productService.createTransaction(amount).subscribe((response) => {
            console.log(response);
            this.openTransactionModal(response, orderForm);
        }, (error) => {
            this.isSubmitting = false;
            console.log(error);
        });
    }
    openTransactionModal(response, orderForm) {
        const options = {
            order_id: response.orderId,
            key: response.key,
            amount: response.amount,
            currency: response.currency,
            name: 'E-Commerce Application',
            description: 'Payment for your order',
            handler: (response) => {
                if (response != null && response.razorpay_payment_id != null) {
                    this.processResponse(response, orderForm);
                }
                else {
                    alert("Payment failed.");
                }
            },
            prefill: {
                name: this.orderDetails.fullName || 'Customer',
                contact: this.orderDetails.contactNumber ? `+91${this.orderDetails.contactNumber}` : ''
            },
            notes: {
                address: 'Online Shopping'
            },
            method: {
                upi: true,
                card: true,
                netbanking: true,
                wallet: true,
                emi: true,
                paylater: true
            },
            config: {
                display: {
                    blocks: {
                        upi: {
                            name: 'Pay using UPI',
                            instruments: [{ method: 'upi' }]
                        },
                        other: {
                            name: 'Other Payment Methods',
                            instruments: [
                                { method: 'card' },
                                { method: 'netbanking' },
                                { method: 'wallet' }
                            ]
                        }
                    },
                    sequence: ['block.upi', 'block.other'],
                    preferences: {
                        show_default_blocks: true
                    }
                }
            },
            theme: {
                color: '#F37254'
            }
        };
        const razorPayObject = new Razorpay(options);
        razorPayObject.open();
    }
    processResponse(resp, orderForm) {
        this.orderDetails.transactionId = resp.razorpay_payment_id;
        this.placeOrder(orderForm);
    }
    hasValidOrderDetails(orderForm) {
        const fullName = (this.orderDetails.fullName || '').trim();
        const fullAddress = (this.orderDetails.fullAddress || '').trim();
        const contactNumber = (this.orderDetails.contactNumber || '').trim();
        const contactNumberPattern = /^\d{10}$/;
        this.orderDetails.fullName = fullName;
        this.orderDetails.fullAddress = fullAddress;
        this.orderDetails.contactNumber = contactNumber;
        if (!fullName || !fullAddress || !contactNumberPattern.test(contactNumber)) {
            orderForm.form.markAllAsTouched();
            this.isSubmitting = false;
            return false;
        }
        return true;
    }
    onContactNumberChange(value) {
        this.orderDetails.contactNumber = (value || '').replace(/\D/g, '').slice(0, 10);
    }
}
BuyProductComponent.ɵfac = function BuyProductComponent_Factory(t) { return new (t || BuyProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_state_service__WEBPACK_IMPORTED_MODULE_2__["CartStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
BuyProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyProductComponent, selectors: [["app-buy-product"]], decls: 56, vars: 11, consts: [[1, "container", "mt-5"], [1, "card", "p-3"], [1, "row", "g-4"], [1, "col-12", "col-lg-6"], [3, "ngSubmit"], ["orderForm", "ngForm"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "Full name", "name", "fullName", "required", "", 3, "ngModel", "ngModelChange"], ["fullNameRef", "ngModel"], [4, "ngIf"], ["matInput", "", "placeholder", "Full address", "name", "fullAddress", "required", "", 3, "ngModel", "ngModelChange"], ["fullAddressRef", "ngModel"], ["matPrefix", ""], ["matInput", "", "placeholder", "10-digit number", "name", "contactNumber", "required", "", "pattern", "^\\d{10}$", "maxlength", "10", "minlength", "10", "inputmode", "numeric", 3, "ngModel", "ngModelChange"], ["contactNumberRef", "ngModel"], ["matInput", "", "placeholder", "Alternate contact number", "name", "alternateContactNumber", 3, "ngModel", "ngModelChange"], ["align", "right"], ["type", "submit", "mat-stroked-button", "", "color", "primary", 3, "disabled"], [1, "table-responsive-container"], [1, "table"], [1, "thead"], [1, "tbody"], [4, "ngFor", "ngForOf"], [1, "form-select", 3, "ngModel", "change"], ["quantity", ""], ["value", "1"], ["value", "2"], ["value", "3"]], template: function BuyProductComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BuyProductComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.createTransactionAndPlaceOrder(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuyProductComponent_Template_input_ngModelChange_9_listener($event) { return ctx.orderDetails.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BuyProductComponent_mat_error_11_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuyProductComponent_Template_input_ngModelChange_15_listener($event) { return ctx.orderDetails.fullAddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BuyProductComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+91\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuyProductComponent_Template_input_ngModelChange_23_listener($event) { return ctx.onContactNumberChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BuyProductComponent_mat_error_25_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BuyProductComponent_mat_error_26_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Alternate contact number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuyProductComponent_Template_input_ngModelChange_30_listener($event) { return ctx.orderDetails.alternateContactNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Place Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "thead", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, BuyProductComponent_tr_48_Template, 16, 4, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.orderDetails.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.touched || _r0.submitted) && (_r1.errors == null ? null : _r1.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.orderDetails.fullAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.touched || _r0.submitted) && (_r3.errors == null ? null : _r3.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.orderDetails.contactNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.touched || _r0.submitted) && (_r5.errors == null ? null : _r5.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.touched || _r0.submitted) && (_r5.errors == null ? null : _r5.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.orderDetails.alternateContactNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCalculatedGrandTotal());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: [".table-responsive-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow-x: auto;\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n    .table[_ngcontent-%COMP%] {\r\n        min-width: 520px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5LXByb2R1Y3QvYnV5LXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYnV5LXByb2R1Y3QvYnV5LXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yZXNwb25zaXZlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICBtaW4td2lkdGg6IDUyMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buy-product',
                templateUrl: './buy-product.component.html',
                styleUrls: ['./buy-product.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_cart_state_service__WEBPACK_IMPORTED_MODULE_2__["CartStateService"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pesar\OneDrive\Documents\projectss\Youtube\E-Commerce app\e-commerce-frontend-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "VITL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class RegisterComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    register(registerForm) {
        console.log(registerForm.value);
        this.userService.register(registerForm.value).subscribe((response) => {
            this.router.navigate(['/login']);
        }, (error) => {
            console.log(error);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 31, vars: 0, consts: [[1, "container", "mt-5"], [1, "card", "register-card"], [3, "ngSubmit"], ["registerForm", "ngForm"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "ngModel", "", "name", "userName", "id", "userName", "placeholder", "Username"], ["matInput", "", "ngModel", "", "name", "userFirstName", "id", "userFirstName", "placeholder", "Firstname"], ["matInput", "", "ngModel", "", "name", "userLastName", "id", "userLastName", "placeholder", "Lastname"], ["matInput", "", "ngModel", "", "name", "userPassword", "id", "userPassword", "placeholder", "Password"], [1, "text-center"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "w-100"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.register(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Firstname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Firstname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".register-card[_ngcontent-%COMP%] {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "VITL");



class UserComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.forUser();
    }
    forUser() {
        this.userService.forUser().subscribe((response) => {
            console.log(response);
            this.message = response;
        }, (error) => {
            console.log(error);
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 6, vars: 1, consts: [[1, "container", "mt-5"], [1, "card", "text-center", 2, "padding", "20px", "color", "red"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You are User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "6rtO":
/*!********************************************************!*\
  !*** ./src/app/active-users/active-users.component.ts ***!
  \********************************************************/
/*! exports provided: ActiveUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveUsersComponent", function() { return ActiveUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_presence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/presence.service */ "mV+E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ActiveUsersComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function ActiveUsersComponent_table_13_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.formatLastSeen(user_r5.lastSeenIso));
} }
function ActiveUsersComponent_table_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Seen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ActiveUsersComponent_table_13_tr_14_Template, 13, 4, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.onlineUsers);
} }
function ActiveUsersComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No users online");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ActiveUsersComponent {
    constructor(presenceService) {
        this.presenceService = presenceService;
        this.onlineUsersCount = 0;
        this.onlineUsers = [];
        this.isLoading = false;
        this.errorMessage = '';
        this.refreshSubscription = null;
    }
    ngOnInit() {
        this.loadPresenceData();
        this.refreshSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(15000).subscribe(() => this.loadPresenceData());
    }
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
            this.refreshSubscription = null;
        }
    }
    loadPresenceData() {
        this.isLoading = true;
        this.errorMessage = '';
        this.presenceService.getOnlineCount(60).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            this.errorMessage = 'Unable to load online users count.';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ onlineUsers: 0 });
        })).subscribe((countResponse) => {
            this.onlineUsersCount = countResponse.onlineUsers || 0;
        });
        this.presenceService.getOnlineUsers(60).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            this.errorMessage = this.errorMessage || 'Unable to load online users list.';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        })).subscribe((users) => {
            this.onlineUsers = users;
            this.isLoading = false;
        });
    }
    formatLastSeen(lastSeenIso) {
        const parsedDate = new Date(lastSeenIso);
        if (Number.isNaN(parsedDate.getTime())) {
            return lastSeenIso;
        }
        return parsedDate.toLocaleString();
    }
}
ActiveUsersComponent.ɵfac = function ActiveUsersComponent_Factory(t) { return new (t || ActiveUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_presence_service__WEBPACK_IMPORTED_MODULE_3__["PresenceService"])); };
ActiveUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActiveUsersComponent, selectors: [["app-active-users"]], decls: 16, vars: 5, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-0"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [1, "summary-card", "mb-3"], [1, "summary-label"], [1, "summary-value"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [1, "table-card"], ["class", "table table-hover mb-0", 4, "ngIf", "ngIfElse"], ["emptyState", ""], [1, "alert", "alert-danger", "py-2", "mb-3"], [1, "table", "table-hover", "mb-0"], [4, "ngFor", "ngForOf"], [1, "status-dot"], [1, "status-text"], [1, "empty-state"]], template: function ActiveUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Active Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActiveUsersComponent_Template_button_click_4_listener() { return ctx.loadPresenceData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Online Users Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ActiveUsersComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActiveUsersComponent_table_13_Template, 15, 1, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ActiveUsersComponent_ng_template_14_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineUsersCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onlineUsers.length > 0)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".summary-card[_ngcontent-%COMP%] {\r\n  border: 1px solid #e4e7ec;\r\n  border-radius: 12px;\r\n  background: #ffffff;\r\n  padding: 16px 20px;\r\n}\r\n\r\n.summary-label[_ngcontent-%COMP%] {\r\n  color: #5f6c7b;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.summary-value[_ngcontent-%COMP%] {\r\n  color: #1565c0;\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  line-height: 1.2;\r\n}\r\n\r\n.table-card[_ngcontent-%COMP%] {\r\n  border: 1px solid #e4e7ec;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n  background: #fff;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #455a64;\r\n}\r\n\r\n.status-dot[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  background: #2e7d32;\r\n  margin-right: 8px;\r\n}\r\n\r\n.status-text[_ngcontent-%COMP%] {\r\n  color: #2e7d32;\r\n  font-weight: 600;\r\n}\r\n\r\n.empty-state[_ngcontent-%COMP%] {\r\n  border: 1px dashed #cfd8dc;\r\n  border-radius: 12px;\r\n  padding: 24px;\r\n  text-align: center;\r\n  color: #607d8b;\r\n  margin-top: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZlLXVzZXJzL2FjdGl2ZS11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWN0aXZlLXVzZXJzL2FjdGl2ZS11c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1bW1hcnktY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTdlYztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG59XHJcblxyXG4uc3VtbWFyeS1sYWJlbCB7XHJcbiAgY29sb3I6ICM1ZjZjN2I7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnN1bW1hcnktdmFsdWUge1xyXG4gIGNvbG9yOiAjMTU2NWMwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi50YWJsZS1jYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlN2VjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4udGFibGUgdGgge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0NTVhNjQ7XHJcbn1cclxuXHJcbi5zdGF0dXMtZG90IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMmU3ZDMyO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uc3RhdHVzLXRleHQge1xyXG4gIGNvbG9yOiAjMmU3ZDMyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjZmQ4ZGM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzYwN2Q4YjtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-active-users',
                templateUrl: './active-users.component.html',
                styleUrls: ['./active-users.component.css'],
            }]
    }], function () { return [{ type: _services_presence_service__WEBPACK_IMPORTED_MODULE_3__["PresenceService"] }]; }, null); })();


/***/ }),

/***/ "7I07":
/*!*************************************************!*\
  !*** ./src/app/buy-product-resolver.service.ts ***!
  \*************************************************/
/*! exports provided: BuyProductResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyProductResolverService", function() { return BuyProductResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/product.service */ "szdb");
/* harmony import */ var _image_processing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-processing.service */ "yJC3");





class BuyProductResolverService {
    constructor(productService, imageProcessingService) {
        this.productService = productService;
        this.imageProcessingService = imageProcessingService;
    }
    resolve(route, state) {
        const id = route.paramMap.get("id");
        const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout");
        return this.productService.getProductDetails(isSingleProductCheckout, id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x, i) => x.map((product) => this.imageProcessingService.createImages(product))));
    }
}
BuyProductResolverService.ɵfac = function BuyProductResolverService_Factory(t) { return new (t || BuyProductResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_image_processing_service__WEBPACK_IMPORTED_MODULE_3__["ImageProcessingService"])); };
BuyProductResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BuyProductResolverService, factory: BuyProductResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyProductResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _image_processing_service__WEBPACK_IMPORTED_MODULE_3__["ImageProcessingService"] }]; }, null); })();


/***/ }),

/***/ "8luB":
/*!************************************************************************************!*\
  !*** ./src/app/show-product-images-dialog/show-product-images-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: ShowProductImagesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProductImagesDialogComponent", function() { return ShowProductImagesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ShowProductImagesDialogComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fileHandle_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", fileHandle_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ShowProductImagesDialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.receiveImages();
    }
    receiveImages() {
        console.log(this.data);
    }
}
ShowProductImagesDialogComponent.ɵfac = function ShowProductImagesDialogComponent_Factory(t) { return new (t || ShowProductImagesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ShowProductImagesDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowProductImagesDialogComponent, selectors: [["app-show-product-images-dialog"]], decls: 2, vars: 1, consts: [["cols", "4", "rowHeight", "1:1"], [4, "ngFor", "ngForOf"], ["width", "150px", "height", "150px", 3, "src"]], template: function ShowProductImagesDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowProductImagesDialogComponent_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.images);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"]], styles: ["mat-grid-tile[_ngcontent-%COMP%]{\r\n    border: 1px solid #eee;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1wcm9kdWN0LWltYWdlcy1kaWFsb2cvc2hvdy1wcm9kdWN0LWltYWdlcy1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctcHJvZHVjdC1pbWFnZXMtZGlhbG9nL3Nob3ctcHJvZHVjdC1pbWFnZXMtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowProductImagesDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-product-images-dialog',
                templateUrl: './show-product-images-dialog.component.html',
                styleUrls: ['./show-product-images-dialog.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _image_processing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-processing.service */ "yJC3");
/* harmony import */ var _services_cart_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/cart-state.service */ "Z1Xf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function HomeComponent_article_2_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", p_r2.productActualPrice, "");
} }
function HomeComponent_article_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_article_2_span_11_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_article_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const p_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showProductDetails(p_r2.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_article_2_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const p_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addToCart(p_r2.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Product: ", p_r2.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r2.productImages[0] == null ? null : p_r2.productImages[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r2.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r2.productDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", p_r2.productDiscountedPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r2.productActualPrice > p_r2.productDiscountedPrice);
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.loadMoreProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(productService, imageProcessingService, cartStateService, activatedRoute, router) {
        this.productService = productService;
        this.imageProcessingService = imageProcessingService;
        this.cartStateService = cartStateService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageNumber = 0;
        this.productDetails = [];
        this.currentSearchKey = '';
        this.showLoadButton = false;
    }
    ngOnInit() {
        this.activatedRoute.queryParamMap.subscribe((params) => {
            this.currentSearchKey = (params.get('search') || '').trim();
            this.pageNumber = 0;
            this.productDetails = [];
            this.getAllProducts(this.currentSearchKey);
        });
    }
    searchByKeyword(searchKeyword) {
        this.currentSearchKey = (searchKeyword || '').trim();
        this.pageNumber = 0;
        this.productDetails = [];
        this.getAllProducts(this.currentSearchKey);
    }
    getAllProducts(searchKey = "") {
        this.productService.getAllProducts(this.pageNumber, searchKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x, i) => x.map((product) => this.imageProcessingService.createImages(product))))
            .subscribe((resp) => {
            console.log(resp);
            if (resp.length == 12) {
                this.showLoadButton = true;
            }
            else {
                this.showLoadButton = false;
            }
            resp.forEach(p => this.productDetails.push(p));
            // this.productDetails=resp;
        }, (error) => {
            console.log(error);
        });
    }
    loadMoreProduct() {
        this.pageNumber = this.pageNumber + 1;
        this.getAllProducts(this.currentSearchKey);
    }
    showProductDetails(productId) {
        this.router.navigate(['/productViewDetails', { productId: productId }]);
    }
    addToCart(productId) {
        this.productService.addToCart(productId).subscribe((response) => {
            console.log(response);
            this.cartStateService.incrementCartCount();
        }, (error) => {
            console.log(error);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_processing_service__WEBPACK_IMPORTED_MODULE_3__["ImageProcessingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_state_service__WEBPACK_IMPORTED_MODULE_4__["CartStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "product-grid"], ["class", "product-card", 4, "ngFor", "ngForOf"], ["class", "text-center mt-5 pb-space", 4, "ngIf"], [1, "mt-5", "pb-space"], [1, "product-card"], [1, "card-image-wrap"], [1, "product-image", 3, "src", "alt"], [1, "card-content"], [1, "product-name"], [1, "product-short-description"], [1, "price-row"], [1, "current-price"], ["class", "old-price", 4, "ngIf"], [1, "card-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "old-price"], [1, "text-center", "mt-5", "pb-space"], ["type", "button", 1, "load-more-btn", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_article_2_Template, 17, 6, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoadButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["[_nghost-%COMP%] {\n    --card-bg: #ffffff;\n    --page-bg: #f4f6f9;\n    --text-main: #1b1f2a;\n    --text-muted: #6a7286;\n    --line: #e7ebf3;\n    --accent: #0f766e;\n    --accent-hover: #0b5f59;\n    --btn-dark: #1f2937;\n    --btn-dark-hover: #111827;\n    --shadow-soft: 0 4px 14px rgba(16, 24, 40, 0.06), 0 1px 2px rgba(16, 24, 40, 0.04);\n    --shadow-hover: 0 10px 24px rgba(16, 24, 40, 0.1), 0 2px 6px rgba(16, 24, 40, 0.06);\n}\n\n.container[_ngcontent-%COMP%] {\n    max-width: 1320px;\n    margin: 0 auto;\n    padding: 46px 22px 10px;\n    background: var(--page-bg);\n}\n\n.product-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 22px;\n    margin: 0 0 20px;\n}\n\n.product-card[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    background: var(--card-bg);\n    border: 1px solid var(--line);\n    border-radius: 16px;\n    overflow: hidden;\n    box-shadow: var(--shadow-soft);\n    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n    border-color: #dce4ef;\n    box-shadow: var(--shadow-hover);\n}\n\n.card-image-wrap[_ngcontent-%COMP%] {\n    height: 220px;\n    background: linear-gradient(145deg, #eef4ff, #f3f8f8);\n    border-bottom: 1px solid var(--line);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 14px;\n}\n\n.product-image[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    transition: transform 0.25s ease;\n}\n\n.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%] {\n    transform: scale(1.03);\n}\n\n.card-content[_ngcontent-%COMP%] {\n    padding: 18px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.product-name[_ngcontent-%COMP%] {\n    margin: 0;\n    color: var(--text-main);\n    font-size: 1rem;\n    font-weight: 700;\n    line-height: 1.35;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n}\n\n.product-short-description[_ngcontent-%COMP%] {\n    margin: 10px 0 0;\n    min-height: calc(1.5em * 2);\n    color: var(--text-muted);\n    font-size: 0.88rem;\n    line-height: 1.5;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n}\n\n.price-row[_ngcontent-%COMP%] {\n    margin-top: auto;\n    padding-top: 12px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.current-price[_ngcontent-%COMP%] {\n    color: var(--accent);\n    font-size: 1.06rem;\n    font-weight: 800;\n}\n\n.old-price[_ngcontent-%COMP%] {\n    color: #99a1b3;\n    text-decoration: line-through;\n    font-size: 0.88rem;\n    font-weight: 600;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n    margin-top: 12px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    min-height: 40px;\n    border-radius: 10px;\n    border: none;\n    font-size: 0.86rem;\n    font-weight: 700;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n    background: var(--accent);\n    color: #ffffff;\n    box-shadow: 0 8px 18px rgba(15, 118, 110, 0.24);\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n    background: var(--accent-hover);\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n    background: var(--btn-dark);\n    color: #ffffff;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n    background: var(--btn-dark-hover);\n}\n\n.load-more-btn[_ngcontent-%COMP%] {\n    min-height: 44px;\n    border: none;\n    border-radius: 12px;\n    padding: 0 24px;\n    background: var(--btn-dark);\n    color: #ffffff;\n    font-weight: 700;\n    box-shadow: var(--shadow-soft);\n    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;\n}\n\n.load-more-btn[_ngcontent-%COMP%]:hover {\n    background: var(--btn-dark-hover);\n    transform: translateY(-2px);\n    box-shadow: var(--shadow-hover);\n}\n\n.pb-space[_ngcontent-%COMP%] {\n    padding-bottom: 100px;\n}\n\n@media (max-width: 1199px) {\n    .product-grid[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n}\n\n@media (max-width: 991px) {\n    .container[_ngcontent-%COMP%] {\n        padding: 42px 16px 10px;\n    }\n\n    .product-grid[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .card-image-wrap[_ngcontent-%COMP%] {\n        height: 210px;\n    }\n}\n\n@media (max-width: 575px) {\n    .container[_ngcontent-%COMP%] {\n        padding: 36px 12px 10px;\n    }\n\n    .product-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n        gap: 16px;\n    }\n\n    .card-actions[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .card-image-wrap[_ngcontent-%COMP%] {\n        height: 200px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrRkFBa0Y7SUFDbEYsbUZBQW1GO0FBQ3ZGOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixnRkFBZ0Y7QUFDcEY7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxREFBcUQ7SUFDckQsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUZBQWlGO0FBQ3JGOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsaUZBQWlGO0FBQ3JGOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLGdEQUFnRDtJQUNwRDtBQUNKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxnREFBZ0Q7SUFDcEQ7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAtLWNhcmQtYmc6ICNmZmZmZmY7XG4gICAgLS1wYWdlLWJnOiAjZjRmNmY5O1xuICAgIC0tdGV4dC1tYWluOiAjMWIxZjJhO1xuICAgIC0tdGV4dC1tdXRlZDogIzZhNzI4NjtcbiAgICAtLWxpbmU6ICNlN2ViZjM7XG4gICAgLS1hY2NlbnQ6ICMwZjc2NmU7XG4gICAgLS1hY2NlbnQtaG92ZXI6ICMwYjVmNTk7XG4gICAgLS1idG4tZGFyazogIzFmMjkzNztcbiAgICAtLWJ0bi1kYXJrLWhvdmVyOiAjMTExODI3O1xuICAgIC0tc2hhZG93LXNvZnQ6IDAgNHB4IDE0cHggcmdiYSgxNiwgMjQsIDQwLCAwLjA2KSwgMCAxcHggMnB4IHJnYmEoMTYsIDI0LCA0MCwgMC4wNCk7XG4gICAgLS1zaGFkb3ctaG92ZXI6IDAgMTBweCAyNHB4IHJnYmEoMTYsIDI0LCA0MCwgMC4xKSwgMCAycHggNnB4IHJnYmEoMTYsIDI0LCA0MCwgMC4wNik7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTMyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDQ2cHggMjJweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmcpO1xufVxuXG4ucHJvZHVjdC1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcbiAgICBnYXA6IDIycHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbn1cblxuLnByb2R1Y3QtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zb2Z0KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yMnMgZWFzZSwgYm94LXNoYWRvdyAwLjIycyBlYXNlLCBib3JkZXItY29sb3IgMC4yMnMgZWFzZTtcbn1cblxuLnByb2R1Y3QtY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJvcmRlci1jb2xvcjogI2RjZTRlZjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctaG92ZXIpO1xufVxuXG4uY2FyZC1pbWFnZS13cmFwIHtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNlZWY0ZmYsICNmM2Y4ZjgpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTRweDtcbn1cblxuLnByb2R1Y3QtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xufVxuXG4ucHJvZHVjdC1jYXJkOmhvdmVyIC5wcm9kdWN0LWltYWdlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xufVxuXG4ucHJvZHVjdC1uYW1lIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3Qtc2hvcnQtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgbWluLWhlaWdodDogY2FsYygxLjVlbSAqIDIpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJpY2Utcm93IHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5jdXJyZW50LXByaWNlIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICBmb250LXNpemU6IDEuMDZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLm9sZC1wcmljZSB7XG4gICAgY29sb3I6ICM5OWExYjM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jYXJkLWFjdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYnRuIHtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi5idG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE4cHggcmdiYSgxNSwgMTE4LCAxMTAsIDAuMjQpO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ob3Zlcik7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tZGFyayk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tZGFyay1ob3Zlcik7XG59XG5cbi5sb2FkLW1vcmUtYnRuIHtcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tZGFyayk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc29mdCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuXG4ubG9hZC1tb3JlLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnRuLWRhcmstaG92ZXIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctaG92ZXIpO1xufVxuXG4ucGItc3BhY2Uge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC5wcm9kdWN0LWdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogNDJweCAxNnB4IDEwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgICB9XG5cbiAgICAuY2FyZC1pbWFnZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAzNnB4IDEycHggMTBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLmNhcmQtaW1hZ2Utd3JhcCB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _image_processing_service__WEBPACK_IMPORTED_MODULE_3__["ImageProcessingService"] }, { type: _services_cart_state_service__WEBPACK_IMPORTED_MODULE_4__["CartStateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
    production: false
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

/***/ "D5fd":
/*!********************************************!*\
  !*** ./src/app/product-resolve.service.ts ***!
  \********************************************/
/*! exports provided: ProductResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolveService", function() { return ProductResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/product.service */ "szdb");
/* harmony import */ var _image_processing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-processing.service */ "yJC3");






class ProductResolveService {
    constructor(productService, imageProcessingService) {
        this.productService = productService;
        this.imageProcessingService = imageProcessingService;
    }
    resolve(route, state) {
        const id = route.paramMap.get("productId");
        if (id) {
            //then we have to fetch details from backend
            return this.productService.getProductDetailsById(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(p => this.imageProcessingService.createImages(p)));
        }
        else {
            //return empty product obervable.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.getProductDetails());
        }
    }
    getProductDetails() {
        return {
            productId: null,
            productName: "",
            productDescription: "",
            productDiscountedPrice: 0,
            productActualPrice: 0,
            productImages: [],
        };
    }
}
ProductResolveService.ɵfac = function ProductResolveService_Factory(t) { return new (t || ProductResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_image_processing_service__WEBPACK_IMPORTED_MODULE_4__["ImageProcessingService"])); };
ProductResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductResolveService, factory: ProductResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _image_processing_service__WEBPACK_IMPORTED_MODULE_4__["ImageProcessingService"] }]; }, null); })();


/***/ }),

/***/ "EkQX":
/*!************************************************************************!*\
  !*** ./src/app/show-product-details/show-product-details.component.ts ***!
  \************************************************************************/
/*! exports provided: ShowProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProductDetailsComponent", function() { return ShowProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _show_product_images_dialog_show_product_images_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show-product-images-dialog/show-product-images-dialog.component */ "8luB");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _image_processing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-processing.service */ "yJC3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");















function ShowProductDetailsComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowProductDetailsComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", element_r19.productId, "");
} }
function ShowProductDetailsComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowProductDetailsComponent_td_30_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
} if (rf & 2) {
    const element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", element_r20.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r21.getFirstImage(element_r20), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ShowProductDetailsComponent_td_30_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowProductDetailsComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProductDetailsComponent_td_30_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const element_r20 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.showImages(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowProductDetailsComponent_td_30_img_2_Template, 1, 2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShowProductDetailsComponent_td_30_ng_template_3_Template, 2, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getFirstImage(element_r20))("ngIfElse", _r22);
} }
function ShowProductDetailsComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowProductDetailsComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r27.productName);
} }
function ShowProductDetailsComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowProductDetailsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r28.productDescription);
} }
function ShowProductDetailsComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowProductDetailsComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", element_r29.productDiscountedPrice, "");
} }
function ShowProductDetailsComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Original Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowProductDetailsComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", element_r30.productActualPrice, "");
} }
function ShowProductDetailsComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowProductDetailsComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProductDetailsComponent_td_45_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const element_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.uploadProductImage(element_r31.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upload Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProductDetailsComponent_td_45_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const element_r31 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.editProductDetails(element_r31.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProductDetailsComponent_td_45_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const element_r31 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.deleteProduct(element_r31.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowProductDetailsComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 46);
} }
function ShowProductDetailsComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 47);
} }
function ShowProductDetailsComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "inventory_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No products found for this search.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowProductDetailsComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProductDetailsComponent_div_49_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProductDetailsComponent_div_49_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r17.pageNumber === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Page ", ctx_r17.pageNumber + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r17.hasNextPage);
} }
function ShowProductDetailsComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "hourglass_top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading products...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShowProductDetailsComponent {
    constructor(productService, imagesDialog, imageProcessingService, router) {
        this.productService = productService;
        this.imagesDialog = imagesDialog;
        this.imageProcessingService = imageProcessingService;
        this.router = router;
        this.pageNumber = 0;
        this.pageSize = 12;
        this.searchKeyword = '';
        this.hasNextPage = false;
        this.isLoading = false;
        this.productDetails = [];
        this.displayedColumns = ['id', 'image', 'name', 'description', 'price', 'originalPrice', 'actions'];
    }
    ngOnInit() {
        this.getAllProducts();
    }
    onSearch() {
        this.pageNumber = 0;
        this.getAllProducts();
    }
    clearSearch() {
        this.searchKeyword = '';
        this.pageNumber = 0;
        this.getAllProducts();
    }
    getAllProducts() {
        this.isLoading = true;
        this.productService.getAllProducts(this.pageNumber, this.searchKeyword)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((x, i) => x.map((product) => this.imageProcessingService.createImages(product))))
            .subscribe((resp) => {
            this.productDetails = resp;
            this.hasNextPage = resp.length === this.pageSize;
            this.isLoading = false;
        }, (error) => {
            console.log(error);
            this.isLoading = false;
        });
    }
    previousPage() {
        if (this.pageNumber <= 0) {
            return;
        }
        this.pageNumber = this.pageNumber - 1;
        this.getAllProducts();
    }
    nextPage() {
        if (!this.hasNextPage) {
            return;
        }
        this.pageNumber = this.pageNumber + 1;
        this.getAllProducts();
    }
    deleteProduct(productId) {
        const pageHadSingleItem = this.productDetails.length === 1;
        this.productService.deleteProduct(productId).subscribe((resp) => {
            if (pageHadSingleItem && this.pageNumber > 0) {
                this.pageNumber = this.pageNumber - 1;
            }
            this.getAllProducts();
        }, (error) => {
            console.log(error);
        });
    }
    showImages(product) {
        this.imagesDialog.open(_show_product_images_dialog_show_product_images_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ShowProductImagesDialogComponent"], {
            data: {
                images: product.productImages
            },
            height: '500px',
            width: '800px'
        });
    }
    uploadProductImage(productId) {
        this.router.navigate(['/addNewProduct', { productId: productId }]);
    }
    editProductDetails(productId) {
        this.router.navigate(['/addNewProduct', { productId: productId }]);
    }
    getFirstImage(product) {
        if (!product || !product.productImages || product.productImages.length === 0) {
            return '';
        }
        return product.productImages[0].url;
    }
}
ShowProductDetailsComponent.ɵfac = function ShowProductDetailsComponent_Factory(t) { return new (t || ShowProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_processing_service__WEBPACK_IMPORTED_MODULE_5__["ImageProcessingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ShowProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowProductDetailsComponent, selectors: [["app-show-product-details"]], decls: 51, vars: 7, consts: [[1, "admin-products-page"], [1, "dashboard-header"], ["mat-raised-button", "", "color", "primary", "routerLink", "/addNewProduct", 1, "header-btn"], [1, "search-panel"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "name", "searchKey", "id", "searchKey", "placeholder", "Search by product name or description", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "search-actions"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "table-responsive-container"], ["mat-table", "", 1, "admin-product-table", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "id-cell", 4, "matCellDef"], ["matColumnDef", "image"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "class", "name-cell", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-cell", "", "class", "description-cell", 4, "matCellDef"], ["matColumnDef", "price"], ["mat-cell", "", "class", "price-cell", 4, "matCellDef"], ["matColumnDef", "originalPrice"], ["mat-cell", "", "class", "original-price-cell", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination-row", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", "", 1, "id-cell"], ["mat-cell", ""], ["type", "button", 1, "image-preview-btn", 3, "click"], [3, "src", "alt", 4, "ngIf", "ngIfElse"], ["noImage", ""], [3, "src", "alt"], [1, "no-image"], ["mat-cell", "", 1, "name-cell"], ["mat-cell", "", 1, "description-cell"], ["mat-cell", "", 1, "price-cell"], ["mat-cell", "", 1, "original-price-cell"], [1, "action-buttons"], ["type", "button", 1, "action-btn", "upload-btn", 3, "click"], ["type", "button", 1, "action-btn", "edit-btn", 3, "click"], ["type", "button", 1, "action-btn", "delete-btn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "pagination-row"], ["mat-stroked-button", "", "color", "primary", 3, "disabled", "click"], [1, "page-indicator"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [1, "loading-state"]], template: function ShowProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Manage catalog items, pricing, and media from one place.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Add Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Search products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowProductDetailsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.searchKeyword = $event; })("keyup.enter", function ShowProductDetailsComponent_Template_input_keyup_enter_15_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProductDetailsComponent_Template_button_click_17_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProductDetailsComponent_Template_button_click_21_listener() { return ctx.clearSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ShowProductDetailsComponent_th_26_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ShowProductDetailsComponent_td_27_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ShowProductDetailsComponent_th_29_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ShowProductDetailsComponent_td_30_Template, 5, 2, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ShowProductDetailsComponent_th_32_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ShowProductDetailsComponent_td_33_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ShowProductDetailsComponent_th_35_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ShowProductDetailsComponent_td_36_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ShowProductDetailsComponent_th_38_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ShowProductDetailsComponent_td_39_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ShowProductDetailsComponent_th_41_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ShowProductDetailsComponent_td_42_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ShowProductDetailsComponent_th_44_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ShowProductDetailsComponent_td_45_Template, 17, 0, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ShowProductDetailsComponent_tr_46_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ShowProductDetailsComponent_tr_47_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ShowProductDetailsComponent_div_48_Template, 5, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ShowProductDetailsComponent_div_49_Template, 7, 3, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ShowProductDetailsComponent_div_50_Template, 5, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchKeyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.productDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.productDetails.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && (ctx.productDetails.length > 0 || ctx.pageNumber > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatRow"]], styles: ["[_nghost-%COMP%] {\r\n    --panel-bg: #ffffff;\r\n    --panel-muted: #f7f9fc;\r\n    --line: #e6ebf2;\r\n    --text-main: #162033;\r\n    --text-soft: #5d6b82;\r\n    --accent: #0f766e;\r\n    --accent-2: #1d4ed8;\r\n    --danger: #dc2626;\r\n}\r\n\r\n.admin-products-page[_ngcontent-%COMP%] {\r\n    margin-top: 18px;\r\n    padding: 16px;\r\n    background: linear-gradient(180deg, #f4f8ff 0%, #eef3fb 100%);\r\n    border-radius: 18px;\r\n}\r\n\r\n.dashboard-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 12px;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.dashboard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: var(--text-main);\r\n    font-size: 1.45rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.dashboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 4px 0 0;\r\n    color: var(--text-soft);\r\n    font-size: 0.92rem;\r\n}\r\n\r\n.header-btn[_ngcontent-%COMP%] {\r\n    border-radius: 12px !important;\r\n    font-weight: 700 !important;\r\n}\r\n\r\n.header-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n    margin-right: 6px;\r\n}\r\n\r\n.search-panel[_ngcontent-%COMP%] {\r\n    background: var(--panel-bg);\r\n    border: 1px solid var(--line);\r\n    border-radius: 14px;\r\n    padding: 14px;\r\n    display: flex;\r\n    gap: 12px;\r\n    align-items: center;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.search-field[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    min-width: 220px;\r\n}\r\n\r\n.search-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.table-responsive-container[_ngcontent-%COMP%] {\r\n    border: 1px solid var(--line);\r\n    border-radius: 16px;\r\n    overflow-x: auto;\r\n    background: var(--panel-bg);\r\n    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);\r\n}\r\n\r\n.admin-product-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-width: 1180px;\r\n    background: var(--panel-bg);\r\n}\r\n\r\n.admin-product-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #eaf1ff;\r\n    color: #153064;\r\n    font-weight: 700;\r\n    font-size: 0.82rem;\r\n    letter-spacing: 0.04em;\r\n    text-transform: uppercase;\r\n    padding: 14px 12px;\r\n    border-bottom: 1px solid var(--line);\r\n}\r\n\r\n.admin-product-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    color: var(--text-main);\r\n    font-size: 0.87rem;\r\n    padding: 12px;\r\n    border-bottom: 1px solid #edf1f7;\r\n    vertical-align: middle;\r\n}\r\n\r\n.admin-product-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\r\n    background: #f7fbff;\r\n}\r\n\r\n.id-cell[_ngcontent-%COMP%] {\r\n    color: #334155;\r\n    font-weight: 700;\r\n}\r\n\r\n.name-cell[_ngcontent-%COMP%] {\r\n    max-width: 210px;\r\n    font-weight: 700;\r\n    line-height: 1.35;\r\n}\r\n\r\n.description-cell[_ngcontent-%COMP%] {\r\n    max-width: 320px;\r\n    color: var(--text-soft);\r\n    line-height: 1.4;\r\n}\r\n\r\n.price-cell[_ngcontent-%COMP%] {\r\n    font-weight: 800;\r\n    color: var(--accent);\r\n}\r\n\r\n.original-price-cell[_ngcontent-%COMP%] {\r\n    color: #64748b;\r\n}\r\n\r\n.image-preview-btn[_ngcontent-%COMP%] {\r\n    width: 58px;\r\n    height: 58px;\r\n    border: 1px solid #d9e2ef;\r\n    border-radius: 12px;\r\n    background: #ffffff;\r\n    padding: 4px;\r\n    cursor: pointer;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.image-preview-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    border-radius: 8px;\r\n}\r\n\r\n.no-image[_ngcontent-%COMP%] {\r\n    font-size: 0.62rem;\r\n    color: #7b879c;\r\n    text-align: center;\r\n    line-height: 1.2;\r\n}\r\n\r\n.action-buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n}\r\n\r\n.action-btn[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-radius: 999px;\r\n    min-height: 34px;\r\n    padding: 0 12px;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    color: #ffffff;\r\n    font-size: 0.76rem;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.action-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    width: 17px;\r\n    height: 17px;\r\n}\r\n\r\n.action-btn[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-1px);\r\n}\r\n\r\n.upload-btn[_ngcontent-%COMP%] {\r\n    background: var(--accent-2);\r\n    box-shadow: 0 8px 14px rgba(29, 78, 216, 0.25);\r\n}\r\n\r\n.edit-btn[_ngcontent-%COMP%] {\r\n    background: var(--accent);\r\n    box-shadow: 0 8px 14px rgba(15, 118, 110, 0.25);\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%] {\r\n    background: var(--danger);\r\n    box-shadow: 0 8px 14px rgba(220, 38, 38, 0.22);\r\n}\r\n\r\n.pagination-row[_ngcontent-%COMP%] {\r\n    margin-top: 16px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 14px;\r\n}\r\n\r\n.page-indicator[_ngcontent-%COMP%] {\r\n    color: #334155;\r\n    font-size: 0.92rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\r\n    margin-top: 14px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 8px;\r\n    color: #64748b;\r\n    padding: 18px;\r\n    background: var(--panel-muted);\r\n    border: 1px dashed #d6deea;\r\n    border-radius: 12px;\r\n}\r\n\r\n.empty-state[_ngcontent-%COMP%] {\r\n    margin: 14px;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .dashboard-header[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .search-panel[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n    }\r\n\r\n    .search-actions[_ngcontent-%COMP%] {\r\n        justify-content: flex-end;\r\n    }\r\n\r\n    .action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .action-btn[_ngcontent-%COMP%] {\r\n        min-width: 34px;\r\n        padding: 0 8px;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .admin-products-page[_ngcontent-%COMP%] {\r\n        padding: 10px;\r\n        border-radius: 12px;\r\n    }\r\n\r\n    .dashboard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .dashboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 0.84rem;\r\n    }\r\n\r\n    .pagination-row[_ngcontent-%COMP%] {\r\n        gap: 8px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1wcm9kdWN0LWRldGFpbHMvc2hvdy1wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZEQUE2RDtJQUM3RCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixjQUFjO0lBQ2QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFFBQVE7SUFDWjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hvdy1wcm9kdWN0LWRldGFpbHMvc2hvdy1wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcGFuZWwtYmc6ICNmZmZmZmY7XHJcbiAgICAtLXBhbmVsLW11dGVkOiAjZjdmOWZjO1xyXG4gICAgLS1saW5lOiAjZTZlYmYyO1xyXG4gICAgLS10ZXh0LW1haW46ICMxNjIwMzM7XHJcbiAgICAtLXRleHQtc29mdDogIzVkNmI4MjtcclxuICAgIC0tYWNjZW50OiAjMGY3NjZlO1xyXG4gICAgLS1hY2NlbnQtMjogIzFkNGVkODtcclxuICAgIC0tZGFuZ2VyOiAjZGMyNjI2O1xyXG59XHJcblxyXG4uYWRtaW4tcHJvZHVjdHMtcGFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNGY4ZmYgMCUsICNlZWYzZmIgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtaGVhZGVyIGgyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xyXG4gICAgZm9udC1zaXplOiAxLjQ1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1oZWFkZXIgcCB7XHJcbiAgICBtYXJnaW46IDRweCAwIDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zb2Z0KTtcclxuICAgIGZvbnQtc2l6ZTogMC45MnJlbTtcclxufVxyXG5cclxuLmhlYWRlci1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWJ0biAubWF0LWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGFuZWwtYmcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnNlYXJjaC1maWVsZCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiAyMjBweDtcclxufVxyXG5cclxuLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGFuZWwtYmcpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxufVxyXG5cclxuLmFkbWluLXByb2R1Y3QtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDExODBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsLWJnKTtcclxufVxyXG5cclxuLmFkbWluLXByb2R1Y3QtdGFibGUgdGgge1xyXG4gICAgYmFja2dyb3VuZDogI2VhZjFmZjtcclxuICAgIGNvbG9yOiAjMTUzMDY0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMTRweCAxMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xyXG59XHJcblxyXG4uYWRtaW4tcHJvZHVjdC10YWJsZSB0ZCB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcclxuICAgIGZvbnQtc2l6ZTogMC44N3JlbTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZjFmNztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5hZG1pbi1wcm9kdWN0LXRhYmxlIHRyOmhvdmVyIHRkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2ZiZmY7XHJcbn1cclxuXHJcbi5pZC1jZWxsIHtcclxuICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm5hbWUtY2VsbCB7XHJcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tY2VsbCB7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc29mdCk7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4ucHJpY2UtY2VsbCB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbn1cclxuXHJcbi5vcmlnaW5hbC1wcmljZS1jZWxsIHtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG59XHJcblxyXG4uaW1hZ2UtcHJldmlldy1idG4ge1xyXG4gICAgd2lkdGg6IDU4cHg7XHJcbiAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3LWJ0biBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLm5vLWltYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMC42MnJlbTtcclxuICAgIGNvbG9yOiAjN2I4NzljO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzNHB4O1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMC43NnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmFjdGlvbi1idG4gLm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0bjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi51cGxvYWQtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC0yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE0cHggcmdiYSgyOSwgNzgsIDIxNiwgMC4yNSk7XHJcbn1cclxuXHJcbi5lZGl0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTRweCByZ2JhKDE1LCAxMTgsIDExMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNHB4IHJnYmEoMjIwLCAzOCwgMzgsIDAuMjIpO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcbi5wYWdlLWluZGljYXRvciB7XHJcbiAgICBjb2xvcjogIzMzNDE1NTtcclxuICAgIGZvbnQtc2l6ZTogMC45MnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXN0YXRlLFxyXG4uZW1wdHktc3RhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsLW11dGVkKTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZDZkZWVhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHtcclxuICAgIG1hcmdpbjogMTRweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLXBhbmVsIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLWJ0biBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb24tYnRuIHtcclxuICAgICAgICBtaW4td2lkdGg6IDM0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmFkbWluLXByb2R1Y3RzLXBhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGFzaGJvYXJkLWhlYWRlciBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRhc2hib2FyZC1oZWFkZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdpbmF0aW9uLXJvdyB7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-product-details',
                templateUrl: './show-product-details.component.html',
                styleUrls: ['./show-product-details.component.css']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _image_processing_service__WEBPACK_IMPORTED_MODULE_5__["ImageProcessingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "MiZa":
/*!**************************************************************!*\
  !*** ./src/app/add-new-product/add-new-product.component.ts ***!
  \**************************************************************/
/*! exports provided: AddNewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewProductComponent", function() { return AddNewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _drag_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../drag.directive */ "ebj0");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function AddNewProductComponent_mat_grid_tile_39_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewProductComponent_mat_grid_tile_39_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeImages(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", file_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AddNewProductComponent {
    constructor(productService, sanitizer, activatedRoute) {
        this.productService = productService;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.isNewProduct = true;
        this.imagePreviewCols = 4;
        this.product = {
            productId: null,
            productName: '',
            productDescription: '',
            productActualPrice: 0,
            productDiscountedPrice: 0,
            productImages: []
        };
    }
    // ✅ FIXED ngOnInit
    ngOnInit() {
        this.updateImagePreviewCols();
        const resolvedProduct = this.activatedRoute.snapshot.data['product'];
        if (resolvedProduct) {
            this.product = resolvedProduct;
            this.isNewProduct = !this.product.productId;
        }
        else {
            this.resetProduct();
            this.isNewProduct = true;
        }
    }
    onResize() {
        this.updateImagePreviewCols();
    }
    // ✅ ADD PRODUCT (FIXED)
    addProduct(productForm) {
        if (productForm.invalid) {
            return;
        }
        const productFormData = this.prepareFormData(this.product);
        this.productService.addProduct(productFormData).subscribe({
            next: (response) => {
                alert('Product added successfully');
                // reset form + model
                productForm.resetForm();
                this.resetProduct();
            },
            error: (error) => {
                console.error(error);
                alert('Failed to add product');
            }
        });
    }
    // ✅ CREATE FORMDATA
    prepareFormData(product) {
        const formData = new FormData();
        formData.append('product', new Blob([JSON.stringify(product)], { type: 'application/json' }));
        for (let i = 0; i < product.productImages.length; i++) {
            formData.append('imageFile', product.productImages[i].file, product.productImages[i].file.name);
        }
        return formData;
    }
    // ✅ FILE SELECT
    onFileSelected(event) {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const fileHandle = {
                file: file,
                url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
            };
            this.product.productImages.push(fileHandle);
        }
    }
    // ✅ DRAG & DROP
    fileDropped(fileHandle) {
        this.product.productImages.push(fileHandle);
    }
    // ✅ REMOVE IMAGE
    removeImages(index) {
        this.product.productImages.splice(index, 1);
    }
    // ✅ RESET PRODUCT MODEL
    resetProduct() {
        this.product = {
            productId: null,
            productName: '',
            productDescription: '',
            productActualPrice: 0,
            productDiscountedPrice: 0,
            productImages: []
        };
    }
    updateImagePreviewCols() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 576) {
            this.imagePreviewCols = 2;
            return;
        }
        if (screenWidth < 992) {
            this.imagePreviewCols = 3;
            return;
        }
        this.imagePreviewCols = 4;
    }
}
AddNewProductComponent.ɵfac = function AddNewProductComponent_Factory(t) { return new (t || AddNewProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AddNewProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNewProductComponent, selectors: [["app-add-new-product"]], hostBindings: function AddNewProductComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AddNewProductComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 40, vars: 6, consts: [[1, "container", "mt-4"], [1, "card", "p-2"], [1, "row"], [1, "col-12", "col-lg-6"], [3, "ngSubmit"], ["productForm", "ngForm"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "Product Name", "name", "productName", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Product Description", "name", "productDescription", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Product Actual Price", "name", "productActualPrice", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Product Discounted Price", "name", "productDiscountedPrice", "required", "", 3, "ngModel", "ngModelChange"], ["align", "end"], ["type", "button", "mat-stroked-button", "", "color", "primary", 2, "margin-right", "6px", 3, "click"], ["type", "submit", "mat-stroked-button", "", "color", "primary"], ["appDrag", "", 1, "dropzone", 3, "files"], [1, "text-wrapper"], [1, "centered"], [1, "browse-button", 3, "click"], ["type", "file", "hidden", "", "multiple", "", 3, "change"], ["selectFile", ""], [1, "mt-5"], ["rowHeight", "1:1", 3, "cols"], [4, "ngFor", "ngForOf"], [2, "position", "relative"], [1, "btn-remove-image", 3, "click"], ["width", "100", "height", "100", 3, "src"]], template: function AddNewProductComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddNewProductComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.addProduct(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_input_ngModelChange_9_listener($event) { return ctx.product.productName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_input_ngModelChange_13_listener($event) { return ctx.product.productDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Product Actual Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_input_ngModelChange_17_listener($event) { return ctx.product.productActualPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Product Discounted Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_input_ngModelChange_21_listener($event) { return ctx.product.productDiscountedPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewProductComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Add Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("files", function AddNewProductComponent_Template_div_files_28_listener($event) { return ctx.fileDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Drag and drop your file or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewProductComponent_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "browse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " a file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddNewProductComponent_Template_input_change_35_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-grid-list", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddNewProductComponent_mat_grid_tile_39_Template, 5, 1, "mat-grid-tile", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productActualPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productDiscountedPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.imagePreviewCols);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product.productImages);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _drag_directive__WEBPACK_IMPORTED_MODULE_8__["DragDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridTile"]], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\r\n    border: 1px solid #eee;\r\n}\r\n.btn-remove-image[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top:-10px;\r\n    right: -10px;\r\n    background-color: red;\r\n    color:white;\r\n    border-radius: 50%;\r\n    width:20px;\r\n    height:auto;\r\n    text-align: center;\r\n}\r\n.dropzone[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    min-width: 100px;\r\n    display: table;\r\n    background-color: #eee;\r\n    width: 100%;\r\n    max-width: 360px;\r\n    border: dashed 1px #aaa;\r\n    border-radius: 10px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.text-wrapper[_ngcontent-%COMP%]{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.centered[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.browse-button[_ngcontent-%COMP%]{\r\n    color:blue;\r\n    cursor: pointer;\r\n}\r\n@media (max-width: 575.98px) {\r\n    .dropzone[_ngcontent-%COMP%] {\r\n        max-width: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW5ldy1wcm9kdWN0L2FkZC1uZXctcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGQtbmV3LXByb2R1Y3QvYWRkLW5ldy1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuLmJ0bi1yZW1vdmUtaW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6LTEwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOjIwcHg7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRyb3B6b25le1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICBib3JkZXI6IGRhc2hlZCAxcHggI2FhYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4udGV4dC13cmFwcGVye1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5icm93c2UtYnV0dG9ue1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAuZHJvcHpvbmUge1xyXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-new-product',
                templateUrl: './add-new-product.component.html',
                styleUrls: ['./add-new-product.component.css']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "NjDy":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_presence_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/presence.service */ "mV+E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AdminDashboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
class AdminDashboardComponent {
    constructor(httpClient, presenceService) {
        this.httpClient = httpClient;
        this.presenceService = presenceService;
        this.totalUsers = 0;
        this.onlineUsers = 0;
        this.isLoading = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.loadStats();
    }
    loadStats() {
        this.isLoading = true;
        this.errorMessage = '';
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            total: this.httpClient
                .get('/api/admin/stats/total-users')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ totalUsers: 0 }))),
            online: this.httpClient
                .get('/api/admin/stats/online-users')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => this.presenceService.getOnlineCount()))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ onlineUsers: 0 }))),
        }).subscribe(({ total, online }) => {
            this.totalUsers = total.totalUsers || 0;
            this.onlineUsers = online.onlineUsers || 0;
            this.isLoading = false;
        }, () => {
            this.errorMessage = 'Unable to load admin stats right now.';
            this.isLoading = false;
        });
    }
}
AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_presence_service__WEBPACK_IMPORTED_MODULE_4__["PresenceService"])); };
AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 18, vars: 4, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-0"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], ["class", "alert alert-danger py-2", 4, "ngIf"], [1, "stats-grid"], [1, "stats-card"], [1, "stats-label"], [1, "stats-value"], [1, "alert", "alert-danger", "py-2"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_4_listener() { return ctx.loadStats(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminDashboardComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Online Users Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineUsers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".stats-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\r\n  gap: 16px;\r\n}\r\n\r\n.stats-card[_ngcontent-%COMP%] {\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 12px;\r\n  padding: 20px;\r\n  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);\r\n}\r\n\r\n.stats-label[_ngcontent-%COMP%] {\r\n  color: #555;\r\n  font-weight: 600;\r\n  font-size: 0.95rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.stats-value[_ngcontent-%COMP%] {\r\n  color: #0d47a1;\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n  .stats-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG9EQUFvRDtFQUNwRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0cy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgyMjBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4uc3RhdHMtY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2Y4ZmJmZiAxMDAlKTtcclxufVxyXG5cclxuLnN0YXRzLWxhYmVsIHtcclxuICBjb2xvcjogIzU1NTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5zdGF0cy12YWx1ZSB7XHJcbiAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gIC5zdGF0cy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-dashboard',
                templateUrl: './admin-dashboard.component.html',
                styleUrls: ['./admin-dashboard.component.css'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_presence_service__WEBPACK_IMPORTED_MODULE_4__["PresenceService"] }]; }, null); })();


/***/ }),

/***/ "OGzB":
/*!**********************************************************!*\
  !*** ./src/app/order-details/order-details.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function OrderDetailsComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", element_r16.orderId, "");
} }
function OrderDetailsComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.product.productName);
} }
function OrderDetailsComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r18.user.userFirstName);
} }
function OrderDetailsComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r19.orderFullOrder);
} }
function OrderDetailsComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r20.orderContactNumber);
} }
function OrderDetailsComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "status-placed": a0, "status-delivered": a1 }; };
function OrderDetailsComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, element_r21.orderStatus === "Placed", element_r21.orderStatus === "Delivered"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.orderStatus, " ");
} }
function OrderDetailsComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_td_40_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDetailsComponent_td_40_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const element_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.markAsDelivered(element_r22.orderId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "local_shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mark as Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_td_40_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDetailsComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDetailsComponent_td_40_button_1_Template, 5, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderDetailsComponent_td_40_span_2_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r22.orderStatus == "Placed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r22.orderStatus != "Placed");
} }
function OrderDetailsComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
} }
function OrderDetailsComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
} }
class OrderDetailsComponent {
    constructor(productService) {
        this.productService = productService;
        this.displayedColumns = ['Id', 'Product Name', 'Name', 'Address', 'Contact No.', 'Status', 'Action'];
        this.dataSource = [];
        this.status = 'All';
    }
    ngOnInit() {
        this.getAllOrderDetailsForAdmin(this.status);
    }
    getAllOrderDetailsForAdmin(statusParameter) {
        this.productService.getAllOrderDetailsForAdmin(statusParameter).subscribe((resp) => {
            this.dataSource = resp;
            console.log(resp);
        }, (error) => {
            console.log(error);
        });
    }
    markAsDelivered(orderId) {
        console.log(orderId);
        this.productService.marksAsDelivered(orderId).subscribe((response) => {
            this.getAllOrderDetailsForAdmin(this.status);
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
}
OrderDetailsComponent.ɵfac = function OrderDetailsComponent_Factory(t) { return new (t || OrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
OrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDetailsComponent, selectors: [["app-order-details"]], decls: 43, vars: 3, consts: [[1, "orders-dashboard", "container", "mt-5"], [1, "orders-header"], [1, "filters-panel"], [1, "filters-label"], ["aria-label", "Order Status Filters", 1, "order-filters"], ["value", "All", 3, "click"], ["value", "Placed", 3, "click"], ["value", "Delivered", 3, "click"], [1, "table-card", "mt-3"], [1, "table-responsive-container"], ["mat-table", "", 1, "orders-table", 3, "dataSource"], ["matColumnDef", "Id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "id-cell", 4, "matCellDef"], ["matColumnDef", "Product Name"], ["mat-cell", "", "class", "product-cell", 4, "matCellDef"], ["matColumnDef", "Name"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Address"], ["mat-cell", "", "class", "address-cell", 4, "matCellDef"], ["matColumnDef", "Contact No."], ["matColumnDef", "Status"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "id-cell"], ["mat-cell", "", 1, "product-cell"], ["mat-cell", ""], ["mat-cell", "", 1, "address-cell"], [1, "status-badge", 3, "ngClass"], ["class", "deliver-btn", "type", "button", 3, "click", 4, "ngIf"], ["class", "action-done", 4, "ngIf"], ["type", "button", 1, "deliver-btn", 3, "click"], [1, "action-done"], ["mat-header-row", ""], ["mat-row", ""]], template: function OrderDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Track customer orders, delivery progress, and update fulfillment status.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filter Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-button-toggle-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDetailsComponent_Template_mat_button_toggle_click_11_listener() { return ctx.getAllOrderDetailsForAdmin("All"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDetailsComponent_Template_mat_button_toggle_click_13_listener() { return ctx.getAllOrderDetailsForAdmin("Placed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDetailsComponent_Template_mat_button_toggle_click_15_listener() { return ctx.getAllOrderDetailsForAdmin("Delivered"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OrderDetailsComponent_th_21_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OrderDetailsComponent_td_22_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OrderDetailsComponent_th_24_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OrderDetailsComponent_td_25_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OrderDetailsComponent_th_27_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OrderDetailsComponent_td_28_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OrderDetailsComponent_th_30_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, OrderDetailsComponent_td_31_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OrderDetailsComponent_th_33_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, OrderDetailsComponent_td_34_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, OrderDetailsComponent_th_36_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, OrderDetailsComponent_td_37_Template, 3, 5, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, OrderDetailsComponent_th_39_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, OrderDetailsComponent_td_40_Template, 3, 2, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, OrderDetailsComponent_tr_41_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, OrderDetailsComponent_tr_42_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".orders-dashboard[_ngcontent-%COMP%] {\r\n    background: linear-gradient(180deg, #f4f8ff 0%, #edf3fb 100%);\r\n    border-radius: 18px;\r\n    padding: 20px;\r\n}\r\n\r\n.orders-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 12px;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.orders-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #13233f;\r\n    font-size: 1.45rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.orders-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 6px 0 0;\r\n    color: #617086;\r\n    font-size: 0.92rem;\r\n}\r\n\r\n.filters-panel[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 14px;\r\n    flex-wrap: wrap;\r\n    background: #ffffff;\r\n    border: 1px solid #e5eaf3;\r\n    border-radius: 14px;\r\n    padding: 14px 16px;\r\n}\r\n\r\n.filters-label[_ngcontent-%COMP%] {\r\n    color: #334155;\r\n    font-size: 0.9rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.order-filters[_ngcontent-%COMP%] {\r\n    border-radius: 999px;\r\n    overflow: hidden;\r\n}\r\n\r\n  .order-filters .mat-button-toggle {\r\n    color: #334155;\r\n    background: #ffffff;\r\n    border-right: 1px solid #e2e8f0;\r\n}\r\n\r\n  .order-filters .mat-button-toggle-checked {\r\n    background: #0f766e;\r\n    color: #ffffff;\r\n}\r\n\r\n.table-card[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border: 1px solid #e5eaf3;\r\n    border-radius: 18px;\r\n    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.06);\r\n}\r\n\r\n.table-responsive-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow-x: auto;\r\n}\r\n\r\n.orders-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-width: 1080px;\r\n    background: #ffffff;\r\n}\r\n\r\n.orders-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #e8f0ff 0%, #dce9ff 100%);\r\n    color: #17305c;\r\n    font-size: 0.82rem;\r\n    font-weight: 800;\r\n    letter-spacing: 0.03em;\r\n    text-transform: uppercase;\r\n    padding: 16px 12px;\r\n    border-bottom: 1px solid #d9e3f2;\r\n}\r\n\r\n.orders-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 14px 12px;\r\n    color: #162033;\r\n    font-size: 0.9rem;\r\n    border-bottom: 1px solid #edf2f7;\r\n    vertical-align: middle;\r\n}\r\n\r\n.orders-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\r\n    background: #f8fbff;\r\n}\r\n\r\n.id-cell[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n    color: #475569;\r\n}\r\n\r\n.product-cell[_ngcontent-%COMP%] {\r\n    max-width: 220px;\r\n    font-weight: 700;\r\n    line-height: 1.4;\r\n}\r\n\r\n.address-cell[_ngcontent-%COMP%] {\r\n    max-width: 260px;\r\n    color: #5f6f86;\r\n    line-height: 1.45;\r\n}\r\n\r\n.status-badge[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-width: 92px;\r\n    padding: 6px 12px;\r\n    border-radius: 999px;\r\n    font-size: 0.78rem;\r\n    font-weight: 800;\r\n    letter-spacing: 0.02em;\r\n}\r\n\r\n.status-placed[_ngcontent-%COMP%] {\r\n    background: #fff7ed;\r\n    color: #c2410c;\r\n    border: 1px solid #fdba74;\r\n}\r\n\r\n.status-delivered[_ngcontent-%COMP%] {\r\n    background: #ecfdf5;\r\n    color: #15803d;\r\n    border: 1px solid #86efac;\r\n}\r\n\r\n.deliver-btn[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-radius: 999px;\r\n    min-height: 38px;\r\n    padding: 0 14px;\r\n    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);\r\n    color: #ffffff;\r\n    font-size: 0.82rem;\r\n    font-weight: 700;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    cursor: pointer;\r\n    box-shadow: 0 10px 18px rgba(37, 99, 235, 0.24);\r\n    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;\r\n}\r\n\r\n.deliver-btn[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 14px 22px rgba(37, 99, 235, 0.28);\r\n    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);\r\n}\r\n\r\n.deliver-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n    font-size: 18px;\r\n}\r\n\r\n.action-done[_ngcontent-%COMP%] {\r\n    color: #64748b;\r\n    font-size: 0.82rem;\r\n    font-weight: 700;\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n    .orders-dashboard[_ngcontent-%COMP%] {\r\n        padding: 12px;\r\n        border-radius: 14px;\r\n    }\r\n\r\n    .orders-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .orders-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 0.84rem;\r\n    }\r\n\r\n    .filters-panel[_ngcontent-%COMP%] {\r\n        padding: 12px;\r\n    }\r\n\r\n    .deliver-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .deliver-btn[_ngcontent-%COMP%] {\r\n        min-width: 38px;\r\n        padding: 0 10px;\r\n        justify-content: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2REFBNkQ7SUFDN0QsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZEQUE2RDtJQUM3RCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixlQUFlO0lBQ2YsK0NBQStDO0lBQy9DLDJFQUEyRTtBQUMvRTs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwrQ0FBK0M7SUFDL0MsNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlcnMtZGFzaGJvYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNGY4ZmYgMCUsICNlZGYzZmIgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm9yZGVycy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ub3JkZXJzLWhlYWRlciBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzEzMjMzZjtcclxuICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5vcmRlcnMtaGVhZGVyIHAge1xyXG4gICAgbWFyZ2luOiA2cHggMCAwO1xyXG4gICAgY29sb3I6ICM2MTcwODY7XHJcbiAgICBmb250LXNpemU6IDAuOTJyZW07XHJcbn1cclxuXHJcbi5maWx0ZXJzLXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWVhZjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG59XHJcblxyXG4uZmlsdGVycy1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzMzNDE1NTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm9yZGVyLWZpbHRlcnMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm9yZGVyLWZpbHRlcnMgLm1hdC1idXR0b24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub3JkZXItZmlsdGVycyAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGY3NjZlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50YWJsZS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlYWYzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAzMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5vcmRlcnMtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwODBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5vcmRlcnMtdGFibGUgdGgge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U4ZjBmZiAwJSwgI2RjZTlmZiAxMDAlKTtcclxuICAgIGNvbG9yOiAjMTczMDVjO1xyXG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMTZweCAxMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWUzZjI7XHJcbn1cclxuXHJcbi5vcmRlcnMtdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogMTRweCAxMnB4O1xyXG4gICAgY29sb3I6ICMxNjIwMzM7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRmMmY3O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLm9yZGVycy10YWJsZSB0cjpob3ZlciB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xyXG59XHJcblxyXG4uaWQtY2VsbCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICM0NzU1Njk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNlbGwge1xyXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4uYWRkcmVzcy1jZWxsIHtcclxuICAgIG1heC13aWR0aDogMjYwcHg7XHJcbiAgICBjb2xvcjogIzVmNmY4NjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiA5MnB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG59XHJcblxyXG4uc3RhdHVzLXBsYWNlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmN2VkO1xyXG4gICAgY29sb3I6ICNjMjQxMGM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmRiYTc0O1xyXG59XHJcblxyXG4uc3RhdHVzLWRlbGl2ZXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmZGY1O1xyXG4gICAgY29sb3I6ICMxNTgwM2Q7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODZlZmFjO1xyXG59XHJcblxyXG4uZGVsaXZlci1idG4ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzOHB4O1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI1NjNlYiAwJSwgIzFkNGVkOCAxMDAlKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE4cHggcmdiYSgzNywgOTksIDIzNSwgMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZSwgYmFja2dyb3VuZCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5kZWxpdmVyLWJ0bjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjJweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjI4KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxZDRlZDggMCUsICMxZTQwYWYgMTAwJSk7XHJcbn1cclxuXHJcbi5kZWxpdmVyLWJ0biAubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5hY3Rpb24tZG9uZSB7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLm9yZGVycy1kYXNoYm9hcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXJzLWhlYWRlciBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVycy1oZWFkZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWx0ZXJzLXBhbmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWxpdmVyLWJ0biBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWxpdmVyLWJ0biB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-details',
                templateUrl: './order-details.component.html',
                styleUrls: ['./order-details.component.css']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/user-auth.service */ "fa2P");
/* harmony import */ var _services_presence_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/presence.service */ "mV+E");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(userAuthService, presenceService) {
        this.userAuthService = userAuthService;
        this.presenceService = presenceService;
        this.title = 'E-Commerce Application';
    }
    ngOnInit() {
        if (this.userAuthService.isLoggedIn()) {
            this.presenceService.startHeartbeat();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_presence_service__WEBPACK_IMPORTED_MODULE_2__["PresenceService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"] }, { type: _services_presence_service__WEBPACK_IMPORTED_MODULE_2__["PresenceService"] }]; }, null); })();


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 4, vars: 0, consts: [[1, "container", "mt-5"], [1, "card", "text-center", 2, "color", "green", "padding", "20px"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You are Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Tzv4":
/*!*************************************!*\
  !*** ./src/app/_auth/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user-auth.service */ "fa2P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "VITL");





class AuthGuard {
    constructor(userAuthService, router, userService) {
        this.userAuthService = userAuthService;
        this.router = router;
        this.userService = userService;
    }
    canActivate(route, state) {
        if (this.userAuthService.getToken() !== null) {
            const role = route.data['roles'];
            if (role) {
                const match = this.userService.roleMatch(role);
                if (match) {
                    return true;
                }
                else {
                    this.router.navigate(['/forbidden']);
                    return false;
                }
            }
        }
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "VITL":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-auth.service */ "fa2P");





class UserService {
    constructor(httpclient, userAuthService) {
        this.httpclient = httpclient;
        this.userAuthService = userAuthService;
        this.PATH_OF_API = '';
        this.requestHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'No-Auth': 'True' });
    }
    register(registerData) {
        return this.httpclient.post(this.PATH_OF_API + '/registerNewUser', registerData);
    }
    login(loginData) {
        return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
            headers: this.requestHeader,
        });
    }
    forUser() {
        return this.httpclient.get(this.PATH_OF_API + '/forUser', {
            responseType: 'text',
        });
    }
    forAdmin() {
        return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
            responseType: 'text',
        });
    }
    roleMatch(allowedRoles) {
        let isMatch = false;
        const userRoles = this.userAuthService.getRoles();
        if (userRoles != null && userRoles) {
            for (let i = 0; i < userRoles.length; i++) {
                for (let j = 0; j < allowedRoles.length; j++) {
                    if (userRoles[i].roleName === allowedRoles[j]) {
                        isMatch = true;
                        return isMatch;
                    }
                    else {
                        return isMatch;
                    }
                }
            }
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] }]; }, null); })();


/***/ }),

/***/ "Z1Xf":
/*!*************************************************!*\
  !*** ./src/app/_services/cart-state.service.ts ***!
  \*************************************************/
/*! exports provided: CartStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStateService", function() { return CartStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "szdb");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-auth.service */ "fa2P");





class CartStateService {
    constructor(productService, userAuthService) {
        this.productService = productService;
        this.userAuthService = userAuthService;
        this.cartQuantityStorageKey = 'cartProductQuantities';
        this.cartItemCountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.cartItemCount$ = this.cartItemCountSubject.asObservable();
    }
    setCartCount(count) {
        this.cartItemCountSubject.next(Math.max(0, count || 0));
    }
    initializeCartQuantities(items) {
        const storedQuantities = this.getAllCartQuantities();
        const nextQuantities = {};
        (items || []).forEach((item) => {
            var _a;
            const productId = (_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.productId;
            if (productId === undefined || productId === null) {
                return;
            }
            nextQuantities[productId] = storedQuantities[productId] || 1;
        });
        this.saveAllCartQuantities(nextQuantities);
    }
    setCartQuantity(productId, quantity) {
        const quantities = this.getAllCartQuantities();
        quantities[productId] = Math.max(1, Number(quantity) || 1);
        this.saveAllCartQuantities(quantities);
    }
    getCartQuantity(productId) {
        const quantities = this.getAllCartQuantities();
        return Math.max(1, Number(quantities[productId]) || 1);
    }
    removeCartQuantity(productId) {
        const quantities = this.getAllCartQuantities();
        delete quantities[productId];
        this.saveAllCartQuantities(quantities);
    }
    clearCartQuantities() {
        sessionStorage.removeItem(this.cartQuantityStorageKey);
    }
    incrementCartCount() {
        this.cartItemCountSubject.next(this.cartItemCountSubject.value + 1);
    }
    decrementCartCount() {
        const nextValue = this.cartItemCountSubject.value - 1;
        this.cartItemCountSubject.next(Math.max(0, nextValue));
    }
    resetCartCount() {
        this.cartItemCountSubject.next(0);
    }
    refreshCartCount() {
        if (!this.userAuthService.isLoggedIn()) {
            this.resetCartCount();
            return;
        }
        if (this.userAuthService.isAdmin()) {
            this.resetCartCount();
            return;
        }
        this.productService.getCardDetails().subscribe((items) => {
            this.setCartCount(Array.isArray(items) ? items.length : 0);
        }, () => {
            this.resetCartCount();
        });
    }
    getAllCartQuantities() {
        const storedValue = sessionStorage.getItem(this.cartQuantityStorageKey);
        if (!storedValue) {
            return {};
        }
        try {
            return JSON.parse(storedValue);
        }
        catch (_a) {
            return {};
        }
    }
    saveAllCartQuantities(quantities) {
        sessionStorage.setItem(this.cartQuantityStorageKey, JSON.stringify(quantities));
    }
}
CartStateService.ɵfac = function CartStateService_Factory(t) { return new (t || CartStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"])); };
CartStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartStateService, factory: CartStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "mkyV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_auth/auth.guard */ "Tzv4");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_auth/auth.interceptor */ "zc6q");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/user.service */ "VITL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-new-product/add-new-product.component */ "MiZa");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _drag_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./drag.directive */ "ebj0");
/* harmony import */ var _show_product_details_show_product_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./show-product-details/show-product-details.component */ "EkQX");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _show_product_images_dialog_show_product_images_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./show-product-images-dialog/show-product-images-dialog.component */ "8luB");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _product_view_details_product_view_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./product-view-details/product-view-details.component */ "l4fc");
/* harmony import */ var _buy_product_buy_product_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./buy-product/buy-product.component */ "/e8N");
/* harmony import */ var _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./order-confirmation/order-confirmation.component */ "jQDH");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "oZqN");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./order-details/order-details.component */ "OGzB");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "NjDy");
/* harmony import */ var _active_users_active_users_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./active-users/active-users.component */ "6rtO");








































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
            multi: true
        },
        _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__["MatButtonToggleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_9__["ForbiddenComponent"],
        _add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_21__["AddNewProductComponent"],
        _drag_directive__WEBPACK_IMPORTED_MODULE_23__["DragDirective"],
        _show_product_details_show_product_details_component__WEBPACK_IMPORTED_MODULE_24__["ShowProductDetailsComponent"],
        _show_product_images_dialog_show_product_images_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ShowProductImagesDialogComponent"],
        _product_view_details_product_view_details_component__WEBPACK_IMPORTED_MODULE_29__["ProductViewDetailsComponent"],
        _buy_product_buy_product_component__WEBPACK_IMPORTED_MODULE_30__["BuyProductComponent"],
        _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_31__["OrderConfirmationComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_32__["RegisterComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_33__["CartComponent"],
        _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_34__["MyOrdersComponent"],
        _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_35__["OrderDetailsComponent"],
        _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_37__["AdminDashboardComponent"],
        _active_users_active_users_component__WEBPACK_IMPORTED_MODULE_38__["ActiveUsersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__["MatButtonToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_9__["ForbiddenComponent"],
                    _add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_21__["AddNewProductComponent"],
                    _drag_directive__WEBPACK_IMPORTED_MODULE_23__["DragDirective"],
                    _show_product_details_show_product_details_component__WEBPACK_IMPORTED_MODULE_24__["ShowProductDetailsComponent"],
                    _show_product_images_dialog_show_product_images_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ShowProductImagesDialogComponent"],
                    _product_view_details_product_view_details_component__WEBPACK_IMPORTED_MODULE_29__["ProductViewDetailsComponent"],
                    _buy_product_buy_product_component__WEBPACK_IMPORTED_MODULE_30__["BuyProductComponent"],
                    _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_31__["OrderConfirmationComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_32__["RegisterComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_33__["CartComponent"],
                    _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_34__["MyOrdersComponent"],
                    _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_35__["OrderDetailsComponent"],
                    _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_37__["AdminDashboardComponent"],
                    _active_users_active_users_component__WEBPACK_IMPORTED_MODULE_38__["ActiveUsersComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__["MatButtonToggleModule"]
                ],
                providers: [
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                        multi: true
                    },
                    _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _services_cart_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/cart-state.service */ "Z1Xf");
/* harmony import */ var _image_processing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-processing.service */ "yJC3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");










function CartComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "remove_shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add products to your cart and they will appear here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Continue Shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_11_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_11_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function CartComponent_div_11_td_6_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); return $event.target.src = "assets/placeholder.svg"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", element_r17.product.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.getFirstImage(element_r17) || "assets/placeholder.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CartComponent_div_11_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_11_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r20.product.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r20.product.productDescription);
} }
function CartComponent_div_11_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_11_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", element_r21.product.productDiscountedPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", element_r21.product.productActualPrice, "");
} }
function CartComponent_div_11_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_11_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_11_td_15_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const element_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.changeQuantity(element_r22.product.productId, -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_11_td_15_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const element_r22 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.changeQuantity(element_r22.product.productId, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getItemQuantity(element_r22.product.productId));
} }
function CartComponent_div_11_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_11_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", ctx_r12.getLineTotal(element_r26), "");
} }
function CartComponent_div_11_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_11_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_11_td_21_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const element_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r28.deleteCartItem(element_r27.cardId, element_r27.product.productId); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_11_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 41);
} }
function CartComponent_div_11_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 42);
} }
function CartComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_div_11_th_5_Template, 2, 0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_div_11_td_6_Template, 3, 2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_div_11_th_8_Template, 2, 0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_div_11_td_9_Template, 6, 2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CartComponent_div_11_th_11_Template, 2, 0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CartComponent_div_11_td_12_Template, 6, 2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_div_11_th_14_Template, 2, 0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CartComponent_div_11_td_15_Template, 8, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CartComponent_div_11_th_17_Template, 2, 0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CartComponent_div_11_td_18_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CartComponent_div_11_th_20_Template, 2, 0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CartComponent_div_11_td_21_Template, 6, 0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CartComponent_div_11_tr_22_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CartComponent_div_11_tr_23_Template, 1, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "aside", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cart Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "You Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_11_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.checkout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "shopping_bag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Proceed to Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r2.cartDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getTotalItems());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", ctx_r2.getSubtotal(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", ctx_r2.getSavings(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", ctx_r2.getGrandTotal(), "");
} }
class CartComponent {
    constructor(productService, cartStateService, imageProcessingService, router) {
        this.productService = productService;
        this.cartStateService = cartStateService;
        this.imageProcessingService = imageProcessingService;
        this.router = router;
        this.displayedColumns = ['Image', 'Name', 'Price', 'Quantity', 'Total', 'Action'];
        this.cartDetails = [];
    }
    ngOnInit() {
        this.getCartDetails();
    }
    deleteCartItem(cartId, productId) {
        console.log("Deleting cart item with cardId:", cartId);
        this.productService.deleteCartItem(cartId).subscribe((resp) => {
            console.log("Deleted Successfully:", resp);
            // 🔥 REMOVE ITEM FROM UI IMMEDIATELY
            this.cartDetails = this.cartDetails.filter(item => item.cardId !== cartId);
            this.cartStateService.removeCartQuantity(productId);
            this.cartStateService.decrementCartCount();
        }, (err) => {
            var _a;
            console.log("Error:", err);
            const errorMessage = ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.statusText) || (err === null || err === void 0 ? void 0 : err.message) || "Unknown error";
            alert("Failed to delete: " + errorMessage);
        });
    }
    getCartDetails() {
        this.productService.getCardDetails().subscribe((response) => {
            console.log(response);
            this.cartDetails = response.map(item => {
                item.product = this.imageProcessingService.createImages(item.product);
                return item;
            });
            this.cartStateService.setCartCount(this.cartDetails.length);
            this.cartStateService.initializeCartQuantities(this.cartDetails);
        }, (error) => {
            console.log(error);
        });
    }
    getItemQuantity(productId) {
        return this.cartStateService.getCartQuantity(productId);
    }
    changeQuantity(productId, change) {
        const nextQuantity = this.getItemQuantity(productId) + change;
        this.cartStateService.setCartQuantity(productId, Math.max(1, nextQuantity));
    }
    getLineTotal(item) {
        return item.product.productDiscountedPrice * this.getItemQuantity(item.product.productId);
    }
    getSubtotal() {
        return this.cartDetails.reduce((total, item) => {
            return total + (item.product.productActualPrice * this.getItemQuantity(item.product.productId));
        }, 0);
    }
    getGrandTotal() {
        return this.cartDetails.reduce((total, item) => {
            return total + this.getLineTotal(item);
        }, 0);
    }
    getSavings() {
        return this.getSubtotal() - this.getGrandTotal();
    }
    getTotalItems() {
        return this.cartDetails.reduce((count, item) => {
            return count + this.getItemQuantity(item.product.productId);
        }, 0);
    }
    getFirstImage(item) {
        if (!item || !item.product || !item.product.productImages || item.product.productImages.length === 0) {
            return null;
        }
        const img = item.product.productImages[0];
        return img && img.url ? img.url : null;
    }
    checkout() {
        this.router.navigate(['/buyProduct', {
                isSingleProductCheckout: false, id: 0
            }]);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_state_service__WEBPACK_IMPORTED_MODULE_2__["CartStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_processing_service__WEBPACK_IMPORTED_MODULE_3__["ImageProcessingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 12, vars: 4, consts: [[1, "cart-page", "container", "mt-5"], [1, "cart-header"], [1, "cart-chip"], [4, "ngIf"], ["class", "empty-cart", 4, "ngIf"], ["class", "cart-layout", 4, "ngIf"], [1, "empty-cart"], ["mat-raised-button", "", "color", "primary", "routerLink", "/"], [1, "cart-layout"], [1, "cart-table-card"], [1, "table-responsive-container"], ["mat-table", "", 1, "cart-table", 3, "dataSource"], ["matColumnDef", "Image"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "Price"], ["matColumnDef", "Quantity"], ["matColumnDef", "Total"], ["mat-cell", "", "class", "line-total", 4, "matCellDef"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "summary-card"], [1, "summary-row"], [1, "summary-row", "savings-row"], [1, "summary-row", "grand-total"], ["type", "button", 1, "checkout-btn", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "image-cell"], [3, "src", "alt", "error"], [1, "product-info-cell"], [1, "price-block"], [1, "current-price"], [1, "old-price"], [1, "quantity-control"], ["type", "button", 1, "qty-btn", 3, "click"], [1, "qty-value"], ["mat-cell", "", 1, "line-total"], ["type", "button", 1, "delete-btn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Review your selected items before checkout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_span_9_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CartComponent_div_10_Template, 9, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CartComponent_div_11_Template, 52, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cartDetails.length, " product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartDetails.length !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartDetails.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartDetails.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]], styles: [".cart-page[_ngcontent-%COMP%] {\r\n    background: linear-gradient(180deg, #f6f9fc 0%, #eef3f9 100%);\r\n    border-radius: 18px;\r\n    padding: 20px;\r\n}\r\n\r\n.cart-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 12px;\r\n    margin-bottom: 18px;\r\n}\r\n\r\n.cart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #13233f;\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.cart-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 6px 0 0;\r\n    color: #617086;\r\n    font-size: 0.92rem;\r\n}\r\n\r\n.cart-chip[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border: 1px solid #dbe4f1;\r\n    border-radius: 999px;\r\n    padding: 8px 14px;\r\n    color: #334155;\r\n    font-size: 0.82rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.cart-layout[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: minmax(0, 1.7fr) minmax(300px, 0.8fr);\r\n    gap: 18px;\r\n}\r\n\r\n.cart-table-card[_ngcontent-%COMP%], .summary-card[_ngcontent-%COMP%], .empty-cart[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border: 1px solid #e4ebf3;\r\n    border-radius: 18px;\r\n    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.06);\r\n}\r\n\r\n.table-responsive-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow-x: auto;\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-width: 900px;\r\n    background: #ffffff;\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #e9f2ff 0%, #dfeafe 100%);\r\n    color: #17305c;\r\n    font-size: 0.82rem;\r\n    font-weight: 800;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.03em;\r\n    padding: 16px 12px;\r\n    border-bottom: 1px solid #dbe4f1;\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 14px 12px;\r\n    color: #162033;\r\n    font-size: 0.9rem;\r\n    border-bottom: 1px solid #edf2f7;\r\n    vertical-align: middle;\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\r\n    background: #f8fbff;\r\n}\r\n\r\n.image-cell[_ngcontent-%COMP%] {\r\n    width: 74px;\r\n    height: 74px;\r\n    border-radius: 14px;\r\n    background: #f8fafc;\r\n    border: 1px solid #e5eaf1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.image-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain;\r\n}\r\n\r\n.image-placeholder[_ngcontent-%COMP%] {\r\n    color: #94a3b8;\r\n    font-size: 0.68rem;\r\n    text-align: center;\r\n}\r\n\r\n.product-info-cell[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin: 0 0 6px;\r\n    font-size: 0.95rem;\r\n    font-weight: 800;\r\n    color: #13233f;\r\n}\r\n\r\n.product-info-cell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #64748b;\r\n    line-height: 1.5;\r\n    max-width: 300px;\r\n}\r\n\r\n.price-block[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n}\r\n\r\n.current-price[_ngcontent-%COMP%] {\r\n    color: #0f766e;\r\n    font-weight: 800;\r\n}\r\n\r\n.old-price[_ngcontent-%COMP%] {\r\n    color: #94a3b8;\r\n    font-size: 0.82rem;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.quantity-control[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 6px 10px;\r\n    border-radius: 999px;\r\n    border: 1px solid #dce4ef;\r\n    background: #ffffff;\r\n}\r\n\r\n.qty-btn[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    background: #e6f0ff;\r\n    color: #1d4ed8;\r\n    font-size: 1rem;\r\n    font-weight: 800;\r\n    cursor: pointer;\r\n}\r\n\r\n.qty-value[_ngcontent-%COMP%] {\r\n    min-width: 20px;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    color: #1f2937;\r\n}\r\n\r\n.line-total[_ngcontent-%COMP%] {\r\n    font-weight: 800;\r\n    color: #13233f;\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-radius: 999px;\r\n    min-height: 36px;\r\n    padding: 0 12px;\r\n    background: #dc2626;\r\n    color: #ffffff;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    font-size: 0.8rem;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    box-shadow: 0 10px 18px rgba(220, 38, 38, 0.2);\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n    font-size: 18px;\r\n}\r\n\r\n.summary-card[_ngcontent-%COMP%] {\r\n    padding: 22px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    position: sticky;\r\n    top: 96px;\r\n}\r\n\r\n.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 0 0 16px;\r\n    color: #13233f;\r\n    font-size: 1.2rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.summary-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 12px;\r\n    padding: 12px 0;\r\n    border-bottom: 1px solid #edf2f7;\r\n    color: #475569;\r\n    font-size: 0.92rem;\r\n}\r\n\r\n.summary-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    color: #13233f;\r\n}\r\n\r\n.savings-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    color: #15803d;\r\n}\r\n\r\n.grand-total[_ngcontent-%COMP%] {\r\n    border-bottom: none;\r\n    padding-top: 16px;\r\n    font-size: 1rem;\r\n}\r\n\r\n.checkout-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 18px;\r\n    border: none;\r\n    border-radius: 14px;\r\n    min-height: 48px;\r\n    background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);\r\n    color: #ffffff;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 8px;\r\n    font-size: 0.92rem;\r\n    font-weight: 800;\r\n    cursor: pointer;\r\n    box-shadow: 0 14px 24px rgba(15, 118, 110, 0.24);\r\n}\r\n\r\n.checkout-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    font-size: 20px;\r\n}\r\n\r\n.empty-cart[_ngcontent-%COMP%] {\r\n    padding: 48px 24px;\r\n    text-align: center;\r\n}\r\n\r\n.empty-cart[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n    width: 52px;\r\n    height: 52px;\r\n    font-size: 52px;\r\n    color: #94a3b8;\r\n}\r\n\r\n.empty-cart[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 16px 0 8px;\r\n    color: #13233f;\r\n    font-size: 1.35rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0 0 20px;\r\n    color: #64748b;\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n    .cart-layout[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .summary-card[_ngcontent-%COMP%] {\r\n        position: static;\r\n    }\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n    .cart-page[_ngcontent-%COMP%] {\r\n        padding: 12px;\r\n        border-radius: 14px;\r\n    }\r\n\r\n    .cart-header[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .cart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 1.25rem;\r\n    }\r\n\r\n    .delete-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .delete-btn[_ngcontent-%COMP%] {\r\n        min-width: 36px;\r\n        padding: 0 10px;\r\n        justify-content: center;\r\n    }\r\n\r\n    .cart-table[_ngcontent-%COMP%] {\r\n        min-width: 760px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2REFBNkQ7SUFDN0QsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNERBQTREO0lBQzVELFNBQVM7QUFDYjs7QUFFQTs7O0lBR0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkRBQTZEO0lBQzdELGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNkRBQTZEO0lBQzdELGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y2ZjlmYyAwJSwgI2VlZjNmOSAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FydC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4uY2FydC1oZWFkZXIgaDIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICMxMzIzM2Y7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jYXJ0LWhlYWRlciBwIHtcclxuICAgIG1hcmdpbjogNnB4IDAgMDtcclxuICAgIGNvbG9yOiAjNjE3MDg2O1xyXG4gICAgZm9udC1zaXplOiAwLjkycmVtO1xyXG59XHJcblxyXG4uY2FydC1jaGlwIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJlNGYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmNhcnQtbGF5b3V0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxLjdmcikgbWlubWF4KDMwMHB4LCAwLjhmcik7XHJcbiAgICBnYXA6IDE4cHg7XHJcbn1cclxuXHJcbi5jYXJ0LXRhYmxlLWNhcmQsXHJcbi5zdW1tYXJ5LWNhcmQsXHJcbi5lbXB0eS1jYXJ0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlYmYzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAzMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJ0LXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiA5MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jYXJ0LXRhYmxlIHRoIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlOWYyZmYgMCUsICNkZmVhZmUgMTAwJSk7XHJcbiAgICBjb2xvcjogIzE3MzA1YztcclxuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICAgIHBhZGRpbmc6IDE2cHggMTJweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJlNGYxO1xyXG59XHJcblxyXG4uY2FydC10YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDEycHg7XHJcbiAgICBjb2xvcjogIzE2MjAzMztcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGYyZjc7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY2FydC10YWJsZSB0cjpob3ZlciB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xyXG59XHJcblxyXG4uaW1hZ2UtY2VsbCB7XHJcbiAgICB3aWR0aDogNzRweDtcclxuICAgIGhlaWdodDogNzRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZWFmMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1hZ2UtY2VsbCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uaW1hZ2UtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICBmb250LXNpemU6IDAuNjhyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm8tY2VsbCBoNCB7XHJcbiAgICBtYXJnaW46IDAgMCA2cHg7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICMxMzIzM2Y7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm8tY2VsbCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5wcmljZS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNHB4O1xyXG59XHJcblxyXG4uY3VycmVudC1wcmljZSB7XHJcbiAgICBjb2xvcjogIzBmNzY2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5vbGQtcHJpY2Uge1xyXG4gICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICBmb250LXNpemU6IDAuODJyZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLnF1YW50aXR5LWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2U0ZWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucXR5LWJ0biB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlNmYwZmY7XHJcbiAgICBjb2xvcjogIzFkNGVkODtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5xdHktdmFsdWUge1xyXG4gICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMWYyOTM3O1xyXG59XHJcblxyXG4ubGluZS10b3RhbCB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICMxMzIzM2Y7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgbWluLWhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNkYzI2MjY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE4cHggcmdiYSgyMjAsIDM4LCAzOCwgMC4yKTtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4gLm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc3VtbWFyeS1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDIycHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogOTZweDtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZCBoMyB7XHJcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gICAgY29sb3I6ICMxMzIzM2Y7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTJweDtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRmMmY3O1xyXG4gICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICBmb250LXNpemU6IDAuOTJyZW07XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXJvdyBzdHJvbmcge1xyXG4gICAgY29sb3I6ICMxMzIzM2Y7XHJcbn1cclxuXHJcbi5zYXZpbmdzLXJvdyBzdHJvbmcge1xyXG4gICAgY29sb3I6ICMxNTgwM2Q7XHJcbn1cclxuXHJcbi5ncmFuZC10b3RhbCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5jaGVja291dC1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGY3NjZlIDAlLCAjMTE1ZTU5IDEwMCUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjkycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyNHB4IHJnYmEoMTUsIDExOCwgMTEwLCAwLjI0KTtcclxufVxyXG5cclxuLmNoZWNrb3V0LWJ0biAubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5lbXB0eS1jYXJ0IHtcclxuICAgIHBhZGRpbmc6IDQ4cHggMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVtcHR5LWNhcnQgLm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgY29sb3I6ICM5NGEzYjg7XHJcbn1cclxuXHJcbi5lbXB0eS1jYXJ0IGgzIHtcclxuICAgIG1hcmdpbjogMTZweCAwIDhweDtcclxuICAgIGNvbG9yOiAjMTMyMzNmO1xyXG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmVtcHR5LWNhcnQgcCB7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgLmNhcnQtbGF5b3V0IHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuXHJcbiAgICAuc3VtbWFyeS1jYXJkIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5jYXJ0LXBhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FydC1oZWFkZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcnQtaGVhZGVyIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRlbGV0ZS1idG4gc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVsZXRlLWJ0biB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FydC10YWJsZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA3NjBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _services_cart_state_service__WEBPACK_IMPORTED_MODULE_2__["CartStateService"] }, { type: _image_processing_service__WEBPACK_IMPORTED_MODULE_3__["ImageProcessingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "ebj0":
/*!***********************************!*\
  !*** ./src/app/drag.directive.ts ***!
  \***********************************/
/*! exports provided: DragDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDirective", function() { return DragDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class DragDirective {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.files = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.background = "#eee";
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = "#999";
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = "#eee";
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = "#eee";
        let fileHandle = null;
        const file = evt.dataTransfer.files[0];
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        fileHandle = { file, url };
        this.files.emit(fileHandle);
    }
}
DragDirective.ɵfac = function DragDirective_Factory(t) { return new (t || DragDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
DragDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DragDirective, selectors: [["", "appDrag", ""]], hostVars: 2, hostBindings: function DragDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, outputs: { files: "files" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDrag]'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { files: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.background"]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["dragover", ["$event"]]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["dragleave", ["$event"]]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["drop", ["$event"]]
        }] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user-auth.service */ "fa2P");
/* harmony import */ var _services_cart_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/cart-state.service */ "Z1Xf");
/* harmony import */ var _services_presence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/presence.service */ "mV+E");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/user.service */ "VITL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













function HeaderComponent_nav_5_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.cartItemCount);
} }
function HeaderComponent_nav_5_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { exact: true }; };
function HeaderComponent_nav_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_nav_5_a_3_Template, 8, 1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_nav_5_a_4_Template, 2, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn());
} }
function HeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_div_6_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.searchProducts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_6_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.searchKeyword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.searchKeyword);
} }
function HeaderComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Show Product Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Active Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(userAuthService, cartStateService, presenceService, router, userService) {
        this.userAuthService = userAuthService;
        this.cartStateService = cartStateService;
        this.presenceService = presenceService;
        this.router = router;
        this.userService = userService;
        this.searchKeyword = '';
        this.cartItemCount = 0;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.cartStateService.cartItemCount$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe((count) => {
            this.cartItemCount = count;
        });
        this.cartStateService.refreshCartCount();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.cartStateService.refreshCartCount();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    isLoggedIn() {
        return this.userAuthService.isLoggedIn();
    }
    logout() {
        this.presenceService.stopHeartbeatAndMarkOffline();
        this.userAuthService.clear();
        this.cartStateService.resetCartCount();
        this.router.navigate(['/']);
    }
    isAdmin() {
        return this.isLoggedIn() && this.userAuthService.isAdmin();
    }
    isUser() {
        return this.isLoggedIn() && this.userAuthService.isUser();
    }
    searchProducts() {
        const keyword = (this.searchKeyword || '').trim();
        this.router.navigate(['/'], {
            queryParams: keyword ? { search: keyword } : {}
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_state_service__WEBPACK_IMPORTED_MODULE_5__["CartStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 7, consts: [[1, "navbar-shell"], [1, "navbar-row"], [1, "nav-left"], ["routerLink", "/", 1, "brand-title"], ["class", "nav-links", 4, "ngIf"], ["class", "nav-center", 4, "ngIf"], [1, "nav-right", "auth-wrap"], ["routerLink", "/login", "class", "auth-btn login-btn", 4, "ngIf"], ["class", "auth-btn logout-btn", 3, "click", 4, "ngIf"], ["class", "admin-links", 4, "ngIf"], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", "home-link", 3, "routerLinkActiveOptions"], ["class", "nav-link cart-link", "routerLink", "/cart", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link", "routerLink", "/myOrders", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/cart", "routerLinkActive", "active", 1, "nav-link", "cart-link"], [1, "cart-icon-wrap"], [1, "cart-count"], ["routerLink", "/myOrders", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-center"], [1, "search-wrap", 3, "ngSubmit"], ["type", "text", "name", "searchKeyword", "placeholder", "Search products", 1, "search-input", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "search-btn"], ["routerLink", "/login", 1, "auth-btn", "login-btn"], [1, "auth-btn", "logout-btn", 3, "click"], [1, "admin-links"], ["routerLink", "/addNewProduct", "routerLinkActive", "active", 1, "admin-link"], ["routerLink", "/showProductDetails", "routerLinkActive", "active", 1, "admin-link"], ["routerLink", "/orderInformation", "routerLinkActive", "active", 1, "admin-link"], ["routerLink", "/admin/active-users", "routerLinkActive", "active", 1, "admin-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "E-Commerce Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_nav_5_Template, 5, 4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_button_8_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_button_9_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 9, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("admin-row", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn() && ctx.isAdmin());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["[_nghost-%COMP%] {\r\n    --nav-bg: #0f172a;\r\n    --nav-muted: #cbd5e1;\r\n    --nav-text: #f8fafc;\r\n    --accent: #0f766e;\r\n    --accent-hover: #115e59;\r\n    --line: rgba(148, 163, 184, 0.28);\r\n    --shadow: 0 10px 24px rgba(2, 6, 23, 0.2);\r\n}\r\n\r\n.navbar-shell[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #0f172a, #1e293b);\r\n    color: var(--nav-text);\r\n    box-shadow: var(--shadow);\r\n    border-bottom: 1px solid rgba(148, 163, 184, 0.2);\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1000;\r\n    margin: 10px 14px 0;\r\n    border-radius: 14px;\r\n    overflow: hidden;\r\n}\r\n\r\n.navbar-row[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px 22px;\r\n    min-height: 64px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 18px;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.navbar-row.admin-row[_ngcontent-%COMP%] {\r\n    min-height: 56px;\r\n}\r\n\r\n.nav-left[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    flex: 0 1 auto;\r\n    min-width: 0;\r\n}\r\n\r\n.nav-center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex: 1 1 auto;\r\n    max-width: 640px;\r\n    min-width: 240px;\r\n}\r\n\r\n.nav-right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    flex: 0 0 auto;\r\n    margin-left: auto;\r\n    min-width: 0;\r\n}\r\n\r\n.brand-title[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n    font-size: 1.05rem;\r\n    font-weight: 800;\r\n    letter-spacing: 0.2px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.nav-links[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    min-width: 0;\r\n    overflow-x: auto;\r\n    scrollbar-width: none;\r\n}\r\n\r\n.nav-links[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    color: var(--nav-muted);\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    font-size: 0.86rem;\r\n    height: 36px;\r\n    padding: 0 12px;\r\n    border-radius: 9px;\r\n    transition: background-color 0.2s ease, color 0.2s ease;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link.active[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.16);\r\n    color: #ffffff;\r\n}\r\n\r\n.home-link[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.08);\r\n}\r\n\r\n.cart-icon-wrap[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n\r\n.cart-icon-wrap[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    font-size: 20px;\r\n}\r\n\r\n.cart-count[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -8px;\r\n    right: -10px;\r\n    min-width: 18px;\r\n    height: 18px;\r\n    border-radius: 999px;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0 5px;\r\n    background: #ef4444;\r\n    color: #ffffff;\r\n    font-size: 0.67rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.search-wrap[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    background: rgba(255, 255, 255, 0.08);\r\n    border: 1px solid var(--line);\r\n    border-radius: 10px;\r\n    padding: 4px;\r\n    width: 100%;\r\n    max-width: 540px;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    min-width: 0;\r\n    border: none;\r\n    outline: none;\r\n    height: 36px;\r\n    padding: 0 12px;\r\n    border-radius: 8px;\r\n    background: rgba(255, 255, 255, 0.94);\r\n    color: #111827;\r\n    font-size: 0.86rem;\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-radius: 8px;\r\n    background: var(--accent);\r\n    color: #ffffff;\r\n    font-weight: 700;\r\n    font-size: 0.82rem;\r\n    height: 36px;\r\n    padding: 0 14px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s ease, transform 0.2s ease;\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%]:hover {\r\n    background: var(--accent-hover);\r\n    transform: translateY(-1px);\r\n}\r\n\r\n.auth-wrap[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.auth-btn[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-radius: 9px;\r\n    height: 36px;\r\n    padding: 0 16px;\r\n    font-size: 0.84rem;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%] {\r\n    background: #2563eb;\r\n}\r\n\r\n.logout-btn[_ngcontent-%COMP%] {\r\n    background: #dc2626;\r\n}\r\n\r\n.admin-links[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 0 22px 10px;\r\n    border-top: 1px solid var(--line);\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n}\r\n\r\n.admin-link[_ngcontent-%COMP%] {\r\n    color: var(--nav-muted);\r\n    text-decoration: none;\r\n    font-size: 0.85rem;\r\n    font-weight: 600;\r\n    padding: 6px 10px;\r\n    border-radius: 8px;\r\n    background: rgba(255, 255, 255, 0.06);\r\n}\r\n\r\n.admin-link[_ngcontent-%COMP%]:hover, .admin-link.active[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    background: rgba(255, 255, 255, 0.16);\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .navbar-shell[_ngcontent-%COMP%] {\r\n        border-bottom-color: rgba(148, 163, 184, 0.28);\r\n        margin: 8px 10px 0;\r\n        border-radius: 12px;\r\n    }\r\n\r\n    .navbar-row[_ngcontent-%COMP%] {\r\n        padding: 10px 12px;\r\n        min-height: 60px;\r\n        gap: 12px;\r\n    }\r\n\r\n    .nav-left[_ngcontent-%COMP%] {\r\n        gap: 8px;\r\n    }\r\n\r\n    .nav-center[_ngcontent-%COMP%] {\r\n        max-width: 520px;\r\n    }\r\n\r\n    .search-wrap[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n\r\n    .nav-links[_ngcontent-%COMP%] {\r\n        gap: 6px;\r\n    }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n    .navbar-row[_ngcontent-%COMP%] {\r\n        padding: 8px 10px;\r\n        min-height: 56px;\r\n        gap: 8px;\r\n    }\r\n\r\n    .brand-title[_ngcontent-%COMP%] {\r\n        font-size: 0.92rem;\r\n        max-width: 142px;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .nav-links[_ngcontent-%COMP%] {\r\n        gap: 4px;\r\n    }\r\n\r\n    .nav-link[_ngcontent-%COMP%] {\r\n        height: 34px;\r\n        font-size: 0.78rem;\r\n        padding: 0 8px;\r\n    }\r\n\r\n    .nav-center[_ngcontent-%COMP%] {\r\n        flex: 1 1 auto;\r\n        min-width: 150px;\r\n    }\r\n\r\n    .search-wrap[_ngcontent-%COMP%] {\r\n        padding: 3px;\r\n    }\r\n\r\n    .search-input[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%] {\r\n        height: 32px;\r\n    }\r\n\r\n    .search-btn[_ngcontent-%COMP%] {\r\n        padding: 0 10px;\r\n        font-size: 0.76rem;\r\n    }\r\n\r\n    .auth-btn[_ngcontent-%COMP%] {\r\n        height: 34px;\r\n        padding: 0 10px;\r\n        font-size: 0.76rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscURBQXFEO0lBQ3JELHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsaURBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdURBQXVEO0lBQ3ZELG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxxQ0FBcUM7SUFDckMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztJQUNQLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0k7UUFDSSw4Q0FBOEM7UUFDOUMsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsU0FBUztJQUNiOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFFBQVE7SUFDWjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBOztRQUVJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tbmF2LWJnOiAjMGYxNzJhO1xyXG4gICAgLS1uYXYtbXV0ZWQ6ICNjYmQ1ZTE7XHJcbiAgICAtLW5hdi10ZXh0OiAjZjhmYWZjO1xyXG4gICAgLS1hY2NlbnQ6ICMwZjc2NmU7XHJcbiAgICAtLWFjY2VudC1ob3ZlcjogIzExNWU1OTtcclxuICAgIC0tbGluZTogcmdiYSgxNDgsIDE2MywgMTg0LCAwLjI4KTtcclxuICAgIC0tc2hhZG93OiAwIDEwcHggMjRweCByZ2JhKDIsIDYsIDIzLCAwLjIpO1xyXG59XHJcblxyXG4ubmF2YmFyLXNoZWxsIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZjE3MmEsICMxZTI5M2IpO1xyXG4gICAgY29sb3I6IHZhcigtLW5hdi10ZXh0KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDgsIDE2MywgMTg0LCAwLjIpO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBtYXJnaW46IDEwcHggMTRweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5uYXZiYXItcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMnB4O1xyXG4gICAgbWluLWhlaWdodDogNjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxOHB4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi5uYXZiYXItcm93LmFkbWluLXJvdyB7XHJcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xyXG59XHJcblxyXG4ubmF2LWxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLm5hdi1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNDBweDtcclxufVxyXG5cclxuLm5hdi1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uYnJhbmQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuMDVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm5hdi1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxufVxyXG5cclxuLm5hdi1saW5rczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiB2YXIoLS1uYXYtbXV0ZWQpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NnJlbTtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlcixcclxuLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5ob21lLWxpbmsge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxufVxyXG5cclxuLmNhcnQtaWNvbi13cmFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcnQtaWNvbi13cmFwIC5tYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNhcnQtY291bnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VmNDQ0NDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAwLjY3cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNlYXJjaC13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KTtcclxuICAgIGNvbG9yOiAjMTExODI3O1xyXG4gICAgZm9udC1zaXplOiAwLjg2cmVtO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ob3Zlcik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5hdXRoLXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5hdXRoLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBmb250LXNpemU6IDAuODRyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzI1NjNlYjtcclxufVxyXG5cclxuLmxvZ291dC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2RjMjYyNjtcclxufVxyXG5cclxuLmFkbWluLWxpbmtzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAyMnB4IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGluZSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5hZG1pbi1saW5rIHtcclxuICAgIGNvbG9yOiB2YXIoLS1uYXYtbXV0ZWQpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcclxufVxyXG5cclxuLmFkbWluLWxpbms6aG92ZXIsXHJcbi5hZG1pbi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLm5hdmJhci1zaGVsbCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCAwLjI4KTtcclxuICAgICAgICBtYXJnaW46IDhweCAxMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLXJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGVmdCB7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1jZW50ZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogNTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC13cmFwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rcyB7XHJcbiAgICAgICAgZ2FwOiA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgLm5hdmJhci1yb3cge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJyYW5kLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOTJyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDJweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGlua3Mge1xyXG4gICAgICAgIGdhcDogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWNlbnRlciB7XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLXdyYXAge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWlucHV0LFxyXG4gICAgLnNlYXJjaC1idG4ge1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYXV0aC1idG4ge1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc2cmVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css'],
            }]
    }], function () { return [{ type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"] }, { type: _services_cart_state_service__WEBPACK_IMPORTED_MODULE_5__["CartStateService"] }, { type: _services_presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, null); })();


/***/ }),

/***/ "fa2P":
/*!************************************************!*\
  !*** ./src/app/_services/user-auth.service.ts ***!
  \************************************************/
/*! exports provided: UserAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function() { return UserAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserAuthService {
    constructor() { }
    setRoles(roles) {
        localStorage.setItem('roles', JSON.stringify(roles));
    }
    getRoles() {
        return JSON.parse(localStorage.getItem('roles'));
    }
    setToken(jwtToken) {
        localStorage.setItem('jwtToken', jwtToken);
    }
    getToken() {
        return localStorage.getItem('jwtToken');
    }
    clear() {
        localStorage.clear();
    }
    isLoggedIn() {
        return this.getRoles() && this.getToken();
    }
    isAdmin() {
        const roles = this.getRoles();
        return roles[0].roleName === 'Admin';
    }
    isUser() {
        const roles = this.getRoles();
        return roles[0].roleName === 'User';
    }
}
UserAuthService.ɵfac = function UserAuthService_Factory(t) { return new (t || UserAuthService)(); };
UserAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAuthService, factory: UserAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jQDH":
/*!********************************************************************!*\
  !*** ./src/app/order-confirmation/order-confirmation.component.ts ***!
  \********************************************************************/
/*! exports provided: OrderConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationComponent", function() { return OrderConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OrderConfirmationComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderConfirmationComponent.ɵfac = function OrderConfirmationComponent_Factory(t) { return new (t || OrderConfirmationComponent)(); };
OrderConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderConfirmationComponent, selectors: [["app-order-confirmation"]], decls: 4, vars: 0, consts: [[1, "container", "mt-5"], [1, "card", "p-5", "text-center"]], template: function OrderConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your order is placed successfully. It will get delivered to you within 4-5 buisness days.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-confirmation',
                templateUrl: './order-confirmation.component.html',
                styleUrls: ['./order-confirmation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "l4fc":
/*!************************************************************************!*\
  !*** ./src/app/product-view-details/product-view-details.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewDetailsComponent", function() { return ProductViewDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cart_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/cart-state.service */ "Z1Xf");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProductViewDetailsComponent_div_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewDetailsComponent_div_0_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.changeIndex(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.selectedProductIndex === i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "View image " + (i_r7 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Thumbnail ", i_r7 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", file_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductViewDetailsComponent_div_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductViewDetailsComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductViewDetailsComponent_div_0_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rs. ", ctx_r4.product.productActualPrice, " ");
} }
function ProductViewDetailsComponent_div_0_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.getDiscountPercent(), "% OFF ");
} }
function ProductViewDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductViewDetailsComponent_div_0_button_7_Template, 2, 5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductViewDetailsComponent_div_0_span_12_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductViewDetailsComponent_div_0_span_13_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductViewDetailsComponent_div_0_span_21_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductViewDetailsComponent_div_0_span_22_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewDetailsComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.buyProduct(ctx_r12.product.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewDetailsComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addToCart(ctx_r14.product.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Product image of ", ctx_r0.product.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.product.productImages[ctx_r0.selectedProductIndex] == null ? null : ctx_r0.product.productImages[ctx_r0.selectedProductIndex].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.product.productImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getStarArray(ctx_r0.getFilledStars()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getStarArray(ctx_r0.getEmptyStars()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.product.rating || 4, " / 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.productDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", ctx_r0.product.productDiscountedPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.productActualPrice > ctx_r0.product.productDiscountedPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.productActualPrice > ctx_r0.product.productDiscountedPrice);
} }
class ProductViewDetailsComponent {
    constructor(activatedRoute, router, cartStateService, productService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.cartStateService = cartStateService;
        this.productService = productService;
        this.selectedProductIndex = 0;
    }
    ngOnInit() {
        this.product = this.activatedRoute.snapshot.data['product'];
        if (!this.product.rating) {
            this.product.rating = 4;
        }
    }
    addToCart(productId) {
        this.productService.addToCart(productId).subscribe((response) => {
            console.log(response);
            this.cartStateService.incrementCartCount();
        }, (error) => {
            console.log(error);
        });
    }
    changeIndex(index) {
        this.selectedProductIndex = index;
    }
    buyProduct(productId) {
        this.router.navigate(['/buyProduct', {
                isSingleProductCheckout: true, id: productId
            }]);
    }
    getStarArray(count) {
        return Array(Math.max(0, count)).fill(0);
    }
    getFilledStars() {
        return Math.floor(this.product.rating || 4);
    }
    getEmptyStars() {
        return 5 - this.getFilledStars();
    }
    getDiscountPercent() {
        const actual = this.product.productActualPrice || 0;
        const discounted = this.product.productDiscountedPrice || 0;
        if (!actual || actual <= discounted) {
            return 0;
        }
        return Math.round(((actual - discounted) / actual) * 100);
    }
}
ProductViewDetailsComponent.ɵfac = function ProductViewDetailsComponent_Factory(t) { return new (t || ProductViewDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_state_service__WEBPACK_IMPORTED_MODULE_2__["CartStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"])); };
ProductViewDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductViewDetailsComponent, selectors: [["app-product-view-details"]], decls: 1, vars: 1, consts: [["class", "details-page", 4, "ngIf"], [1, "details-page"], [1, "details-wrapper"], [1, "left-column"], [1, "hero-image-box"], [1, "hero-image-stage"], ["decoding", "async", 1, "hero-image", 3, "src", "alt"], [1, "thumbnail-row"], ["class", "thumb", "type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "right-column"], [1, "product-name"], [1, "rating-wrap"], ["class", "star filled", 4, "ngFor", "ngForOf"], ["class", "star", 4, "ngFor", "ngForOf"], [1, "rating-text"], [1, "description"], [1, "price-block"], [1, "current-price"], ["class", "old-price", 4, "ngIf"], ["class", "discount-chip", 4, "ngIf"], [1, "action-row"], ["type", "button", 1, "btn", "buy-btn", 3, "click"], ["type", "button", 1, "btn", "cart-btn", 3, "click"], ["type", "button", 1, "thumb", 3, "click"], [3, "src", "alt"], [1, "star", "filled"], [1, "star"], [1, "old-price"], [1, "discount-chip"]], template: function ProductViewDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductViewDetailsComponent_div_0_Template, 28, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".details-page[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  background: linear-gradient(180deg, #f4f7fb 0%, #eef3f8 100%);\r\n  padding: 24px 16px;\r\n}\r\n\r\n.details-wrapper[_ngcontent-%COMP%] {\r\n  max-width: 1180px;\r\n  margin: 0 auto;\r\n  background: #ffffff;\r\n  border: 1px solid #e5e7eb;\r\n  border-radius: 18px;\r\n  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);\r\n  display: grid;\r\n  grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr);\r\n  gap: 28px;\r\n  padding: 28px;\r\n}\r\n\r\n.left-column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 14px;\r\n}\r\n\r\n.hero-image-box[_ngcontent-%COMP%] {\r\n  border: 1px solid #e5e7eb;\r\n  border-radius: 14px;\r\n  background: linear-gradient(145deg, #f6fbff, #f7f8fb);\r\n  height: clamp(320px, 44vw, 520px);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 16px;\r\n}\r\n\r\n.hero-image-stage[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.hero-image[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  height: auto;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  object-fit: contain;\r\n  display: block;\r\n  image-rendering: auto;\r\n}\r\n\r\n.thumbnail-row[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));\r\n  gap: 10px;\r\n}\r\n\r\n.thumb[_ngcontent-%COMP%] {\r\n  border: 2px solid #d8dde6;\r\n  border-radius: 10px;\r\n  background: #ffffff;\r\n  cursor: pointer;\r\n  aspect-ratio: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 6px;\r\n  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.thumb[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n  border-color: #0f766e;\r\n}\r\n\r\n.thumb.active[_ngcontent-%COMP%] {\r\n  border-color: #0f766e;\r\n  box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.18);\r\n}\r\n\r\n.right-column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.product-name[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #111827;\r\n  font-size: 2rem;\r\n  line-height: 1.2;\r\n  font-weight: 800;\r\n}\r\n\r\n.rating-wrap[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n}\r\n\r\n.star[_ngcontent-%COMP%] {\r\n  color: #cbd5e1;\r\n  font-size: 1.25rem;\r\n  line-height: 1;\r\n}\r\n\r\n.star.filled[_ngcontent-%COMP%] {\r\n  color: #f59e0b;\r\n}\r\n\r\n.rating-text[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  color: #4b5563;\r\n  font-size: 0.95rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #374151;\r\n  font-size: 1rem;\r\n  line-height: 1.7;\r\n}\r\n\r\n.price-block[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n  padding: 14px;\r\n  border-radius: 12px;\r\n  background: #f8fafc;\r\n  border: 1px solid #e2e8f0;\r\n}\r\n\r\n.current-price[_ngcontent-%COMP%] {\r\n  color: #0f766e;\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.old-price[_ngcontent-%COMP%] {\r\n  color: #94a3b8;\r\n  font-size: 1.1rem;\r\n  text-decoration: line-through;\r\n  font-weight: 600;\r\n}\r\n\r\n.discount-chip[_ngcontent-%COMP%] {\r\n  background: #fff7ed;\r\n  color: #c2410c;\r\n  border: 1px solid #fdba74;\r\n  border-radius: 999px;\r\n  padding: 4px 10px;\r\n  font-size: 0.8rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.action-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 12px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 12px;\r\n  min-height: 46px;\r\n  padding: 0 20px;\r\n  font-size: 0.95rem;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.buy-btn[_ngcontent-%COMP%] {\r\n  background: #f97316;\r\n  color: #ffffff;\r\n  box-shadow: 0 10px 20px rgba(249, 115, 22, 0.28);\r\n}\r\n\r\n.buy-btn[_ngcontent-%COMP%]:hover {\r\n  background: #ea580c;\r\n}\r\n\r\n.cart-btn[_ngcontent-%COMP%] {\r\n  background: #0f766e;\r\n  color: #ffffff;\r\n  box-shadow: 0 10px 20px rgba(15, 118, 110, 0.25);\r\n}\r\n\r\n.cart-btn[_ngcontent-%COMP%]:hover {\r\n  background: #115e59;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .details-wrapper[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    gap: 20px;\r\n  }\r\n\r\n  .hero-image-box[_ngcontent-%COMP%] {\r\n    height: clamp(280px, 56vw, 420px);\r\n  }\r\n\r\n  .product-name[_ngcontent-%COMP%] {\r\n    font-size: 1.7rem;\r\n  }\r\n\r\n  .current-price[_ngcontent-%COMP%] {\r\n    font-size: 1.75rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .details-page[_ngcontent-%COMP%] {\r\n    padding: 12px;\r\n  }\r\n\r\n  .details-wrapper[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n    border-radius: 14px;\r\n  }\r\n\r\n  .hero-image-box[_ngcontent-%COMP%] {\r\n    height: clamp(240px, 64vw, 340px);\r\n    padding: 12px;\r\n  }\r\n\r\n  .thumbnail-row[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  }\r\n\r\n  .product-name[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .description[_ngcontent-%COMP%] {\r\n    font-size: 0.95rem;\r\n  }\r\n\r\n  .current-price[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .old-price[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .action-row[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC12aWV3LWRldGFpbHMvcHJvZHVjdC12aWV3LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQiw2REFBNkQ7RUFDN0Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw4Q0FBOEM7RUFDOUMsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHFEQUFxRDtFQUNyRCxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osNkVBQTZFO0FBQy9FOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpRkFBaUY7QUFDbkY7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsU0FBUztFQUNYOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC12aWV3LWRldGFpbHMvcHJvZHVjdC12aWV3LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLXBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNGY3ZmIgMCUsICNlZWYzZjggMTAwJSk7XHJcbiAgcGFkZGluZzogMjRweCAxNnB4O1xyXG59XHJcblxyXG4uZGV0YWlscy13cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDExODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDE0cHggMzRweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzIwcHgsIDFmcikgbWlubWF4KDMyMHB4LCAxZnIpO1xyXG4gIGdhcDogMjhweDtcclxuICBwYWRkaW5nOiAyOHB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcbi5oZXJvLWltYWdlLWJveCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmNmZiZmYsICNmN2Y4ZmIpO1xyXG4gIGhlaWdodDogY2xhbXAoMzIwcHgsIDQ0dncsIDUyMHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmhlcm8taW1hZ2Utc3RhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvLWltYWdlIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XHJcbn1cclxuXHJcbi50aHVtYm5haWwtcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDg0cHgsIDFmcikpO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnRodW1iIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZDhkZGU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYXNwZWN0LXJhdGlvOiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi50aHVtYiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4udGh1bWI6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3JkZXItY29sb3I6ICMwZjc2NmU7XHJcbn1cclxuXHJcbi50aHVtYi5hY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogIzBmNzY2ZTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNSwgMTE4LCAxMTAsIDAuMTgpO1xyXG59XHJcblxyXG4ucmlnaHQtY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1uYW1lIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMxMTE4Mjc7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnJhdGluZy13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi5zdGFyIHtcclxuICBjb2xvcjogI2NiZDVlMTtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5zdGFyLmZpbGxlZCB7XHJcbiAgY29sb3I6ICNmNTllMGI7XHJcbn1cclxuXHJcbi5yYXRpbmctdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICM0YjU1NjM7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjMzc0MTUxO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4ucHJpY2UtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbi5jdXJyZW50LXByaWNlIHtcclxuICBjb2xvcjogIzBmNzY2ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLm9sZC1wcmljZSB7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmRpc2NvdW50LWNoaXAge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY3ZWQ7XHJcbiAgY29sb3I6ICNjMjQxMGM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkYmE3NDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBwYWRkaW5nOiA0cHggMTBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYWN0aW9uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtaW4taGVpZ2h0OiA0NnB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5idXktYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjZjk3MzE2O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMjQ5LCAxMTUsIDIyLCAwLjI4KTtcclxufVxyXG5cclxuLmJ1eS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlYTU4MGM7XHJcbn1cclxuXHJcbi5jYXJ0LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogIzBmNzY2ZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDE1LCAxMTgsIDExMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5jYXJ0LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzExNWU1OTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmRldGFpbHMtd3JhcHBlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5oZXJvLWltYWdlLWJveCB7XHJcbiAgICBoZWlnaHQ6IGNsYW1wKDI4MHB4LCA1NnZ3LCA0MjBweCk7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbnQtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmRldGFpbHMtcGFnZSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbHMtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICB9XHJcblxyXG4gIC5oZXJvLWltYWdlLWJveCB7XHJcbiAgICBoZWlnaHQ6IGNsYW1wKDI0MHB4LCA2NHZ3LCAzNDBweCk7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnRodW1ibmFpbC1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgfVxyXG5cclxuICAuY3VycmVudC1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5vbGQtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductViewDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-view-details',
                templateUrl: './product-view-details.component.html',
                styleUrls: ['./product-view-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cart_state_service__WEBPACK_IMPORTED_MODULE_2__["CartStateService"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "mV+E":
/*!***********************************************!*\
  !*** ./src/app/_services/presence.service.ts ***!
  \***********************************************/
/*! exports provided: PresenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceService", function() { return PresenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PresenceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = '/api/presence';
        this.heartbeatSubscription = null;
    }
    ping() {
        return this.httpClient.post(`${this.baseUrl}/ping`, {});
    }
    offline() {
        return this.httpClient.post(`${this.baseUrl}/offline`, {});
    }
    getOnlineCount(withinSeconds = 60) {
        return this.httpClient.get(`${this.baseUrl}/online-count?withinSeconds=${withinSeconds}`);
    }
    getOnlineUsers(withinSeconds = 60) {
        return this.httpClient.get(`${this.baseUrl}/online-users?withinSeconds=${withinSeconds}`);
    }
    startHeartbeat() {
        if (this.heartbeatSubscription) {
            return;
        }
        this.ping().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"])).subscribe();
        this.heartbeatSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(25000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.ping().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]))))
            .subscribe();
    }
    stopHeartbeatAndMarkOffline() {
        if (this.heartbeatSubscription) {
            this.heartbeatSubscription.unsubscribe();
            this.heartbeatSubscription = null;
        }
        this.offline().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"])).subscribe();
    }
}
PresenceService.ɵfac = function PresenceService_Factory(t) { return new (t || PresenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PresenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PresenceService, factory: PresenceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresenceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mkyV":
/*!**************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.ts ***!
  \**************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ForbiddenComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForbiddenComponent.ɵfac = function ForbiddenComponent_Factory(t) { return new (t || ForbiddenComponent)(); };
ForbiddenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbiddenComponent, selectors: [["app-forbidden"]], decls: 4, vars: 0, consts: [[1, "container", "mt-5"], [1, "card", "text-center", 2, "padding", "20px"]], template: function ForbiddenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You are not allowed to access this page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmJpZGRlbi9mb3JiaWRkZW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbiddenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forbidden',
                templateUrl: './forbidden.component.html',
                styleUrls: ['./forbidden.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oZqN":
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/product.service */ "szdb");
/* harmony import */ var _image_processing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-processing.service */ "yJC3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MyOrdersComponent_div_16_article_1_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_div_16_article_1_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const order_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.cancelOrder(order_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyOrdersComponent_div_16_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function MyOrdersComponent_div_16_article_1_Template_img_error_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); return $event.target.src = "assets/placeholder.svg"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_div_16_article_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const order_r4 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.viewDetails(order_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_div_16_article_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const order_r4 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.trackOrder(order_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Track Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MyOrdersComponent_div_16_article_1_button_33_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_div_16_article_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const order_r4 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.buyAgain(order_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Buy Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Order #", order_r4.orderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getOrderDate(order_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getStatusClass(order_r4.orderStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getStatusLabel(order_r4.orderStatus), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.getOrderImage(order_r4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r3.getProductName(order_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getProductName(order_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", order_r4.orderAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.orderContactNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.orderFullOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.canCancel(order_r4));
} }
function MyOrdersComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyOrdersComponent_div_16_article_1_Template, 36, 11, "article", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filteredOrders);
} }
function MyOrdersComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No orders found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "There are no orders in this filter right now.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MyOrdersComponent {
    constructor(productService, imageProcessingService, router) {
        this.productService = productService;
        this.imageProcessingService = imageProcessingService;
        this.router = router;
        this.activeFilter = 'All';
        this.myOrderDetails = [];
    }
    ngOnInit() {
        this.getOrderDetails();
    }
    getOrderDetails() {
        this.productService.getMyOrders().subscribe((resp) => {
            this.myOrderDetails = (resp || []).map((order) => {
                if (order.product) {
                    order.product = this.imageProcessingService.createImages(order.product);
                }
                return order;
            });
        }, (err) => {
            console.log(err);
        });
    }
    get filteredOrders() {
        if (this.activeFilter === 'All') {
            return this.myOrderDetails;
        }
        return this.myOrderDetails.filter((order) => {
            return this.getStatusLabel(order.orderStatus) === this.activeFilter;
        });
    }
    setFilter(filter) {
        this.activeFilter = filter;
    }
    getStatusLabel(status) {
        const value = (status || '').toLowerCase();
        if (value.includes('deliver')) {
            return 'Delivered';
        }
        if (value.includes('cancel')) {
            return 'Cancelled';
        }
        return 'Pending';
    }
    getStatusClass(status) {
        const label = this.getStatusLabel(status);
        if (label === 'Delivered') {
            return 'status-delivered';
        }
        if (label === 'Cancelled') {
            return 'status-cancelled';
        }
        return 'status-pending';
    }
    getOrderDate(order) {
        const dynamicOrder = order;
        const rawDate = dynamicOrder.orderDate || dynamicOrder.createdAt || dynamicOrder.orderCreatedDate || dynamicOrder.date;
        if (!rawDate) {
            return 'Date not available';
        }
        const parsedDate = new Date(rawDate);
        if (Number.isNaN(parsedDate.getTime())) {
            return 'Date not available';
        }
        return parsedDate.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }
    getProductName(order) {
        var _a;
        return ((_a = order.product) === null || _a === void 0 ? void 0 : _a.productName) || 'Product';
    }
    getOrderImage(order) {
        var _a;
        if (!order.product || !order.product.productImages || order.product.productImages.length === 0) {
            return 'assets/placeholder.svg';
        }
        return ((_a = order.product.productImages[0]) === null || _a === void 0 ? void 0 : _a.url) || 'assets/placeholder.svg';
    }
    canCancel(order) {
        return this.getStatusLabel(order.orderStatus) === 'Pending';
    }
    viewDetails(order) {
        var _a;
        const productId = (_a = order.product) === null || _a === void 0 ? void 0 : _a.productId;
        if (!productId) {
            alert('Product details are not available for this order.');
            return;
        }
        this.router.navigate(['/productViewDetails', { productId: productId }]);
    }
    trackOrder(order) {
        alert('Tracking is being prepared for order #' + order.orderId + '.');
    }
    cancelOrder(order) {
        alert('Cancel order feature is not enabled yet for order #' + order.orderId + '.');
    }
    buyAgain(order) {
        var _a;
        const productId = (_a = order.product) === null || _a === void 0 ? void 0 : _a.productId;
        if (!productId) {
            alert('Product is not available for Buy Again.');
            return;
        }
        this.router.navigate(['/buyProduct', {
                isSingleProductCheckout: true,
                id: productId
            }]);
    }
}
MyOrdersComponent.ɵfac = function MyOrdersComponent_Factory(t) { return new (t || MyOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_processing_service__WEBPACK_IMPORTED_MODULE_2__["ImageProcessingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MyOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyOrdersComponent, selectors: [["app-my-orders"]], decls: 19, vars: 10, consts: [[1, "orders-page", "container", "mt-5"], [1, "orders-header"], ["role", "tablist", "aria-label", "Order filters", 1, "filter-tabs"], ["type", "button", 1, "filter-tab", 3, "click"], ["class", "orders-grid", 4, "ngIf", "ngIfElse"], ["emptyState", ""], [1, "orders-grid"], ["class", "order-card", 4, "ngFor", "ngForOf"], [1, "order-card"], [1, "order-top"], [1, "order-meta"], [1, "order-id"], [1, "order-date"], [1, "status-badge", 3, "ngClass"], [1, "order-body"], [1, "product-media"], [3, "src", "alt", "error"], [1, "order-content"], [1, "product-name"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "address-text"], [1, "order-actions"], ["type", "button", 1, "action-btn", "btn-soft", 3, "click"], ["type", "button", 1, "action-btn", "btn-outline", 3, "click"], ["type", "button", "class", "action-btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "action-btn", "btn-primary", 3, "click"], ["type", "button", 1, "action-btn", "btn-danger", 3, "click"], [1, "empty-orders"]], template: function MyOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Track and manage your purchases in one place.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_Template_button_click_8_listener() { return ctx.setFilter("All"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_Template_button_click_10_listener() { return ctx.setFilter("Delivered"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_Template_button_click_12_listener() { return ctx.setFilter("Pending"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_Template_button_click_14_listener() { return ctx.setFilter("Cancelled"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyOrdersComponent_div_16_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MyOrdersComponent_ng_template_17_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeFilter === "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeFilter === "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeFilter === "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeFilter === "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredOrders.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".orders-page[_ngcontent-%COMP%] {\r\n    padding: 8px 0 24px;\r\n}\r\n\r\n.orders-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    gap: 14px;\r\n    margin-bottom: 18px;\r\n}\r\n\r\n.orders-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #13233f;\r\n    font-size: 1.8rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.orders-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 8px 0 0;\r\n    color: #64748b;\r\n    font-size: 0.95rem;\r\n}\r\n\r\n.filter-tabs[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    background: #ffffff;\r\n    border: 1px solid #e4eaf3;\r\n    border-radius: 999px;\r\n    padding: 6px;\r\n    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.06);\r\n}\r\n\r\n.filter-tab[_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: transparent;\r\n    color: #475569;\r\n    font-size: 0.84rem;\r\n    font-weight: 700;\r\n    height: 34px;\r\n    padding: 0 14px;\r\n    border-radius: 999px;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-tab.active[_ngcontent-%COMP%] {\r\n    background: #0f766e;\r\n    color: #ffffff;\r\n}\r\n\r\n.orders-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\r\n    gap: 16px;\r\n}\r\n\r\n.order-card[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border: 1px solid #e6ebf3;\r\n    border-radius: 16px;\r\n    box-shadow: 0 14px 28px rgba(15, 23, 42, 0.06);\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 14px;\r\n}\r\n\r\n.order-top[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n}\r\n\r\n.order-meta[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n}\r\n\r\n.order-id[_ngcontent-%COMP%] {\r\n    color: #13233f;\r\n    font-size: 0.9rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.order-date[_ngcontent-%COMP%] {\r\n    color: #64748b;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.status-badge[_ngcontent-%COMP%] {\r\n    padding: 6px 10px;\r\n    border-radius: 999px;\r\n    font-size: 0.74rem;\r\n    font-weight: 800;\r\n    letter-spacing: 0.02em;\r\n}\r\n\r\n.status-delivered[_ngcontent-%COMP%] {\r\n    background: #ecfdf5;\r\n    color: #15803d;\r\n    border: 1px solid #86efac;\r\n}\r\n\r\n.status-pending[_ngcontent-%COMP%] {\r\n    background: #fffbeb;\r\n    color: #b45309;\r\n    border: 1px solid #fde68a;\r\n}\r\n\r\n.status-cancelled[_ngcontent-%COMP%] {\r\n    background: #fef2f2;\r\n    color: #b91c1c;\r\n    border: 1px solid #fca5a5;\r\n}\r\n\r\n.order-body[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 92px minmax(0, 1fr);\r\n    gap: 14px;\r\n    align-items: start;\r\n}\r\n\r\n.product-media[_ngcontent-%COMP%] {\r\n    width: 92px;\r\n    height: 92px;\r\n    border-radius: 12px;\r\n    border: 1px solid #e2e8f0;\r\n    background: #f8fafc;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.product-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain;\r\n    padding: 8px;\r\n}\r\n\r\n.order-content[_ngcontent-%COMP%] {\r\n    min-width: 0;\r\n}\r\n\r\n.product-name[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #13233f;\r\n    font-size: 1rem;\r\n    font-weight: 800;\r\n    line-height: 1.35;\r\n}\r\n\r\n.detail-grid[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, minmax(0, 1fr));\r\n    gap: 10px;\r\n}\r\n\r\n.detail-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3px;\r\n}\r\n\r\n.detail-label[_ngcontent-%COMP%] {\r\n    color: #64748b;\r\n    font-size: 0.76rem;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.02em;\r\n}\r\n\r\n.detail-value[_ngcontent-%COMP%] {\r\n    color: #0f172a;\r\n    font-size: 0.92rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.address-text[_ngcontent-%COMP%] {\r\n    margin: 10px 0 0;\r\n    color: #64748b;\r\n    font-size: 0.84rem;\r\n    line-height: 1.45;\r\n}\r\n\r\n.order-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n}\r\n\r\n.action-btn[_ngcontent-%COMP%] {\r\n    border: none;\r\n    min-height: 36px;\r\n    padding: 0 12px;\r\n    border-radius: 9px;\r\n    font-size: 0.8rem;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-soft[_ngcontent-%COMP%] {\r\n    background: #e2e8f0;\r\n    color: #1f2937;\r\n}\r\n\r\n.btn-outline[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    color: #1d4ed8;\r\n    border: 1px solid #bfdbfe;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n    background: #dc2626;\r\n    color: #ffffff;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    background: #0f766e;\r\n    color: #ffffff;\r\n}\r\n\r\n.empty-orders[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    background: #ffffff;\r\n    border: 1px dashed #d8e1ed;\r\n    border-radius: 16px;\r\n    padding: 28px;\r\n    text-align: center;\r\n}\r\n\r\n.empty-orders[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #13233f;\r\n}\r\n\r\n.empty-orders[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 8px 0 0;\r\n    color: #64748b;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .orders-header[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .orders-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .order-body[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .product-media[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 180px;\r\n    }\r\n\r\n    .detail-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .order-actions[_ngcontent-%COMP%] {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .action-btn[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVycy1wYWdlIHtcclxuICAgIHBhZGRpbmc6IDhweCAwIDI0cHg7XHJcbn1cclxuXHJcbi5vcmRlcnMtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBnYXA6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4ub3JkZXJzLWhlYWRlciBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzEzMjMzZjtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLm9yZGVycy1oZWFkZXIgcCB7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLmZpbHRlci10YWJzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGVhZjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxufVxyXG5cclxuLmZpbHRlci10YWIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzQ3NTU2OTtcclxuICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZpbHRlci10YWIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZjc2NmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm9yZGVycy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5vcmRlci1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlYmYzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcbi5vcmRlci10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ub3JkZXItbWV0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNHB4O1xyXG59XHJcblxyXG4ub3JkZXItaWQge1xyXG4gICAgY29sb3I6ICMxMzIzM2Y7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5vcmRlci1kYXRlIHtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFkZ2Uge1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGZvbnQtc2l6ZTogMC43NHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG59XHJcblxyXG4uc3RhdHVzLWRlbGl2ZXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmZGY1O1xyXG4gICAgY29sb3I6ICMxNTgwM2Q7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODZlZmFjO1xyXG59XHJcblxyXG4uc3RhdHVzLXBlbmRpbmcge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmJlYjtcclxuICAgIGNvbG9yOiAjYjQ1MzA5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZkZTY4YTtcclxufVxyXG5cclxuLnN0YXR1cy1jYW5jZWxsZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZlZjJmMjtcclxuICAgIGNvbG9yOiAjYjkxYzFjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZjYTVhNTtcclxufVxyXG5cclxuLm9yZGVyLWJvZHkge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTJweCBtaW5tYXgoMCwgMWZyKTtcclxuICAgIGdhcDogMTRweDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLnByb2R1Y3QtbWVkaWEge1xyXG4gICAgd2lkdGg6IDkycHg7XHJcbiAgICBoZWlnaHQ6IDkycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByb2R1Y3QtbWVkaWEgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLm9yZGVyLWNvbnRlbnQge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4ucHJvZHVjdC1uYW1lIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjMTMyMzNmO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG59XHJcblxyXG4uZGV0YWlsLWdyaWQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogM3B4O1xyXG59XHJcblxyXG4uZGV0YWlsLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgZm9udC1zaXplOiAwLjc2cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG59XHJcblxyXG4uZGV0YWlsLXZhbHVlIHtcclxuICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgZm9udC1zaXplOiAwLjkycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmFkZHJlc3MtdGV4dCB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBmb250LXNpemU6IDAuODRyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40NTtcclxufVxyXG5cclxuLm9yZGVyLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLXNvZnQge1xyXG4gICAgYmFja2dyb3VuZDogI2UyZThmMDtcclxuICAgIGNvbG9yOiAjMWYyOTM3O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjMWQ0ZWQ4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmZGJmZTtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RjMjYyNjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogIzBmNzY2ZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZW1wdHktb3JkZXJzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNkOGUxZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVtcHR5LW9yZGVycyBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzEzMjMzZjtcclxufVxyXG5cclxuLmVtcHR5LW9yZGVycyBwIHtcclxuICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5vcmRlcnMtaGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5vcmRlcnMtZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVyLWJvZHkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LW1lZGlhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWwtZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVyLWFjdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb24tYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-orders',
                templateUrl: './my-orders.component.html',
                styleUrls: ['./my-orders.component.css']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _image_processing_service__WEBPACK_IMPORTED_MODULE_2__["ImageProcessingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "szdb":
/*!**********************************************!*\
  !*** ./src/app/_services/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "";
    }
    createTransaction(amount) {
        return this.httpClient.get(this.baseUrl + "/createTransaction/" + amount);
    }
    marksAsDelivered(orderId) {
        return this.httpClient.get(this.baseUrl + "/markOrderAsDelivered/" + orderId);
    }
    getAllOrderDetailsForAdmin(status) {
        return this.httpClient.get(this.baseUrl + "/getAllOrderDetails/" + status);
    }
    getMyOrders() {
        return this.httpClient.get(this.baseUrl + "/getOrderDetails");
    }
    deleteCartItem(cartId) {
        return this.httpClient.delete(this.baseUrl + "/deleteCartItem/" + cartId);
    }
    addProduct(product) {
        return this.httpClient.post(this.baseUrl + "/addNewProduct", product);
    }
    getAllProducts(pageNumber, searchKeyword = "") {
        return this.httpClient.get(this.baseUrl + "/getAllProducts?pageNumber=" + pageNumber + "&searchKey=" + searchKeyword);
    }
    getProductDetailsById(productId) {
        return this.httpClient.get(this.baseUrl + "/getProductDetailsById/" + productId);
    }
    deleteProduct(productId) {
        return this.httpClient.delete(this.baseUrl + "/deleteProductDetails/" + productId);
    }
    getProductDetails(isSingleProductCheckout, productId) {
        return this.httpClient.get(this.baseUrl + "/getProductDetails/" + isSingleProductCheckout + "/" + productId);
    }
    placeOrder(orderDetails, isCartCheckout) {
        return this.httpClient.post(this.baseUrl + "/placeOrder/" + isCartCheckout, orderDetails);
    }
    addToCart(productId) {
        return this.httpClient.get(this.baseUrl + "/addToCart/" + productId);
    }
    getCardDetails() {
        return this.httpClient.get(this.baseUrl + "/getCartDetails");
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "mkyV");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_auth/auth.guard */ "Tzv4");
/* harmony import */ var _add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-new-product/add-new-product.component */ "MiZa");
/* harmony import */ var _show_product_details_show_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-product-details/show-product-details.component */ "EkQX");
/* harmony import */ var _product_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-resolve.service */ "D5fd");
/* harmony import */ var _product_view_details_product_view_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-view-details/product-view-details.component */ "l4fc");
/* harmony import */ var _buy_product_buy_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buy-product/buy-product.component */ "/e8N");
/* harmony import */ var _buy_product_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buy-product-resolver.service */ "7I07");
/* harmony import */ var _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-confirmation/order-confirmation.component */ "jQDH");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "oZqN");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order-details/order-details.component */ "OGzB");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "NjDy");
/* harmony import */ var _active_users_active_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./active-users/active-users.component */ "6rtO");






















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'admin', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["AdminDashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'forbidden', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_2__["ForbiddenComponent"] },
    {
        path: 'addNewProduct', component: _add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_7__["AddNewProductComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], data: { roles: ['Admin'] },
        resolve: {
            product: _product_resolve_service__WEBPACK_IMPORTED_MODULE_9__["ProductResolveService"]
        }
    },
    { path: 'showProductDetails', component: _show_product_details_show_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ShowProductDetailsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'orderInformation', component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_17__["OrderDetailsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'admin/active-users', component: _active_users_active_users_component__WEBPACK_IMPORTED_MODULE_19__["ActiveUsersComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'productViewDetails', component: _product_view_details_product_view_details_component__WEBPACK_IMPORTED_MODULE_10__["ProductViewDetailsComponent"], resolve: { product: _product_resolve_service__WEBPACK_IMPORTED_MODULE_9__["ProductResolveService"] } },
    {
        path: 'buyProduct', component: _buy_product_buy_product_component__WEBPACK_IMPORTED_MODULE_11__["BuyProductComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], data: { roles: ['User'] },
        resolve: {
            productDetails: _buy_product_resolver_service__WEBPACK_IMPORTED_MODULE_12__["BuyProductResolverService"],
        },
    },
    {
        path: "cart", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], data: { roles: ['User'] }
    },
    {
        path: "orderConfirm",
        component: _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_13__["OrderConfirmationComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: { roles: ["User"] }
    },
    {
        path: "myOrders",
        component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_16__["MyOrdersComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: { roles: ["User"] }
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "VITL");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user-auth.service */ "fa2P");
/* harmony import */ var _services_presence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/presence.service */ "mV+E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.errorMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
class LoginComponent {
    constructor(userService, userAuthService, presenceService, router) {
        this.userService = userService;
        this.userAuthService = userAuthService;
        this.presenceService = presenceService;
        this.router = router;
        this.errorMessage = '';
        this.isLoading = false;
    }
    ngOnInit() { }
    login(loginForm) {
        // Clear previous error message
        this.errorMessage = '';
        // Validate empty fields
        if (!loginForm.value.userName || !loginForm.value.userName.trim()) {
            this.errorMessage = 'Username is required';
            return;
        }
        if (!loginForm.value.userPassword || !loginForm.value.userPassword.trim()) {
            this.errorMessage = 'Password is required';
            return;
        }
        this.isLoading = true;
        this.userService.login(loginForm.value).subscribe((response) => {
            this.isLoading = false;
            this.userAuthService.setRoles(response.user.role);
            this.userAuthService.setToken(response.jwtToken);
            this.presenceService.startHeartbeat();
            const role = response.user.role[0].roleName;
            if (role === 'Admin') {
                this.router.navigate(['/admin']);
            }
            else {
                this.router.navigate(['/']);
            }
        }, (error) => {
            var _a;
            this.isLoading = false;
            // Handle 401 Unauthorized response
            if (error.status === 401) {
                this.errorMessage = ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) || 'Invalid username or password';
            }
            else if (error.status === 0) {
                this.errorMessage = 'Cannot connect to server. Please check if backend is running.';
            }
            else {
                this.errorMessage = 'An error occurred. Please try again.';
            }
            console.log('Login error:', error);
        });
    }
    registerUser() {
        this.router.navigate(['/register']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_presence_service__WEBPACK_IMPORTED_MODULE_3__["PresenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 6, consts: [[1, "container", "mt-5"], [1, "card", "auth-card"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [3, "ngSubmit"], ["loginForm", "ngForm"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "ngModel", "", "name", "userName", "id", "userName", "placeholder", "Username", 3, "disabled"], ["type", "password", "matInput", "", "ngModel", "", "name", "userPassword", "id", "userPassword", "placeholder", "Password", 3, "disabled"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "w-100", 3, "disabled"], [1, "text-center", "secondary-action"], ["mat-raised-button", "", "type", "button", 3, "disabled", "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", 1, "btn-close", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.login(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Logging in..." : "Login", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".auth-card[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n    border-radius: 8px;\r\n}\r\n\r\n.secondary-action[_ngcontent-%COMP%] {\r\n    margin-top: 12px;\r\n}\r\n\r\n\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    border-left: 4px solid #dc3545;\r\n    animation: slideDown 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes slideDown {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(-10px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    opacity: 0.6;\r\n    cursor: not-allowed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsd0JBQXdCOztBQUN4QjtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUEscUNBQXFDOztBQUNyQztJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnNlY29uZGFyeS1hY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuLyogRXJyb3IgYWxlcnQgc3R5bGluZyAqL1xyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNkYzM1NDU7XHJcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIERpc2FibGVkIHN0YXRlIGZvciBmb3JtIGVsZW1lbnRzICovXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] }, { type: _services_presence_service__WEBPACK_IMPORTED_MODULE_3__["PresenceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "yJC3":
/*!*********************************************!*\
  !*** ./src/app/image-processing.service.ts ***!
  \*********************************************/
/*! exports provided: ImageProcessingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageProcessingService", function() { return ImageProcessingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class ImageProcessingService {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    createImages(product) {
        const productImages = product.productImages;
        const productImagesToFileHandle = [];
        for (let i = 0; i < productImages.length; i++) {
            const imageFileData = productImages[i];
            const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
            const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });
            const finalFileHandle = {
                file: imageFile,
                url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
            };
            productImagesToFileHandle.push(finalFileHandle);
        }
        product.productImages = productImagesToFileHandle;
        return product;
    }
    dataURItoBlob(picBytes, imageType) {
        const byteString = window.atob(picBytes);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: imageType });
        return blob;
    }
}
ImageProcessingService.ɵfac = function ImageProcessingService_Factory(t) { return new (t || ImageProcessingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
ImageProcessingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageProcessingService, factory: ImageProcessingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageProcessingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zc6q":
/*!*******************************************!*\
  !*** ./src/app/_auth/auth.interceptor.ts ***!
  \*******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user-auth.service */ "fa2P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthInterceptor {
    constructor(userAuthService, router) {
        this.userAuthService = userAuthService;
        this.router = router;
    }
    intercept(req, next) {
        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }
        const token = this.userAuthService.getToken();
        if (token) {
            req = this.addToken(req, token);
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((err) => {
            console.log(err.status);
            if (err.status === 401) {
                this.router.navigate(['/login']);
            }
            else if (err.status === 403) {
                this.router.navigate(['/forbidden']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])("Some thing is wrong");
        }));
    }
    addToken(request, token) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map