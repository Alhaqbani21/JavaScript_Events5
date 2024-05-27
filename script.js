let billInput = document.getElementById('billInput');
let resultTax = document.getElementById('resultTax');
let billButton = document.getElementById('billButton');
let fareButton = document.getElementById('fareButton');
let resultFare = document.getElementById('resultFare');
let fareInput = document.getElementById('fareInput');

billButton.addEventListener('click', (event) => {
  event.preventDefault();
  resultTax.innerHTML = (parseFloat(billInput.value) * 0.15).toFixed(2);
});

fareButton.addEventListener('click', (event) => {
  event.preventDefault();
  let billValue = parseFloat(billInput.value);
  let taxValue = billValue * 0.15;
  let fareValue = parseFloat(fareInput.value);

  if (isNaN(billValue) || isNaN(fareValue) || fareValue === 0) {
    resultFare.innerHTML = 'Invalid input';
  } else {
    let result = (billValue + taxValue) / fareValue;
    resultFare.innerHTML = result.toFixed(2);
  }
});
