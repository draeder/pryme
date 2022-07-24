import pryme from './test2.js'
console.time()
let isPrime = pryme(1000000000001003)
console.timeEnd()
console.log(isPrime)