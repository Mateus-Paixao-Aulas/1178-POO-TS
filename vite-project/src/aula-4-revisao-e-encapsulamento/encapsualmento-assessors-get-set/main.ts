import { Pessoa } from "./Pessoa";

const pessoa = new Pessoa('Fulano', 13, '12345678', 0.58);
pessoa.andar();
console.log(pessoa.nome);
// console.log(pessoa.cpf); // TODO: resolver erro na compilação
// pessoa.respirar();
pessoa.falar('Olá!');
// console.log(pessoa.obterIdade());
pessoa.idade = 15;
pessoa.idade = 20;
pessoa.idade = 0;
console.log(pessoa.idade);