/*function calculaIdade(anos) {
  return`Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
  nome: "Maria",
  idade: 30
}

const pessoa2 = {
  nome: "Carla",
  idade: 26
}

const animal = {
  nome: "Fiona",
  idade: 5,
  raca:"Pug"
}

console.log(calculaIdade.call(pessoa1, 30))*/

function calcularCompras (valor) {
  return `Olá ${this.nome}, o troco da sua compra foi de ${valor - this.money} na ${this.dia}`
}

const pessoa1 = {
  nome:"Joana",
  money: 25,
  dia:"Segunda"

}

const pessoa2 = {
  nome:"Fernanda",
  money: 50,
  dia:"Quarta"

}

const pessoa3 = {
  nome:"José",
  money: 80,
  dia:"sexta"

}

console.log(calcularCompras.call(pessoa1, 60))

