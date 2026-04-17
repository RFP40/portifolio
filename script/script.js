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