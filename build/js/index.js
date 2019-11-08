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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QSA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return waterfall; });
/* unused harmony export nothing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return inTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return withNoTransitionOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addClassTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeClassFrom; });
/* unused harmony export willAddClassTo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return willRemoveClassFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return trySeal; });
/* unused harmony export getID */
/* unused harmony export sealPosition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getBoundingClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return attachScrollHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return attachLayoutScrollHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return withSeal; });
var Q = function Q(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  } else {
    return selector;
  }
};
var QSA = function QSA(selector, parent) {
  if (!selector) {
    return [];
  }

  if (typeof selector === 'string') {
    var items = (parent || document).querySelectorAll(selector);
    return [].concat.apply([], items);
  } else {
    return [selector];
  }
};
var waterfall = function waterfall(fall, cb) {
  function next(result) {
    var _cb = function _cb(err) {
      if (fall.length === 0) {
        cb && cb();
      } else {
        next.apply(Array.prototype.slice.call(arguments, 1));
      }
    };

    fall.shift().apply(null, Array.prototype.slice.call(arguments, 0).concat([_cb]));
  }

  next();
};
var nothing = function nothing() {};
var inTime = function inTime(time, callback) {
  return function (cb) {
    callback && callback(null, true);
    setTimeout(cb, time);
  };
};
var withNoTransitionOn = function withNoTransitionOn(selector, callback) {
  QSA(selector).forEach(function (item) {
    item.classList.add('no-transition');
    callback(item);
    item.offsetLeft;
    item.classList.remove('no-transition');
    item.offsetLeft;
  });
};
var addClassTo = function addClassTo(selector, className, fast) {
  QSA(selector).forEach(function (item) {
    if (fast) {
      item.classList.add('no-transition');
    }

    trySeal(item);
    item.classList.add(className);

    if (fast) {
      item.offsetLeft;
      item.classList.remove('no-transition');
      item.offsetLeft;
    }
  });
};
var removeClassFrom = function removeClassFrom(selector, className) {
  QSA(selector).forEach(function (item) {
    item.classList.remove(className);
  });
};
var willAddClassTo = function willAddClassTo(selector, className) {
  return function () {
    addClassTo(selector, className);
  };
};
var willRemoveClassFrom = function willRemoveClassFrom(selector, className) {
  return function () {
    removeClassFrom(selector, className);
  };
};
var RAF;

if (window.requestAnimationFrame) {
  RAF = window.requestAnimationFrame;
} else {
  RAF = function RAF(cb) {
    setTimeout(cb, 16);
  };
} // Test via a getter in the options object to see if the passive property is accessed


var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

var PASSIVE_EVENT = supportsPassive ? {
  passive: true
} : false;
var NOTPASSIVE_EVENT = supportsPassive ? {
  passive: false
} : false;
var WINDOW_SCROLL_TOP = 0;
var WINDOW_SCROLL_HEIGHT = 0;
var trySeal = nothing;
var objectLOOKUP = {};
var sealCounter = 0;
var getID = function getID(item) {
  var id = item.__seal_id;

  if (!id) {
    item.__seal_id = sealCounter++;
  }

  return item.__seal_id;
};

var copyBoundingRect = function copyBoundingRect(bb) {
  return {
    top: bb.top,
    left: bb.left,
    bottom: bb.bottom,
    right: bb.right,
    width: bb.width,
    height: bb.height
  };
};

var sealPosition = function sealPosition(item) {
  var objectID = getID(item);
  objectLOOKUP[objectID] = {
    item: item,
    position: copyBoundingRect(item.getBoundingClientRect())
  };
  objectLOOKUP[objectID].position.top += WINDOW_SCROLL_TOP;
  return objectLOOKUP[objectID];
};
var getBoundingClientRect = function getBoundingClientRect(item) {
  var objectID = getID(item);
  var object =
  /*objectLOOKUP[objectID] || */
  sealPosition(item);
  return {
    top: object.position.top,
    // - WINDOW_SCROLL_TOP,
    left: object.position.left,
    // - WINDOW_SCROLL_TOP,
    bottom: object.position.bottom,
    height: object.position.height
  };
};
var getScrollTop = function getScrollTop() {
  return window.scrollY;
};
var __scrollHandlers = [];
var attachScrollHandler = function attachScrollHandler(handler) {
  var dispatched = false;

  function dispatch() {
    WINDOW_SCROLL_TOP = getScrollTop();
    WINDOW_SCROLL_HEIGHT = window.innerHeight;
    handler();
    dispatched = false;
  }

  function dispatchScroll() {
    if (!dispatched) {
      dispatched = true;
      RAF(dispatch);
    }
  }

  __scrollHandlers.push(dispatchScroll);

  window.addEventListener('scroll', dispatchScroll, PASSIVE_EVENT);
};
var attachLayoutScrollHandler = function attachLayoutScrollHandler(handler) {
  window.addEventListener('scroll', handler, PASSIVE_EVENT);
  return function () {
    return window.removeEventListener('scroll', handler, PASSIVE_EVENT);
  };
};
var withSeal = function withSeal(cb) {
  WINDOW_SCROLL_TOP = getScrollTop();
  trySeal = sealPosition;
  cb();
  trySeal = nothing;
};

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test__ = __webpack_require__(6);



