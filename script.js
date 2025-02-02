const btns = document.querySelectorAll("button");
const display = document.getElementById("display");
let clickedItems = [];

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
      if (clickedItems.length < 3) return;

      let num1 = parseFloat(clickedItems[0]);
      let operator = clickedItems[1];
      let num2 = parseFloat(clickedItems[2]);

      let result;
      if (operator === "+") {
        result = add(num1, num2);
      } else if (operator === "-") {
        result = subtract(num1, num2);
      } else if (operator === "*") {
        result = multiply(num1, num2);
      } else if (operator === "/") {
        result = divide(num1, num2);
      }
      console.log(result);
      display.innerHTML = result;
      clickedItems = [];
    } else {
      clickedItems.push(value);
      display.innerHTML = clickedItems.join("");
    }
  });
});
