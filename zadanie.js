// Zad 1
// sumOfCubes([3, 4, 5]) = 216

function sumOfCubes(arrayOfNumbers) {
  let result = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    result += Math.pow(arrayOfNumbers[i], 3);
  }

  return result;
}

console.log(sumOfCubes([3, 4, 5, 10, 2]));
console.log(sumOfCubes([]));
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));

// societyName(["Adam", "Marcin", "Tomasz"]) ➞ "AMT"

function societyName(arrayOfNames) {
  let result = "";
  for (let i = 0; i < arrayOfNames.length; i++) {
    result += arrayOfNames[i][0];
  }
  return result;
}
console.log(societyName(["Adam", "Marcin", "Tomasz"]));
console.log(societyName([]));

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minMax(arrayOfNumbers) {
  const result = [];
  let max = arrayOfNumbers[0];
  let min = arrayOfNumbers[0];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    min = Math.min(min, arrayOfNumbers[i]);
    max = Math.max(max, arrayOfNumbers[i]);
  }

  result.push(min);
  result.push(max);
  return result;
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2344324, 1, 2, 3, 6, 22]));
