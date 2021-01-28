
const numeroMaterias = ()=>{
    const fragment = document.createDocumentFragment();
    const form = document.querySelector("#form");
    const numero = document.querySelector("#numero").value;
    const numeroNormal = document.querySelector("#numero");
    const submit = document.querySelector("#submit");
    const nombre = document.querySelector("#nombre");
    const apellidos = document.querySelector("#apellidos");
    const email = document.querySelector("#email");
    const titulo = document.querySelector(".titulo");
    const tituloForm = document.querySelector(".tituloForm");
    const numeroVeces = parseInt(numero);    

    let input;

    if(numero <= 8 && numero >= 1){
        tituloForm.style.display = "block";
        titulo.style.display = "none";
        numeroNormal.disabled = "disabled";
        numeroNormal.style.display = "none";
        submit.style.display = "block";
        nombre.style.display = "block";
        apellidos.style.display = "block";
        email.style.display = "block";
        for(let i = 1; i <= numeroVeces; i++){
            input = document.createElement("INPUT");
            input.type = "text";
            input.placeholder = "materia "+i;
            input.id = i;
            input.name = i+"materia";
            fragment.appendChild(input);
        }
    }else{
        numeroNormal.disabled = "disabled";
        numeroNormal.type = "text";
        numeroNormal.value = "Error no puede superar 8 materias y no puede ser menor a 1";
        submit.disabled = "disabled";
        submit.style.display = "none";
    }

    form.appendChild(fragment);
}

const button = document.getElementById('button');

button.addEventListener("click",()=>{
    button.disabled = "disabled";
    button.style.display = "none";
});

const validar = ()=>{
    const form = document.querySelector("#form");
    const submit_enviar = document.querySelector("#submit_enviar");
    const submit = document.querySelector("#submit");
    const nombre = document.querySelector("#nombre");
    const apellidos = document.querySelector("#apellidos");
    const email = document.querySelector("#email");
    
    const hidden = document.createElement("INPUT");
    hidden.type = "hidden";
    hidden.name = "valor";
    form.appendChild(hidden);

    let cantidad, valor, inputs;
    let nombre_val, apellidos_val, email_val, error;
    let array1 = [];
    let nombre_guardar, apellidos_guardar, email_guardar;

    error = "noError";

    if(nombre.value != "" && apellidos.value != "" && email.value != ""){
        
        if(nombre.value.length >= 3 && !(nombre.value.includes("1")) && !(nombre.value.includes("2")) && !(nombre.value.includes("3")) && !(nombre.value.includes("4")) && !(nombre.value.includes("5")) && !(nombre.value.includes("6")) && !(nombre.value.includes("7")) && !(nombre.value.includes("8")) && !(nombre.value.includes("9")) && !(nombre.value.includes("0"))){
            nombre_guardar = nombre.value;
            nombre.value = "nombre validado correctamente";
            nombre_val = true;
        }else{
            nombre.value = "Nombre Error";
        }
        
        if(apellidos.value.length >= 5 && !(apellidos.value.includes("1")) && !(apellidos.value.includes("2")) && !(apellidos.value.includes("3")) && !(apellidos.value.includes("4")) && !(apellidos.value.includes("5")) && !(apellidos.value.includes("6")) && !(apellidos.value.includes("7")) && !(apellidos.value.includes("8")) && !(apellidos.value.includes("9")) && !(apellidos.value.includes("0"))){
            apellidos_guardar = apellidos.value;
            apellidos.value = "apellidos validado correctamente";
            apellidos_val = true;
        }else{
            apellidos.value = "Apellidos Error";
        }

        if(email.value.length > 6 && (email.value.includes("@gmail.com") || email.value.includes("@hotmail.com"))){
            email_guardar = email.value;
            email.value = "email validado correctamente";
            email_val = true;
        }else{
            email.value = "Nombre Error";
        }

        cantidad = form.childElementCount;
        valor = cantidad - 4;

        for(let i = 1; i <= valor; i++){
            inputs = document.getElementById(i.toString());
            console.log(i);
            
            if(inputs.value.length >= 3 && !(inputs.value.includes("1")) && !(inputs.value.includes("2")) && !(inputs.value.includes("3")) && !(inputs.value.includes("4")) && !(inputs.value.includes("5")) && !(inputs.value.includes("6")) && !(inputs.value.includes("7")) && !(inputs.value.includes("8")) && !(inputs.value.includes("9")) && !(inputs.value.includes("0"))){
                inputs.value = "Materia "+inputs.value+" guardada";
                array1[i] = `${inputs.value}`;
            }else{
                inputs.value = "Error input";
                error = true;
            }

            if(i == valor && error == "noError"){
                setTimeout(()=>{

                    nombre.value = nombre_guardar;
                    apellidos.value = apellidos_guardar;
                    email.value = email_guardar;
                    hidden.value = valor;

                    form.submit();
                    
                    //submit.style.display = "none";
                    //submit_enviar.style.display = "block";

                }, 3000);
            }
 
        }

        if(nombre_val && apellidos_val && email_val){
            alert("Completado");
        }

    }else{
        if(nombre.value == ""){ nombre.placeholder = "Vacio el nombre"; }
        if(apellidos.value == ""){ apellidos.placeholder = "Vacio los apellidos"; }
        if(email.value == ""){ email.placeholder = "Vacio el email"; }
    }
}