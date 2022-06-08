const sapatos = [
  {
    marca:'Nike',
    valor: 30,
    numero: 34,
  },
  {
    marca:'Adidas',
    valor: 150,
    numero: 34,
  },
  {
    marca:'Capodarte',
    valor: 200,
    numero: 34,
  },
  {
    marca:'Santa Lola',
    valor: 100,
    numero: 34,
  }
]

function shoesComprados(arr, money) {
  let escolhidos = []

  for(let i = 0; i < arr.length; i++) {
    const { valor, marca } = arr[i]
    if (valor <= money) {
      escolhidos.push(marca)
    }
  }

  return escolhidos
}

console.log(shoesComprados(sapatos, 100))