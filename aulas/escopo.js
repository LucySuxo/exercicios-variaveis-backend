//Aula: Escopo

//Uma variável dentro de um escopo não pdoe ser utilizado "chamado" fora do escopo

//Uma variável criada fora de um escopo pode ser chamada dentro de um escopo;

//exemplo:

//A variavel idade foi criada dentro de um escopo e o console.log foi chamada
//dentro do mesmo escopo e irá funcionar
//
// {
//   const idade = 40;
//   {
//     console.log(idada);
//   }
// }

//A variavel idade foi criada dentro de um escopo e foi chamada fora do escopo
//não irá funcionar
// {
//   const idade = 40;
// }

// console.log(idade)
