export class Aluno  {

    // Não preciso instanciar (utilizar o new) para acessar este atributo
    static tipo = 'Presencial';
    id: number;
    static count = 0;
    constructor(public nome: string, public notas: number[]){
        Aluno.count++;
        this.id = Aluno.count;
    }

    // Não preciso instanciar (utilizar o new) para acessar este método
    static mostrarAlunoNaTela(nome: string, notas: string){
        console.log(`Nome: ${nome}, Nota: ${notas}`);    
    }

    // PRECISO instanciar (utilizar o new) para acessar este método
    calcularMedia(){
        // implementação do método
        return 10;
    }
}

class UtilMoeda {
    static formataMoeda(){
        console.log('R$...');
    }
}

const aluno2 = new Aluno('Gustavo', [7, 6, 5]);
const aluno3 = new Aluno('Rodrigo', [7, 6, 5]);
const aluno4 = new Aluno('Lucas', [7, 6, 5]);

console.log(aluno2.id);
console.log(aluno2.nome);
console.log(aluno2.notas);
console.log(Aluno.tipo);
console.log(aluno3.id);
console.log(aluno4.id);

// console.log(Aluno.calcularMedia())
Aluno.mostrarAlunoNaTela(aluno2.nome, aluno2.notas.join(','));
UtilMoeda.formataMoeda();
console.log(`Quantidade de alunos instanciados: ${Aluno.count}`);