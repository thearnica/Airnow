import {addClassTo, QSA, trySeal, withNoTransitionOn, withSeal} from "./global";

export const withNoAnimationDelay = (selector) => {
  let elements = QSA(selector);
  elements.pop();

  elements.forEach(function (el) {
    el.dataset.noAnimationDelay = true;
  })
};

export const withAction = (className, action) => {
  return {className: className, mod: '--' + action}
};

export const hidden = (className) => {
  return withAction(className, 'hidden')
};

const promoAnimatedElements = [
  hidden('airnow-header'),

  hidden('airnow-promo__slogan'),
  hidden('airnow-promo__start'),
  hidden('airnow-promo__item'),
];

let block1Elements = [
  hidden('airnow-promo__tip'),
  hidden('airnow-promo__phone'),
  hidden('airnow-promo__phone-shadow'),
  hidden('airnow-promo__case'),
  hidden('airnow-promo__case-shadow'),

  hidden('airnow-extra__text'),
  hidden('airnow-extra__item'),
  hidden('airnow-extra__start'),
];

const commonAnimatedElements = [

  hidden('airnow-switch__title-mobile'),
  hidden('airnow-switch__list-wrapper'),
  hidden('airnow-switch__image'),
  hidden('airnow-switch__start-mobile'),

  hidden('airnow-stories__title'),
  hidden('airnow-stories__item'),

  hidden('airnow-ready__info'),

  hidden('airnow-help__title'),
  hidden('airnow-help__item'),

  hidden('airnow-form__slogan'),
];

export const getAdditionalAnimationClasses = () => {
  return commonAnimatedElements.map(function (el) {
    return "." + el.className
  }).join(',');
};

let cachedAdvElements;

const updateAdvElements = () => {
  cachedAdvElements = QSA(getAdditionalAnimationClasses(commonAnimatedElements));
  return cachedAdvElements;
};

export const addAnimationToCommonElements = () => {
  [
    ...block1Elements,
    ...commonAnimatedElements
  ].forEach(function (sel) {
    withNoTransitionOn('.' + sel.className, element =>
      addClassTo(element, sel.className + sel.mod, true)
    );
  });
};

export const addAnimationToPromoElements = () => {
  promoAnimatedElements.forEach(function (sel) {
    withNoTransitionOn('.' + sel.className, element =>
      addClassTo(element, sel.className + sel.mod, true)
    );
  });
};

export const removeAnimationFromCommonElement = (element) => {
  commonAnimatedElements.forEach(function (sel) {
    element.classList.remove(sel.className + sel.mod);
  });
};

export const addBlock1ToCommonElements = () => {
  commonAnimatedElements.push(...block1Elements);
  block1Elements=[];
  updateAdvElements();
};

//pageStart

export const getAdvElements = () => cachedAdvElements || updateAdvElements();

export const pageStart = () => {
  withSeal(function () {
    addAnimationToCommonElements();

    getAdvElements().forEach(trySeal);
  });
};

export const promoStart = () => {
  withSeal(function () {
    addAnimationToPromoElements();
  });
};


