import { getArray, read } from '../utils.cjs';
import { join } from 'path';

const arr = getArray(join('Day 1', 'input.txt'));

let caloriePerElf = [];
let startIndex = 0;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (element === '') {
    const sum = arr
      // take sum b/w last calories till now (b/w two empty strings) 
      .slice(startIndex + 1, i)
      .reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
    startIndex = i;

    caloriePerElf.push(sum);
  }
}

console.log(
  'ans',
  caloriePerElf
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((prev, curr) => prev + curr, 0)
);
