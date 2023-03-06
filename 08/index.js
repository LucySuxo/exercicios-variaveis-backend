let readline = require('readline');
let raio = null;
let comprimento = null;
let area = null;

let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite o raio do círculo: ', function (r) {
  raio = r;
  comprimento = 2 * Math.PI * raio;
  area = Math.PI * Math.pow(raio, 2);
  console.log(
    `\nO comprimento do círculo do raio é: ${comprimento.toFixed(
      1
    )}\nA área do círculo é: ${area.toFixed(2)}`
  );
  leitor.close();
});

//Função: Math.PI para calcular a circunferência de um círculo com um dado raio
