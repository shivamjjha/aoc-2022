import { getArray } from "../utils.cjs";
import { join } from 'path';

const res = getArray(join('Day 3', 'input.txt'))
console.log(res);

let sum = 0;
const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// console.log(priorities.length);

// const res = [
//   ['vJrwpWtwJgWrhcsFMMfFFhFp'],
//   ['jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'],
//   ['PmmdzqPrVvPwwTWBwg'],
//   ['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn'],
//   ['ttgJtRGJQctTZtZT'],
//   ['CrZsJsPPZsGzwwsLwLmpwMDw'],
// ]

res.forEach(arr => {
  const rucksack = Array.from(arr)
  // console.log(rucksack)
  const middlePos = Math.floor(rucksack.length / 2)

  const firstCompartment = rucksack.slice(0, middlePos)
  // console.log('firstCompartment', firstCompartment)
  const secondCompartment = rucksack.slice(middlePos, rucksack.length)

  const itemThatAppearsInBoth = firstCompartment.find(item => secondCompartment.includes(item));
  // console.log('itemThatAppearsInBoth', itemThatAppearsInBoth)
  sum += priorities.indexOf(itemThatAppearsInBoth) + 1
})

console.log(sum)
