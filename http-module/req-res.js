// request & response (req-res)

const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('===> req (solicitud)');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    console.log('===> res (respuesta)');
    console.log(res.statusCode);   // 200 OK
    res.statusCode = 404;
    console.log(res.statusCode);  // 404 Not Found

    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders);

    res.end('Hola, Mundo');
});

const puerto = 3000;

server.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});