export class Produto {
    id: string;
    nome: string;
    preco: number;
    descricao: string;

    constructor(id: string, nome: string, preco: number, descricao: string){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

    aplicarDesconto(porcentagem: number): void {
        this.preco -= this.preco * (porcentagem / 100);
    }
}
