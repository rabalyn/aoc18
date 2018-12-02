const fs = require('fs')
const input = fs.readFileSync('./02_input.txt', 'utf-8')

const lines = input.split('\n')
const length = lines.length
const log = console.log

log('Day 2')

function part1 () {
  log('part1')
  let chksmTwice = 0
  let chksmTrice = 0
  for (let lineCounter = 0; lineCounter < length; lineCounter++) {
    const line = lines[lineCounter]
    let tracked = {}
    for (let lineIndex = 0; lineIndex < line.length; lineIndex++) {
      tracked[line[lineIndex]] = tracked[line[lineIndex]] + 1 || 1
    }
    let foundTwice = 0
    let foundTrice = 0
    for (let letter in tracked) {
      if (tracked[letter] === 2 && foundTwice === 0) foundTwice++
      if (tracked[letter] === 3 && foundTrice === 0) foundTrice++
    }

    chksmTwice += foundTwice
    chksmTrice += foundTrice
  }

  const checksum = chksmTwice * chksmTrice
  log(`checksum is ${checksum}`)
}

function part2 () {
  log('part2')
  for (let lineCounter = 0; lineCounter < length - 1; lineCounter++) {
    const line1 = lines[lineCounter]
    for (let lineToCompareCounter = lineCounter + 1; lineToCompareCounter < length; lineToCompareCounter++) {
      const line2 = lines[lineToCompareCounter]
      let differCount = 0
      for (let lineIndex = 0; lineIndex < line1.length; lineIndex++) {
        if (line1[lineIndex] !== line2[lineIndex]) differCount++
      }

      if (differCount === 1) {
        let sameString = ''
        for (let idx = 0; idx < line1.length; idx++) {
          if (line1[idx] === line2[idx]) sameString += line1[idx]
        }
        log(sameString)
      }
    }
  }
}

part1()
part2()
