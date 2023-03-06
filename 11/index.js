let readline = require('readline');
let raio = null;
let volume = null;
let diametro = null;
let formula = 4 / 3;

let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite o valor do raio: ', function (r) {
  raio = r;
  diametro = Math.pow(raio, 3);
  volume = formula * diametro;
  console.log(`O volume de uma esfera de raio ${raio} é ${volume}PI`);
  leitor.close();
});
