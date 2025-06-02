const myURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(myURL.hostname); // wwww.ejemplo.org

console.log(myURL.pathname); // /cursos/programacion

console.log(myURL.searchParams); 
console.log(myURL.searchParams.get('ordenar'));
console.log(myURL.searchParams.get('nivel'));





// En este ejemplo 
// (https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1). 
// Ahora, con métodos como:

// myURL.hostname: se obtiene el Dominio (www.ejemplo.org).
// myURL.pathname: se extrae la Ruta (/cursos/programacion).
// myURL.searchParams: se accede a los Parámetros de Búsqueda (ordenar=vistas&nivel=1).
// myURL.searchParams.get('ordenar') 
// myURL.searchParams.get('nivel'): recuperas los valores específicos de los parámetros (vistas y 1, respectivamente).

// Esto muestra cómo el URL Module facilita el manejo de URLs al permitirte desglosar y acceder a sus partes de forma estructurada.