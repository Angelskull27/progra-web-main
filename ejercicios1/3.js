//3er ejercicio
function bmi(peso,altura){
    let persona= peso/(altura*altura);
    if(persona<18.5){
      return "Bajo de peso";
    }if(persona===18.5 || persona<=24.9){
      return "Normal";
    }if(persona===25 || persona<=29.9){
      return "Sobrepeso";
    }if(persona>=30){
      return"Obeso";
    }else{
      return 0;
    } 
  }
  // código de prueba
  console.log(bmi(65, 1.8)) // "Normal"
  console.log(bmi(72, 1.6)) // "Sobrepeso"
  console.log(bmi(52, 1.75)) //  "Bajo de peso"
  console.log(bmi(135, 1.7)) // "Obeso"
  