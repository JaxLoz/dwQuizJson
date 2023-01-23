let registros = [];
let btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", SubirPreguntasLocalStorage);

function SubirPreguntasLocalStorage (){
    fetch('/registros.json')
  .then(response => response.json())
  .then(jsonString => {
   //localStorage.setItem("lsPreguntas",jsonString)
    localStorage.setItem("registroPreguntas",JSON.stringify(jsonString))
  })
  
  .catch(error => console.error(error))
}

function loadRegister (){
    
    if(localStorage.getItem("registroUser") == null){
        localStorage.setItem("registoUser", "");
    }else{
        jsonRegister = localStorage.getItem("registroUser");
        registros = JSON.parse(jsonRegister)

    }
}

function creatNodeDOM (idElemExistente,tipoElemen, valorElemen, atributo, atributoValor, atributo2, atributoValor2){
    let newElement =document.createElement(tipoElemen);
    newElement.setAttribute(atributo, atributoValor);
    newElement.setAttribute(atributo2, atributoValor2)
    let valueElement = document.createTextNode(valorElemen);
    newElement.appendChild(valueElement);
    let elementExistent = document.getElementById(idElemExistente);
    let father = elementExistent.parentNode;
    father.insertBefore(newElement, elementExistent.nextSibling)

}

function validarEmail (email){
    for (item in registros){
        if(registros[item]["rEmail"] == email){
            return true;
        }
    }

    return false;
}

function validarPasswoerd (password){
    for(item in registros){
        if (registros[item]["rPassword"] == password){
            return true;
        }
    }
    return false;
}

function camposVacios (fieldEmail, fieldPassword){
    if (fieldEmail == "" || fieldPassword == ""){
        return false
    }else{
        return true;
    }

}

function delteElement (idElemnt){
    let elemento = document.getElementById(idElemnt);
    let padreElemento = elemento.parentNode;
    padreElemento.removeChild(elemento);
}

function focusFieldEmail (){
    let estado = false;

    let fieldEmail = document.getElementById("l-email");
    fieldEmail.addEventListener("focus", function() {
        estado = true;
    })

    return estado;
}

function login (){
    
    loadRegister();

    let email = document.getElementById("l-email").value;
    let password = document.getElementById("l.password").value;

    if (camposVacios(email, password)){

        

        if(validarEmail(email) == true && validarPasswoerd(password) == true){
            
            window.location.href="/filesHTML/firtsQuestion.html";
        }else{
            creatNodeDOM("msg-login", "p", "Sus credenciales son incorrectas", "class", "text-center text-danger mt-2 mb-4","id", "alert-1");
        }

    }else{
        creatNodeDOM("msg-login", "p", "Tiene campos vacios", "class", "text-center text-danger mt-2 mb-4", "id", "alert-2");
        
    }

}