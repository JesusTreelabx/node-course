// ** Modulo que contiene funcionalidad muy util para trabajar con sistema de archivos.
// Todos los metodos de este modulo son asincronos por defecto.
// Pero puedes escoger versiones sincronas de estos metodos agregando Sync a sus nombres.

const fs = require ('fs');


// *LEER UN ARCHIVO.

// fs.readFile('index.html', 'utf-8', (err, contenido) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(contenido);
//     }
// }); 




// *CAMBIAR EL NOMBRE DE UN ARCHIVO.

// fs.rename('index.html', 'main.html', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Nombre cambiado exitosamente.');
// });




// *AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO.

// fs.appendFile('index.html', '<p>Hola</p>', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Archivo actualizado.');
// });




// *REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO.

// fs.writeFile('index.html', 'Contenido nuevo.', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Contenido reemplazado exitosamente.')

// });




// *ELIMINAR ARCHIVOS

fs.unlink('indextest.html', (err) => {;
    if (err) {
        throw err;
    }
    console.log('Archivo eliminado.');
});