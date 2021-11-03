import validator from './validator.js';
// declaramos las variables globales
let name="";
let numeroVestido;
let numeroTraje;

let botonVerificarNombre=  document.getElementById("botonVerificarNombre");
botonVerificarNombre.addEventListener("click", leerNombre);
function leerNombre() { 
  name=document.getElementById("nombre").value;
  if(name==""){
  alert("Ingresa tu nombre, por favor.");
  return false;
  }
document.getElementById("inicio").style.display="block"; 
document.getElementById("introduccionUno").style.display="none";
document.getElementById("elegirOpcion").style.display="block"; 
document.getElementById("elige").innerHTML=name+", elige qué prenda te gustaria llevar.";
}
 


let inicio= document.getElementById("inicio");
inicio.addEventListener("click",()=>window.location.reload());
inicio.addEventListener("click", volver);
function volver(){
document.getElementById("introduccionUno").style.display="block";
document.getElementById("elegirOpcion").style.display="none";
document.getElementById("vestidoHina").style.display="none";
document.getElementById("trajeAckerman").style.display="none";
}



let opcion1= document.getElementById("btnVestido");
opcion1.addEventListener("click", opcionUno);
function opcionUno(){
document.getElementById("elegirOpcion").style.display='none';
document.getElementById("vestidoHina").style.display="block";
}



let opcion2= document.getElementById("btnTraje");
opcion2.addEventListener("click", opcionDos);
function opcionDos(){
document.getElementById("elegirOpcion").style.display='none';
document.getElementById("trajeAckerman").style.display="block";
}



let x=document.getElementById("numerodataVestido");
  x.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;
  x.value = valorInput.replace(/\s/g, "").replace(/\D/g, "");}
  );

let ingresarNumeroVestido= document.getElementById("ingresarNumeroVestido");
ingresarNumeroVestido.addEventListener("click", btnIngresarV);
function btnIngresarV(){
  numeroVestido=x.value;
  //document.getElementById("cajaDeInfoVestido").style.display="none";
  if(numeroVestido==""){
    alert("Ingresa los digitos de tu tarjeta, por favor.");
    return true
  }
  if(validator.isValid(numeroVestido)==true){
    document.getElementById("cajaDeInfoVestido").style.display="none";
    document.getElementById("resultadoPositivoV").style.display="block";
    document.getElementById("msjPositivoV").innerHTML="¡Gracias por tu compra! tu número de tarjeta "+ validator.maskify(numeroVestido) + " es válida.";
  } else {
    document.getElementById("cajaDeInfoVestido").style.display="none";
    document.getElementById("resultadoNegativoV").style.display="block";
    document.getElementById("msjNegativoV").innerHTML="Lo sentimos, tu número de tarjeta "+ validator.maskify(numeroVestido) + " no es válida.";
   }
}

let btnIntentarlo= document.getElementById("intentarVestido")
btnIntentarlo.addEventListener("click", btnIntentarV)
function btnIntentarV(){
  document.getElementById("cajaDeInfoVestido").style.display="block";
  document.getElementById("resultadoPositivoV").style.display="none";
  document.getElementById("resultadoNegativoV").style.display="none";
}



let y=document.getElementById("numerodataTraje");
  y.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;
  y.value = valorInput.replace(/\s/g, "").replace(/\D/g, "");}
  );

let ingresarNumeroTraje= document.getElementById("ingresarNumeroTraje");
ingresarNumeroTraje.addEventListener("click", btnIngresarT);
function btnIngresarT(){
  numeroTraje=y.value;
  //document.getElementById("cajaDeInfoTraje").style.display="none";
  if(numeroTraje==""){
    alert("Ingresa los digitos de tu tarjeta, por favor.");
    return true
  }
  if(validator.isValid(numeroTraje)==true){
    document.getElementById("cajaDeInfoTraje").style.display="none";
    document.getElementById("resultadoPositivoT").style.display="block";
    document.getElementById("msjPositivoT").innerHTML="¡Gracias por tu compra! tu número de tarjeta "+ validator.maskify(numeroTraje) + " es válida.";
  } else {
    document.getElementById("cajaDeInfoTraje").style.display="none";
    document.getElementById("resultadoNegativoT").style.display="block";
    document.getElementById("msjNegativoT").innerHTML="Lo sentimos, tu número de tarjeta "+ validator.maskify(numeroTraje) + " no es válida.";
   }
}

let intentarTraje= document.getElementById("intentarTraje");
intentarTraje.addEventListener("click", btnIntentarT);
function btnIntentarT(){
  document.getElementById("cajaDeInfoTraje").style.display="block";
  document.getElementById("resultadoPositivoT").style.display="none";
  document.getElementById("resultadoNegativoT").style.display="none";
}

