/*
OBJETO WINDOW

el objeto window de Javascript que nos sirve para controlar la ventana del navegador. 
Es el objeto principal en la jerarquía y contiene las propiedades y métodos para controlar
la ventana del navegador. ... De él dependen todos los demás objetos de la jerarquía.

El objeto window representa la ventana completa del navegador. Mediante este objeto, es 
posible mover, redimensionar y manipular la ventana actual del navegador.

window.open() -> La funcionalidad de este metodo de window es abrir una ventana con el url que
decidamos dentro de los parentesis. ejemplo

let youtubeURL = "https://www.youtube.com";

window.open(youtubeURL);

ventana.close() -> La funcionalidad de este metodo es cerrar una ventana que ya esta abierta, 
por ejemplo si creamos la ventana y la abrimos podemos asignarle este valor de ventana abierta 
a una variable, entonces si nosotros queremos cerrarla utilizamos el nombre de la variable que
contiene la ventana abierta y utilizamos el metodo .close() para cerrarla, de esta manera.

let googleURL = "https://www.google.com";
ventanaGoogle = window.open(googleURL);

CERRAR VENTANA

ventanaGoogle.close(); -> Ventana cerrada

ventana.closed -> Esta propiedad tiene la funcionalidad de devolver un valor boolean que si da true
es porque la ventana esta cerrada pero si de lo contrario da false en porque la ventana sigue abierta.
ejemplo

ventanaGoogle = window.open(googleURL);

ventanaGoogle.closed; -> Devolvera FALSE porque esta abierta dicha ventana.

window.stop() -> Su funcionalidad es parar una pagina web osea que no se cargara completamente en vez de 
esto se congelara, de esta manera no terminara de cargar la pagina.

window.print() -> La funcionalidad del metodo de print() con el objeto window es abrir la ventana para imprimir 
la pagina en donde nos encontramos, de esta manera abrimos facilmente el escaneador para imprimir dicha pagina web.

ALERT, PROMPT, CONFIRM

window.alert() --> comunmente alert() -> Permite mostrar una ventana con una alerta que nosotros queramos.

window.prompt() --> comunmente prompt() -> Este permite hacer una pregunta y mostrar un campo en donde podemos
responder dicha pregunta y esta a su vez puede ser guardada en una variable.

window.confirm() --> comunmente confirm() -> Este abre una ventana que va a tener un mensaje y tambien en esta ventana
emergente aparecera un boton de aceptar y otro de cancelar dependiendo de si damos aceptar o cancelar nos devolvera un 
valor boolean, true --> aceptar y false --> cancelar. 

-----------------------

window.screen; --> Screen es uno de los tantos objetos de window con los que trabajan con la pantalla del ordenador.
window.screen de esta forma podemos acceder al objeto

window.screen.availHeigth; --> Es la altura que puede tener la window(ventana) del browser(navegador) si esta maximizada
incluidas las barras del browser(navegador) este esta denominada en pixeles.

window.screen.availWidth; -->  Es la anchura que puede tener la window(ventana) del browser(navegador) si esta maximizada
incluidas las barras del browser(navegador) este esta denominada en pixeles.

window.screen.heigth; --> La diferencia con la propiedad anterior es que esta es basicamente el alto total de la pantalla en si
en pixeles

window.screen.width; --> La diferencia con la propiedad anterior es que esta es basicamente el ancho total de la pantalla en si
en pixeles

window.screenLeft --> Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la
pantalla de nuestro moniror.

window.screenTop --> Devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla
de nuestor monitor.

window.scrollX --> Devuelve la posicion exacta en donde se encuentra el navegar en manera horizontalmente
osea ene el eje x.

window.scrollY --> Devuelve la posicion exacta en donde se encuentra el navegador en manera vertical
osea ene el eje y. 

window.scroll(x, y) --> Este metodo de window no sirve para ver en que posicion esta el eje x o y, si no para modificar
donde estara situado el eje x y el eje y, en pocas palabras con este podemos modificar en que posicion exacta debe 
estar dicho scroll en en x and y, en nuestra pagina web.

LOCATION

window.location.href --> Devuelve el href (URL) de la pagina actual.

window.location.hostname --> Devuelve el nombre de dominio del servidor web.

window.location.pathname --> Devuelve la ruta y el nombre de archivo de la pagina actual.

window.location.protocol --> Devuelve el protocolor web utilizado (http: o https:).

window.location.assign() --> Carga una nueva url de la pagina dentro de los parentesis podemos
agregar la url que queremos que cargue la pagina actual.

window.location.reload() --> Esta tiene como funcionalidad actualizar la pagina actual.


*/


let hacktheboxURL = "https://www.hackthebox.eu/";
	// let ventana = window.open(hacktheboxURL);

const screenLeft = window.screenLeft;
const screenTop = window.screenTop;

document.write(`Left: <b>${screenLeft}</b><hr> Top: <b>${screenTop}</b>`);

console.info(screen);

let scrolly = window.scrollY;
let scrollx = window.scrollX;

alert(`PosicionX: ${scrollx}            PosicionY: ${scrolly}`);

// const href = window.location.href;
// const hostname = window.location.hostname;
// const pathname = window.location.pathname;
// const protocol = window.location.protocol;
// const assign = window.location.assign("?modificado=true");