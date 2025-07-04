let display = document.getElementById('display');
let historyList = document.getElementById('historyList');

function append(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let result = eval(display.value);
    if (result !== undefined) {
      addToHistory(display.value + ' = ' + result);
      display.value = result;
    }
  } catch (e) {
    alert('Invalid expression');
  }
}
function calculate() {
  try {
    let expr = display.value;

    // Handle degrees if needed
    if (useDegrees) {
      expr = expr.replace(/Math\.sin\(([^)]+)\)/g, (match, angle) => `Math.sin((${angle}) * Math.PI / 180)`);
      expr = expr.replace(/Math\.cos\(([^)]+)\)/g, (match, angle) => `Math.cos((${angle}) * Math.PI / 180)`);
      expr = expr.replace(/Math\.tan\(([^)]+)\)/g, (match, angle) => `Math.tan((${angle}) * Math.PI / 180)`);
    }
let useDegrees = false;
    let result = eval(expr);
    if (result !== undefined) {
      addToHistory(display.value + ' = ' + result);
      display.value = result;
    }
  } catch (e) {
    alert('Invalid expression');
  }
}

function copyResult() {
  navigator.clipboard.writeText(display.value)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}

function addToHistory(entry) {
  let li = document.createElement('li');
  li.textContent = entry;
  historyList.prepend(li);
  // Optional: Save to localStorage
}

document.addEventListener('keydown', (e) => {
  if ((e.key >= 0 && e.key <= 9) || ['+', '-', '*', '/', '.'].includes(e.key)) {
    append(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
});

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
function toDegrees() {
  useDegrees = !useDegrees;
  alert(useDegrees ? "Degree mode ON" : "Radian mode ON");
}