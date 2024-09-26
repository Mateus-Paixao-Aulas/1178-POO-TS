import { IAluno } from "../interfaces/IAluno";

export class AlunoEad implements IAluno {
    constructor(public nome: string, public notas: number[]){}

    calcularMedia() {
        const total = this.notas.reduce((acc, nota) => acc + nota, 0);
        // consultar serviço externo (cenário);
        return total / this.notas.length;
    }
}