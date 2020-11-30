/*ARRAYS*/

/*
Un array es un conjunto de datos en pocas palabras es la forma de crear
una variable que no solo tiene un dato sino multiples datos nosotros para
crear un array, lo hacemos con log corchetes [] dentro de estos corchetes
van a ir los diferentes datos que se van a introducir en este array por ejemplo
["banano", "fresa", "naranja"] -> cada vez que pongamos una coma (,) indicara
que estamos creando otro dato en nuestro arreglo, la forma de acceder a estos 
datos es por medio de su indice, el indice ya viene declarado por si mismo,
estos indices normalmente son numeros empiezan por 0, 1, 2, 3 ... y asi 
susesivamente podremos acceder a los diferentes datos, nunca los indices empiezan
desde 1 esa es una gran cosa que hay que tener en cuenta EJEMPLO

let nombres = [0 => "Emanuel", 1 => "Santiago", 2 => "Oscar"];

document.write(nombres[0]);

La forma de acceder a los diferentes indices del array es, poniendo el nombre del
array y entre corchetes el indice al que queremos acceder de esta manera accederemos
especificamente a ese dato.

Si queremos acceder a todos los datos y mostrarlos simplemente bastara con escribir el
nombre del arreglo esto funciona unicamente con un array normal ya que con un array 
asociativo seria totalmente diferente.

*/

let frutas  = ["banano", "fresa", "naranja", "uvas"];

document.write('<hr><h1>Arrays Comúnes</h1><hr>')

document.write(`${frutas[0]} <hr>`);
document.write(`${frutas[1]} <hr>`);
document.write(`${frutas[2]} <hr>`);
document.write(`${frutas[3]} <hr>`);


/*ARRAYS ASOCIATIVOS*/

/*
los arrays asociativos es la forma de nosotros indicar el indice para accder a un determinado
dato de esta manera no tendremos que acceder con los valores predeterminados como [0], [1], [2]
si no que nosotros podemos indicar el nombre de cada uno para accdere a dicho valor, la forma
de hacer un array asociativo es la siguiente.

let procesador{
	nombre: "EmanuelPC",
	procesador: "Intel Core I9 9900k",
	ram: "32GB",
	espacio: "2TB"
}

*/

let pc = {
	nombre: "EmanuelPC",
	procesador: "Intel Core I9 9900k",
	ram: "64GB",
	espacio: "2TB"
}

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

document.write("<h1>Arrays asociativos</h1>")

let frase = `El nombre de mi PC es: ${nombre} <br>
			 El procesador es: ${procesador} <br>
			 La memoria ram es: ${ram} <br>
			 El espacio en disco es: ${espacio} <br>
			 <hr>
`;

document.write(frase);
console.log(frase);













