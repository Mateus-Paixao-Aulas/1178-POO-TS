export class Animal {
    constructor(
        public nome: string, 
        public raca: string,
        private _cor: string,
    ){}

    get cor(){
        return this._cor;
    }

    public comer(){
        console.log(`O ${this.nome}, está comendo!!!`);
    }

    mostrarDetalhes(){
        return `Os detalhes do ${this.nome} são: 
        Raça: ${this.raca},
        Cor: ${this.cor},`;
    }

    protected fazerSom(){
        console.log("O animal está fazendo um som!!!");
    }
}