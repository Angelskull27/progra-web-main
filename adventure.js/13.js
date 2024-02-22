function removerCeros(arreglo){  
    var arregloFiltrado = arreglo.filter(function(numero) {
      return numero !== 0;
    });
  
    return arregloFiltrado;
  }
  console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
  console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
  console.log(removerCeros([0, 0, 0])) // []