const fs = require('fs')
const input = fs.readFileSync('./01_input.txt', 'utf-8')

const numbers = input.split('\n')
const length = numbers.length
const log = console.log

function part1 () {
  let freq = 0
  for (let i = 0; i < length; i++) {
    freq += parseInt(numbers[i])
  }

  log(`The final frequence is ${freq}.`)
}

function part2 () {
  let foundTwice = null
  let count = 0
  let foundNumbers = []
  while (!foundTwice) {
    for (let i = 0; i < length; i++) {
      count += parseInt(numbers[i])
      if (foundNumbers[count] === 1) {
        foundTwice = count
        break
      } else {
        foundNumbers[count] = 1
      }
    }
  }

  log(`Found twice ${foundTwice}.`)
}

part1()
part2()
