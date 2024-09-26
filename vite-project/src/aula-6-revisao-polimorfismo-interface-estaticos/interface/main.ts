import { Aluno } from "./entidades/Aluno";
import { AlunoEad } from "./entidades/AlunoEad";

const aluno2 = new Aluno('Gustavo', [7, 6, 5]);
const aluno3 = new AlunoEad('Rodrigo', [10, 10, 10, 7]);
console.log(aluno2.calcularMedia());
console.log(aluno3.calcularMedia());