/*
CLASES, CLASSLIST Y METODOS DE CLASSLIST

ClassList son funcionalidades que le damos a los elementos, como agregar
eliminar clases son unas de las funcionalidades de classList.

elemento.classList.add("nombreClase") -> su funcionalidad es agregar una clase al elemento,
lo cual si le damos estilos automaticamente se añadiran debido a que la añadimos la
clase desde javascript.

elemento.classList.remove("clase que se va a remover") -> la unica funcionalidad de esta es
eliminar una clase ya existente en el elemento.

elemeto.classList.item(numero) -> Esta propiedad de classList no modifica las clases del elemento
su funcionalidad es devolver un valor este valor va a ser igual a un nombre de clase que estemos
buscando dependiendo del numero que escribamos devolvera una clase siempre y cuando existe en el indice
especificado, en pocas palabras lo que sucede es que automaticamente las clases que tengan se vuelve en
un array de todas las clases que tenga el elemento. EJEMPLO

<h1 class='titulo clase1 clase2 clase3 clase4 clase5'>Titulo</h1>

const titulo = document.querySelector(".titulo");

claseBuscar = titulo.classList.item(2); -> esto lo que hara es guardar en la
variable el nombre de la clase que este en el indice 2 que en este caso es la
(clase2), esta es la funcionalidad que hace devolver el nombre de las clases
dependiendo del indice que indiquemos.

elemeto.classList.contains("nombreClaseBuscar") -> la funcionalidad de esta es 
devolver true si la clase que se esta buscando en el elemento existe de lo 
contrario devolvera false.
 
elemento.classList.toggle("nombreClase") -> La funcionalidad de esta es agregar la 
clase mencionada siempre y cuando en este elemento no exista pero si por alguna razon 
la clase existe lo que hara es eliminarla, en pocas palabras si existe la elimina,
si no la agrega. 

Tambien tiene un segundo parametro que puede ser true o false, si ponemos true lo que pasara
es que la clase si existe no lo va a borrar, pero si ponemos false es el valor por defecto que 
lo que hara es eliminarla si existe.

elemento.classList.replace("NombreClase a remplazar, Nuevo nombre") -> La funcionalidad de esta 
es remplazar una clase existente en un elemento si esta clase es remplazada con exito devolvera 
true pero si esta no existe devolvera false. EJEMPLO

elemento.classList.replace("titulo","title"); -> devolvera true si se pudo remplazar correctamente
si no false.

*/

const titulo = document.querySelector(".titulo");

titulo.classList.remove("grande");
titulo.classList.add("grande");
titlo.classList.item(