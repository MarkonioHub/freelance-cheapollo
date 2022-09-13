/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/app.js":
/*!*******************************!*\
  !*** ./assets/scripts/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_autocompleteAndSendForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/autocompleteAndSendForm */ "./assets/scripts/tools/autocompleteAndSendForm.js");
/* harmony import */ var _tools_my_fancybox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/my-fancybox */ "./assets/scripts/tools/my-fancybox.js");
/* harmony import */ var _tools_ScrollToAnchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/ScrollToAnchor */ "./assets/scripts/tools/ScrollToAnchor.js");
/* harmony import */ var _tools_ScrollToAnchor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tools_ScrollToAnchor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modal_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal-box */ "./assets/scripts/components/modal-box.js");
/* harmony import */ var _components_modal_box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_modal_box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/faq */ "./assets/scripts/components/faq.js");
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_faq__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about */ "./assets/scripts/components/about.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_about__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_reviews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/reviews */ "./assets/scripts/components/reviews.js");
/* harmony import */ var _components_reviews__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_reviews__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product */ "./assets/scripts/components/product.js");
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_product__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_index_cap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/index-cap */ "./assets/scripts/components/index-cap.js");
/* harmony import */ var _components_index_cap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_index_cap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_create_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-password */ "./assets/scripts/components/create-password.js");
/* harmony import */ var _components_create_password__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_create_password__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_header_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header__search */ "./assets/scripts/components/header__search.js");
/* harmony import */ var _components_header_fixed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header-fixed */ "./assets/scripts/components/header-fixed.js");
/* harmony import */ var _components_header_fixed__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_header_fixed__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_catalog_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/catalog-modal */ "./assets/scripts/components/catalog-modal.js");
/* harmony import */ var _components_catalog_modal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_catalog_modal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_basket__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/basket */ "./assets/scripts/components/basket.js");
/* harmony import */ var _components_category_filters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/category-filters */ "./assets/scripts/components/category-filters.js");
/* harmony import */ var _components_category_filters__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_category_filters__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_tile_button_favorite__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tile-button-favorite */ "./assets/scripts/components/tile-button-favorite.js");
/* harmony import */ var _components_tile_button_favorite__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_tile_button_favorite__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_product_buy_button_like__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product-buy-button-like */ "./assets/scripts/components/product-buy-button-like.js");
/* harmony import */ var _components_modal_basket__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modal-basket */ "./assets/scripts/components/modal-basket.js");
/* harmony import */ var _components_tile_button_basket__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tile__button_basket */ "./assets/scripts/components/tile__button_basket.js");
/* harmony import */ var _components_order__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/order */ "./assets/scripts/components/order.js");
/* harmony import */ var _components_order__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_components_order__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_modal_courier__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modal-courier */ "./assets/scripts/components/modal-courier.js");
/* harmony import */ var _components_modal_courier__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_components_modal_courier__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_modal_transport__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/modal-transport */ "./assets/scripts/components/modal-transport.js");
/* harmony import */ var _components_modal_transport__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_components_modal_transport__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_modal_map_order__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/modal-map-order */ "./assets/scripts/components/modal-map-order.js");
/* harmony import */ var _components_contacts_map__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/contacts-map */ "./assets/scripts/components/contacts-map.js");
/* harmony import */ var _components_delivery__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/delivery */ "./assets/scripts/components/delivery.js");
/* harmony import */ var _components_delivery__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_components_delivery__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_order_about__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/order-about */ "./assets/scripts/components/order-about.js");
/* harmony import */ var _components_my_orders__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/my-orders */ "./assets/scripts/components/my-orders.js");




























/***/ }),

/***/ "./assets/scripts/components/about.js":
/*!********************************************!*\
  !*** ./assets/scripts/components/about.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var about = document.querySelector('[data-element="about"]');
if (about) setTimeout(aboutInit, 0);

function aboutInit() {
  var aboutTable = about.querySelector('[data-element="about__table"]');
  var aboutTableMore = about.querySelector('[data-element="about__table-more"]');
  aboutTableMore.addEventListener("click", toggleAboutTable);

  if (aboutTable.clientHeight > 200) {
    aboutTable.classList.add("about__table_scroll");
    aboutTableMore.classList.add("about__table-more_active");
  }

  function toggleAboutTable() {
    if (aboutTable.classList.contains("about__table_scroll-active")) {
      aboutTable.classList.remove("about__table_scroll-active");
      aboutTableMore.innerHTML = "Показать всё";
      aboutTableMore.classList.remove("about__table-more_reverse");
    } else {
      aboutTable.classList.add("about__table_scroll-active");
      aboutTableMore.innerHTML = "Свернуть";
      aboutTableMore.classList.add("about__table-more_reverse");
    }
  }
}

/***/ }),

/***/ "./assets/scripts/components/basket.js":
/*!*********************************************!*\
  !*** ./assets/scripts/components/basket.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_Basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/Basket */ "./assets/scripts/tools/Basket.js");
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/FavoritePosts */ "./assets/scripts/tools/FavoritePosts.js");
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_3__);




var view = document.querySelector('[data-element="basket__box"]');
if (view) setTimeout(initBasket, 0);
var counterElements = document.querySelectorAll('[data-element="basket__counter"]');
var basketInputCounterArray = document.getElementsByClassName("basket__input-counter");
var basketResultValue = document.querySelector('[data-element="basket__result-value"]');
var basketOrderInfoItemValueDiscount = document.querySelector('[data-element="basket__order-info-item-value_discount"]');
var basketOrderInfoItemValuePromocode = document.querySelector('[data-element="basket__order-info-item-value_promocode"]');
var basketOrderInfoItemValuePriceFull = document.querySelector('[data-element="basket__order-info-item-value_price-full"]');
var basketOrderInfoItemValueCountAll = document.querySelector('[data-element="basket__order-info-item-value_count-all"]');
var basketOrderInfoItemValueWeight = document.querySelector('[data-element="basket__order-info-item-value_weight"]');
var basketFixedPriceOld = document.querySelector('[data-element="basket__fixed-price-old"]');
var basketFixedPriceCurrent = document.querySelector('[data-element="basket__fixed-price-current"]');
var headerMobileText = document.querySelector('[data-element="header-mobile__text"]');
var basketTextMain = document.querySelector('[data-element="basket__text-main"]');

function refreshPrice() {
  var priceFull = 0;
  var discountFull = 0;
  var countAll = 0;
  var weight = 0;
  var priceResult = 0;

  for (var i = 0; i < basketInputCounterArray.length; i++) {
    var _price = +basketInputCounterArray[i].getAttribute("data-price") * +basketInputCounterArray[i].value;

    var discount = +basketInputCounterArray[i].getAttribute("data-discount") * +basketInputCounterArray[i].value;
    priceFull = priceFull + _price;
    if (discount) discountFull = discountFull + discount;
    countAll = countAll + +basketInputCounterArray[i].value;
    weight = weight + +basketInputCounterArray[i].getAttribute("data-weight") * +basketInputCounterArray[i].value;
  }

  priceResult = (priceFull - discountFull).toFixed(2);
  basketResultValue.textContent = formatPrice(String(priceResult));
  basketFixedPriceCurrent.textContent = formatPrice(String(priceResult));

  if (discountFull) {
    basketOrderInfoItemValueDiscount.textContent = "-" + formatPrice(String(discountFull.toFixed(2)));
  } else {
    basketOrderInfoItemValueDiscount.remove();
  }

  basketOrderInfoItemValuePriceFull.textContent = formatPrice(String(priceFull.toFixed(2)));
  var price = formatPrice(String(priceResult));
  basketFixedPriceCurrent.textContent = price.substring(0, price.length - 1);
  basketFixedPriceOld.textContent = formatPrice(String(priceFull.toFixed(2)));
  basketOrderInfoItemValueCountAll.textContent = countAll.toFixed(2);
  basketOrderInfoItemValueWeight.textContent = formatPrice(String(weight.toFixed(2)));
  headerMobileText.textContent = countAll.toFixed(2) + " " + morph(countAll.toFixed(2)) + " на сумму " + formatPrice(String(priceResult));
  basketTextMain.textContent = countAll.toFixed(2) + " " + morph(countAll.toFixed(2)) + " на сумму " + formatPrice(String(priceResult));
}

function morph(int, array) {
  return (array = array || ['товар', 'товара', 'товаров']) && array[int % 100 > 4 && int % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]];
}

function formatPrice(priceString) {
  (+priceString).toFixed(2);
  if (priceString.length < 4) return "".concat(priceString, " \u20BD").trim();
  return "".concat(priceString.slice(-12, -9), " ").concat(priceString.slice(-9, -6), " ").concat(priceString.slice(-6, -3), " ").concat(priceString.slice(-3, priceString.length), " \u20BD").trim();
}

function initBasket() {
  var basket = document.querySelector('[data-element="basket__form"]');
  basket.addEventListener('input', refreshPrice);
  refreshPrice();
  basket.addEventListener('submit', function (event) {
    event.preventDefault();
    _tools_Basket__WEBPACK_IMPORTED_MODULE_2__["Basket"].clean();
    basket.submit();
  });

  if (counterElements.length) {
    counterElements.forEach(function (element) {
      new InputCount(element);
    });
  }

  var productElements = document.querySelectorAll('[data-element="basket__item"]');

  if (productElements.length) {
    productElements.forEach(function (element) {
      new Product(element);
    });
  }
}

var Product = /*#__PURE__*/function () {
  function Product(productElement) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Product);

    this._view = productElement;
    this._buttonRemove = this.view.querySelector('[data-element="basket__btn_delete"]');

    this._buttonRemove.addEventListener('click', function () {
      _this.remove();
    });

    this._buttonFavorite = this.view.querySelector('[data-element="basket__favorite"]');

    this._buttonFavorite.addEventListener('click', function () {
      _this.toggleFavorites();
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Product, [{
    key: "toggleFavorites",
    value: function toggleFavorites() {
      var id = this._buttonFavorite.getAttribute("data-id");

      if (this._buttonFavorite.classList.contains('basket__favorite_active')) {
        Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_3__["deleteProductFromFavorites"])(this._buttonFavorite, id, "basket__favorite_active");
      } else {
        Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_3__["addProductInFavorites"])(this._buttonFavorite, id, "basket__favorite_active");
      }
    }
  }, {
    key: "view",
    get: function get() {
      return this._view;
    }
  }, {
    key: "count",
    get: function get() {
      return this._count;
    },
    set: function set(count) {
      this._count = count;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.view.remove();

      var dataId = this._buttonRemove.getAttribute("data-id");

      _tools_Basket__WEBPACK_IMPORTED_MODULE_2__["Basket"].removeProduct(dataId);
      var basketBoxArray = document.querySelectorAll('[data-element="basket__box"]');

      for (var i = 0; i < basketBoxArray.length; i++) {
        var items = basketBoxArray[i].querySelectorAll('[data-element="basket__item"]');
        if (!items.length) basketBoxArray[i].remove();
      }

      var productElements = document.querySelectorAll('[data-element="basket__item"]');

      if (!productElements.length) {
        this.removeBlock();
        var infoEmptyPage = document.querySelector('[data-element="info-empty-page"]');
        infoEmptyPage.classList.remove("info-empty-page_hidden");
      }

      refreshPrice();
    }
  }, {
    key: "removeBlock",
    value: function removeBlock() {
      var basket = document.querySelector('[data-element="basket"]');
      if (basket) basket.remove();
    }
  }]);

  return Product;
}();

var InputCount = /*#__PURE__*/function () {
  function InputCount(countElement) {
    var _this2 = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InputCount);

    this._view = countElement;
    this._input = this._view.querySelector('[data-element="basket__input-counter"]');
    this._step = this._input.getAttribute('data-step') ? +this._input.getAttribute('data-step') : 1;
    this._buttonDown = this._view.querySelector('[data-element="basket__btn_down"]');
    this._buttonUp = this._view.querySelector('[data-element="basket__btn_up"]');
    this._buttonClose = this._view.querySelector('[data-element="basket__btn_delete"]');

    this._input.addEventListener('change', function () {
      return _this2.validation();
    });

    this._buttonDown.addEventListener('click', function () {
      return _this2.down();
    });

    this._buttonUp.addEventListener('click', function () {
      return _this2.up();
    });

    this.validation();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InputCount, [{
    key: "value",
    get: function get() {
      return +this._input.value;
    },
    set: function set(value) {
      this._input.value = value;
    }
  }, {
    key: "validation",
    value: function validation() {
      this.value = Math.trunc(this.value);
      if (this.value === 0) this.value = 1;else this.value = Math.abs(this.value);
      if (this.value === 1) this.hideDown();else this.showDown();
    }
  }, {
    key: "hideDown",
    value: function hideDown() {
      this._buttonDown.style.display = 'none';
      this.showClose();
    }
  }, {
    key: "showDown",
    value: function showDown() {
      this._buttonDown.style.display = 'block';
      this.hideClose();
    }
  }, {
    key: "hideClose",
    value: function hideClose() {
      this._buttonClose.style.display = 'none';
    }
  }, {
    key: "showClose",
    value: function showClose() {
      this._buttonClose.style.display = 'block';
    }
  }, {
    key: "down",
    value: function down() {
      if (this._step) {
        this.value = (this.value - this._step).toFixed(2);
      } else {
        this.value -= 1;
      }

      if (this.value <= 1) {
        this.hideDown();
        this.value = 1;
      }

      refreshPrice();
    }
  }, {
    key: "up",
    value: function up() {
      if (this._step) {
        this.value = (this.value + this._step).toFixed(2);
      } else {
        this.value += 1;
      }

      if (this.value > 1) this.showDown();
      refreshPrice();
    }
  }]);

  return InputCount;
}();

/***/ }),

