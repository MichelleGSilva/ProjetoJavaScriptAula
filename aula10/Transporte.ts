export class Transporte {

   // Atributos
	private _capacidade: number;

   // Metodo Construtor
	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}

   // Metodo de Acesso
	public get capacidade() {
		return this._capacidade;
	}

	public set capacidade(novaCapacidade: number) {
		this._capacidade = novaCapacidade;
	}

   // Metodos Auxiliares

   public visualizar(): void {
		
		console.log("\n\n************************************************************")
		console.log("Dados do Meio de Transporte:");
		console.log("****************************************************************")
		console.log("Capacidade (número de passageiros): " + this._capacidade)
	}
}