//Declaração de variavel usando Var
var a = 10
//Mostrar na console o valor da variavel a
console.log(a)
console.log("Valor da variavel a:", a)

//Mostrar tipo da variavel
console.log("Tipo da variavel a: ", typeof a)
a="teste"
console.log("Tipo da variavel a: ", typeof a)



var fora="Declarada fora da função"
var a = 35.5
//Declarando a função
function minhaFuncao(){
    var dentro="Declarada dentro da função"
    console.log("Mostrando o valor das variaveis a partir da função")
    console.log("Valor de fora: ", fora)
    console.log("Valor de dentro: ", dentro)
}
//Chamando a função
minhaFuncao()
//Mostrar as varaiaveis fora da função
console.log("Mostrar variaveis fora da função")
console.log("valor de fora: ", fora)
//console.log("Valor de dentro: ", dentro) //Erro