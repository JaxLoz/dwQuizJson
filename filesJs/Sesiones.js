let puntosAcumulados = 0;
let registrosUsuarios = [];
let registrosSesiones = [];

let login_btn = document.getElementById("btn-login");
login_btn.addEventListener("click", obtenerInfoSesiones);

function obtenerInfoSesiones (){
    
    let usuariosRegistrados = localStorage.getItem("registroUser"); // se guarda el registro de usuario que esta en localstorage
    registrosUsuarios = JSON.parse(usuariosRegistrados); // se convierte a un objeto js y se guarda en la variable registrosusuarios
    let emailSesion = document.getElementById("l-email").value; // se obtiene el valor del campo del email del formulario de login 
    let nameUser = "";
    let indexEmail = 0;
    indexEmail = registrosUsuarios.findIndex(x => x.rEmail == emailSesion);
    nameUser = registrosUsuarios[indexEmail]["rName"];

    let sesionInformation = // establecemos un objeto pasando como valores el nombre y el email del usuario
    { 
        sName: nameUser,
        sEmail: emailSesion,
        sPoint: 0
    }

    if(localStorage.getItem("registroSesionesLC") == null){

    registrosSesiones.unshift(sesionInformation); // agregamos el objeto al arreglo de las sesiones 
    let JSONregistrosSesines = JSON.stringify(registrosSesiones); // convetirmos el objeto en un JSON y lo guardmos en una variable 
    localStorage.setItem("registroSesionesLC", JSONregistrosSesines); // almacenamos al json en el localStorage

    console.log(registrosSesiones);

    }else{

        
        let indexEmailRegistrado = 0;
        let registrosSesionesBack = localStorage.getItem("registroSesionesLC");
        registrosSesiones = JSON.parse(registrosSesionesBack);
        indexEmailRegistrado = registrosSesiones.findIndex(m => m.sEmail == emailSesion);
        
        if (indexEmailRegistrado != -1){
            registrosSesiones.splice(indexEmailRegistrado,1);
        }
        
        registrosSesiones.unshift(sesionInformation);
        let JSONregistroSesiones2 = JSON.stringify(registrosSesiones);
        localStorage.setItem("registroSesionesLC", JSONregistroSesiones2);

    }

}


/*
function respuestaQuiz1 (){
    let checkBoxRespuestaCorrecta = document.getElementById("3-opcion-1").checked;
    if(checkBoxRespuestaCorrecta === true){
        puntosAcumulados += 10;
        console.log("Selecciono la respuesta correcta para la primera pregunta y tiene en total "+puntosAcumulados);
    }else{
        console.log("selecciono la respuesta equivocada para la primera pregunta")
    }
}

function respuestaQuiz2 (){
    let checkBoxRespuestaCorrecta = false;
    checkBoxRespuestaCorrecta = document.getElementById("4-opcion-2").checked;
    if(checkBoxRespuestaCorrecta === true){
        sesionInformation.sPoint += 10;
        console.log("Selecciono la respuesta correcta para la primera pregunta y tiene en total "+puntosAcumulados);
        checkBoxRespuestaCorrecta = false;
    }else{
        console.log("Selecciona la respuesta equivocada para la pregunta dos");
    }
}
*/