/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_animation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_faq__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_checkbox__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_stories__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__block_forms__ = __webpack_require__(12);






/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPageScroll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startPage__ = __webpack_require__(8);


var getPageScroll = function getPageScroll() {
  var lastPageScroll = 0;
  var lastScrollDelta = 0;
  var resortScrollTimeout = 0;

  var resortOnScroll = function resortOnScroll() {
    if (resortScrollTimeout) {
      return;
    }

    var advElements = Object(__WEBPACK_IMPORTED_MODULE_1__startPage__["c" /* getAdvElements */])();
    var height = window.innerHeight;
    var scrollTop = Object(__WEBPACK_IMPORTED_MODULE_0__global__["g" /* getScrollTop */])();
    var bottom = height + scrollTop;
    var items = advElements.filter(function (_ref) {
      var done = _ref.done;
      return !done;
    }).map(function (item) {
      return {
        position: Object(__WEBPACK_IMPORTED_MODULE_0__global__["f" /* getBoundingClientRect */])(item),
        item: item
      };
    }).sort(function (a, b) {
      var diff = a.position.top - b.position.top;

      if (Math.abs(diff) < 10) {
        var oDiff = a.order - b.order;
        return oDiff ? oDiff : a.position.left - b.position.left;
      }

      return diff;
    }).filter(function (itemRecord) {
      return itemRecord.position.top < bottom - height / 5;
    }).filter(function (itemRecord) {
      return itemRecord.position.bottom > 0;
    });

    if (items.length) {
      var item = items[0].item;
      Object(__WEBPACK_IMPORTED_MODULE_1__startPage__["f" /* removeAnimationFromCommonElement */])(item);
      item.done = true;
      resortScrollTimeout = setTimeout(function () {
        resortScrollTimeout = 0;
        resortOnScroll();
      }, item.dataset.noAnimationDelay ? 0 : 300);
    }
  };

  return function () {
    var scrollTop = Object(__WEBPACK_IMPORTED_MODULE_0__global__["g" /* getScrollTop */])();
    var deltaScroll = scrollTop - lastPageScroll;

    if (scrollTop === 0) {}

    if (deltaScroll > 0) {}

    if (deltaScroll < 0) {}

    lastScrollDelta = deltaScroll;
    lastPageScroll = scrollTop;

    if (scrollTop > 0) {}

    resortOnScroll();
  };
};

var onPageScroll = function onPageScroll() {
  var onScroll = getPageScroll();
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["e" /* attachScrollHandler */])(onScroll);
  setTimeout(function () {
    onScroll(0);
  }, 300);
}; // const mobileAnimation = ({pastScroll}) => {
//   if (window.matchMedia("(max-width: 1023px)").matches) {
//     waterfall([
//       inTime(pastScroll * 300),
//       inTime(0, willRemoveClassFrom('.airnow-promo__light', 'airnow-promo__light--hidden')),
//     ])
//   }
// };
// promo list scroll