/***/ "./assets/scripts/components/catalog-modal.js":
/*!****************************************************!*\
  !*** ./assets/scripts/components/catalog-modal.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var headerCatalogBtn = document.querySelector('[data-element="header__catalog"]');
if (headerCatalogBtn) setTimeout(headerCatalogBtnInit, 0);

function headerCatalogBtnInit() {
  var catalogModal = document.querySelector('[data-element="catalog-modal"]');
  var header = document.querySelector('[data-element="header"]');
  var headerLayer = document.querySelector('[data-element="header__layer"]');
  var catalogModalItemArray = catalogModal.querySelectorAll('[data-category="true"]');
  var categoryCapLinkArray = catalogModal.querySelectorAll('[data-element="category-cap__link"]');
  var categoryCapLinkArrayAll = catalogModal.querySelectorAll('[data-category-cap-link-all="true"]');
  var catalogModalBack = catalogModal.querySelector('[data-element="category-cap__back"]');
  var catalogModalList = catalogModal.querySelector('[data-element="category-cap__list"]');
  var catalogModalListModal = catalogModal.querySelector('[data-element="catalog-modal__list_modal"]');

  for (var i = 0; i < categoryCapLinkArray.length; i++) {
    categoryCapLinkArray[i].addEventListener("click", openInnerCategories2);
  }

  function openInnerCategories2() {
    hideAllLink();
    var id = this.getAttribute("data-category-cap-link-id");
    var currentLinkList = catalogModal.querySelectorAll('[data-inner-category-id-2="' + id + '"]');

    for (var _i = 0; _i < currentLinkList.length; _i++) {
      currentLinkList[_i].classList.remove("category-cap__link_hidden");
    }

    catalogModalBack.setAttribute("category3", "true");
    catalogModalBack.setAttribute("id", id);
  }

  for (var _i2 = 0; _i2 < catalogModalItemArray.length; _i2++) {
    catalogModalItemArray[_i2].addEventListener("click", openInnerCategories);
  }

  catalogModalBack.addEventListener("click", closeInnerCategories);

  function openInnerCategories() {
    var id = this.getAttribute("data-category-id");
    var currentLinkList = catalogModal.querySelectorAll('[data-inner-category-id-1="' + id + '"]');

    for (var _i3 = 0; _i3 < currentLinkList.length; _i3++) {
      currentLinkList[_i3].classList.remove("category-cap__link_hidden");
    }

    catalogModalBack.classList.add("category-cap__back_active");
    hideMainCategory();
    catalogModalList.classList.remove("category-cap__list_hidden");
  }

  function hideMainCategory() {
    catalogModalListModal.classList.add("catalog-modal__list_hidden");
  }

  function showMainCategory() {
    catalogModalListModal.classList.remove("catalog-modal__list_hidden");
  }

  function closeInnerCategories() {
    if (catalogModalBack.getAttribute("category3")) {
      var id = catalogModalBack.getAttribute("id");
      var currentLink = catalogModal.querySelector('[data-category-cap-link-id="' + id + '"]');
      var searchId = currentLink.getAttribute("data-inner-category-id-1");
      var currentLinkList2 = catalogModal.querySelectorAll('[data-inner-category-id-1="' + searchId + '"]');
      hideAllLink();

      for (var _i4 = 0; _i4 < currentLinkList2.length; _i4++) {
        currentLinkList2[_i4].classList.remove("category-cap__link_hidden");
      }

      catalogModalBack.removeAttribute("category3");
    } else {
      showMainCategory();
      catalogModalList.classList.add("category-cap__list_hidden");
      catalogModalBack.classList.remove("category-cap__back_active");
      hideAllLink();
    }
  }

  function hideAllLink() {
    for (var _i5 = 0; _i5 < categoryCapLinkArrayAll.length; _i5++) {
      categoryCapLinkArrayAll[_i5].classList.add("category-cap__link_hidden");
    }
  }

  headerLayer.addEventListener("click", closeCatalog);
  headerCatalogBtn.addEventListener("click", toggleCatalog);

  function toggleCatalog() {
    if (headerCatalogBtn.classList.contains("header__catalog_active")) {
      closeCatalog();
    } else {
      openCatalog();
    }
  }

  function openCatalog() {
    headerCatalogBtn.classList.add("header__catalog_active");
    header.classList.add("header_catalog-active");
    headerLayer.classList.add("header__layer_active");
    openHeaderCatalog();
  }

  function closeCatalog() {
    headerCatalogBtn.classList.remove("header__catalog_active");
    header.classList.remove("header_catalog-active");
    headerLayer.classList.remove("header__layer_active");
    closeHeaderCatalog();
  }

  function closeHeaderCatalog() {
    catalogModal.classList.remove("catalog-modal_opacity-active");
    setTimeout(displayHide, 200);

    function displayHide() {
      catalogModal.classList.remove("catalog-modal_display-active");
    }
  }

  function openHeaderCatalog() {
    catalogModal.classList.add("catalog-modal_display-active");
    setTimeout(opacityActive, 0);

    function opacityActive() {
      catalogModal.classList.add("catalog-modal_opacity-active");
    }
  }
}

/***/ }),

/***/ "./assets/scripts/components/category-filters.js":
/*!*******************************************************!*\
  !*** ./assets/scripts/components/category-filters.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sidebarFilter = document.querySelector('[data-element="category__filters"]');

if (sidebarFilter) {
  setTimeout(sidebarFilterInit, 0);
}

function sidebarFilterInit() {
  var categoryCheckboxBoxArray = sidebarFilter.querySelectorAll('[data-element="category__checkbox-box"]');

  for (var i = 0; i < categoryCheckboxBoxArray.length; i++) {
    categoryCheckboxBoxInit(categoryCheckboxBoxArray[i]);
  }

  var openButton = document.querySelector('[data-element="category-cap__filters-open"]');
  var layer = document.getElementsByClassName('category__filters-layer')[0];
  var buttonClose = sidebarFilter.getElementsByClassName('category__filters-close')[0];
  var doubleInputs = sidebarFilter.querySelectorAll('[data-element="category__double-price"]');
  doubleInputs.forEach(filterBlockInit);

  function filterBlockInit(block) {
    var minInput = block.querySelector('[data-element="category__double-input_start"]');
    var maxInput = block.querySelector('[data-element="category__double-input_end"]');
    minInput.addEventListener('input', checkDoubleValue);
    maxInput.addEventListener('input', checkDoubleValue);

    function checkDoubleValue() {
      isValidDoubleIInput(minInput, maxInput);
    }
  }

  function isValidDoubleIInput(start, end) {
    if (+start.value > +end.value) {
      start.classList.add('category__double-input_error');
      end.classList.add('category__double-input_error');
      return false;
    }

    start.classList.remove('category__double-input_error');
    end.classList.remove('category__double-input_error');
    return true;
  }

  sidebarFilter.addEventListener('submit', checkSubmit);

  function checkSubmit(event) {
    if (notValidInputs()) return event.preventDefault();
  }

  function notValidInputs() {
    var invalidInputs = sidebarFilter.getElementsByClassName('category__double-input_error');
    return !!invalidInputs.length;
  }

  openButton.addEventListener('click', showFilter);

  function showFilter() {
    layer.classList.add('category__filters-layer_active');
    sidebarFilter.classList.add('category__filters_active');
  }

  layer.addEventListener('click', hideFilter);
  buttonClose.addEventListener('click', hideFilter);

  function hideFilter() {
    layer.classList.remove('category__filters-layer_active');
    sidebarFilter.classList.remove('category__filters_active');
  }
}

function categoryCheckboxBoxInit(box) {
  var categoryCheckboxList = box.querySelector('[data-element="category__checkbox-list"]');
  var categoryCheckboxLabelArray = categoryCheckboxList.querySelectorAll('[data-element="category__checkbox-label"]');

  if (categoryCheckboxLabelArray.length < 10) {
    var _categoryCheckboxMore = box.querySelector('[data-element="category__checkbox-more"]');

    _categoryCheckboxMore.style.display = "none";
    return;
  }

  var categoryCheckboxMore = box.querySelector('[data-element="category__checkbox-more"]');
  categoryCheckboxMore.addEventListener('click', toggleList);
  hideList(categoryCheckboxMore);

  function toggleList() {
    if (this.classList.contains("category__checkbox-more_active")) {
      hideList(this);
    } else {
      this.classList.add("category__checkbox-more_active");

      for (var i = 0; i < categoryCheckboxLabelArray.length; i++) {
        categoryCheckboxLabelArray[i].classList.remove("category__checkbox-label_hidden");
      }

      this.textContent = "Скрыть";
    }
  }

  function hideList(btn) {
    btn.classList.remove("category__checkbox-more_active");

    for (var i = 10; i < categoryCheckboxLabelArray.length; i++) {
      categoryCheckboxLabelArray[i].classList.add("category__checkbox-label_hidden");
    }

    btn.textContent = "\u0415\u0449\u0451 ".concat(categoryCheckboxLabelArray.length - 5);
  }
}

/***/ }),

/***/ "./assets/scripts/components/contacts-map.js":
/*!***************************************************!*\
  !*** ./assets/scripts/components/contacts-map.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var contactsMap = document.querySelector('[data-element="contacts-map"]');
if (contactsMap) setTimeout(contactsMapInit, 0);

function contactsMapInit() {
  var contactsMapShowInfoArray = contactsMap.querySelectorAll('[data-element="contacts-map__show-info"]');

  for (var i = 0; i < contactsMapShowInfoArray.length; i++) {
    contactsMapShowInfoArray[i].addEventListener('click', toggleInfoList);
  }

  initMap();
}

function toggleInfoList() {
  var infoList = this.previousElementSibling;

  if (infoList.classList.contains('contacts-map__info_active')) {
    infoList.classList.remove('contacts-map__info_active');
    this.classList.remove("contacts-map__show-info_active");
    this.textContent = "Показать фото и описание пункта";
  } else {
    infoList.classList.add('contacts-map__info_active');
    this.classList.add("contacts-map__show-info_active");
    this.textContent = "Скрыть описание";
  }
} // async function initMap () {
//   const map = document.getElementById(`contacts-map__map`)
//   const centerCoords = map.getAttribute('data-coords-center')
//
//   const script = document.createElement("script")
//   const body = document.getElementsByTagName("body")[0]
//   body.append(script)
//   script.addEventListener('load', scriptLoaded)
//   script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU"
//
//   function scriptLoaded() {
//     createMap(centerCoords)
//   }
// }


function createMap(_x) {
  return _createMap.apply(this, arguments);
}

function _createMap() {
  _createMap = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(centerCoords) {
    var init, _init;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _init = function _init3() {
              _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                var zoom, myMap, modalOrderMapAddressArray, i, setMapCenter;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        setMapCenter = function _setMapCenter() {
                          var centerCoords = JSON.parse(this.parentElement.getAttribute("data-coords"));
                          myMap.setCenter(centerCoords);
                        };

                        zoom = window.innerWidth > 950 ? 14 : 15;
                        console.log(JSON.parse(centerCoords));
                        myMap = new ymaps.Map("contacts-map__map", {
                          center: JSON.parse(centerCoords),
                          zoom: zoom
                        }); // const modalOrderMapItemArray = document.querySelectorAll('[data-element="contacts-map__item"]')
                        // for (let i = 0; i < modalOrderMapItemArray.length; i++) {
                        //   createPlacemark(modalOrderMapItemArray[i])
                        // }
                        //
                        // function createPlacemark (item) {
                        //   const coords = JSON.parse(item.getAttribute('data-coords'))
                        //   const caption = item.getAttribute('data-map-caption')
                        //   const placemark = new ymaps.Placemark(coords, {
                        //     iconCaption: caption
                        //   })
                        //   myMap.geoObjects.add(placemark)
                        // }

                        modalOrderMapAddressArray = document.querySelectorAll('[data-element="contacts-map__address"]');

                        for (i = 0; i < modalOrderMapAddressArray.length; i++) {
                          modalOrderMapAddressArray[i].addEventListener("click", setMapCenter);
                        }

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return _init.apply(this, arguments);
            };

            init = function _init2() {
              return _init.apply(this, arguments);
            };

            ymaps.ready(init);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createMap.apply(this, arguments);
}

function initMap() {
  var map = document.getElementById("contacts-map__map");
  var centerMap = map.getAttribute('data-coords-center');
  var zoom = window.innerWidth > 950 ? 5 : 3;
  loadMap();

  function loadMap() {
    var mapScript = document.createElement('script');
    mapScript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    document.body.appendChild(mapScript);
    mapScript.addEventListener('load', function () {
      ymaps.ready(contactMapInit);
    });
  }

  function contactMapInit() {
    var myMap;
    var zoom = window.innerWidth > 950 ? 14 : 15;
    myMap = new ymaps.Map('contacts-map__map', {
      center: JSON.parse(centerMap),
      zoom: zoom
    });
    var modalOrderMapItemArray = document.querySelectorAll('[data-element="contacts-map__item"]');

    for (var i = 0; i < modalOrderMapItemArray.length; i++) {
      createPlacemark(modalOrderMapItemArray[i]);
    }

    function createPlacemark(item) {
      var coords = JSON.parse(item.getAttribute('data-coords'));
      var caption = item.getAttribute('data-map-caption');
      var placemark = new ymaps.Placemark(coords, {
        iconCaption: caption
      });
      myMap.geoObjects.add(placemark);
    }

    var modalOrderMapAddressArray = document.querySelectorAll('[data-element="contacts-map__address"]');

    for (var _i = 0; _i < modalOrderMapAddressArray.length; _i++) {
      modalOrderMapAddressArray[_i].addEventListener("click", setMapCenter);
    }

    function setMapCenter() {
      var centerCoords = JSON.parse(this.parentElement.getAttribute("data-coords"));
      myMap.setCenter(centerCoords);
    }
  }
}

/***/ }),

/***/ "./assets/scripts/components/create-password.js":
/*!******************************************************!*\
  !*** ./assets/scripts/components/create-password.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var createPasswordForm = document.querySelector('[data-element="create-password__form"]');
if (createPasswordForm) setTimeout(createPasswordFormInit, 0);

function createPasswordFormInit() {
  var password1 = createPasswordForm.querySelector('[data-element="password1"]');
  var password2 = createPasswordForm.querySelector('[data-element="password2"]');
  var createPasswordSubmit = createPasswordForm.querySelector('[data-element="create-password__submit"]');
  createPasswordForm.addEventListener("input", validateForm);

  function validateForm() {
    if (password1.value === password2.value) {
      createPasswordSubmit.disabled = false;
    } else {
      createPasswordSubmit.disabled = true;
    }
  }
}

/***/ }),

/***/ "./assets/scripts/components/delivery.js":
/*!***********************************************!*\
  !*** ./assets/scripts/components/delivery.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var delivery = document.querySelector('[data-element="delivery"]');
if (delivery) setTimeout(deliveryInit, 0);

function deliveryInit() {
  var deliveryNavItemArray = delivery.querySelectorAll('[data-element="delivery__nav-item"]');

  for (var i = 0; i < deliveryNavItemArray.length; i++) {
    deliveryNavItemArray[i].addEventListener('click', toggleDeliverySection);
  }
}

function toggleDeliverySection() {
  if (this.classList.contains('delivery__nav-item_active')) return;
  var oldActiveItem = delivery.getElementsByClassName("delivery__nav-item_active")[0];
  if (oldActiveItem) oldActiveItem.classList.remove("delivery__nav-item_active");
  this.classList.add("delivery__nav-item_active");
  var oldActiveSection = document.getElementsByClassName("delivery-section_show")[0];
  if (oldActiveSection) oldActiveSection.classList.remove("delivery-section_show");
  var selector = this.getAttribute("data-show");
  var newActiveSection = document.querySelector('[data-element="' + selector + '"]');
  newActiveSection.classList.add("delivery-section_show");
}

/***/ }),

/***/ "./assets/scripts/components/faq.js":
/*!******************************************!*\
  !*** ./assets/scripts/components/faq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var faq = document.querySelector('[data-element="faq"]');
if (faq) setTimeout(faqInit, 0);

function faqInit() {
  var faqSubtitles = faq.querySelectorAll('[data-element="faq__subtitle"]');

  for (var i = 0; i < faqSubtitles.length; i++) {
    faqSubtitles[i].addEventListener("click", toggleFaq);
  }
}

function toggleFaq() {
  if (this.classList.contains("faq__subtitle_active")) {
    this.classList.remove("faq__subtitle_active");
  } else {
    this.classList.add("faq__subtitle_active");
  }
}

/***/ }),

