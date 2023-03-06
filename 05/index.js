let readline = require('readline');
let xx1 = null; //Criando uma variável vazia
let xx2 = null;
let yy1 = null;
let yy2 = null;
let resultado = null;

let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite o valor do x1\n', function (x1) {
  xx1 = x1;
  leitor.question('Digite o valor do x2\n', function (x2) {
    xx2 = x2;
    leitor.question('Digite o valor do y1\n', function (y1) {
      yy1 = y1;
      leitor.question('Digite o valor do y2\n', function (y2) {
        yy2 = y2;
        resultado = Math.sqrt((xx2 - xx1) ** 2 + (yy2 - yy1) ** 2);
        console.log(`A distância entre os dois pontos dados é ${resultado}`);
        leitor.close();
      });
    });
  });
});
