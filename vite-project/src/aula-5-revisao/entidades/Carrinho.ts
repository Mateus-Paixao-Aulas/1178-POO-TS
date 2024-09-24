import { Produto } from "./Produto";

export class Carrinho {
    private _id: string;
    public produtos: Produto[];
    private _quantidadeTotal: number;
    private _valorTotal: number;

    constructor(id: string) {
        this._id = id;
        this.produtos = [];
        this._quantidadeTotal = 0;
        this._valorTotal = 0;
    }

    get id(){
        return this._id;
    }

    get quantidadeTotal(){
        return this._quantidadeTotal;
    }

    get valorTotal(){
        return this._valorTotal;
    }

    public adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
        this.calcularTotal();
    }

    public removerProduto(produto: Produto): void {
        this.produtos = this.produtos.filter(p => p.id !== produto.id);
        this.calcularTotal();
    }

    private calcularTotal(): void {
        this._quantidadeTotal = this.produtos.length;
        this._valorTotal = this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }
}