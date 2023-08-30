// Selecionando o botão pelo ID
var  inicio = document.getElementById("inicio");

// Adicionando o evento onclick
inicio.onclick = function() {
  // Redirecionar para a página de citações
  window.location.href = "inicio.html"; // Substitua pelo caminho da sua página
};

var  assinatura = document.getElementById("assinatura");
assinatura.onclick = function() {
  window.location.href = "assinatura.html"; 
};

var  livros = document.getElementById("livros");
livros.onclick = function() {
  window.location.href = "livros.html"; 
};
var LerLivro = document.getElementById("LerLivro");
LerLivro.onclick = function() {
  window.location.href = "LerLivro.html"; 
};

