console.log("First node example");
function prime_check(x) {
  var k = x;
  for (i = 2; i <= x; i++) {
    if (k % i === 0) {
      return 0;
    } else {
      return 1;
    }
  }
}
function PrimeRangeCheck(x, y) {
  var k = x;
  var m = y;
  primearry = [];
  for (i = k; i <= m; i++) {
    var d = prime_check(i);
    if (d === 0) {
      primearry.push(i);
    }
  }
  return primearry;
}

function multiplePrime() {
  primearry = [];
  for (i = 1; i <= arguments.length; i++) {
    var d = prime_check(argument[i]);
    if (d === 0) {
      primearry.push(argument[i]);
    }
  }
  return primearry;
}
prime_check(6);