var promoListScrollFollow = function promoListScrollFollow() {
  var list = document.querySelector('.airnow-promo__list');
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["d" /* attachLayoutScrollHandler */])(function () {
    var _list$getBoundingClie = list.getBoundingClientRect(),
        height = _list$getBoundingClie.height;

    var maxHeight = height * 1.8;
    var scroll = Math.min(maxHeight, window.scrollY);
    var f = 1 - scroll / (maxHeight * 4);
    var o = 1 - scroll / (maxHeight * 2.5);
    list.style.transform = "translateY(".concat(scroll, "px) scaleY(").concat(f, ")");
    list.style.opacity = o;

    if (scroll >= maxHeight) {
      Object(__WEBPACK_IMPORTED_MODULE_1__startPage__["a" /* addBlock1ToCommonElements */])();
    }
  });
};

var promoSloganScrollFollow = function promoSloganScrollFollow() {
  var list = document.querySelector('.airnow-promo__tip');
  var top = list.getBoundingClientRect().top + window.scrollY;
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["m" /* withNoTransitionOn */])(list, function () {
    list.style.transform = "translateY(-1000px)";
    list.style.opacity = 0;
  });
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["d" /* attachLayoutScrollHandler */])(function () {
    var _list$getBoundingClie2 = list.getBoundingClientRect(),
        height = _list$getBoundingClie2.height;

    var maxHeight = height * 1.8;
    var scroll = Math.min(0, window.scrollY + window.innerHeight / 2 - top);
    var o = window.scrollY - top;
    list.style.transform = "translateY(".concat(scroll, "px)");
    list.style.opacity = 1 + scroll / (window.innerHeight / 2);

    if (scroll >= maxHeight) {
      Object(__WEBPACK_IMPORTED_MODULE_1__startPage__["a" /* addBlock1ToCommonElements */])();
    }
  });
};

var isMobile = window.matchMedia("(max-width: 639px)").matches;
var baseScaleTop = isMobile ? 0.7 : 1;
var baseScaleBottom = isMobile ? 0.5 : 1;

var moneyRainTop = function moneyRainTop() {
  var rand = function rand(min, max) {
    return min + Math.random() * (max - min);
  };

  var bucket = document.querySelector(".airnow-promo__space-content");
  var bottom = document.querySelector(".airnow-promo__bottom");
  var NUM_MONEY = 10;

  var getMoney = function getMoney(x, index) {
    var TTL = 6000;
    var img = document.createElement('img');
    img.className = "dollar";
    img.src = "../images/dollar".concat(Math.round(rand(1, 3)), ".svg");
    bucket.appendChild(img);

    var updatePosition = function updatePosition() {
      var bb = bucket.getBoundingClientRect();
      var eb = bottom.getBoundingClientRect();
      var deltaStart = eb.width * 0.2;
      var start = [rand(-deltaStart, eb.width + deltaStart), -100];
      var end = [eb.width / 2, eb.top - bb.top + eb.width / 1.5 + 32];
      var sf = rand(0, 0.2);
      var se = 0.35; // rand(0.3, 0.5);

      var v = [end[0] - start[0], end[1] - start[1]];
      var source = [start[0] + v[0] * sf, start[1] + v[1] * sf];
      var target = [end[0] - v[0] * se, end[1] - v[1] * se];
      var rotationStart = rand(-190, 190);
      var rotationEnd = rand(-190, 190);
      Object(__WEBPACK_IMPORTED_MODULE_0__global__["m" /* withNoTransitionOn */])(img, function () {
        img.style.transform = "translate(".concat(source[0], "px, ").concat(source[1], "px) rotate(").concat(rotationStart, "deg) scale(").concat(baseScaleTop, ")");
        img.classList.remove('dollar--visible');
      });
      img.style.transform = "translate(".concat(target[0], "px, ").concat(target[1], "px) rotate(").concat(rotationEnd, "deg) scale(").concat(baseScaleTop * 0.8, ")");
      img.classList.add('dollar--visible');
    };

    setTimeout(function () {
      updatePosition();
      setInterval(function () {
        img.classList.remove('dollar--visible');
        setTimeout(updatePosition, 200);
      }, TTL);
    }, index * (TTL / NUM_MONEY));
  };

  Array(NUM_MONEY).fill(1).map(getMoney);
};

