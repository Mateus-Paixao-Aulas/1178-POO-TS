import { DESCONTO_FIXO } from "../constantes";

export class Produto {
    private _id: string;
    private _nome: string;
    private _preco: number;
    private _descricao: string;

    constructor(id: string, nome: string, preco: number, descricao: string){
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._descricao = descricao;
    }

    get id() {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }


    get nome() {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get preco() {
        return this._preco;
    }

    set preco(preco: number) {
        if(preco < 0){
            throw new Error('Não deve ser negativo!');
        }
        this._preco = preco;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(descricao: string) {
        this._descricao = descricao;
    }

    public aplicarDesconto(): void {
        this.preco -= this.preco * (DESCONTO_FIXO / 100);
    }
}
