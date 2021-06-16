/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// boas vindas
console.log("Bem Vindo ao jogo de Blackjack!")

// perguntando ao usuário se ele quer jogar
if (confirm("Deseja iniciar uma rodada?")) {

  //cartas jogador
   let carta1Jogador = comprarCarta()
   let carta2Jogador = comprarCarta()

  // verificar a igualdade das cartas do jogador 
   



  //cartas PC
  let carta1Pc = comprarCarta()
  let carta2Pc = comprarCarta()

  // verificar igualdae das cartas do computador





  //calculando pontuação usuário
  let pontosUsuario = carta1Jogador.valor + carta2Jogador.valor
  //calculando pontuação PC
  let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

  //Exibindo pontuações
  console.log(
    `Usuário - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - pontuação ${pontosUsuario}`
  );
  console.log(
    `Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - pontuação ${pontuacaoPc}`
  );

  //identificando ganhador
  //verificando empate
  if (pontosUsuario == pontuacaoPc) {
    console.log("Empate!")
    //verificando se usuário ganhou
  } else if (pontosUsuario > pontuacaoPc) {
    console.log("O usuário ganhou!")
    //caso usuário não ganhe!
  } else {
    console.log("O Computador Ganhou!")
  }
} else {
  // mensagem quando usuário não inicia o jogo
  console.log("O jogo acababou !!")
}


