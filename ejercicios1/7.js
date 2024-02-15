//7 ejercicio
function contarRango(num1, num2){
    let contador = 0;
  
    for(let i = num1+1;i<num2;i++){
      contador++;
    }
  return contador;
  
  }
  console.log(contarRango(1, 9)) // 7
  console.log(contarRango(1332, 2743)) // 7410
  console.log(contarRango(5, 6))