/***/ "./assets/scripts/components/header-fixed.js":
/*!***************************************************!*\
  !*** ./assets/scripts/components/header-fixed.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var headerMobileBurger = document.querySelector('[data-element="header-mobile__burger"]');
if (headerMobileBurger) setTimeout(headerMobileBurgerInit, 0);

function headerMobileBurgerInit() {
  var headerFixed = document.querySelector('[data-element="header-fixed"]');
  var headerFixedClose = document.querySelector('[data-element="header-fixed__close"]');
  var headerLayer = document.querySelector('[data-element="header__layer"]');
  headerMobileBurger.addEventListener("click", showFixedMenu);
  headerFixedClose.addEventListener("click", hideFixedMenu);
  headerLayer.addEventListener("click", hideFixedMenu);

  function showFixedMenu() {
    headerFixed.classList.add('header-fixed_active');
    headerLayer.classList.add('header__layer_active');
  }

  function hideFixedMenu() {
    headerFixed.classList.remove('header-fixed_active');
    headerLayer.classList.remove('header__layer_active');
  }
}

/***/ }),

/***/ "./assets/scripts/components/header__search.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/components/header__search.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_CreateNodesForSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/CreateNodesForSearch */ "./assets/scripts/tools/CreateNodesForSearch.js");

var dataArray = {
  categories: [{
    name: "Бензопилы",
    link: "#",
    picture: {
      src32: "https://via.placeholder.com/32x24",
      srcset32: "https://via.placeholder.com/32x24",
      srcset64: "https://via.placeholder.com/64x48"
    }
  }, {
    name: "Бензопилы",
    link: "#",
    picture: {
      src32: "https://via.placeholder.com/32x24",
      srcset32: "https://via.placeholder.com/32x24",
      srcset64: "https://via.placeholder.com/64x48"
    }
  }, {
    name: "Бензопилы Бензопилы Бензопилы",
    link: "#",
    picture: {
      src32: "https://via.placeholder.com/32x24",
      srcset32: "https://via.placeholder.com/32x24",
      srcset64: "https://via.placeholder.com/64x48"
    }
  }, {
    name: "Бензопилы, Бензопилы Бензопилы",
    link: "#",
    picture: {
      src32: "https://via.placeholder.com/32x24",
      srcset32: "https://via.placeholder.com/32x24",
      srcset64: "https://via.placeholder.com/64x48"
    }
  }, {
    name: "Бензопилы Бензопилы ",
    link: "#",
    picture: {
      src32: "https://via.placeholder.com/32x24",
      srcset32: "https://via.placeholder.com/32x24",
      srcset64: "https://via.placeholder.com/64x48"
    }
  }, {
    name: "Бензопилы",
    link: "#",
    picture: {
      src32: "https://via.placeholder.com/32x24",
      srcset32: "https://via.placeholder.com/32x24",
      srcset64: "https://via.placeholder.com/64x48"
    }
  }, {
    name: "Бензопилы Бензопилы",
    link: "#",
    picture: {
      src32: "https://via.placeholder.com/32x24",
      srcset32: "https://via.placeholder.com/32x24",
      srcset64: "https://via.placeholder.com/64x48"
    }
  }, {
    name: "Бензопилы Бензопилы Бензопилы",
    link: "#",
    picture: {
      src32: "https://via.placeholder.com/32x24",
      srcset32: "https://via.placeholder.com/32x24",
      srcset64: "https://via.placeholder.com/64x48"
    }
  }],
  products: [{
    link: '#',
    discount: "−23%",
    picture: {
      src140: "https://via.placeholder.com/140x140",
      srcset140: "https://via.placeholder.com/140x140",
      //это webp
      srcset48: "https://via.placeholder.com/48x48",
      //это webp 1x
      srcset96: "https://via.placeholder.com/96x96" //это webp 2x

    },
    price: 16,
    priceOld: "18 ₽",
    ratingFill: "70%",
    ratingCount: 132,
    availability: "В наличии",
    text: "Лента тефлоновая уплотнительная чёрная"
  }, {
    link: '#',
    picture: {
      src140: "https://via.placeholder.com/140x140",
      srcset140: "https://via.placeholder.com/140x140",
      //это webp
      srcset48: "https://via.placeholder.com/48x48",
      //это webp 1x
      srcset96: "https://via.placeholder.com/96x96" //это webp 2x

    },
    price: 32,
    ratingFill: "70%",
    ratingCount: 132,
    availability: "В наличии",
    text: "Клей строительный"
  }],
  productsCount: 5,
  journalCount: 0
};
var headerSearchInput = document.querySelector('[data-element="header__search-input"]');
if (headerSearchInput) setTimeout(headerSearchInputInit, 0);

function headerSearchInputInit() {
  var header = document.querySelector('[data-element="header"]');
  var headerMobileSearch = document.querySelector('[data-element="header-mobile__search"]');
  var headerMobileSearchClose = document.querySelector('[data-element="header__search-close-mobile"]');
  var headerSearchBtnClose = document.querySelector('[data-element="header__search-btn_close"]');
  var headerSearch = document.querySelector('[data-element="header-search"]');
  var headerSearchForm = document.querySelector('[data-element="header__search-form"]');
  var headerCont = document.querySelector('[data-element="header-search__cont"]');
  var headerLayer = document.querySelector('[data-element="header__layer"]');
  var headerSearchYouLookingFor = document.querySelector('[data-element="header-search__you-looking-for"]');
  headerMobileSearch.addEventListener("click", searchOpen);
  headerMobileSearchClose.addEventListener("click", searchHide);
  headerSearchInput.addEventListener("focus", searchOpen);
  headerSearchBtnClose.addEventListener("click", searchHide);
  headerLayer.addEventListener("click", searchHide);
  headerSearchInput.addEventListener("input", searchModalHide);
  var linkRequest = headerSearchForm.action;
  var textSearch = headerSearchInput.value;
  headerSearchForm.addEventListener("submit", saveSearchText);

  function saveSearchText(event) {
    event.preventDefault();

    if (headerSearchInput.value) {
      var savedSearchList = JSON.parse(localStorage.getItem("savedSearchList"));

      if (savedSearchList) {
        if (savedSearchList.length < 3) {
          savedSearchList[savedSearchList.length] = headerSearchInput.value;
        } else {
          savedSearchList.unshift(headerSearchInput.value);
          savedSearchList.pop();
        }

        localStorage.setItem("savedSearchList", JSON.stringify(savedSearchList));
      } else {
        savedSearchList = JSON.stringify([headerSearchInput.value]);
        localStorage.setItem("savedSearchList", savedSearchList);
      }
    }

    event.currentTarget.submit();
  }

  var tileSearchItemArray = document.querySelectorAll('[data-element="tile-search__item"]');

  for (var i = 0; i < tileSearchItemArray.length; i++) {}

  function _eventKey(event) {
    if (event.code === 'Escape') {
      searchHide();
    }
  }

  headerSearchInput.addEventListener('input', _eventInputForm);

  function SearchAutoComplete(url, text, cb) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.addEventListener('readystatechange', function (event) {
      var response = event.currentTarget;
      if (response.readyState !== XMLHttpRequest.DONE) return false;
      if (response.status !== 200) return console.log('Error send form');
      var dataArray = JSON.parse(response.response);
      cb(dataArray, headerCont);
    });
    request.send("query=".concat(text));
  }

  function _eventInputForm(event) {
    textSearch = event.target.value;
    timeOut(textSearch);
  }

  function timeOut(text) {
    setTimeout(function () {
      if (text === textSearch) SearchAutoComplete(linkRequest, text, _tools_CreateNodesForSearch__WEBPACK_IMPORTED_MODULE_0__["createHeaderSearchMainBox"]);
    }, 300);
  }

  function searchOpen() {
    document.addEventListener('keydown', _eventKey);
    header.classList.add("header_search-active");
    headerSearch.classList.add("header-search_active");
    headerSearchInput.focus();
    headerLayer.classList.add("header__layer_active");
  }

  function createListYouLookingFor() {
    var savedSearchList = JSON.parse(localStorage.getItem("savedSearchList"));

    if (savedSearchList) {
      var headerSearchList = Object(_tools_CreateNodesForSearch__WEBPACK_IMPORTED_MODULE_0__["createTag"])('div', ['header-search__list']);

      for (var _i = 0; _i < savedSearchList.length; _i++) {
        var headerSearchLink = Object(_tools_CreateNodesForSearch__WEBPACK_IMPORTED_MODULE_0__["createTag"])('a', ['header-search__link', 'text'], savedSearchList[_i]);
        headerSearchLink.addEventListener('click', submitYouLookingFor);
        headerSearchList.appendChild(headerSearchLink);
      }

      var headerSearchNote = document.getElementsByClassName("header-search__note")[0];
      headerSearchNote.after(headerSearchList);
    }
  }

  function submitYouLookingFor(event) {
    var text = event.currentTarget.textContent;
    headerSearchInput.value = text;
    headerSearchForm.submit();
  }

  createListYouLookingFor();

  function searchHide() {
    document.removeEventListener('keydown', _eventKey);
    header.classList.remove("header_search-active");
    headerSearch.classList.remove("header-search_active");
    headerLayer.classList.remove("header__layer_active");
    headerSearchInput.blur();
  }

  function searchModalHide() {
    headerSearchYouLookingFor.classList.add("header-search__you-looking-for_hidden");
  }
}

/***/ }),

/***/ "./assets/scripts/components/index-cap.js":
/*!************************************************!*\
  !*** ./assets/scripts/components/index-cap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var indexCap = document.querySelector('[data-element="index-cap"]');
if (indexCap) setTimeout(indexCapInit, 0);

function indexCapInit() {
  var activeIndex = 0;
  var indexCapArrowNext = indexCap.querySelector('[data-element="index-cap__arrow_next"]');
  var indexCapArrowPrev = indexCap.querySelector('[data-element="index-cap__arrow_prev"]');
  var indexCapPictures = indexCap.querySelectorAll('[data-element="index-cap__picture"]');
  indexCapArrowNext.addEventListener("click", nextSlide);
  indexCapArrowPrev.addEventListener("click", prevSlide);
  var indexCapNavItems = indexCap.querySelectorAll('[data-element="index-cap__nav-item"]');

  for (var i = 0; i < indexCapNavItems.length; i++) {
    indexCapNavItems[i].addEventListener("click", checkoutNavItem);
  }

  function checkoutNavItem() {
    var oldActive = indexCap.getElementsByClassName("index-cap__nav-item_active")[0];
    if (oldActive) oldActive.classList.remove("index-cap__nav-item_active");
    this.classList.add("index-cap__nav-item_active");
    var id = this.getAttribute("data-id");
    checkoutSlide(id);
  }

  function checkoutSlide(index) {
    activeIndex = index;
    var oldActive = indexCap.getElementsByClassName("index-cap__picture_active")[0];
    if (oldActive) oldActive.classList.remove("index-cap__picture_active");
    indexCapPictures[activeIndex].classList.add("index-cap__picture_active");
  }

  function nextSlide() {
    activeIndex = ++activeIndex;

    if (activeIndex === indexCapPictures.length) {
      activeIndex = 0;
    }

    checkNavItem(activeIndex);
    checkoutSlide(activeIndex);
  }

  function prevSlide() {
    activeIndex = --activeIndex;

    if (activeIndex === -1) {
      activeIndex = indexCapPictures.length - 1;
    }

    checkNavItem(activeIndex);
    checkoutSlide(activeIndex);
  }

  function checkNavItem(activeIndex) {
    var oldActive = indexCap.getElementsByClassName("index-cap__nav-item_active")[0];
    if (oldActive) oldActive.classList.remove("index-cap__nav-item_active");
    indexCapNavItems[activeIndex].classList.add("index-cap__nav-item_active");
  }
}

/***/ }),

/***/ "./assets/scripts/components/modal-basket.js":
/*!***************************************************!*\
  !*** ./assets/scripts/components/modal-basket.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_Basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/Basket */ "./assets/scripts/tools/Basket.js");
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/FavoritePosts */ "./assets/scripts/tools/FavoritePosts.js");
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_3__);




var modalBasket = document.querySelector('[data-element="modal-basket"]');
if (modalBasket) setTimeout(modalBasketInit, 0);

function modalBasketInit() {
  var counterElement = document.querySelector('[data-element="modal-basket__counter"]');
  new InputCount(counterElement);
  new Product(modalBasket);
}

var Product = /*#__PURE__*/function () {
  function Product(productElement) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Product);

    this._view = productElement;
    this._buttonRemove = this.view.querySelector('[data-element="modal-basket__counter-button_delete"]');

    this._buttonRemove.addEventListener('click', function () {
      _this.remove();
    });

    this._buttonFavorite = this.view.querySelector('[data-element="modal-basket__button_like"]');

    this._buttonFavorite.addEventListener('click', function () {
      _this.toggleFavorites();
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Product, [{
    key: "toggleFavorites",
    value: function toggleFavorites() {
      var id = this._buttonFavorite.getAttribute("data-id");

      if (this._buttonFavorite.classList.contains('modal-basket__button_like-active')) {
        Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_3__["deleteProductFromFavorites"])(this._buttonFavorite, id, 'modal-basket__button_like-active');
      } else {
        Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_3__["addProductInFavorites"])(this._buttonFavorite, id, 'modal-basket__button_like-active');
      }
    }
  }, {
    key: "view",
    get: function get() {
      return this._view;
    }
  }, {
    key: "count",
    get: function get() {
      return this._count;
    },
    set: function set(count) {
      this._count = count;
    }
  }, {
    key: "remove",
    value: function remove() {
      var dataId = this._buttonRemove.getAttribute("data-id");

      _tools_Basket__WEBPACK_IMPORTED_MODULE_2__["Basket"].removeProduct(dataId);
      modalBasket.getElementsByClassName('modal-box__close')[0].click();

      try {
        var _buttonBasket = document.querySelector('[data-element="product__buy-button"]');

        _buttonBasket.classList.remove('product__buy-button_add');

        _buttonBasket.innerText = 'Заказать';

        _buttonBasket.setAttribute("data-modal-box", "true");

        _buttonBasket.addEventListener('click', addProductInBasket);
      } catch (e) {
        console.dir(e);
      }
    }
  }]);

  return Product;
}();

var InputCount = /*#__PURE__*/function () {
  function InputCount(countElement) {
    var _this2 = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InputCount);

    this._view = countElement;
    this._input = this._view.querySelector('[data-element="modal-basket__counter-number"]');
    this._step = +this._input.getAttribute('data-step');
    this._buttonDown = this._view.querySelector('[data-element="modal-basket__count-button_down"]');
    this._buttonUp = this._view.querySelector('[data-element="modal-basket__count-button_up"]');
    this._buttonRemove = this._view.querySelector('[data-element="modal-basket__counter-button_delete"]');

    this._buttonRemove.addEventListener('click', function () {
      _this2.remove();
    });

    this._input.addEventListener('change', function () {
      return _this2.validation();
    });

    this._buttonDown.addEventListener('click', function () {
      return _this2.down();
    });

    this._buttonUp.addEventListener('click', function () {
      return _this2.up();
    });

    this.validation();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InputCount, [{
    key: "remove",
    value: function remove() {
      var dataId = this._buttonRemove.getAttribute("data-id");

      _tools_Basket__WEBPACK_IMPORTED_MODULE_2__["Basket"].removeProduct(dataId);
      var closeBtn = document.getElementsByClassName("modal-box__close")[0];
      closeBtn.click();
    }
  }, {
    key: "value",
    get: function get() {
      return +this._input.value;
    },
    set: function set(value) {
      this._input.value = value;
    }
  }, {
    key: "validation",
    value: function validation() {
      this.value = Math.trunc(this.value);
      if (this.value <= 1) this.hideDown();else this.showDown();
    }
  }, {
    key: "hideDown",
    value: function hideDown() {
      this._buttonDown.style.display = 'none';
      this.showClose();
    }
  }, {
    key: "showDown",
    value: function showDown() {
      this._buttonDown.style.display = 'block';
      this.hideClose();
    }
  }, {
    key: "hideClose",
    value: function hideClose() {
      this._buttonRemove.style.display = 'none';
    }
  }, {
    key: "showClose",
    value: function showClose() {
      this._buttonRemove.style.display = 'block';
    }
  }, {
    key: "down",
    value: function down() {
      if (this._step) {
        this.value -= this._step.toFixed(2);
      } else {
        this.value -= 1;
      }

      if (this.value <= 1) {
        this.hideDown();
        this.value = 1;
      }
    }
  }, {
    key: "up",
    value: function up() {
      if (this._step) {
        this.value = (this.value + this._step).toFixed(2);
      } else {
        this.value += 1;
      }

      if (this.value > 1) this.showDown();
    }
  }]);

  return InputCount;
}();

