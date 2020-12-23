/*HISTORIA DE COFLA 5*/

/*EJERCICIO 1*/

let materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}


const inscribir = (alumno,materia)=>{
	personas = materias[materia];
	if (personas.length >= 21) {
		document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
	} else {
		personas.push(alumno);
		if (materia == "fisica") {
			materias = {
		        fisica: personas,
		        programacion: materias['programacion'],
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}
		else if (materia == "programacion") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: personas,
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}else if (materia == "logica") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: personas,
		        quimica:materias['quimica']
	        }
		}else if (materia == "quimica") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: materias['logica'],
		        quimica: personas
	        }
		}
		document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`);
	}
}

document.write(materias['fisica'] + "<br>")

inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");

document.write("<br>" + materias['fisica'])

/*EJERCICIO 2*/

let tp = "100 minutos hacer trabajos prácticos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";



console.log("TAREAS");

for (var i = 0; i < 14; i++) {
	if (i == 0) {
		console.group("semana 1")
	}
console.groupCollapsed("dia " + (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i == 7) {
	console.groupEnd();
	console.groupCollapsed("semana 2")
}
}

console.groupEnd();
console.groupEnd();