/*METODO DE ARRAY*/

/*
NombreArray.pop() -> Este metodo de array funciona para borrar el ultimo elemento
de nuestro array creado. EJEMPLO

let frutas = ["Banano","Naranja","Guanabana"];
let resultado = frutas.pop(); -> Esto lo que hara es borrar el elemento
de nuestro array llamado -> "Guanabana"

Osea que si miramos lo que tiene ya nuestro array de frutas seria unicamente
el indice 0 => "Banano" y el indice 1 => "Naranja"

NombreArray.shift() -> Este metodo de array funciona para borrar el primer elemento
de nuestro array creado. EJEMPLO

let frutas = ["Banano","Naranja","Guanabana"];
let resultado = frutas.shift(); -> Esto lo que hara es borrar el elemento
de nuestro array llamado -> "Banano"

Osea que si miramos lo que tiene ya nuestro array de frutas seria unicamente
el indice 1 => "Naranja" y el indice 2 => "Guanabana"

NombreArray.push() -> Este metodo la funcionalidad que tiene es la de agregar
mas elementos a un array, dentro de .push("NombreElemento","NombreDeOtroElemento")
y de esta manera podemos agregar mas elementos a un array cada elemento a agregar
puede estar separado por coma para identificar de que es otro elemento del array. EJEMPLO

let frutas = ["Banano","Naranja","Guanabana"];
let resultado = frutas.push("Sandia", "Mango")

Ahora lo que tendra este array sera
=> frutas = ["Banano","Naranja","Guanabana","Sandia", "Mango"]
De esta manera podremos agregar diferentes elementos a nuestro array
desde metodos y no en la creacion del array.

NombreArray.reverse() -> Este metodo la funcionalidad que tiene es invertir
el orden de los elementos de un array. EJEMPLO

let numeros = [1, 2, 3, 4, 5];
numeros.reverse(); -> Lo que devolvera sera lo siguiente ->
numeros = [5, 4, 3, 2, 1];

NombreArray.unshift() -> Este metodo es parecido a .push() debido a que su funcionalidad
tambien es agregar elementos al array pero en vez de agregar elementos al array al final,
este lo que hace es agregar elementos arl array pero al principio, osea que todos los elementos
que agregemos empezaran desde la posicion 0.

let frutas = ["Banano","Naranja","Guanabana"];
let resultado = frutas.unshift("Sandia", "Mango")

Ahora lo que tendra este array sera
=> frutas = ["Sandia", "Mango","Banano","Naranja","Guanabana"]
De esta manera podremos agregar diferentes elementos a nuestro array
pero al principio de este.

NombreArray.sort() -> Este metodo tiene como funcionalidad organizar un array ya sea
alfabeticamente o tambien si el array es de numeros lo organiza ascendentemente
EJEMPLO

numeros = [3 , 5, 8, 1];

resultado = numeros.sort(); -> Esto devolvera lo siguiente
numeros = [1, 3, 5, 8] Debido a que organizo los numeos correctamente y en orden
Esto mis pasara si es un array de texto organizara alfabeticamente.

NombreArray.splice() -> Este metodo tiene multiples funcionalidades debido a que sirve
tanto para borrar como para agregar elementos se utiliza de la siguiente manera

numeros = [3,5,8,2,4];

PARA ELIMINAR:

resultado = numeros.splice(INDICE COMIENZO, INDIE HASTA DONDE ELIMINAR);
resultado = numeros.splice(3, 4); Esto lo que haria es eliminar los elementos
del array desde la posicion 3 hasta la 4 por lo que quedaria de esta manera el array

numeros = [3, 5, 8] -> Los que se eliminaron fueron el 2 => 3 y el elemento 4 => 4

PARA AGREGAR:

resultado = numeros.splice(1, 0, 23, 45, 56);

Aca lo que indicamos es que empezara a agregar los elementos desde la posicion 1 , despues
ponemos 0 que indica que son elementos indefinidos los que vamos a agregar y por ultimo van
los elementos que estan separados por comas y son cada uno de los elementos a agregar.

numeros = [3, 23, 45, 56, 5, 8, 2, 4];

NombreArray.join("Seperador de elementos") -> Este metodo funciona para convertir de array a cadena
de texto, este es diferente a toString() debido a que este le puedes indicar el separador de cada indice
del array EJEMPLO

numeros = [2, 3, 5, 7, 1, 8];
resultado = numeros.join(" - ");

Si nosotros mostramos por pantalla la cadena de texto nos devolvera lo siguiente
RESULTADO: 2 - 3 - 5 - 7 - 1 - 8

Asi logramos decir que convirtiera el array en una cadena ademas de que cada elemento va a estar
separado por un guion, nosotros podemos poner cualquier separacion para los elementos del array por ejemplo
pódemos utilizar <br> o cualquier etiqueta para hacer una separacion entre cada elemento del que era el array.

NombreArray.slice() -> Este metodo funciona para mostrar ciertos elementos de el array que nosotros indiquemos
a traves del indice, el primer parametro es el primer indice que queremos que se muestre y el segundo parametro
es hasta que indice queremos que se muestre los elementos, este ultimo parametro el indice que pongamos no estara
incluido los anteriores a este si. EJEMPLO

nombres = ["Emanuel","Santiago","Oscar","Veronica"];
resultado = nombres.slice(1, 3);

Esto lo que nos mostrara es los elementos del indice 1 y el 2, el 3 no porque ese numero no esta incluido

Si queremos mostrar todos los elementos del array pero no sabemos hasta que indice va, lo que podemos hacer es ponre
el primer parametro que indique desde donde va a mostrar y no poner el segundo parametro eso indicara que muestre todos
desde la posicion inical dada hasta mostrar todos los elementos.

Los metodos de cadena de texto toString(), indexOf(), lastIndexOf() y includes() -> Estos metodos funcionan de igual manera
para los arrays ya que cumplen la misma funcionalidad la diferencia es que si queremos buscar algun elemento o saber si existe
tendremos que poner el texto completamente para que identifique el indice en donde se encuentra o si en verdad existe en el array.

NombreArray.filter(nombreAponer) -> Este metodo y el metodo .forEach() este funciona para recorrer un array y asi mismo crear una funcion
dentro de este metodo hay que tener en cuenta que esta funcion debe tener un parametro, ese parametro va hacer el recorrido de cada uno
de los elementos del array en pocas palabras cuando escribamos ese parametro nos mostrara cada uno de los elementos del array, es
practicamente un ciclo. EJEMPLO

nombres = ["Emanuel","Santiago","Oscar","Veronica"];

Forma 1 -> funcion flecha UNA LINEA

nombres.filter((nombre) => document.write(`<hr>${nombre}</hr>`));
nombres.forEach((nombre) => document.write(`<hr>${nombre}</hr>`));

Forma 2 -> funcion flecha

nombres.filter((nombre)=>{
document.write(`<hr>${nombre}</hr>`);
document.write('<hr>');
});

nombres.forEach((nombre)=>{
document.write(`<hr>${nombre}</hr>`);
document.write('<hr>');
});

Forma 3 -> funcion

nombres.filter(function(nombre){
document.write(`<hr>${nombre}</hr>`);
document.write('<hr>');
});

nombres.forEach(function(nombre){
document.write(`<hr>${nombre}</hr>`);
document.write('<hr>');
});

El metodo forEach() y filter() son casi identicos la unica diferencia entre estos dos es que en el metodo filter()
podemos crear una variable que contenga logica con filter eso lo que nos permitira que al llamar dicha variable solo
se muestre los elementos que cumplan dichas condiciones ejemplo.

resultado = nombres.filter(nombre=> nombre.length > 5);

document.write('<hr><br>'+resultado);

Aca estamos creando una variable que recorre el array de nombre y que solo al mostrar la variable resultado mostrara unicamente
los elementos que tengan un tamaño de mas de 5 caracteres, aca podemos poner cualquier tipo de condicion y unicamente se mostraran
los elementos que la cumplan por esta razon es mejor utilizar filter en vez de forEach() debido a que filter() es mucho mas completo
y tiene muchas mas posibilidades.

*/


