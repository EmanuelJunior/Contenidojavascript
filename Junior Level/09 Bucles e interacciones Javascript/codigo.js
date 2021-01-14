/*BUCLES*/

/*
WHILE

Este bucle es muy parecido a if, la diferencia que 
los bucles tienen como funcionalidad repetirse incontables
veces hasta que una condición sea falsa, por ejemplo
el bucle while hay una condicion si esta condicion es verdadera
lo que pasara es que se repetira el blouque de instrucciones
las veces que sea necesaria hasta que la condicion sea 
falsa y de esta manera salga de el bucle.

*/

let numeroWhile = 0;

document.write(`<h1>Bucle While empieza desde: ${numeroWhile}</h1>`)

while(numeroWhile < 10){
	numeroWhile++;
	document.write(`${numeroWhile} <hr>`);
}

/*
DO WHILE

La difetencia con el while es que primero se va a ejecutar el
bloque de instrucciones y luego de esto se va a preguntar por
la condición sin importar si la condición se cumple de igual
manera se ejecutara una vez.

*/

let numeroDoWhile = 0;

document.write(`<h1>Bucle Do While empieza desde: ${numeroDoWhile}</h1>`)

do{
	document.write(`${numeroDoWhile} <hr>`);
	numeroDoWhile++;
}while(numeroDoWhile <= 5);

/*SENTENCIA BREAK EN EL BUCLE WHILE*/

/*El break es muy bueno a la hora de parar un bucle debido
a que si se ejecuta este automaticamente se terminara el
bucle, un ejemplo puede ser que por ejemplo si hacemos un
bucle while que tenga como condicion que se muestre un
numero 1000 veces pero en vez de esto queremos que se muestre
unicamente 10 lo que podemos hacer es hacer un if en donde
preguntemos si el numero es igual a 10 y si este es el caso
pondremos un break; y de esta manera habremos mostrado unicamente
el numero hasta 10.*/

let numeroBreak = 0;

document.write(`<h1>Sentencia Break; para poder finalizar un bucle</h1>`)

while(numeroBreak < 1000){
	numeroBreak++;
	document.write(`${numeroBreak} <hr>`);

	if(numeroBreak == 10){
		document.write("<b>Fin</b><hr>")
		break;
	}
}

/*BUCLE FOR*/

/*
El bucle for esta dividido por tres partes, 1 primera parte
que es la declaración e inizializacion es donde creamos una
variable, la segunda parte es la condición que permitira entrar
o no entrar al bucle y la ultima parte es la iteración en pocas
palabras es el incremento o decremento de la variable.
*/

/*Sentencia continue*/

/*
Esta sentencia es parecida al break; debido a que tambien para
el bloque de instrucciones pero en este caso unicamente una vez
lo que hace en si es que si hay un continue; automaticamente se
saltea el bloque de instrucciones y sigue con el siguiente,
por ejemplo si tenemos un bucle que muestre los numeros del
1 al 20 y no queremos que muestre el 12 entonces lo que podemos
hacer es crear un if () -> preguntando si el numero es igual 
a 12 entonces pondremos continue y de esta manera no mostraremos
el numero 12 y el bucle seguira con su rumbo claramente siempre
y cuando el condcianal if este antes de mostrar el número.
*/

document.write("<h1>Bucle For Javascript</h1>");

for(let i = 0; i < 6; i++){
	document.write(i + "<hr>");
}

document.write("<b>Segundo ejemplo</b><hr>");

for(let i = 8; i >= 0; i--){
	document.write(i + "<hr>");
}

document.write("<b>Tercer ejemplo con sentencia continue;</b><hr>");

for(let i = 0; i < 9; i++){

	if(i == 4){
		continue;
	}

	document.write(i + "<hr>");

}

/*FOR IN Y FOR OF*/

