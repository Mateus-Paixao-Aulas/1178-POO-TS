export interface IAluno {
    nome: string;
    notas: number[];
    calcularMedia: () => number;
} 

// const aluno: IAluno = {
//     nome: 'Mateus',
//     notas: [10, 10, 10],
//     calcularMedia: () => {
//         return 10;
//     }
// }