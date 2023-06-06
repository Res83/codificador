 var botonEncriptar = document.querySelector(".boton_codificar");
 var botonDescodificar = document.querySelector(".boton_desencriptar");

botonEncriptar.onclick = encriptar_texto;

 function encriptar_texto(){
    area_texto.onfocus;
    monstrar_inferior();
    alert(leer_texto());
  
 }
 function limpiar_area_texto(){
    var area_texto = document.querySelector(".caja_texto_inicial");
    area_texto.value="";

 }
 function leer_texto(){
    var area_texto = document.querySelector(".caja_texto_inicial");
    return area_texto.value;
 }
 function monstrar_inferior(){
    var parte_inferior = document.querySelector(".parte_inferior");
    parte_inferior.classList.add(".esconder");

    var parte_inferior = document.querySelector(".parte_inferior");
    parte_inferior.style.display = "none";
    }