var buttonBasket = document.querySelector('[data-element="product__button-basket"]');
if (buttonBasket) setTimeout(initProductBasket, 0);
var productId;

function initProductBasket() {
  productId = +buttonBasket.getAttribute("data-id");
  var inBasket = _tools_Basket__WEBPACK_IMPORTED_MODULE_2__["Basket"].checkProduct(productId);

  if (inBasket) {
    buttonBasket.removeAttribute("data-modal-box");
    return activateClassFromButtonBasket();
  }

  try {
    buttonBasket.addEventListener('click', addProductInBasket);
  } catch (e) {
    console.dir(e);
  }
}

function addProductInBasket(event) {
  // event.preventDefault()
  _tools_Basket__WEBPACK_IMPORTED_MODULE_2__["Basket"].addProduct(productId, function () {
    console.log('Ошибка');
  }, function () {
    try {
      buttonBasket.removeEventListener('click', addProductInBasket);
    } catch (e) {
      console.dir(e);
    }

    activateClassFromButtonBasket();
    buttonBasket.removeAttribute("data-modal-box");
  });
  activateClassFromButtonBasket();
}

function activateClassFromButtonBasket() {
  try {
    buttonBasket.classList.add('product__buy-button_add');
    var count = _tools_Basket__WEBPACK_IMPORTED_MODULE_2__["Basket"].getCountProducts();
    var tovar = morph(count);
    buttonBasket.innerText = "".concat(count, " ").concat(tovar, " \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435");
  } catch (e) {
    console.dir(e);
  }
}

function morph(int, array) {
  return (array = array || ['товар', 'товара', 'товаров']) && array[int % 100 > 4 && int % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]];
}

/***/ }),

/***/ "./assets/scripts/components/modal-box.js":
/*!************************************************!*\
  !*** ./assets/scripts/components/modal-box.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var modalBoxButtons = document.querySelectorAll('[data-modal-box="true"]');
if (modalBoxButtons.length) setTimeout(modalBoxButtonsInit, 0);

function modalBoxButtonsInit() {
  for (var i = 0; i < modalBoxButtons.length; i++) {
    modalBoxButtons[i].addEventListener('click', openModal);
  }
}

function openModal(event) {
  event.preventDefault();
  var href = this.getAttribute("data-src");
  var modal = document.getElementById(href.slice(1));
  var buttonClose = modal.querySelector('[data-role="modal-box__close"]');
  var layer = modal.querySelector('[data-role="modal-box__layer"]');
  buttonClose.addEventListener("click", closeModal);
  layer.addEventListener("click", closeModal);

  function closeModal() {
    modal.classList.remove("modal-box_opacity");
    setTimeout(hideDisplay, 300);
  }

  function hideDisplay() {
    modal.classList.remove("modal-box_display");
  }

  modal.classList.add("modal-box_display");
  setTimeout(showOpacity, 0);

  function showOpacity() {
    modal.classList.add("modal-box_opacity");
  }
}

/***/ }),

/***/ "./assets/scripts/components/modal-courier.js":
/*!****************************************************!*\
  !*** ./assets/scripts/components/modal-courier.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var modalCourier = document.getElementById("modal-courier");
if (modalCourier) setTimeout(modalCourierInit, 0);

function modalCourierInit() {
  var modalCourierButton = modalCourier.querySelector('[data-element="modal-courier__button"]');
  var requiredInputArray = modalCourier.querySelectorAll('[required]');

  for (var i = 0; i < requiredInputArray.length; i++) {
    requiredInputArray[i].addEventListener('input', validateReauiredInputs);
  }

  validateReauiredInputs();

  function validateReauiredInputs() {
    modalCourierButton.disabled = false;

    for (var _i = 0; _i < requiredInputArray.length; _i++) {
      requiredInputArray[_i].classList.remove("input_wrong");
    }

    for (var _i2 = 0; _i2 < requiredInputArray.length; _i2++) {
      if (!requiredInputArray[_i2].value) {
        requiredInputArray[_i2].classList.add("input_wrong");

        modalCourierButton.disabled = true;
        break;
      }
    }
  }

  var modalCourierBoxSelectArray = modalCourier.querySelectorAll('[data-element="modal-courier__box_select"]');

  for (var _i3 = 0; _i3 < modalCourierBoxSelectArray.length; _i3++) {
    selectInit(modalCourierBoxSelectArray[_i3]);

    modalCourierBoxSelectArray[_i3].addEventListener("click", toggleSelectShow);
  }

  function toggleSelectShow() {
    var oldActive = modalCourier.getElementsByClassName("modal-courier__list-box_active")[0];
    if (oldActive) oldActive.classList.remove("modal-courier__list-box_active");
    var listBox = this.parentElement.getElementsByClassName("modal-courier__list-box")[0];
    listBox.classList.add("modal-courier__list-box_active");
    window.addEventListener('click', removeListBox);
  }

  function removeListBox(event) {
    if (!event.target.classList.contains("input-animate-placeholder") && !event.target.classList.contains("modal-courier__input")) {
      var activeListBox = modalCourier.getElementsByClassName("modal-courier__list-box_active")[0];
      activeListBox.classList.remove("modal-courier__list-box_active");
      window.removeEventListener('click', removeListBox);
    }
  }

  var modalCourierInputTextarea = modalCourier.querySelector('[data-element="comment"]');
  modalCourierInputTextarea.addEventListener('input', resizeTextarea);

  function selectInit(block) {
    var input = block.parentElement.getElementsByClassName("modal-courier__input")[0];
    var items = block.parentElement.querySelectorAll('[data-element="modal-courier__select-span"]');

    for (var _i4 = 0; _i4 < items.length; _i4++) {
      items[_i4].addEventListener('click', toggleInput);
    }

    function toggleInput() {
      if (!this.classList.contains("modal-courier__select-span_active")) {
        var oldActive = block.parentElement.getElementsByClassName("modal-courier__select-span_active")[0];
        oldActive.classList.remove("modal-courier__select-span_active");
        this.classList.add("modal-courier__select-span_active");
        input.value = this.textContent;
        var listBox = block.parentElement.getElementsByClassName("modal-courier__list-box")[0];
        listBox.classList.remove("modal-courier__list-box_active");
        window.removeEventListener('click', removeListBox);
      }
    }
  }

  function resizeTextarea() {
    this.style.height = "61px";
    this.style.height = this.scrollHeight + 5 + "px";
  }
}

/***/ }),

/***/ "./assets/scripts/components/modal-map-order.js":
/*!******************************************************!*\
  !*** ./assets/scripts/components/modal-map-order.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var orderItemMapArray = document.querySelectorAll('[data-element="order__item_map"]');
if (orderItemMapArray) setTimeout(orderItemMapArrayInit, 0);

function orderItemMapArrayInit() {
  for (var i = 0; i < orderItemMapArray.length; i++) {
    orderItemMapArray[i].addEventListener("click", initMap, {
      once: true
    });
  }
}

function initMap() {
  return _initMap.apply(this, arguments);
}

function _initMap() {
  _initMap = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var mod, map, centerCoords, oldScript, script, body, scriptLoaded;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            scriptLoaded = function _scriptLoaded() {
              createMap(mod, centerCoords);
            };

            mod = this.getAttribute("data-mod");
            map = document.getElementById("modal-order-map__map_".concat(mod));
            centerCoords = map.getAttribute('data-coords-center');
            oldScript = document.getElementsByClassName("map-script")[0];

            if (!oldScript) {
              _context.next = 8;
              break;
            }

            createMap(mod, centerCoords);
            return _context.abrupt("return");

          case 8:
            script = document.createElement("script");
            script.classList.add("map-script");
            body = document.getElementsByTagName("body")[0];
            body.append(script);
            script.addEventListener('load', scriptLoaded);
            script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _initMap.apply(this, arguments);
}

var modalOrderMapItemArray = document.querySelectorAll('[data-element="modal-order-map__item"]');

for (var i = 0; i < modalOrderMapItemArray.length; i++) {
  buttonInit(modalOrderMapItemArray[i]);
}

function createMap(_x, _x2) {
  return _createMap.apply(this, arguments);
}

function _createMap() {
  _createMap = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(mod, centerCoords) {
    var init, _init;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _init = function _init3() {
              _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
                var zoom, myMap, mapNode, modalOrderMapButtonArray, _i2, chooseAddress, _i4, createPlacemark, modalOrderMapAddressArray, _i5, setMapCenter;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        setMapCenter = function _setMapCenter() {
                          var centerCoords = JSON.parse(this.parentElement.getAttribute("data-coords"));
                          myMap.setCenter(centerCoords);
                        };

                        createPlacemark = function _createPlacemark(item) {
                          var coords = JSON.parse(item.getAttribute('data-coords'));
                          var caption = item.getAttribute('data-map-caption');
                          var placemark = new ymaps.Placemark(coords, {
                            iconCaption: caption
                          });
                          myMap.geoObjects.add(placemark);
                        };

                        chooseAddress = function _chooseAddress() {
                          var resultArray = JSON.parse(this.parentElement.getAttribute("data-result"));
                          var resultAddress = this.parentElement.getAttribute("data-result-address");
                          var orderDeliveryResultPickup = document.querySelector('[data-element="order__delivery-result_pickup"]');
                          var text = orderDeliveryResultPickup.getElementsByClassName("order__text")[0];
                          var spanArray = orderDeliveryResultPickup.getElementsByClassName("order__span");
                          text.textContent = resultAddress;

                          for (var _i3 = 0; _i3 < spanArray.length; _i3++) {
                            spanArray[_i3].textContent = resultArray[_i3];
                          }

                          var modal = document.getElementById("modal-".concat(mod));
                          var closeBtn = modal.querySelector('[data-role="modal-box__close"]');
                          var order = document.querySelector('[data-element="order"]');
                          var orderListDelivery = order.querySelector('[data-element="order__list_delivery"]');
                          orderListDelivery.classList.add("order__list_hide");
                          var orderStepDelivery = order.getElementsByClassName("order__step_delivery")[0];
                          orderStepDelivery.classList.add("order__step_done");
                          var orderDeliveryResultOld = order.getElementsByClassName("order__delivery-result_show")[0];
                          if (orderDeliveryResultOld) orderDeliveryResultOld.classList.remove("order__delivery-result_show");
                          var orderTitleDelivery = order.querySelector('[data-element="order__title_delivery"]');
                          var date = this.parentElement.getAttribute("data-date");
                          var price = this.parentElement.getAttribute("data-price");

                          if (mod === "pickup") {
                            orderTitleDelivery.textContent = "\u0428\u0430\u0433 1 \u2014 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0432 \u043F\u0443\u043D\u043A\u0442 \u0432\u044B\u0434\u0430\u0447\u0438 ".concat(date, ", \u0437\u0430 ").concat(price);
                          } else {
                            orderTitleDelivery.textContent = "\u0428\u0430\u0433 1 \u2014 \u0437\u0430\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 ".concat(date, ", \u0437\u0430 ").concat(price);
                          }

                          orderDeliveryResultPickup.classList.add("order__delivery-result_show");

                          function orderDeliveryChangeActiveRemove() {
                            var orderDeliveryChangeActive = order.getElementsByClassName("order__delivery-change_active")[0];
                            if (orderDeliveryChangeActive) orderDeliveryChangeActive.classList.remove("order__delivery-change_active");
                          }

                          var orderItemMap = order.querySelector('[data-mod="' + mod + '"]');
                          var input = orderItemMap.getElementsByClassName("order__input-radio")[0];
                          input.checked = true;
                          orderDeliveryChangeActiveRemove();
                          closeBtn.click();
                        };

                        zoom = window.innerWidth > 950 ? 14 : 15;
                        myMap = new ymaps.Map("modal-order-map__map_".concat(mod), {
                          center: JSON.parse(centerCoords),
                          zoom: zoom
                        });
                        mapNode = document.getElementById("modal-order-map__map_".concat(mod));
                        modalOrderMapButtonArray = mapNode.parentElement.querySelectorAll('[data-element="modal-order-map__button"]');

                        for (_i2 = 0; _i2 < modalOrderMapButtonArray.length; _i2++) {
                          modalOrderMapButtonArray[_i2].addEventListener("click", chooseAddress);
                        }

                        for (_i4 = 0; _i4 < modalOrderMapItemArray.length; _i4++) {
                          createPlacemark(modalOrderMapItemArray[_i4]);
                        }

                        modalOrderMapAddressArray = document.querySelectorAll('[data-element="modal-order-map__address"]');

                        for (_i5 = 0; _i5 < modalOrderMapAddressArray.length; _i5++) {
                          modalOrderMapAddressArray[_i5].addEventListener("click", setMapCenter);
                        }

                      case 11:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return _init.apply(this, arguments);
            };

            init = function _init2() {
              return _init.apply(this, arguments);
            };

            ymaps.ready(init);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createMap.apply(this, arguments);
}

function buttonInit(item) {
  var button = item.querySelector('[data-element="modal-order-map__button"]');
  button.textContent = item.getAttribute('data-button-shablon') + item.getAttribute('data-date') + ', за ' + item.getAttribute('data-price');
}

var modalOrderMapShowInfoArray = document.querySelectorAll('[data-element="modal-order-map__show-info"]');

for (var _i = 0; _i < modalOrderMapShowInfoArray.length; _i++) {
  modalOrderMapShowInfoArray[_i].addEventListener("click", toggleModalOrderMapInfo);
}

function toggleModalOrderMapInfo() {
  var toggleModalOrderMapInfo = this.previousElementSibling;

  if (toggleModalOrderMapInfo.classList.contains('modal-order-map__info_active')) {
    toggleModalOrderMapInfo.classList.remove('modal-order-map__info_active');
    this.classList.remove("modal-order-map__show-info_active");
    this.textContent = "Показать фото и описание пункта";
  } else {
    toggleModalOrderMapInfo.classList.add('modal-order-map__info_active');
    this.classList.add("modal-order-map__show-info_active");
    this.textContent = "Скрыть описание";
  }
}

/***/ }),

