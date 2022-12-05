import { getArray } from '../utils.cjs';
import { join } from 'path';

const res = getArray(join('Day 3', 'input.txt'));
// console.log(res);

let sum = 0;
const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(priorities.length);

// const res = [
//   ['vJrwpWtwJgWrhcsFMMfFFhFp'],
//   ['jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'],
//   ['PmmdzqPrVvPwwTWBwg'],
//   ['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn'],
//   ['ttgJtRGJQctTZtZT'],
//   ['CrZsJsPPZsGzwwsLwLmpwMDw'],
// ]

for (let i = 0; i < res.length; i += 3) {
  const firstRuckSack = Array.from(res[i]);
  // console.log('firstCompartment', firstCompartment)
  const secondRuckSack = Array.from(res[i + 1]);

  const thirdRuckSack = Array.from(res[i + 2]);

  const itemThatAppearsInAll = firstRuckSack.find(
    item => secondRuckSack.includes(item) && thirdRuckSack.includes(item)
  );
  // console.log('itemThatAppearsInBoth', itemThatAppearsInBoth)
  sum += priorities.indexOf(itemThatAppearsInAll) + 1;
}

console.log(sum);
