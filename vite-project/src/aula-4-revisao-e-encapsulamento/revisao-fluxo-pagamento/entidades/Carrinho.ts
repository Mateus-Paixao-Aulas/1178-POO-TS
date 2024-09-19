import { Produto } from "./Produto";

export class Carrinho {
    id: string;
    produtos: Produto[];
    quantidadeTotal: number;
    valorTotal: number;

    constructor(id: string) {
        this.id = id;
        this.produtos = [];
        this.quantidadeTotal = 0;
        this.valorTotal = 0;
    }

    adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
        this.calcularTotal();
    }

    removerProduto(produto: Produto): void {
        this.produtos = this.produtos.filter(p => p.id !== produto.id);
        this.calcularTotal();
    }

    calcularTotal(): void {
        this.quantidadeTotal = this.produtos.length;
        this.valorTotal = this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }
}