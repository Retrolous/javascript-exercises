const fibonacci = function (input) {
  if (+input === 0) {
    return 0;
  } else if (+input < 0) {
    return "OOPS";
  }

  let a = 1;
  let b = 0;
  let temp = 0;
  for (i = 0; i < +input - 1; i++) {
    temp = a;
    a += b;
    b = temp;
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;


