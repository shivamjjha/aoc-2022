import { getArray } from "../utils.cjs";
import { join } from 'path';


// A Y
// B X
// C Z

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

const looseObj = {
  A: 'Z',
  B: 'X',
  C: 'Y'
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


  if (b === 'X') {
    // Need to loose here
    const scoreForShape = getPointForSelection(looseObj[a])
    return scoreForShape + 0
  }

  if (b === 'Y') {
    // we need to draw here
    const scoreForShape = getPointForSelection(tieObj[a])
    return scoreForShape + 3
  }

  if (b === 'Z') {
    // need to win here
    const scoreForShape = getPointForSelection(winObj[a])
    return scoreForShape + 6
  }

}

const res = getArray(join('Day 2', 'input.txt'))
// console.log('res', res);

let totalScore = 0;

res.forEach(toss => {
  const score = getScore(toss)
  totalScore += score
})

console.log(totalScore)