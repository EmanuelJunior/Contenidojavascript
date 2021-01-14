/*HISTORIA DE COFLA 4*/

/*EJERCICIO1*/

/*OPERACIONES MATEMATICAS SIMPLES Y COMPLEJAS*/

class Operaciones {

	suma(num1, num2){
		this.res = num1 + num2;
		return alert(this.res);
	}

	resta(num1, num2){
		if(num1 > num2){
			this.res = num1 - num2;
		}else{
			this.res = num2 - num1;
		}
	return alert(this.res);
	}

	multiplicacion(num1, num2){
		this.res = num1 * num2;
		return alert(this.res);
	}

	division(num1, num2){
		if(num1 > num2){
			this.res = num1 / num2;
		}else{
			this.res = num2 / num1;
		}
		return alert(this.res);
	}

	potencia(num1, num2){
		this.res = Math.pow(num1, num2);
		return alert(this.res);
	}

	raizCuadra(num3){
		this.res = Math.sqrt(num3);
		return alert(this.res);
	}

	raizCubic(num3){
		this.res = Math.cbrt(num3);
		return alert(this.res);
	}

}

class Control extends Operaciones{

	resultado(){
		alert("Calculadora Compleja con todo tipo de operaciones".toUpperCase());

		this.resul = parseInt(prompt("Elija 1 suma, 2 resta, 3 multiplicacion, 4 division, 5 Raiz cuadrada, 6 Raiz cubica, 7 Potencia"));
		this.obj = new Operaciones();
		let num1, num2, num3;

		if(this.resul >= 1 && this.resul < 5){
			num1 = parseInt(prompt("Diga el numero 1"));
			num2 = parseInt(prompt("Diga el numero 2"));
		}else if(this.resul == 7){
			num1 = parseInt(prompt("Diga el numero base"));
			num2 = parseInt(prompt("Diga el numero de exponencia"));
		}else{
			num3 = parseInt(prompt("Diga el numero"));
		}

		if(this.resul == 1){
			this.obj.suma(num1, num2);
		}else if(this.resul == 2){
			this.obj.resta(num1, num2);
		}else if(this.resul == 3){
			this.obj.multiplicacion(num1, num2);
		}else if(this.resul == 4){
			this.obj.division(num1, num2);
		}else if(this.resul == 5){
			this.obj.raizCuadra(num3);
		}else if(this.resul == 6){
			this.obj.raizCubic(num3);
		}else if(this.resul == 7){
			this.obj.potencia(num1, num2);
		}else{
			alert("ERROR NUMERO INTRODUCIDO INCORRECTO");
		}

	}
}

// const control = new Control();
// control.resultado();

/*SEGUNDO EJERCICIO*/

const materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}
	
const obtenerInformacion = (materia)=>{
	
	if (materias[materia] !== undefined){
		return [materias[materia],materia,materias];
	} else {
		return materias;
	}
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);

if (informacion !== false) {
	let profesor = informacion[0][0];
	alumnos = informacion[0];
	alumnos.shift();
	document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
		Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
		`);
}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion) {
		if (informacion[info].includes(alumno)) {
			cantidadTotal++;
			clasesPresentes.push(" "+ info);
		}
	}
	return `<b style='color:blue'>
	${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
	<br><br>
	`;
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("pedro"))

/*TERCER EJERCICIO*/

let materias1 = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}


const inscribir = (alumno,materia)=>{
	personas = materias1[materia];
	if (personas.length >= 21) {
		document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
	} else {
		personas.push(alumno);
		if (materia == "fisica") {
			materias1 = {
		        fisica: personas,
		        programacion: materias['programacion'],
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}
		else if (materia == "programacion") {
			materias1 = {
		        fisica: materias['fisica'],
		        programacion: personas,
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}else if (materia == "logica") {
			materias1 = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: personas,
		        quimica:materias['quimica']
	        }
		}else if (materia == "quimica") {
			materias1 = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: materias['logica'],
		        quimica: personas
	        }
		}
		document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`);
	}
}

document.write(materias1['fisica'] + "<br>")

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

document.write("<br>" + materias1['fisica']);












