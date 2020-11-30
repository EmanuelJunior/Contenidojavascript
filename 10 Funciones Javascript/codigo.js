/*FUNCIONES JAVASCRIPT*/

/*
CONCEPTO TECNICO

Las funciones son uno de los bloques de construcción fundamentales en
JavaScript. Una función en JavaScript es similar a un procedimiento —
un conjunto de instrucciones que realiza una tarea o calcula un valor, 
pero para que un procedimiento califique como función, debe tomar alguna 
entrada y devolver una salida donde hay alguna relación obvia entre la 
entrada y la salida. Para usar una función, debes definirla en algún 
lugar del ámbito desde el que deseas llamarla.

Las funciones son un bloque de instrucciones con un nombre propio
que permiten directamente con ese nombre llamar dicha función y este
a su vez realizara un bloque de instrucciones sin importar las veces
que lo llamemos hara el mismo bloque de instrucciones definidas

Para llamar una función solo basta con poner su nombre y parentesis y
parametros si requiere. 

FORMAS DE CREAR UNA FUNCIÓN

1. La primera forma es poniendo la palabra reservada functiion
+ el nombre de la funcion y los parentesis, así.

function prueba(){
	
}

2. La segunda forma es a través de una variable, de tal forma que
creamos una variable que contenga una function y de esta manera también
puede funcionar, ejemplo.

nombreVariable = function(){
	
}

*/

let saludoDia = function(){
	let genero = prompt("Escriba 1 si su genero es masculina y si su genero es femenino 2");
	let nombre = prompt("Digite su nombre completo");

	if(genero == "1"){
		alert(`Buenas como esta caballero ${nombre}`);
	}else if(genero == "2"){
		alert(`Buenas bella dama ${nombre} como esta? `);
	}else{
		alert(`Disculpe ha introducido mal el genero`);
	}
}

// saludoDia();

function saludar(){
	let respuesta = prompt("¡Hola Emanuel! ¿Como fue tu dia?");

	if(respuesta == "bien" || respuesta == "Bien" || respuesta == "BIEN"){
		alert("Me alegro");
	}else{
		alert("Una pena");
	}
}

// saludar();


/*RETURN EN FUNCIONES*/

/*
El return permite devolver un valor de la función
en pocas palabras la funcion es igual a el valor que 
retorna, la funcion, una cosa es lo que hace y otra cosa
diferente es lo que retorna.

Hay que tener en cuenta algo cuando la funcion retorna un
valor automaticamente finalizara la ejecución, osea que si por
alguna razon ponemos primero el return antes que la ejecución 
de las instrucciones entonces automaticamente ninguna de las
instrucciones se ejecutara y unicamente lo que pasara es que 
devolvera el valor a retornar de la función.
*/

function saludo(){
	return "Todo okay";
	alert("Hola mundo desde Colombia");
}

let saludando = saludo();

document.write(saludando);

/*PARAMETROS FUNCIONES*/

/*
Los parametros son importantes debido a que estos nos permiten
reutilizar el condigo de funciones pero con caracteristicas diferentes
Los parametros se definen en los parentesis y cada parametro va a estar 
separado por una coma, estos parametros estan ralacionados con la funcion
lo que permite que dependiendo de los valores que les demos el resultado sea
diferente, hay que tener en cuenta que los parametros unicamente funcionan dentro
de la funcion, y a la hora de llamara a la funcion y definir los parametros,
pero si queremos llamar esos parametros fuera de la funcion nos lanzara un error 
debido a que estos parametros son definidos en las funciónes siendo variables(parametros)
locales osea que solo funcionaran unicamente dentro de dicha función.

En pocas palabras ningun parametro ni ninguna variable de una funcion no funcionara
fuera de la funcion debido a que estos valores son locales y solo funcionan dentro de la funcion
y a la hora de llamar dicha función eso es el scope.
*/

function suma(num1, num2){
	let res = num1 + num2;
	let resultado = document.write(`<hr>${res}<hr>`);
	return resultado;
}

function sumar(num1, num2){
	let res = num1 + num2;
	document.write(res);
	document.write("<br>");
}

function sumando(num1, num2){
	let resultado = num1 + num2;
	return resultado;
}

suma(120, 223);
suma(21, 29);

sumar(10, 5);
sumar(20, 10);

document.write(`<hr>${sumando(10, 20)}<hr>`);

/*FUNCIONES FLECHA*/

/*
Las funciones flecha es una forma diferente de crear funciones
en donde unicamente quitamos la palabra reservada function, en vez
de esto ponemos parentesis, dentro de estos parentesis podemos poner 
los parametros y despues unicamente hacemos una flecha escribiendo
igual + mayor que y esto hara directamente la flecha de esta manera
(=>{}) y por ultimo agregamos los parentesis y ya nos funcionaria, esta
tiene una funcionalidad muy buena cuando solo estamos utilizando un parametro
y es la de que no nos tocaria poner parentesis unicamente el nombre del unico 
parametro + la flecha + bloque de instrucciones y de esta manera es mucho mas
facil crear una funcion.

nombreFuncion = nombre=>{
	let saludo = document.write(`Buenos dias caballero ${nombre}`);
	return saludo;
}

nombreFuncion("Santiago");

Tambien hay algo muy bueno y es que si por ejemplo en la funcion solo hay una linea de instruccion
no nos haria falta si quiera poner parentesis solo poner despues de la flecha esa linea de codigo y de 
esta manera nos evitamos los corchetes, es basicamente como hacer un return automatico por esta razon
es una funcion flecha sencilla.

nombreFuncion = nombre => alert(`Buenos dias caballero ${nombre}`);

nombreFuncion("Emanuel");

Y de esta manera solo hara falta una linea de codigo para crear una funcion sencilla.

Para poder asignarle el nombre a la funcion debemos crear una variable que sea 
igual a la funcion de flecha de esta manera podremos identificar estas funciones

Hay que tener en cuenta que siempre si vamos a crear una funcion de flecha hay que asignarle una variable
para poder llamar de esta forma la funcion.

*/


buenosDias = nombre =>{
	alert(`Buenos dias caballero ${nombre}!`);
}

buenasTardes = nombre => alert(`Buenas Tardes Caballero ${nombre}`);

buenosDias("Emanuel");
buenasTardes("Santiago");















