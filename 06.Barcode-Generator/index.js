let inputField = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  let inputValue = inputField.value;
  JsBarcode(result, inputValue, {
    format: "code128",
    displayValue: true,
    lineColor: "#000",
  });
  inputField.value = "";
});
