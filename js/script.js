

let text = '';
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
  console.log(text);
}

//CONTAINER
const container = document.createElement("div");
container.classList.add("container");

console.log(container)

//BOX
const box = document.createElement("div");
box.classList.add("box");
console.log(box)

//BOX DENTRO CONTAINER
container.append(box);
box.append(text);

