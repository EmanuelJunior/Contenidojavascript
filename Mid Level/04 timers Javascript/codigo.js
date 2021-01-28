/*
Los temporadizadores en javascript nos permiten hacer diferentes trabajos
con tiempo.

setTimeout(funcion, tiempoDeEjecucion en ms) --> Este metodo tiene la funcionalidad
de ejecutar una funcion pero luego de que pase el tiempo de duracion que le indiquemos.
el primer parametro es ya sea el nombre de la funcion a una funcion flecha directamente,
y el segundo parametro se refiere al tiempo en que se ejecutara la funcion este tiempo debe
ser dado en milisegundos.

clearTimeout(variable asignada al temporizador) --> Este metodo como lo indica tiene la funcionalidad
de dejar de ejecutar un temporizador para esto al temporizador debemos agregarlo a una variable para de
esta manera poder parar la ejecucion de este.

setInterval(funcion, cada cuanto se ejecuta la funcion) --> Este metodo es practicamente lo mismo que
setTimeout, la unica diferencia es que este se ejecuta infinitamente, este tiene dos parametros el primero
para la funcion y el segundo es para indicar cada cuanto se ejecutara dicha funcion infinitas veces.

clearInterval(variable asignada al intervalo) --> Este metodo es lo mismo que clearTimeout su funcionalidad
es parar el intervalo la forma de pararlo es darle un valor a nuestro intervalo y con este metodo dentro de los
parentesis pondremos el nombre de la variable para de esta manera parar su ejecucion.
*/

/*SETIMEOUT(funcion, tiempo)*/

const temporizador = setTimeout(()=>{
    let nombre = prompt("Dime tu nombre");
    let apellidos = prompt("Dime tus apellidos");
    document.write("Nombre: "+nombre+'<br>'+"Apellidos: "+apellidos);
}, 3000);

/*CLEARTIMEOUT(temporizador)*/ 

clearTimeout(temporizador);

/*SETINTERVAL(funcion, tiempo para ejecutarse)*/

function guardarDatos(){
    let nombre, apellidos, edad;
    nombre = prompt("Diga su nombre");
    apellidos = prompt("Cuales son sus apellidos");
    edad = parseInt(prompt("Por ultimo digite su edad"));

    document.write("<hr>");

    document.write("Nombre: "+nombre+'<br>');
    document.write("Apellidos: "+apellidos+'<br>');
    document.write("Edad: "+edad+'<br>');

    document.write("<hr>");

}

const intervalo = setInterval(guardarDatos, 5000);

/*TIMEOUTINTERVAL*/
setTimeout(()=>{clearInterval(intervalo);}, 40000)
