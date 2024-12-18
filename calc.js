const display = document.getElementById("display");

// Append values to the input box
function appendValue(value) {
  display.value += value;
}

// Clear the screen
function clearScreen() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Calculate square root
function calculateSquareRoot() {
  let number = parseFloat(display.value);
  if (!isNaN(number)) {
    let squareRoot = Math.sqrt(number);
    display.value = squareRoot; 
  } else {
    display.value = "Error"; 
  }
}

// Handle the Enter key press
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    calculate();
  }
});

// Handle the Backspace key press
document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    deleteLast();
  }
});

// Handle the Square Root (√) key press
document.addEventListener("keydown", function(event) {
  if (event.key === "s") { 
    calculateSquareRoot();
  }
});

//disables the right-click and prevents users from viewing the page source
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) e.preventDefault();
});