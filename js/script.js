

let text = '';


//CONTAINER
const container = document.querySelector(".container");
console.log(container)

//CICLO
for(let i=1; i<=100; i++){
  
  text = i;
  
  if (!(i % 15)) {
    text = 'fizzBuzz';
  } else if (!(i % 5)) {
    text = 'Buzz';
  }else if (!(i % 3)) {
    text = 'Fizz';
  }

  //BOX
  const box = document.createElement("div");
  box.classList.add("box");
  console.log(box)
  //BOX DENTRO CONTAINER
  box.append(text)
  container.append(box)
  console.log(text)
}