var moneyRainBottom = function moneyRainBottom() {
  var rand = function rand(min, max) {
    return min + Math.random() * (max - min);
  };

  var bucket = document.querySelector(".airnow-promo__space-content");
  var bottom = document.querySelector(".airnow-promo__bottom");

  var getMoney = function getMoney() {
    var TTL = 4700; //rand(2, 5) * 1000;

    var img = document.createElement('img');
    img.className = "dollar dollar--bottom";
    img.src = "../images/dollar".concat(Math.round(rand(1, 3)), ".svg");
    bucket.appendChild(img);

    var updatePosition = function updatePosition() {
      var bb = bucket.getBoundingClientRect();
      var eb = bottom.getBoundingClientRect();
      var start = [eb.width / 2, eb.top - bb.top];
      var delta = eb.width / 3.5;
      var end = [rand(-delta, delta) + eb.width / 2, eb.bottom - bb.top];
      var sf = 0.3 + rand(0, 0.2);
      var se = 0.15 + rand(0.0, 0.12);
      var v = [end[0] - start[0], end[1] - start[1]];
      var source = [start[0] + v[0] * sf, start[1] + v[1] * sf];
      var target = [end[0] - v[0] * se, end[1] - v[1] * se];
      var rotationStart = rand(-390, 190);
      var rotationEnd = rand(-190, 390);
      Object(__WEBPACK_IMPORTED_MODULE_0__global__["m" /* withNoTransitionOn */])(img, function () {
        img.style.transform = "translate(".concat(source[0], "px, ").concat(source[1], "px) rotate(").concat(rotationStart, "deg) scale(").concat(baseScaleBottom * 0.8, ")");
        img.classList.remove('dollar--visible');
      });
      img.style.transform = "translate(".concat(target[0], "px, ").concat(target[1], "px) rotate(").concat(rotationEnd, "deg) scale(").concat(baseScaleBottom, ")");
      img.classList.add('dollar--visible');
    }; // updatePosition();


    setTimeout(function () {
      updatePosition();
      setInterval(function () {
        img.classList.remove('dollar--visible');
        setTimeout(updatePosition, 200);
      }, TTL);
    }, rand(0, 6) * 1000);
  };

  var NUM_MONEY = 7;
  Array(NUM_MONEY).fill(1).map(getMoney);
};

var loopPhoneAnimation = function loopPhoneAnimation() {
  var promoDevice = document.querySelector('.airnow-promo__device');

  var addCommon = function addCommon(selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__global__["m" /* withNoTransitionOn */])(selector, function (item) {
      item.classList.add("".concat(selector.substr(1), "--hidden"));
    });
  };

  var hideCommon = function hideCommon(selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__global__["b" /* QSA */])(selector)[0].classList.remove("".concat(selector.substr(1), "--hidden"));
  };

  setTimeout(function () {
    promoDevice.classList.add('airnow-promo__device--move-out');
    setTimeout(function () {
      Object(__WEBPACK_IMPORTED_MODULE_0__global__["m" /* withNoTransitionOn */])(promoDevice, function () {
        promoDevice.classList.remove('airnow-promo__device--move-out');
      });
      addCommon('.airnow-promo__case-wrapper');
      addCommon('.airnow-promo__phone-wrapper');
      hideCommon('.airnow-promo__case-wrapper');
      hideCommon('.airnow-promo__phone-wrapper');
      setTimeout(loopPhoneAnimation, 1000);
    }, 1000);
  }, 1600);
};

