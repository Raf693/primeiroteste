
function atualizarLetreiro() {
  const nome = document.getElementById("name").value;
  const letreiro = document.querySelector(".letreiro span");
  
  if (nome) {
    letreiro.textContent = `Olá, ${nome}! Bons estudos!`;
  } else {
    letreiro.textContent = "Bons estudos!";
  }
}
function verificarResposta(respostaSelecionada) {
      const respostaCerta = '77';
      const resultado = document.getElementById("resultado");

      if (respostaSelecionada === respostaCerta) {
        resultado.innerText = "✅ Resposta correta!";
        resultado.style.color = "green";
      } else {
        resultado.innerText = "❌ Resposta errada. Tente novamente!";
        resultado.style.color = "red";
      }
    }
    