export class Conta {

    // ATRIBUTOS DA CLASSE
    private _numero: number; // indica que o atributo só é acessível dentro da classe -> encapsulamento
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // MÉTODO CONSTRUTOR
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero; // this representa a classe atual -> neste exemplo conta
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    // MÉTODOS DE ACESSO - como os itens podem ser acessado GET e SET
    public get numero() { // recupera/mostra de forma segura os atributos
        return this._numero   
    }
    public set numero(novoValor: number) { // SET para atualizar de forma segura os atributos
        this._numero = novoValor 
    }

    public get agencia() {
        return this._agencia;
    }

    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get titular() {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo() {
        return this._saldo;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }
}