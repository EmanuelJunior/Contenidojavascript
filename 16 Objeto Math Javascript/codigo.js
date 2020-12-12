/*OBJETO MATH*/

/*
Math.sqrt() -> Este metodo sirve para sacar la raiz cuadrada de un numero dentro de los parentesis hiria el
número a sacar la raiz cuadrada ejemplo.

numero = Math.sqrt(25) -> Esto va a ser igual a 5 debido a que 5 x 5 = 25;

Math.cbrt() -> La funcionalidad de este es sacar la raiz cubica de un numero seleccionado entre los parentesis
va dicho numero a sacar la raiz cubica ejemplo

numero = Math.cbrt(27) -> Esto va a ser igual a 3 debido a que 3 x 3 x 3 = 27;

Math.max() -> Esta funcionalidad sirve para comparar diferentes numeros y debolvera el numero mayor de toda esa
cantidad de numeros seleccionados ejemplo.

numeroMax = Math.max(3,65,41,5,9,234) -> Este devolveria el numero (234) ya que es el numero mayor de todos 
estos rangos de numeros

Math.min() -> Esta funcionalidad sirve para comparar diferentes numeros y debolvera el numero menor de toda esa
cantidad de numeros seleccionados ejemplo.
numeroMin = Math.min(3,65,41,5,9,234) -> Este devolveria el numero (3) ya que es el numero menor de todos 
estos rangos de numeros

Math.random() -> La funcionalidad de este es devolver un numero aleatorio entre 0 y 1 ejemplo.

numero = Math.random() -> 0.53489573849953
numero = Math.random() -> 0.85364976894352

Math.round() -> Este permite redondear un numero al entero mas cercano, en pocas palabras su funcion es redondear
a entero si por ejemplo decimos que redondee el numero 3.235445 lo que va a pasar es que devolvera 3 debido a que es
el numero entero mas cercano, pero si en vez de este numero es 3.640935834 , lo que devolvera en este caso es 4 porque
este es el numero mas cercano en decimales.
ejemplo

numero = Math.round(3.4358345034585309458) -> El valor que devuelve este es (3) debido a que este quita los
decimales del numero convirtiendo asi el numero decimal a numero entero.

Math.floor() -> Este redondea cualquier decimal y lo convierte en entero pero redondea al numero anterior no
a un numero superior. ejemplo

numero = Math.floor(9.9999999) -> El numero que saldra a continuacion es (9) porque 

Math.trunc() -> Este no redondea un decimal si no que la funcionalidad de este es unicamente quitar los decimales
quedando un numero entero. ejemplp

numero = Math.trunc(34.98534977534) -> Esto va a ser igual a (34) debido a que lo que hizo este fue quitar los decimales
del número.

Math.PI -> Lo unico que hace este es devolver el valor del numero pi.
Math.SQRT1_2 -> Lo que hace es sacar la raiz cuadrada de 1/2.
Math.SQRT2 -> Saca la raiz cuadrada de 2.

*/

let numero, resultado;

/*MATH.SQRT()*/

numero = 64;
resultado = Math.sqrt(numero);
document.write(`Raiz cuadrada de ${numero}: ${resultado}<hr>`);

/*MATH.CBRT*/

numero = 27;
resultado = Math.cbrt(numero);
document.write(`Raiz cubica de ${numero}: ${resultado}<hr>`);

/*MATH.MAX*/

numero = [42, 65, 32, 5, 6,2, 11, 4, 3, 31];
resultado = Math.max(42, 65, 32, 5, 6, 2, 11, 4, 3, 31);

document.write("<h1>Numero mayor entre estos numeros</h1>");

numero.filter((num)=>{document.write(`Num: ${num}<br>`)});

document.write(`<hr><b>RESULTADO: ${resultado}</b><hr>`);

/*MATH.MIN*/

numero = [42, 65, 32, 5, 6,2, 11, 4, 3, 31];
resultado = Math.min(42, 65, 32, 5, 6, 2, 11, 4, 3, 31);

document.write("<h1>Numero menor entre estos numeros</h1>");

numero.filter((num)=>{document.write(`Num: ${num}<br>`)});

document.write(`<hr><b>RESULTADO: ${resultado}</b><hr>`);

/*MATH.RANDOM*/

resultado = Math.random();

document.write("<h1>Numero aleatorio entre el 0 y el 1</h1>");

document.write("<b>Resultado: </b>"+resultado+'<hr>');

/*MATH.ROUND*/

numero = 54.6438530483;
numero2 = 45.24839538954;

document.write("<h1>Redondeo de numeros decimales a enteros a el numero entero mas cercano</h1>");

resultado = Math.round(numero);

document.write("Numero antes: "+numero+"<br> Numero Después: "+resultado+'<hr>');

resultado = Math.round(numero2);

document.write("Numero antes: "+numero2+"<br> Numero Después: "+resultado+'<hr>');

/*MATH.FLOOR*/

numero = 85.193945835305;
numero2 = 89.99430588534;

document.write("<h1>Redondear decimales a numeros enteros pero en vez de un numero superior a un entero anterior</h1>");

resultado = Math.floor(numero);

document.write("Numero antes: "+numero+"<br> Numero Después: "+resultado+'<hr>');

resultado = Math.floor(numero2);

document.write("Numero antes: "+numero2+"<br> Numero Después: "+resultado+'<hr>');

/*MATH.TRUNC*/

numero = 23.2384234248294;
numero2 = 13.9432842424233;

document.write("<h1>Quitar decimales de numeros convirtiendolos asi en numeros enteros</h1>");

resultado = Math.trunc(numero);

document.write("Numero antes: "+numero+"<br> Numero Después: "+resultado+'<hr>');

resultado = Math.trunc(numero2);

document.write("Numero antes: "+numero2+"<br> Numero Después: "+resultado+'<hr>');

/*MATH.PI*/

resultado = Math.PI;

document.write("<h1>Sacar numero PI</h1>");

document.write(`<hr><b>Numero PI: ${resultado}</b><hr>`);