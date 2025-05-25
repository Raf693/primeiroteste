function calcularconsumo(){
    const distancia = 
    parseFloat(document.getElementById("distancia").value);

    const combustivel=
    parseFloat(document.getElementById("combustivel").value);

    const resultado =
    document.getElementById("resultado");

    if(isNaN(distancia) || isNaN(combustivel) ||
 combustivel=== 0 ) { 
    resultado.textContent= "por favor, insira valores válidos";
    return;
 }
    const media = distancia / combustivel;
    resultado.textContent = `média de consumo: ${media.toFixed(2)} km/l`;

 }

 function calculartemperaturaF(){
   const celsius = 
   parseFloat(document.getElementById("celsius").value);

   const resultado2 =
   document.getElementById("resultado2");

   const calculo = celsius * 1.8 + 32;
   resultado2.textContent = `${calculo.toFixed(2)}°F fahrenheit`
}
function calculartemperaturak(){
   const celsius = 
   parseFloat(document.getElementById("celsius").value);

   const resultado3 =
   document.getElementById("resultado3");

   const calculo = celsius + 273.15;
   resultado3.textContent = `${calculo.toFixed(2)}°K kelvin`
}