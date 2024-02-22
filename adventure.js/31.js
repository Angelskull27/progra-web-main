function distancia(str1, str2) {
    var diferencias = 0;
  
    let lengstr = Math.min(str1.length, str2.length);
  
   
    for (var i = 0; i < lengstr; i++) {
      if (str1[i] !== str2[i]) {
        diferencias++;
      }
    }
  
   
    return diferencias + Math.abs(str1.length - str2.length);
  }
  console.log(distancia("hola", "hola")) // 0
  console.log(distancia("sol", "tol")) // 1
  console.log(distancia("carro", "correr")) // 3