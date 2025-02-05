const btns = document.querySelectorAll("button");
const display = document.getElementById("display");
let expression = ""; //penyimpan expresi matematika

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

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.value;
    if (value === "=") {
      let operators = expression.match(/[\+\-x\/]/g);
      let numbers = expression.split(/[\x\-x\/]/);
      console.log(operators);
      console.log(numbers);

      let result = numbers.shift();
      while (operators && operators.length > 0) {
        let operator = operators.shift();
      }
    } else {
      expression += value;
      display.innerHTML = expression;
      console.log(expression);
    }
  });
});
