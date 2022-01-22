import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./conta/ContaCorrente.js"
import { ContaPoupanca } from "./conta/ContaPoupanca.js";
import { ContaSalario } from "./conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
const cliente3 = new Cliente("Rafael", 11188822221);


const conta1 = new ContaCorrente(0, cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente2, 102);
const contaSalario = new ContaSalario(0, cliente3, 100);
contaSalario.depositar(200);
contaSalario.sacar(150);

console.log(contaSalario)
console.log(contaPoupanca)
console.log(conta1)
