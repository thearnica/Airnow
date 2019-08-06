import {addClassTo, withNoTransitionOn, withSeal} from "./global";

export const withAction = (className, action) => {
  return {className: className, mod: '--' + action}
};

export const hidden = (className) => {
  return withAction(className, 'hidden')
};

const promoAnimatedElements = [
  hidden('airnow-header'),

  hidden('airnow-promo'),
  hidden('airnow-promo__title'),
  hidden('airnow-promo__text'),
  hidden('airnow-promo__get'),
  hidden('airnow-promo__or'),
  hidden('airnow-promo__start'),
  hidden('airnow-promo__item-wrapper'),
  hidden('airnow-main__animation'),
];

export const addAnimationToPromoElements = () => {
  promoAnimatedElements.forEach(function (sel) {
    withNoTransitionOn('.' + sel.className, element =>
      addClassTo(element, sel.className + sel.mod, true)
    );
  });
  // document.querySelector('#hider').innerHTML='';
};

//pageStart

export const promoStart = () => {
  withSeal(function () {
    addAnimationToPromoElements();
  });
};

