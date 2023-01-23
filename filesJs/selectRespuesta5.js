let infoSesionCount = [];
let SigPoint1 = document.getElementById("btn-Sigfif");
SigPoint1.addEventListener("click", selectionRespuesta);

function selectionRespuesta (){
    let jsonBackInfoSesion = localStorage.getItem("registroSesionesLC");
    let backInfoSesion = JSON.parse(jsonBackInfoSesion);
    let objInfoSesion = backInfoSesion[0];
    let checkBoxRespuestaCorrecta = document.getElementById("2-opcion-5").checked;

    if(checkBoxRespuestaCorrecta === true){
        objInfoSesion.sPoint += 10;
        console.log("Selecciono la respuesta correcta para la primera pregunta y tiene en total "+objInfoSesion.sPoint);
    }else{
            console.log("selecciono la respuesta equivocada para la primera pregunta "+objInfoSesion.sPoint)
    }

    let indexDelete = backInfoSesion.findIndex(x => x.sEmail == objInfoSesion.sEmail);
    backInfoSesion.splice(indexDelete,1);
    backInfoSesion.unshift(objInfoSesion);
    let jsonModifyInfoSesion = JSON.stringify(backInfoSesion);
    localStorage.setItem("registroSesionesLC", jsonModifyInfoSesion);
}