/*OPERADORES DE ASIGNACION*/

/*
Asignacion -> x = y 

Asignacion de adicción -> x += y
Significa x = x + y

Asignacion de sustracción -> x -= y
Significa x = x - y

Asignacion de multiplicación -> x *= y
Significa x = x * y

Asignacion de división -> x /= y
Significa x = x / y

Asignacion de resto -> x %= y
Significa x = x % y

El resto en pocas palabras es el residuo es el numero que 
queda al dividir al numero hasta que no sea posible mas, claramente
normalmente este numero es entero pero a veces puede ser decimal.

Asignacion de exponenciación -> x **= y
Significa x = x ** y

El operador de asignacion de exponenciacion es en matematicas cuando
nosotros hacemos potencia de ciertos numeros esto es en si la 
exponenciación.
*/

let numero = 10;

numero += 10;
document.write("Asignacion de adicción: "+numero);

document.write("<br><br>");

numero -= 5;
document.write("Asignacion de sustracción: "+numero);

document.write("<br><br>");

numero *= 2;
document.write("Asignacion de multiplicación: "+numero);

document.write("<br><br>");

numero /= 4;
document.write("Asignacion de división: "+numero);

document.write("<br><br>");

numero %= 2;
document.write("Asignacion de resto: "+numero);

document.write("<br><br>");

numero **= 10;
let exponenciación = Math.round(numero);
document.write("Asignacion de exponenciación: "+exponenciación);


/*OPERADORES ARITMETICOS*/

/*
Incremento -> 10++ (o) ++10;
Significa que aumenta 1 el resultado

Decremento -> 10-- (o) --10;
Significa que disminuye 1 el resultado

division -> /;
Simplemente con este se divido dos numeros

Exponenciacion -> **;
Este es el sinonimo de potenciacion en matematicas
con el que se multiplica el numero por si mismo
dependiendo de cuantas veces le indiquemos.

Addicción -> +;
Con este operador es con el que suman dos números.

Multiplicacion -> *;
Este es el operador que se utiliza en javascript para 
multiplicar los números.

Substracción -> -;
Este es el operador que se utiliza en javascript para 
restar los números.

Porcentajes -> %;
Este es el operador que se utiliza en javascript para 
sacar los porcentajes en los números.

Hay que tener en cuenta dependiendo en donde pongamos los
operadores de incremento o de decremento esto lo que significara
es que aumerntara o despues de la linea de codigo del incremento
o en la misma linea.

Por ejemplo
numero++; -> lo que pasa aca es que este incrementara el valor de
la variable numero pero en la siguiente linea de codigo se habran gurdado
los cambios

++numero; -> lo que pasa aca es que este incrementara el valor de
la variable numero pero en este caso lo hara en la misma linea de codigo en
donde se ha incrementado

Esto se confunde mucho pero en si lo que significa es que si ponemos el 
incremento despúes de la variable lo que significara es que se incrementara
luego, en cambio si ponemos el incremento antes de la variable lo que significa
es que se incrementara directamente en esa linea, en pocas palabras inmediatamente.

*/

let numero2 = 100;
document.write("<br><br>");


numero2++;
document.write("Incremento despúes: "+numero2);

document.write("<br><br>");

document.write("Incremento antes: "+(++numero2));

document.write("<br><br>");


numero2--;
document.write("Decremento despúes: "+numero2);

document.write("<br><br>");

document.write("Decremento antes: "+(--numero2));



document.write("<br><br>");

document.write("Suma: "+(numero2+20));


document.write("<br><br>");

document.write("Resta: "+(numero2-30));


document.write("<br><br>");

document.write("Multiplicacion: "+(numero2*3));


document.write("<br><br>");

document.write("Division: "+(numero2/2));


document.write("<br><br>");

document.write("Exponenciacion o potenciación: "+(numero2**2));


document.write("<br><br>");

document.write("Porcentajes: "+(numero2%120));





