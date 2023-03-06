let readline = require('readline');
let valorA = null;
let valorB = null;
let valorC = null;
let delta = null;

let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite o valor A: ', function (a) {
  valorA = a;
  leitor.question('Digite o valor B: ', function (b) {
    valorB = b;
    leitor.question('Digite o valor C: ', function (c) {
      valorC = c;
      delta = Math.pow(valorB, 2) - 4 * valorA * valorC;
      console.log(`O valor do delta é: ${delta}`);
      leitor.close();
    });
  });
});
