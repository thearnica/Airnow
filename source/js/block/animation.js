import {  waterfall,  removeClassFrom,  inTime,  willRemoveClassFrom,  getBoundingClientRect, getScrollTop, attachScrollHandler, attachLayoutScrollHandler} from "./global";import {  addBlock1ToCommonElements,  getAdvElements,  pageStart,  promoStart,  removeAnimationFromCommonElement} from "./startPage";export const getPageScroll = () => {  let lastPageScroll = 0;  let lastScrollDelta = 0;  let resortScrollTimeout = 0;  const resortOnScroll = () => {    if (resortScrollTimeout) {      return;    }    const advElements = getAdvElements();    let height = window.innerHeight;    let scrollTop = getScrollTop();    let bottom = height + scrollTop;    let items = advElements      .filter(({done}) => !done)      .map(function (item) {        return {          position: getBoundingClientRect(item),          item: item,        }      })      .sort(function (a, b) {        let diff = a.position.top - b.position.top;        if (Math.abs(diff) < 10) {          let oDiff = a.order - b.order;          return oDiff            ? oDiff            : a.position.left - b.position.left;        }        return diff;      })      .filter(itemRecord => itemRecord.position.top < bottom - height / 5)      .filter(itemRecord => itemRecord.position.bottom > 0);    if (items.length) {      const {item} = items[0];      removeAnimationFromCommonElement(item);      item.done = true;      resortScrollTimeout = setTimeout(() => {          resortScrollTimeout = 0;          resortOnScroll();        }, item.dataset.noAnimationDelay ? 0 : 300      )    }  };  return function () {    let scrollTop = getScrollTop();    const deltaScroll = scrollTop - lastPageScroll;    if (scrollTop === 0) {    }    if (deltaScroll > 0) {    }    if (deltaScroll < 0) {    }    lastScrollDelta = deltaScroll;    lastPageScroll = scrollTop;    if (scrollTop > 0) {    }    resortOnScroll();  }};const onPageScroll = () => {  let onScroll = getPageScroll();  attachScrollHandler(onScroll);  setTimeout(function () {    onScroll(0);  }, 300);};// const mobileAnimation = ({pastScroll}) => {//   if (window.matchMedia("(max-width: 1023px)").matches) {//     waterfall([//       inTime(pastScroll * 300),//       inTime(0, willRemoveClassFrom('.airnow-promo__light', 'airnow-promo__light--hidden')),//     ])//   }// };// promo list scrollconst promoListScrollFollow = () => {  const list = document.querySelector('.airnow-promo__list');  attachLayoutScrollHandler(() => {    const {height} = list.getBoundingClientRect();    const maxHeight = height * 1.8;    const scroll = Math.min(maxHeight, window.scrollY);    const f = 1 - scroll / (maxHeight * 4);    list.style.transform = `translateY(${scroll}px) scaleY(${f})`;    if (scroll >= maxHeight) {      addBlock1ToCommonElements();    }  });};let startAnimation = () => {  removeClassFrom('.airnow-page', 'airnow-page--hidden');  promoListScrollFollow();  const pastScroll = getScrollTop() < 500 ? 1 : 0;  pageStart();  promoStart();  waterfall([    inTime(pastScroll * 500),    inTime(0, willRemoveClassFrom('.airnow-promo__slogan', 'airnow-promo__slogan--hidden')),    inTime(pastScroll * 100),    inTime(0, willRemoveClassFrom('.airnow-promo__start', 'airnow-promo__start--hidden')),    inTime(pastScroll * 100),    inTime(0, willRemoveClassFrom('.airnow-promo__item', 'airnow-promo__item--hidden')),    inTime(pastScroll * 300),    inTime(0, willRemoveClassFrom('.airnow-header', 'airnow-header--hidden')),    inTime(pastScroll * 500, onPageScroll),  ])  ;};startAnimation();