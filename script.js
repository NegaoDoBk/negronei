document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let usuario = document.getElementById("username").value;
  let senha = document.getElementById("password").value;

  // Usuário e senha definidos
  let usuarioCorreto = "Isaias";
  let senhaCorreta = "05092008";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    alert("✅ Login realizado com sucesso! Bem-vindo, " + usuario + "!");
    window.location.href = "home.html"; // redireciona para outra página
  } else {
    alert("❌ Usuário ou senha incorretos. Tente novamente.");
  }
});
