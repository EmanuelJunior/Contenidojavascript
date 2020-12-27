/*ATRIBUTOS DE INPUTS

variableSelectorInput.className -> Esto devuelve el nombre del selector de dicho input por ejemplo
si creamos una variable input const input = document.querySelector(".input-normal"); el selector 
en este caso que representa dicha etiqueta es la class='input-normal' entonces al utilizar el
className devolvera -> input-normal

variableSelectorInput.value -> Este devuelve el valor que nosotros le hayamos colocado al input, por ejemplo
si colocamos a un input type='text' el value='Buenos dias' entonces nosotros al escribir .value nos devolvera
Buenos dias.

variableSelectorInput.type = "text" -> Esto lo que permite hacer es agregar o cambiar el atributo type en un input
en si es la funcionalidad de esta manera no deberiamos utilizar .setAttribute();
 
variableSelectorInput.accept = "image/png o imgage/gif", esto es utilizado para los input type='file'
la funcionalidad es que automaticamente nosotros al subir una imagen, predeterminadamente solo muestre las imagenes
con dicha extension que colocamos de esta manera podemos obligar a que el usuario soloo ponga dichas imagenes con dicha
extensión.

form es un atributo que se utiliza normalmente en los input type='submit' con el fin de relacionar
formularios con el input submit pero sin necesidad de que el input este dentro de la etiqueta form,
hay que tener en cuenta que la etiqueta form debe tener un id, y ese id es el que pondremos en el input
en el atributo form. ejemplo

<form id='formulario'>
	<input type='text' placeholder='nombre'>
	<input type='text' placeholder='apellidos'>
	<input type='text' placeholder='idioma'>
</form> 

<input type='submit' form='formulario'>

Al hacer esto estaremos creando la relacion del formulario
con el input submit provocando que al presionar el boton lleve la informacion a el servidor.
ejemplo javascript

inputSubmit.form = 'formulario'; -> <input type='submit' form='formulario'>

variableSelectorInput.minLength = numero; -> el minlength es un atributo para los input que permite
poner un limite de cantidad de caracteres que se pueden colocar por ejemplo si decimos
que tenga un minLength de 5 lo que quiere decir es que el input minimamente debe tener 5 caracteres.

variableSelectorInput.maxLength = numero; el maxlength e el que permite poner un limite en los input 
en cuestion a la cantidad maxima de caracteres que puede tener un input si le decimos por ejemplo 10 
solo podra tener ese maximo de caracteres en el input.

variableSelectorInput.placeholder = nombre; el placeholder es un atributo que su funcionalidad es poner
un texto en un input que al dar click y escribir desaparecera.

variableSelectorInput.required = true; este atributo tiene como funcionalidad permitir que no se envien los
datos de un formulario si no se ha llenado el campo que tenga dicho atributo.*/