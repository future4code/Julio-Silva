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
      array[i]  * array[i] 
      arrayPar2.push(array[i])
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


}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
 while( n <= n){
   n %2 === 0 
 }
 return retornaNNumerosPares
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
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
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
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {}

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
