/*CONCATENACION*/

/*
Esta palabra de la programación significa: "unir". Para unir cadenas en 
JavaScript el símbolo de más (+), el mismo operador que usamos para sumar 
números, pero en este contexto lo que permite hacer es unir strings (texto).



 */

let saludo = "¡Hola pedro!";
let pregunta = "¿Como estas?"; 

frase = saludo +" "+ pregunta;

document.write(frase+"<hr>");

/*
Si por ejemplo queremos concatenar dos números y no sumarlos
lo que podemos hacer es agregar un string esto lo que
provoca es que automaticamente el sistema al detectar que
hay un string lo que hace es concatenar y no sumar

Ejemplo:

let numero1 = 53;
let numero2 = 8;

concatenar = ""+ numero1 + numero2;

document.write("<br>"+concatenar);

En este caso lo que se ve es que si por
ejemplo ponemos un texto vacio y lo concatenamos a las
dos variables que tienen numeros lo que pasa es que 
automaticamente el resultao de los dos numeros no sera
sumado si no concatenado dando como resultado 538.

Si no pusieramos la cadena de el string vacio lo que pasa
es que sumaria los números y no los restaria que es lo
que necesitamos.

ERROR:

concatenar = numero1 + numero2; -> 61

Este ejemplo que hicimos anteriormente es denominado
forzar string ya que obloamos a que los números no sean
sumados sino concatenados.


 */

let numero1 = 53;
let numero2 = 8;

concatenar = ""+ numero1 + numero2;

document.write(concatenar+"<hr>");

/*
CONCAT

También hay una forma de concatenar con cadenas, esta forma
es con el metodo de cadena concat() este lo podemos utilzar
siempre y cuando haya un string de otra manera no funcionara
y nos lanzara un error.

Pruebas con el metodo concat 
*/

let cadena1 = "Emanuel", cadena2 = "Garcés Zuluaga";

cadena3 = cadena1.concat(" "+cadena2);

document.write(cadena3);

cadena_extra = cadena1+" "+cadena2.concat(" "+cadena3);

document.write("<hr>"+cadena_extra);

document.write("<hr>"+cadena3.concat(" Desde Colombia").concat("<hr>"));

document.write("Buenos dias esta es la ".concat("ultima prueba que se va hacer con ").concat("el metodo concat()"))

/*BACKTICKS -> ACENTO FUERTE*/

/*
Esta es la mejor forma que existe para concatenar debido a que no nos evitaremos demasiados errores
para poder concatenar de esta manera necesitamos encerrar nuestro string en backticks que son el
siguiente simbolo -> (` `) para hacer estos lo que necesitamos es presionar las siguientes teclas

Ctrl + ALT + } -> (``)

Este acento fuerte es muy bueno a la hora de hacer string ya que este nos permite escribir string
en diferentes lineas de codigo, a diferencia de comillas simples y comillas dobles que si copiamos
en otro renglon pasa que ya no reconoce como una misma cadena y no se podria escribir sin error.

Para concatenar a parte de el acento fuerte necesitamos utilizar el signo de dinero y abrir llaves
para poner una variable para concatenar de esta manera -> ${nombreVariable} esta se puede poner
en cualquier parte del string y funciona solo con el acento fuerte de lo contrario no funcionara.

También hay algo que si ponemos comillas simples o comillas dobles dentro del acento grave lo 
tomara como texto y de esta manera no dañara el codigo.

 */

doblecadena = "Emanuel Garcés";

frasee = `El nombre de esta persona es ${doblecadena} es una persona muy interesada por aprender
todo acerca de programación por lo que puede ser bastante perfecionista y eso es bueno.`;


document.write(`<hr>${frasee}`);

string1 = "Esta es una";

string2 = "Frase con la";

string3 = "Concatenación";

string4 = "Con el dollar y los corchetes";

string5 = "Esta es la manera mas adecuada";

string6 = "De hacerlo porque asi";

escritoFinal = `${string1} ${string2} ${string3} ${string4} ${string5} ${string6} 
 evitaremos errores en el codigo`; 

document.write(`<hr>${escritoFinal}`);



/*Para poder comentar un texto desde el teclado podemos oprimir las teclas
Ctrl + } -> de esta forma podemos comentar una linea de codigo posicionandonos
en dicha linea o tambie mucho codigo selecionandolo yluego oprimiendo esas letras
*/






