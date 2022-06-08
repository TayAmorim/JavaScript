function numberCompar() {
  let n1 = Number(prompt('Insira o 1º número: '))
  let n2 = Number(prompt('Insira o 2º número: '))
  let resultado
  function soma() {
    resultado = n1 + n2
  }

  if (!n1 || !n2) {
    alert('Defina dois números')
    numberCompar()
  }

  if (n1 === n2) {
    soma()
    if (resultado < 10) {
      alert(
        `Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é menor que 10 e 20`
      )
    } else if (resultado > 10 && resultado < 20) {
      alert(
        `Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é maior que 10 menor 20`
      )
    } else if (resultado > 20) {
      alert(
        `Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é maior que 10 e maior 20`
      )
    }
  } else {
    soma()
    if (resultado < 10) {
      alert(
        `Os números ${n1} e ${n2} são diferentes. Sua soma é ${resultado}, que é menor que 10 e 20`
      )
    } else if (resultado > 10 && resultado < 20) {
      alert(
        `Os números ${n1} e ${n2} são diferentes. Sua soma é ${resultado}, que é maior que 10 menor 20`
      )
    } else if (resultado > 20) {
      alert(
        `Os números ${n1} e ${n2} são diferentes. Sua soma é ${resultado}, que é maior que 10 e maior 20`
      )
    }
  }
  function soma() {
    resultado = n1 + n2
  }
}

numberCompar()