/***/ "./assets/scripts/components/modal-transport.js":
/*!******************************************************!*\
  !*** ./assets/scripts/components/modal-transport.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var modalTransport = document.getElementById("modal-transport");
if (modalTransport) setTimeout(modalTransportInit, 0);

function modalTransportInit() {
  var modalTransportButton = modalTransport.querySelector('[data-element="modal-transport__button"]');
  var requiredInputArray = modalTransport.querySelectorAll('[required]');

  for (var i = 0; i < requiredInputArray.length; i++) {
    requiredInputArray[i].addEventListener('input', validateReauiredInputs);
  }

  validateReauiredInputs();

  function validateReauiredInputs() {
    modalTransportButton.disabled = false;

    for (var _i = 0; _i < requiredInputArray.length; _i++) {
      requiredInputArray[_i].classList.remove("input_wrong");
    }

    for (var _i2 = 0; _i2 < requiredInputArray.length; _i2++) {
      if (!requiredInputArray[_i2].value) {
        requiredInputArray[_i2].classList.add("input_wrong");

        modalTransportButton.disabled = true;
        break;
      }
    }
  }

  var modalTransportBoxSelectArray = modalTransport.querySelectorAll('[data-element="modal-transport__box_select"]');

  for (var _i3 = 0; _i3 < modalTransportBoxSelectArray.length; _i3++) {
    selectInit(modalTransportBoxSelectArray[_i3]);

    modalTransportBoxSelectArray[_i3].addEventListener("click", toggleSelectShow);
  }

  function toggleSelectShow() {
    var oldActive = modalTransport.getElementsByClassName("modal-transport__list-box_active")[0];
    if (oldActive) oldActive.classList.remove("modal-transport__list-box_active");
    var listBox = this.parentElement.getElementsByClassName("modal-transport__list-box")[0];
    listBox.classList.add("modal-transport__list-box_active");
    window.addEventListener('click', removeListBox);
  }

  function removeListBox(event) {
    if (!event.target.classList.contains("input-animate-placeholder") && !event.target.classList.contains("modal-transport__input")) {
      var activeListBox = modalTransport.getElementsByClassName("modal-transport__list-box_active")[0];
      activeListBox.classList.remove("modal-transport__list-box_active");
      window.removeEventListener('click', removeListBox);
    }
  }

  function selectInit(block) {
    var input = block.parentElement.getElementsByClassName("modal-transport__input")[0];
    var items = block.parentElement.querySelectorAll('[data-element="modal-transport__select-span"]');

    for (var _i4 = 0; _i4 < items.length; _i4++) {
      items[_i4].addEventListener('click', toggleInput);
    }

    function toggleInput() {
      if (!this.classList.contains("modal-transport__select-span_active")) {
        var oldActive = block.parentElement.getElementsByClassName("modal-transport__select-span_active")[0];
        oldActive.classList.remove("modal-transport__select-span_active");
        this.classList.add("modal-transport__select-span_active");
        input.value = this.textContent;
        var listBox = block.parentElement.getElementsByClassName("modal-transport__list-box")[0];
        listBox.classList.remove("modal-transport__list-box_active");
        window.removeEventListener('click', removeListBox);
      }
    }
  }
}

/***/ }),

/***/ "./assets/scripts/components/my-orders.js":
/*!************************************************!*\
  !*** ./assets/scripts/components/my-orders.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/FavoritePosts */ "./assets/scripts/tools/FavoritePosts.js");
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__);

var myOrdersFavoriteArray = document.querySelectorAll('[data-element="my-orders__favorite"]');
if (myOrdersFavoriteArray.length) setTimeout(myOrdersFavoriteArrayInit, 0);

function myOrdersFavoriteArrayInit() {
  console.log(myOrdersFavoriteArray);

  var _loop = function _loop(i) {
    var id = myOrdersFavoriteArray[i].getAttribute("data-id");
    Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__["checkLocalStorage"])(myOrdersFavoriteArray[i], id, "my-orders__favorite_active");
    myOrdersFavoriteArray[i].addEventListener("click", function (event) {
      event.preventDefault();

      if (myOrdersFavoriteArray[i].classList.contains('my-orders__favorite_active')) {
        Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__["deleteProductFromFavorites"])(myOrdersFavoriteArray[i], id, "my-orders__favorite_active");
      } else {
        Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__["addProductInFavorites"])(myOrdersFavoriteArray[i], id, "my-orders__favorite_active");
      }
    });
  };

  for (var i = 0; i < myOrdersFavoriteArray.length; i++) {
    _loop(i);
  }
}

/***/ }),

/***/ "./assets/scripts/components/order-about.js":
/*!**************************************************!*\
  !*** ./assets/scripts/components/order-about.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/FavoritePosts */ "./assets/scripts/tools/FavoritePosts.js");
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__);

var orderAboutFavoriteArray = document.querySelectorAll('[data-element="order-about-in__favorite"]');
if (orderAboutFavoriteArray.length) setTimeout(orderAboutFavoriteArrayInit, 0);

function orderAboutFavoriteArrayInit() {
  console.log(orderAboutFavoriteArray);

  var _loop = function _loop(i) {
    var id = orderAboutFavoriteArray[i].getAttribute("data-id");
    Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__["checkLocalStorage"])(orderAboutFavoriteArray[i], id, "order-about-in__favorite_active");
    orderAboutFavoriteArray[i].addEventListener("click", function (event) {
      event.preventDefault();

      if (orderAboutFavoriteArray[i].classList.contains('order-about-in__favorite_active')) {
        Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__["deleteProductFromFavorites"])(orderAboutFavoriteArray[i], id, "order-about-in__favorite_active");
      } else {
        Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__["addProductInFavorites"])(orderAboutFavoriteArray[i], id, "order-about-in__favorite_active");
      }
    });
  };

  for (var i = 0; i < orderAboutFavoriteArray.length; i++) {
    _loop(i);
  }
}

/***/ }),

/***/ "./assets/scripts/components/order.js":
/*!********************************************!*\
  !*** ./assets/scripts/components/order.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var order = document.querySelector('[data-element="order"]');
if (order) setTimeout(orderInit, 0);

function orderInit() {
  var orderItemManager = order.querySelector('[data-element="order__item_manager"]');
  orderItemManager.addEventListener("click", chooseManager);
  var orderInputRadioPaymentArray = order.querySelectorAll('[data-element="order__input-radio_payment"]');

  for (var i = 0; i < orderInputRadioPaymentArray.length; i++) {
    orderInputRadioPaymentArray[i].addEventListener("click", paymentStepDone);
  }

  function paymentStepDone() {
    var orderStepPayment = order.getElementsByClassName("order__step_payment")[0];
    orderStepPayment.classList.add("order__step_done");

    for (var _i = 0; _i < orderInputRadioPaymentArray.length; _i++) {
      orderInputRadioPaymentArray[_i].removeEventListener("click", paymentStepDone);
    }
  }

  var orderDeliveryChangeArray = order.querySelectorAll('[data-element="order__delivery-change"]');

  for (var _i2 = 0; _i2 < orderDeliveryChangeArray.length; _i2++) {
    orderDeliveryChangeArray[_i2].addEventListener("click", toggleOrderListDelivery);
  }

  var orderSidebarBox = order.getElementsByClassName("order__sidebar-box")[0];
  orderSidebarBox.addEventListener('click', showInputs);

  function showInputs() {
    console.log(orderSidebarBox.elements);
  }

  var modalCourierButton = document.querySelector('[data-element="modal-courier__button"]');
  modalCourierButton.addEventListener('click', updateCourierDelivery);
  var modalTransportButton = document.querySelector('[data-element="modal-transport__button"]');
  modalTransportButton.addEventListener('click', updateTransportDelivery);
  var orderReceiverLinkButtonArray = order.querySelectorAll('[data-element="order__receiver-link-button"]');

  for (var _i3 = 0; _i3 < orderReceiverLinkButtonArray.length; _i3++) {
    orderReceiverLinkButtonArray[_i3].addEventListener('click', checkoutLoginRegisterForm);
  }

  var orderStep = order.querySelectorAll('[data-element="order__step"]');

  for (var _i4 = 0; _i4 < orderStep.length; _i4++) {
    initDropdawnButton(orderStep[_i4]);
  }

  var modalUserButton = document.querySelector('[data-element="modal-user__button"]');
  modalUserButton.addEventListener("click", updateOrderUser);
  var orderReceiverTypeBtnArray = order.querySelectorAll('[data-element="order__receiver-type-btn"]');

  for (var _i5 = 0; _i5 < orderReceiverTypeBtnArray.length; _i5++) {
    orderReceiverTypeBtnArray[_i5].addEventListener("click", toggleType);
  }
}

function chooseManager() {
  orderListDeliveryHide();
  var orderDeliveryResultManager = order.querySelector('[data-element="order__delivery-result_manager"]');
  orderDeliveryResultManager.classList.add("order__delivery-result_show");
}

function toggleOrderListDelivery() {
  var orderListDelivery = order.querySelector('[data-element="order__list_delivery"]');

  if (orderListDelivery.classList.contains("order__list_hide")) {
    orderListDelivery.classList.remove("order__list_hide");
    this.classList.add("order__delivery-change_active");
  } else {
    orderListDelivery.classList.add("order__list_hide");
    this.classList.remove("order__delivery-change_active");
  }
}

function updateTransportDelivery() {
  var modalBoxClose = this.parentElement.getElementsByClassName("modal-box__close")[0];
  var orderTitleDelivery = order.querySelector('[data-element="order__title_delivery"]');
  var orderDeliveryResult = document.querySelector('[data-element="order__delivery-result_transport"]');
  var text = orderDeliveryResult.getElementsByClassName("order__text")[0];
  var modalCourier = document.getElementById("modal-transport");
  var city = modalCourier.querySelector('[data-element="city"]');
  var street = modalCourier.querySelector('[data-element="street"]');
  var house = modalCourier.querySelector('[data-element="house"]');
  var room = modalCourier.querySelector('[data-element="room"]');
  var entrance = modalCourier.querySelector('[data-element="entrance"]');
  var floor = modalCourier.querySelector('[data-element="floor"]');
  text.textContent = "".concat(city.value, ", ").concat(street.value, ", \u0434. ").concat(house.value);
  if (room.value) text.textContent = text.textContent + ", \u043A\u0432. " + room.value;
  if (entrance.value) text.textContent = text.textContent + ", \u043F\u043E\u0434\u044A\u0435\u0437\u0434 " + entrance.value;
  if (floor.value) text.textContent = text.textContent + ", \u044D\u0442\u0430\u0436 " + floor.value;
  var deliveryTransport = document.querySelector('[data-role="delivery-transport"]');
  orderTitleDelivery.textContent = "\u0428\u0430\u0433 1 \u2014 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0422\u041A ".concat(deliveryTransport.value);
  orderListDeliveryHide();
  orderDeliveryResult.classList.add("order__delivery-result_show");
  var orderItemTransport = order.querySelector('[data-element="order__item_transport"]');
  var input = orderItemTransport.getElementsByClassName("order__input-radio")[0];
  input.checked = true;
  orderDeliveryChangeActiveRemove();
  modalBoxClose.click();
}

function updateCourierDelivery() {
  var modalBoxClose = this.parentElement.getElementsByClassName("modal-box__close")[0];
  var orderTitleDelivery = order.querySelector('[data-element="order__title_delivery"]');
  var orderDeliveryResult = document.querySelector('[data-element="order__delivery-result_courier"]');
  var text = orderDeliveryResult.getElementsByClassName("order__text")[0];
  var modalCourier = document.getElementById("modal-courier");
  var city = modalCourier.querySelector('[data-element="city"]');
  var street = modalCourier.querySelector('[data-element="street"]');
  var house = modalCourier.querySelector('[data-element="house"]');
  var room = modalCourier.querySelector('[data-element="room"]');
  var entrance = modalCourier.querySelector('[data-element="entrance"]');
  var floor = modalCourier.querySelector('[data-element="floor"]');
  var span = orderDeliveryResult.getElementsByClassName("order__span")[0];
  var deliveryTime = document.querySelector('[data-role="delivery-time"]');
  var deliveryDate = document.querySelector('[data-role="delivery-date"]');
  var comment = modalCourier.querySelector('[data-element="comment"]');
  text.textContent = "".concat(city.value, ", ").concat(street.value, ", \u0434. ").concat(house.value);
  if (room.value) text.textContent = text.textContent + ", \u043A\u0432. " + room.value;
  if (entrance.value) text.textContent = text.textContent + ", \u043F\u043E\u0434\u044A\u0435\u0437\u0434 " + entrance.value;
  if (floor.value) text.textContent = text.textContent + ", \u044D\u0442\u0430\u0436 " + floor.value;
  if (comment.value) span.textContent = "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: ".concat(comment.value);
  orderTitleDelivery.textContent = "\u0428\u0430\u0433 1 \u2014 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C ".concat(deliveryDate.value, ", ").concat(deliveryTime.value);
  orderListDeliveryHide();
  orderDeliveryResult.classList.add("order__delivery-result_show");
  var orderItemCourier = order.querySelector('[data-element="order__item_courier"]');
  var input = orderItemCourier.getElementsByClassName("order__input-radio")[0];
  input.checked = true;
  orderDeliveryChangeActiveRemove();
  modalBoxClose.click();
}

function orderDeliveryChangeActiveRemove() {
  var orderDeliveryChangeActive = order.getElementsByClassName("order__delivery-change_active")[0];
  if (orderDeliveryChangeActive) orderDeliveryChangeActive.classList.remove("order__delivery-change_active");
}

function orderListDeliveryHide() {
  var orderListDelivery = order.querySelector('[data-element="order__list_delivery"]');
  orderListDelivery.classList.add("order__list_hide");
  var orderStepDelivery = order.getElementsByClassName("order__step_delivery")[0];
  orderStepDelivery.classList.add("order__step_done");
  var orderDeliveryResultOld = order.getElementsByClassName("order__delivery-result_show")[0];
  if (orderDeliveryResultOld) orderDeliveryResultOld.classList.remove("order__delivery-result_show");
}

function checkoutLoginRegisterForm() {
  this.parentElement.parentElement.classList.add("order__display-hidden");
  var searchQuery = this.getAttribute("data-show");
  var formToShow = order.querySelector('[data-element="' + searchQuery + '"]');
  formToShow.classList.remove("order__display-hidden");
}

function initDropdawnButton(block) {
  var orderDropdawn = block.querySelector('[data-element="order__dropdawn"]');
  var orderMobileHiddenBlock = block.querySelector('[data-role="order-mobile-hidden-block"]');
  orderDropdawn.addEventListener('click', orderDropdawnToggle);

  function orderDropdawnToggle() {
    if (this.classList.contains("order__dropdawn_hidden")) {
      this.classList.remove("order__dropdawn_hidden");
      this.textContent = "Скрыть";
      orderMobileHiddenBlock.classList.remove("order__display-hidden");
    } else {
      this.classList.add("order__dropdawn_hidden");
      this.textContent = "Показать";
      orderMobileHiddenBlock.classList.add("order__display-hidden");
    }
  }
}

function updateOrderUser() {
  var modalBoxClose = this.parentElement.getElementsByClassName("modal-box__close")[0];
  var userName = document.querySelector('[data-element="user-name"]');
  var userPhone = document.querySelector('[data-element="user-phone"]');
  var userInputName = document.querySelector('[data-element="modal-user__input-name"]');
  var userInputPhone = document.querySelector('[data-element="modal-user__input-phone"]');
  userName.textContent = userInputName.value;
  userPhone.textContent = userInputPhone.value;
  modalBoxClose.click();
}

function toggleType() {
  var oldBtn = order.getElementsByClassName("order__receiver-type-btn_active")[0];
  var oldBox = order.getElementsByClassName("order__receiver-box_active")[0];
  oldBox.classList.remove("order__receiver-box_active");
  oldBtn.classList.remove("order__receiver-type-btn_active");
  this.classList.add("order__receiver-type-btn_active");
  var id = this.getAttribute("data-receiver-type");
  var orderReceiverBox = order.querySelector('[data-receiver-box="' + id + '"]');
  orderReceiverBox.classList.add("order__receiver-box_active");
}

/***/ }),

