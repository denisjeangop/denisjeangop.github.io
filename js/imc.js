function calculateIMC(){
  //COGEMOS LAS VARIABLES DEL FORMULARIO Y LAS GUARDAMOS EN UNA VARIABLE DE JS
    let cm = +document.getElementById("cm").value;
    let kg = document.getElementById("kg").value;
  //PASAMOS LA ALTURA A METROS
    let altura=cm/100;
    console.log(altura);
  //PASAMOS LA ALTURA A METROS CUADRADOS
    let altura2=altura*altura;
    console.log(altura2);
  //REALIZAMOS LA OPERACIÓN PARA CALULAR EL IMC
    let resultado=kg/altura2;
    console.log(resultado);
  //INICIALIZAMOS PARA QUE CUANDO EL USUARIO QUIERA CALCULAR OTRO IMC SE PONGA EL TEXTO QUE LE HA SALIDO ANTES EN NEGRO
    let muestra=document.getElementById("infrapeso").style.color="black";
    muestra=document.getElementById("infrapeso2").style.color="black";
    muestra=document.getElementById("infrapeso3").style.color="black";
    muestra=document.getElementById("normal").style.color="black";
    muestra=document.getElementById("sobrepeso").style.color="black";
    muestra=document.getElementById("obeso1").style.color="black";
    muestra=document.getElementById("obeso2").style.color="black";
    muestra=document.getElementById("obeso3").style.color="black";
  //HACEMOS IF PARA SABER CUAL ES LA CATEGORIA DEL IMC
    if (resultado<16.00) {
      muestra=document.getElementById("infrapeso").style.color="red";
    } else if ((resultado>16.00) && (resultado<=16.99)) {
      muestra=document.getElementById("infrapeso2").style.color="red";
    } else if ((resultado>=17.00) && (resultado<=18.49)) {
      muestra=document.getElementById("infrapeso3").style.color="red";
    } else if ((resultado>=18.50) && (resultado<=24.99)) {
      muestra=document.getElementById("normal").style.color="red";
    } else if ((resultado>=25.00) && (resultado<=29.99)){
      muestra=document.getElementById("sobrepeso").style.color="red";
    } else if ((resultado>=30.00) && (resultado<=34.99)){
      muestra=document.getElementById("obeso1").style.color="red";
    } else if ((resultado>=35.00) && (resultado<=40.00)){
      muestra=document.getElementById("obeso2").style.color="red";
    } else if (resultado>=40.00){
      muestra=document.getElementById("obeso3").style.color="red";
    }else{
      alert("Introduzca unos valores correctos");
    }
    
}

