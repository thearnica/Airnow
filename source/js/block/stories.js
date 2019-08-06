import {Q, QSA, withNoTransitionOn} from "./global";

const measureHeightAndGet = (selector) => {
  let height;
  withNoTransitionOn(selector, function () {
    let el = Q(selector);
    let prevH = el.style.height;
    let prevMH = el.style.maxHeight;
    el.style.height = 'auto';
    el.style.maxHeight = '100%';

    height = el.offsetHeight;
    el.style.height = prevH;
    el.style.maxHeight = prevMH;
    el.offsetHeight;
  });
  return height;
};

const story = () => {
  const stories = QSA(".airnow-stories__item");

  let lastSelected;

  stories.forEach(function (story) {
    const feedback = story.querySelector(".airnow-stories__item-feedback-wrapper");
    const image = story.querySelector(".airnow-stories__item-image");

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
