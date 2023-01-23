let registrosSesion = [];
let JSONregistrosSesionBack = localStorage.getItem("registroSesionesLC");
registrosSesion = JSON.parse(JSONregistrosSesionBack);

console.log(registrosSesion);