const reduceLeft = [1, 2, 3, 4, 5];
const reduce = (array, transformation) => {
  let result = 0;
  for (const el of array) {
    result = result + el;
  }
  return result;
};
console.log(reduce(reduceLeft));
