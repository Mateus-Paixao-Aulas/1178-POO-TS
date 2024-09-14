// import { chegar, ola, tchau } from "./helpers.js";
import MeuHelper, { chegar, ola, tchau } from "./helpers.js";
// problema encontrados
// 1 syntax de importação diferente do node utilizamos esModules no front
// 2 preciso adicionar o .js pois o navegador não entende o .ts
console.log(ola("1234"));
console.log(tchau("1234"));
console.log(chegar());
console.log(MeuHelper());