/***/ "./assets/scripts/components/product-buy-button-like.js":
/*!**************************************************************!*\
  !*** ./assets/scripts/components/product-buy-button-like.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/FavoritePosts */ "./assets/scripts/tools/FavoritePosts.js");
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__);

var productBuyButtonLike = document.querySelector('[data-element="product__buy-button_like"]');
if (productBuyButtonLike) setTimeout(productBuyButtonLikeInit, 0);

function productBuyButtonLikeInit() {
  var id = productBuyButtonLike.getAttribute("data-id");
  Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__["checkLocalStorage"])(productBuyButtonLike, id, "product__buy-button_like-active");
  productBuyButtonLike.addEventListener("click", function (event) {
    event.preventDefault();

    if (productBuyButtonLike.classList.contains('product__buy-button_like-active')) {
      Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__["deleteProductFromFavorites"])(productBuyButtonLike, id, "product__buy-button_like-active");
    } else {
      Object(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_0__["addProductInFavorites"])(productBuyButtonLike, id, "product__buy-button_like-active");
    }
  });
}

/***/ }),

/***/ "./assets/scripts/components/product.js":
/*!**********************************************!*\
  !*** ./assets/scripts/components/product.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var product = document.querySelector('[data-element="product"]');
if (product) setTimeout(productInit, 0);

function productInit() {
  var productNavPictures = product.querySelectorAll('[data-element="product__nav-picture"]');
  var productGalleryPictures = product.querySelectorAll('[data-element="product__gallery-picture"]');

  for (var i = 0; i < productNavPictures.length; i++) {
    productNavPictures[i].addEventListener("click", checkoutNavPicture);
  }

  function checkoutNavPicture() {
    var oldActiveNavPicture = product.getElementsByClassName("product__nav-picture_active")[0];
    if (oldActiveNavPicture) oldActiveNavPicture.classList.remove("product__nav-picture_active");
    this.classList.add("product__nav-picture_active");
    var dataId = this.getAttribute("data-id");
    checkoutGalleryPicture(dataId);
  }

  function checkoutGalleryPicture(id) {
    var oldActive = product.getElementsByClassName("product__gallery-picture_active")[0];
    oldActive.classList.remove("product__gallery-picture_active");
    productGalleryPictures[id].classList.add("product__gallery-picture_active");
  }
}

/***/ }),

/***/ "./assets/scripts/components/reviews.js":
/*!**********************************************!*\
  !*** ./assets/scripts/components/reviews.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var reviews = document.querySelector('[data-element="reviews"]');
if (reviews) setTimeout(reviewsInit, 0);

function reviewsInit() {
  var reviewsItems = reviews.querySelectorAll('[data-element="reviews__item"]');

  for (var i = 0; i < reviewsItems.length; i++) {
    reviewsItemInit(reviewsItems[i]);
  }
}

function reviewsItemInit(item) {
  var reviewsTextBox = item.querySelector('[data-element="reviews__text-box"]');
  var reviewsTextMore = item.querySelector('[data-element="reviews__text-more"]');
  reviewsTextMore.addEventListener("click", toggleReviewsTextBox);
  checkHeight();
  window.addEventListener("resize", checkHeight);

  function checkHeight() {
    if (reviewsTextBox.clientHeight > 200) {
      reviewsTextBox.classList.add("reviews__text-box_scroll");
      reviewsTextMore.classList.add("reviews__text-more_active");
    } else {
      reviewsTextBox.classList.remove("reviews__text-box_scroll");
      reviewsTextMore.classList.remove("reviews__text-more_active");
    }
  }

  function toggleReviewsTextBox() {
    if (reviewsTextBox.classList.contains("reviews__text-box_scroll-active")) {
      reviewsTextBox.classList.remove("reviews__text-box_scroll-active");
      reviewsTextMore.innerHTML = "Показать полностью";
      reviewsTextMore.classList.remove("reviews__text-more_reverse");
    } else {
      reviewsTextBox.classList.add("reviews__text-box_scroll-active");
      reviewsTextMore.innerHTML = "Свернуть";
      reviewsTextMore.classList.add("reviews__text-more_reverse");
    }
  }
}

/***/ }),

/***/ "./assets/scripts/components/tile-button-favorite.js":
/*!***********************************************************!*\
  !*** ./assets/scripts/components/tile-button-favorite.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import { addProductInFavorites, deleteProductFromFavorites, checkLocalStorage } from "../tools/FavoritePosts";
//
// const tileButtonFavoriteArray = document.querySelectorAll('[data-element="tile__button_favorite"]')
//
// if (tileButtonFavoriteArray) setTimeout(tileButtonFavoriteArrayInit, 0)
//
// function tileButtonFavoriteArrayInit () {
//   for (let i = 0; i < tileButtonFavoriteArray.length; i++) {
//     const id = tileButtonFavoriteArray[i].getAttribute("data-id")
//     checkLocalStorage(tileButtonFavoriteArray[i], id, "tile__button_favorite-active")
//
//     tileButtonFavoriteArray[i].addEventListener("click", (event) => {
//       event.preventDefault()
//       if (tileButtonFavoriteArray[i].classList.contains('tile__button_favorite-active')) {
//         deleteProductFromFavorites(tileButtonFavoriteArray[i], id, "tile__button_favorite-active")
//       } else {
//         addProductInFavorites(tileButtonFavoriteArray[i], id, "tile__button_favorite-active")
//       }
//     })
//   }
// }

/***/ }),

/***/ "./assets/scripts/components/tile__button_basket.js":
/*!**********************************************************!*\
  !*** ./assets/scripts/components/tile__button_basket.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_Basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/Basket */ "./assets/scripts/tools/Basket.js");
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/FavoritePosts */ "./assets/scripts/tools/FavoritePosts.js");
/* harmony import */ var _tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tools_FavoritePosts__WEBPACK_IMPORTED_MODULE_1__);


var tileButtonBasketArray = document.querySelectorAll('[data-element="tile__button_basket"]');
if (tileButtonBasketArray) setTimeout(tileButtonBasketArrayInit, 0);

function tileButtonBasketArrayInit() {
  for (var i = 0; i < tileButtonBasketArray.length; i++) {
    tileButtonBasketArray[i].addEventListener("click", addInBasket);
    checkLocalBasket(tileButtonBasketArray[i]);
  }
}

function checkLocalBasket(button) {
  var dataId = +button.getAttribute("data-id");
  var inBasket = _tools_Basket__WEBPACK_IMPORTED_MODULE_0__["Basket"].checkProduct(dataId);

  if (inBasket) {
    button.removeEventListener("click", addInBasket);
    button.classList.add("tile__button_basket-add");
  }
}

function addInBasket(event) {
  event.preventDefault();
  var buttonBasket = this;
  var productId = buttonBasket.getAttribute("data-id");
  _tools_Basket__WEBPACK_IMPORTED_MODULE_0__["Basket"].addProduct(productId, function () {
    console.log('Ошибка');
  }, function () {
    try {
      buttonBasket.removeEventListener('click', addInBasket);
    } catch (e) {
      console.dir(e);
    }

    buttonBasket.classList.add("tile__button_basket-add");
  });
}

/***/ }),

/***/ "./assets/scripts/tools/Basket.js":
/*!****************************************!*\
  !*** ./assets/scripts/tools/Basket.js ***!
  \****************************************/
/*! exports provided: Basket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return Basket; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var Basket = {
  clean: function clean() {
    localStorage.removeItem('basket');
  },
  setBasket: function setBasket(products) {
    localStorage.setItem('basket', products);
  },
  getProducts: function getProducts() {
    var products = localStorage.getItem('basket');

    if (products) {
      products = JSON.parse(products);
      return products;
    }

    products = [];
    localStorage.setItem('basket', JSON.stringify(products));
    return [];
  },
  getCountProducts: function getCountProducts() {
    return this.getProducts().length;
  },
  checkProduct: function checkProduct(id) {
    return this.getProducts().includes(+id);
  },
  refreshCounts: function refreshCounts(count) {
    var countElements = document.querySelectorAll('[data-basket-count]');
    count = count > 99 ? 'many' : count;

    for (var i = 0; i < countElements.length; i++) {
      var element = countElements[i];
      element.dataset.basketCount = count;
    }
  },
  refreshHtmlCountProducts: function refreshHtmlCountProducts() {
    var count = this.getCountProducts();
    this.refreshCounts(count);
  },
  addProduct: function () {
    var _addProduct = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(productId, fall, done) {
      var data, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = new FormData();
              data.append('id', productId);
              _context.next = 4;
              return fetch('/product/add-to-cart', {
                method: 'POST',
                body: data
              }).then(function (response) {
                return response.json();
              }).then(function (data) {
                Basket.setBasket(JSON.stringify(data));
                Basket.refreshHtmlCountProducts();
                done();
              }).catch(function (error) {
                console.error('Error:', error);
              });

            case 4:
              response = _context.sent;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function addProduct(_x, _x2, _x3) {
      return _addProduct.apply(this, arguments);
    }

    return addProduct;
  }(),
  removeProduct: function () {
    var _removeProduct = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(productId) {
      var data, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = new FormData();
              data.append('id', productId);
              _context2.next = 4;
              return fetch('/product/remove-from-cart', {
                method: 'POST',
                body: data
              }).then(function (response) {
                return response.json();
              }).then(function (data) {
                Basket.setBasket(JSON.stringify(data));
                Basket.refreshHtmlCountProducts();
                done();
              }).catch(function (error) {
                console.error('Error:', error);
              });

            case 4:
              response = _context2.sent;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function removeProduct(_x4) {
      return _removeProduct.apply(this, arguments);
    }

    return removeProduct;
  }()
};
Basket.refreshHtmlCountProducts();

if (sessionStorage.getItem('first') !== '1') {
  if (Basket.getCountProducts() > 0) {
    var data = new FormData();
    data.append('products', JSON.stringify(Basket.getProducts()));
    var request = new XMLHttpRequest();
    request.open('POST', '/cart/cart-recovery', true);
    request.send(data);
  }

  sessionStorage.setItem('first', '1');
}

/***/ }),

/***/ "./assets/scripts/tools/CreateNodesForSearch.js":
/*!******************************************************!*\
  !*** ./assets/scripts/tools/CreateNodesForSearch.js ***!
  \******************************************************/
/*! exports provided: createTag, createHeaderSearchMainBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTag", function() { return createTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeaderSearchMainBox", function() { return createHeaderSearchMainBox; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

function createTag(tagName, className, text, href, dataElement) {
  var _tag$classList;

  var tag = document.createElement(tagName);

  (_tag$classList = tag.classList).add.apply(_tag$classList, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(className));

  if (text) tag.textContent = text;
  if (href) tag.setAttribute("href", href);
  if (dataElement) tag.setAttribute("data-element", dataElement);
  return tag;
}
function createHeaderSearchMainBox(dataArray, cont) {
  removeOldHeaderSearchMainBox(cont);
  var headerSearchMainBox = createTag("div", ["header-search__main-box"]); // const headerSearchMenu = createHeaderSearchMenu(dataArray)
  // headerSearchMainBox.appendChild(headerSearchMenu)

  var headerSearchProductsBox = createHeaderSearchProductsBox(dataArray);
  headerSearchMainBox.appendChild(headerSearchProductsBox);
  var buttonAll = createTag("button", ["header-search__all-result", "button-white"], "Все результаты");
  buttonAll.type = "submit";
  buttonAll.setAttribute("form", "header__search-form");
  headerSearchMainBox.appendChild(buttonAll);
  cont.appendChild(headerSearchMainBox);
}

function createHeaderSearchProductsBox(dataArray) {
  var headerSearchProductsBox = createTag("div", ["header-search__products-box"]);

  if (dataArray.categories.length || dataArray.products.length) {
    if (dataArray.categories.length) {
      var headerSearchCategoryList = createTag("div", ["header-search__category-list"]);

      for (var i = 0; i < dataArray.categories.length; i++) {
        var category = createCategory(dataArray.categories[i]);
        headerSearchCategoryList.appendChild(category);
      }

      headerSearchProductsBox.appendChild(headerSearchCategoryList);
    }

    if (dataArray.products.length) {
      var tileSearch = createTileSearch(dataArray);
      headerSearchProductsBox.appendChild(tileSearch);
    }
  } else {
    console.log('empty');
  }

  return headerSearchProductsBox;
}

function createTileSearch(dataArray) {
  var list = createTag("div", ["tile-search__list"]);

  for (var i = 0; i < dataArray.products.length; i++) {
    var item = createItem(dataArray.products[i]);
    list.appendChild(item);
  }

  return list;
}

function createItem(product) {
  var item = createTag("a", ["tile-search__item"], '', product.link);
  item.setAttribute("data-element", "tile-search__item");
  var picture = createTileSearchPicture(product);
  item.appendChild(picture);
  var priceBox = createTileSearchPriceBox(product);
  item.appendChild(priceBox);
  var infoLine = createTileSearchInfoLine(product);
  item.appendChild(infoLine);
  var text = createTag("p", ["tile-search__text", "text-small"], "Лента тефлоновая уплотнительная чёрная");
  item.appendChild(text);
  return item;
}

function createTileSearchInfoLine(product) {
  var infoLine = createTag("div", ["tile-search__info-line"]);
  var rating = createTag("div", ["tile-search__rating"]);
  var ratingFill = createTag("div", ["tile-search__rating-fill"]);
  ratingFill.style = "width: ".concat(product.ratingFill);
  var ratingValue = createTag("div", ["tile-search__rating-value", "text-small"], product.ratingCount);
  var ratingAvailability = createTag("div", ["tile-search__availability", "text-small"], product.availability);
  rating.appendChild(ratingFill);
  infoLine.appendChild(rating);
  infoLine.appendChild(ratingValue);
  infoLine.appendChild(ratingAvailability);
  return infoLine;
}

function createTileSearchPriceBox(product) {
  var priceBox = createTag("div", ["tile-search__price-box"]);
  var price = createTag("div", ["tile-search__price"], product.price);
  var priceInfo = createTag("div", ["tile-search__price-info"]);
  var priceOld;

  if (product.priceOld) {
    priceOld = createTag("div", ["tile-search__price-old"], product.priceOld);
    priceInfo.appendChild(priceOld);
  }

  var priceRouble = createTag("div", ["tile-search__price-rouble"], "₽/шт.");
  priceInfo.appendChild(priceRouble);
  priceBox.appendChild(price);
  priceBox.appendChild(priceInfo);
  return priceBox;
}

function createTileSearchPicture(product) {
  var picture = createTag("picture", ["tile-search__picture"]);
  var discount;

  if (product.discount) {
    discount = createTag("div", ["tile-search__discount", "text-small"], product.discount);
    picture.appendChild(discount);
  }

  var source2x = document.createElement("source");
  source2x.srcset = product.picture.srcset48 + ' 1x, ' + product.picture.srcset96 + ' 2x';
  source2x.type = "image/webp";
  source2x.media = "(max-width: 1240px)";
  var source140 = document.createElement("source");
  source140.srcset = product.picture.srcset140;
  source140.type = "image/webp";
  var image = document.createElement("img");
  image.src = product.picture.src140;
  image.classList.add("tile-search__image");
  picture.appendChild(source2x);
  picture.appendChild(source140);
  picture.appendChild(image);
  return picture;
}

function createCategory(category) {
  var headerSearchCategoryItem = createTag("a", ["header-search__category-item"], '', category.link);
  var headerSearchCategoryText = createTag("span", ["header-search__category-text"], category.name);
  headerSearchCategoryItem.appendChild(headerSearchCategoryText);
  var headerSearchCategoryPicture = createHeaderSearchCategoryPicture(category.picture);
  headerSearchCategoryItem.appendChild(headerSearchCategoryPicture);
  return headerSearchCategoryItem;
}

function createHeaderSearchCategoryPicture(category) {
  var headerSearchCategoryPicture = createTag("picture", ["header-search__category-picture"]);
  var source32 = document.createElement("source");
  source32.srcset = category.srcset32;
  source32.type = "image/webp";
  var source64 = document.createElement("source");
  source64.srcset = category.srcset32 + ' 1x, ' + category.srcset64 + ' 2x';
  source64.type = "image/webp";
  source64.media = "(max-width: 1240px)";
  var image = document.createElement("img");
  image.src = category.src32;
  image.classList.add("header-search__category-image");
  headerSearchCategoryPicture.appendChild(source64);
  headerSearchCategoryPicture.appendChild(source32);
  headerSearchCategoryPicture.appendChild(image);
  return headerSearchCategoryPicture;
}

function createHeaderSearchMenu(dataArray) {
  var headerSearchMenu = createTag("div", ["header-search__menu"]);
  var headerSearchMenuLink1, headerSearchMenuLink2;

  if (dataArray.productsCount !== 0) {
    headerSearchMenuLink1 = createTag("div", ["header-search__menu-link", "header-search__menu-link_active", "text-small"], "\u0412 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u2014 ".concat(dataArray.productsCount));
  } else {
    headerSearchMenuLink1 = createTag("div", ["header-search__menu-link", "header-search__menu-link_disactive", "text-small"], "\u0412 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u2014 0");
  }

  if (dataArray.journalCount !== 0) {
    headerSearchMenuLink2 = createTag("div", ["header-search__menu-link", "header-search__menu-link_active", "text-small"], "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0441\u0442\u0430\u0442\u044C\u0438 \u2014 ".concat(dataArray.journalCount));
  } else {
    headerSearchMenuLink2 = createTag("div", ["header-search__menu-link", "header-search__menu-link_disactive", "text-small"], "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0441\u0442\u0430\u0442\u044C\u0438 \u2014 0");
  }

  headerSearchMenu.appendChild(headerSearchMenuLink1);
  headerSearchMenu.appendChild(headerSearchMenuLink2);
  return headerSearchMenu;
}

function removeOldHeaderSearchMainBox(cont) {
  var oldHeaderSearchMainBox = cont.getElementsByClassName("header-search__main-box")[0];
  if (oldHeaderSearchMainBox) oldHeaderSearchMainBox.remove();
}

/***/ }),

