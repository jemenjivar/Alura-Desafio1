var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var munehco = document.querySelector(".munehco");
var aviso = document.querySelector(".aviso");
var parrafo = document.querySelector(".parrafo");
var texto = document.querySelector(".textoFinal");
var botonCopiar = document.querySelector(".botonCopiar")

botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;

function encriptarMensaje(){
   desapareceFrente();
   texto.textContent = procesoEncriptar(recuperarMensaje());
}

function desencriptarMensaje(){ 
  desapareceFrente();
  texto.textContent = procesoDesencriptar(recuperarMensaje());
}

function recuperarMensaje(){
  var texto = document.querySelector(".texto");
  return texto.value;
}

function desapareceFrente(){
  munehco.classList.add("borrarSeccion");
  aviso.classList.add("borrarSeccion");
  parrafo.classList.add("borrarSeccion");
}

function procesoEncriptar(mensaje){
  var texto = mensaje;
  var mensajeFinal = "";

  for(var i = 0; i < texto.length; i++){
    if(texto[i] == "a"){
      mensajeFinal = mensajeFinal + "ai"
    }
    else if(texto[i] == "e"){
      mensajeFinal = mensajeFinal + "enter"
    }
    else if(texto[i] == "i"){
      mensajeFinal = mensajeFinal + "imes"
    }
    else if(texto[i] == "o"){
      mensajeFinal = mensajeFinal + "ober"
    }
    else if(texto[i] == "u"){
      mensajeFinal = mensajeFinal + "ufat"
    } 
    else{
      mensajeFinal = mensajeFinal + texto[i];
    }
  }
 return mensajeFinal;
}

function procesoDesencriptar(mensaje){
  var texto = mensaje;
  var mensajeFinal = "";

  for(var i = 0; i < texto.length; i++){
    if(texto[i] == "a"){
      mensajeFinal = mensajeFinal + "a"
        i = i +1;
    }
    else if(texto[i] == "e"){
      mensajeFinal = mensajeFinal + "e"
      i = i +4;
    }
    else if(texto[i] == "i"){
      mensajeFinal = mensajeFinal + "i"
      i = i +3;
    }
    else if(texto[i] == "o"){
      mensajeFinal = mensajeFinal + "o"
      i = i +3;
    }
    else if(texto[i] == "u"){
      mensajeFinal = mensajeFinal + "u"
      i = i +3;
    }   
    else{
      mensajeFinal = mensajeFinal + texto[i];
    }
  }
 return mensajeFinal;
}

/* Esta es la rutina del proceso de copiar que no me funciona */
function copiarMensaje(){
    var copiarMensaje = document.getElementsByClassName(".texto");

}