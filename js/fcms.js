function calculateFCMS() {
  //COGEMOS LAS VARIABLES DEL FORMULARIO Y LAS GUARDAMOS EN UNA VARIABLE DE JS
    let age = +document.getElementById("age").value;
    let sexo = document.getElementById("opciones").value;

    // TOMAMOS LOS ELEMENTOS DE LA LISTA A LOS CUALES LUEGO LES CAMBIAREMOS EL COLOR SEGUN LA FRECUENCIA CARDIACA ADECUADA DEL USUARIO.
    let muestra=document.getElementById("menorM").style.color="black";
    muestra=document.getElementById("menorH").style.color="black";
    muestra=document.getElementById("diezH").style.color="black";
    muestra=document.getElementById("diezM").style.color="black";
    muestra=document.getElementById("mayorH").style.color="black";
    muestra=document.getElementById("mayorM").style.color="black";
    muestra=document.getElementById("viejoM").style.color="black";
    muestra=document.getElementById("viejoH").style.color="black";
    muestra=document.getElementById("jubilada").style.color="black";
    muestra=document.getElementById("jubilado").style.color="black";
    

    // CREAMOS UN IF PARA COMPROBAR LOS PARAMETROS DE EDAD Y SEXO QUE HA INTRODUCIDO EL USUARIO EN EL FORMULARIO, CON ESTOS DATOS ASIGNAREMOS UNA CATEGORIA.
    if (age>=0 && age<=1 && sexo=="mujer") {
       muestra=document.getElementById("menorM").style.color="red";
    } else if (age>=0 && age<=1 && sexo=="hombre") {
      muestra=document.getElementById("menorH").style.color="red";
    } else if (age>=1 && age<=10 && sexo=="mujer") {
      muestra=document.getElementById("diezM").style.color="red";
    } else if (age>=1 && age<=10 && sexo=="hombre") {
      muestra=document.getElementById("diezH").style.color="red";
    } else if (age>10 && age<=20 && sexo=="mujer") {
      muestra=document.getElementById("mayorM").style.color="red";
    } else if (age>10 && age<=20 && sexo=="hombre"){
      muestra=document.getElementById("mayorH").style.color="red";
    } else if (age>20 && age<=50 && sexo=="mujer"){
      muestra=document.getElementById("viejoM").style.color="red";
    } else if (age>20 && age<=50 && sexo=="hombre"){
      muestra=document.getElementById("viejoH").style.color="red";
    } else if (age>50 && sexo=="mujer"){
      muestra=document.getElementById("jubilada").style.color="red";
    } else if (age>50 && sexo=="hombre"){
      muestra=document.getElementById("jubilado").style.color="red";
    }else{
      alert("Introduzca un edad correcta")
    }

  }