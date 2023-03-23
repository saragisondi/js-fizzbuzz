

let text = '';


//CONTAINER
const container = document.querySelector(".container");
console.log(container)

//CICLO
for(let i=1; i<=100; i++){
  
let text = i;

  //BOX
  const box = document.createElement("div");
  box.classList.add("box");
  console.log(box)
  //BOX DENTRO CONTAINER
  container.append(box)
  console.log(text)
  
  if (!(i % 15)) {
    text = 'fizzBuzz';
    box.classList.add("fizzbuzz");
  } else if (!(i % 5)) {
    text = 'Buzz';
    box.classList.add("buzz")
  }else if (!(i % 3)) {
    text = 'Fizz';
    box.classList.add("fizz")
  }
  else{
    box.classList.add("yellow")
  }

  box.append(text)
}
