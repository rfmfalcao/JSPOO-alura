//Classe Abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você deve informar o tipo de conta");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    get cliente (){
        return this._cliente
    }

    get saldo (){
        return this._saldo
    }
    
    //para proteger de saques errados//método abstrato
    sacar(valor){
        throw new Error("conta não habilitada para saque")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}