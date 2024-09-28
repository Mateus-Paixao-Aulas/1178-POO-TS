// Classes e métodos Abstratos

interface IAnimal {
    comer(): void;
}

abstract class Animal implements IAnimal {
    constructor(
        public nome: string, 
        public raca: string,
        private _cor: string,
    ){}

    get cor(){
        return this._cor;
    }

    // Método abstrato (definição do método que será implementado pelas subclasses)
    abstract comer(): void;

    // Método concreto, será herdado pelas subclasses
    fazerSom(){
        console.log("O animal está fazendo um som!!!");
    }
}

// subclasse cachorro
class Cachorro extends Animal {

    // implementa o método comer da classe abstrata Animal
    comer(){
        console.log("O Cachorro está comendo...");
    }

    // especializando a subclasse
    latir(){
        console.log("O Cachorro está latindo...");
    }
}

// subclasse gato
class Gato extends Animal {

    // implementa o método comer da classe abstrata Animal
    comer(){
        console.log("O Gato está comendo...");
    }

    // especializando a subclasse
    miar(){
        console.log("O Gato está miando...");
    }
}

class Passarinho extends Animal {

    // implementa o método comer da classe abstrata Animal
    comer(){
        console.log("O Passarinho está comendo...");
    }


    // especializando a subclasse
    cantar(){
        console.log("O Passarinho está cantando...");
    }
}

const cachorro = new Cachorro("Cachorro", "Beagle", "Preto");
const gato = new Gato("Gato", "Siames", "Branco");
const passarinho = new Passarinho("Passarinho", "N/D", "Branco");


// const animal = new Animal("Animal com Erro", "N/D", "Branco"); // Cannot create an instance of an abstract class.


passarinho.fazerSom();

console.log(cachorro)
console.log(gato)
console.log(passarinho)