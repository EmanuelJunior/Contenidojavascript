/*
CREACION DE ELEMENTOS

document.createElement("ETIQUETA HTML EN MAYUSCULA") -> Es un metodo que tiene como finalidad
crear un elemento html, hay que tener en cuenta que para crear dicho elemento html debemos
escribir la etiqueta en mayuscula de lo contrario no se creara dicho elemento y tambien 
necesitamos una variable en la cual guardar dicho elemento creado.

Cada vez que queramos crear multiples elementos es necesario requerir a tener una variable con cada
elemento que se vaya a crear por ejemplo si queremos crear 6 elementos <li> debemos crear 6 variables
que contengan dichos elementos para poder llenarlos de contenido e introducirlos en el elemento padre,
porque una sola variable con el elemento creado no funciona para cada uno de los elementos que se vayan
a crear.

document.createTextNode()-> Es un metodo que tiene como funcionalidad crear texto para dicha etiqueta 
html con el fin de poder unirla a nuestro contenedor donde ira contenido nuestro elemento.
Para poder utilizar esta debemos guardar dicho metodo con el texto en una variable para de
esta manera utilizarla y introducirla en el elemento html.

Claramente tambien podemos hacer esto con el .innerHTML.

appendChild() -> Este es un metodo que afecta directamente a los elementos hijos de un contenedor
hay que tener en cuenta que aunque afecta a los elementos hijos de igual manera este se utiliza en
el contenedor padre, en su mayoria la funcionalidad que tiene es de introducir elementos html dentro
de un contenedor padre.

document.createDocumentFragment() -> Es un metodo que facilita mucho la creacion de multiples elementos html debido
a que este metodo se podria decir que es como un array en donde podemos guardar muchos elementos html y despues
de que acabemos de guardar los diferentes elementos html en ese momento podemos introducirlos dentro del contenedor
padre para poder que todos los elementos guardados en dicho metodo se pasen directamente al elemento padre.
*/

// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI");

// const textDelItem = document.createTextNode("Este es un item de la lista");

// item.appendChild(textDelItem);

// contenedor.appendChild(item);

// console.log(item);

// const fragmento = document.createDocumentFragment();

// const contenedor = document.querySelector(".contenedor");

// const fragment = document.createDocumentFragment();

// const elemento = document.createElement("LI");
// elemento.innerHTML = "Hello world desde Colombia";
// fragment.appendChild(elemento);

// const elemento1 = document.createElement("LI");
// elemento1.innerHTML = "Hello world desde Brasil";
// fragment.appendChild(elemento1);


// console.log(fragment);

// contenedor.appendChild(fragment);

