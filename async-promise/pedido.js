const statusPedido = () => {
    return Math.random() < 0.8;
};

//for (let i =0; i < 10; i++) {
//    console.log(statusPedido());
//};

const miPedidoDePizza = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (statusPedido()) {
            resolve('¡Pedido exitoso! Su Pizza está en camino.');
        } else {
            reject ('¡Ocurrio un error. porfavor intente nuevamente.')
        }
    }, 3000);
});

const manejarPedido = (mensajeDeConfirmacion) =>  {
    console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
}; 

// miPedidoDePizza.then(manejarPedido, rechazarPedido);

miPedidoDePizza
    .then(manejarPedido)
    .catch(rechazarPedido);