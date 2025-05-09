let alt = 1.78
let peso = 75
let imc
let genero = "masculino"
let classificacao = ""

imc = peso / (alt * alt)

// precisa de estar entre colchetes se tiver mais de uma variavel
if (genero === "masculino") { //imc masculino
    if (imc < 20)
        classificacao = "Abaixo do peso"
    else if (imc < 25)
        classificacao = "Peso ideal"
    else if (imc < 30)
        classificacao = "Sobrepeso"
    else
        classificacao = "Obeso"
}

if (genero === "feminino") { //imc feminino
    if (imc < 19)
        classificacao = "Abaixo do peso"
    else if (imc < 24)
        classificacao = "Peso ideal"
    else if (imc < 29)
        classificacao = "Sobrepeso"
    else
        classificacao = "Obeso"
}

console.log("Valor do IMC:", imc)
console.log("Genero: ", genero)
console.log("Classificação: ", classificacao)
