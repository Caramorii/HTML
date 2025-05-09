function calcularIMC(peso, alt, genero) {

    let imc
    imc = peso / (alt * alt)
    let classificacao = ""

    if (genero === "masculino") {
        if (imc < 20)
            classificacao = "Abaixo do peso"
        else if (imc < 25)
            classificacao = "Peso ideal"
        else if (imc < 30)
            classificacao = "Sobrepeso"
        else
            classificacao = "Obeso"
    } else if (genero === "feminino") {
        if (imc < 19)
            classificacao = "Abaixo do peso"
        else if (imc < 24)
            classificacao = "Peso ideal"
        else if (imc < 29)
            classificacao = "Sobrepeso"
        else
            classificacao = "Obeso"
    }

    console.log(imc)
    console.log(classificacao)
}

console.log(calcularIMC(1.78, 75, "feminino"))
calcularIMC(1.78, 75, "feminino")