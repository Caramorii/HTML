const nome="Unifran"
console.log("Valor de sting nome: ", nome)

//mostrar o primeiro caracter da string nome
console.log("Primiero caracter da string nome: ", nome.charAt(3))
//mostrar o caracter na posição 3
console.log("Caracter na posição 3 da string nome: ", nome.charAt(3))
//mostrar o tamanho da string nome
console.log("Tamanho da sting nome: ", nome.length)
//mostrar a posição de um determinado caracter
console.log("Mostrar a posição do caracter f: ", nome.indexOf("f"))
console.log("Mostrar a posição do caracter U: ", nome.indexOf("U"))
//obter substring - parte da string
console.log("Substring a partir da posição 2: ", nome.substring(2))
console.log("Substring a partir da posição 2 e 4: ", nome.substring(2,4))
//mostrar a string em letras masiculas
console.log("String nome em letras masiculas: ", nome.toUpperCase())
//mostrar a string em letras minusculas
console.log("String nome em letras minusculas ", nome.toLowerCase())
let texto= "Java Script é dificil"

let NovoTexto= texto.replace("dificil", "facil")
console.log("Valor da string texto: ", texto)
console.log("Valor da string NovoTexto: ", NovoTexto)

let palavras= NovoTexto.split(" ")
console.log("Valor do vetor palavras: ", palavras)

let palavras1= NovoTexto.split(" i ")
console.log("Valor do vetor palavras1: ", palavras1)

//concatenar
let texto2 = texto + " " + NovoTexto
console.log("Valor da stringe 2: ", texto2)