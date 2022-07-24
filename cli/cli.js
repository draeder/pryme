#! /usr/bin/env node
import pryme from '../index.js'
import Carets from 'carets'

let params = {
  caret: 'pryme > '
}
let carets = new Carets(params)

let num = process.argv.slice(-1)[0]
num = parseInt(num)
if(!num) { 
  carets.prompt(params.caret)
} else {
  if(typeof num !== 'number') throw new Error(`${num} is not an integer`)
  check(num)
  carets.prompt(params.caret)
}
function check(num){
  console.time()
  let isPrime = pryme(num)
  console.timeEnd()
  console.log(num, 'is prime?', isPrime)
}
carets.on('line', data => {
  num = parseInt(data)
  check(num)
})