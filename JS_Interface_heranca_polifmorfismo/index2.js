import { Diretor } from "./funcionarios/Diretor.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { sistemaAutenticacao } from "./sistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345");
const gerente = new Gerente("Ricardo", 5000, 12345678912);
gerente.cadastrarSenha("12354");

const estaLogado = sistemaAutenticacao.login(diretor, "12345");
sistemaAutenticacao.login(gerente, "12354");

console.log(estaLogado);
