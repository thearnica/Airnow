import {  waterfall,  removeClassFrom,  inTime,  willRemoveClassFrom,  getBoundingClientRect, getScrollTop, attachScrollHandler, attachLayoutScrollHandler, withNoTransitionOn} from "./global";import {  addBlock1ToCommonElements,  getAdvElements,  pageStart,  promoStart,  removeAnimationFromCommonElement} from "./startPage";export const getPageScroll = () => {  let lastPageScroll = 0;  let lastScrollDelta = 0;  let resortScrollTimeout = 0;  const resortOnScroll = () => {    if (resortScrollTimeout) {      return;    }    const advElements = getAdvElements();    let height = window.innerHeight;    let scrollTop = getScrollTop();    let bottom = height + scrollTop;    let items = advElements      .filter(({done}) => !done)      .map(function (item) {        return {          position: getBoundingClientRect(item),          item: item,        }      })      .sort(function (a, b) {        let diff = a.position.top - b.position.top;        if (Math.abs(diff) < 10) {          let oDiff = a.order - b.order;          return oDiff            ? oDiff            : a.position.left - b.position.left;        }        return diff;      })      .filter(itemRecord => itemRecord.position.top < bottom - height / 5)      .filter(itemRecord => itemRecord.position.bottom > 0);    if (items.length) {      const {item} = items[0];      removeAnimationFromCommonElement(item);      item.done = true;      resortScrollTimeout = setTimeout(() => {          resortScrollTimeout = 0;          resortOnScroll();        }, item.dataset.noAnimationDelay ? 0 : 300      )    }  };  return function () {    let scrollTop = getScrollTop();    const deltaScroll = scrollTop - lastPageScroll;    if (scrollTop === 0) {    }    if (deltaScroll > 0) {    }    if (deltaScroll < 0) {    }    lastScrollDelta = deltaScroll;    lastPageScroll = scrollTop;    if (scrollTop > 0) {    }    resortOnScroll();  }};const onPageScroll = () => {  let onScroll = getPageScroll();  attachScrollHandler(onScroll);  setTimeout(function () {    onScroll(0);  }, 300);};// const mobileAnimation = ({pastScroll}) => {//   if (window.matchMedia("(max-width: 1023px)").matches) {//     waterfall([//       inTime(pastScroll * 300),//       inTime(0, willRemoveClassFrom('.airnow-promo__light', 'airnow-promo__light--hidden')),//     ])//   }// };// promo list scrollconst promoListScrollFollow = () => {  const list = document.querySelector('.airnow-promo__list');  attachLayoutScrollHandler(() => {    const {height} = list.getBoundingClientRect();    const maxHeight = height * 1.8;    const scroll = Math.min(maxHeight, window.scrollY);    const f = 1 - scroll / (maxHeight * 4);    list.style.transform = `translateY(${scroll}px) scaleY(${f})`;    if (scroll >= maxHeight) {      addBlock1ToCommonElements();    }  });};const moneyRainTop = () => {  const rand = (min, max) => min + Math.random() * (max - min);  const bucket = document.querySelector(".airnow-promo__space-content");  const bottom = document.querySelector(".airnow-promo__bottom");  const getMoney = () => {    const TTL = rand(2, 5) * 1000;    const img = document.createElement('img');    img.className = "dollar";    img.src = `../images/dollar${Math.round(rand(1, 3))}.svg`;    bucket.appendChild(img);    const updatePosition = () => {      const bb = bucket.getBoundingClientRect();      const eb = bottom.getBoundingClientRect();      const start = [rand(0, eb.width), 0];      const end = [eb.width / 2, eb.top - bb.top + eb.width];      const sf = rand(0, 0.6);      const se = 0.4;// rand(0.3, 0.5);      const v = [end[0] - start[0], end[1] - start[1]];      const source = [start[0] + v[0] * sf, start[1] + v[1] * sf];      const target = [end[0] - v[0] * se, end[1] - v[1] * se];      withNoTransitionOn(img, () => {        img.style.transform = `translate(${source[0]}px, ${source[1]}px)`;        img.classList.remove('dollar--visible');      });      img.style.transform = `translate(${target[0]}px, ${target[1]}px)`;      img.classList.add('dollar--visible');    };    // updatePosition();    setInterval(() => {      img.classList.remove('dollar--visible');      setTimeout(updatePosition, 200);    }, TTL);  };  const NUM_MONEY = 50;  Array(NUM_MONEY).fill(1).map(getMoney);};const moneyRainBottom = () => {  const rand = (min, max) => min + Math.random() * (max - min);  const bucket = document.querySelector(".airnow-promo__space-content");  const bottom = document.querySelector(".airnow-promo__bottom");  const getMoney = () => {    const TTL = rand(2, 5) * 1000;    const img = document.createElement('img');    img.className = "dollar";    img.src = `../images/dollar${Math.round(rand(1, 3))}.svg`;    bucket.appendChild(img);    const updatePosition = () => {      const bb = bucket.getBoundingClientRect();      const eb = bottom.getBoundingClientRect();      const start = [eb.width / 2, eb.top - bb.top];      const delta = eb.width / 2.5;      const end = [rand(-delta, delta) + eb.width / 2, eb.bottom - bb.top];      const sf = 0.2 + rand(0, 0.2);      const se = rand(0, 0.2);      const v = [end[0] - start[0], end[1] - start[1]];      const source = [start[0] + v[0] * sf, start[1] + v[1] * sf];      const target = [end[0] - v[0] * se, end[1] - v[1] * se];      withNoTransitionOn(img, () => {        img.style.transform = `translate(${source[0]}px, ${source[1]}px)`;        img.classList.remove('dollar--visible');      });      img.style.transform = `translate(${target[0]}px, ${target[1]}px)`;      img.classList.add('dollar--visible');    };    // updatePosition();    setInterval(() => {      img.classList.remove('dollar--visible');      setTimeout(updatePosition, 200);    }, TTL);  };  const NUM_MONEY = 20;  Array(NUM_MONEY).fill(1).map(getMoney);};let startAnimation = () => {  removeClassFrom('.airnow-page', 'airnow-page--hidden');  promoListScrollFollow();  const pastScroll = getScrollTop() < 500 ? 1 : 0;  moneyRainTop();  moneyRainBottom();  pageStart();  promoStart();  waterfall([    inTime(pastScroll * 500),    inTime(0, willRemoveClassFrom('.airnow-promo__slogan', 'airnow-promo__slogan--hidden')),    inTime(pastScroll * 100),    inTime(0, willRemoveClassFrom('.airnow-promo__start', 'airnow-promo__start--hidden')),    inTime(pastScroll * 100),    inTime(0, willRemoveClassFrom('.airnow-promo__item', 'airnow-promo__item--hidden')),    inTime(pastScroll * 300),    inTime(0, willRemoveClassFrom('.airnow-header', 'airnow-header--hidden')),    inTime(pastScroll * 500, onPageScroll),  ])  ;};startAnimation();