var startAnimation = function startAnimation() {
  document.addEventListener('keydown', function (event) {
    console.log(event.keyCode);

    if (event.keyCode === 9) {
      document.body.classList.add('accessible-tabs');
    }
  }, true);
  Object(__WEBPACK_IMPORTED_MODULE_1__startPage__["b" /* addHandler */])('.airnow-promo__case-wrapper', 'common-animation', function () {
    setTimeout(loopPhoneAnimation, 1800); // 800 is initial animation delay
  });
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["i" /* removeClassFrom */])('.airnow-page', 'airnow-page--hidden');
  promoListScrollFollow();
  promoSloganScrollFollow();
  var pastScroll = Object(__WEBPACK_IMPORTED_MODULE_0__global__["g" /* getScrollTop */])() < 500 ? 1 : 0;
  moneyRainTop();
  moneyRainBottom();
  Object(__WEBPACK_IMPORTED_MODULE_1__startPage__["d" /* pageStart */])();
  Object(__WEBPACK_IMPORTED_MODULE_1__startPage__["e" /* promoStart */])();
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["k" /* waterfall */])([Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(pastScroll * 500), Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(0, Object(__WEBPACK_IMPORTED_MODULE_0__global__["l" /* willRemoveClassFrom */])('.airnow-promo__slogan', 'airnow-promo__slogan--hidden')), Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(pastScroll * 100), Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(0, Object(__WEBPACK_IMPORTED_MODULE_0__global__["l" /* willRemoveClassFrom */])('.airnow-promo__start', 'airnow-promo__start--hidden')), Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(pastScroll * 100), Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(0, Object(__WEBPACK_IMPORTED_MODULE_0__global__["l" /* willRemoveClassFrom */])('.airnow-promo__item', 'airnow-promo__item--hidden')), Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(pastScroll * 300), Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(0, Object(__WEBPACK_IMPORTED_MODULE_0__global__["l" /* willRemoveClassFrom */])('.airnow-header', 'airnow-header--hidden')), Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(pastScroll * 500, onPageScroll)]);
};

startAnimation();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export withNoAnimationDelay */
/* unused harmony export withAction */
/* unused harmony export hidden */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addHandler; });
/* unused harmony export getAdditionalAnimationClasses */
/* unused harmony export addAnimationToCommonElements */
/* unused harmony export addAnimationToPromoElements */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeAnimationFromCommonElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBlock1ToCommonElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAdvElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return pageStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return promoStart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var withNoAnimationDelay = function withNoAnimationDelay(selector) {
  var elements = Object(__WEBPACK_IMPORTED_MODULE_0__global__["b" /* QSA */])(selector);
  elements.pop();
  elements.forEach(function (el) {
    el.dataset.noAnimationDelay = true;
  });
};
var withAction = function withAction(className, action) {
  return {
    className: className,
    mod: '--' + action
  };
};
var hidden = function hidden(className) {
  return withAction(className, 'hidden');
};
var promoAnimatedElements = [hidden('airnow-header'), hidden('airnow-promo__slogan'), hidden('airnow-promo__start'), hidden('airnow-promo__item')];
var block1Elements = [// hidden('airnow-promo__tip'),
hidden('airnow-promo__phone-wrapper'), hidden('airnow-promo__case-wrapper')];
var commonAnimatedElements = [];
var handlers = {};

var runHandler = function runHandler(selector, name) {
  var cmds = (handlers[selector] || {})[name] || [];
  cmds.forEach(function (cmd) {
    return cmd();
  });
};

var addHandler = function addHandler(selector, name, cb) {
  if (!handlers[selector]) {
    handlers[selector] = {};
  }

  if (!handlers[selector][name]) {
    handlers[selector][name] = [];
  }

  handlers[selector][name].push(cb);
};
var getAdditionalAnimationClasses = function getAdditionalAnimationClasses() {
  return commonAnimatedElements.map(function (el) {
    return "." + el.className;
  }).join(',');
};
var cachedAdvElements;

var updateAdvElements = function updateAdvElements() {
  cachedAdvElements = Object(__WEBPACK_IMPORTED_MODULE_0__global__["b" /* QSA */])(getAdditionalAnimationClasses(commonAnimatedElements));
  return cachedAdvElements;
};

