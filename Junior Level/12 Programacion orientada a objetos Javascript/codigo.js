/*POO -> programación orientada a objetos*/

/*
ABSTRACCION -> Es un concepto que en pocas palabras explica
que debemos intentar comprimir los metodos de la forma mas
resumida posible, recortando todo pero sin dejar las coas
esenciales que debemos hacer.

MODULARIDAD -> Es la capacidad de resolver un problema muy
grande separandolo por diferentes partes. POR EJEMPLO
Tenemos un problema de 100horas, va hacer mas facil resolver
este problema por pedacitos que todo junto.

ENCAPSULAMIENTO -> Esto significa encapsular los datos, osea que
todos los datos esten privados, osea que el usuario no pueda acceder
tan facil y sencillamente a estos.

POLIMORFISMO -> En la POO es la capacidad de crear una propiedad
, método o un objeto que tenga más de una forma distinta de comportarse.
*/

class Animal{
	
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
	}

	verInfo(){
		document.write(this.info + "<hr>");
	}
}

/*HERENCIA*/

/*herencia nos permite heredar una clase, y crear una nueva
la ventaja es que al heredar una clase tenemos acceso a todos
los metodos y atributos lo que hace que podamos reutilzar el codigo de 
una manera mucho mas optima.*/

/*Para poder heredar atributos debemos escribir la palabra reservada super()
y entre parentesis poner los nombres de las propiedades que queramos heredar del
constructor que se ha heredado, ejemplo -> super(nombre, apellidos, nacionalidad)
esto unicamente nos funcionara si estamos en el constructor*/

/*Hay que tener algo muy en cuenta nunca podemos tener un
objeto con el mismo nombre de la clase*/

class Perro extends Animal{
	constructor(especie, edad,color,raza){
		super(especie, edad, color);
		this.raza = null;
	}

	static ladrar(){
		alert("¡WOWWW!");
	}

	set setRaza(newName){
		this.raza = newName;
	}

	get getRaza(){
		return this.raza;
	}
}

/*La propiedad static funciona para poder utilizar metodos
sin la necesidad de crear un objeto, claramente en este metodo 
static -> estatico no podemos utilizar atributos debido a que
no se ha creado el objeto.*/

/*GETTER AND SETTER*/

/*SET -> Sirve para asignarle un valor a un atributo, de la siguiente
manera

class Nombre{
	set setNombre(newName){
		this.nombre = newName;
	}
}

De esta manera podemos indicar que valor tendra un atributo para poder 
asignarle un valor a este fuera de la clase debemos hacer lo siguiente.

CORRECTO -> nombre.setName = "Nombre a agregar";

INCORRECTO -> nombre.setName("Nombre a agregar");

De la segunda manera no se debe de hacer en javascript debido a que set y
get lo que hace es que ya no son metodos lo que creamos por esta razon se 
definen de esta manera.

GET -> Esta sirve despues de haber utilizado set debido a que con get lo que
hacemos es retornar el valor de dicho atributo recibiendo asi el valor que
se le dio en el set, se consigue de la siguiente manera

class Nombre{
	get getNombre(){
		return this.nombre;
	}
}

La forma en que podemos llamar este entre comillas metodo es la siguiente.

Claramente esto va despues de que hayamos creado el objeto de lo contrario
no podremos acceder ni a los setter ni a los getter.

nombre.getNombre;

*/

const perro = new Perro("perro",5,"rojo", "Rotwiler");
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 1, "verde");

perro.setRaza = "Pedro";

document.write(perro.getRaza);

// perro.ladrar();