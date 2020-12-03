/*METODOS DE CADENA*/

/*
Concat() -> este metodo lo que hace es juntar una o mas
cadenas devolviendo una cadena nueva combinada con las demas.

startsWith() -> este metodo lo que hace es verificar si el comienzo
de una cadena es igual a otra cadena EJEMPLO 

cadena = "Emanuel es un joven";
cadena2 = "Emanuel desarrolla una app";

resultado = cadena.startsWith(cadena2);

Esto devolveria true -> debido a que el comienzo
de la primera cadena es igual a la de la segunda cadena EJEMPLO2 

cadena = " Emanuel es un joven";
cadena2 = "Emanuel desarrolla un dispositivo web";

Esto devolveria false -> debido a que el comienzo
de la primera cadena hay un espacio lo cual en la cadena 2
no hay ese espacio, puede er que haya la misma palabra pero
este metodo verifica todo.

endsWith() -> este metodo hace lo mismo que startWith la diferencia
es que en vez de verificar el comienzo de dos cadenas lo que hace
es verifica la ultima palabra de dos cadenas verificando si son
iguales o no EJEMPLO

cadena_Verificar.endsWith(cadena_Comparar);

includes() -> Este metodo no verfica si al comienzo a el final dos cadenas
son identicas, este metodo lo que hace es verificar si en las dos cadenas
hay una concidencia de palabras y si existe esa concidencia devolvera true,
de lo contrario false.

Hay que tener en cuenta que la cadena a comparar debe tener una cadena exacta
de lo que hay en la cadena a verificar, de lo contrario devolvera false. EJEMPLO

cadena1 = "Cadena de string que funciona para verificar coincidencias";
cadena2 = "string que";

resultado = cadena1.includes(cadena2); -> devolvera true porque en la cadena 2 hay coincidencias
con la cadena que se esta verificando que es la primera debido a que exactamente la cadena2 tiene
coincidencia con la cadena1.

indexOf() -> este metodo lo unico que hace es indicar en que numero de letra se encuentra la palabra
con la que estamos buscando coincidencias, es decir sirve exactamente para saber en que letra esta la 
palabra que se esta buscando este indica la posicion en conteo pero del comienzo de la primera palabra.
EJEMPLO

cadena1 = "En esta cadena estamos buscando la palara";
cadena2 = "palabra";

resultado = cadena1.indexOf(cadena2); -> Esto devolvera el numero: 35 - debido a que es la posicion de la
palabra que se esta buscando, por ejemplo si por alguna razon la palabra no existe en la cadena en donde
se esta buscando lo que pasara es que devolvera -1 que indica que no existe tal palabra o tal cadena.

Hay que tener en cuenta que esta va a mostrar la primer coincidencia que haya en la palabra por ejemplo
si tenemos una cadena que dice varias veces (buenas) lo que pasara es que mostrara la posicion de la primera
palabra que se encuentre en dicha cadena.

lastIndexOF() -> Este metodo en vez de mostrar la posicion de la primera palabra que se este buscando lo que 
hara es mostrar la posicion de la palabra que se este buscando pero la ultima palabra que hay en toda la cadena
con esa coincidencia.

padStart() -> El método padStart() rellena la cadena actual con una cadena dada (repetida eventualmente) de modo
que la cadena resultante alcance una longitud dada. El relleno es aplicado desde el inicio (izquierda) de la cadena
actual. EJEMPLO

cadena1 = "BuenosDias";

resultado = cadena1.padStart(22, "Buenardo :D") -> Esto devolvera: Buenardo :D BuenosDias;

El primer dato que hay que darle es la longitud que queremos que tenga la cadena, y despues una coma y la palabra o
cadena con la que queremos rellenar, hay que tener en cuenta que esta cadena a agregar, se agregara al principio osea 
izquierda en la cadena actual

padEnd() -> El padEnd() método rellena la cadena actual con una cadena determinada (repetida, si es necesario) para que la cadena
resultante alcance una longitud determinada. El relleno se aplica desde el final de la cadena actual. EJEMPLO

cadena1 = "BuenosDias";

resultado = cadena1.padStart(22, " Buenardo :D") -> Esto devolvera: BuenosDias Buenardo :D;

En pocas palabras es lo mismo que el padStart() pero en vez de rellenar con la cadena que le dimos al principio este lo que hace
es rellenar pero al final de la cadena a rellenar.

Es decir tanto padStart() como padEnd() rellenan una cadena ya sea al comienzo o al final pero esto no quiere decir que la cadena
que le pasemos este complete puede ser que este acortada o que se repita eso dependera de cuanto indiquemos el tamaño que tendra nuestr
cadena.

repeat() -> Este metodo tiene la funcionalidad de repetir cadenas las veces que nosotros le indiquemos. EJEMPLO

cadena1 = "1234 ";

resultado = cadena1.repeat(3); -> El resultado sera el siguiente: (1234 1234 1234) debido a que le indicamos que se repitiera
la cadena 3 veces.

split() -> Es un metodo que tiene como funcionalidad convertir una cadena en un array que esta separado de acuerdo a un indicador
que elijamos para separar dicha cadena en diferentes partes. Lo que va en comillas es el separador que indicaremos para separar nuestra
cadena y convertir nuestra cadaena en un array EJEMPLO

cadena1 = "Dias Noches Tardes Mañanas";

resultado = cadena1.split(" ");

resultado[] -> Dias => 0, Noches => 1, Tardes => 2, Mañanas => 3;

En esto se convirtio nuestra cadena en un array con diferentes indices y estas palabras se separaron de esta manera debido a que indicamos
que se separaran por espacios lo que indica que cada espacio creara un indice con un contenido de la cadena

document.write(resultado[1]) -> Esto devolvera Noches porque el indice 1 de el array es Noches.

substring() -> Este metodo es como el metodo assoc() en php la funcionalidad que tiene es devolver una posicion inicial y otra final de una
cadena, por ejemplo escogemos 0 y la posicion 10 esto lo que hara es mostrarnos en la cadena el contenido que tiene desde la posicion 0 hasta
la posicion 10 de la cadena EJEMPLO

cadena1 = "Buenos dias amigos";
resultado = cadena1.substring(0, 8) -> Esto no devolvera -> (Buenos d) debido a que esa es la posicion que le pedimos que devolviera.

En pocas palabras la primera parte del metodo substring() es el inicio y la segunda es el final lo que indica lo que nos va a mostrar 
exactamente de la cadena.

toLowerCase() -> Este metodo lo que hace es convertir una cadena a letra minuscula EJEMPLO

cadena1 = "Buenas tardes";
resultado = cadena1.toLowerCase(); -> buenas tardes

toUpperCase() -> Este metodo lo que hace es convertir una cadena a letra mayuscula EJEMPLO

cadena1 = "Buenas tardes";
resultado = cadena1.toUpperCase(); -> BUENAS TARDES

toString() -> Este metodo lo que permite hacer es convertir cualquier variable en un string. EJEMPLO

variable = 12550;
resultado = variable.toString(); -> "12550";  

trim() -> Este metodo lo que hace es eliminar los espacios tanto de la derecha como de la izquierda sobrantes
en una cadena de texto -> string. EJEMPLO

cadena1  = "           Hola         ";
resultado = cadena1.trim(); -> "Hola"; 

trimStart() -> Este metodo lo que hace es eliminar los espacios de una cadena de texto pero al principio 
EJEMPLO

cadena1  = "           Hola         ";
resultado = cadena1.trimStart(); -> "Hola         "; -> Esto devolveria debido a que la funcionalidad es eliminar espacios
sobrantes pero al principio de la cadena.

trimEnd() -> Este metodo lo que hace es eliminar los espacios de una cadena de texto pero al final 
EJEMPLO

cadena1  = "           Hola         ";
resultado = cadena1.trimEnd(); -> "           Hola"; -> Esto devolveria debido a que la funcionalidad es eliminar espacios
sobrantes pero al final de la cadena.

.length -> Esta es una propiedad de las cadenas de texto tiene como funcionalidad devolver el tamaño de una cadena 
de texto. EN NUMEROS. EJEMPLO

cadena1 = "Hola como esta";
resultado = cadena1.length; -> 14 Debido a que si contamos cada letra y espacio este seria el resultado.
*/

