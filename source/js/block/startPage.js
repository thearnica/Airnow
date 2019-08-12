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
  // hidden('airnow-promo__tip'),
  hidden('airnow-promo__phone-wrapper'),
  hidden('airnow-promo__case-wrapper'),
];

const commonAnimatedElements = [];

const handlers = {};

const runHandler = (selector, name) => {
  const cmds = (handlers[selector] || {})[name] || [];
  cmds.forEach(cmd => cmd());
};

export const addHandler = (selector, name, cb) => {
  if (!handlers[selector]) {
    handlers[selector] = {};
  }
  if (!handlers[selector][name]) {
    handlers[selector][name] = [];
  }
  handlers[selector][name].push(cb);
};

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
    const className = sel.className + sel.mod;
    if (element.classList.contains(className)) {
      element.classList.remove(className);
      runHandler('.' + sel.className, 'common-animation')
    }
  });
};

export const addBlock1ToCommonElements = () => {
  commonAnimatedElements.push(...block1Elements);
  block1Elements = [];
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


