// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
   let altura = Number(prompt("Digite a altura do Retângulo"))
   let largura = Number(prompt("Digite a altura do retângulo"))

   let retangulo = altura * largura

   console.log(retangulo)
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = Number(prompt("Digite o Ano atual!"))
  let anoNascimento = Number(prompt("Digite o ano do seu nascimento!"))

  let idade = anoAtual - anoNascimento

  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  let peso = Number(prompt("Digite seu peso!"))  
  let altura = Number((prompt("Digite dua altura")))

  let imc = parseFloat(peso / (altura * altura).toFixed(2)) 

  console.log (imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nome = prompt("Digite seu nome!")
  let idade = Number(prompt("Digite sua idade!"))
  let email = prompt("Digite seu e-mail!")

  


  console.log("Meu nome é "+ nome + ", tenho " + idade + " anos," + " e o meu email é " + email +".")

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Digite uma cor!")
  let cor2 = prompt("Digite novamente uma cor!")
  let cor3 = prompt("Por fim, digite novamente uma cor!")

  

  console.log([cor1,cor2,cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
   let menssagem = prompt("Digite uma mensagem!")
   menssagem = menssagem.toUpperCase()

   console.log(menssagem)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  
  let valorShow = prompt("Digite o Valor do Espetáculo!")
  let valorIngresso = prompt("Digite o valor de cada ingresso!")

  let lucro = valorShow / valorIngresso
  console.log(lucro)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  let string1 = prompt("Digite uma palavra!")
  let string2 = prompt("Digite outra palavra!")   
  
  console.log(string1.length == string2.length)
  
    
   
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
   let opcao1 = prompt("Digite uma palavra!")
   let opcao2 = prompt("Digite outra palavra!")   
     console.log(opcao1.toUpperCase() === opcao2.toUpperCase())   
     console.log(opcao1.toUpperCase() === opcao2.toUpperCase())
   

}

// Exercício 10
function checaRenovacaoRG() {
   let anoAtual = prompt("Digite o ano atual!")
   let anoNascimento = prompt("Digite o ano de seu nascimento!")
   let anoEmissaoRg = prompt("Digite o ano de emissão da sua identidade!")
   
   let idade = anoAtual - anoNascimento
   let venciRg = anoAtual - anoEmissaoRg

   console.log ((idade<=20 && venciRg >= 5) || (idade>=20 && idade<=50 && venciRg >= 10) || (idade>50 && venciRg >= 15))
   
  
  
}

// Exercício 11
function checaAnoBissexto() {
  const anoAtual = Number(prompt("Digite em que ano nós estamos !"))
  const anos = (anoAtual % 400 === 0) || (anoAtual % 4 == 0 && anoAtual % 100 != 0)
  console.log(anos)



}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  
  let idade = prompt("Você tem mais de 18 anos ?")
  let escolaridade = prompt("você possui ensino médio completo ?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horarios do curso ?") 
   
  console.log("tem mais de 18?:", idade)
  console.log("tem ensino médio?:", escolaridade)
  console.log("tem disponibilidade de horários?:", disponibilidade)
  console.log(idade == "sim"  && escolaridade == "sim" && disponibilidade == "sim" )
  
}





