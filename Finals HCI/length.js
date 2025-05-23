const display = document.getElementById('display');
const fromAmount = document.getElementById('fromAmount');
const toAmount = document.getElementById('toAmount');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');

const conversionRates = {
  m: 1,
  km: 0.001,
  cm: 100,
  mm: 1000,
  mi: 0.000621371,
  yd: 1.09361,
  ft: 3.28084,
  in: 39.3701
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


