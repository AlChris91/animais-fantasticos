export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    //Bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }
  /*Recebe um elemento do dom ,com número em seu texto
    Incrementa a partir  do 0 até o número final
  */
  static incrementaNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 20 * Math.random());
  }
  /* Ativa incrementar número para cada
  número selecionado do dom */
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementaNumero(numero));
  }
  //Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  /*Adiciona  o MutationObserver para verificar
  quando a classe ativo é adicionada ao elemento target */
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }
  init() {
    if (this.numeros && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
