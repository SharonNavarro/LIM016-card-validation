const validator =
{
  //VALIDADOR
  isValid: function (numeroTarjeta) {
    //declaro las variables, lo convierto en array y lo pongo de reversa
    let creditCard = Array.from(numeroTarjeta).map(Number).reverse();
    //console.log(creditCard);
    let sumaTotal = 0;
    //hago un for para pasar los indices
    for (let i = 0; i < creditCard.length; i++) {
      //condiciono si los indices NO son pares y luego lo duplico
      if (i % 2 !== 0) {
        creditCard[i] = creditCard[i] * 2;
        //condiciono si el resultado es mayor o igual a 10 y le resto 9
        if (creditCard[i] >= 10) {
          creditCard[i] -= 9;
        }
      }
      //sumaTotal = creditCard.reduce((total, value) => total + value);
      sumaTotal += creditCard[i]
    }
    //console.log(creditCard);
    //console.log(sumaTotal);
    return sumaTotal % 10 == 0;
  },

  maskify: function(numeroTarjeta) {
//console.log(numeroTarjeta);
    //declaramos dos variables. La primera sera para el segmento que no se mostrará y el segundo sí. Utilizo slice para cortar la longitud que deseo      
    let numeroNoVisible = Array.from(numeroTarjeta).slice(0, -4);
    //console.log(numeroNoVisible);
    let numeroVisible = Array.from(numeroTarjeta).slice(-4); 
    //console.log(numeroVisible);
    //consultar si se puede utilizar la expresion regular "replace(/[a-zA-Z]/g, '#')"
    //se convierte a array y con la funcion map se creo un subArray con la function(digito) que recorrerá cada item
    numeroNoVisible = numeroNoVisible.map(function (digito) {
      // eslint-disable-next-line no-unused-vars
      return digito = "#";
    })
    //se retorna a string
    numeroNoVisible = numeroNoVisible.join("");
    //se retorna el valor final juntando las dos variables concatenandolo
    //console.log(numeroNoVisible.concat(numeroVisible.join("")));
    return numeroNoVisible.concat(numeroVisible.join(""));
  }
}
export default validator;
