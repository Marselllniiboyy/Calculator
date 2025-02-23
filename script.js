const btns = document.querySelectorAll("button");
const display = document.getElementById("display");
let expression = ""; //penyimpan expresi matematika

function calculate(a, operator, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "x":
      return a * b;
    case "/":
      return a / b;
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.value;
    if (value === "=") {
      let operators = expression.match(/[\+\-x\/]/g);
      let numbers = expression.split(/[\+\-x\/]/);

      console.log(operators);
      console.log(numbers);
      let result = parseFloat(numbers[0]);
      for (let i = 0; i < operators.length; i++) {
        let b = parseFloat(numbers[i + 1]);
        result = calculate(result, operators[i], b);
      }
      console.log(result);
      display.innerHTML = result;
      expression = result.toString();
    } else {
      if (value === "c") {
        display.innerHTML = "";
        expression = "";
      } else {
        expression += value;
        display.innerHTML = expression;
      }
    }
  });
});
