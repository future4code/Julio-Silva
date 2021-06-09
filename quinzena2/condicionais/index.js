// Exercícios de interpretação
// 1.
// a) O código recebe um número do usuário converte para número e armazena na variavel respostaDoUsuário, depois ele compara se o numero coletado e multiplo de 2, se for ele retorna passou no no teste, e nao for divisivel por 2 ele retona a mensagem não passou no teste
// b) Ele imprime  Passou no teste para numeros divisiveis por 2, onde o resultado é 0 (numeros pares)
// c) Ele imprime Nâo passou no teste para numeros "impares", onde a divisão por dois tem resto 1

// 2.
// a) O código recebe um dado do cliente e armazena na variavel FRUTA, e se a fruta digitada pelo cliente existe na lista, o código retorna o nome da fruta e seu valor, caso não tenha a fruta na lista, ele retorna o nome da fruta e o valor de 5.
// b) se o valor da fruta for maça será impresso no console.log (O preço da fruta: maça é, R$ 2.25)
// c) se retirarmos o BREAK sera impresso no console.log(O preço da fruta  pera  é  R$  5)

// 3.
// a) recebe um dado do usuario e tranforma em número.
// b) se o usuário digitou 10 a mensagem no terminal console.log("Esse número passou no teste") , agora se ele digitou -10 no terminal vai dar erro pois o if so esta tratando de números maiores que 10.
// c) havera erro se o usuario digitar numeros menores que 0, para tratar esse caso poderia haver um ELSE 
/* const numero = Number(prompt("Digite o primeiro número."))
if(numero > 0) {
    console.log("Esse número passou no teste")
      let mensagem = "Essa mensagem é secreta!!!"
  }else{
    console.log("Esse número não passou no teste")
  } */
  


// Exercícios de escrita de código

// 1. 
/*  const idadeUsuario = Number(prompt("Digite sua idade"))
 if (idadeUsuario >= 18){
     console.log(`Sua idade é ${idadeUsuario} você esta apto a dirigir`)
 }else {
    console.log(`Sua idade é ${idadeUsuario} você não esta apto a dirigir`)
 }
 */
 // 2.
   /*   const turnoDeTrabalho = prompt("Digite a letra correspondente a qual  Turno você trabalha  (M-matutino) (V-vespertino) (N-noturno)").toLocaleUpperCase()
    const matutino = "M"
    const vespertino = "V"
    const noturno = "N"
    if (turnoDeTrabalho === matutino){
        console.log("Bom dia!")
    }else if(turnoDeTrabalho === vespertino){
        console.log("Boa tarde!")
    }else{
        console.log("Boa noite!")
    } 
 */
    // 3.
  /*   const turnoDeTrabalho = prompt("Digite a letra correspondente a qual  Turno você trabalha  (M-matutino) (V-vespertino) (N-noturno)").toLocaleUpperCase()
    const matutino = "M"
    const vespertino = "V"
    const noturno = "N"

    switch(turnoDeTrabalho){
        case "M":
            console.log ("Bom dia!")
            break
        case "V":
            console.log("Boa Tarde!")
            break
        case "N":
            console.log("Boa Noite!")
            break
        default:
            console.log("Não identificamos seu turno de trbalho")
            break
    } */


    // 4.
   /*  const generoFilme = prompt("Digite o genero do filme que deseja assistir").toLocaleLowerCase()
    const valorIngresso = Number(prompt("Qual o valor do ingresso ?"))

    if (generoFilme === "fantasia" && valorIngresso <= 15){
        console.log("Bom Filme!")
    }else{
        console.log("Escolha outro filme")
    } */


 // ----> Desafio <-----

  // 1.
/*   const generoFilme = prompt("Digite o genero do filme que deseja assistir").toLocaleLowerCase()
  const valorIngresso = Number(prompt("Qual o valor do ingresso ?"))
  

  if (generoFilme === "fantasia" && valorIngresso < 15){
    const lanchinho = prompt("Qual lanchinho você vai querer? pipoca, chocolate, doces etc..")
      console.log(`Bom Filme! e aproveite seu ${lanchinho}`)
  }else{
      console.log("Escolha outro filme")
  }   */


  // 2.

/*      ------->  fazer depois <-------
     
     
  const nomeCompletoUsuario = prompt("Digite seu nome completo")
  const tipoDeJogo = prompt("Digite o tipo de jogo que desja assistir sendo ( IN - internacional ou DO - doméstico")
  const etapaDoJogo = prompt("Qual etapa do jogo sendo SF - Semi final DT - Terceiro lugar FL - Fase final")
  const categoria = Number(prompt(" 1 2 3 4"))
  const quantidadeDeIngresso = Number(prompt("Digite a quantidade de ingressos que deseja adquirir"))
  

 */