/*METODO POP*/

let nombres = ["Emanuel","Santiago","Oscar"];

document.write(`Array Original: <b>${nombres}</b><br>`)

let resultado = nombres.pop();

document.write(`Elemento Removido: <b style='color: red'>${resultado}</b><br>`);
document.write(`Resultado: <b>${nombres}</b><hr>`);

/*METODO SHIFT*/

nombres = ["Emanuel","Santiago","Laura"];
document.write(`Array Original: <b>${nombres}</b><br>`)

resultado = nombres.shift();

document.write(`Elemento Removido: <b style='color: red'>${resultado}</b><br>`);
document.write(`Resultado: <b>${nombres}</b><hr>`);

/*METODO PUSH*/

nombres = ["Manuel","Rodolfo","Stefan"];
document.write(`Array Original: <b>${nombres}</b><br>`)

resultado = nombres.push("Robert","Damian");

document.write(`Elementos Agregados: <b style='color: green'>${nombres}</b><hr>`);

/*METODO REVERSE*/

let numeros = [1, 2, 3, 4, 5];
document.write(`Array original: <b>${numeros}</b><br>`);

resultado = numeros.reverse();
// numeros.reverse();

document.write(`Array Invertido: <b style='color: green'>${resultado}</b><hr>`);

/*METODO UNSHIFT*/

