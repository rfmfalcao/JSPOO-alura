import { Cliente } from "./Cliente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { sistemaAutenticacao } from "./sistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345");
const gerente = new Gerente("Ricardo", 5000, 12345678912);
gerente.cadastrarSenha("12354");

const diretorEstaLogado = sistemaAutenticacao.login(diretor, "12345");
const gerenteEstaLogado = sistemaAutenticacao.login(gerente, "12354");


const cliente4 = new Cliente ("Ana", 98765432100, "13246")
const clienteEstaLogado = sistemaAutenticacao.login(cliente4, "13246")
console.log(clienteEstaLogado)