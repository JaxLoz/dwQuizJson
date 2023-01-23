let logOut_btn = document.getElementById("btn-logOut");
logOut_btn.addEventListener("click", cierreSesion);

function cierreSesion (){
    window.location.href = "/filesHTML/singIn.html";
}