function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./ClientApp/app/Login/login.component.ts":
  /*!************************************************!*\
    !*** ./ClientApp/app/Login/login.component.ts ***!
    \************************************************/

  /*! exports provided: Login */

  /***/
  function ClientAppAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/dataService */
    "./ClientApp/app/shared/dataService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var Login = /*#__PURE__*/function () {
      function Login(data, router) {
        _classCallCheck(this, Login);

        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
          username: "",
          password: ""
        };
      }

      _createClass(Login, [{
        key: "onLogin",
        value: function onLogin() {
          var _this = this;

          this.errorMessage = "";
          this.data.login(this.creds).subscribe(function (success) {
            if (success) {
              if (_this.data.order.items.length == 0) {
                _this.router.navigate([""]);
              } else {
                _this.router.navigate(["checkout"]);
              }
            }
          }, function (err) {
            return _this.errorMessage = "Failed to login";
          });
        }
      }]);

      return Login;
    }();

    Login.ctorParameters = function () {
      return [{
        type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/Login/login.component.html"))["default"]
    })], Login);
    /***/
  },

  /***/
  "./ClientApp/app/app.component.ts":
  /*!****************************************!*\
    !*** ./ClientApp/app/app.component.ts ***!
    \****************************************/

  /*! exports provided: AppComponent */

  /***/
  function ClientAppAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Product List';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'the-shop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./ClientApp/app/app.module.ts":
  /*!*************************************!*\
    !*** ./ClientApp/app/app.module.ts ***!
    \*************************************/

  /*! exports provided: AppModule */

  /***/
  function ClientAppAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./ClientApp/app/app.component.ts");
    /* harmony import */


    var _shop_productList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shop/productList.component */
    "./ClientApp/app/shop/productList.component.ts");
    /* harmony import */


    var _shop_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shop/cart.component */
    "./ClientApp/app/shop/cart.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./ClientApp/app/shop/shop.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./ClientApp/app/checkout/checkout.component.ts");
    /* harmony import */


    var _shared_dataService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/dataService */
    "./ClientApp/app/shared/dataService.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Login/login.component */
    "./ClientApp/app/Login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); //import { AppRoutingModule } from './app-routing.module';


    var routes = [{
      path: "",
      component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["Shop"]
    }, {
      path: "checkout",
      component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["Checkout"]
    }, {
      path: "login",
      component: _Login_login_component__WEBPACK_IMPORTED_MODULE_12__["Login"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shop_productList_component__WEBPACK_IMPORTED_MODULE_5__["ProductList"], _shop_cart_component__WEBPACK_IMPORTED_MODULE_6__["Cart"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["Shop"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["Checkout"], _Login_login_component__WEBPACK_IMPORTED_MODULE_12__["Login"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes, {
        useHash: true,
        enableTracing: false
      })],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"],
        useValue: '/'
      }, _shared_dataService__WEBPACK_IMPORTED_MODULE_9__["DataService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./ClientApp/app/checkout/checkout.component.css":
  /*!*******************************************************!*\
    !*** ./ClientApp/app/checkout/checkout.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function ClientAppAppCheckoutCheckoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".checkout-thumb {\r\n  max-width: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtdGh1bWIge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./ClientApp/app/checkout/checkout.component.ts":
  /*!******************************************************!*\
    !*** ./ClientApp/app/checkout/checkout.component.ts ***!
    \******************************************************/

  /*! exports provided: Checkout */

  /***/
  function ClientAppAppCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Checkout", function () {
      return Checkout;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/dataService */
    "./ClientApp/app/shared/dataService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var Checkout = /*#__PURE__*/function () {
      function Checkout(data, router) {
        _classCallCheck(this, Checkout);

        this.data = data;
        this.router = router;
        this.errorMessage = "";
      }

      _createClass(Checkout, [{
        key: "onCheckout",
        value: function onCheckout() {
          var _this2 = this;

          this.data.checkout().subscribe(function (success) {
            if (success) {
              _this2.router.navigate(["/"]);
            }
          }, function (err) {
            return _this2.errorMessage = "Failed to save order";
          });
        }
      }]);

      return Checkout;
    }();

    Checkout.ctorParameters = function () {
      return [{
        type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Checkout = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "checkout",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/checkout/checkout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.component.css */
      "./ClientApp/app/checkout/checkout.component.css"))["default"]]
    })], Checkout);
    /***/
  },

  /***/
  "./ClientApp/app/shared/dataService.ts":
  /*!*********************************************!*\
    !*** ./ClientApp/app/shared/dataService.ts ***!
    \*********************************************/

  /*! exports provided: DataService */

  /***/
  function ClientAppAppSharedDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./order */
    "./ClientApp/app/shared/order.ts");

    var DataService = /*#__PURE__*/function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.token = "";
        this.tokenExpiration = new Date();
        this.order = new _order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.products = [];
      }

      _createClass(DataService, [{
        key: "loadProducts",
        value: function loadProducts() {
          var _this3 = this;

          return this.http.get("/api/products").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this3.products = data;
            return true;
          }));
        }
      }, {
        key: "login",
        value: function login(creds) {
          var _this4 = this;

          return this.http.post("/account/createtoken", creds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var tokenInfo = response;
            _this4.token = tokenInfo.token;
            _this4.tokenExpiration = tokenInfo.expiration;
            return true;
          }));
        }
      }, {
        key: "checkout",
        value: function checkout() {
          var _this5 = this;

          if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
          }

          return this.http.post("/api/orders", this.order, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.token)
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this5.order = new _order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
            return true;
          }));
        }
      }, {
        key: "AddToOrder",
        value: function AddToOrder(product) {
          var item = this.order.items.find(function (i) {
            return i.productId == product.id;
          });

          if (item) {
            item.quantity++;
          } else {
            item = new _order__WEBPACK_IMPORTED_MODULE_4__["OrderItem"]();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
          }
        }
      }, {
        key: "loginRequired",
        get: function get() {
          return this.token.length == 0 || this.tokenExpiration > new Date();
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], DataService);
    /***/
  },

  /***/
  "./ClientApp/app/shared/order.ts":
  /*!***************************************!*\
    !*** ./ClientApp/app/shared/order.ts ***!
    \***************************************/

  /*! exports provided: Order, OrderItem */

  /***/
  function ClientAppAppSharedOrderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderItem", function () {
      return OrderItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

    var Order = /*#__PURE__*/function () {
      function Order() {
        _classCallCheck(this, Order);

        this.orderDate = new Date();
        this.items = new Array();
      }

      _createClass(Order, [{
        key: "subtotal",
        get: function get() {
          return lodash__WEBPACK_IMPORTED_MODULE_1__["sum"](lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.items, function (i) {
            return i.unitPrice * i.quantity;
          }));
        }
      }]);

      return Order;
    }();

    var OrderItem = function OrderItem() {
      _classCallCheck(this, OrderItem);
    };
    /***/

  },

  /***/
  "./ClientApp/app/shop/cart.component.ts":
  /*!**********************************************!*\
    !*** ./ClientApp/app/shop/cart.component.ts ***!
    \**********************************************/

  /*! exports provided: Cart */

  /***/
  function ClientAppAppShopCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cart", function () {
      return Cart;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/dataService */
    "./ClientApp/app/shared/dataService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var Cart = /*#__PURE__*/function () {
      function Cart(data, router) {
        _classCallCheck(this, Cart);

        this.data = data;
        this.router = router;
      }

      _createClass(Cart, [{
        key: "onCheckout",
        value: function onCheckout() {
          if (this.data.loginRequired) {
            this.router.navigate(["login"]);
          } else {
            this.router.navigate(["checkout"]);
          }
        }
      }]);

      return Cart;
    }();

    Cart.ctorParameters = function () {
      return [{
        type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "the-cart",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/cart.component.html"))["default"]
    })], Cart);
    /***/
  },

  /***/
  "./ClientApp/app/shop/productList.component.css":
  /*!******************************************************!*\
    !*** ./ClientApp/app/shop/productList.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function ClientAppAppShopProductListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-info img{\r\n    max-width: 100px;\r\n    float:left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.product-info .product-name {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hvcC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3Nob3AvcHJvZHVjdExpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWluZm8gaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm8gLnByb2R1Y3QtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./ClientApp/app/shop/productList.component.ts":
  /*!*****************************************************!*\
    !*** ./ClientApp/app/shop/productList.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProductList */

  /***/
  function ClientAppAppShopProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductList", function () {
      return ProductList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/dataService */
    "./ClientApp/app/shared/dataService.ts");

    var ProductList = /*#__PURE__*/function () {
      function ProductList(data) {
        _classCallCheck(this, ProductList);

        this.data = data;
        this.products = [];
        this.products = data.products;
      }

      _createClass(ProductList, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.data.loadProducts().subscribe(function (success) {
            if (success) {
              _this6.products = _this6.data.products;
            }
          });
        }
      }, {
        key: "addProduct",
        value: function addProduct(product) {
          this.data.AddToOrder(product);
        }
      }]);

      return ProductList;
    }();

    ProductList.ctorParameters = function () {
      return [{
        type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    ProductList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "product-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./productlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/productlist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./productList.component.css */
      "./ClientApp/app/shop/productList.component.css"))["default"]]
    })], ProductList);
    /***/
  },

  /***/
  "./ClientApp/app/shop/shop.component.ts":
  /*!**********************************************!*\
    !*** ./ClientApp/app/shop/shop.component.ts ***!
    \**********************************************/

  /*! exports provided: Shop */

  /***/
  function ClientAppAppShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Shop", function () {
      return Shop;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Shop = function Shop() {
      _classCallCheck(this, Shop);
    };

    Shop = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "the-shop",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/shop.component.html"))["default"]
    })], Shop);
    /***/
  },

  /***/
  "./ClientApp/environments/environment.ts":
  /*!***********************************************!*\
    !*** ./ClientApp/environments/environment.ts ***!
    \***********************************************/

  /*! exports provided: environment */

  /***/
  function ClientAppEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./ClientApp/main.ts":
  /*!***************************!*\
    !*** ./ClientApp/main.ts ***!
    \***************************/

  /*! no exports provided */

  /***/
  function ClientAppMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./ClientApp/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./ClientApp/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/Login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/Login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsClientAppAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-4 col-md-offset-4\">\n      <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\n    <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required/>\n          <div class=\"text-danger\" *ngIf=\"username.invalid && username.errors.required\">Username is required!</div>\n      </div>\n      <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required />\r\n          <div class=\"text-danger\" *ngIf=\"password.invalid && password.errors.required\">Password is required!</div>\r\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\n        <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\n      </div>\n    </form>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsClientAppAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/checkout/checkout.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/checkout/checkout.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsClientAppAppCheckoutCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n  <h3>Confirm Order</h3>\r\n  <table class=\"table table-bordered table-hover\">\r\n    <tr *ngFor=\"let o of data.order.items\">\r\n      <td><img src=\"/img/{{ o.productArtId }}.jpg\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\r\n      <td>{{ o.productCategory }}({{ o.productSize }}) - {{ o.productArtist }}: {{ o.productTitle }}</td>\r\n      <td>{{ o.quantity }}</td>\r\n      <td>{{ o.unitPrice|currency:'USD':\"symbol\" }}</td>\r\n      <td>{{ (o.unitPrice * o.quantity)|currency:'USD':\"symbol\" }}</td>\r\n    </tr>\r\n  </table>\r\n  <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n    <table class=\"table table-condensed\">\r\n      <tr>\r\n        <td class=\"text-right\">Subtotal</td>\r\n        <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':\"symbol\" }}</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-right\">Shipping</td>\r\n        <td class=\"text-right\">$ 0.00</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-right\">Total:</td>\r\n        <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':\"symbol\" }}</td>\r\n      </tr>\r\n    </table>\r\n    <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n    <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n  </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/cart.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/cart.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsClientAppAppShopCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Shopping Cart</h3>\r\n<div>#/Items: {{ data.order.items.length }}</div>\r\n<div>Subtotal: {{ data.order.subtotal | currency:\"USD\":true }}</div>\r\n<table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Product</td>\r\n            <td>#</td>\r\n            <td>$</td>\r\n            <td>Total</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td>{{ o.productCategory }} - {{ o.productTitle }}</td>\r\n            <td>{{ o.quantity }}</td>\r\n            <td>{{ o.unitPrice | currency:\"USD\":true }}</td>\r\n            <td>{{ (o.unitPrice * o.quantity) | currency:\"USD\":true }}</td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" *ngIf=\"data.order.items.length > 0\" (click)=\"onCheckout()\">Checkout</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/productlist.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/productlist.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsClientAppAppShopProductlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"product-info col-md-4 well well-sm\" *ngFor=\"let p of products\">\r\n            <img src=\"/img/{{p.artId}}.jpg\" class=\"img-responsive\" [alt]=\"p.title\" />\r\n            <div class=\"product-name\">{{p.category}} - {{p.size}}</div>\r\n            <div><strong>Price</strong>: {{p.price | currency:\"USD\":true}}</div>\r\n            <div><strong>Arist</strong>: {{p.artist}}</div>\r\n            <div><strong>Title</strong>: {{p.title}}</div>\r\n            <div><strong>Description</strong>: {{p.artDescription}}</div>\r\n            <button id=\"buyButton\" class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\">Buy</button>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/shop.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/shop.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsClientAppAppShopShopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{ title }}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"well well-sm\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  0:
  /*!*********************************!*\
    !*** multi ./ClientApp/main.ts ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\johng\source\repos\DutchTreat\ClientApp\main.ts */
    "./ClientApp/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map