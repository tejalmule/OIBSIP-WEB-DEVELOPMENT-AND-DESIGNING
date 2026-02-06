function convertTemp() {
  let temp = document.getElementById("tempInput").value;
  let type = document.getElementById("tempType").value;
  let result = document.getElementById("result");

  if (temp === "") {
    result.innerHTML = "Please enter a value";
    return;
  }

  temp = Number(temp);
  let c, f, k;

  if (type === "celsius") {
    c = temp;
    f = (c * 9/5) + 32;
    k = c + 273.15;
  } 
  else if (type === "fahrenheit") {
    f = temp;
    c = (f - 32) * 5/9;
    k = c + 273.15;
  } 
  else {
    k = temp;
    c = k - 273.15;
    f = (c * 9/5) + 32;
  }

  result.innerHTML =
    "Celsius: " + c.toFixed(2) + " °C<br>" +
    "Fahrenheit: " + f.toFixed(2) + " °F<br>" +
    "Kelvin: " + k.toFixed(2) + " K";
}