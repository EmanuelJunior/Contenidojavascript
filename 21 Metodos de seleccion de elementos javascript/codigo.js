/*METODOS DE SELECCION DE ELEMENTOS

Estos elementos solo se pueden utilizar en el documento html a travez de las etiquetas
html 

document.getElementById(); -> Este sirve para seleccionar una etiqueta del documento html
a traves del id que le pongamos al elemento por ejemplo si creamos una etiqueta <div>
que se refiere a un cajon y queremos acceder a esta lo podemos hacer identificando este cajon
con un id si nosotros le ponemos un id caja podremos acceder a este con el 
document.getElementByid('caja'); y de esta manera estaremos seleccionando esta etiqueta especificamente.

document.getElementByTagName(); -> Este la funcionalidad es tambien de seleccionar una etiqueta html
la diferencia es que este no es especificamente a un div o a un p que tiene un id, este la funcionalidad
es seleccionar una etiqueta completamente osea que no es especifica porque no necesitamos un id, su
funcionalidad es seleccionar una etiqueta completamente, por ejemplo si queremos seleccionar los parrafos
que son etiqueta <p></p> entonces debemos escribir 
document.getElementsByTagName("p"); de esta forma estaremos selecccionando todas las etiquetas en el documento
html que sean etiqueta <p>.

document.querySelector(); -> Con este podemos seleccionar a travez de las clases (class='') y de los id (id='') 
de cada elemento del documento html eso si hay que tener en cuenta si queremos seleccionar los elementos con la clase
por ejemplo caja debemos poner .caja porque de esta forma identificamos que es una clase, pero si queremos seleccionar 
un id lo podemos hacer a traves de #nombreId y asi estaremos seleccionando la etiqueta html que tiene dicho id
el problema es que si seleccionamos una clase que tiene muchas etiquetas html solo seleccionara la primera, en pocas
palabras el limite de este selector es un etiqueta cada vez que lo llamamos.

class -> document.querySelector('.nombreClase'); 
id -> document.querySelector('#nombreId');

document.querySelectorAll(); -> Este tiene exactamente la misma funcionalidad que document.querySelector() la diferencia
es que al llamar una clase selecciona todos las etiquetas que tengan esa clase a diferencia del anterior que solo selecciona
uno de todos esos, este selecciona automaticamente todos.*/