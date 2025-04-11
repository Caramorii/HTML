// uso do const para declaração de varaivel
// após atribuir um valor para uma variavel declarada com const
// a mesma não pode ser alterada
// referencia podem ter o seu conteudo referenciado alterado
const a = 10
console.log("Valor de a: ", a)
//a="Teste" Erro. a constante não pode ser alterado
//console.log("Novo valor de a: ", a)

const vetor=[1,10.4,5,3.2,10]
console.log(vetor)
vetor[1]=56
console.log(vetor)

// objeto
const produto = {
    nome: 'banana',
    preco: 5.98,
    desnconto: 1.70
}

console.log(produto)

produto.preco=11.99