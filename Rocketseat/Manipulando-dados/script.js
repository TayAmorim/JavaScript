/*

  Prototype

  * prototype-based language
  * prototype chain
  * _proto_

 */

/*
    Type conversion (typecastin) vs Type coersion
    * Alteração de um tipo de dado para outro tipo

      console.log(Number('9') + 5)
  */

// Manipulando Strings e Números

/* Transformar String em números e números em string

        let string = '123'
        console.log(Number(string))
        let number = 321
        console.log(String(number))
  */

/*
   * Contar quantos caracteres tem uma palavra e quantos digitos tem um número
   
      let word = 'paralelepipido'
      console.log(word.length)
      let number = 349087
      console.log(String(number).length)
   */

/** Transformar um número quebrado com 2 casas decimais e trocar ponto por virgula
 * let number = 124.3523452352
  console.log(number.toFixed(2).replace(".", ","))
 */

/**
 * Transforme letras minúsculas em maiúsculas. Faça o contrário disso tammbém
  let word = 'Programar é muito bom'
  console.log(word.toLocaleUpperCase())
 */

// Manipulando Strings

/**
  * Verificar se o texto contém a palavra Amor
      let phrase = "Eu quero viver o amor"
      console.log(phrase.includes("amor"))
  */

// Manipulando Strings e Arrays

/**
 * Separar um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
    let phrase = 'Eu quero viver o Amor'
    let myArray = phrase.split(' ')
    console.log(myArray) // ele pega e separa tudo que tem espaço e coloca em um [i]
    let phraseWinthUnderscore = myArray.join('_')
    console.log(phraseWinthUnderscore.toLocaleLowerCase())
 */

// Manipulando Arrays

/**
 * Criar Array com construtor
    let myArray = new Array('a', 'b', 'c')
    console.log(myArray)

  * Contar elementos de um array
    console.log(['a', {type:'array'}, function(){return "alo"},
    ][2]())

  * Transformar uma cadeia de caracteres em elementos de um array
    let word = 'Tayanna'
    let wordAna = 'calas'
    console.log(Array.from(word), Array.from(wordAna))

    let techs = ['html', 'css', 'js']
    techs.push('node.js')
    techs.unshift('sql')
  * Adicionar um intem no fim
    techs.push('node.js')
  * Adicionar no começo
    techs.unshift('sql')
  * Romover do fim
    techs.pop()
  * remover do começo
    techs.shift()
  * pegar somentes alguns elementos do array
    console.log(techs.slice(1,3))
  * remover 1 ou mais items em qualquer posição do array
    techs.splice(1,2)
  * encontrar a posição de um elemnto no array
    let index = techs.indexOf('css')
    console.log(index)
 */






