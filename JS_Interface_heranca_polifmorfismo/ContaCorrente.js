import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    constructor(cliente, agencia){
        super(0, cliente, agencia);
    }
 
}
