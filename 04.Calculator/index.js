let button_input = document.getElementById("input");

const display = (num) => {
  button_input.value += num;
};

const calculate = () => {
  try {
    button_input.value = eval(button_input.value);
  } catch (error) {
    alert("Invalid");
  }
};

function clears() {
  button_input.value = " ";
}
function del() {
  button_input.value = button_input.value.slice(0, -1);
}