/*
Estas son divisiones del bucle for que permiten recorrer un array

for in -> El for in sirve para mostrar el indice de todos los array
este funcione dando primero un alias al array en donde al llamar este 
alias estaremos mostrando todos los indices de los arreglos, for in
es el unico que sirve también para recorrer arrays asociativos.
EJEMPLOS

for(alias in nombreArray){
	document.write(alias); -> esto mostrara todos los indices de dicho
	array que se esta recorriendo.
}

EJEMPLO 2

for(alias in nombreArray){
	document.write(nombreArray[alias]) -> esto mostrara el contenido de
	dicha posicion (indice), mostrando de esta manera cada uno de los elementos
	que tiene el array
}

Hay que tener en cuenta que a la hora de mostrar el contenido de los elementos de
un array asociativo unicamente se dejaran mostrar con el for in de la manera anterior.

El for in sirve tanto para mostrar indices como para mostrar el contenido de dichas posiciones
indices, cabe aclarar que este sirve tanto para mostrar el indice y el contenido de los arrays
normales y de los arrays asociativos.


for of -> El for of es utilizado y tiene la funcionalidad de mostrar el contenido de los indices
(posicion) de los elementos de un array este también funciona con un alias que al mostrarlo mostrara
el contenido de las posiciones de el array, una de las diferencias con el for in es que este permite
mostrar el contenido de los indices pero unicamente de arrays comunes ya que si queremos mostrar el 
contenido de arrays asociativos no lo mostrara.

EJEMPLO2

for(alias of nombreArray){
	document.write(alias) -> Esto mostrara el contenido de todos los indices que tiene el array, claramente
	solo de arrays comunes y no de arrays asociativos.
}

CONCLUSIONES

-El for in se crea un alias que muestra el indice, en cambio el for of crea un alias solo para mostrar los valores
de dicho array

-El for in a parte de mostrar el indice tambien se puede utilizar para mostrar el contenido.

-El for in tiene otra funcionalidad y es la de mostrar tanto el indice como los valores de un array asociativo

-Claramente el alias del for in siempre mostrara el indice pero si mezclamos el nombreArray con el alias
de esta manera se muestra el contenido -> nombreArray[alias] = valores Array.

-El for of solo solo mostrara los valores de un array comun, ya que de un asociativo no mostrara.


*/

/*
LABEL

En todos los ciclos se les pueden asignar un nombre para identificar dicho ciclo y de esta manera podemos utilizar
las diferentes sentencias para los ciclos como continue y break.

La forma de poner estos nombres a los diferentes bucles es colocando estos nombres antes de cada bucle de esta manera


nombreBucle:
for(condicion){
	Bloque instrucciones
}

De esta manera podemos poner el nombre del bucle escribiendo el nombre + dos puntos (:) y el bucle.
*/


document.write("<h1>FOR IN y FOR OF</h1><hr>");

names = ["Luisa", "Erika", "Valentina", "Valeria"];

fruits ={
	fruta1: "Banano",
	fruta2: "Fresa",
	fruta3: "Mango",
	fruta4: "Mora"
}

document.write("<b>Ejemplo1 con array asociativo FOR IN</b><hr>")

for(fruit in fruits){
	document.write(`El indice es: ${fruit}, el contenido es => ${fruits[fruit]}<hr>`);
}

document.write("<b>Ejemplo2 con array común FOR IN</b><hr>");

for(name in names){
	document.write(`El indice es ${name}<hr>`);
}

document.write("<b>Ejemplo3 con array común FOR OF sacando contenido de indices</b><hr>");

for(name of names){
	document.write(`El contenido es: ${name}<hr>`);
}

/*EJEMPLO COMPLEJO*/

document.write("<h3>Ejemplo Complejo</h3><hr>")

let array1, array2, array3, arrayMadre;

array1 = ["Emanuel", "Santiago", "Luisa", "Mariana", "Valentina", "Geraldine"];

array2 = ["Banano", "Moras", "Fresas", "Durazno"];

array3 = ["PHP", "Python", "Javascript", "Java", "C#", "C++"];

arrayMadre = [array1, array2, array3, "Colombia", "Medellin"];


for(array in arrayMadre){

	if(array > 2){
		document.write(`${arrayMadre[array]}<hr>`);
	}
	

	if(array == 0){

		document.write("<b>Nombres Array</b><hr>");

		for(contenido of array1){

			if(contenido == "Santiago"){
				continue;
			}

			document.write(`${contenido}<hr>`);
		}
	}

	if(array == 1){

		document.write("<b>Frutas Array</b><hr>");

		for(contenido of array2){

			if(contenido == "Durazno"){
				break;
			}

			document.write(`${contenido}<hr>`);	
			
		}
	}

	if(array == 2){

		document.write("<b>Lenguajes Programación Array</b><hr>");

		for(contenido of array3){

			if(contenido == "Java"){
				continue;
			}

			if(contenido == "C#"){
				continue;
			}

			document.write(`${contenido}<hr>`);
		}
	}




}





