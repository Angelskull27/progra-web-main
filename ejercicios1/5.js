//5 ejercicio
function likes(int){
    if(int<1000){
      return int;
    }if(int<1000000){
      return `${parseInt(int/1000)}K`;
    }if(int>1000000){
      return `${parseInt(int/1000000)}M`;
    }else{
      return 0;
    }
  }
  console.log(likes(983)) // "983"
  console.log(likes(1900)) // "1K"
  console.log(likes(54000)) // "54K"
  console.log(likes(120800)) // "120K"
  console.log(likes(25222444))