import pryme from './index.js'
console.time()
let isPrime = pryme(1000000000001003)
console.timeEnd()
console.log(isPrime)