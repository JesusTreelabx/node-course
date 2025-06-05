const express = require('express');
const server = express();

const {infoCursos} = require('./cursos');



// Routing (conocido como Direccionamiento o enrutamiento)
server.get('/', (req, res) => {
    res.send('Mi primer servidor con Express. Cursos 💻 OKAAAAAAAAAAYYY!!!​.');
});


server.get('/api/cursos', (req, res)  => {
    res.send(JSON.stringify(infoCursos));
});




// Ejemplo de cursos de Programacion
server.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});


server.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`);
    }


    res.send(JSON.stringify(resultados));
});


server.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));

});






// Ejemplo de Matematicas
server.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});


server.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.send(JSON.stringify(resultados));

});


const PUERTO = process.env.PORT || 3000;

server.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando el puerto ${PUERTO}...`);
});
