function clickRandomclr() {
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  let hascode = "#";

  for (let i = 1; i <= 6; i++) {
    hascode += hex[Math.floor(Math.random() * hex.length)];
  }

  document.getElementById("body").style.background = hascode;
  document.getElementById("clrcode").innerHTML = hascode;
}
