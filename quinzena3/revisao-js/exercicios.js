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
  const arrayPar2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      let potencia = array[i] ** 2;
      arrayPar2.push(potencia);
    }
  }
  return arrayPar2;
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const arrayPar = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayPar.push(array[i]);
    }
  }
  return arrayPar;
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
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2;
  const booleano4 = !booleano3;

  const compara1 = booleano1 && booleano2 && !booleano4;
  const compara2 = (booleano1 && booleano2) || !booleano3;
  const compara3 = (booleano2 || booleano3) && (booleano4 || booleano1);
  const compara4 = !(booleano2 && booleano3) || !(booleano1 && booleano3);
  const compara5 =
    (!booleano1 && !booleano3) || (!booleano4 && booleano3 && booleano3);

  const respostas = [compara1, compara2, compara3, compara4, compara5];

  return respostas;
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let retornarPar = [];
  for (let i = 0; i < n[0]; i++) {
    retornarPar.push(i * 2);
  }
  return retornarPar;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a != b && (b != c) != a) {
    return "Escaleno";
  } else if (a == b && b == c && c == a) {
    return "Equilátero";
  } else a == b || b == c || c == a;
  return "Isósceles";
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  const compararNumeros = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: false,
    diferenca: 0,
  };

  if (num1 > num2) {
    compararNumeros.maiorNumero = num1;
    compararNumeros.maiorDivisivelPorMenor = num1 % num2 === 0;
    compararNumeros.diferenca = num1 - num2;
  } else {
    compararNumeros.maiorNumero = num2;
    compararNumeros.maiorDivisivelPorMenor = num2 % num1 === 0;
    compararNumeros.diferenca = num2 - num1;
  }
  return compararNumeros;
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j <= array.length; j++) {
      if (array[i] < array[j]) {
        let numeros = array[i];
        array[i] = array[j];
        array[j] = numeros;
      }
    }
  }
  let maiorMenor = [];
  maiorMenor.push(array[array.length - 2]);
  maiorMenor.push(array[1]);

  return maiorMenor;
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let verificar = true;
  while (verificar === true) {
    verificar = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let tempVar = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempVar;
        verificar = true;
      }
    }
  }
  return array;
}

// EXERCÍCIO 12
function filmeFavorito() {
  const elencoDoFilme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };
  return elencoDoFilme;
}

// EXERCÍCIO 13
function imprimeChamada() {
  const chamdaFilme = filmeFavorito();
  return `Venha assistir ao filme ${chamdaFilme.nome}, de ${chamdaFilme.ano}, dirigido por ${chamdaFilme.diretor} e estrelado por ${chamdaFilme.atores}.`;
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2,
  };

  return retangulo;
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novoObjeto = {
    ...pessoa,
    nome: "ANÔNIMO",
  };

  return novoObjeto;
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maiorIdade = arrayDePessoas.filter((maior) => {
    return maior.idade >= 18;
  });
  return maiorIdade;
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menorIdade = arrayDePessoas.filter((menor) => {
    return menor.idade < 18;
  });
  return menorIdade;
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const multiplicaPor2 = array.map((conta) => {
    return conta * 2;
  });

  return multiplicaPor2;
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const multiplica = multiplicaArrayPor2(array);
  const contaFeita = multiplica.map((input) => {
    return input.toString();
  });
  return contaFeita;
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let novaArray = [];
  array.map((verificar) => {
    if (verificar % 2 === 0) {
      novaArray.push(`${verificar} é par`);
    } else {
      verificar % 2 === !0;
      novaArray.push(`${verificar} é ímpar`);
    }
  });

  return novaArray;
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = [];
  pessoas.map((nacesso) => {
    if (nacesso.altura > 1.5 && nacesso.idade > 14 && nacesso.idade < 60) {
      pessoasNaoAutorizadas.push(nacesso);
    }
  });
  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasAutorizadas = [];
  pessoas.map((sacesso) => {
    if (sacesso.altura <= 1.5 || sacesso.idade <= 14 || sacesso.idade >= 60) {
      pessoasAutorizadas.push(sacesso);
    }
  });
  return pessoasAutorizadas;
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  const ordemPorNome = consultasNome.sort();
  consultasNome.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    return 0;
  });
  return ordemPorNome;
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  function transformaData(dataParametro) {
    const quebraPalavra = dataParametro.split(`/`);
    let dia = quebraPalavra[0];
    let mes = quebraPalavra[1];
    let ano = quebraPalavra[2];
    let resultado = [ano, mes, dia];
    return resultado;
  }

  let checarTrue = false;
  while (!checarTrue) {
    checarTrue = true;
    for (let i = 0; i < consultasData.length - 1; i++) {
      let dataAntes = new Date(transformaData(consultasData[i].dataDaConsulta));
      let dataSeguinte = new Date(
        transformaData(consultasData[i + 1].dataDaConsulta)
      );
      if (dataSeguinte < dataAntes) {
        checarTrue = false;
        let tmp = consultasData[i + 1];
        consultasData[i + 1] = consultasData[i];
        consultasData[i] = tmp;
      }
    }
  }
  return consultasData;
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  for (let i = 0; i < contas.length; i++) {
    let resultado;
    resultado = 0;
    for (saldo of contas[i].compras) {
      resultado += Number(saldo);
    }
    contas[i].saldoTotal = contas[i].saldoTotal - resultado;
    console.log(contas[i].saldoTotal);
  }
  return contas;
}
