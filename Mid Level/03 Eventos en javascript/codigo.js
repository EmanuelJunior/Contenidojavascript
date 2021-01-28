/*
EVENTOS JAVASCRIPT:

Los eventos pueden definirse como cualquier cambio que ocurre en la pagina
mejor dicho cualquier cosa que sucede o cualquier modificacion que haya en la
pagina es un evento.

Los eventos por si no nos sirven de mucho pero cuando asociamos los eventos a cierto
codigo podemos hacer cualquier cosa y darle a la pagina vida.

Lo que se hace normalmente es asignar un codigo a un elemento que esta pasando por un
evento.

elemento.addEventListener("nombreEvento",funcionEjecutar); --> Este metodo de evento nos funciona 
basicamente para crear un evento y poderlo asociar a una funcion esta puede ser llamada o
tambien podemos hacer una funcion flecha directamente dentro del metodo de la siguiente manera.

elemento.addEventListener("nombreEvento",()=>{
	// Bloque de instrucciones de dicho evento.
})

Podemos ver las propiedades de nuestro evento con la funcion flecha poniendo dentro de los parametros
evento o cualquier nombre porque cuando queramos saber las propiedades a traves de consola solo necesitaremos
que pongamos cualquier parametro indicando la propiedades, esto se hace de la siguiente manera.

elemento.addEventListener("nombreEvento",(evento)=>{
	console.log(evento);
}) --> De esta manera mostramos las propiedades de nuestro evento que estamos utilizando.

elemento.removeEventListener("nombreEvento",funcionAsociadaEvento); --> Hay que tener en cuenta 
que siempre para borrar un evento hay que añadir los dos parametros par que el evento sea borrado
exitosamente.

El objeto evento sirve para indicar que elemento se esta ejecutando y todas sus propiedadaes

El flujo de evento se puede ejecutar de dos maneras, la predeterminada que es de los elementos
mas especificos a los menos especificos y esta se llama EVENT BUBBLING, tambien esta la segunda
manera que es de los elementos menos especificos a los mas espeificos este se llama
EVENT CAPTURING	de esta manera se indica el orden en que se ejecuten los eventos dependiendo de
la especifidad de dichos elementos.

para poder cambiar la espeficidad de un evento basta con poner el parametro true para decir que 
los elementos su especifidad es de menor especifidad a mayor especifidad que los demas asi podemos
ejecutar los contenedores primero y despue los hijos ejemplo, este parametro para que funcione correctamente en este caso de be ser
con la function flecha:

contenedor.addEventListener("nombreEvento",()=>{
	alert("La especifidad del contenedor es mayor a las demás");
}, true)

El flujo de evento es un orden en donde se ejecutan los eventos dependiendo de su espeficidad,
por ejemplos los hijos son mucho mas especificos que los contenedores osea que si le asociamos
un evento se ejecutara primero el hijo por su espeficidad.

evento.stopPropagation(); --> Este metodo tiene la funcionalidad de parar la ejecucion de todos los demas
eventos que estaban asociados mejor dicho que no se ejecuten ninguno más, este lo podemos aplicar de la siguiente
manera.

elemento.addEventListener("nombreEvento",(evento)=>{
	alert("click en el elemento");
	evento.stopPropagation();
}) --> De esta manera solo se ejecutara este evento y los que suceden de estos no seran ejecutadas.

otro ejemplo puede ser dandole especifidad a un contenedor y parando la ejecucion para evitar que se ejecuten mas eventos.

contenedor.addEventListener("nombreEvento",(even)=>{
	alert("La especifidad del contenedor es mayor a las demás");
	even.stopPropagation();
}, true)


EVENTOS DE MOUSE --> RATON

click --> ocurre con un click, cuando damos presionamos y soltamos en el elemento

dblclick --> ocurre con doble click, hay que tener en cuenta que estos
clicks tienen que ser seguidos entre uno y el otro lo maximo de tiempo debe
ser 500ms sino no se ejecutara el evento.

mouseover --> ocurre cuando el puntero se mueve sobre un elemento o sobre uno 
de sus hijos, cuando nos salgamos del contenedor ya no nos saltara dicho
evento caso contrario que si nos salta tambien con mouseout.

mouseout --> ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios.
este es muy parecido a mouseover la diferencia es que este tambien se ejecuta cuando salimos
de todos lo elementos, cosa que no pasa con mouse over.

contextmenu --> este evento se ejecuta cuando se le da click derecho para que abramos el menu
al presionarlo en un elemento este evento se ejecutara. 

mouseenter --> ocurre cuando el puntero se mueve sobre un elemento, este fue creado especialmente
para el navegador de internet explorer.

mousemove --> ocurre cuando el puntero se mueve mientras está sobre un elemento.

mouseleave --> ocurre cuando el puntero se mueve fuera de un elemento.

mousedown --> ocurre cuando un usuario apreta un boton del mouse sobre un elemento.

mouseup --> ocurre cuando un usuario suelta un botón del mouse sobre un elemento.


EVENTOS DEL TECLADO --> Ocurre cuando presionamos cualquier tecla del teclado

keydown --> ocurre cuando una tecla se deja de presionar.

keypress --> ocurre cuando una tecla se presiona y se suelta en un elemento.

keyup --> ocurre despues de que los dos eventos anteriores hayan concluido,
mejor dicho cuando se suelta una tecla.

EVENTOS DE LA INTERFAZ

error --> ocurre cuando sucede un error durante la carga de un archivo multimedia,
como imagen o video.

load --> ocurre cuando un objeto se ha cargado, un ejemplo es la pagina cuando esta
termina de cargar automaticamente este evento se ejecutara.

beforeunload --> ocurre antes de que el documento (la pagina) este a punto de ser
redireccionada a otra url por ejemplo si redireccionamos a youtube lo que pasara es 
que a punte de irse se ejecutora dicho evento.

unload --> ocurre cuando nos hayamos ido del sitio en que nos encontramos, la
diferencia con beforeunload es que este es cuando estamos a punto de irnos del sitio
en cambio unload es cuando ya nos fuimos del sitio web.

resize --> ocurre cuando se cambia la resolucion de la pagina web. En pocas palabras
el tamaño de la vista del documento.

scroll --> ocurre cuando se desplaza la barra de desplazamiento (scroll) de 
un elemento.

select --> ocurre al seleccionar un texto, este tiene unas propiedades algunas que se utilizan
son: selectionStart y selectionEnd -> estas indican desde donde se ha seleccionado y hasta donde
se selecciono para acceder a estas tenemos que utilizar la propiedad target.

*/

