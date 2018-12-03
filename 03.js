const fs = require('fs')
const input = fs.readFileSync('./03_input.txt', 'utf-8')

const lines = input.split('\n')
const length = lines.length
const log = console.log

const MAXHEIGHT = 1000
const MAXWIDTH = 1000

log('Day 3')

function initGrid () {
  let grid = []
  for (let y = 0; y < MAXHEIGHT; y++) {
    grid[y] = new Array(MAXWIDTH)
    for (let x = 0; x < MAXWIDTH; x++) {
      grid[y][x] = { ids: [] }
    }
  }

  return grid
}

function parseInput (grid) {
  for (let linesIdx = 0; linesIdx < length; linesIdx++) {
    const line = lines[linesIdx].replace('@ ', '').replace(':', '')
    const args = line.split(' ')
    const id = args[0]
    const [ paddingLeft, paddingTop ] = args[1].split(',')
    const [ width, height ] = args[2].split('x')

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        grid[parseInt(paddingLeft) + parseInt(x)][parseInt(paddingTop) + parseInt(y)].ids.push(id)
      }
    }
  }

  return grid
}

function part1 () {
  log('part1')
  const grid = initGrid()
  const parsedGrid = parseInput(grid)

  let overlapCount = 0
  for (let y = 0; y < MAXHEIGHT; y++) {
    for (let x = 0; x < MAXWIDTH; x++) {
      if (parsedGrid[y][x].ids.length > 1) {
        overlapCount++
      }
    }
  }

  log((`Inches that overlap: ${overlapCount}`))
}

function part2 () {
  log('part2')
  const grid = initGrid()
  const parsedGrid = parseInput(grid)

  let ids = lines.map(x => x.split(' ')[0])

  for (let y = 0; y < MAXHEIGHT; y++) {
    for (let x = 0; x < MAXWIDTH; x++) {
      if (parsedGrid[y][x].ids.length > 1) {
        const parsedIds = parsedGrid[y][x].ids
        parsedIds.forEach(id => {
          const index = ids.indexOf(id)
          if (index !== -1) ids.splice(index, 1)
        })
      }
    }
  }

  log(`The only non overlapping id is ${ids}`)
}

part1()
part2()
