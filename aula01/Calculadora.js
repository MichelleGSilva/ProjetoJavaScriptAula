// Importando a biblioteca
const leia = require('readline-sync')

// Variaveis
let celsius, fahrenheit

// Enhtrada de Dados
celsius = leia.questionFloat("Insira a temperatura em Celsius: ")

// Processamento
fahrenheit = celsius * 1.8 + 32

// Saida de Dados
console.log("A temperatura em fahrenheit é: " + fahrenheit)
console.log("A temperatura em fahrenheit é: %f", fahrenheit)