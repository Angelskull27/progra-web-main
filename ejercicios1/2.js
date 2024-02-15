//2do ejercicio
function calcularimpuestos(edad, ingresos){
    if(edad>=18 || ingresos>=1000){
      return ingresos*40
    }else{
      return 0;
    }
  }
  let edad =17;
  let ingresos = 1000;
   console.log(calcularimpuestos(edad,ingresos));