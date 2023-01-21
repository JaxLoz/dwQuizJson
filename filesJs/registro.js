let registros = [];


function valores (){
    
    let name = document.getElementById("in-name").value;
    let lastname = document.getElementById("in-lastname").value;
    let email = document.getElementById("in-email").value;
    let password = document.getElementById("in-password").value;

    if (validarCamposVacios(name, lastname, email, password)){

        let LocalStorageBackup = localStorage.getItem("registroUser");

        if(LocalStorageBackup === null){
            registros = [];
        }else{
            registros = JSON.parse(LocalStorageBackup);
        }

        if (validarEmail(registros, email)){
        
            let persona = 
            {
                rName: name,
                rLastname: lastname,
                rEmail: email,
                rPassword: password
            }
        
        registros.push(persona);


        let registrosJson = JSON.stringify(registros);

        localStorage.setItem("registroUser",registrosJson);

        lipiarcampos()

        }else{
            agregarElemtoDom("Esta direccion de correo ya esta en uso", "lb-email", "label", "class", "text-danger")
        }

    }else{
        agregarElemtoDom("Faltan algunos campos por llenar", "title-singUp", "p", "class", "text-center text-danger mt-4 mb-4");
    }
    
}

function validarEmail (array, emailValidar){
    
    for (item in registros){
        if(registros[item]["rEmail"] == emailValidar){
            return false
        }
    }

    return true
}

function validarCamposVacios (cName, cLastname, cEmail, cPassword){
    if(cName == "" || cLastname == "" || cEmail == "" || cPassword == ""){
        return false
    }

    return true
}

function mostrar (){

    let registroBackLocalStorage = localStorage.getItem("registroUser");
    console.log("registrosBack: "+ registroBackLocalStorage);

}

function agregarElemtoDom (texto, idEleExits, typeElement, typeAtribute, atributeValue){
    
    let newElement = document.createElement(typeElement);
    newElement.setAttribute(typeAtribute, atributeValue)
    let textNewElement = document.createTextNode(texto);

    newElement.appendChild(textNewElement);
    let elementExistente = document.getElementById(idEleExits);
    let padreElemntExist = elementExistente.parentNode;

    padreElemntExist.insertBefore(newElement, elementExistente.nextSibling)
}

function lipiarcampos (){
    document.getElementById("in-name").value = ""
    document.getElementById("in-lastname").value = ""
    document.getElementById("in-email").value = ""
    document.getElementById("in-password").value = ""
}