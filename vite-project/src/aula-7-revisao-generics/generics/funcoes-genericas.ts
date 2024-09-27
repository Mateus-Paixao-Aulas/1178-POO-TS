function logInfo<K>(info: K){
    console.log('Logando minha info: ', info)
}

logInfo('Nome do usuário, Mateus');
logInfo(12345678);
logInfo({ nome: `Lucas`, apelidos: ['Lu'] });


async function recuperarDados<T>(url: string) {
    const resposta = await fetch(url);
    const dados: T = await resposta.json();

    return dados;
}

interface IEndereco {
    cep: string
    logradouro: string
    complemento: string
    unidade: string
    bairro: string
    localidade: string
    uf: string
    estado: string
    regiao: string
    ibge: string
    gia: string
    siafi: string
    ddd: string;
  }
  

async function recuperaEndereco() {
    const endereco = await recuperarDados<IEndereco>('https://viacep.com.br/ws/01001000/json/')

    console.log(endereco);
    console.log(endereco.estado);
    console.log(endereco.regiao);
    console.log(endereco.cep);
    console.log(endereco.ibge);
    console.log(endereco.ddd);
    // console.log(endereco.estado);
}

recuperaEndereco();