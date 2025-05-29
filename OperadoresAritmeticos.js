let a=3, b=20, c=30
let d 
console.log("Valor de a: ", a)
console.log("Valor de b: ", b)
console.log("Valor de c: ", c)

//Adição
d = a + b
console.log("Valor de a + b: ", d)

//Subtração
d = c - b
console.log("Valor de c + b: ", d)  

//Multiplicação
d = a * c
console.log("O valor de a * c: ", d)

//Divisão
d = c / a
console.log("O valor de c / a: ", d)

//Potencia 
d = b ** a
console.log("O valor da potencia de b ** a :", d)

//Divisão
d = b / a
console.log("O valor de b / a: ", d)

//Resto da divisão
d = b % a
console.log("O resto da divisão de b / a: ", d)

//Operador incremento
//incrementa em uma unidade um numero inteiro
console.log("valor de antes do incremento: ", a)
//pre-incremento
++a
console.log("Valor de a após o incremento: ", a)
//pos-incremento
a++
console.log("Valor de a após o segundo incremento: ", a)

a=3
d=++a //pre-incremento
console.log("Valor de a pré-incremento: ", a)
console.log("Valor de d pré-incremento: ", d)

a=3
d=a++ //pos-incremento
console.log("Valor de a pós-incremento: ", a)
console.log("Valor de d pós-incremento: ", d)

a=3

a-- 
console.log("Valor de a pos decremento: ", a)

a=3
--a
console.log("Valor de a pré decremento: ", a)