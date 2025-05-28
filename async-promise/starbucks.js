function ordenarProducto(producto, categoria, tamano = null) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto}${tamano && categoria !== 'alimentos' ? ` (${tamano})` : ''} de YisusCapetillo`);

        // Lista de productos disponibles con tamaños y precios
        const menu = {
            'bebidas calientes': {
                'espresso': {
                    descripcion: 'Ordenando un Espresso caliente de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'espresso americano': {
                    descripcion: 'Ordenando un Espresso Americano caliente de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'espresso doppio': {
                    descripcion: 'Ordenando un Espresso Doppio caliente de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                }
            },
            'bebidas frias': {
                'lemon black tea': {
                    descripcion: 'Ordenando un Lemon Black Tea frío de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'mango dragonfruit': {
                    descripcion: 'Ordenando un Mango Dragonfruit frío de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'strawberry acai': {
                    descripcion: 'Ordenando un Strawberry Acai frío de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'brown sugar shaken espresso helado': {
                    descripcion: 'Ordenando un Brown Sugar Shaken Espresso Helado de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'toasted vainilla shaken espresso helado': {
                    descripcion: 'Ordenando un Toasted Vainilla Shaken Espresso Helado de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'cappuccino helado con cold foam': {
                    descripcion: 'Ordenando un Cappuccino Helado con Cold Foam de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'helado shaken lemon black tea': {
                    descripcion: 'Ordenando un Helado Shaken Lemon Black Tea de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                }
            },
            'frappuccino': {
                'mocha blanco frappuccino': {
                    descripcion: 'Ordenando un Mocha Blanco Frappuccino de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'espresso frappuccino': {
                    descripcion: 'Ordenando un Espresso Frappuccino de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'mocha frappuccino': {
                    descripcion: 'Ordenando un Mocha Frappuccino de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'caramel frappuccino': {
                    descripcion: 'Ordenando un Caramel Frappuccino de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'cookies & cream frappuccino': {
                    descripcion: 'Ordenando un Cookies & Cream Frappuccino de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'piñacoco yogurt frappuccino': {
                    descripcion: 'Ordenando un Piñacoco Yogurt Frappuccino de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'cajeta cream frappuccino': {
                    descripcion: 'Ordenando un Cajeta Cream Frappuccino de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'vainilla cream frappuccino': {
                    descripcion: 'Ordenando un Vainilla Cream Frappuccino de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'chocolate cream frappuccino': {
                    descripcion: 'Ordenando un Chocolate Cream Frappuccino de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                },
                'matcha cream frappuccino': {
                    descripcion: 'Ordenando un Matcha Cream Frappuccino de Starbucks',
                    tamanos: { 'mediano': 55, 'grande': 77, 'venti': 95 }
                }
            },
            'alimentos': {
                'baguette suprema': { descripcion: 'Ordenando una Baguette Suprema de Starbucks', precio: 85 },
                'sándwich de pavo y panela': { descripcion: 'Ordenando un Sándwich de Pavo y Panela de Starbucks', precio: 90 },
                'grilled cheese sándwich': { descripcion: 'Ordenando un Grilled Cheese Sándwich de Starbucks', precio: 90 },
                'panini 3 quesos': { descripcion: 'Ordenando un Panini 3 Quesos de Starbucks', precio: 95 },
                'breakfast muffin': { descripcion: 'Ordenando un Breakfast Muffin de Starbucks', precio: 70 },
                'baguette española': { descripcion: 'Ordenando una Baguette Española de Starbucks', precio: 85 },
                'bagel con pechuga y queso': { descripcion: 'Ordenando un Bagel con Pechuga y Queso de Starbucks', precio: 80 },
                'dona caramelo': { descripcion: 'Ordenando una Dona Caramelo de Starbucks', precio: 45 },
                'pan de elote': { descripcion: 'Ordenando un Pan de Elote de Starbucks', precio: 50 },
                'pastel de zanahoria': { descripcion: 'Ordenando un Pastel de Zanahoria de Starbucks', precio: 65 },
                'cheesecake brulee con frambuesa': { descripcion: 'Ordenando un Cheesecake Brulee con Frambuesa de Starbucks', precio: 75 },
                'panque de linaza': { descripcion: 'Ordenando un Panque de Linaza de Starbucks', precio: 60 },
                'panque de limón': { descripcion: 'Ordenando un Panque de Limón de Starbucks', precio: 60 },
                'muffin de chocochips': { descripcion: 'Ordenando un Muffin de Chocochips de Starbucks', precio: 55 },
                'muffin de blueberry': { descripcion: 'Ordenando un Muffin de Blueberry de Starbucks', precio: 55 },
                'mini cronut chocolate blanco': { descripcion: 'Ordenando un Mini Cronut Chocolate Blanco de Starbucks', precio: 40 },
                'cronut de chocolate': { descripcion: 'Ordenando un Cronut de Chocolate de Starbucks', precio: 50 },
                'dona de chocolate': { descripcion: 'Ordenando una Dona de Chocolate de Starbucks', precio: 45 },
                'struddel manzana': { descripcion: 'Ordenando un Struddel Manzana de Starbucks', precio: 60 },
                'pan de queso': { descripcion: 'Ordenando un Pan de Queso de Starbucks', precio: 50 },
                'cheesecake roulet': { descripcion: 'Ordenando un Cheesecake Roulet de Starbucks', precio: 70 },
                'croissant de mantequilla': { descripcion: 'Ordenando un Croissant de Mantequilla de Starbucks', precio: 45 }
            }
        };

        // Verificar si la categoría y el producto existen
        if (!menu[categoria.toLowerCase()] || !menu[categoria.toLowerCase()][producto.toLowerCase()]) {
            reject('¡Este producto o categoría no está disponible!');
            return;
        }

        const item = menu[categoria.toLowerCase()][producto.toLowerCase()];

        if (categoria.toLowerCase() !== 'al imentos') {
            // Para bebidas, validar tamaño con setTimeout
            if (!tamano || !item.tamanos[tamano.toLowerCase()]) {
                reject('¡Tamaño no válido! Opciones: Mediano, Grande, Venti');
                return;
            }
            setTimeout(() => {
                resolve({
                    descripcion: `${item.descripcion} (${tamano})`,
                    precio: item.tamanos[tamano.toLowerCase()]
                });
            }, 4000);
        } else {
            // Para alimentos, procesar inmediatamente sin setTimeout
            if (tamano) {
                console.log('Nota: Los alimentos no requieren tamaño, se ignorará el tamaño especificado.');
            }
            resolve({
                descripcion: item.descripcion,
                precio: item.precio
            });
        }
    });
}

function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log('Procesando respuesta...');
        console.log(`Producto: ${respuesta.descripcion}, Precio: $${respuesta.precio}`);
        setTimeout(() => {
            // Extraer el nombre del producto del mensaje (tercer elemento)
            const nombreProducto = respuesta.descripcion.split(' ')[2].toLowerCase();
            resolve({
                mensaje: `Gracias por tu compra. Disfruta tu ${nombreProducto} por $${respuesta.precio} en Starbucks`,
                precio: respuesta.precio
            });
        }, 3000);
    });
}

// Nueva función para manejar múltiples productos y calcular el total
function procesarMultiplesProductos(pedidos) {
    return Promise.all(pedidos.map(pedido => 
        ordenarProducto(pedido.producto, pedido.categoria, pedido.tamano)
            .then(respuesta => procesarPedido(respuesta))
    ))
    .then(resultados => {
        const total = resultados.reduce((sum, resultado) => sum + resultado.precio, 0);
        console.log('\n--- Resumen del Pedido ---');
        resultados.forEach(resultado => console.log(resultado.mensaje));
        console.log(`Total a pagar: $${total}`);
        return `Pedido completado. Total: $${total}`;
    })
    .catch(error => {
        console.log(error);
        return error;
    });
}

// -Ejemplo de uso: pedir múltiples productos
// Descomenta para probar varios productos

const pedido = [
    { producto: 'caramel frappuccino', categoria: 'frappuccino', tamano: 'grande' },
    { producto: 'cookies & cream frappuccino', categoria: 'frappuccino', tamano: 'venti' },
    { producto: 'mango dragonfruit', categoria: 'bebidas frias', tamano: 'venti' },
    { producto: 'helado shaken lemon black tea', categoria: 'bebidas frias', tamano: 'Venti' },
    { producto: 'sándwich de pavo y panela', categoria: 'alimentos' },
    { producto: 'panini 3 quesos', categoria: 'alimentos' },
    { producto: 'muffin de blueberry', categoria: 'alimentos' },
    { producto: 'croissant de mantequilla', categoria: 'alimentos' }
];

procesarMultiplesProductos(pedido)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));










// -Ejemplo de uso: pedir un solo producto
// Descomenta para probar un solo producto

// ordenarProducto('cookies & cream frappuccino', 'frappuccino', 'venti')
//     .then(respuesta => {
//         console.log('Respuesta recibida');
//         console.log(respuesta.descripcion);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada.mensaje);
//         console.log(`Total a pagar: $${respuestaProcesada.precio}`);
//     })
//     .catch(error => {
//         console.log(error);
//     });