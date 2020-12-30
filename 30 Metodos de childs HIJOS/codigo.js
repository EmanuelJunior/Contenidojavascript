/*
METODOS DE CHILDS HIJOS

contenedor.replaceChild(elemento_antiguo, elemento_nuevo); -> Este metodo tiene como funcionalidad 
remplazar elementos hijos con un diferente contenido al que tienen por ejemplo, si tenemos un contenedor
y dentro de este tenemos un h1 que dice titulo y queremos remplazarlo pues podriamos crear un elemento
y remplazar su contenido con el innerHTML y al remplazarlo ya tendremos nuestro elemento y simplemente
lo que nos tocaria hacer es utilizar el metodo y automaticamente se cambiaria.

contenedor.removeChild(elemento hijo a eliminar); -> Este metodo tiene como finalidad eliminar elementos
hijos lo unico que debemos hacer es seleccionar el elemetno que queramos eliminar dentro de el parentesis
claramente este elemento debe ser anteriormente seleccionado ya sea con un id o una clase o tambie por la
etiqueta y de este modo podemos eliminarla con el metodo de removeChild(); seleccionando claramente el contenedor
en donde se encuentra -> contenedor.removeChild(ELEMENTO);.

resultado = contenedor.hasChildNodes() -> La funcionalidad de este es verificar si dentro de un elemento html
se encuentran elementos hijos o nodos que pueden ser texto o tabulacion, si dicho contenedor tiene hijos devolvera
true, de lo contrario devolvera false, cabe aclarar que este resultado debemos meterlo dentro de una variable para
poder devolver dicho resultado que necesitamos.

PROPIEDADES DE IDENTIFICACION DE CONTENEDORES.

resultado = elementoHTML.parentElement o .parentNode -> La funcionalidad de estas propiedades es de devolver el contenedor
padre en donde estan incluidas, por ejemplo si preguntamos un h2 su parentElement este nos devolvera la etiqueta en donde se encuentra
incluido dicho elemento.


*/

const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo"; 
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");


// contenedor.replaceChild(h2_nuevo, h2_antiguo);

contenedor.removeChild(h2_antiguo);




const h4_nuevo = document.createElement("H4");
h4_nuevo.innerHTML = "PARRAFO POTENTE";

const h4_antiguo = document.querySelector(".h4");
contenedor.replaceChild(h4_nuevo,h4_antiguo);
// contenedor.removeChild(h4_antiguo);

let respuesta = contenedor.hasChildNodes();

console.log(h4_nuevo.parentElement);

 if(respuesta){
 	document.write("El elemento tiene HIJOS");
 }else{
 	document.write("El elemento NO tiene hijos")
 }