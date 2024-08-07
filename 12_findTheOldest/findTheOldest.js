const findTheOldest = function (arr) {
  return arr
    .map((input) => [
      input.name,
      +("yearOfDeath" in input
        ? input.yearOfDeath
        : +new Date().getFullYear()) - +input.yearOfBirth,
    ])
    .sort((a, b) => a[1] - b[1])
    .map((input) => ({ name: input[0], age: input[1] }))[arr.length - 1];
};

console.log(
  findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ])
);
// Do not edit below this line
module.exports = findTheOldest;
