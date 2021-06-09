
 
  // boas vindas
 console.log("Bem Vindo ao jogo de Blackjack!")
 // perguntando ao usuário se ele quer jogar
if(confirm("Deseja iniciar uma rodada?")){
  
    //cartas jogador
   let carta1Jogador = comprarCarta()
   let carta2Jogador = comprarCarta()
   
   
    
   //cartas PC
   let carta1Pc = comprarCarta()
   let carta2Pc = comprarCarta()

   //calculando pontuação usuário
   let pontosUsuario = carta1Jogador.valor + carta2Jogador.valor
   //calculando pontuação PC
   let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

   
   //Exibindo pontuações
   console.log(`Usuário - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - pontuação ${pontosUsuario}`)
   console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - pontuação ${pontuacaoPc}`)


    //identificando ganhador    
    //verificando empate
   if(pontosUsuario == pontuacaoPc){
    console.log("Empate!")
    //verificando se usuário ganhou
 }else if(pontosUsuario > pontuacaoPc){
   console.log("O usuário ganhou!")
    //caso usuário não ganhe!
    }else{
     console.log("O Computador Ganhou!")       
    }
  
   // mensagem quando usuário não inicia o jogo
}else{
   console.log("O Jogo acabou!")

}
