document.addEventListener("DOMContentLoaded", () => {
  // Atualiza contador do carrinho
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const contador = document.getElementById("contador-carrinho");
  if (contador) {
    contador.textContent = carrinho.length > 0 ? `(${carrinho.length})` : "";
  }

  // Controle do banner de cookies
  const alertBox = document.getElementById("cookie-alert");
  const cookiesDecision = localStorage.getItem("cookiesDecision");

  if (!cookiesDecision && alertBox) {
    setTimeout(() => {
      alertBox.classList.add("show");
    }, 500);
  }

  document.getElementById("accept-cookies").addEventListener("click", () => {
    localStorage.setItem("cookiesDecision", "accepted");
    alertBox.classList.remove("show");
  });

  document.getElementById("reject-cookies").addEventListener("click", () => {
    localStorage.setItem("cookiesDecision", "rejected");
    alertBox.classList.remove("show");
  });

  // Botões adicionar ao carrinho
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const nome = button.getAttribute("data-nome");
      const preco = parseFloat(button.getAttribute("data-preco"));

      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      carrinho.push({ nome, preco });
      localStorage.setItem("carrinho", JSON.stringify(carrinho));

      window.location.href = "compras.html";
    });
  });
});

