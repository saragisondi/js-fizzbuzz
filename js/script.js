

let text = '';

//CONTAINER
const container = document.createElement("div");
container.classList.add("container");

console.log(container)

//BOX
const box = document.createElement("div");
box.classList.add("box");

console.log(box)

//CICLO
  for(let i=1; i<=100; i++){

  text = i;

  if (!(i % 15)) {
    text = 'fizzBuzz';
    box.classList.add('yellowgreen')
  } else if (!(i % 5)) {
    text = 'Buzz';
    box.classList.add('green')
  }else if (!(i % 3)) {
    text = 'Fizz';
    box.classList.add('yellow')
  }

  //BOX DENTRO CONTAINER
  box.append(text)
  container.append(box)
  console.log(text)
}


