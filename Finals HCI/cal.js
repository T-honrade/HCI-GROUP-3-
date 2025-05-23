let flag = 0;
let output = document.getElementById("ot");

function display(num) {
  if (flag == 1) {
    output.value = num;
    flag = 0;
  } else {
    output.value += num;
  }
}

function calculate() {
  try {
    output.value = eval(output.value);
    flag = 1;
  } catch (err) {
    output.value = "";
    alert("INVALID");
  }
}

function del() {
  output.value = output.value.slice(0, -1);
}

function clr() {
  output.value = "";
}

function selectTab(tabId) {
  const tabs = document.querySelectorAll('.tab-bar div');
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  const tabContent = document.getElementById("tab-content");
  if (tabId === 'calc') {
    tabContent.innerText = "Standard Calculator";
  } else if (tabId === 'exchange') {
    tabContent.innerText = "Exchange Rate Converter";
  } else if (tabId === 'more') {
    tabContent.innerText = "More Currency Features!";
  }
}
