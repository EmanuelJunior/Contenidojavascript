let nombres = ()=>{
	let nombre1, nombre2, nombre3, nombre4;
	nombre1 = prompt("Diga el nombre 1");
	nombre2 = prompt("Diga el nombre 2");
	nombre3 = prompt("Diga el nombre 3");
	nombre4 = prompt("Diga el nombre 4");

	let nombres = {
		1: `${nombre1}`,
		2: `${nombre2}`,
		3: `${nombre3}`,
		4:  `${nombre4}`
	};

	document.write("<h1>Lista de nombres</h1><hr>");

	for(nombre in nombres){
		document.write(`<b>${nombre}.</b> ${nombres[nombre]}<hr>`);
	}
}

// nombres();
// nombres();

/*EJERCICIO 1 -> FORMA 1 HECHA POR MI :D*/

const maquinaFiesta = hora =>{
	let edad = prompt("Porfavor escriba su edad para poder acceder a nuestra fiesta");
	// let hora = prompt("Digame la hora de llegada a la fiesta");
	let entrada, val_edad, free, resultado;

	if(edad >= 18){
		val_edad = true;
	}else{
		val_edad = false;
	}

	if(hora >= 2 && hora <= 7){
		free = true;
	}else{
		free = false;
	}

	if(val_edad){

		entrada = `Entrada exitosa debera pagar debido a que la hora no esta en los limites para ser una entrada gratis, la hora es: ${hora}pm`;

		if(free){
			entrada = `Entrada exitosa no debera pagar nada porque la hora esta entre los limites en donde es gratis, la hora es: ${hora}am`;
			entrada = entrada.concat("<hr>Además ha entrado porque eres mayor de edad");
		}

	}else{
		entrada = `No tiene la edad suficiente para entrar a la fiesta, debido a que eres menor de edad, su edad es: ${edad}`;
	}

	resultado = document.write("<h1>Maquina validación de invitados</h1>".concat(`<hr>El resultado de su entrada es: <b>${entrada}</b><hr>`));

	return resultado;
}
// maquinaFiesta(3);


/*EJERCICIO 1 -> FORMA 2 HECHA POR EL PROFESOR*/


let free = false;

const validarCliente = (time)=>{
	let edad = prompt("¿Cual es tu edad?");

	if(edad >= 18){
		if(time >= 2 && time < 7 && free == false){
			alert("podes pasar gratis porque sos la primera persona despúes de las 2AM");
			free = true;
		}else{
			alert(`son las ${time}:00Hs podes pasar, pero tienes que pagar la entrada`);
		}
	}else{
		alert("Mira papu, sos menor de edad por ende no vas a pasar, MAQUINOLA");
	}
}

/*
La forma de crear un array es simplemente creando una variable que se igual
a corchetes de esta forma identificamos que dicha variable sera igual a array.
*/


let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "P") {
	    alumnosTotales[p][1]++;
	}
}


for (i = 0; i < 30; i++) {
	for (alumno in alumnosTotales) {
	tomarAsistencia(alumnosTotales[alumno][0],alumno);
	}
}


for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    ________Ausencias: <b>${30 - alumnosTotales[alumno][1]} </b>`;
	if (30 - alumnosTotales[alumno][1] > 18) {
	resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
	} else {
	resultado+= "<br><br>"
	}
	document.write(resultado)
}