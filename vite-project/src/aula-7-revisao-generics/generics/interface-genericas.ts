// Interface genérica que aceita qualquer tipo de dados
interface RespostaApi<T> {
    metodo: 'GET' | 'POST';
    status: number;
    sucesso: boolean;
    dados: T // Tipo genérico (pode ser qualquer coisas)
}

interface IUsuario {
    id: number;
    nome: string;
    idade: number;
    apelidos: Array<string>;
}

const respostaCorreta: RespostaApi<boolean> = {
    metodo: 'GET',
    status: 200,
    sucesso: true,
    dados: false,
}

const respostaListaUsuarios: RespostaApi<IUsuario[]> = {
    metodo: 'GET',
    status: 200,
    sucesso: true,
    dados: [
        {id: 1,nome: 'Tiago',idade: 23,apelidos: ['Ti']},
        {id: 2,nome: 'Rodrigo',idade: 23,apelidos: ['Ro']},
        {id: 3,nome: 'Guilherme',idade: 23,apelidos: ['Gui']},
    ]
}

const respostaUsuario: RespostaApi<IUsuario> = {
    metodo: 'GET',
    status: 200,
    sucesso: true,
    dados: {
        id: 1,
        nome: 'Tiago',
        idade: 23,
        apelidos: ['Ti']
    }
}

interface IProduto {
    id: number;
    preco: number;
}

const respostaProduto: RespostaApi<IProduto> = {
    metodo: 'GET',
    status: 200,
    sucesso: true,
    dados: {
        id: 1,
        preco: 99,
    }
}

const respostaEndereco: RespostaApi<{
    id: number;
    estado: string;
}> = {
    metodo: 'GET',
    status: 200,
    sucesso: true,
    dados: {
        id: 1,
        estado: 'SP',
    }
}

console.log(respostaUsuario);
console.log(respostaProduto);
console.log(respostaEndereco);