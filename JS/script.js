import initAnimacaoScroll from "./modules/initAnimacaoScroll.js";
import ScrollSuave from "./modules/initScrollSuave.js";
import TabNav from "./modules/initTabNav.js";
import initModal from "./modules/initModal.js";
import initToolTip from "./modules/initToolTip.js";
import initDropdownMenu from "./modules/initDropdownMenu.js";
import initMenuMobile from "./modules/initMenuMobile.js";
import initFuncionamento from "./modules/initFuncionamento.js";
import initFetchAnimais from "./modules/initFetchAnimais.js";
import initFetchBitcoin from "./modules/initFetchBitcoin.js";
import Accordion from "./modules/initAccordion.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"]  a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const tabnav = new TabNav(".js-tabMenu li", ".js-tabContent section");
tabnav.init();

initAnimacaoScroll();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
