import{cliente} from "./Cliente.js"
import{contaCorrente} from "./contaCorrente.js"

const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new cliente();
cliente2.nome = "Alice"
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new contaCorrente()
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(500);

const conta2= new contaCorrente();
conta2._cliente = cliente2;
conta2.agencia = 102;
conta2._saldo = 1000;
console.log(cliente1);

contaCorrenteRicardo.transferir(200, conta2);

console.log(conta2.saldo)

