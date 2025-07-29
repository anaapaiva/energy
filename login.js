document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (nome && email && senha) {
      mensagem.innerHTML = `
      <span style="color: green;">Cadastro realizado com sucesso!</span><br><br>
      <p>Bem-vindo(a) <strong>${nome}</strong>!</p>
    `;
    } else {
      mensagem.innerHTML = `<span style="color: red;">Erro: Tente preencha todos os campos.</span>`;
    }
  });
