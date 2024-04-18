let inputField = document.querySelector("#inputField");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

btn.addEventListener("click", () => {
  const inputValue = inputField.value.trim();

  if (inputValue.length == 0) {
    alert("Input value cannot be empty");
    return;
  }
  let cleanText = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let isPalindrome = cleanText === cleanText.split("").reverse("").join("");

  if (isPalindrome == true) {
    result.className = "success";
    result.textContent = "It's Palindrome";
  } else {
    result.className = "error";
    result.textContent = "Not a Palindrome";
  }
  //   inputField.value = ""; // Empty Input
});
