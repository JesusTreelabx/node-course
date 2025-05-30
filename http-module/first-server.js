//Módulo HTTP

const http = require('http');

const server = http.createServer((req, res) => {  // (req) Parámetro que contiene la solicitud HTTP, (res) Paarámetro que representa la respuesta HTTP
    console.log('Solicitud nueva');
    res.end('Hello, Welcome to Treelabx IT Consulting & Solutions');
});

server.listen(3000, () => {
    console.log('El servidor esta escuchando...');
});