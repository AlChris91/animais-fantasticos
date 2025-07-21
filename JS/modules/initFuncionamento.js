export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana");
  const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberta = diaSemana.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
