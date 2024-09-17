class Lista {
    nome: string;
    items: string[] = [];

    constructor(nome: string){
        this.nome = nome;
    }

    adicionarItem(item: string){
        this.items.push(item);
    }

    // excluir
    // editar
    // marcar como finalizado
}

const listaCasa = new Lista("Afazeres de Casa");
listaCasa.adicionarItem("Lavar louça");
listaCasa.adicionarItem("Cuidados do gato");

console.log(listaCasa.items);