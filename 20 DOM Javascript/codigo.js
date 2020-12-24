/*DOM JAVASCRIPT*/

/*
El dom basicamente es el document object model es como una interfaz
que contiene todos los objetos estandares que permiten representar un
documento html xml o xhtml que a su vez tiene otra interfaz que nos 
permiten decir que cosas combinan con cada cosa y otra interfaz que nos
permite trabajarla con javascript, basicamente es el documento que contiene
el html los atributos los estilos en si.

Nodo -> Un nodo en el DOM basicamente es cualquier etiqueta que esta en el cuerpo
de html, como un parrafo el body o cualquier otra etiqueta no siempre son etiquetas
pero si en la mayoria de casos.

Document -> El nodo document es el nodo raiz, a partir del cual se derivan 
el resto de nodos.

Element -> Nodos definidos por etiquetas html.

Text -> El texto dentro de un nodo element se considera un nuevo hijo de tipo
texto.

METODOS DE SELECCION DE ELEMENTOS

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
uno de todos esos, este selecciona automaticamente todos.

MODIFICAR ATRIBUTO O AÑADIR ATRIBUTO.

Para nosotros modificar un atributo de una etiqueta html debemos utilizar
etiquetaSeleccionada.setAttribute("nombreAtributoAModificar","modificacionDelAtributo"); hay que tener
en cuenta que este modifica el atributo siempre y cuando existe de lo contrario lo crea en
dicha etiqueta que hayamos seleccionado. EJEMPLO

<input class="nombre" type="color">

const input = document.getElementsByTagName(".nombre");

input.setAttribute("type","text"); -> Esto lo que hara es sustituir el atributo
type que tiene como valor color y en vez de esto lo remplazara por el valor
de text -> texto.

<input class="nombre">

input.setAttribute("type","text"); -> En este caso al no existir dicho atributo
automaticamente lo creara en dicha etiqueta seleccionada.

<input class="nombre" type="text">

MOSTRAR EL VALOR DE UN ATRIBUTO DE UN ELEMENTO SELECCIONADO.

Si queremos mostrar el valor de un atributo de un elementos seleccionado debemos
utilizar etiquetaSeleccionada.getAttribute("nombreAtributoAMostrar");

Esto lo que nos devolvera es el valor que tiene el atributo que estamos buscando,
en pocas palabras nos devuelva el valor que tiene EJEMPLO.

<input class="nombre" type="text">

input.getAttribute("type"); -> este nos devolvera text debido a que este es el valor
que tiene dicho elemento seleccionado.

ELIMINAR ATRIBUTOS DE UN ELEMENTO SELECCIONADO

Si tenemos un elemento en donde queremos eliminar un atributo que tiene este elemento
debemos utilizar etiquetaSeleccionada.removeAttribute("nombreAtributoAEliminar");

Esto lo que hara es eliminarlo completamente el atributo del elemento que se esta seleccionando.

<input class="nombre" type="text">

input.removeAttribute('type'); -> Esto lo que hara es eliminar dicho atributo que hemos mencionado
en este caso eliminara el type que tiene como valor text.

<input class='nombre'> 

ATRIBUTOS GLOBALES

Los atributos globales son atributos que tienen todas las etiquetas html.

contentEditable -> Al modificar este atributo de un elemento podemos modificarlo
ya sea con true o con false ya que este es un booleano si lo editamos y ponemos true
esto significara que dicho elemento va hacer editable y lo podremos editar, en pocas
palabras se podra poner texto, pero si en este caso ponemos false no se podra editar dicho
elemento.

dir -> Este es un atributo que permite indicar la direccionalidad del texto.
existen dos valores que puede tener este que son:

ltr -> Este es el valor que tiene por defecto y significa
left to right , en pocas palabras pone el texto de izquierda a derecha

rtl -> Este valor significa right to left , este lo que hace es poner
el texto de derecha a izquierda como lo indica su nombre.

hidden -> Este es un atributo que lo que hace es ocultar cualquier elemento que
tenga este atributo este no tiene valor por lo que siempre y cuando exista no se vera el valor
la unica forma de que vuelva a aparecer un elemento es eliminando dicho atributo.

tabindex -> este atributo permite hacer un focus en cualquier etiqueta html ese focus es el de los
input al darles click en pocas palabras es un outline que al dar click en dicho elemento aparece 
los valores que tiene estos son numeros, si varios elementos tienen este atributo por ejemplo
tenemos 3 parrafos con este atributo el primero con valor 1 el segundo con 2 y el tercero con 3 lo que
pasara al hacer tab ees que mostrara el primer elemento con el focus despues habra un focus en el segundo
elemento y por ultimo el 3 elemento.

Esto en si depende de los numeros que coloquemos si al 3 le ponemos 1 al hacer tab sera el primero que tendra
focus y asi sucesivamente al hacer tab se mostraran dependiendo de dicho numero colocado.

title -> Es un atributo que lo que hace es al poner el mouse sobre una etiqueta html muestra un mensaje que nosotros
queramos este mensaje solo aparecera siempre cuando exista diche etiqueta global.
*/