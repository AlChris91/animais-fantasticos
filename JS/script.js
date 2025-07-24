import initAccordion from "./modules/initAccordion.js";
import initAnimacaoScroll from "./modules/initAnimacaoScroll.js";
import ScrollSuave from "./modules/initScrollSuave.js";
import initTabNav from "./modules/initTabNav.js";
import initModal from "./modules/initModal.js";
import initToolTip from "./modules/initToolTip.js";
import initDropdownMenu from "./modules/initDropdownMenu.js";
import initMenuMobile from "./modules/initMenuMobile.js";
import initFuncionamento from "./modules/initFuncionamento.js";
import initFetchAnimais from "./modules/initFetchAnimais.js";
import initFetchBitcoin from "./modules/initFetchBitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"]  a[href^="#"]');
scrollSuave.init();

initAccordion();
initAnimacaoScroll();
initTabNav();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