let cadena = "Cadena de prueba";
let cadena2 = "Cadena ";

resultado = cadena.concat(cadena2);

document.write(resultado);

resultado2 = cadena.startsWith(cadena2);

document.write(`<hr>${resultado2}`);

let cadena3 = "Muy buenos dias";
let cadena4 = "dias";

resultado3 = '<hr>'+cadena3.endsWith(cadena4)+'<hr>';

document.write(resultado3);

let cadena5 = "Esta es la prueba de busqueda de palabras";
let cadena6 = "prueba";

resultado4 = '<hr>'+cadena5.includes(cadena6)+'<hr>';

document.write(resultado4);

cadena7 = "En esta cadena estamos buscando la palabra";
cadena8 = "palabra";

resultado5 = '<hr>'+cadena7.indexOf(cadena8)+'<hr>';

document.write(resultado5);

cadena9 = "BuenosDias";

resultado6 = '<hr>'+cadena9.padStart(22, "Buenardo :D ")+'<hr>';

document.write(resultado6);

cadena10 = "BuenosDias";

resultado6 = '<hr>'+cadena10.padEnd(22, " Buenardo :D ")+'<hr>';

document.write(resultado6);

cadena11 = "1234 ";
resultado7 = '<hr>'+cadena11.repeat(10)+'<hr>';

document.write(resultado7);

cadena12 = "Amigos Fiesta Drogas Chicas";

resultado8 = cadena12.split(" ");

document.write(resultado8[0]);

cadena13 = "Buenos dias amigos";

resultado9 = '<hr>'+cadena13.substring(0, 9)+'<hr>';

document.write(resultado9);

cadena14 = "BUENOS DIAS CABALLERO";
resultado10 = '<hr>'+cadena14.toLowerCase()+'<hr>';

document.write(resultado10);

cadena15 = "hola mundo desde colombia";
resultado11 = '<hr>'+cadena15.toUpperCase()+'<hr>';

document.write(resultado11);

variable1 = true;
resultado12 = '<hr>'+variable1.toString()+'<hr>';

document.write(resultado12);
























