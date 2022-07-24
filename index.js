const Pryme = n => {
  let range = Math.sqrt(num)
  if(num <= 1) { return false } if (num <= 3) { return true }
  if (num % 2 === 0 || num % 3 === 0){ return false }
  for (let i = 5; i <= range; i += 6) { if (num % i === 0 || num % (i + 2) === 0) return false }
  return true
}

export default Pryme