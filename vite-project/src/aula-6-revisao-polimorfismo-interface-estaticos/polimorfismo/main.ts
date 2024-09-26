// Polimorfismo
import { Cachorro } from "./entidades/Cachorro";
import { Gato } from "./entidades/Gato";

const cachorro1 = new Cachorro("Cachorro", "Beagle", "Preto", 'Médio');
const cachorro2 = new Cachorro("Tobby", "Beagle", "Preto", "Grande");
const gato = new Gato("Lua", "Siames", "Branco e Preto", true);

console.clear();
console.log(cachorro2.mostrarDetalhes());
console.log(gato.mostrarDetalhes());

// fazerSom protected
// cachorro1.fazerSom(); // Property 'fazerSom' is protected and only accessible within class 'Animal' and its subclasses.