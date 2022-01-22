import { cliente } from './Cliente.js';
import { contaCorrente } from './contaCorrente.js';

const cliente1 = new cliente('Ricardo', 11122233309);

const cliente2 = new cliente('Alice', 88822233309);

const conta1 = new contaCorrente(cliente1, 1001, 600);

conta1.depositar(100);
conta1.depositar(100);
conta1.agencia = 1001;

conta1.depositar(500);

const conta2 = new contaCorrente(cliente2, 102, 10000);

console.log(cliente1);

conta1.transferir(200, conta2);

console.log(conta1.saldo);

console.log(contaCorrente.numeroContas);
