/*TRY & CATCH*/

/*
Con try & catch podemos desactivar los errores por defecto de javascript y crear
nuestras propias exepciones mostrando los errores creados por nosostros para esto
se trabaja con try & catch, hay que tener en cuenta que ambas hay que crearlas si queremos
generar nuestras propias exepciones, esto solo funciona si estan acompañadas ambas.

try--> En este bloque de instruciones ira el error producido.

catch(nombreError) --> y en el catch dentro de los parentesis ira el nombre del error al que estara
relacionada nustra exepcion este puede ser cualquier nombre, dentro del bloque aparecera el error que queremos
mostrar de esta manera se puede invalidar las exepciones de javascript y crear nuestros propios errores en nuestro codigo.

Hay que tener en cuenta que los errores de sintasis no estan contemplados dentro del manejo de errores de javascript.

Existen dos tipos de catch:

1. Catch condicional --> Este se refiere a un catch que tiene dentro una condicional.

2. Sin condicional dentro es llamado --> Catch incondicional.

finally --> Este permite siempre ejecutar un error sin importar si este existe o no, pero siempre va a ser ejecutado

throw dentro de try --> Este permite relacionar la variable que esta dentro de catch con nuestra expeciion dentro de throw,
en throw puede ir objetos arreglos y diferentes tipos de datos y ya a traves del catch con la variable relacionada podemos mostrar
dicho error.

DEPURACION DE CODIGO --> Es un proceso mediante nosotros limpiamos el codigo, corregimos errores y hasta resolvermos
bugs y fallos, quedandonos mas limpio y mucho mas organizado y sin errores.


MOMENTOS EN LOS QUE SE PUEDE USAR TRY

El try se utiliza en momentos muy especificos en donde por ejemplo tenemos un proyecto muy grande y puede que haya una posibilidad de error
en este caso podemos utilizarlo para saber que nos salto el error, en los casos en donde no deberiamos mostrar dicho error es en casos como 
en proyectos en donde sepamos que va haber un error en estos casos es mucho mejor depurar nosotros mismos el codigo sin la necesidad de utilizar
try.
*/

const pruebaTry = ()=>{
	try{
		return 1;
	}
	catch(e){
		return 2;
	}
	finally{
		return 3;
	}
}

console.log(pruebaTry());

try {
	dsjkaldjsa
} catch(error) {
	console.log("Lo siento, ocurrió, un error de referencia");
} finally {
	console.log("Me vale igual me muestro")
}