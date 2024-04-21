const calculate = () => {
  let inputAmount = parseInt(document.getElementById("amount").value);
  let inputRate = parseInt(document.getElementById("rate").value);
  let inputTime = parseInt(document.getElementById("time").value);

  let interest = (inputAmount * inputRate * inputTime) / 100;
  let total = interest + inputAmount;

  if (isNaN(inputAmount) || isNaN(inputRate) || isNaN(inputRate)) {
    alert("Please enter valid numeric values.");
    return;
  }

  document.getElementById(
    "result"
  ).innerHTML = `<div style="color: #000;background: linear-gradient(44deg, #007cff ,#fff);margin-top: 25px;padding: 20px;"><p style="padding-bottom: 10px;">Principle Amount : <b>&#8377 ${inputAmount.toLocaleString(
    "hi-IN"
  )}</b></p><p style="padding-bottom: 10px;">Total Interest: <b>&#8377 ${interest.toLocaleString(
    "hi-IN"
  )}</b></p><p style="padding-bottom: 10px;">Total Value: <b>&#8377 ${total.toLocaleString(
    "en-IN"
  )}</b></p></div>`;
};

const reset = () => {
  document.getElementById("amount").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("time").value = "";
  document.getElementById("result").innerHTML = "";
};
