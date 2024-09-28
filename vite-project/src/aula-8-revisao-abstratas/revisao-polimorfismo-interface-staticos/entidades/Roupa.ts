import { Produto } from "./Produto";

export class Roupa extends Produto {
    tamanhos: string[];
    private static totalRoupas: number = 0;

    constructor(id: string, nome: string, preco: number, descricao: string) {
        super(id, nome, preco, descricao);
        this.tamanhos = ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XXG'];
        Roupa.totalRoupas++;
    }

    mostrarTamanhos(){
        console.log(this.tamanhos.join('| '));
    }

    static mostrarQuantidade() {
        console.log(`Quantidade de roupas: ${Roupa.totalRoupas}`);
    }
}