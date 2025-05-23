const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const fromAmount = document.getElementById("fromAmount");
const toAmount = document.getElementById("toAmount");
const display = document.getElementById("display");

let exchangeRate = 0;
let currencyList = {};

fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    currencyList = data.rates;
    for (const code in currencyList) {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
      option1.value = option2.value = code;
      option1.textContent = option2.textContent = code;
      fromCurrency.appendChild(option1);
      toCurrency.appendChild(option2);
    }

    fromCurrency.value = "USD";
    toCurrency.value = "EUR";

    updateRate();
  })
  .catch(err => {
    console.error("Error loading currency list:", err);
    alert("Unable to load currencies. Please check your internet connection or try a different browser.");
  });


function press(val) {
  if (display.value === "0") display.value = val;
  else display.value += val;

  fromAmount.textContent = display.value;
  updateConversion();
}

function clearDisplay() {
  display.value = "0";
  fromAmount.textContent = "0";
  toAmount.textContent = "0";
}

function backspace() {
  display.value = display.value.slice(0, -1) || "0";
  fromAmount.textContent = display.value;
  updateConversion();
}

function updateConversion() {
  if (!exchangeRate) return;
  const input = parseFloat(display.value);
  if (isNaN(input)) return;
  toAmount.textContent = (input * exchangeRate).toFixed(2);
}

function updateRate() {
  const from = fromCurrency.value;
  const to = toCurrency.value;

  fetch(`https://open.er-api.com/v6/latest/${from}`)
    .then(res => res.json())
    .then(data => {
      exchangeRate = data.rates[to];
      updateConversion();
    })
    .catch(err => {
      console.error("Error fetching exchange rate:", err);
      alert("Failed to update exchange rate. Please try again later.");
    });
}

fromCurrency.addEventListener("change", () => {
  updateRate();
});
toCurrency.addEventListener("change", () => {
  updateRate();
});
document.getElementById("swapButton").addEventListener("click", () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  updateRate();
});
