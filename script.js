let billInput = document.getElementById('billInput');
let resultTax = document.getElementById('resultTax');
let billButton = document.getElementById('billButton');
let fareButton = document.getElementById('fareButton');
let resultFare = document.getElementById('resultFare');
let fareInput = document.getElementById('fareInput');

billButton.addEventListener('click', (event) => {
  resultTax.innerHTML = billInput.value * 0.15;
  event.preventDefault();
});

fareButton.addEventListener('click', (event) => {
  event.preventDefault();
  let result = billInput.value * 0.15 + parseFloat(billInput.innerHTML);
  resultFare.innerHTML = result / parseFloat(fareInput.value);
});
