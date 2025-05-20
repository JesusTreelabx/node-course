// ** Modulo que contiene funcionalidad muy util para trabajar con sistema de archivos.
// Todos los metodos de este modulo son asincronos por defecto.
// Pero puedes escoger versiones sincronas de estos metodos agregando Sync a sus nombres.

const fs = require ('fs');


// *LEER UN ARCHIVO.

console.log('Antes de leer el archivo...');

const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo);

console.log('Despues de leer el archivo...');






// *CAMBIAR EL NOMBRE DE UN ARCHIVO.

fs.renameSync('index.html', 'main.html');

console.log('Despues de cambiar el nombre del archivo...');






// *AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO.

fs.appendFileSync('index.html', '<p>Hola</p>');

console.log('Despues de agregar contenido al archivo...');






// *REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO.

fs.writeFileSync('index.html', 'Contenido nuevo.',);

console.log('Despues de reemplazar el contenido del archivo');





// *ELIMINAR ARCHIVOS

fs.unlinkSync('indextest.html',);

console.log('Despues de eliminar el archivo...');