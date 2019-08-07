import {Q, QSA, withNoTransitionOn} from "./global";const measureHeightAndGet = (selector) => {  let height;  withNoTransitionOn(selector, function () {    let el = Q(selector);    let prevH = el.style.height;    let prevMH = el.style.maxHeight;    el.style.height = 'auto';    el.style.maxHeight = '100%';    height = el.offsetHeight;    el.style.height = prevH;    el.style.maxHeight = prevMH;    el.offsetHeight;  });  return height;};const initializeFAQ = () => {  const items = QSA(".airnow-help__item");  let lastSelected;  items.forEach(function (item) {    const toggle = item.querySelector(".airnow-help__item-toggle");    const message = item.querySelector(".airnow-help__item-answer");    item.addEventListener("click", function () {      const condition = toggle.classList.contains("airnow-help__item-toggle--opened");      if (lastSelected) {        $(lastSelected).click();      }      lastSelected = item;      if (condition) {        item.classList.remove("airnow-help__item--opened");        toggle.classList.remove("airnow-help__item-toggle--opened");        message.style.maxHeight = '';        lastSelected = null;      } else {        item.classList.add("airnow-help__item--opened");        toggle.classList.add("airnow-help__item-toggle--opened");        message.style.maxHeight = measureHeightAndGet(message) + 'px';      }    });  });};initializeFAQ();