/*CAPITULO 7 COFLA*/

let alto = window.screen.height;
let ancho = window.screen.width;

/*PROBLEMA 1*/

comprar = confirm(`El alto es: ${alto}, El ancho es: ${ancho}`);

if(comprar){
	comprar += window.alert(`Ha sido comprada la computadora de resolución ${ancho}px x ${alto}px`)
}else{
	comprar += window.alert(`Compra cancelada`);
}

/*PROBLEMA 2*/

let href = window.location.href;
let protocol = window.location.protocol;
let hostname = window.location.hostname;
let pathname = window.location.pathname;

if(hostname == ''){
	hostname = "<b class='rojo'>No se ha encontrado el nombre del dominio</b>";
}

document.write(`<hr>
	<b class='morado'> Url Pagina: </b> <b class='verde'>${href}</b> <br>
	<b class='morado'> Protocolo: </b> <b class='verde'>${protocol}</b> <br>
	<b class='morado'> Nombre del host: </b> ${hostname} <br>
	<b class='morado'> Nombre Pagina actual: </b> <b class='verde'>${pathname}</b> <br>
	<hr>`);