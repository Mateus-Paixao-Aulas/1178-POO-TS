import { Produto } from "./Produto";

export class Roupa extends Produto {

    mostrarTamanhos(){
        const tamanhos = ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XXG']
        console.log(tamanhos.join('| '));
    }
}