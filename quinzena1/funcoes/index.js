

// Exercícios de interpretação 

//  1. 
// console.log(10)
// console.log(50)

// a) será impresso a expressão com resultados 10, 50, 50
// b) não retornaria nehum valor, pois a função está retornando a variavel *5 


// 2.
// a) essa função recebe o input do Usuários, tranforma tudo em Minusculo e verifica de existe a palavra cenoura.

// b) const resposta  = outaFuncao(eu gosto de cenoura)
//    console.log(true)
//    const resposta  = outaFuncao(cenoura é bom pra vista)
//    console.log(true)
//    const resposta  = outaFuncao(cenouras crescem na terra)
//    console.log(true)


// Exercícios de escrita de código de

// 1. 
// a) 

    function dadosUsuario (){
        console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
        console.log("Eu sou Julio, tenho 34 anos, moro em São Carlos e sou estudante.")
    }

dadosUsuario()




// b).

    function lavbenuTeacher (nome, idade, cidade, cargo) {
     const dadosUsuario = `Eu sou ${nome}, tenho ${idade} anos, moro em Rua Guarapari 190 ${cidade} e sou ${cargo}.`
     console.log(dadosUsuario) 
    }
    let nome = "Laís"
    let idade = 23
    let cidade = "São Paulo"
    let cargo = "instrutora"

    lavbenuTeacher(nome, idade,cidade,cargo)





// 2 
// a)

    function receberDoisNumeros(parametro1, parametro2){
        const somaParametros = parametro1 + parametro2 
        console.log(somaParametros)

        return somaParametros
        
    }
    console.log("soma dos parametros", receberDoisNumeros(3,4))




    //b) 

    const compararDoisNumeros = (numero1, numero2) => {
        const verificacao = numero1 >= numero2
        console.log(verificacao)

        return verificacao
    }

    console.log("retornando Boolean", compararDoisNumeros(4,5))
    


    //c) 

    const verificarSeEPar = (numero) => {
        const verificar = numero % 2 == 0
        console.log(verificar)
    
        return verificar
    }
    console.log("retornando se é Par", verificarSeEPar(5))


    //d) 

    const transformMaiusculo = (texto) => {
        const transforme = texto.toUpperCase()
        console.log("tamanho da string",transforme.length)
        
        return transforme
    }
    console.log("retornando texto em maiusculo", transformMaiusculo("ola como você esta ?"))
    


    

    //3 

    
    const somaUsuario = (num1, num2) => {
        const soma = num1 + num2
        console.log(soma)

        return soma
    }

     const subtracaoUsuario = (num1, num2) =>{
        const subtracaoU = num1 - num2
        console.log(subtracaoU)

        return subtracaoU
    }

    const multipleUsuario = (num1, num2) => {
        const multiple = num1 * num2
        console.log(multiple)

        return multiple
    }

    const dividirUsuario = (num1, num2) =>{
        const dividirU = num1 / num2
        console.log(dividirU)

        return dividirU
    } 

   console.log("soma",somaUsuario(5,4))
    console.log("subtração",subtracaoUsuario(5,4))
   console.log("multiplicação",multipleUsuario(5,4))
   console.log("divisão",dividirUsuario(5,4))


 
 // ------ desafio -------


 //a)
  const desafio = (parametro) => {
      const mostrar = parametro
      console.log(mostrar)

      return mostrar
  }
  console.log(desafio('ola Mundo'))


  // b)
  const arrowComDoisParametros = (param1, param2) =>{
      const soma = param1 + param2

      return soma
  }

  arrowComDoisParametros(4,5)
  // chamando a segunda arrow para somar o resultado do exercício b
  desafio(arrowComDoisParametros(4,5))


  // c)

  const pitagorasTeorema = (cateto1,cateto2) =>{
      const hipotenusa = 2*(cateto1*cateto1) + (cateto2*cateto2)

      return hipotenusa
  }

  console.log("Teorema de pitagoras", pitagorasTeorema(5,3))