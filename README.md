# Pryme
## Check if a number is prime

Pryme uses the optimizations documented [here](https://stackoverflow.com/a/17579161/1551027).

## Install
```
npm i pryme
```

## Usage
```js
let isPrime = pryme(101) // true
```

## Example
```js
import pryme from 'pryme'

let isPrime = pryme(1000000000001003)
console.log(isPrime) // true
```

## CLI
### Install
```js
npm i pryme -g
```

### Usage
```js
$ pryme 1
1 is prime? false
pryme > 101
101 is prime? true
pryme > // wait for new input
```

## Licence
MIT