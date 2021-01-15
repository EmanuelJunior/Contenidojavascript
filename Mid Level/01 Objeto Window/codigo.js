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


*/

let hacktheboxURL = "https://www.hackthebox.eu/";

for(let i = 0; i <= 5; i++){
	let ventana = window.open(hacktheboxURL);
}
