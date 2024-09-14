// string
// number
// boolean
// null
// undefined
// array

// object

// any
// void

let nota: number = 0;
let nome: string;
let ativo: boolean;
// let notas: [number, number, number];
let notas: number[];
let apelidos: string[];
let info: any;


nota = 10;
nome = "Lucas";
ativo = true;
notas = [8, 0, 10];
apelidos = ["Ken", "Lu"];

info = "Não fez a prova de revisão";
info = 1995;
info = true;

function mostrarSoma(): void {
    console.log(5 + 5);
    console.log("mostrou");
}

const soma = mostrarSoma();

console.log(notas);
mostrarSoma();


// type -> Spoiler
interface Aluno {
    nome: string;
    nota: number;
    ativo: boolean;
    notas?: number[];
    apelidos: string[];
    calcularMedia: (notas: number[]) => number;
    // calcularMedia(): number;
};

let aluno: Aluno | null;

aluno = {
    nome,
    nota,
    ativo,
    // notas,
    apelidos,
    calcularMedia: () => {
        return 10;
    }
}

let aluno2: Aluno | null;
let aluno3: Aluno | null;

aluno2 = {
    nome: "Gabriela",
    nota,
    ativo,
    // notas,
    apelidos,
    calcularMedia: (notas: number[]) => {
        const total = notas.reduce((total, nota) => total += nota, 0)
        return total / notas.length
    }
};

aluno3 = null;

console.log(typeof nota);
console.log(typeof nome);
console.log(typeof ativo);


// console.log(soma); // undefined
// console.log(aluno);
console.log(aluno?.nome || 'Sem nome');
console.log(aluno?.notas || 'Sem notas');
console.log(aluno.notas || 'Sem notas');

console.log(aluno2);
console.log(aluno3);

console.clear();
console.log(aluno2.calcularMedia([10,8]));