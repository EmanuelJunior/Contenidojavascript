const parrafos = document.getElementsByTagName("p");
const parrafoId = document.getElementById('parrafo');
const firstParrafo = document.querySelector(".parr");
const allParrafos = document.querySelectorAll(".parr"); 

parrafoId.style.color = 'green';
parrafos[0].innerHTML ="parrafo 1".toUpperCase();
parrafos[1].innerHTML ="parrafo 2".toUpperCase();
parrafos[2].innerHTML ="parrafo 3".toUpperCase();
parrafos[3].innerHTML ="parrafo 4".toUpperCase();
parrafos[4].innerHTML ="parrafo 5".toUpperCase();

parrafos[0].style.color = "orange",parrafos[1].style.color = "pink",parrafos[2].style.color = "gold",parrafos[3].style.color = "yellowgreen",parrafos[4].style.color = "red";
parrafos[0].style.webkitTextStroke = ".4px black",parrafos[1].style.webkitTextStroke = ".4px black",parrafos[2].style.webkitTextStroke = ".4px black",parrafos[3].style.webkitTextStroke = ".4px black",parrafos[4].style.webkitTextStroke = ".4px black";

firstParrafo.style = `
	color: orange;
	font-size: 23px;
	font-weight: 900;
	-webkit-text-stroke: 1px black;
	text-shadow: 0 0 10px #999, 0 0 15px #aaa;
`;

allParrafos[1].style = `
	color: pink;
	text-transform: uppercase;
	font-size: 23px;
	font-weight: 900;
	-webkit-text-stroke: 1px black;
	text-shadow: 0 0 10px #999, 0 0 15px #aaa;
`;

allParrafos[2].style = `
	color: gold;
	text-transform: uppercase;
	font-size: 23px;
	font-weight: 900;
	-webkit-text-stroke: 1px black;
	text-shadow: 0 0 10px #999, 0 0 15px #aaa;
`;

allParrafos[3].style = `
	color: yellowgreen;
	text-transform: uppercase;
	font-size: 23px;
	font-weight: 900;
	-webkit-text-stroke: 1px black;
	text-shadow: 0 0 10px #999, 0 0 15px #aaa;
`;

allParrafos[4].style = `
	color: red;
	text-transform: uppercase;
	font-size: 23px;
	font-weight: 900;
	-webkit-text-stroke: 1px black;
	text-shadow: 0 0 10px #999, 0 0 15px #aaa;
`;

const h1Title = document.getElementById("h1-title");

h1Title.setAttribute("contentEditable","true");
h1Title.style = `
	color: gold;
	font-weight: 900;
	text-shadow: 0 0 10px #bbb, 0 0 20px #ccc;
	text-transform: uppercase;
	-webkit-text-stroke: .5px black;
`;

h1Title.setAttribute("dir","rtl");
h1Title.hidden = true;
h1Title.removeAttribute("hidden");

const inputs = document.querySelectorAll("input");

// let valor = prompt("Diga el tipo de parrafo al que quiere cambiar el input type='text'");
// if(valor !== "file" && valor !== "number"){
// 	inputs[0].type = `${valor}`;
// }else if(valor === "file"){
// 	let valor2 = prompt("Diga el tipo de imagen que quiere que se suba en el input type='file'");
// 	inputs[0].type = `${valor}`;
// 	inputs[0].accept = `image/${valor2}`;
// }else if(valor === "number"){
// 	let minLength = prompt("Diga el numero minimo que se puede ingresar");
// 	let maxLength = prompt("Diga el numero maximo que se puede ingresar");

// 	inputs[0].type = `${valor}`;
// 	inputs[0].setAttribute('min', minLength);
// 	inputs[0].setAttribute('max', maxLength);;
// 	inputs[0].value = minLength;
// }


inputs[2].value = "input text";
inputs[2].placeholder = "NameHere";
inputs[2].required = true;

firstParrafo.classList.add("nuevaClass");
// firstParrafo.classList.remove("nuevaClass");
let res = firstParrafo.classList.contains("nuevaClass");
console.log(res);

firstParrafo.innerHTML = "Cambiando el texto exitosamente ok? ...".toUpperCase();
firstParrafo.textContent = "Cambiando el texto exitosamente ok? ...".toLowerCase();
firstParrafo.classList.toggle("nuevaClass");

const content = document.querySelector(".contenedor");
let primerHijo = content.firstElementChild;
let ultimoHijo = content.lastElementChild;
console.log(primerHijo);
console.log(ultimoHijo);

let allHijos = content.children;

for(hijo of allHijos){
	console.log(hijo);
}

const padre = document.querySelector(".padre");

const elementoParrafos_antiguo = document.createElement("P");
const elementoParrafos2_antiguo = document.createElement("P");
const elementoLi_antiguo = document.createElement("LI");

const negrita_antigua = document.getElementById("negrita");

const elementoB_nuevo = document.createElement("B");

const fragment = document.createDocumentFragment();

padre.style = `
	width: 90%;
	background-color: #333;
	padding: 10px;
	border-radius: 5px;
	box-shadow: 0 0 10px #ccc, 0 0 15px #999, 0 0 20px #888;
	position: relative;
	margin: 20px auto;
`;

elementoParrafos_antiguo.innerHTML = "Esto es un hermoso parrafo :3";
elementoParrafos2_antiguo.innerHTML = "Esto es un parrafo horroroso D:";
elementoLi_antiguo.innerHTML = "Esto es un elemento de lista <3";

// texto = document.createTextNode("Esto es un elemento de negrita <3");
// elementoB_nuevo.appendChild(texto);

elementoB_nuevo.innerHTML = "Esto es un elemento de negrita <3";

elementoLi_antiguo.style.color = "pink";
elementoB_nuevo.style.color = "yellowgreen";
elementoParrafos_antiguo.style.color = "goldenrod";
elementoParrafos2_antiguo.style.color = "tomato";

fragment.appendChild(elementoParrafos_antiguo);
fragment.appendChild(elementoParrafos2_antiguo);
fragment.appendChild(elementoLi_antiguo);

padre.appendChild(fragment);

padre.replaceChild(elementoB_nuevo, negrita_antigua);

console.log(elementoParrafos_antiguo.nextElementSibling);
console.log(elementoParrafos_antiguo.previousElementSibling);











