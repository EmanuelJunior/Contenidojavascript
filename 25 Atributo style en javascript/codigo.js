/*ATRIBUTO STYLE

El atributo style permite modificar los estilos de un determinado elemento este se puede modificar de dos
formas diferentes, la primera es colocando el elemento.style = "todos los estilos que se vayan a modificar
separados por punto y coma" y la segunda forma es cambiando los estilos del elemento individualmente de esta
manera elemento.style.color = "color que tendra el elemento", si dicho elemento tiene guiones como por ejemplo
background-color lo que hacemos aqui no es copiar elemento.style.background-color si no lo que hacemos separamos
ese guion por mayuscula de la siguiente manera elemento.style.backgroundColor = "background color que se va a aplicar";
de esta manera con cualquier propiedad de css que tenga guiones.*/

const titulo = document.querySelector(".titulo");
titulo.style = "color: red; font-size: 150px; font-family: arial; -webkit-text-stroke: 5px red; text-transform: uppercase; text-align: center; text-shadow: 5px 5px 5px #ccc, 10px 10px 10px #999, 12px 12px 12px #888";

// titulo.style.textShadow = '10px 10px 10px #999',titulo.style.color = 'red';