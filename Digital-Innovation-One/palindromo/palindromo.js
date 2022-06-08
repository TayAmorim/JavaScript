//Solução 1
/*function verificaPalindromo(string) {
  if (!string) return

  return string.split('').reverse().join('') === string
}

console.log(verificaPalindromo('gato'))

// Solução modificada pela usúaria

let nome = prompt('Digite o nome que você deseja saber se é um palíndromo: ')

function verificaPalindromo1() {
  if (nome.split('').reverse().join('') === nome) {
    alert('O nome que você digitou é um palídromo')
  } else {
    alert('Sinto muito!, o nome que você digitou não é um palíndromo')
  }
}

verificaPalindromo1()*/

// Solução 2

function verificaPalindromo3(string) {
  if (!string) return 'string inexistente'

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }

  return true
}

console.log(verificaPalindromo3('ovo'))
