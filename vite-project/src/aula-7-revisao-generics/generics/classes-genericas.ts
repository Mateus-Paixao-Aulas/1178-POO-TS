interface IUsuario {
    id: number;
    nome: string;
    idade: number;
    apelidos: Array<string>;
}


class Repositorio<L> {
    public items: L[] = [];

    adicionar(item: L) {
        this.items.push(item);
    }
}

const repositorio = new Repositorio<IUsuario>();

repositorio.adicionar({id: 1,nome: 'Tiago',idade: 23, apelidos: ['Ti']});
repositorio.adicionar({id: 2,nome: 'Rodrigo',idade: 23, apelidos: ['Ro']});
repositorio.adicionar({id: 3,nome: 'Guilherme',idade: 23, apelidos: ['Gui']});

const listaNumeros = new Repositorio<number>();


listaNumeros.adicionar(1);
listaNumeros.adicionar(2);
listaNumeros.adicionar(3);
console.log(repositorio.items);
console.log(listaNumeros.items);