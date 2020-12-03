// class Caracteristicas{
// 	constructor(color, peso, resoluCamara, resoluPantalla, ram, marca){
// 		this.color = color;
// 		this.peso = peso;
// 		this.resoluCamara = resoluCamara;
// 		this.resoluPantalla = resoluPantalla;
// 		this.ram = ram;
// 		this.marca = marca;
// 	}

// 	get getColor(){
// 		return this.color;
// 	}

// 	get getPeso(){
// 		return this.peso;
// 	}

// 	get getResoluCamara(){
// 		return this.resoluCamara;
// 	}

// 	get getResoluPantalla(){
// 		return this.resoluPantalla;
// 	}

// 	get getRam(){
// 		return this.ram
// 	}

// 	get getMarca(){
// 		return $this.marca;
// 	}

// }

// const Caracteristicas1 = new Caracteristicas();
// const Caracteristicas2 = new Caracteristicas();
// const Caracteristicas3 = new Caracteristicas();

// class Funcionalidades extends Caracteristicas{
// 	constructor(color, peso, resoluCamara, resoluPantalla, ram, marca){
// 		super(color, peso, resoluCamara, resoluPantalla, ram, marca);
// 	}

// 	inicioCell(){
// 		decision = confirm("Indique si su celular esta prendido, si esta apagado de confirm si no cancelar");
// 		cadena = "";
// 		if(decision == false){
// 			decision2 = confirm("Si quiere apagar su dispositivo presione confirm, si no cancelar");

// 			if(decision2){
// 				cadena += "Dispostivo apagado correctamente";
// 			}

// 			decision3 = confirm("Quiere reiniciar su dispositivo?");
		
// 			if(decision3){
// 				cadena += "Dispositivo se esta reiniciando...";
// 			}else{
// 				cadena += "Dispositivo no se ha reiniciado";
// 			}

// 		}else{
// 			cadena = alert("Encendiendo dispositivo...");
// 			cadena += alert("Encendido correctamente");
// 		}
// 	}

// 	camara(){
// 		 let decision = confirm("De click a confirmar si quiere grabar, pero si quiere tomar fotos de cancelar");
// 		 let cadena, decision2, fotos, i;
// 		if(decision){
// 			cadena = alert("Haciendo grabacion...");
// 			cadena += alert("Cuando quiera finalizar grabacion presione confirm")
// 			decision2 = confirm();

// 			if(decision2){
// 				cadena += alert("Grabacion guardada...");
// 			}
// 		}else{
// 			fotos = prompt("Indique la cantidad de fotos que desea tomar");
// 			cadena += alert(`Cada vez que de aceptar se tomara una foto, hasta que llegue al limite de fotos que tomo`);
// 			for(i = 1; i <= fotos; i++){
				
// 				cadena += alert(`Tomando foto, cantidad de fotos tomadas: ${i}`);
// 			}

// 			cadena += alert("Fotos almacenadas correctamente...");
// 		}
// 	}
// }

// class Celular extends Funcionalidades{
// 	constructor(color, peso, resoluCamara, resoluPantalla, ram, marca){
// 		super(color, peso, resoluCamara, resoluPantalla, ram, marca);
// 	}

// 	mostrarCaracteristicas(){
// 		alert(`Caracteristicas dispositivo:
// 		color: ${this.color}
// 		peso: ${this.peso}
// 		Resolucion camara: ${this.resoluCamara}
// 		Resolucion Pantalla: ${this.resoluPantalla}
// 		Memoria Ram: ${this.ram}
// 		Marca: ${this.marca}
// 		`);
// 	}

// 	mostrarCarecPorPantalla(){
// 		document.write(`<h1>Caracteristicas del celular marca: ${this.marca}</h1><hr>`);

// 		document.write(`<li>El color es: ${this.color}</li><hr>`);
// 		document.write(`<li>El peso es: ${this.peso}</li><hr>`);
// 		document.write(`<li>La Resolucion camara es: ${this.resoluCamara}</li><hr>`);
// 		document.write(`<li>La Resolucion pantalla es: ${this.resoluPantalla}</li><hr>`);
// 		document.write(`<li>La Memoria ram es: ${this.ram}</li><hr>`);
// 	}
// }

// celular1 = new Celular("dorado","200gr","64px","FULL HD", "6GB", "Iphone");
// celular2 = new Celular("blanco","180gr","32px","FULL HD+", "4GB","Samsung");
// celular3 = new Celular("negro","240gr","128px","FULL HD plus", "8GB", "Huawei");

// celular1.mostrarCaracteristicas();
// celular2.mostrarCaracteristicas();
// celular3.mostrarCaracteristicas();

// celular1.mostrarCarecPorPantalla();
// celular2.mostrarCarecPorPantalla();
// celular3.mostrarCarecPorPantalla();






/*FORMA HECHA POR EL PROFESOR*/

class Celulares{
	constructor(color, peso, tamaño, rdp, rdc, ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDePantalla = rdp;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}

	presionarBotonEncendido(){
		if(this.encendido == false){
			alert("Celular prendido");
			this.encendido = true;
		}else{
			alert("Celular apagado");
			this.encendido = false;
		}
	}

	reiniciar(){
		if(this.encendido == true){
			alert("Reiniciando celular");
		}else{
			alert("El celular está apagado");
		}
	}

	tomarFotos(){
		alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
	}
	grabarVideo(){
		alert(`Grabando video en ${this.resolucionDeCamara}`);
	}

	mobileInfo(){
		return `
		Color: <b>${this.color}</b><hr>
		Peso: <b>${this.peso}</b><hr>
		Tamaño: <b>${this.tamaño}</b><hr>
		Resolucion de Video: <b>${this.resolucionDeCamara}</b><hr>
		Resolucion de Camara: <b>${this.resolucionDePantalla}</b><hr>
		Memoria Ram: <b>${this.memoriaRam}</b><hr>
		`;
	}

}

class celularAltaGama extends Celulares{
	constructor(color, peso, tamaño, rdp, rdc, ram, rdce){
		super(color, peso, tamaño, rdp, rdc, ram);
		this.resolucionDeCamaraExtra = rdce;
	}

	grabarVideoLento(){
		alert("Estas grabando en camara lenta");
	}
	reconocimientoFacial(){
		alert("Vamos a iniciar un reconocimiento facial");
	}

	infoAltaGama(){
		return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
	}
}


 celularN1 = new Celulares("Rojo","150gr", "5", "64px", "full hd", "4GB");
 celularN2 = new Celulares("Negro","200gr", "5", "128px", "full hd pro", "6GB");
 celularN3 = new Celulares("Blanco","210gr", "5", "64px", "full hd +", "8GB");


 celularN1.presionarBotonEncendido();
 celularN1.tomarFotos();
 celularN1.grabarVideo();
 celularN1.reiniciar();
 celularN1.presionarBotonEncendido();


 celularN1 = new celularAltaGama("Rojo", "130gr", "5.4", "4k", "128px", "6GB", "8k");
 celularN2 = new celularAltaGama("Rojo", "200gr", "7.4", "2k", "128px", "4GB", "8k");
 celularN3 = new celularAltaGama("Rojo", "250gr", "6.5", "8k", "128px", "8GB", "8k");

 document.write(`
 ${celularN1.infoAltaGama()}<hr><br><br>
 ${celularN2.infoAltaGama()}<hr><br><br>
 ${celularN3.infoAltaGama()}<hr><br><br>

 `);





