//VARIABILI
  let multiples3 = document.querySelector(".aquamarine");
  let multiples5 = document.querySelector(".yellowgreen");
  let multiplesOfBoth = document.querySelector("burlywood");
//CICLO
  for(let i=1; i<=100; i++){
  console.log(i)
//NUMERI MULTIPLI DI 3
  if (!(i % 3 === 0)){
  multiples3;
//NUMERI MULTIPLI DI 5  
  }else if(!(i % 5 === 0)){
  multiples5;
//NUMERI MULTIPLI DI 3 e 5
  }else if(!(i % 5 === 0) && (i % 5 === 0)){
  multiplesOfBoth;
  }}
  console.log(multiples3, multiples5, multiplesOfBoth)




