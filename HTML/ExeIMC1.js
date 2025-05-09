let peso = 91
let altura = 1.75
let genero="feminino"
let classificacao=""
let imc

imc = peso / (altura * altura)
if (genero==="masculino") {
  if (imc<20)
      classificacao="Abaixo do peso"
  else if (imc < 25)
      classificacao="Peso Ideal"
  else if (imc < 30)
      classificacao="Sobrepeso"
  else 
      classificacao="Obesidade"
}
else if (genero==="feminino"){
    if (imc<19)
        classificacao="Abaixo do peso"
    else if (imc < 24)
        classificacao="Peso Ideal"
    else if (imc < 29)
        classificacao="Sobrepeso"
    else 
        classificacao="Obesidade"
  
}
console.log("Valor do Imc: ", imc)
console.log("Genero: ", genero)
console.log("Classificacao: ", classificacao)
