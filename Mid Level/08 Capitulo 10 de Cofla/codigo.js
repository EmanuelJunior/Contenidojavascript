/*EJERCICIO COFLA VERSION MIA*/
const button = document.querySelector(".button > button");

/*
la propiedad .length solo sirve para mirar la longitud de cadenas y de arreglos mas no
de valores numericos.
*/

const agregarFragmentos = (notaPre1, notaPre2, nota, container) => {
	// const contenedor = document.createElement("DIV");
	const fragment = document.createDocumentFragment();
	const aproboONo = document.createElement("P");

	const h1 = document.createElement("H1");
	h1.innerHTML = "Notas y Promedio del estudiante";
	h1.classList.add("titulo");

	fragment.appendChild(h1);

	const nota_creada = parseInt(nota);

	const total = parseInt((notaPre1+notaPre2+nota_creada)/3);

	if(total > 7 && total <= 10) aproboONo.innerHTML = "El estudiante aprobo";
	else aproboONo.innerHTML = "El estudiante no aprobo";

	if(aproboONo.innerHTML ==  "El estudiante aprobo") aproboONo.classList.add("verde");
	if(aproboONo.innerHTML ==  "El estudiante no aprobo") aproboONo.classList.add("rojo");


	const nota1 = document.createElement("P");
	const nota2 = document.createElement("P");
	const nota3 = document.createElement("P");
	const promedio = document.createElement("P");

	nota1.innerHTML = `Primera nota: ${notaPre1}`;
	nota2.innerHTML = `Segunda nota: ${notaPre2}`;
	nota3.innerHTML = `Ultima nota: ${nota}`;
	promedio.innerHTML = `Promedio: ${total}`;

	fragment.appendChild(nota1);
	fragment.appendChild(nota2);
	fragment.appendChild(nota3);
	fragment.appendChild(promedio);
	fragment.appendChild(aproboONo);

	container.appendChild(fragment);

	return console.log(typeof(nota_creada));
}


button.addEventListener("click",()=>{
	const nota = document.querySelector("#nota");
	const container = document.getElementById("container");
	const button = document.querySelector(".button > button");
	const form = document.querySelector(".formulario");
	const h1Tag = document.querySelector(".item > h1");
	const container_registro = document.querySelectorAll(".container-registro");

	const {value:nota_value} = nota;
	const valorNota = parseInt(nota_value);
	
	if(valorNota >= 1 && valorNota <= 10){ 
 		container.removeChild(container_registro[0]);
 		agregarFragmentos(9, 10, nota_value, container);

	} else {
		nota.value = "";
		nota.placeholder = "Error al guardar notas";
		nota.classList.add("red");
	} 

});