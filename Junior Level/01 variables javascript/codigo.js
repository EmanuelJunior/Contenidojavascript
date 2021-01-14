string = 'Esto es un string';
number = 100;
float = 3.1416;
booleano = true;
undefineed = undefined;
nuull = null;

/*Formas de declarar una variable*/

/*
var, let, const

LET

let te permite declarar variables limitando su alcance 
(scope) al bloque, declaración, o expresión donde se está 
usando. Lo anterior diferencia  let de la palabra reservada
var , la cual define una variable global o local en una 
función sin importar el ámbito del bloque.

En pocas palabras esta es usualmente utilizada en bloques
por ejemplo en condicionales ya que de este forma estamos
limitando esta varible por esta razon es que es una variable
local, tambien hay que tener en cuenta que no se puede 
inicializar 2 veces la misma variable en un mismo bloque 
debido a que con let nos daria un error, a diferencia con var

VAR

 Una variable es un elemento que se emplea para almacenar y
 hacer referencia a otro valor. ... Las variables en 
 JavaScript se crean mediante la palabra reservada var .

 Cuando inicializamos una variable con la palabra reservada
 var lo que indicamos es que es una variable global

CONS

Es un tipo de variable que nunca varia y que no se puede modificar
a diferencia de let y var, si creamos una const hay que saber que
no se puede modificar y que hay que declararla y directamente inicializar
su valor porque de otra forma nos dara error, este es un ejemplo:

De esta forma se crea una constante declarandola y a su vez inicializandola
const nombre = "Emanuel";

Esto automaticamente nos daria un error debido a que tenemos que declararla y
a su vez introducir su valor.
const nombre;
nombre = "Emanuel";

SCOPE

Scope es el alcanza que tienen las variables por ejemplo
se crea una variable en un bloque, el alcanze de esa variable va
a estar limitado a ese bloque pero si intentamos utilizarla
afuera de ese bloque esa variable ya no existe eso es el scope.

CREAR MULTIPLES VARIABLES

Hay una forma de declarar variables en una misma linea de codigo
y se hace poniendo comas despues del nombre de cada una de las
variables, tambien se pueden declarar e inicializar solo que
para que javascript identifique que estamos creando varias var
tenemos que separarlas por comas.

NULL Y UNDEFINED

Lo que ocurre es que undefined es un valor que indica que no tiene un valor
porque no se ha definido todavía, mientras que null se usa para 
indicar que no hay un valor porque así lo hemos querido indicar expresamente. 
Pero en ambos casos el significado último de "ausencia de valor" es el mismo.

En pocas palabras undefined es porque el valor no tiene contenido pero esto pasa
unicamente si no llenamos una variable de contenido y null aparecera cuando nosotros
ponemos el valor null a una variable es muy diferente porque nosotros queremos que esa
variable tenga el valor de vacio, en cambio con undefined es el sistema el que lo identifica.

NaN = Not a Number
Esto significa que no es un numero, esto suele ocurrir cuando
hacemos operaciones y los valores no son numeros. Por ejemplo
si queremos multiplicar una variable que contiene 5, y otra
variable que contiene texto, esto dara un error porque no podemos
hacer esta operacion
*/

let numero = 5, numero2 = "Pedro";

alert(numero * numero2); 


