import {setupPopup} from "./modalSetup";

const callNavigation = document.querySelector('.airnow-header__toggle');
const navigation = document.querySelector('.airnow-modal--navigation');

setupPopup(callNavigation, navigation);
