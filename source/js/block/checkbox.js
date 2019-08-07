import {QSA} from "./global";

const checkouts = QSA(".airnow-switch__item");

const checkout = () => {
  const reports = QSA('.airnow-switch__report-wrapper');
  const board = document.querySelector(".airnow-switch__board-wrapper");

  checkouts.forEach(function (item) {
    const input = item.querySelector(".airnow-switch__checkbox");
    const card = reports.find(r => r.getAttribute('data') === input.getAttribute('id'));

    const report = card.querySelector(".airnow-switch__report");
    const shadow = card.querySelector(".airnow-switch__shadow");

    if (input.checked) {
      report.classList.add("airnow-switch__report--opened");
      shadow.classList.add("airnow-switch__shadow--opened");
    } else {
      report.classList.remove("airnow-switch__report--opened");
      shadow.classList.remove("airnow-switch__shadow--opened");
    }
  });

  const checkboxes = QSA(".airnow-switch__checkbox");

  const activeCheckouts = checkboxes.filter(c => c.checked === true);
  const amount1 = board.querySelector(".airnow-switch__amount--1");
  const amount2 = board.querySelector(".airnow-switch__amount--2");
  const amount3 = board.querySelector(".airnow-switch__amount--3");

  amount1.classList[ activeCheckouts.length ===1 ? 'add':'remove']("airnow-switch__amount--visible");
  amount2.classList[ activeCheckouts.length ===2 ? 'add':'remove']("airnow-switch__amount--visible");
  amount3.classList[ activeCheckouts.length ===3 ? 'add':'remove']("airnow-switch__amount--visible");
};

checkouts.forEach(function (item) {
  const input = item.querySelector(".airnow-switch__checkbox");
  input.addEventListener('change', checkout);
});

checkout();
