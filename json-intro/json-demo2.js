let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 24.7,
    "numLikes": 17.2,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
}

//console.log(infoCurso);




// **Pasando de un Objeto -> a una Cadena de caracteres
// **Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);


console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);
console.log(infoCursoJSON.titulo);




// **Pasando de Cadena de caracteres -> a un Objeto utilizando la funcion parse()
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);