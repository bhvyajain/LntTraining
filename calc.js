calc = [];

function add() {
  var num = $("number").val;
  calc.push(num);
  console.log(calc);
}

function sum() {
  var sum = calc.reduce((a, b) => a + b);
  console.log(sum);
}
function avg() {
  var avg = calc.m;
}
function min() {}
