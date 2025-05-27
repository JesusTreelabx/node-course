function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de YisusCapetillo`);
        setTimeout(() => {
            if (producto === 'bebida') {
                resolve ('Ordenando una bebida berry pearls de Starbucks');
            } else {
                reject('¡Este producto no esta disponible!');
            }
        }, 4000);
    }); 
}

function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por tu compra. Disfruta tu bebida de Starbucks');
        }, 4000 );
    });
}

ordenarProducto('bebida')
    .then(respuesta => {
        console.log('Respuesta, recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(error => {
        console.log(error);
    });