const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const input = document.querySelector(".input-prueba");
const img = document.querySelector(".img-prueba");
const contenedor = document.querySelector(".selecionado");

/*KEYUP --> EJEMPLO*/

// input.addEventListener("keyup",(evento)=>{
// 	let tecla = evento.key;
// 	nuevoContenido = `La ultima tecla presionada fue: <b>${tecla}</b>`;
// 	contenedor.innerHTML = nuevoContenido;
// });


/*SELECT*/

// input.addEventListener("select",(evento)=>{
// 	let start = evento.target.selectionStart;
// 	let end = evento.target.selectionEnd;
// 	let textoCompleto = input.value;
// 	contenedor.innerHTML = textoCompleto.substring(start, end);
// });

/*ERROR*/

// img.addEventListener("error",()=>{
// 	console.log("Ha sucedido un error");
// });

/*LOAD*/

// window.addEventListener("load",()=>{
// 	console.log("Ha cargado el sitio");
// 	console.time();
// 	console.timeEnd();
// })

/*KEYDOWN*/

// input.addEventListener("keydown",(event)=>{
// 	console.log("Una tecla fue presionada");
// });

/*KEYPRESS*/

// input.addEventListener("keypress",(event)=>{
// 	console.log("Un usuario presiono una tecla y la solto");
// });

/*KEYUP*/

// input.addEventListener("keyup",(event)=>{
// 	console.log("Una tecla fue soltada");
// });

// const contenedor2 = document.querySelector(".contenedor-2");


/*CLICK --> UN CLICK*/

// button.addEventListener("click",(evento)=>{
// 	alert("Dio doble click en el botonesion");
// 	button.setAttribute("disabled","true");
// });

/*DBLCLICK --> DOBLE CLICK*/

// button.addEventListener("dblclick",(evento)=>{
// 	alert("Dio doble click en el botonesion y se desactivo :(");
// 	button.setAttribute("disabled","true");
// });

/*MOUSEOVER --> MOUSE ENCIMA DE ELEMENTO*/

// contenedor1.addEventListener("mouseover",(evento)=>{
// 	alert("Este es el contenedor rojo");
// });

/*MOUSEOUT --> CUANDO ESTA FUERA DEL ELEMENTO SE EJECUTA*/

// contenedor1.addEventListener("mouseout",(evento)=>{
// 	alert("El mouseover event activate");
// });

/*CONTEXTMENU --> CUANDO SE DA CLICK DERECHO EN EL ELEMENTO*/

// contenedor1.addEventListener("contextmenu",(evento)=>{
// 	alert("Dio click derecho encima del elemento");
// 	button.setAttribute("disabled","true");
// });

/*MOUSEMOVE --> CUANDOS SE MUEVE EN EL ELEMENTO*/

// contenedor1.addEventListener("mousemove",(evento)=>{
// 	alert("Mantuvo el mouse encima del elemento");
// });

/*MOUSELEAVE --> CUANDO SALE DEL ELEMENTO*/

// contenedor1.addEventListener("mouseleave",(evento)=>{
// 	alert("Mantuvo el mouse fuera del elemento");
// });

/*MOUSEDOWN --> SOLO AL DAR CLICK SIN NECESIDAD DE SOLTAR EL CLICK*/

// contenedor1.addEventListener("mousedown",(evento)=>{
// 	alert("Dio click encima del elemento pero no solto");
// });

/*MOUSEUP --> CUANDO DAMOS CLICK AFUERA PERO SOLTAMOS DENTRO DEL ELEMENTO*/

// contenedor1.addEventListener("mouseup",(evento)=>{
// 	alert("Solto el click del mouse encima del elemento");
// });

/*ELEMENTO.ADDEVENTLISTENER(EVENTO, FUNCTION) --> CREAR UN EVENTO ASOCIADO A UN ELEMENTO*/

// contenedor1.addEventListener("contextmenu",(evento)=>{
// 	alert("Dio click derecho encima del elemento");
// 	button.setAttribute("disabled","true");
// });

// button.addEventListener("click",saludar)

/*ELEMENTO.REMOVEEVENTLISTENER(EVENTO, FUNCTION) --> ELIMINAR UN EVENTO*/

// function saludar(){
// 	alert("Hola");
// 	button.removeEventListener("click",saludar);
// 	button.setAttribute("disabled","tru");
// };

/*CAMBIAR ESPECIFIDAD DE EVENTO CON TRUE EN 3 PARAMETRO DE ADDEVENTLISTENER*/

// contenedor1.addEventListener("click",(evento)=>{
// 	alert("Di click al contenedor rojo");
// }, true);


// contenedor2.addEventListener("click",(evento)=>{
// 	alert("Di click al contenedor azul");
// }, true);
