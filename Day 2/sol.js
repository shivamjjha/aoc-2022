import { getArray } from "../utils.cjs";
import { join } from 'path';

const tieObj = {
  A: 'X',
  B: 'Y',
  C: 'Z'
}

const winObj = {
  A: 'Y',
  B: 'Z',
  C: 'X'
}

function getPointForSelection(input) {
  if (input === 'X') {
    return 1
  }

  if (input === 'Y') {
    return 2
  }

  if (input === 'Z') {
    return 3
  }
}

function getScore(input) {
  const [a, b] = input.split(' ');
  // opponent -> A: Rock, B: paper, C: scissors
  // Us -> X: Rock, Y: paper, Z: scissors

  const scoreForShape = getPointForSelection(b)

  if (tieObj[a] === b) {
    // we drew
    return 3 + scoreForShape
  }

  if (winObj[a] === b) {
    // We won
    return 6 + scoreForShape
  }

  // Else, We Lost
  return 0 + scoreForShape
}

const res = getArray(join('Day 2', 'input.txt'))
// console.log('res', res);

let totalScore = 0;

res.forEach(toss => {
  const score = getScore(toss)
  // console.log(score)
  totalScore += score
})

// console.log(totalScore)