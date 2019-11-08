import {QSA} from "./global";
import {measureHeightAndGet} from "./height";

  const initializeValues = () => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      const items = QSA(".airnow-values__item");

      let lastSelected;

      items.forEach(function (item) {
        const toggle = item.querySelector(".airnow-values__item-toggle");
        const message = item.querySelector(".airnow-values__item-answer");

        item.addEventListener("click", function () {
          const condition = toggle.classList.contains("airnow-values__item-toggle--opened");

          if (lastSelected) {
            $(lastSelected).click();
          }
          lastSelected = item;

          if (condition) {
            item.classList.remove("airnow-values__item--opened");
            toggle.classList.remove("airnow-values__item-toggle--opened");
            message.style.maxHeight = '';
            lastSelected = null;
          } else {
            item.classList.add("airnow-values__item--opened");
            toggle.classList.add("airnow-values__item-toggle--opened");
            message.style.maxHeight = measureHeightAndGet(message) + 'px';
          }
        });
      });
    }
  };

initializeValues();
