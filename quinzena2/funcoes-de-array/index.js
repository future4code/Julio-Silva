// Exercícios de interpretação de código
// 1. a
// No console a função de callback trará como retorno os 3 objetos com nome e apelido em array

// 2.
// no console será impresso os 3 nomes e apelidos dentro de uma nova array

// 3.
// no console novo arrayC - o retorno trará os dois nomes cujo apelido é diferente de chijo.

// ==========================Exercícios de escrita de código

// 1.

// Array de objetos nome e raça dos Pets
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

// Pegando so os nomes do Pets
const nomesPets = pets.map((nome) => {
  return nome.nome;
});
console.log(nomesPets);

// Pegando somente os Pets com os apelidos de salsicha
const cachorroSalsicha = pets.filter((tipo) => {
  return tipo.raca === "Salsicha";
});
console.log(cachorroSalsicha);

// Filtrando os Pets da Raça Poodle
const clientesPoodles = pets.filter((tipo) => {
  return tipo.raca === "Poodle";
});
console.log(clientesPoodles);

//Passando a mensagem de desconto para os Donos dos Pets
const mensagemDono = clientesPoodles.map((parametro) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${parametro.nome}!`;
});
console.log(mensagemDono);

// 2.
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// coletando o nome de cada item
const nomeProdutos = produtos.map((itens) => {
  return itens.nome;
});
console.log(nomeProdutos);

// aplicando desconto
// const aplicandoDesconto = produtos.map((item) => {
//   return item.nome
// });
// //console.log(aplicandoDesconto);

// criando array com nome e preço de cada item com 5% de desconto
const itensPreco = produtos.map((produto) => {
   
  return {
     nome: produto.nome,   
     preco: (produto.preco - produto.preco * 0.05).toFixed(2)


    }
});
console.log(itensPreco);

// retornando apenas Bebidas para o array
const bebidas = produtos.filter((bebes) => {
  return bebes.categoria === "Bebidas";
});
console.log(bebidas);

//retornando os objetos que tenha no nome a string "YPE"
const produtoDeLimpeza = produtos.filter((detergente) => {
  return detergente.nome.includes("Ypê");
});
console.log(produtoDeLimpeza);

// criando array onde cada item recebe uma frase nome e preço
const fraseProduto = produtoDeLimpeza.map((texto) => {
  return `Compre ${texto.nome} por ${texto.preco}`;
});
console.log(fraseProduto);

