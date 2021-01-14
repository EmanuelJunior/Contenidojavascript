/*CONDICIONALES JAVASCRIPT*/

/*
If 

EL if es un condicional que funciona con una condicion si esta condición
devuelve true lo que pasara es que la condción realizara un bloque de 
instrucciones, si esta condición da false lo que pasara es que habra un 
else que en pocas palabras significa si la condición no se cumple hara otros
bloques de instrucciones.

También esta en el if else que esta en el condcional if que es una validación que 
permite validar otro condición si el if no da true podemos poner cuantas veces queramos
if else para validar ciertas cosas hasta que la condición de true if else es la forma de
evitar hacer un if despues un else y dentro un if esto lo evitamos directamente con el:
if else(condición) . EJEMPLO

if(condición){
	Bloque instrucciones si la condición da true
}else{
	Bloque de instrucciones si la condición da false
}

EJEMPLO 2

if(condición){
	Bloque instrucciones si la condición da true
}else if(condición 2 si la primera condición no da true){
	Bloque de instrucciones de la segunda condición
}else{
	Bloque de instrucciones si ninguna de las dos condiciones
	anteriores dio true.
}

EJEMPLO 3 sin IF ELSE

if(condición){
	Bloque instrucciones si la condición da true
}else{

	if(condición 2 si la primera condición no da true){
		Bloque de instrucciones de la segunda condición
	}else{
		Bloque de instrucciones si ninguna de las dos condiciones
		anteriores dio true.
	}

}

De esta manera hacemos lo mismo que if else pero de una manera mucho
más larga y pude que de muchos errores a la hora de saber que llaves 
cerrar y que llaves no estan cerradas.

*/

let nombre = "Ramirez";

if(nombre == "Emanuel"){
	alert(`Tu nombre es ${nombre}`);
}else if(nombre == "Santiago" || nombre == "Ramirez"){
	alert(`Tu nombre es ${nombre}`);
}else{
	alert("Tu nombre debe ser otro");
}