import AnimacaoScroll from "./modules/animacaoScroll.js";
import ScrollSuave from "./modules/initScrollSuave.js";
import TabNav from "./modules/initTabNav.js";
import Modal from "./modules/initModal.js";
import Tooltip from "./modules/initToolTip.js";
import initDropdownMenu from "./modules/initDropdownMenu.js";
import initMenuMobile from "./modules/initMenuMobile.js";
import initFuncionamento from "./modules/initFuncionamento.js";
import fetchAnimais from "./modules/initFetchAnimais.js";
import Accordion from "./modules/initAccordion.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"]  a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const tabnav = new TabNav(".js-tabMenu li", ".js-tabContent section");
tabnav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const animacaoScroll = new AnimacaoScroll(".js-scroll");
animacaoScroll.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
