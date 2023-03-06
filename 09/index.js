let readline = require('readline');
let ladosPoligono = null;
let somaPoligono = null;
let valorAngulo = null;

let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite o número de lados do polígono: ', function (lados) {
  ladosPoligono = lados;
  somaPoligono = (ladosPoligono - 2) * 180;
  valorAngulo = somaPoligono / ladosPoligono;
  console.log(
    `O valor da soma dos ângulos internos é ${somaPoligono} e o valor de cada angulo do polígono é ${valorAngulo}`
  );
  leitor.close();
});