numeros = [1, 2, 3];
document.write(`Array Original: <b>${numeros}</b><br>`);

resultado = numeros.unshift(9, 8, 7);

document.write(`Elementos agregados en el array al principio: <b>${numeros}</b><hr>`)

/*METODO SORT*/

numeros = [3, 5, 8, 4, 6, 1, 2];
document.write(`Orden original de elementos: <b>${numeros}</b><br>`);

resultado = numeros.sort();

document.write(`Elementos organizados correctamente: <b style='color: green'>${numeros}</b><hr>`);

/*EJEMPLO 2*/

nombres = ["Santiago","Laura","Juan","Emanuel","Ana"];
document.write(`Orden original de elementos: <b>${nombres}</b><br>`);

resultado = nombres.sort();

document.write(`Elementos organizados alfabeticamente: <b style='color: green'>${nombres}</b><hr>`);

/*METODO SPLICE*/

nombres = ["Emanuel","Santiago","Oscar","Juan","Ester","Mariana"];

document.write(`Array Original: <b>${nombres}</b><br>`)

resultado = nombres.splice(3, 5);

document.write(`Nombres eliminados de posicion 3 a la 5: <b>${nombres}</b><hr>`)

/*EJEMPLO 2*/

nombres = ["Emanuel","Santiago","Oscar","Juan","Ester","Mariana"];

resultado = nombres.splice(1, 0, "Robert","Ezequiel");

document.write(`Nombres Agregados desde la posicion 5: <b>${nombres}</b><hr>`);

/*METODO JOIN*/

nombres = ["Paulina","Valentina","Jessica","Mike","Louis","Veronica"];

resultado = nombres.join("<hr><b>Nombre:</b> ");

document.write(`<hr><b>Nombre:</b> ${resultado}`);

/*METODO SLICE*/

nombres = ["Paulina","Valentina","Jessica","Mike","Louis","Veronica"];

resultado = nombres.slice(1);

document.write('<hr>'+resultado+'<hr');

/*METODO FILTER*/

nombres = ["Paulina","Valentina","Jessica","Mike","Louis","Veronica"];

/*FORMA 1*/

nombres.filter(nombre => document.write('<br><hr>'+nombre+'<br>'));

/*FORMA 2*/

nombres.filter(nombre =>{
document.write(`<br><br><hr>Nombres: <b>${nombre}</b>`);
})

/*FORMA 3 */

nombres.filter(function(nombre){
document.write(`<br><br><hr>Nombres: <b style='color:green'>${nombre}</b>`);
})

/*FORMA 4 CON LOGICA*/

resultado = nombres.filter(nombre=> nombre.length > 5);

document.write('<hr><br>'+resultado);

/*METODO FOREACH*/

nombres = ["Paulina","Valentina","Jessica","Mike","Louis","Veronica"];

/*FORMA 1*/

nombres.forEach(nombre=>document.write(`<hr><br>${nombre}<br></hr>`));

/*FORMA 2*/

nombres.forEach(nombre =>{
document.write(`<br><br><hr>Nombres: <b>${nombre}</b>`);
})

/*FORMA 3 */

nombres.forEach(function(nombre){
document.write(`<br><br><hr>Nombres: <b style='color:purple'>${nombre}</b>`);
})

