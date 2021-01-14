let nombre, dinero, validacion, sobrante, validacion2;
let helado6, helado1, helado16, helado17, helado18, helado291, helado292;

helado6 = "Palito de helado de agua";
helado1 = "Palito de helado de crema";
helado16 = "Bombon helado marca heladix";
helado17 = "Bombon helado marca heladovich";
helado18 = "Bombon helado marca helardo";
helado291 = "Potecito de helado con confites";
helado292 = "Pote de 1/4 KG";

validacion2 = 0;

nombre = prompt("Dime tu nombre porfavor");
dinero = prompt("Cuanto dinero tienes para comprar");
dinero_convertido = parseInt(dinero);




if(dinero >= 0.6 && dinero < 1 ){
	alert(`El helado mas caro que puede comprar con el dinero que tiene es: ${helado6} con un precio de 0.6$`);
	validacion = confirm("Desea comprarlo?");

	if(validacion == true){
		sobrante = (dinero_convertido - 0.6).toFixed(3);
		alert(`Compra exitosa sobrante: ${sobrante}$ comprado por: ${nombre}`);
	}else{
		alert("Gracias por su atención vuelva pronto");
	}	

}else if(dinero >= 1 && dinero < 1.6){
	alert(`El helado mas caro que puede comprar con el dinero que tiene es: ${helado1} con un precio de 1.0$`);
	validacion = confirm("Desea comprarlo?");

	if(validacion == true){
		sobrante = (dinero_convertido - 1.0).toFixed(2);
		alert(`Compra exitosa sobrante: ${sobrante}$ comprado por: ${nombre}`);
	}else{
		alert("Gracias por su atención vuelva pronto");	
	}
}else if(dinero >= 1.6 && dinero < 1.7){
	alert(`El helado mas caro que puede comprar con el dinero que tiene es: ${helado16} con un precio de 1.6$`);
	validacion = confirm("Desea comprarlo?");

	if(validacion == true){
		sobrante = (dinero_convertido - 1.6).toFixed(2);
		alert(`Compra exitosa sobrante: ${sobrante}$ comprado por: ${nombre}`);
	}else{
		alert("Gracias por su atención vuelva pronto");
	}
}else if(dinero >= 1.7 && dinero < 1.8){
	alert(`El helado mas caro que puede comprar con el dinero que tiene es: ${helado17} con un precio de 1.7$`);
	validacion = confirm("Desea comprarlo?");

	if(validacion == true){
		sobrante = (dinero_convertido - 1.7).toFixed(2);
		alert(`Compra exitosa sobrante: ${sobrante}$ comprado por: ${nombre}`);
	}else{
		alert("Gracias por su atención vuelva pronto");	
	}
}else if(dinero >= 1.8 && dinero < 2.9){
	alert(`El helado mas caro que puede comprar con el dinero que tiene es: ${helado18} con un precio de 1.8$`);
	validacion = confirm("Desea comprarlo?");

	if(validacion == true){
		sobrante = (dinero_convertido - 1.8).toFixed(2);
		alert(`Compra exitosa sobrante: ${sobrante}$ comprado por: ${nombre}`);
	}else{
		alert("Gracias por su atención vuelva pronto");
	}
}else if(dinero == 2.9 || dinero > 2.9){
	alert(`El helado mas caro que puede comprar con el dinero que tiene es: ${helado291} o ${helado292} con un precio de 2.9$`);
	
	while(validacion2 == 0 || validacion2 > 2){	
		validacion2 = parseInt(prompt(`Si desea comprar el helado ${helado291} escriba 1, pero si desea el helado ${helado292} escriba 2`));
	}
	

	validacion = confirm("Desea comprarlo?");

	if(validacion == true && validacion2 == 1){
		sobrante = (dinero_convertido - 2.9).toFixed(2);
		alert(`Compra exitosa sobrante: ${sobrante}$ comprado por: ${nombre}, nombre del helado: ${helado291}`);
	}else if(validacion == true && validacion2 == 2){
		sobrante = (dinero_convertido - 2.9).toFixed(2);
		alert(`Compra exitosa sobrante: ${sobrante}$ comprado por: ${nombre}, nombre del helado: ${helado292}`);
	}else{
		alert(`Ningun helado ha sido escojido`);
	}
}else{
	alert(`El dinero que posee no es suficiente para comprar ningun helado, su dinero es: ${dinero}$`);
}

/*
ParseInt() -> este es una función que nos permite convertir cualquier valor en entero ya sea string o cualquier
variable.
*/