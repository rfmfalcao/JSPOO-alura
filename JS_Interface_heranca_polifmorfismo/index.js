import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const conta1 = new Conta(0, cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new Conta(50, cliente2, 102);

console.log(contaPoupanca)
console.log(conta1)
console.log(cliente1)