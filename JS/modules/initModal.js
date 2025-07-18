export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  console.log(botaoAbrir);
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function togleModal(event) {
      event.preventDefault();
      console.log(event);
      containerModal.classList.toggle("ativo");
    }

    function clickForaModal(event) {
      if (event.target === this) {
        togleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", togleModal);
    botaoFechar.addEventListener("click", togleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
