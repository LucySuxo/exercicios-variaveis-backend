//Utilizando Modulo no Node.js para receber entrada de valor

const taxa = 0.125; //valor de taxa fixa

let readline = require('readline'); //criando uma variável de leitura do input
let respostaCapital = ''; //criando variáveis vazias que serão armazenadas as entrada do usuário
let respostaMeses = ''; //criando variáveis vazias que serão armazenadas as entrada do usuário

let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite o valor da capital: \n', function (capital) {
  respostaCapital = capital; //resposta da function capital armazenada na variável respostaCapital
  leitor.question('\nDigite o valor dos meses: \n', function (meses) {
    respostaMeses = meses;
    console.log(
      '\nO montante é: ' +
        (respostaCapital * (1 + taxa) ** respostaMeses).toFixed()
    );
    leitor.close(); //Finaliza o leitor
  });
});
