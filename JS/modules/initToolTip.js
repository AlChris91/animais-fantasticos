export default function inittoolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function criaToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver(event) {
    const tooltipBox = criaToolTipBox(this);
    tooltipBox.style.top = event.pageY + "px";
    tooltipBox.style.left = event.pageX + "px";

    onMouseLeave.tooltipbox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
  }
  const onMouseLeave = {
    handleEvent() {
      this.tooltipbox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
