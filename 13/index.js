let readline = require('readline');
let areaTotal = null;
let raio = null;
let raioInteiro = null;
let altura = null;
let alturaInteiro = null;

let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite o valor do raio da base: ', function (r) {
  raio = r;
  raioInteiro = parseInt(raio);
  leitor.question('Digite o valor da altura do cilindro: ', function (a) {
    altura = a;
    alturaInteiro = parseInt(altura);
    areaTotal = 2 * raioInteiro * (raioInteiro + alturaInteiro);
    console.log(
      `A área total de um cilindro com o raio da base ${raioInteiro} e altura ${alturaInteiro} é ${areaTotal}`
    );
    leitor.close();
  });
});
