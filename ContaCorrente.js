export class contaCorrente {
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novo){
        if(novo instanceof cliente){
        this._cliente = novo;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
         if (this._saldo >= valor){
            this._saldo -= valor
            return valor;
        }
    }


    depositar(valor){
    if (valor <= 0) return;
        this._saldo += valor;
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}