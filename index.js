const Pryme = num => {
  let tmp = num
  let result = {}
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      result[i] = (result[i] || 0) + 1
      num /= i
    }
  }
  if(div(tmp, 2) === tmp || div(tmp, 3) === tmp) {
    return false
  }
  else if(Object.keys(result).length === 1 && tmp % 3 !== 0 && ( tmp % 5 !== 0 || tmp === 5 )) {
    return true
  }
}

function div(number, divisor){
  return number + (divisor - (number % divisor)) % divisor
}

export default Pryme