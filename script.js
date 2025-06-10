function calculadoras() {
  const secao =
  document.getElementById("calculadoras");
  secao.scrollIntoView({behavior: "smooth"});
}
function inicio(){
  const secao =
  document.getElementById("inicio");
  secao.scrollIntoView({behavior:"smooth"});
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