let readline = require('readline');
const segundos = 3.6;
let distPercorrida = null;
let tempo = null;
let resultado = null;

let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite a distância percorrida: ', function (distancia) {
  distPercorrida = distancia;
  leitor.question('Digite o tempo percorrido: ', function (time) {
    tempo = time;
    resultado = distPercorrida / tempo;
    resultado *= segundos;
    console.log(`O resultado é ${resultado}km/h`);
    leitor.close();
  });
});
