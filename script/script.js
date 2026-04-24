const text = "Estudante e curioso.";
const el = document.querySelector(".typing");

let i = 0;
el.textContent = "";

function typeWriter() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

typeWriter();

/* AQUI COMEÇA O CARROSSEL*/

let index = 0;

function atualizar() {
  const track = document.querySelector(".track");
  track.style.transform = `translateX(-${index * 100}%)`;
}

function avancar() {
  const cards = document.querySelectorAll(".card");

  index++;

  if (index >= cards.length) {
    index = 0; // volta pro primeiro
  }

  atualizar();
}

function voltar() {
  const cards = document.querySelectorAll(".card");

  index--;

  if (index < 0) {
    index = cards.length - 1; // vai pro último
  }

  atualizar();
}
