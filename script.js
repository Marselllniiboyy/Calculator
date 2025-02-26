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
      let numbers = expression.split(/[\+\-x\/]/).map(Number);

      console.log("Operator", operators);
      console.log("Numbers", numbers);

      for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "x" || operators[i] === "/") {
          let result = calculate(numbers[i], operators[i], numbers[i + 1]);
          numbers.splice(i, 2, result);
          operators.splice(i, 1);
          i--;
        }
      }

      for (let i = 0; i < operators.length; i++) {
        let result = calculate(numbers[i], operators[i], numbers[i + 1]);
        numbers.splice(i, 2, result); //repleace
        operators.splice(i, 1); //hapus operator
        i--;
      }

      let finalResult = numbers[0];
      display.innerHTML = finalResult;
      console.log("Hasil Akhir:", finalResult);
      expression = finalResult.toString();
    } else {
      if (value === "c") {
        display.innerHTML = "";
        expression = "";
      } else if (value === "del") {
        expression = expression.slice(0, -1);
        display.innerHTML = expression;
      } else {
        if (/[+\-x/]/.test(expression.slice(-1)) && /[+\-x/]/.test(value)) {
          return;
        }

        if (expression === "0" && !/[+\-x/]/.test(value)) {
          expression = value;
        } else {
          expression += value;
        }
        display.innerHTML = expression;
      }
    }
  });
});
