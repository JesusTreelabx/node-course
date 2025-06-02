const http = require('http');
const cursos = require('./cursos');

const server = http.createServer((req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            return manejarlaSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            console.log(`El metodo usado no puede ser manejado por el Server: ${method} `); 
    }
}); 

function manejarlaSolicitudGET(req, res) {
    const path = req.url;

    if  (path === '/') {
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    } else if (path === '/cursos') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404;
    res.end('El recurso solicitado no existe...');
}


function manejarSolicitudPOST(req, res) {
    const path = req.url;
    
    if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    }
}

const PUERTO = 3000;

server.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});