var addAnimationToCommonElements = function addAnimationToCommonElements() {
  [].concat(_toConsumableArray(block1Elements), commonAnimatedElements).forEach(function (sel) {
    Object(__WEBPACK_IMPORTED_MODULE_0__global__["m" /* withNoTransitionOn */])('.' + sel.className, function (element) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__global__["c" /* addClassTo */])(element, sel.className + sel.mod, true);
    });
  });
};
var addAnimationToPromoElements = function addAnimationToPromoElements() {
  promoAnimatedElements.forEach(function (sel) {
    Object(__WEBPACK_IMPORTED_MODULE_0__global__["m" /* withNoTransitionOn */])('.' + sel.className, function (element) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__global__["c" /* addClassTo */])(element, sel.className + sel.mod, true);
    });
  });
};
var removeAnimationFromCommonElement = function removeAnimationFromCommonElement(element) {
  commonAnimatedElements.forEach(function (sel) {
    var className = sel.className + sel.mod;

    if (element.classList.contains(className)) {
      element.classList.remove(className);
      runHandler('.' + sel.className, 'common-animation');
    }
  });
};
var addBlock1ToCommonElements = function addBlock1ToCommonElements() {
  commonAnimatedElements.push.apply(commonAnimatedElements, _toConsumableArray(block1Elements));
  block1Elements = [];
  updateAdvElements();
}; //pageStart

var getAdvElements = function getAdvElements() {
  return cachedAdvElements || updateAdvElements();
};
var pageStart = function pageStart() {
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["n" /* withSeal */])(function () {
    addAnimationToCommonElements();
    getAdvElements().forEach(__WEBPACK_IMPORTED_MODULE_0__global__["j" /* trySeal */]);
  });
};
var promoStart = function promoStart() {
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["n" /* withSeal */])(function () {
    addAnimationToPromoElements();
  });
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);


var measureHeightAndGet = function measureHeightAndGet(selector) {
  var height;
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["m" /* withNoTransitionOn */])(selector, function () {
    var el = Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* Q */])(selector);
    var prevH = el.style.height;
    var prevMH = el.style.maxHeight;
    el.style.height = 'auto';
    el.style.maxHeight = '100%';
    height = el.offsetHeight;
    el.style.height = prevH;
    el.style.maxHeight = prevMH;
    el.offsetHeight;
  });
  return height;
};

var initializeFAQ = function initializeFAQ() {
  var items = Object(__WEBPACK_IMPORTED_MODULE_0__global__["b" /* QSA */])(".airnow-help__item");
  var lastSelected;
  items.forEach(function (item) {
    var toggle = item.querySelector(".airnow-help__item-toggle");
    var message = item.querySelector(".airnow-help__item-answer");
    item.addEventListener("click", function () {
      var condition = toggle.classList.contains("airnow-help__item-toggle--opened");

      if (lastSelected) {
        $(lastSelected).click();
      }

      lastSelected = item;

      if (condition) {
        item.classList.remove("airnow-help__item--opened");
        toggle.classList.remove("airnow-help__item-toggle--opened");
        message.style.maxHeight = '';
        lastSelected = null;
      } else {
        item.classList.add("airnow-help__item--opened");
        toggle.classList.add("airnow-help__item-toggle--opened");
        message.style.maxHeight = measureHeightAndGet(message) + 'px';
      }
    });
  });
};

initializeFAQ();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);

var checkouts = Object(__WEBPACK_IMPORTED_MODULE_0__global__["b" /* QSA */])(".airnow-switch__item");

var checkout = function checkout() {
  var reports = Object(__WEBPACK_IMPORTED_MODULE_0__global__["b" /* QSA */])('.airnow-switch__report-wrapper');
  var board = document.querySelector(".airnow-switch__board-wrapper");
  checkouts.forEach(function (item) {
    var input = item.querySelector(".airnow-switch__checkbox");
    var card = reports.find(function (r) {
      return r.getAttribute('data') === input.getAttribute('id');
    });
    var report = card.querySelector(".airnow-switch__report");
    var shadow = card.querySelector(".airnow-switch__shadow");

    if (input.checked) {
      report.classList.add("airnow-switch__report--opened");
      shadow.classList.add("airnow-switch__shadow--opened");
    } else {
      report.classList.remove("airnow-switch__report--opened");
      shadow.classList.remove("airnow-switch__shadow--opened");
    }
  });
  var checkboxes = Object(__WEBPACK_IMPORTED_MODULE_0__global__["b" /* QSA */])(".airnow-switch__checkbox");
  var activeCheckouts = checkboxes.filter(function (c) {
    return c.checked === true;
  });
  var amount1 = board.querySelector(".airnow-switch__amount--1");
  var amount2 = board.querySelector(".airnow-switch__amount--2");
  var amount3 = board.querySelector(".airnow-switch__amount--3");
  amount1.classList[activeCheckouts.length === 1 ? 'add' : 'remove']("airnow-switch__amount--visible");
  amount2.classList[activeCheckouts.length === 2 ? 'add' : 'remove']("airnow-switch__amount--visible");
  amount3.classList[activeCheckouts.length === 3 ? 'add' : 'remove']("airnow-switch__amount--visible");
};

