/* 
  Function() constructor

  * expressão new
  * criar um novo projeto
  * this keyword
*/

function Person(name, nota) {
  this.name = name
  this.nota = nota
  this.media = function() {
    let media = this.nota / 2
    if(media >= 3) {
      return 'você foi aprovado sua média foi de ' + media
    } else {
      return this.name + ' você ficou abaixo da nota sua média foi de ' + media
    }
  } 
}

let aluno1 = new Person('Tayanna', 9)
let aluno2 = new Person('Maria', 2)
let aluno3 = new Person('josé', 9)

console.log(aluno1, aluno2, aluno3)
console.log(aluno2.media())
