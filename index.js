const Pryme = n => {
  let range = Math.sqrt(n)
  if(n <= 1) { return false }
  if (n % 2 === 0 || n % 3 === 0){ return false }
  for (let i = 5; i <= range; i += 6) { if (n % i === 0 || n % (i + 2) === 0) return false }
  return true
}

export default Pryme