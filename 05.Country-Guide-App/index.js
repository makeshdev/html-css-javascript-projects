let inputField = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const apiCall = async () => {
    try {
      let inputvalue = inputField.value;
      let url = await fetch(
        `https://restcountries.com/v3.1/name/${inputvalue}?fullText=true`
      );
      let data = await url.json();
      data.map((item) => {
        document.getElementById("result").innerHTML = `
        <img src='${item?.flags.svg}' class="flag-img">
        <h2>${item?.name?.common}</h2>
        <div class="wrapper">Capital: <span>${item?.capital[0]}</span></div>
        <div class="wrapper">Continent: <span>${
          item?.continents[0]
        }</span></div>
        <div class="wrapper">Population: <span>${item?.population}</span></div>
        <div class="wrapper">Currency: <span>${
          item?.currencies[Object.keys(item?.currencies)]?.name
        } - ${Object.keys(item.currencies)[0]}</span></div>
        <div class="wrapper">Common Language: <span>${Object.values(
          item?.languages
        )
          .toString()
          .split(",")
          .join(", ")}</span></div>
        `;
      });
    } catch (error) {
      console.log("ERROR..!!!", error);
      if (inputField.length == 0) {
        document.getElementById("result").innerHTML = `
       The input field cannot be empty`;
      } else {
        document.getElementById("result").innerHTML = `
       Please enter a valid country name`;
      }
    }
  };
  apiCall();

  inputField.value = "";
});
