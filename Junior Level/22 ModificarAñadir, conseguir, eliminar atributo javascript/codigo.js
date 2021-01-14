/*MODIFICAR ATRIBUTO O AÑADIR ATRIBUTO.

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

<input class='nombre'> */