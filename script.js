document.querySelector("form").onsubmit = function () {
  fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then((response) => response.json())
    .then((data) => {
      const currency = document.querySelector("#currency").value;

      const rate = data.rates[currency];

      if (rate !== undefined) {
        document.getElementById(
          "result"
        ).innerHTML = `One USD dollar is equal to ${rate.toFixed(3)}`;
      } else {
        document.querySelector("#result").innerHTML = "Invalid currency";
      }
    });

  return false;
};
