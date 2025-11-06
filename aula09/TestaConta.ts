import { Conta } from "./Conta"

export function main(){

// INSTANCIA DA CLASSE CONTA {}

const conta1: Conta = new Conta(12156, 108, 1, "Michelle", 1000000)

console.log("Titular da Conta: " + conta1.titular)

conta1.saldo = 1500000
console.log("Saldo da Conta: " + conta1.saldo)

}

main()