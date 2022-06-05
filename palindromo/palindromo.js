//Solução 1
function verificaPalindromo(string) {
  if (!string) return

  return string.split('').reverse().join('') === string
}

console.log(verificaPalindromo("gato"))

// Solução modificada pessoalmente

let nome = prompt('Digite o nome que você deseja saber se é um palíndromo: ')

function verificaPalindromo() {

  if (nome.split('').reverse().join('') === nome) {
    alert('O nome que você digitou é um palídromo')
  } else {
    alert('Sinto muito!, o nome que você digitou não é um palíndromo')}

}

verificaPalindromo()

// Solução 2 