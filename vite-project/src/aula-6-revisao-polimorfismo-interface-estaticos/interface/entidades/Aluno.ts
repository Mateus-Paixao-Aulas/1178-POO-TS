import { IAluno } from "../interfaces/IAluno";

export class Aluno implements IAluno {
    constructor(public nome: string, public notas: number[]){}

    calcularMedia() {
        let soma = 0;
        this.notas.forEach(nota => {
            soma += nota;
        })

        const media = soma / this.notas.length
        return media;
    }
}