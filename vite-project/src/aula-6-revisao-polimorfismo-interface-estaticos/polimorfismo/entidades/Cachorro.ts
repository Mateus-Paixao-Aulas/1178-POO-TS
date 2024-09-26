import { Animal } from "./Animal";

// subclasse cachorro
export class Cachorro extends Animal {
    porte: string;

    constructor(
        nome: string,
        raca: string,
        cor: string,
        porte?: string) {
        super(nome, raca, cor);
        this.porte = porte || 'N/D'; 
    }

    // especializando a subclasse
    latir(){
        // Fazer Som é um método geral, buscaria o arquivo em um cdn
        super.fazerSom();
        // executar arquivo
        console.log("O Cachorro está latindo...");
    }

    // Override
    mostrarDetalhes(){
        const detalhesComuns = super.mostrarDetalhes()
        return `${detalhesComuns} Porte: ${this.porte}`; 
    }
}