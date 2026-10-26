
// //tipos de dados

// //string
// nome = "Gabriel Melo"

// //numericos
// let n1 = 2 //inteiro
// let n2 = 3.5 //ponto flutuante

// //booleanos

// let aprovado = true
// let reprovado = false


// //interações com usuários

// nomeDigitado = prompt("Digite seu nome: ")
// alert(nomeDigitado)
// console.log(nomeDigitado)



//operadores

console.log("Operadores Aritméticos")

const n1 = 3
const n2 = 2


console.log("número 1: ", n1)
console.log("número 2: ", n2)
console.log("soma: ", n1 + n2)
console.log("subração: ", n1 - n2)
console.log("produto: ", n1 * n2)
console.log("divisão: ", n1 / n2)
console.log("resto da divisão: ", n1 % n2)

//operadores relacionais (retornará um valor booleano)

console.log("Operadores Relacionais")
console.log("Igual: ", n1 == n2)
console.log("Diferente: ", n1 != n2)
console.log("Menor: ", n1 < n2)
console.log("Maior: ", n1 > n2)
console.log("Menor ou igual: ", n1 <= n2)
console.log("Maior ou igual: ", n1 >= n2)

console.log("Operadores Lógicos")
//também retorna um valor booleano

const aprovado = true

console.log("Aprovado: ", aprovado)
console.log("Aprovado: ", !aprovado) //negação
console.log("Operador 'e' (&&): ", n1 > n2 && aprovado)
console.log("Operador 'ou' (||): ", n1 < n2 || !aprovado)