/***/ "./assets/scripts/tools/FavoritePosts.js":
/*!***********************************************!*\
  !*** ./assets/scripts/tools/FavoritePosts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// export async function sendFavoriteResponse(formData, url) {
//   const response = await fetch(url, {
//     method: 'POST',
//     body: formData
//   })
//   if (!response.ok) return
//   const result = await response.json()
//   const serverFavorites = result.products
//
//   localStorage.setItem('favorites', JSON.stringify(serverFavorites))
// }
//
// export async function checkLocalStorage(elem, productId, className) {
//   const localFavorites = JSON.parse(localStorage.getItem('favorites'))
//   if (localFavorites) {
//     for (let i = 0; i < localFavorites.length; i++) {
//       if (localFavorites[i] == productId) {
//         elem.classList.add(className)
//       }
//     }
//   } else {
//     const response = await sendFavoriteResponse(false, '/get-favorites')
//     if (!response.ok) return
//     checkLocalStorage()
//   }
// }
//
// export async function deleteProductFromFavorites(elem, id, className) {
//   const formData = new FormData()
//   formData.append('id', id)
//
//   sendFavoriteResponse(formData, '/product/remove-from-favorites')
//
//   elem.classList.remove(className)
// }
//
// export async function addProductInFavorites(elem, id, className) {
//   const formData = new FormData()
//   formData.append('id', id)
//
//   sendFavoriteResponse(formData, '/product/add-to-favorites')
//
//   elem.classList.add(className)
// }

/***/ }),

/***/ "./assets/scripts/tools/IsInvalidationPhone.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/tools/IsInvalidationPhone.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IsInvalidationPhone; });
function IsInvalidationPhone(phone) {
  if (phone.length < 6) {
    return true;
  }

  if (/[^0-9-+()\s]/g.test(phone)) {
    return true;
  }

  if (phone.length > 40) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./assets/scripts/tools/ScrollToAnchor.js":
/*!************************************************!*\
  !*** ./assets/scripts/tools/ScrollToAnchor.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.querySelector('[data-role="scroll-to-anchor"]')) setTimeout(initScrollToAnchor, 0);

function initScrollToAnchor() {
  var anchorElements = document.querySelectorAll('[data-role="scroll-to-anchor"]');

  for (var i = 0, len = anchorElements.length; i < len; i++) {
    _loopAddEventScrollToAnchor(anchorElements[i]);
  }

  function _loopAddEventScrollToAnchor(node) {
    node.addEventListener('click', clickOnTheScrollElement);
  }
}

function clickOnTheScrollElement(event) {
  event.preventDefault();
  var elementId;
  if (this.dataset.link) elementId = this.dataset.link.substr(1);else elementId = this.hash.substr(1);
  var element = document.getElementById(elementId);
  if (element) animateScrollToAnchor(element);
}

function animateScrollToAnchor(theElement) {
  var positionNow = window.pageYOffset;
  var positionElement = theElement.getBoundingClientRect().top + pageYOffset - 50;
  var duration = 300;
  var step = positionElement - positionNow;
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    var timePassed = time - start;

    if (timePassed > duration) {
      window.scrollTo(0, positionElement);
    } else {
      window.scrollTo(0, positionNow + step * (timePassed / duration));
      requestAnimationFrame(animate);
    }
  });
}

/***/ }),

/***/ "./assets/scripts/tools/SendFormAntispam.js":
/*!**************************************************!*\
  !*** ./assets/scripts/tools/SendFormAntispam.js ***!
  \**************************************************/
/*! exports provided: disabledButton, enabledButton, getData, sendForm, validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disabledButton", function() { return disabledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enabledButton", function() { return enabledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendForm", function() { return sendForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validation", function() { return validation; });
/* harmony import */ var _tools_IsInvalidationPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/IsInvalidationPhone */ "./assets/scripts/tools/IsInvalidationPhone.js");

function disabledButton(component, dataElement) {
  var button = component.querySelector(dataElement);
  button.disabled = true;
}
function enabledButton(component, dataElement) {
  var button = component.querySelector(dataElement);
  button.disabled = false;
}
function getData(form, dataMod) {
  var data = new FormData(form);

  if (dataMod === "basket") {
    var basketInputCounter = document.querySelectorAll('[data-element="basket__input-counter"]');

    for (var i = 0; i < basketInputCounter.length; i++) {
      data.append(basketInputCounter[i].name, basketInputCounter[i].value);
    }
  }

  var hiddenInput = form.querySelector('[data-role="input-spam"]');
  if (hiddenInput) data.delete(hiddenInput.name);
  return data;
}
function sendForm(formData, url) {
  fetch(url, {
    method: 'POST',
    body: formData
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data) window.location.assign('/thanks');
  }).catch(console.error);
}
function validation(phone, mail, component) {
  if (phone) {
    if (validatePhone(phone, component)) return;
  }

  if (mail) {
    if (validationMail(mail, component)) return;
  }

  enabledButton(component, '[data-role="autocomplete-spam-form-button"]');
}

function validatePhone(phone, component) {
  if (Object(_tools_IsInvalidationPhone__WEBPACK_IMPORTED_MODULE_0__["default"])(phone.value)) {
    phone.classList.add("input_wrong");
    disabledButton(component, '[data-role="autocomplete-spam-form-button"]');
    return true;
  } else {
    phone.classList.remove("input_wrong");
  }
}

function validationMail(mail, component) {
  if (mail.validity.valid === false) {
    mail.classList.add("input_wrong");
    disabledButton(component, '[data-role="autocomplete-spam-form-button"]');
    return true;
  } else {
    mail.classList.remove("input_wrong");
  }
}

/***/ }),

/***/ "./assets/scripts/tools/autocompleteAndSendForm.js":
/*!*********************************************************!*\
  !*** ./assets/scripts/tools/autocompleteAndSendForm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SendFormAntispam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SendFormAntispam */ "./assets/scripts/tools/SendFormAntispam.js");

var forms = document.querySelectorAll('[data-role="autocomplete-spam-form"]');
if (forms) setTimeout(formsInit, 0);

function formsInit() {
  for (var i = 0; i < forms.length; i++) {
    formInit(forms[i]);
  }
}

function formInit(form) {
  var personalInformation = sessionStorage.getItem("personalInformation");

  if (personalInformation) {
    personalInformation = JSON.parse(personalInformation);
    autocomplete();
  }

  function autocomplete() {
    var mail = document.querySelector('[data-role="autocomplete-spam-form-mail"]');
    if (mail && personalInformation.mail) mail.value = personalInformation.mail;
    var phone = document.querySelector('[data-role="autocomplete-spam-form-phone"]');
    if (phone && personalInformation.phone) phone.value = personalInformation.phone;
  }

  form.addEventListener('submit', submitForm);
  var phone = form.querySelector('[data-role="autocomplete-spam-form-phone"]');
  var mail = form.querySelector('[data-role="autocomplete-spam-form-mail"]');

  if (phone) {
    form.addEventListener('input', validate);
  }

  if (mail) {
    form.addEventListener('input', validate);
  }

  function validate() {
    Object(_SendFormAntispam__WEBPACK_IMPORTED_MODULE_0__["validation"])(phone, mail, form);
  }

  function submitForm(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var button = form.querySelector('[data-role="autocomplete-spam-form-button"]');
    var dataMod = button.getAttribute("data-mod");
    var data = Object(_SendFormAntispam__WEBPACK_IMPORTED_MODULE_0__["getData"])(form, dataMod);
    var url = form.getAttribute('action');
    Object(_SendFormAntispam__WEBPACK_IMPORTED_MODULE_0__["sendForm"])(data, url);
  }
}

/***/ }),

