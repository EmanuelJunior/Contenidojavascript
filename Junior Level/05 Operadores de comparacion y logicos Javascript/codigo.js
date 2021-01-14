/*OPERADORES DE COMPARACIÓN*/

/*
Los operadores de comparación comparan dos expresiones
y devuelven un valor Boolean (true o false) que
representa la relación de sus valores.

a == b -> Igual

a === b -> Estrictamente es igual
Significa -> El significado de esto es que lo que va a hacer es verificar si los
valores son iguales y tambien si el tipo de variable es igual a diferencia que si
solo utilizamos == que lo que hara es unicamente verificar si el contenido es igual

a != b -> No es igual

a !== b -> Estrictamente no es igual
Significa -> El significado de esto es que lo que va a hacer es verificar si los
valores son diferentes y tambien si el tipo de variable es diferente, a diferencia que si
solo utilizamos != que lo que hara es unicamente verificar si el contenido es diferente.

a > b -> Mayor que

a < b -> Menor que

a <= b -> Menor o igual que

a >= b -> Mayoy o igual que 
 */

let numero1 = 13;
let numero2 = 23;
let texto1 = "13";
let texto2 = "23";

document.write(`<h1>Numeros de prueba ${numero1} ${numero2}</h1>`);

document.write(`Igual: ${numero1 == numero2}`);

document.write("<hr>");

document.write(`Se prueba con un string y un numero que tienen el mismo contenido pero diferente tipo de variable<br><br>`);
document.write(`Las variables que se utilizan para validar su igualdad son: ${numero1} y el string "${texto1}"<br><br>`)

document.write(`Totalmente igual: ${numero1 === texto1}<hr>`);


document.write(`Diferente: ${numero1 != numero2}`);

document.write("<hr>");

document.write(`Se prueba con un string y un numero que tienen el mismo contenido pero diferente tipo de variable<br><br>`);
document.write(`Las variables que se utilizan para validar su no igualdad son: ${numero1} y el string "${texto1}"<br><br>`)

document.write(`Totalmente diferente: ${numero1 !== texto1}<hr>`);

document.write(`${numero1} mayor que ${numero2}: ${numero1 > numero2}<hr>`);

document.write(`${numero1} menor que ${numero2}: ${numero1 < numero2}<hr>`);

document.write(`${numero1} mayor o igual que ${numero2}: ${numero1 >= numero2}<hr>`);
document.write(`${numero1} mayor o igual que ${numero1}: ${numero1 >= numero1}<hr>`);

document.write(`${numero2} menor o igual que ${numero1}: ${numero2 <= numero1}<hr>`);
document.write(`${numero2} menor o igual que ${numero2}: ${numero2 <= numero2}<hr>`);



/*OPERADORES LOGICOS*/

/*
AND o && -> Este operador logico sirve para verificar que las dos condiciones esten
correctas si las dos no devuelven verdadero la condición no se cumplira, solo si
en ambos lados es correcta la validación.

true && true -> Esto dara true debido a que las dos condiciones son verdaderas.
true && false -> Esto dara false porque una de las condiciones no es verdadera.

OR o || -> Este operador logico sirve para verificar que solo una de las condiciones sea
correcta, si este es el caso la condición dara true si ninguna de las condiciones es
correcta entonces dara false.

true && false -> Esto dara true debido a que solo con que una condición sea correcta
la validación sera correcta.

! -> Este operador lo unico que significa es la negacion de cualquier validacion es como
decir lo contrario de cada condición.

!(true && true) -> Esto dara false debido a que la condición da true pero al negarla
sera false

!(true && false) -> En este caso dara true porque la condicion de adentro no es cumplida
por lo que sera false y al negarla sera true.
 */

let valor1 = true;
let valor11 = false;
let valor2 = true;
let valor22 = false;

resultado1 = valor1 && valor2;
resultado15 = !(resultado1);

resultado2 = valor1 || valor2;
resultado25 = !(resultado2);

resultado3 = valor1 && valor11;
resultado35 = !(resultado3);

resultado4 = valor11 || valor22;
resultado45 = !(resultado4);

document.write("<hr>");

document.write(`Valores a comparar ${valor1} y ${valor2} con el operador logico && resultado: ${resultado1}<br>`);
document.write(`Valores a negar ${valor1} y ${valor2} con el operador logico && resultado: ${resultado15}`);

document.write("<hr>");

document.write(`Valores a comparar ${valor1} y ${valor11} con el operador logico || resultado: ${resultado2}<br>`);
document.write(`Valores a negar ${valor1} y ${valor11} con el operador logico || resultado: ${resultado25}`);

document.write("<hr>");

document.write(`Valores a comparar ${valor1} y ${valor11} con el operador logico && resultado: ${resultado3}<br>`);
document.write(`Valores a negar ${valor1} y ${valor11} con el operador logico && resultado: ${resultado35}`);

document.write("<hr>");

document.write(`Valores a comparar ${valor11} y ${valor22} con el operador logico || resultado: ${resultado4}<br>`);
document.write(`Valores a negar ${valor11} y ${valor22} con el operador logico || resultado: ${resultado45}`);




/*CAMEL CASE*/

/*
El camelcase es la forma como trabaja javascript con sus nombres de diferentes funcionalidades,
el camelcase en si es que siempre cada nombre de cada metodo o funcionalidad siempre la primera
palabra ira en minuscula pero las demas seran en mayuscula eso es lo que es el camelcase identificar
que nunca la primera palabra va en mayuscula si no las siguientes ejemplo.

document.getElementById() -> en este caso vemos que get va en minuscula y las demas palabras que hacen 
parte del metodo van en mayuscula como Element + By + Id estas las primera letra de estas palabras debera
ir en mayuscula

parseInt() -> este otro caso muestr lo mismo la primera palabra que es parse va en minuscula y la siguiente
palabra la primera letra va en mayuscula -> Int.
*/











