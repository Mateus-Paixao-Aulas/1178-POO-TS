import { Animal } from "./Animal";

// subclasse gato
export class Gato extends Animal {
    gostaDeArranhar: boolean;

    constructor(
        nome: string,
        raca: string,
        cor: string,
        gostaDeArranhar?: boolean) {
        super(nome, raca, cor);
        this.gostaDeArranhar = !!gostaDeArranhar; 
    }

    // especializando a subclasse
    miar(){
        super.fazerSom();
        console.log("O Gato está miando...");
    }

    mostrarDetalhes(){
        const detalhesComuns = super.mostrarDetalhes()
        return `${detalhesComuns} Gosta de Arranhar?: ${this.gostaDeArranhar ? 'Sim' : 'Não'}`; 
    }
}