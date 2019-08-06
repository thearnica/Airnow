import {addClassTo, trySeal, withNoTransitionOn, withSeal} from "./global";

export const withAction = (className, action) => {
  return {className: className, mod: '--' + action}
};

export const hidden = (className) => {
  return withAction(className, 'hidden')
};

const promoAnimatedElements = [
  hidden('airnow-header'),

  hidden('airnow-promo'),
];

const commonAnimatedElements = [];

export const getAdditionalAnimationClasses = () => {
  return commonAnimatedElements.map(function (el) {
    return "." + el.className
  }).join(',');
};

export const addAnimationToCommonElements = () => {
  commonAnimatedElements.forEach(function (sel) {
    withNoTransitionOn('.' + sel.className, element =>
      addClassTo(element, sel.className + sel.mod, true)
    );
  });
  // document.querySelector('#hider').innerHTML='';
};

export const addAnimationToPromoElements = () => {
  promoAnimatedElements.forEach(function (sel) {
    withNoTransitionOn('.' + sel.className, element =>
      addClassTo(element, sel.className + sel.mod, true)
    );
  });
  // document.querySelector('#hider').innerHTML='';
};

export const removeAnimationFromCommonElement = (element) => {
  commonAnimatedElements.forEach(function (sel) {
    element.classList.remove(sel.className + sel.mod);
  });
};

//pageStart

export var advElements = QSA(getAdditionalAnimationClasses(commonAnimatedElements));

export const pageStart = () => {
  withSeal(function () {
    addAnimationToCommonElements();

    advElements.forEach(trySeal);
  });
};

export const promoStart = () => {
  withSeal(function () {
    addAnimationToPromoElements();
  });
};


