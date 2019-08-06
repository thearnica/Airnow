import {closeCurrentModal, closePopup, openPopup, setupPopup, setupPopupClose} from "./modalSetup";

const thanksModal = document.querySelector('.airdata-modal--thanks');
const submitThanks = document.querySelector('.airdata-thanks__submit');

submitThanks.addEventListener("click", function (evt) {
  evt.preventDefault();
  closePopup(thanksModal);
});

export const openPopupThankYou = () => {
  closeCurrentModal();
  openPopup(thanksModal);
};

setupPopupClose(thanksModal);

const callCalculate = document.querySelector('.airdata-calculate__calculate');
const calculate = document.querySelector('.airdata-modal--calculate');

setupPopup(callCalculate, calculate);

const callContact = document.querySelector('.airdata-ready__contact');
const contact = document.querySelector('.airdata-modal--contact');

setupPopup(callContact, contact);

const callNavigation = document.querySelector('.airdata-header__toggle');
const navigation = document.querySelector('.airdata-modal--navigation');

setupPopup(callNavigation, navigation);