/***/ "./assets/scripts/tools/my-fancybox.js":
/*!*********************************************!*\
  !*** ./assets/scripts/tools/my-fancybox.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var fancyboxItems = document.querySelectorAll('[data-role="data-my-fancybox-item"]');
if (fancyboxItems) setTimeout(initMyFancybox, 0);

function initMyFancybox() {
  for (var i = 0; i < fancyboxItems.length; i++) {
    fancyboxItems[i].addEventListener('click', initOneFancybox);
  }
}

function initOneFancybox() {
  var name = this.getAttribute("data-my-fancybox-name");
  var items = document.querySelectorAll('[data-my-fancybox-name="' + name + '"]');
  createMyFancybox(items, this);
}

function createMyFancybox(children, currentItem) {
  var myFancybox = document.createElement("aside");
  myFancybox.classList.add("my-fancybox", "my-fancybox");
  myFancybox.setAttribute("data-role", "my-fancybox");
  var myFancyboxCont = createMyFancyboxCont(children);
  myFancybox.appendChild(myFancyboxCont);
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(myFancybox);
  var fancybox = new fancyboxClass(myFancybox);
  fancybox.openFancybox(currentItem);
}

function createMyFancyboxCont(data) {
  var cont = document.createElement("div");
  cont.classList.add("my-fancybox__cont");
  var myFancyboxWrapper = createMyFancyboxWrapper(data);
  cont.appendChild(myFancyboxWrapper);
  return cont;
}

function createMyFancyboxWrapper(data) {
  var myFancyboxWrapper = document.createElement("div");
  myFancyboxWrapper.classList.add("my-fancybox__wrapper");
  myFancyboxWrapper.setAttribute("data-role", "my-fancybox__wrapper");
  var myData = [];

  for (var i = 0; i < data.length; i++) {
    var href = data[i].getAttribute("data-href");
    var type = data[i].getAttribute("data-my-fancybox-type");
    var text = data[i].getAttribute("data-caption");
    var myDataObject = {
      href: href,
      type: type,
      text: text
    };
    myData[i + 1] = myDataObject;
  }

  var stringData = JSON.stringify(myData);
  myFancyboxWrapper.setAttribute("data-info", stringData);
  var myFancyboxInner = document.createElement("div");
  myFancyboxInner.classList.add("my-fancybox__inner");
  myFancyboxWrapper.appendChild(myFancyboxInner);
  var menu = createMyFanciboxMenu(data);
  myFancyboxInner.appendChild(menu);
  var close = createMyFanciboxClose();
  myFancyboxInner.appendChild(close);
  var next = createMyFanciboxButton("next", data);
  var prev = createMyFanciboxButton("prev", data);
  myFancyboxInner.appendChild(next);
  myFancyboxInner.appendChild(prev);
  var area = createMyFanciboxArea(data);
  myFancyboxInner.appendChild(area);
  var listBox = createMyFanciboxListBox(data);
  myFancyboxWrapper.appendChild(listBox);
  return myFancyboxWrapper;
}

function createMyFanciboxMenu(data) {
  var div = document.createElement("div");
  div.classList.add("my-fancybox__btn-menu");
  if (data.length === 1) div.classList.add("my-fancybox__btn-menu_hide");
  div.setAttribute("data-role", "my-fancybox__btn-menu");
  return div;
}

function createMyFanciboxClose() {
  var div = document.createElement("div");
  div.classList.add("my-fancybox__btn-close");
  div.setAttribute("data-role", "my-fancybox__btn-close");
  return div;
}

function createMyFanciboxButton(mod, data) {
  var div = document.createElement("div");
  div.classList.add("my-fancybox__button");
  if (data.length === 1) div.classList.add("my-fancybox__button_hide");
  div.classList.add("my-fancybox__button_".concat(mod));
  div.setAttribute("data-role", "my-fancybox-".concat(mod));
  return div;
}

function createMyFanciboxListBox(data) {
  var listBox = document.createElement("div");
  listBox.classList.add("my-fancybox__list-box");
  listBox.setAttribute("data-role", "my-fancybox__list-box");
  var list = createMyFanciboxList(data);
  var div = document.createElement("div");
  div.classList.add("my-fancybox__list-container");
  div.appendChild(list);
  listBox.appendChild(div);
  return listBox;
}

function createMyFanciboxList(data) {
  var list = document.createElement('ul');
  list.classList.add("my-fancybox__list");

  for (var i = 0; i < data.length; i++) {
    var item = createMyFancyboxItem(data[i], i);
    list.appendChild(item);
  }

  return list;
}

function createMyFancyboxItem(data, index) {
  var item = document.createElement("li");
  item.classList.add("my-fancybox__item");
  if (index === 1) item.classList.add("my-fancybox__item_active");
  item.setAttribute("data-index", "".concat(index + 1));
  var srcBig = data.getAttribute("data-href");
  item.setAttribute("data-src-big-image", srcBig);
  var text = data.getAttribute("data-caption");
  item.setAttribute("data-text", text);
  item.setAttribute("data-role", "my-fancybox__item");
  var picture = createMyFancyboxPicture(data);
  item.appendChild(picture);
  return item;
}

function createMyFancyboxPicture(data) {
  var picture = document.createElement("picture");
  picture.classList.add("my-fancybox__picture");

  if (data.getAttribute("data-thumb-2x")) {
    var source = document.createElement("source");
    source.srcset = data.getAttribute("data-thumb") + ' 1x, ' + data.getAttribute("data-thumb-2x") + ' 2x';
    picture.appendChild(source);
  }

  if (data.getAttribute("data-my-fancybox-type") === "video") {
    picture.classList.add("my-fancybox__thumb-video");
  }

  var image = createMyFancyboxImage(data);
  picture.appendChild(image);
  return picture;
}

function createMyFancyboxImage(data) {
  var image = document.createElement("img");
  image.classList.add("my-fancybox__image");
  image.src = data.getAttribute("data-thumb");
  image.setAttribute("loading", "lazy");
  return image;
}

function createMyFanciboxArea(data) {
  var area = document.createElement('div');
  area.classList.add("my-fancybox__area");
  var box = createMyFancyboxBox(data[0]);
  area.appendChild(box);
  return area;
}

function createMyFancyboxBox(data) {
  var box = document.createElement("div");
  box.classList.add("my-fancybox__box");
  box.classList.add("my-fancybox__box_active");

  if (data.getAttribute("data-my-fancybox-type") === "video") {
    var iframe = createMyFancyboxIframeBoxBig(data);
    box.appendChild(iframe);
  } else {
    var picture = createMyFancyboxPictureBig(data);
    box.appendChild(picture);
  }

  var layer = createMyFancyboxLayer();
  box.appendChild(layer);
  var caption = data.getAttribute("data-caption");

  if (caption) {
    var p = createMyFanciboxText(caption);
    box.appendChild(p);
  }

  return box;
}

function createMyFanciboxText(caption) {
  var p = document.createElement("p");
  p.classList.add("my-fancybox__text");
  p.setAttribute("data-role", "my-fancybox__text");
  p.innerHTML = caption;
  return p;
}

function createMyFancyboxLayer() {
  var div = document.createElement("div");
  div.classList.add("my-fancybox__layer");
  div.setAttribute("data-role", "my-fancybox-layer");
  return div;
}

function createMyFancyboxPictureBig(data) {
  var picture = document.createElement("picture");
  picture.classList.add("my-fancybox__picture-big");
  picture.classList.add("my-fancybox__picture-big_loading");
  picture.setAttribute("data-role", "my-fancybox__picture-big");
  var image = createMyFancyboxImageBig(data);
  picture.appendChild(image);
  return picture;
}

function createMyFancyboxIframeBoxBig(data) {
  var box = document.createElement("div");
  box.classList.add("my-fancybox__picture-big");
  box.classList.add("my-fancybox__picture-big_loading");
  box.classList.add("my-fancybox__iframe-box");
  box.addEventListener("click", playFrame);

  function playFrame() {
    var frame = box.getElementsByClassName("my-fancybox__iframe")[0];
    frame.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: 'playVideo'
    }), '*');
    box.classList.add("my-fancybox__iframe-box_play");
  }

  box.setAttribute("data-role", "my-fancybox__picture-big");
  var iframe = createMyFancyboxIframeBig(data);
  box.appendChild(iframe);
  return box;
}

function createMyFancyboxIframeBig(data) {
  var iframe = document.createElement("iframe");
  iframe.classList.add("my-fancybox__image-big");
  iframe.setAttribute("data-role", "my-fancybox__iframe-big");
  iframe.classList.add("my-fancybox__iframe");
  iframe.src = data.getAttribute("data-href");
  iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
  iframe.setAttribute("allowfullscreen", true);
  return iframe;
}

function createMyFancyboxImageBig(data) {
  var image = document.createElement("img");
  image.classList.add("my-fancybox__image-big");
  image.setAttribute("data-role", "my-fancybox__image-big");
  image.src = data.getAttribute("data-href");
  image.setAttribute("loading", "lazy");
  return image;
}

var fancyboxFunctionBindLink;
var myTimer;
var coordPrev;
var coordNext;
var myClass;

var fancyboxClass = /*#__PURE__*/function () {
  function fancyboxClass(myFancybox) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, fancyboxClass);

    myClass = this;
    this.fancybox = myFancybox;
    this.wrapper = this.fancybox.querySelector('[data-role="my-fancybox__wrapper"]');
    this.data = JSON.parse(this.wrapper.getAttribute("data-info"));
    this.layer = this.fancybox.querySelectorAll('[data-role="my-fancybox-layer"]');

    for (var i = 0; i < this.layer.length; i++) {
      this.layer[i].addEventListener('click', this.closeFancybox);
    }

    this.btnMenu = this.fancybox.querySelector('[data-role="my-fancybox__btn-menu"]');
    this.btnMenu.addEventListener('click', this.toggleMenu);
    this.btnClose = this.fancybox.querySelector('[data-role="my-fancybox__btn-close"]');
    this.btnClose.addEventListener('click', this.closeFancybox);
    this.fancyboxItems = this.fancybox.querySelectorAll('[data-role="my-fancybox__item"]');

    var _loop = function _loop(_i) {
      _this.fancyboxItems[_i].addEventListener('click', function () {
        return _this.toggleItem(_this.fancyboxItems[_i]);
      });
    };

    for (var _i = 0; _i < this.fancyboxItems.length; _i++) {
      _loop(_i);
    }

    this.prev = this.fancybox.querySelector('[data-role="my-fancybox-prev"]');
    this.next = this.fancybox.querySelector('[data-role="my-fancybox-next"]');
    this.prev.addEventListener('click', function () {
      return _this.prevFancybox();
    });
    this.next.addEventListener('click', function () {
      return _this.nextFancybox();
    });
    this.picturesBig = this.fancybox.querySelectorAll('[data-role="my-fancybox__picture-big"]');

    for (var _i2 = 0; _i2 < this.picturesBig.length; _i2++) {
      var image = this.picturesBig[_i2].getElementsByClassName("my-fancybox__image-big")[0];

      image.addEventListener("touchstart", this.showTextAndArrows, {
        passive: true
      });
      image.addEventListener("touchend", this.svipeEnd, {
        passive: true
      });
      image.addEventListener("touchmove", this.svipeSlide, {
        passive: true
      });
    }

    this.imagesBig = this.fancybox.querySelectorAll('[data-role="my-fancybox__image-big"]');

    for (var _i3 = 0; _i3 < this.imagesBig.length; _i3++) {
      this.imagesBig[_i3].addEventListener("load", this.deleteLoadCircle);
    }

    this.iframesBig = this.fancybox.querySelectorAll('[data-role="my-fancybox__iframe-big"]');

    for (var _i4 = 0; _i4 < this.iframesBig.length; _i4++) {
      this.iframesBig[_i4].addEventListener("load", this.deleteLoadCircle);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(fancyboxClass, [{
    key: "deleteLoadCircle",
    value: function deleteLoadCircle(event) {
      event.currentTarget.parentElement.classList.remove("my-fancybox__picture-big_loading");
    }
  }, {
    key: "svipeEnd",
    value: function svipeEnd(event) {
      var boxActive = document.querySelector('.my-fancybox__box_active');
      var item = boxActive.querySelector('.my-fancybox__picture-big');
      var image = item.getElementsByClassName("my-fancybox__image-big")[0];
      var coord1 = image.style.transform.slice(0, -3);
      var coord2 = coord1.slice(11);

      if (coord2 > 50) {
        myClass.animationSvipeRight();
        setTimeout(myClass.prevFancybox, 500);
      } else if (coord2 < -50) {
        myClass.animationSvipeLeft();
        setTimeout(myClass.nextFancybox, 500);
      } else {
        image.style.transform = "translateX(0px)";
      }
    }
  }, {
    key: "animationSvipeRight",
    value: function animationSvipeRight() {
      var boxActive = myClass.fancybox.querySelector('.my-fancybox__box_active');
      var item = boxActive.querySelector('.my-fancybox__picture-big');
      var image = item.getElementsByClassName("my-fancybox__image-big")[0];
      image.style.transform = "translateX(1000px)";
    }
  }, {
    key: "animationSvipeLeft",
    value: function animationSvipeLeft() {
      var boxActive = myClass.fancybox.querySelector('.my-fancybox__box_active');
      var item = boxActive.querySelector('.my-fancybox__picture-big');
      var image = item.getElementsByClassName("my-fancybox__image-big")[0];
      image.style.transform = "translateX(-1000px)";
    }
  }, {
    key: "svipeSlide",
    value: function svipeSlide(event) {
      var boxActive = document.querySelector('.my-fancybox__box_active');
      var item = boxActive.querySelector('.my-fancybox__picture-big');
      var image = item.getElementsByClassName("my-fancybox__image-big")[0];
      coordNext = event.touches[0].clientX;
      image.style.transform = "translateX(" + (coordNext - coordPrev) + "px)";
    }
  }, {
    key: "showTextAndArrows",
    value: function showTextAndArrows(event) {
      coordPrev = event.touches[0].clientX;
      clearTimeout(myTimer);
      var prev = document.querySelector('[data-role="my-fancybox-prev"]');
      var next = document.querySelector('[data-role="my-fancybox-next"]');
      var boxActive = document.querySelector('.my-fancybox__box_active');
      var text = boxActive.querySelector('[data-role="my-fancybox__text"]');
      prev.classList.add("my-fancybox__button_show");
      next.classList.add("my-fancybox__button_show");
      if (text) text.classList.add("my-fancybox__text_show");
      myTimer = setTimeout(hide, 3000);

      function hide() {
        prev.classList.remove("my-fancybox__button_show");
        next.classList.remove("my-fancybox__button_show");
        if (text) text.classList.remove("my-fancybox__text_show");
      }
    }
  }, {
    key: "prevFancybox",
    value: function prevFancybox() {
      var oldActiveItem = myClass.fancybox.getElementsByClassName('my-fancybox__item_active')[0];
      var index = oldActiveItem.getAttribute('data-index');
      var newIndex = index - 1;
      if (newIndex === 0) newIndex = myClass.fancyboxItems.length;
      var newActiveItem = myClass.fancybox.querySelector('[data-index="' + newIndex + '"]');
      myClass.animationSvipe();
      myClass.toggleItem(newActiveItem);
    }
  }, {
    key: "animationSvipe",
    value: function animationSvipe() {
      var image = myClass.fancybox.querySelector('[data-role="my-fancybox__image-big"]');
      image.style.transitionDuration = "0s";
      image.style.transform = "";
      setTimeout(qwe, 100);

      function qwe() {
        image.style.transitionDuration = ".5s";
      }
    }
  }, {
    key: "nextFancybox",
    value: function nextFancybox() {
      var oldActiveItem = myClass.fancybox.getElementsByClassName('my-fancybox__item_active')[0];
      var index = oldActiveItem.getAttribute('data-index');
      var newIndex = +index + 1;
      if (newIndex === myClass.fancyboxItems.length + 1) newIndex = 1;
      var newActiveItem = myClass.fancybox.querySelector('[data-index="' + newIndex + '"]');
      myClass.animationSvipe();
      myClass.toggleItem(newActiveItem);
    }
  }, {
    key: "toggleItem",
    value: function toggleItem(node) {
      var oldActiveSmallItem = this.fancybox.getElementsByClassName('my-fancybox__item_active')[0];
      if (oldActiveSmallItem) oldActiveSmallItem.classList.remove('my-fancybox__item_active');
      node.classList.add('my-fancybox__item_active');
      var index = node.getAttribute('data-index');
      var data = this.data[index];
      var box = this.fancybox.getElementsByClassName('my-fancybox__box_active')[0];
      var image = box.getElementsByClassName("my-fancybox__image-big")[0];
      image.src = data.href;
      var text = box.getElementsByClassName("my-fancybox__text")[0];
      if (text) text.innerHTML = data.text;
      this.stopPlayingVideo();
    }
  }, {
    key: "stopPlayingVideo",
    value: function stopPlayingVideo() {
      var playingVideo = this.fancybox.getElementsByClassName("my-fancybox__iframe-box_play")[0];

      if (playingVideo) {
        var frame = playingVideo.getElementsByClassName("my-fancybox__iframe")[0];
        frame.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'stopVideo'
        }), '*');
        playingVideo.classList.remove("my-fancybox__iframe-box_play");
      }
    }
  }, {
    key: "openFancybox",
    value: function openFancybox(currentItem) {
      var currentIndex = 0;
      var currentHref = currentItem.getAttribute("data-thumb");

      for (var i = 0; i < this.fancyboxItems.length; i++) {
        if (this.fancyboxItems[i].getElementsByTagName("img")[0].getAttribute("src") === currentHref) {
          currentIndex = i + 1;
          break;
        }
      }

      var activeItem = this.fancybox.querySelector('[data-index="' + currentIndex + '"]');
      this.toggleItem(activeItem);
      this.fancybox.classList.add('my-fancybox_open');
      setTimeout(setOpacityVisible, 0);
      var fancybox = this.fancybox;

      function setOpacityVisible() {
        fancybox.classList.add('my-fancybox_open-opacity');
      }

      fancyboxFunctionBindLink = this.eventCloseFromESC.bind(this);
      window.addEventListener('keydown', fancyboxFunctionBindLink);
    }
  }, {
    key: "closeFancybox",
    value: function closeFancybox() {
      window.removeEventListener('keydown', fancyboxFunctionBindLink);
      var openFancybox = document.getElementsByClassName('my-fancybox_open')[0];
      openFancybox.classList.remove('my-fancybox_open-opacity');
      setTimeout(hideDisplay, 300);

      function hideDisplay() {
        openFancybox.classList.remove('my-fancybox_open');
        var myFancybox = document.querySelector('[data-role="my-fancybox"]');
        myFancybox.remove();
      }
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var menu = document.querySelector('[data-role="my-fancybox__list-box"]');

      if (menu.classList.contains("my-fancybox__list-box_show")) {
        menu.classList.remove("my-fancybox__list-box_show");
      } else {
        menu.classList.add("my-fancybox__list-box_show");
      }
    }
  }, {
    key: "eventCloseFromESC",
    value: function eventCloseFromESC(event) {
      if (event.code === 'Escape') this.closeFancybox();else if (event.code === 'ArrowRight') this.nextFancybox();else if (event.code === 'ArrowLeft') this.prevFancybox();
    }
  }]);

  return fancyboxClass;
}();

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=app.js.map