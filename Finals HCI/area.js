const display = document.getElementById('display');
const fromAmount = document.getElementById('fromAmount');
const toAmount = document.getElementById('toAmount');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');

const conversionRates = {
  m2: 1,
  km2: 1e6,
  cm2: 0.0001,
  mm2: 0.000001,
  mi2: 2.59e6,
  yd2: 0.836127,
  ft2: 0.092903,
  in2: 0.00064516
};

function convertLength() {
  const value = parseFloat(display.value) || 0;
  const from = fromUnit.value;
  const to = toUnit.value;

  const base = value / conversionRates[from];  
  const result = base * conversionRates[to];   

  fromAmount.textContent = value;
  toAmount.textContent = result.toFixed(6);
}

function press(key) {
  if (display.value === "0") display.value = "";
  display.value += key;
  convertLength();
}

function clearDisplay() {
  display.value = "";
  convertLength();
}

function backspace() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") display.value = "0";
  convertLength();
}

document.getElementById("swapButton").addEventListener("click", () => {
  [fromUnit.value, toUnit.value] = [toUnit.value, fromUnit.value];
  convertLength();
});

fromUnit.addEventListener("change", convertLength);
toUnit.addEventListener("change", convertLength);

convertLength();

function goBack() {
  window.location.href = 'unit.html';
}
