let readline = require('readline');
let taxaJuros = null;
let montante = null;
let capitalInicial = null;
let meses = null;

let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite o montante: ', function (m) {
  montante = m;
  leitor.question('Digite o capital inicial: ', function (capital) {
    capitalInicial = capital;
    leitor.question('Digite os meses: ', function (month) {
      meses = month;
      taxaJuros = (montante / capitalInicial) ** (1 / meses) - 1;
      taxaJuros = taxaJuros * 100;
      console.log(
        `O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaJuros.toLocaleString(
          'de-DE',
          { maximumFractionDigits: 3 }
        )}%, pois após ${meses} meses você teve que pagar ${montante} reais.`
      );
      leitor.close();
    });
  });
});
