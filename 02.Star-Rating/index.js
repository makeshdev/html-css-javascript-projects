let stars = document.querySelectorAll(".star");
let rating = document.getElementById("p");

stars.forEach((index, i) => {
  index.addEventListener("click", () => {
    rating.innerText = `${i + 1} of 5`;

    stars.forEach((index, j) => {
      if (i >= j) {
        index.innerHTML = "&#9733";
      } else {
        index.innerHTML = "&#9734";
      }
    });
  });
});
