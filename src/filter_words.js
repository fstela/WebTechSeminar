const words = [
  "fox",
  "wolf",
  "snake",
  "crocodile",
  "lion",
  "cat",
  "crocodile",
  "horse"
];
const forbiddenWord = "crocodile";
const minLength = 4;
const filterWords = (words, forbiddenWord, minLength) =>
  words.filter((word) => word !== forbiddenWord && word.length >= minLength);
console.log(filterWords(words, forbiddenWord, minLength));

const varste = [19, 16, 20, 34, 50, 12, 18];
const filterAge = (varste) => varste.filter((varsta) => varsta >= 18);
console.log(filterAge(varste));
