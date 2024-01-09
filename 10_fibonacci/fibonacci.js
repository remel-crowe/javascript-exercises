const fibonacci = function (num) {
  let arr = [0, 1];

  //Validate input, only integers are accepted.
  if (typeof num !== "number") {
    num = parseInt(num);
  }
  //Further input validation, only positive integers are accepted
  if (num < 0) {
    return "OOPS";
  } else {
    for (let i = 2; i <= num; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
