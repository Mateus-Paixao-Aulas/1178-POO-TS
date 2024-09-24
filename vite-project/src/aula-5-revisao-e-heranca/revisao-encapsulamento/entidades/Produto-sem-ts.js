export class Produto {
    id;
    nome;
    preco;
    descricao;

    constructor(id, nome, preco, descricao){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

    aplicarDesconto(porcentagem) {
        this.preco -= this.preco * (porcentagem / 100);
    }
}