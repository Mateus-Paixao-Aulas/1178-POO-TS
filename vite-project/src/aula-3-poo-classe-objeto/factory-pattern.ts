// Factory Pattern (Pesquisa Individual)
class Admin {}
class Editor {}
class Usuario2 {}

function usuarioFactory(tipo: "admin" | "editor"){
    switch (tipo) {
        case "admin":
            return new Admin();
        case "editor":
            return new Editor();
        default:
            return new Usuario2();
    }
}

const usuario = usuarioFactory("admin");
const usuario2 = usuarioFactory("editor");

console.clear();
console.log(usuario);
console.log(usuario2);