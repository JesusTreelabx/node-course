function saludar(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar("¡Hola, Mundo!"));

module.exports.saludar = saludar;  //exportar elementos!

