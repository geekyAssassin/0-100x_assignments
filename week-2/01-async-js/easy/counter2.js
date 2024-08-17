let counter = 0;

function increCounter() {
  counter++;
  console.log(counter);
  setTimeout(increCounter, 1000);
}

increCounter();
