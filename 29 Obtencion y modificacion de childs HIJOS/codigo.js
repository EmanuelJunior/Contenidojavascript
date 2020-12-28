/*
OBTENCION Y MODIFICACION DE CHILDS (HIJOS)

PROPIEDADES:

contenedor.firstElementChild; -> La funcionalidad de esta propiedad es devolver el primer elemento hijo HTML del contenedor. 

contenedor.lastElementChild; -> La funcionalidad de esta propiedad es devolver el ultimo elemento hijo HTML del contenedor.

contenedor.children; -> La funcionalidad de esta propiedad es devolver absolutamente todos los elementos hijos HTML del contenedor en un nodeList.
hay que tener en cuenta que al no ser un array y ser un nodeList no se puede recorrer ni con filter ni con forEach, solo unicamente con for in, o for of.
de otra manera nos dara un error porque es una lista de nodos.

contenedor.firstChild; -> La diferencia de esta propiedad con la propiedad firstElementChild, es que esta propiedad devuelve no el primer elemento html hijo
sino el primer nodo que esta dentro del contenedor, esto en pocas palabras es un text que son los diferentes espacios que dejamos para organizar nuestro codigo
esto es considerado como text -> en pocas palabras es la tabulacion y los espacios que dejamos hay que tener en cuenta que este no solo cuenta los elementos si
no estos espacios que se dejan para organizar el codigo dentro de cada contenedor html.

contenedor.lastChild; -> Devuelve el ultimo nodo de el contenedor ya sea un elemento html o un espacio (tabulacion).

contenedor.childNodes; -> Devuleve un nodeList -> lista de nodos en donde se guardaran cada uno de los elementos hijos html ademas de los espacios (tabulaciones)
que estan dentro del contenedor.

*/

const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.firstElementChild;
const ultimoHijo = contenedor.lastElementChild;
const todosHijos = contenedor.children;

for(hijo of todosHijos){
	console.log(hijo+'<hr>');
}

console.log(primerHijo);
console.log(ultimoHijo);
console.log(todosHijos);