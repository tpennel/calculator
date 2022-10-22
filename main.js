const opAdd = 'add';
const opSubtract = 'subtract';
const opMultiply = 'multiply';
const opDivide = 'divide';



function operate(operation, a, b) {
  if (operation === 'add') return add(a,b);
  else if (operation === 'subtract') return subtract(a,b);
  else if (operation === 'multipy') return multiply(a,b);
  else return divide(a,b);
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

console.log(operate(opDivide, 6,2));