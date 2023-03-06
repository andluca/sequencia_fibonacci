const calculateFibonacci = () => {
  const number = document.body.querySelector("#numberFibonacci").value;
  var seqFibo = [0, 1];
  let i = 0;

  
    while (i < 100) {
      i++;
      let newNumber = seqFibo[i - 1] + seqFibo[i];
      seqFibo.push(newNumber);
    }

  if (seqFibo.includes(parseInt(number))) {
    alert("Faz parte da Sequência de Fibonacci");
  } else {
    alert("Não faz parte da Sequência de Fibonacci");
  }

  console.log(seqFibo);
};

const btn = document.body.querySelector(".btnNumber");

btn.addEventListener("click", calculateFibonacci);
