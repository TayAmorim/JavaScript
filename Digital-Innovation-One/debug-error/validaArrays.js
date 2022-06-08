function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parâmetros')
    if (typeof arr !== 'object')
      throw new TypeError('O array precisa ser do tipo objeto')
    if (typeof num !== 'number')
      throw new TypeError('O num precisa ser do tipo número')
    if (arr.length !== num) throw new RangeError('Tamanho invalído')
    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Este é um erro referenceError!')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Este é um erro TypeError!')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Este é um erro RamgerError!')
      console.log(e.message)
    } else {
      console.log('Ocorreu um tipo de erro não esperado:' + e)
    }
  }
}

console.log(validaArray([1, 2, 3, 4, 5], 5))