checkouts.forEach(function (item) {
  var input = item.querySelector(".airnow-switch__checkbox");
  input.addEventListener('change', checkout);
});
checkout();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);


var measureHeightAndGet = function measureHeightAndGet(selector) {
  var height;
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["m" /* withNoTransitionOn */])(selector, function () {
    var el = Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* Q */])(selector);
    var prevH = el.style.height;
    var prevMH = el.style.maxHeight;
    el.style.height = 'auto';
    el.style.maxHeight = '100%';
    height = el.offsetHeight;
    el.style.height = prevH;
    el.style.maxHeight = prevMH;
    el.offsetHeight;
  });
  return height;
};

var story = function story() {
  var stories = Object(__WEBPACK_IMPORTED_MODULE_0__global__["b" /* QSA */])(".airnow-stories__item");
  var lastSelected;
  stories.forEach(function (story) {
    var feedback = story.querySelector(".airnow-stories__item-feedback-wrapper");
    var image = story.querySelector(".airnow-stories__item-image");
    story.addEventListener("click", function () {
      if (lastSelected) {
        $(lastSelected).click();
      }

      lastSelected = story;

      if (story.classList.contains("airnow-stories__item--opened")) {
        story.classList.remove("airnow-stories__item--opened");
        image.classList.remove("airnow-stories__item-image--opened");
        feedback.classList.remove("airnow-stories__item-feedback-wrapper--opened");
        feedback.style.maxHeight = '';
        lastSelected = null;
      } else {
        story.classList.add("airnow-stories__item--opened");
        image.classList.add("airnow-stories__item-image--opened");
        feedback.classList.add("airnow-stories__item-feedback-wrapper--opened");
        feedback.style.maxHeight = measureHeightAndGet(story) + 'px';
      }
    });
  });

  if (window.matchMedia("(min-width: 640px)").matches) {
    $(stories[0]).click();
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {
    $(stories[1]).click();
  }
};

if (window.matchMedia("(min-width: 640px)").matches) {
  story();
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export openThanks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);

var form = document.querySelector('.airnow-form');
var step1 = form.querySelector('.airnow-form__step-1');
var step2 = form.querySelector('.airnow-form__step-2');
var openThanks = function openThanks() {
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["k" /* waterfall */])([Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(1, step1.classList.add("airnow-form__step-1--hidden")), Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(100, step2.classList.remove("airnow-form__step-2--hidden"))]);
};
var submitThanks = document.querySelector('.airnow-form__button');
submitThanks.addEventListener("click", function () {
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["k" /* waterfall */])([Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(1, step1.classList.remove("airnow-form__step-1--hidden")), Object(__WEBPACK_IMPORTED_MODULE_0__global__["h" /* inTime */])(100, step2.classList.add("airnow-form__step-2--hidden"))]);
});

function getValues(form) {
  var inputs = Object(__WEBPACK_IMPORTED_MODULE_0__global__["b" /* QSA */])(".airnow-form__input", form);
  var values = {};
  inputs.forEach(function (input) {
    values[input.getAttribute('name')] = input.value;
  });
  return values;
}

document.querySelector('.airnow-form__form').addEventListener('submit', function (event) {
  var values = getValues(event.target); // как-то отправить данные куда-то

  openThanks();
  event.preventDefault();
  return false;
});

/***/ })
/******/ ]);