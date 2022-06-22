var input1 = parseInt(prompt("Enter The First Number"));
var input2 = parseInt(prompt("Enter The Second Number"));
var solution;

var operator = prompt("Select An Operation To Carry Out[+, -, / or *]");

if (operator === "+") {
  solution = input1 + input2;
  alert(solution);
} else if (operator === "-") {
  solution = input1 - input2;
  alert(solution);
} else if (operator === "/") {
  solution = input1 / input2;
  alert(solution);
} else if (operator === "*") {
  solution = input1 * input2;
  alert(solution);
}
