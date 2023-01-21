let jsonData;

function siguiente (direccion){
    window.location.href = direccion;
}

function anterior (dirrecion){
    window.location.href = dirrecion;
}

function obtenerJson (){

    
fetch('/registros.json')
  .then(response => response.json())
  .then(jsonString => {
   //localStorage.setItem("lsPreguntas",jsonString)
    localStorage.setItem("registroPreguntas",JSON.stringify(jsonString))
  })
  
  .catch(error => console.error(error))

}

function optenerObjetPreguntas (){
  let stringPreguntasDatos = localStorage.getItem("registroPreguntas");
  let preguntasDatos = JSON.parse(stringPreguntasDatos);
  return preguntasDatos;
}

function establecerQuiz1(){
 
  document.getElementById("firt-question").innerHTML = optenerObjetPreguntas().questions[0].question1;
  document.getElementById("1-respuesta-1").innerHTML = optenerObjetPreguntas().questions[0].opcion1;
  document.getElementById("1-respuesta-2").innerHTML = optenerObjetPreguntas().questions[0].opcion2;
  document.getElementById("1-respuesta-3").innerHTML = optenerObjetPreguntas().questions[0].opcion3;
  document.getElementById("1-respuesta-4").innerHTML = optenerObjetPreguntas().questions[0].opcion4;

} 

function establecerQuiz2(){
 
  document.getElementById("second-question").innerHTML = optenerObjetPreguntas().questions[1].question2
  document.getElementById("2-respuesta-1").innerHTML = optenerObjetPreguntas().questions[1].opcion1;
  document.getElementById("2-respuesta-2").innerHTML = optenerObjetPreguntas().questions[1].opcion2;
  document.getElementById("2-respuesta-3").innerHTML = optenerObjetPreguntas().questions[1].opcion3;
  document.getElementById("2-respuesta-4").innerHTML = optenerObjetPreguntas().questions[1].opcion4;

}

function establecerQuiz3 (){

  document.getElementById("third-question").innerHTML = optenerObjetPreguntas().questions[2].question3
  document.getElementById("3-respuesta-1").innerHTML = optenerObjetPreguntas().questions[2].opcion1;
  document.getElementById("3-respuesta-2").innerHTML = optenerObjetPreguntas().questions[2].opcion2;
  document.getElementById("3-respuesta-3").innerHTML = optenerObjetPreguntas().questions[2].opcion3;
  document.getElementById("3-respuesta-4").innerHTML = optenerObjetPreguntas().questions[2].opcion4;

}

function establecerQuiz4 (){

  document.getElementById("quarte-question").innerHTML = optenerObjetPreguntas().questions[3].question4
  document.getElementById("4-respuesta-1").innerHTML = optenerObjetPreguntas().questions[3].opcion1;
  document.getElementById("4-respuesta-2").innerHTML = optenerObjetPreguntas().questions[3].opcion2;
  document.getElementById("4-respuesta-3").innerHTML = optenerObjetPreguntas().questions[3].opcion3;
  document.getElementById("4-respuesta-4").innerHTML = optenerObjetPreguntas().questions[3].opcion4;

}

function establecerQuiz5 (){

  document.getElementById("fifth-question").innerHTML = optenerObjetPreguntas().questions[4].question5
  document.getElementById("5-respuesta-1").innerHTML = optenerObjetPreguntas().questions[4].opcion1;
  document.getElementById("5-respuesta-2").innerHTML = optenerObjetPreguntas().questions[4].opcion2;
  document.getElementById("5-respuesta-3").innerHTML = optenerObjetPreguntas().questions[4].opcion3;
  document.getElementById("5-respuesta-4").innerHTML = optenerObjetPreguntas().questions[4].opcion4;

}

function establecerTodoQuiz (){

  let pageLocation = window.location.pathname;

  if (pageLocation == "/filesHTML/firtsQuestion.html"){
    establecerQuiz1();
  }else if(pageLocation == "/filesHTML/secondQuestion.html"){
    establecerQuiz2();
  }else if (pageLocation == "/filesHTML/thirdQuestion.html"){
    establecerQuiz3();
  }else if (pageLocation == "/filesHTML/quarteQuestion.html"){
    establecerQuiz4();
  }else if (pageLocation == "/filesHTML/fifthQuestion.html"){
    establecerQuiz5();
  }

}

establecerTodoQuiz();

