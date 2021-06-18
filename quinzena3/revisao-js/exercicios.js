// EXERCÍCIO 01
function inverteArray(array) {
  const arrayNova = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayNova.push(array[i]);
  }
  return arrayNova;
}


// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const arrayPar2 = []
  for (let i = 0; i < array.length; i++){
    if (array[i] %2 === 0){
  let potencia =   (array[i]  ** 2) 
      arrayPar2.push(potencia)
    }
  }
  return arrayPar2

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const arrayPar = []
  for (let i = 0; i < array.length; i++){
    if (array[i] %2 === 0){
      arrayPar.push(array[i])
    }
  }
  return arrayPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maior = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  
  return maior;
  
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length;
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
 const booleano1 = true
 const booleano2 = false
 const booleano3 = !booleano2 
 const booleano4 = !booleano3

  const compara1 = booleano1 && booleano2 && !booleano4
  const compara2 = (booleano1 && booleano2) || !booleano3
  const compara3 = (booleano2 || booleano3) && (booleano4 || booleano1) 
  const compara4 = !(booleano2 && booleano3) || !(booleano1 && booleano3) 
  const compara5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const respostas = [compara1,compara2,compara3,compara4,compara5]
  
  
  return respostas
 
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
   let retornarPar = []
  for (let i = 0; i < n[0]; i++){
    retornarPar.push(i *2)
  }
  return retornarPar
}


// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a != b && (b != c) != a) {
    return "Escaleno"
  } else if (a == b && b == c && c == a) {
    return "Equilátero"
  }else (a == b || b == c || c == a) 
     return 'Isósceles' 
    
}



// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  const objetoCriado =
  {
    maiorNumero: num1,
    maiorDivisivelPorMenor: (num1 %num2 === 0),
    diferenca: (num1 / num2)
  }
  return objetoCriado
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
 
  
  
}

// EXERCÍCIO 11
function ordenaArray(array) {
 
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavorito =  {

    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filmeFavorito
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filmeFavorito =  {

    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: [" Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }
  console.log(`Venha assistir ao filme ${filmeFavorito.nome}, de ANO, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}.`) 
   
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
 const informacoes = {
   largura: lado1,
   altura: lado2,
   perimetro: (2*(lado1 + lado2)),
   area: (lado1 * lado2)
 }
 return informacoes
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novoObjeto = {
    ...pessoa,
    nome: "ANÔNIMO"
  }

  return novoObjeto
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
    const maiorIdade = arrayDePessoas.map((maior) => {
      {
        nome: maior.nome
        idade: maior.idade
      }
    })
    return maiorIdade
  }



// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {}

// EXERCÍCIO 17C
function verificaParidade(array) {}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {}

// EXERCÍCIO 20
function calculaSaldo(contas) {}
