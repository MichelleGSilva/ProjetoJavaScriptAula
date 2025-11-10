import { Terrestre } from "./Terrestre"

export function main (){

     // instanciou objeto da classe terrestre
    const bike: Terrestre = new Terrestre(2, 2, 20)

    console.log("A capacidade do meio de transporte é: " + bike.capacidade)

    bike.capacidade = 3

    console.log("A capacidade do meio de transporte é: " + bike.capacidade) 

    bike.visualizar()

}

main()