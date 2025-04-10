//Uso let para declarar variavel
let a="Teste"
console.log("Valor de a: ", a, typeof a)
a=10
console.log("Valor de a: ", a, typeof a)

let b=50
if (b>10){
    let c=50
    //A variavel c existe apenas no bloco onde foi declarada 
    console.log("No if o valor de b: ", b)
    console.log("NO if o valor de c: ", c)
}

console.log("Fora do if")
console.log("Valor de b: ", b)
//console.log("Valor de c: ", c) Erro pois c foi declarada no bloco if