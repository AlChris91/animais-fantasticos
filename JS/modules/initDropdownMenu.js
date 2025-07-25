import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "active";
    /*Define touchstart  e click como argumento padrão
      de events caso caso o usuário não defina*/
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  /* Ativa o dropdown menu e observa
    o clique fora dele */
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }
  //Adiciona os eventos ao dropdown menu
  addDropdownsMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownsMenuEvent();
    }
    return this;
  }
}
