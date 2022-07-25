# Expressão e Operadores

Este artigo descreve expressões e operadores de JavaScript.

#### Índice

  - [New](#new)
  - [Operadores unários](#operadores-unarios)
  - [Operadores Aritméticos](#operadores-aritmeticos)
  - [Grouping operadtor](#grouping-operadtor)
  - [Operadores de comparação](#operadores-de-comparacao)
  - [Operadores de atribuição (Assignment)](#assignment)
  - [Operadores lógicos (logical operators)](#operadores-logicos)
  - [Operadores Condicional (Ternário)](#operadores-condicional)
  - [Operador de String](#string)
  - [Falsy e truthy](#false-truthy)
  - [Precedência dos operadores](#precedencia-operadores)
  

## Operators {#operadores}

 **Binary**
Exige dois operandos, um antes do operador e outro depois:

```javaScript
let number = 1
console.log(number + 1)
```

**Unary**
Exige um único operando, seja antes ou depois do operador:

```JavaScript
let number = 1
console.log(++number)
```
**Ternary**

```JavaScript
let number = 1
console.log(false ? 'alo' : 'nada')
```

### New {#new}

Left-hand-side expression - Cria um novo objeto
```JavaScript
let name = new String('Tayanna')
name.surName = 'Amorim'

let age = new Number(23)
console.log(name, name.surName)

//Saída esperada: String {'Tayanna', surName: 'Amorim'} 'Amorim'
```
### Operadores unários {#operadores-unarios}

 **Typeof**
Retorna uma string indicando o tipo de um operando.
```JavaScript
   let idade = 24
  console.log(typeof idade)

//Saída esperada: number
```

 **Delet**
```JavaScript
const person = {
  name: 'Tayanna',
  age: 27
}

delete person.age

console.log(person)

//Saída esperada: {name: 'Tayanna'}
```
### Operadores Aritméticos {#operadores-aritmeticos}

**multiplicação** 
```JavaScript
console.log(3.2 * 5.5)

//Saída esperada: 17.6
```
 **divisão /** 
```JavaScript
console.log(12 / 3)

//Saída esperada: 4
```
 **soma** 
```JavaScript
console.log(25 + 3)

//Saída esperada: 28
```
**subtração** 
```JavaScript
let numero1 = 34
let numero2 = 10

console.log(numero1 - numero2)

//Saída esperada: 24
```

 **Resto da divisão** 
retorna o resto da divisão em números inteiros do número da esquerda pelo número da direita.
```JavaScript
let remainder
remainder = 11 % 3

console.log(remainder)

//Saída esperada: 2
```
 **Incremento** 
 adiciona um ao seu operando. Se usado como operador prefixado (++x), retorna o valor de seu operando após a adição. Se usado como operador pósfixado (x++), retorna o valor de seu operando antes da adição.
```JavaScript
let increment = 0
increment++

console.log(increment)

//Saída esperada: 1
```
**Decremento** 
```JavaScript
let decrement = 0
decrement--

console.log(decrement)

//Saída esperada: -1
```

 **Exponencial** 
```JavaScript
console.log(3 ** 3)

//Saída esperada: 27
```

### Grouping operadtor {#grouping-operadtor}
O operador de agrupamento consiste em um par de parênteses em volta de uma expressão, ou sub-expressão, para ignorar a precedência normal de operadores de modo que expressões com menor precedência possam ser avaliadas antes de uma expressão com maior prioridade.

```JavaScript
var a = 1
var b = 2
var c = 3

//Precedência padrão
console.log(a + b * c)
//Saída esperada: 7

//Avaliado por padrão assim, 
//primeiro a multiplicação e depois a soma
a + (b * c)
//Saída esperada: 7

// Agora substituindo a precedência
// adição antes da multiplicação
console.log((a + b) * c )
//Saída esperada: 9

// que é equivalente a
a * c + b * c 
//Saída esperada: 9
```

### Operadores de comparação {#operadores-de-comparacao}
irá comparar valores e retornar um **Boolean** como resposta á comparação

```JavaScript
//Variáveis usadas como base para os exemplos

let one = 1
let two = 2
```

**==** igual a 
```JavaScript
console.log(two == 1) 
//Saída esperada: false

console.log(one == '1') 
//Saída esperada: true
```

**!=** diferente de 
```JavaScript
console.log(one != two)
//1 é diferente de 2? 
//Saída esperada: true

console.log(one != 1)
//1 é diferente de 1?
//Saída esperada: false

console.log(one != '1')
//1 é diferente de 1?
//Nesse caso observe que a comparação
//é feita entre um numero e uma string
//Saída esperada: false
```
**===** estritamente igual a 
```JavaScript
console.log(one === '1')
//Saída esperada: false

console.log(one === 1)
//Saída esperada: true
```

**!==** estritamente diferente de
```JavaScript
console.log(two !== '2')
//Saída esperada: true

console.log(two !== 2)
//Saída esperada: false
```

**>** maior
```JavaScript
console.log(one >= two)
//Saída esperada: false
```

**>=** maior igual que
```JavaScript
console.log(one >= 1)
//Saída esperada: true
console.log(two >= 1)
//Saída esperada: true
```

**>** menor
```JavaScript
console.log(one < two)
//Saída esperada: true
```
**>=** menor igual que
```JavaScript
console.log(one <= two)
//Saída esperada: true

console.log(one <= 1)
//Saída esperada: true

console.log(one <= 0)
//Saída esperada: false
```

### Operadores de atribuição (Assignment) {#assignment}
Armazenam um valor no objeto especificado pelo operando esquerdo.
```JavaScript
//Variável usada como exemplo
let x
```
**assignment normal:** 
```JavaScript
x = 1
console.log(x)
//Saída esperada: 1
```

**addition assignment (adição):** 
```JavaScript
x = 1
x += 2
console.log(x)
//Saída esperada: 3
```

**subtraction assignment (subtração):** 
```JavaScript
x = 1
x -= 1
console.log(x)
//Saída esperada: 0
```
**multiplication assignment (multiplacação):** 
```JavaScript
x = 1
x *= 2
console.log(x)
//Saída esperada: 2
```
**division assignment (divisão):** 
```JavaScript
x = 1
x /= 2
console.log(x)
//Saída esperada: 0.5
```
**exponetiation assignment (exponenciação):** 
```JavaScript
x = 1
x **= 2
console.log(x)
//Saída esperada: 1
```

**remainder assignment (resto de divisão):** 
```JavaScript
x = 1
x %= 2
console.log(x)
//Saída esperada: 1
```

### Operadores lógicos (logical operators) {#operadores-logicos}
 2 valores booleanos, quando verificado, resultará em verdadeiro ou falso

**Exemplo:** Você precisa ir a feira, comprar os ingredientes para fazer um sanduiche. Os ingredientes necessários são: Pão E queijo

**AND &&** 
Será **verdadeiro** se e somente se **todos** os operandos forem verdadeiros. Caso contrário, será falso.
```JavaScript
//Você consegue comprar os dois ingredientes
let pao = true
let queijo = true

console.log(pao && queijo)
//Saída esperada: true

//Você só consegue comprar queijo
//mas não quer fazer o sanduiche sem queijo
let pao = true
let queijo = false

console.log(pao && queijo)
//Saída esperada: false
```
**OR ||**
É **verdadeiro** se e somente se **um ou mais** de seus operandos for verdadeiro. 
```JavaScript
//Você consegue comprar apenas o pão 
//mas não se importa de comer ele com manteiga
let pao = true
let queijo = false

console.log(pao || queijo)
//Saída esperada: true
```
**NOT !** 
```JavaScript
let pao = true
let queijo = false

console.log(!pao)
//Saída esperada: false
```

### Operadores Condicional (Ternário) {#operadores-condicional}
Dependendo da condição, o valor recebido pode ser diferentes
```JavaScript
//Condição - Valor1 - se não - Valor 2
condition ? value1 : value2
```
**Exemplo1:**
Para fazer café moído precisamos:
- de grão de café
- moedor
```JavaScript
//No caso de se ter os dois itens necessários
let grao = true
let moedor = true

const groundCoffee =
  grao && moedor
    ? 'Você tem tudo para fazer um café moido'
    : 'Falta itens para poder moer o café'

console.log(groundCoffee)
//Saída esperada: Você tem tudo para fazer um café moido

//Na falta de algum item
let grao = true
let moedor = false
console.log(groundCoffee)
//Saída esperada: Falta itens para poder fazer moer o café
```

**Exemplo2:**
A escolha do leite para fazer café com leite é determinada de acordo com o gosto pessoal de cada indivíduo.
```JavaScript
//Nesse caso temos o leite integral e o em pó,
//não é necessário os dois tipos para fazer um café com leite
let po = true
let integral = false

const coffeeWithMilk =
  po || integral
    ? 'Você pode fazer seu café com leite'
    : 'Você não possui leite para fazer a receita'

console.log(coffeeWithMilk)
//Saída esperada: Você pode fazer seu café com leite

//Mas na falta de leite indepedente de qual tipo
//não é possivel fazer um bom café com leite
let po = false
let integral = false

console.log(coffeeWithMilk)
//Saída esperada: Você não possui leite para fazer a receita
```
**Exemplo3:**
Marta vai numa cafeteria do seu bairro comprar café em grãos, e leva consigo um nota 50 reais. Ela deseja saber se consegue realizar sua compra. 
```JavaScript
let dinheiro = 50

const buyCoffe =
  dinheiro >= 40
    ? 'Marta pode comprar o café'
    : 'Marta não tem dinheiro suficiente'

console.log(buyCoffe)
//Saída esperada: Marta pode comprar o café
```

### Operador de String {#string}

**Comparação**
```JavaScript
console.log('a' == 'b')
//Saída esperada: false
```
**Concatenation (concatenação)**
Retorna a união de duas Strings
```JavaScript
let nome = 'Tayanna'
let sobrenome = 'Amorim'

console.log(nome + sobrenome)
//Saída esperada: TayannaAmorim
```

### Falsy e truthy {#false-truthy}
O **falsy** é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:
```JavaScript
/*
Todos os valores abaixo seriam representados 
como false em um boolean.
false
  0
  0
  ""
  null
  undefined
  NaN
*/
console.log(NaN ? 'verdadeiro' : 'falso' )
//Saída esperada: falso
```
Já o **truthy** é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

```JavaScript
/*
Todos os valores abaixo seriam representados como false em um boolean.
true
    {}
    []
    1
    3.23
    "0" - String com conteúdo
    "false"
    -1
    Infinity
    -Infinity
*/
console.log(Infinity ? 'verdadeiro' : 'falso')
//Saída esperada: verdadeiro
```

### Precedência dos operadores {#precedencia-operadores}
A ordem de importância de cada operador.

```JavaScript
// De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
```