function Clear() {
  document.getElementById("display").value = "";
}

function Backspace() {
  let displayElement = document.getElementById("display");

  let str = displayElement.value;

  str = str.slice(0, -1);

  displayElement.value = str;
}

function appendOperator(sign) {
  let st = document.getElementById("display").value;

  let lastChar = st.slice(-1);

  if (!isNaN(lastChar)) {
    document.getElementById("display").value += sign;
  }
}

function appendNumber(number) {
  document.getElementById("display").value += number;
}

function getResult() {
  let final = document.getElementById("display").value;

  try {
    let finalresult = eval(final);
    
    if (finalresult === infinity) {
    } else {
      document.getElementById("display").value = finalresult;
    }
  } catch (error) {
    document.getElementById("display").value = "heheh";
  }
}
