//require('es6-promise').polyfill();
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {

  "USE STRICT";
  let calc = require('./parts/calc.js'),
      form = require('./parts/form.js'),
      modal = require('./parts/modal.js'),
      scroll = require('./parts/scroll.js'),
      slider = require('./parts/slider.js'),
      tabs = require('./parts/tabs.js'),
      timer = require('./parts/timer.js');

  calc();
  form();
  modal();
  scroll();
  slider();
  tabs();
  timer();

}); //конец DOMContentLoaded
if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}