let slideAtual = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(indice) {
  slides.forEach((slide, i) => {
    slide.classList.remove("ativo");
    if (i === indice) {
      slide.classList.add("ativo");
    }
  });
}

function mudarSlide(direcao) {
  slideAtual += direcao;

  if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  } else if (slideAtual >= slides.length) {
    slideAtual = 0;
  }

  mostrarSlide(slideAtual);
}

// Mostrar o primeiro slide ao carregar
mostrarSlide(slideAtual);

// Avançar automaticamente a cada 4 segundos (opcional)
setInterval(() => {
  mudarSlide(1);
}, 4000);

// ⬅️➡️ Botões de navegação (adicionado)
document.querySelector(".btn.anterior").addEventListener("click", () => mudarSlide(-1));
document.querySelector(".btn.proximo").addEventListener("click", () => mudarSlide(1));
