/*
SENTENCIA SWITCH

La sentencia switch es una sentencia que permite basado en ciertas condiciones
entrar o no en ciertos bloques de instrucciones con la finalidad de poder validar
una experesion y verificar su contenido.

OTRA DEFINICION

La declaración switch evalúa una expresión, comparando el valor de esa expresión
con una instancia case , y ejecuta declaraciones asociadas a ese case , así como
las declaraciones en los case que siguen.

Si lo vamos a comparar con el else if obviamente es mucho mejor if a cuestion de recursos
debido a que es mucha mas eficaz, pero la expresion switch en ciertos casos concretos puede
ser mucho mejor porque podemos entender mejor el codigo que estamos.

La sentencia switch esta constituida por varias partes, la primera que es la que evalua la expresion,
esta va dentro de los parentesis al crear switch despues debemos abrir el bloque de instrucciones,
dentro de este encontramos los case 1: en donde definiremos los diferentes casos en los que tendra nuestro
valor a verificar dentro de los case siempre al finalizar el codigo debemos de colocar break; para de esta manera
evitar que el codigo se siga validando, en pocas palabras para finalizar la sentencia.

al igual que en el condicional if en esta sentencia tambien podemos poner un else que indica que ninguna de las anteriores
condiciones se cumplio, la manera en la que se hace esto en la sentencia switch es con default: // bloque de intrucciones,
este cumple exactamente la misma funcionalidad que el else.
*/

/*FORMA SWITCH*/

let frutas = "Banano";

switch(frutas){
	case "Banano":
		console.log("Esta fruta es amarga");
		alert("Es banano");
		break;
	case "Pera":
		console.log("Tiene forma de calabaza");
		alert("Es pera");
		break;
	case "Manzana":
		console.log("Los primeros humanos pecaron comiendola");
		alert("Es manzana");
		break;
	default: 
		alert("No es ninguna");
}

/*FORMA IF ELSE*/

/*
Hay que tener en cuenta algo muy interesante en la condicion if y es 
que no necesitamos poner llaves en nuestro codigo siempre y cuando el codigo
que se va a ejecutar dependiendo de la condicion si solo es un solo codigo podremos
hacer esto directamente de esta manera nos podemos ahorrar abrir
corchetes y cerrarlos directamente, y evitamos gastar muchos mas recursos.


DENTRO DEL FOR

Esto mismo que pasa con el if, tambien pase con el ciclo for o while en donde si solo 
es un comando el que se esta ejecutando, entondes en este caso no necesitamos poner llaves
y esto permitira que nuestro codigo tenga menos recursos.
*/

frutas = "Manzana";

if(frutas == "Banano") console.log("Esta fruta es amarga");

else if(frutas == "Pera") console.log("Tiene forma de calabaza");

else console.log("Los primeros humanos pecaron comiendola");


/*IF NORMAL*/

if(frutas == "Banano") {
	console.log("Esta fruta es amarga");
	alert("Es banano")
} else if(frutas == "Pera") {
	console.log("Tiene forma de calabaza");
	alert("Es pera")
} else if(frutas == "manzana") {
 	console.log("Los primeros humanos pecaron comiendola");
 	alert("Es manzana");
} else {
	alert("No es ninguna");	
}

/*PRUEBA*/
let variable = false;
let pais;
let contador = 0;

while(variable === false){
	pais = parseInt(prompt("1 si es de España, 2 Estados Unidos, 3 Colombia, 4 Brasil"));

	switch(pais){
	case 1:
		alert("España");
		variable = true;
	break;

	case 2:
		alert("Estados Unidos");
		variable = true;
	break;

	case 3: 
		alert("Colombia");
		variable = true;
	break;

	case 4:
		alert("Brasil");
		variable = true;
	break;

	default:
		alert("Se ha equivocado de valor");
		contador++;
	}

	if(contador > 0 && contador == 1) alert ("Llevas fallando en la encuesta "+contador+' vez');

	else if(contador > 1 && contador < 6) alert ("Llevas fallando en la encuesta "+contador+" veces");

	else if(contador >= 6 && contador < 11) alert ("Estas bien llevas muchas veces fallando: "+contador+" veces has fallado :(");

	else if(contador >= 11) alert("Te expulsare por dañarme la pagina escoria humana");
}


alert("Encuesta de nacionalidad guardada correctamente");




