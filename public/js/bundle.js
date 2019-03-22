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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  "USE STRICT";

  var calc = __webpack_require__(/*! ./parts/calc.js */ "./parts/calc.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./parts/form.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./parts/modal.js"),
      scroll = __webpack_require__(/*! ./parts/scroll.js */ "./parts/scroll.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./parts/slider.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./parts/timer.js");

  calc();
  form();
  modal();
  scroll();
  slider();
  tabs();
  timer();
}); //конец DOMContentLoaded

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('change', function () {
    personSum = +this.value;
    total = (personSum + daysSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      animateTotal(total);
    }
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (personSum + daysSum) * 4000;

    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      animateTotal(total);
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total,
          sum = a * this.options[this.selectedIndex].value;
      animateTotal(sum);
    }
  }); // Ввод только цифр в калькуляторе

  var inputsCalc = document.querySelectorAll('.counter-block-input');

  function onlyNumberCalc(input) {
    input.onkeyup = function () {
      return this.value = this.value.replace(/[^0-9]/g, "");
    };
  }

  _toConsumableArray(inputsCalc).forEach(function (elem) {
    return onlyNumberCalc(elem);
  }); // Анимация для суммы


  function animateTotal(number) {
    var step = 4000;
    var start = Date.now();
    var timer = setInterval(function () {
      var timePassed = Date.now() - start;
      totalValue.innerHTML = step = step + Math.floor(number / 4000 * 3);

      if (timePassed > 3000) {
        clearInterval(timer);
        totalValue.innerHTML = number;
      }
    });
  }
}

module.exports = calc;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function form() {
  var message = {
    loading: "<img src='icons/loading.gif'> - \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
    success: "<img src='icons/success.png'> - \u0441\u043A\u043E\u0440\u043E \u043C\u044B \u0441 \u0412\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F",
    failure: "<img src='icons/failure.png'> - \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A"
  };
  var mainForm = document.querySelector('.main-form'),
      contactForm = document.querySelector("#form"),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function sendForm(form) {
    var input = form.getElementsByTagName('input');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.appendChild(statusMessage);
      var formData = new FormData(form);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open("POST", "server.php");
          request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
          var obj = {};
          data.forEach(function (value, key) {
            obj[key] = value;
          });
          var json = JSON.stringify(obj);

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 3) {
                resolve();
              } else {
                reject();
              }
            }
          };

          request.send(json);
        });
      } // End postData


      function clearInputs() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = "";
        }
      }

      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInputs);
    });
  }

  sendForm(mainForm);
  sendForm(contactForm); //Номер телефона

  var inputsPhone = document.querySelectorAll('input[name="phone"]');

  function onlyNumber(input) {
    input.onkeyup = function () {
      return this.value = this.value.replace(/[^0-9,+]/g, "");
    };
  }

  _toConsumableArray(inputsPhone).forEach(function (elem) {
    return onlyNumber(elem);
  });
}

module.exports = form;

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  var more = document.querySelector('.more'),
      tabsBtn = document.querySelector('.description-btn'),
      browser = getNameBrowser();

  if (browser == 'EDGE' || browser == 'MSIE') {
    modalWindow(more);
    modalWindow(tabsBtn);
  } else {
    if (!isMobile()) {
      modalWindowJs(more);
      modalWindowJs(tabsBtn);
    } else {
      if (isMobile()) {
        modalMobileWindow(more);
        modalMobileWindow(tabsBtn);
      }
    }
  } // Modal CSS


  function modalWindow(btn) {
    var _this = this;

    var overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    btn.addEventListener('click', function () {
      overlay.style.display = 'block';

      _this.classList.add('more-splash');

      document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function () {
      document.querySelector('.status').innerHTML = '';
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
  } //Modal mobile


  function modalMobileWindow(btn) {
    var overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    btn.addEventListener('click', function () {
      overlay.classList.remove('fade');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function () {
      document.querySelector('.status').innerHTML = '';
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    });
  } // Modal JS


  function modalWindowJs(btn) {
    var overlay = document.querySelector('.overlay'),
        popup = document.querySelector('.popup'),
        close = document.querySelector('.popup-close');
    btn.addEventListener('click', function () {
      overlay.classList.remove('fade');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      animate(function (timePassed) {
        popup.style.top = "".concat(timePassed / 5, "px");
      }, 600);
    });
    close.addEventListener('click', function () {
      document.querySelector('.status').innerHTML = '';
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    });

    function animate(draw, duration) {
      var start = performance.now();
      requestAnimationFrame(function animate(time) {
        var timePassed = time - start;

        if (timePassed > duration) {
          timePassed = duration;
        }

        draw(timePassed);

        if (timePassed < duration) {
          requestAnimationFrame(animate);
        }
      });
    }
  } // Проверка браузера


  function getNameBrowser() {
    var ua = navigator.userAgent;

    if (ua.search(/EDGE/) > 0) {
      return 'EDGE';
    }

    if (ua.search(/MSIE/) > 0) {
      return 'MSIE';
    }
  } //Проверка на моб.версию


  function isMobile() {
    if (navigator.userAgent.match(/Android|Mobile|IEMobile|Opera Mini|iPhone|iPad|iPod/i) == null) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = modal;

/***/ }),

/***/ "./parts/scroll.js":
/*!*************************!*\
  !*** ./parts/scroll.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scroll() {
  function anim(duration) {
    var temp;
    return function (sel) {
      cancelAnimationFrame(temp);
      var start = performance.now();
      var from = window.pageYOffset || document.documentElement.scrollTop,
          to = document.querySelector(sel).getBoundingClientRect().top;
      requestAnimationFrame(function step(timestamp) {
        var progress = (timestamp - start) / duration;
        1 <= progress && (progress = 1);
        window.scrollTo(0, from + to * progress | 0);
        1 > progress && (temp = requestAnimationFrame(step));
      });
    };
  }

  var scrollMenu = anim(1000);
  var li = document.querySelectorAll('li');
  li.forEach(function (item) {
    item.addEventListener('click', function () {
      scrollMenu(item.firstChild.getAttribute('href'));
    });
  });
}

module.exports = scroll;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    slides.forEach(function (item) {
      return item.classList.remove('fade');
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].children[0].style.opacity = 0;
    dots[slideIndex - 1].classList.add('dot-active');
    animateSlider();
  }

  function animateSlider() {
    var op = 0;

    while (op <= 1) {
      (function (ar) {
        setTimeout(function () {
          slides[slideIndex - 1].children[0].style.opacity = ar;
        }, 60 + op * 600);
      })(op);

      op += 0.1;
    }
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  var deadline = '2019-03-26:00:00';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60).toString(),
        minutes = Math.floor(t / 1000 / 60 % 60).toString(),
        hours = Math.floor(t / 1000 / 60 / 60).toString();

    function twoLetter(arg) {
      if (arg.length < 2) {
        arg = '0' + arg;
      }

      return arg;
    }

    return {
      'total': t,
      'hours': twoLetter(hours),
      'minutes': twoLetter(minutes),
      'seconds': twoLetter(seconds)
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map