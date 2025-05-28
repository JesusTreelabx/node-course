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


async function realizarPedido(producto) {
    try {    
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('bebida');