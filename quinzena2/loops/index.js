// Exercícios de interpretação de código
// 1.
// no console.log(valor) o valor será de 10, por o valor da variavel valor esta somado ao valor da variavél i.

// 2.
// a) console.log(numero) apresentará o valor de 19 até o 30, pois o if pede numeros da array maior que 18.
// b) só o for of é sufuciente, mas se nao fosse poderiamos utilizar o loop for chamando o indice por [i]

// 3.
// Pelo que vi rodando o código no PYTUTOR, ele vai verificar se existe uma linha vazia e adicionar um asterisco, e essa verificação vai rodar adicionando o numero de asteriscos acompanhando os numeros de linhas.

// Exercícios de escrita de código
// 1.
// A,B E C)

/* let qntDeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem ?"))
let arrayPet = []
let nomesPet = ""


  if (qntDeBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!")
  }else{
    for (let i = 0; i < qntDeBichinhos; i++){
      nomesPet = prompt("Digite os nomes dos animais de estimação")
      arrayPet.push(nomesPet)       
    }
    console.log(arrayPet)
  }
  
 */

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function imprimir(numerosArray) {
  for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(numerosArray[i]);
  }
  return imprimir;
}
console.log("numeros da ArrayOriginal");
imprimir(arrayOriginal);

function imprimir2(numerosArray2) {
  for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(numerosArray2[i] / 10);
  }
  return imprimir2;
}
console.log("Array original divido por 10");
imprimir2(arrayOriginal);

const arrayNumerosPares = [];

function imprimir3(elemento) {
  if (elemento % 2 === 0) {
    // console.log(`Eu sou o elemento ${elemento}`)
    arrayNumerosPares.push(elemento);
  }
}

for (let i = 0; i < arrayOriginal.length; i++) {
  const coletaDosPares = imprimir3(arrayOriginal[i]);
}
console.log(arrayNumerosPares);

for (let i = 0; i < arrayOriginal.length; i++){
  console.log(`O elemento do index ${i} é o ${arrayOriginal[i]}`)
}


function acharMaior(arrayMaior) {
  let maior = -Infinity;
  for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > maior) {
      maior = arrayMaior[i];
    }
  }
  return maior;
}
console.log(acharMaior(arrayOriginal));

function acharMenor(arrayMenor) {
  let menor = +Infinity;
  for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] < menor) {
      menor = arrayMenor[i];
    }
  }
  return menor;
}
console.log(acharMenor(arrayOriginal));



//===========  Deseafio 

const numeroJogador = Number(prompt("Digite um Número"))
console.log("Vamos Jogar !!!")

let chute = Number(prompt("Chute um Número"))
let contador = 1
while(chute !== numeroJogador){
  console.log("O número chutado foi:", chute)
  console.log("Errrouuu!")

  chute = Number(prompt("Chute outro Número"))
  contador++
}
console.log("O número chutado foi:", chute)
console.log("Acerrrrtouuu !!")
console.log("O numero de tentativas foi:", contador)


// A conclusão dos desafios foi feito sobre as revisoes de aulas 