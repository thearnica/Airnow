import {QSA} from "./global";

const checkouts = QSA(".airnow-switch__item");

const checkout = () => {
  const reports = QSA('.airnow-switch__report');

  checkouts.forEach(function (item) {
    const input = item.querySelector(".airnow-switch__checkbox");
    const report = reports.find(r => r.getAttribute('data') === input.getAttribute('id'));

    if (input.checked) {
      report.classList.add("airnow-switch__report--opened");
    } else {
      report.classList.remove("airnow-switch__report--opened");
    }
  });
};

checkouts.forEach(function (item) {
  const input = item.querySelector(".airnow-switch__checkbox");
  input.addEventListener('change', checkout);
});

checkout();
