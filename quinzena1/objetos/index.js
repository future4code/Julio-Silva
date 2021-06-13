



// 1 - Exercícios de interpretação 
// A)
// console.log(filme.elenco[0]) ===> Mateus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1])===> Virginia Cavandish
// console.log(filme.transmissoesHoje[2]) ===> retorna o objeto {canal1: "Globo", horario: "14h"}


// 2 - Exercício de interpretação
// A)
// console.log(cachorro) ==> {nome:"Juca", idade: 3, raca:"SRD"}
// console.log(gato) ==>  {nome:"Juba", idade: 3, raca:"SRD"}
// console.log(tartaruga) ==> {nome:"tortorugo", idade: 3, raca:"SRD"}

// B)
// SPRAD (espalhamento)... proporciona a condição de copiar um objeto e alterar sua propriedade


// 3 - Exercício de interpretação
//A)
// console.log(minhaFuncao(pessoa, "backender")) ==> retrona false 
// console.log(minhaFuncao(pessoa, "altura")) ==> retorna indefine, porque não foi declarado um valor para altura e nem esta dentro da função.

//B) o valor da propriedade altura nao foi declarado no metodo.


// Exercícios de Escrita de código


// 1 - Exercício de escrita
// A)
  
   /*  function nandinha(instrutora){     
        
        
       console.log("Eu sou Amanda, mas pode me chamar de:",instrutora.apelidos[0], "ou"
      ,instrutora.apelidos[1], "ou",instrutora.apelidos[2])
        
      
    
    }

    const instrutora = {
        nome: "Amanda",
        apelidos: ["Amandinha", "Mandinha", "Mandi"],             
        
    }      
   console.log(instrutora)
   console.log(nandinha(instrutora)



   // B) 
     const novoApelido = {
        ...instrutora,
        apelidos: ["Chiquinha", "DonaFlorinda", "BibiPerigosa"]
        
    }       

    console.log(novoApelido)
    console.log(nandinha(novoApelido))  */


  /*   // 2 - Exercício de escrita
    // A)

     const irmao1 = {
        nome: "Jaílson",
        idade: "93",
        profissão: "Backend"
    }
    const irmao2 = {
        nome: "Janíson",
        idade: "98",
        profissão: "FrontEnd"
    }

    function irmaos(irmao1,irmao2) {

               
         console.log([irmao1.nome, irmao1.nome.length, irmao1.idade, irmao1.profissão, irmao1.profissão.length]) 
         console.log([irmao2.nome, irmao2.nome.length, irmao2.idade, irmao2.profissão, irmao2.profissão.length])
    }

    console.log(irmaos(irmao1,irmao2))

      */


    // 1 - Exercício de escrita
    // A)

   /*  const carrinho = []

    const fruta1 = {
        nome: "Banana",
        disponivel: true
    }

    const fruta2 = {
        nome: "Caju",
        disponivel: true
    }

    const fruta3 = {
        nome: "Laranja",
        disponivel: true
    }

    function receberFruta(fruta1,fruta2,fruta3) {
         
        carrinho.push(fruta1,fruta2,fruta3)        
    
    }
    console.log(carrinho.push(fruta1,fruta2,fruta3))
    console.log(carrinho)
 */

    //  ------ desafio -------

 /*    const dadosUsuario = (nome,idade,profissao)=>{

        const nomeUsuario = nome 
        const idadeUsuario =idade 
        const profissaoUsuario = profissao 

        return
    }

    

     const dadosPrompt = {
        nome: dadosUsuario.nomeUsuario,
        idade: dadosUsuario.idadeUsuario,
        profissao: dadosUsuario.profissaoUsuario

    }   
    
    console.log(dadosPrompt) */


//Exercício 1
// a -
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha" ,"Mandi"],
    
}
console.log("Objeto",pessoa)


function imprimirPessoa(pmtro){
  console.log(`Eu sou Amanda, mas pode me chamar de: ${pmtro.apelidos[0]}, ${pmtro.apelidos[1]} ou ${pmtro.apelidos[2]}`)

  return imprimirPessoa
}
imprimirPessoa(pessoa)


// b -
const newApelidos = {
    ...pessoa,
    apelidos: ["Chiquinha","Luluzinha", "Bibi Perigosa"]
}
imprimirPessoa(newApelidos)



// Exercício 2


// a -

const pessoa1 = {
  nome: "Anibal",
  idade: "93",
  profissao: "Dev Fullstak"
}

const pessoa2 = {
  nome: "Jhoniscray",
  idade: "88",
  profissao: "Dev Frontende"
}

// b -

function irmaos (pmtro1){
  console.log([pmtro1.nome, pmtro1.nome.length, pmtro1.idade, pmtro1.profissao, pmtro1.profissao.length])
return irmaos 
}

irmaos(pessoa1)
irmaos(pessoa2)


//Exercício 3
// a -
var carrinho = []

// b - 
const fruta1 = {
  nome: "Banana",
  disponivel: true
}

const fruta2 = {
  nome: "Amora",
  disponivel: true
}

const fruta3 = {
  nome: "Goiaba",
  disponivel: true
}

// c -
function receberFrutas(fruta){
   carrinho.push(fruta1,fruta2,fruta3)  
   

   return carrinho
}

// d - 
receberFrutas(fruta1,fruta2,fruta3)
console.log(carrinho)


// ===== desafio ===

//Exercícios
//1. a-
const newUsuario = (name,idade,profissao)=>{
 const usuarioNovo= {
  name: name = prompt("Digite seu nome!"),
  idade: idade = Number(prompt("Qual a sua idade?")),
  profissao: profissao = prompt("Qual a sua profissão?")
}
return usuarioNovo
}
console.log(newUsuario())


//2.
const comparar =(filme1,filme2)=>{
  const primeiro = filme1 ={
    nome: "Homem Aranha",
    anoDeLancamento: "2006"
  }
  const segundo = filme2 ={
    nome: "007",
    anoDeLancamento: "2006"
  }
  
  console.log("O Primeiro filme foi lançado antes do segundo?",primeiro.anoDeLancamento < segundo.anoDeLancamento)
  console.log("O Segundo filme foi lançado no mesmo ano do Primeiro", primeiro.anoDeLancamento === segundo.anoDeLancamento)
  return comparar
}
comparar()




