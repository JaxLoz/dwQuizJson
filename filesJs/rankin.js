function mostrarRankin (valorElemento, idElementoExistente){
    let nuevoElemento = document.createElement("p");
    let datosElemento = document.createTextNode(valorElemento);
    nuevoElemento.appendChild(datosElemento);
    let elementoExistente = document.getElementById(idElementoExistente);
    let padre = elementoExistente.parentNode;
    padre.insertBefore(nuevoElemento, elementoExistente.nextSibling);
}


function rankinQuiz (){
    let jsonBackSesion = localStorage.getItem("registroSesionesLC");
    let backSesion = JSON.parse(jsonBackSesion);
    let rankinSession = backSesion.sort(function(a, b){
        return b.sPoint - a.sPoint;
    })

    let jsonRankinSesion = JSON.stringify(rankinSession);
    localStorage.setItem("registroSesionesLC", jsonRankinSesion);
    for(itemRank in rankinSession){
    let valorElementoP = "<tr><td>"+itemRank+"</tr><td>"+rankinSession[itemRank]["sName"]+"</tr><td>"+rankinSession[itemRank]["sPoint"]
    let newRow = document.createElement("tr")
    newRow.innerHTML = valorElementoP;
    document.getElementById("b-table").appendChild(newRow);
    }
}

rankinQuiz();