function pares(arr) {
    
    var numerosPares = arr.filter(function(numero) {
      return numero % 2 === 0;
    });
  
    return numerosPares;
  }
  console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []