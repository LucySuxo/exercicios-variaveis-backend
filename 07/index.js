let readline = require('readline');
let populacao = null;
let transmissao = null;
let tempo = null;
let resultado = null;

let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question(
  'Digite a quantidade da população inicial infectada: ',
  function (inicial) {
    populacao = inicial;
    leitor.question(
      'Digite a quantidade de pessoas que um infectado pode transmitir: ',
      function (transmitir) {
        transmissao = transmitir;
        leitor.question('Tempo percorrido: ', function (time) {
          tempo = time;
          resultado = populacao * transmissao ** (tempo / 7);
          console.log(
            `Após ${tempo} dias, o total de pessoas infectadas será de ${resultado} uma vez que inicialmente existiam ${populacao} pessoas infectadas`
          );
          leitor.close();
        });
      }
    );
  }
);
