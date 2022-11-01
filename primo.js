
function primo(n) {
  let count = 0
  for(let i = 2; i <= n; i++){
    if(n % i === 0) {
    count+= 1
    }
  }
  if(count === 1) {
    return true
  } else {
    return false
  }
}
console.log(primo(7))

function numerosPrimos(numero) {
  let primos = []
  numero = parseInt(numero)
  for(let i = 2; i <= numero; i++) {
    if(primo(i)) {
      primos.push(i)
    }
  }
  return primos
}
console.log(numerosPrimos(10))
