console.log("First node example");
function prime_check(x) {
  var k = x;
  if (k % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function PrimeRangeCheck(x, y) {
  var k = x;
  var m = y;
  primearry = [];
  for (i = k; i <= m; i++) {
    if (i % 2 === 0) {
      primearry.push(i);
    }
  }
  return primearry;
}

function multiplePrime() {
  primearry = [];
  for (i = 1; i <= arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      primearry.push(arguments[i]);
    }
  }
  return primearry;
}
prime_check(6);
