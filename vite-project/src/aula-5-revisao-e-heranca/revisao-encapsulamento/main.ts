console.clear();

// Revisão UML, Classes e Objetos
// Fluxo de compra

import { Carrinho } from "./entidades/Carrinho";
import { Produto } from "./entidades/Produto";

const produto1 = new Produto('1', 'Notebook', 3000, 'Notebook muito muito bom!!!');
produto1.aplicarDesconto();

const produto2 = new Produto('2', 'Celular', 1500, 'Nokia super mega power forte!!!');

const produto3 = new Produto('3', 'Livro Legal', 80, 'Um livro muito legal!');

const carrinho = new Carrinho("carrinho1");

produto1.nome = "Notebook Muito Muito Bom";

carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);
carrinho.removerProduto(produto3);

console.clear();
console.log(produto1.id);

// produto1.preco = -2; // Error: Não deve ser negativo!
// console.log(produto2);
// console.log(carrinho);

console.log(carrinho.produtos);

console.log(`Quantidade total: ${carrinho.quantidadeTotal}`);
console.log(`Valor total: R$ ${carrinho.valorTotal}`);
