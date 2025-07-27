 window.onload = function () {
    let nome = prompt("Qual é o seu nome?");
    if (nome) {
      document.getElementById("resultado1").innerText = "Olá, " + nome + "!";
      document.getElementById("resultado2").innerText = "Olá, " + nome + "!";
    } else {
      document.getElementById("resultado1").innerText = "Olá, visitante!";
      document.getElementById("resultado2").innerText = "Olá, visitante!";
    }
  };

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