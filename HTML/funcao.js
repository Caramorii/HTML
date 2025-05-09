//função é um bloco de código projetado para realizar uma tarefa especifica.

//estrutura da funcao:
/* function nome da funcao(parametro1, parametro2){
    corpo da função;
    return parametro1 + parametro2
}
*/

function somar(a, b) {
    return a + b;
}

console.log(somar(2, 3))
console.log(somar(20, 80))
console.log(somar(3, 8))

function mult(b, v) {
    return b * v;
}

console.log(mult(3, 7))

function divisao(a, b) {
    if (b == 0) {
        return 'Erro:divisão por zero';
    }
    return a / b;
}

console.log(divisao(4, 2))
console.log(divisao(12, 0))
