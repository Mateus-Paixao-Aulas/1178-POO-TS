// Revisão Polimorfismo

// O "I" no começo do nome da interface é para identificar como interface, muito comum em projeto utilizando TS

// DTO, Data Transfer Object

interface PagamentoDto {
    descricao: string;
    processar(valor: number): RetornoProcessamentoDto;
}

interface RetornoProcessamentoDto {
    descricao: string; 
    valor: number;
}

class Pagamento {
    static transacoes: RetornoProcessamentoDto[] = [];

    static realizarPagamento(metodoPagamento: PagamentoDto, valor: number) {
        const metodoTransacao = metodoPagamento.processar(valor);
        Pagamento.transacoes.push(metodoTransacao);
    }
}

class PagamentoCartao implements PagamentoDto {
    descricao = 'Cartão de crédito';

    static count = 0;
    private id: number;

    constructor(){
        this.id = ++PagamentoCartao.count;
    }

    processar(valor: number) {
        // implementação do método
        console.log(`Processando pagamento de R$${valor} por ${this.descricao}`);
        return {
            id: this.id,
            descricao: this.descricao,
            valor
        }
    }
}

class PagamentoBoleto implements PagamentoDto {

    descricao = 'Gerando Boleto';

    static count = 0;
    private id: number;

    constructor(){
        this.id = ++PagamentoCartao.count;
    }

    processar(valor: number) {
        // implementação do método
        console.log(`${this.descricao} no valor de R$${valor}`);

        return {
            id: this.id,
            descricao: this.descricao,
            valor
        }
    }
    
}

class PagamentoPix implements PagamentoDto {

    descricao = 'Via PIX';
    static count = 0;
    private id: number;

    constructor(public readonly chave: string){
        this.id = ++PagamentoCartao.count;
    } // Polimorfismo

    processar(valor: number) {
        // implementação do método
        console.log(`Processando pagamento de R$${valor} ${this.descricao}`)
        return {
            id: this.id,
            descricao: this.descricao,
            valor
        }
    }
    
}

class PagamentoCripto implements PagamentoDto {
    descricao = 'Cripto Moeda';

    // Cenário real, variável de ambiente, settings...
    private static readonly token = 'd7c26140-e055-41a4-9c1c-ed862be08b75';

    static count = 0;
    private id: number;

    constructor(){
        this.id = ++PagamentoCartao.count;
    }

    processar(valor: number) {
        // implementação do método
        console.log(`Processando pagamento de R$${valor} por ${this.descricao}`);
        console.log(`O token é: ${PagamentoCripto.token}`);

        return {
            id: this.id,
            descricao: this.descricao,
            valor
        }
    }

}

const pagamentoCartao = new PagamentoCartao();
const pagamentoBoleto = new PagamentoBoleto();
const pagamentoPix = new PagamentoPix('meu-email@ada.com');

const pagamentoCripto = new PagamentoCripto();

// pagamentoPix.chave = '123456789'; // Cannot assign to 'chave' because it is a read-only property.

// console.log(pagamentoPix);
// console.log('----');

// console.log(PagamentoCripto.token); // Property 'token' is private and only accessible within class 'PagamentoCripto'

Pagamento.realizarPagamento(pagamentoCartao, 100);
Pagamento.realizarPagamento(pagamentoBoleto, 200);
Pagamento.realizarPagamento(pagamentoPix, 300);
Pagamento.realizarPagamento(pagamentoCripto, 50);
Pagamento.realizarPagamento(pagamentoCripto, 999);

console.log(Pagamento.transacoes);

// console.log(pagamentoCartao,
//     pagamentoBoleto,
//     pagamentoPix,
//     pagamentoCripto);