/*
PROPIEDADES DE SIBLINGS (HERMANOS)

elementoHermano.nextElementSibling; -> Estas propiedad se utiliza para que devuelva
cual elemento hermano es el siguiente del elemento hermano que estamos investigando. 

elementoHermano.previousElementSibling; -> Estas propiedad se utiliza para que devuelva
cual elemento hermano es el anterior del elemento hermano que estamos investigando.

ejemplo

<div>
	<p>Parrafo simple</p>
	<h1 class='h1'>Titulo grande</h1>
	<h3>Subtitulo normal</h3>
</div>

JAVASCRIPT

const h1 = document.querySelector('.h1');

let resultado = nextElementSibling; -> El resultado que nos devolvera si lo mostrams
es -> (<h3>Subtitulo normal</h3>) debido a que es el elemento hermano siguiente a el elemento
que estamos averiguando.

resultado = previousElementSibling; -> El resultado que nos devolvera si lo mostrams
es -> (<p>Parrafo simple</p>) debido a que es el elemento hermano anterior a el elemento
que estamos averiguando.



nextSibling-> previousSibling->

Estas dos propiedades cumplen casi la misma funcionalidad que las anteriores propiedades
la diferencia es que no muestra directamente los elementos hermanos ya sean anteriores o posteriores
sino lo que hace es tambien mostrar texto o nodos que son tabulaciones o espacios o entre elementos
por esta razon son propiedades que no se utilizan normalmente.
*/

const contenedor = document.querySelector('.contenedor');

const h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.nextElementSibling);
console.log(h2_antiguo.previousElementSibling);









