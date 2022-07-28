# Função

#### :card_index: Índice

  - [Fuction scope](#scope)
  - [Fuction Hoisting](#hoisting)
  - [Fuction Express](#express)
  - [Callback Function](#callback)
  - [Arrow Function](#arrow)



## :red_circle:  Function() constructor {#function-construtor}

```javaScript
  * expressão new
  * criar um novo projeto
  * this keyword
```

```javaScript

  function Person(name, nota) {
  this.name = name
  this.nota = nota
  this.media = function () {
    let media = this.nota / 2
    if (media >= 3) {
      return this.name + ' você foi aprovado sua média foi de ' + media
    } else {
      return this.name + ' você ficou abaixo da nota sua média foi de ' + media
    }
  }
}

let aluno1 = new Person('Tayanna', 9)
let aluno2 = new Person('Maria', 2)
let aluno3 = new Person('josé', 9)

console.log(aluno1, aluno2, aluno3)
//Saída esperada: 
//Person {name: 'Tayanna', nota: 9, media: ƒ}  
//Person {name: 'Maria', nota: 2, media: ƒ} 
//Person {name: 'josé', nota: 9, media: ƒ}

console.log(aluno2.media())
//Saída esperada: Maria você ficou abaixo da nota sua média foi de 1 

console.log(aluno3.media())
//Saída esperada: josé você foi aprovado sua média foi de 4.5
```

## :red_circle: Function scope {#scope}
Uma function serve como um procedimento em JavaScript, e portanto, cria um escopo, de modo que (por exemplo) uma variável definida exclusivamente dentro da função não pode ser acessada de fora da função ou dentro de outras funções.
```javaScript
let nome = 'Tayanna'

function creatName(nome) {
  nome = 'Amorim'
  return nome
}

console.log(creatName(nome))
//Saída esperada: Amorim
console.log(nome)
//Saída esperada: Tayanna
```

## :red_circle: Function Hoisting {#hoisting}
Ele permite que você execute funções antes das suas declarações. Na prática, inicialmente as declarações de funções são colocadas na memória durante a fase de compilação e, mesmo assim, permanecem no mesmo lugar que estão digitadas.

```javaScript

console.log(soma(2, 5))

function soma(a, b) {
return a + b
}
//Saída esperada: 7

//O JavaScript movem a função soma para o ínicio do escopo
//por isso que o código acima funciona
function soma(a, b) {
  return a + b
}
console.log(soma(2, 5))
```
A utilização de Hoisting em **var** não é indicada, pois a variável criada é elevada para o escopo, mas sem o seu valor, e com isso, retorna valor undefined.
```javaScript
console.log(metodosCafe)
var metodosCafe = 'Prensa Francesa'
//Saída esperada: undefined
```
Hoisting também não é indicado utilizando **let**, pois acontece um outro tipo de comportamento não desejado:
```javaScript
console.log(metodosCafe)
let metodosCafe = 'Koar'
//Saída esperada:  Cannot access 'metodosCafe' before initialization ou seja não é possivel acessar metodosCafe
```

## :red_circle: Function Express {#express}
A palavra-chave function pode ser usada para definir uma função generator dentro de uma expressão.
Uma function anonymous(**Função anônima**), cria uma função sem que anteriormente haja um nome para ela:
Elas somente são declaradas em variáveis.

```javaScript
let sum = function(number1, number2) {
  total = number1 + number2
  return total
}
let number1 = 34
let number2 = 25
sum(number1, number2)

console.log(`O número 1 é ${number1}`)
//Saída esperada: O número 1 é 34
console.log(`O número 2 é ${number2}`)
//Saída esperada: O número 2 é 25
console.log(`a soma é ${total}`)
//Saída esperada: a soma é 59
```

## :red_circle: Callback Function {#callback}
É uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

**Exemplo1**
```javaScript
function sayMyName(name) {
  console.log('antes de executar a função callback')
  name()
  console.log('depois de executar a função callback')

}
sayMyName(() => {
  console.log('estou em uma callback')
})

//Saída esperada: antes de executar a função callback
// estou em uma callback
//depois de executar a função callback
```
## :red_circle: Arrow Function {#arrow}
Nos permitem escrever uma sintaxe de função mais curta:
```javaScript
//Sem arrow function
const saudacao = function () {
  console.log('Bom dia')
//Saída esperada: Bom dia
}

saudacao()
```
```javaScript
//Com arrow function
const saudacao = () => {
  console.log('Bom dia')
}

saudacao()
```