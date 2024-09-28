console.clear();

import { Carrinho } from "./entidades/Carrinho";
import { Produto } from "./entidades/Produto";
import { Roupa } from "./entidades/Roupa";

const produto1 = new Produto('1', 'Notebook', 3000, 'Notebook muito muito bom!!!');
produto1.aplicarDesconto(10);

const produto2 = new Produto('2', 'Celular', 1500, 'Nokia super mega power forte!!!');

const produto3 = new Produto('3', 'Livro Legal', 80, 'Um livro muito legal!');

const produto4 = new Roupa('4', 'Camisa Massa', 79, 'Uma camisa descolada');

const carrinho = new Carrinho("carrinho1");

produto1.nome = "Notebook Muito Muito Bom";

carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);
carrinho.adicionarProduto(produto4);
carrinho.removerProduto(produto3);

console.clear();

produto4.mostrarTamanhos();
console.log(carrinho.produtos);

console.log(`Quantidade total: ${carrinho.quantidadeTotal}`);
console.log(`Valor total: R$ ${carrinho.valorTotal}`);

// console.log(Roupa.totalRoupas); // Property 'totalRoupas' is private and only accessible within class 'Roupa'.
Roupa.mostrarQuantidade();