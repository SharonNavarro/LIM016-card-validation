const validator = {
//VALIDADOR
isValid: function (numero)
  {
    //declaro las variables, lo convierto en array y lo pongo de reversa
  let numero= document.getElementById("numerodata");
  let creditCard=Array.from(numero).map(Number).reverse();
  let sumaTotal=0;
    //hago un for para pasar los indices
  for (i=0; i<=creditCard.lenght; i++) 
  {
    //condiciono si los indices son pares y luego lo duplico
    if ([i]%2!==0) 
    {
      let creditCardNumber = creditCard[i]*2;
      //condiciono si el resultado es mayor a 9 y le resto 9
      if (creditCardNumber > 9) 
      {
        creditCardNumber -= 9;
      }
    }
    sumaTotal = creditCardNumber.reduce((total, value) => total + value, 0);
  }
   return sumaTotal%10==0;
  },
  
  maskify: function (numero) 
  {
  //declaramos dos variables. La primera sera para el segmento que no se mostrará y el segundo sí. Utilizo slice para cortar la longitud que deseo      
  let numero=document.getElementById(numerodata);
  let numeroNoVisible = numero.slice(0, -4);
  let numeroVisible = numero.slice(-4)
  //consultar si se puede utilizar la expresion regular "replace(/[a-zA-Z]/g, '#')"
  //se convierte a array y con la funcion map se creo un subArray con la function(digito) que recorrerá cada item
 numeroNoVisible = numeroNoVisible.split('').map(function(digito) {
    return digito = "#"})
//se retorna a string
  numeroNoVisible = numeroNoVisible.join('');
//se retorna el valor final juntando las dos variables concatenandolo
  return numeroNoVisible.concat(numeroVisible);
},
}
export default validator;
