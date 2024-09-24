// acoplamento => quando uma classe depende
// baixo acoplamento => o que queremos na nossa aplicação
// alta coesão => o que queremos na nossa aplicação

class Animal {
    // nome: string;
    // raca: string;

    // constructor(nome: string, raca: string){
    //     this.nome = nome;
    //     this.raca = raca;
    // }

    constructor(
        public nome: string, 
        public raca: string,
        private _cor: string,
    ){}

    get cor(){
        return this._cor;
    }

    comer(){
        console.log(`O ${this.nome}, está comendo!!!`);
    }

    fazerSom(){
        console.log("O animal está fazendo um som!!!");
    }
}

// subclasse cachorro
class Cachorro extends Animal {


    // especializando a subclasse
    latir(){
        console.log("O Cachorro está latindo...");
    }
}

// subclasse gato
class Gato extends Animal {


    // especializando a subclasse
    miar(){
        console.log("O Gato está miando...");
    }
}

const cachorro = new Cachorro("Cachorro", "Beagle", "Preto");
const gato = new Gato("Gato", "Siames", "Branco");

console.log(cachorro, gato);

cachorro.fazerSom();
gato.fazerSom();

// cachorro.miar(); // miar is not a function
gato.miar();
cachorro.latir();

gato.comer();
cachorro.comer();

console.log(gato.cor);
console.log(cachorro.cor);