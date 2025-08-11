console.log("JS carregado");

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
 

function mudardesign() {
  const design = document.getElementById("imagem");
  const texto1 = document.getElementById("texto1");
  const h2s = document.querySelectorAll(".h2-padrao"); 
  const imagemh1 = document.querySelector(".letreiro-container"); 
  const botaotema = document.getElementById("botaotema");
  const destaque = document.querySelectorAll(".destaque-padrao");
  const fonte = document.querySelectorAll(".fonte-padrao");
  const fonte2 = document.querySelectorAll(".fonte2-padrao");
  const temperatura = document.querySelector(".temperatura");
  const temperaturaT = document.querySelector(".fundotexto-t");
  const calculadora2 = document.getElementById("calculadora2");
  const resultados = document.querySelectorAll("#resultadoconsumo ,#resultado2, #resultado3, #resultado4 ,#resultado5");
  const quis = document.querySelector(".quiz");
  const consumo = document.getElementById("consumo");
  const info = document.getElementById("informacao-video");
  const raiz = document.getElementById("raiz2");
  const porcentagem = document.getElementById("calculoporcentagem");
  
  // Toggle de classes
  porcentagem.classList.toggle("calculoporcentagem-verde");  
  raiz.classList.toggle("raiz2-verde");
  info.classList.toggle("informacao-video-verde");
  consumo.classList.toggle("consumo-verde");
  quis.classList.toggle("quiz-verde");
  calculadora2.classList.toggle("calculadora2-verde");
  temperaturaT.classList.toggle("temperatura-t-verde");
  temperatura.classList.toggle("temperatura-verde");
  botaotema.classList.toggle("botaotema-verde");
  design.classList.toggle("imagem-verde");
  texto1.classList.toggle("texto1-verde");
  imagemh1.classList.toggle("letreiro-container-verde");

  resultados.forEach(el => {
    el.classList.toggle("resultados-verde");
  });

  fonte2.forEach(el => {
    el.classList.toggle("fonte2-verde");
  });

  fonte.forEach(el => { 
    el.classList.toggle("fonte-verde");
  });  

  h2s.forEach(el => {
    el.classList.toggle("h2-verde");
  });
  
  destaque.forEach(el => {
    el.classList.toggle("destaque-verde");
  });

  const body = document.body;
  
  body.style.backgroundColor = body.style.backgroundColor === "black" ? "white" : "black";
}
function calcularconsumo() {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const combustivel = parseFloat(document.getElementById("combustivel").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(distancia) || isNaN(combustivel) || combustivel === 0) {
    resultado.textContent = "Por favor, insira valores válidos.";
    return;
  }

  const media = distancia / combustivel;
  resultado.textContent = `Média de consumo: ${media.toFixed(2)} km/l`;
}

function calculartemperaturaF() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  const resultado2 = document.getElementById("resultado2");

  if (isNaN(celsius)) {
    resultado2.textContent = "Digite uma temperatura válida em °C.";
    return;
  }

  const calculo = celsius * 1.8 + 32;
  resultado2.textContent = `${calculo.toFixed(2)} °F (Fahrenheit)`;
}

function calculartemperaturak() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  const resultado2 = document.getElementById("resultado2");

  if (isNaN(celsius)) {
    resultado2.textContent = "Digite uma temperatura válida em °C.";
    return;
  }

  const calculo = celsius + 273.15;
  resultado2.textContent = `${calculo.toFixed(2)} K (Kelvin)`;
}

function calculartemperaturakprac() {
  const kelvin = parseFloat(document.getElementById("Kelvin").value);
  const resultado3 = document.getElementById("resultado3");

  if (isNaN(kelvin)) {
    resultado3.textContent = "Digite uma temperatura válida em Kelvin.";
    return;
  }

  const calculo = kelvin - 273.15;
  resultado3.textContent = `${calculo.toFixed(2)} °C (Celsius)`;
}

function calculartemperaturakpraf() {
  const kelvin = parseFloat(document.getElementById("Kelvin").value);
  const resultado3 = document.getElementById("resultado3");

  if (isNaN(kelvin)) {
    resultado3.textContent = "Digite uma temperatura válida em Kelvin.";
    return;
  }

  const calculo = (kelvin - 273.15) * 9 / 5 + 32;
  resultado3.textContent = `${calculo.toFixed(2)} °F (Fahrenheit)`;
}

function calculartemperaturafparac(){
   const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
   const resultado4 = document.getElementById("resultado4");

   if (isNaN(fahrenheit)){
      resultado4.textContent= "Digite uma temperatura válida em °F.";
      return;
   }

   const calculo= (fahrenheit - 32)* 5 /9;
   resultado4.textContent=`${calculo.toFixed(2)}°C celsius`
}
function calculartemperaturafparak() {
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  const resultado4 = document.getElementById("resultado4");

  if (isNaN(fahrenheit)) {
    resultado4.textContent = "Digite uma temperatura válida em °F.";
    return;
  }

  const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
  resultado4.textContent =`${kelvin.toFixed(2)} K (Kelvin)`;
}

function calcularraiz(){
   const raiz = parseFloat(document.getElementById("raiz").value);
   const resultadoraiz = document.getElementById("resultadoraiz");

   if(isNaN(raiz) || raiz < 0 ){
    resultadoraiz.textContent = "por favor digite um nùmero válido e não-negativo";
    return;
   }

   const resultado = Math.sqrt(raiz);
   resultadoraiz.textContent =`a raiz quadrada de ${raiz.toFixed(2)} é ${resultado.toFixed(2)}`

}

function calcularporcentagem(){
    const porcentagem= parseFloat(document.getElementById("porcentagem").value);
    const valor= parseFloat(document.getElementById("valor").value);
    const resultado5= document.getElementById("resultado5")

    const calculo = (porcentagem * valor) / 100 ;
    resultado5.textContent =`${porcentagem.toFixed(2)}% de ${valor.toFixed(2)} é igual a ${calculo.toFixed(2)}`
    
}
function calcularconsumo() {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const combustivel = parseFloat(document.getElementById("combustivel").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(distancia) || isNaN(combustivel) || combustivel === 0) {
    resultadoconsumo.textContent = "Por favor, insira valores válidos.";
    return;
  }

  const media = distancia / combustivel;
  resultadoconsumo.textContent = `Média de consumo: ${media.toFixed(2)} km/l`;
}

function calcularraiz(){
   const raiz = parseFloat(document.getElementById("raiz").value);
   const resultadoraiz = document.getElementById("resultadoraiz");

   if(isNaN(raiz) || raiz < 0 ){
    resultadoraiz.textContent = "por favor digite um nùmero válido e não-negativo";
    return;
   }

   const resultado = Math.sqrt(raiz);
   resultadoraiz.textContent =`a raiz quadrada de ${raiz.toFixed(2)} é ${resultado.toFixed(2)}`

}

function calcularporcentagem(){
    const porcentagem= parseFloat(document.getElementById("porcentagem").value);
    const valor= parseFloat(document.getElementById("valor").value);
    const resultado5= document.getElementById("resultado5")

    const calculo = (porcentagem * valor) / 100 ;
    resultado5.textContent =`${porcentagem.toFixed(2)}% de ${valor.toFixed(2)} é igual a ${calculo.toFixed(2)}`

    if (isNaN(porcentagem) || isNaN(valor)) {
      resultado5.textContent = "Por favor, insira valores válidos.";
      return;
    }
}
