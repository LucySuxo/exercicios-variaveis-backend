let peso = 56;
let altura = 1.79;

let imc = peso / Math.pow(altura, 2);

console.log(
  `Meu IMC é: ${imc.toLocaleString('de-DE', { maximumFractionDigits: 1 })}`
);

//Método toFixed() -> diminui a quantidade casas decimais pela quantidade que estiver entre parentes

//O método chamado toLocaleString() retorna uma seqüência de caracteres com uma representação sensível ao idioma desse número.
// O padrão alemão formata valores monetários conforme o Brasil. Para isto acrescente o parâmetro de-DE ao método
// maximumFractionDigits:   -> coloca um limite de decimais
