console.log("First node example");
function prime_check(x) {
  var k = x;
  if (k === 1) {
    return true;
  }
  for (i = 2; i <= x; i++) {
    if (k % i === 0) {
      return true;
    } else {
      return false;
    }
  }
}
function PrimeRangeCheck(x, y) {
  var k = x;
  var m = y;
  primearry = [];
  for (i = k; i <= m; i++) {
    if (prime_check(i)) {
      primearry.push(i);
    }
  }
  return primearry;
}

function multiplePrime() {
  primearry = [];
  for (i = 1; i <= arguments.length; i++) {
    if (prime_check(argument[i])) {
      primearry.push(argument[i]);
    }
  }
  return primearry;
}
prime_check(6);
PrimeRangeCheck(3, 19);
