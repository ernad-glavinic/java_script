calculateBtn.addEventListener("click", () => {
  // Get values from elements on the page
  let hourlyRate = document.getElementById("hourly-rate").value;
  let expensensRate = document.getElementById("expenseRate").value;
  let healthInsuranceRate = document.getElementById(
    "health-insurance-rate"
  ).value;
  let taxRate = document.getElementById("tax-rate").value;

  let amounts = getValuesAndCalculateAmounts(
    hourlyRate,
    expensensRate,
    healthInsuranceRate,
    taxRate
  );

  displayAmountWithFixedDecimal(
    displayAmountOfExpensesDisplay,
    amounts["Amount of expenses"]
  );
  displayAmountWithFixedDecimal(
    amountAfterExpensesDisplay,
    amounts["Amount after expenses"]
  );
  displayAmountWithFixedDecimal(
    healthInsuranceAmountDisplay,
    amounts["Amount of health insurance"]
  );
  displayAmountWithFixedDecimal(taxBaseDisplay, amounts["Tax base"]);
  displayAmountWithFixedDecimal(amountOfTaxDisplay, amounts["Amount of tax"]);
  displayAmountWithFixedDecimal(amountToPayDisplay, amounts["Amount to pay"]);
  displayAmountWithFixedDecimal(amountLeftDisplay, amounts["Amount left"]);
  hourlyRateDisplay.innerHTML = hourlyRate;
  displayExpenseRateDisplay.innerText = expensensRate;
  healthInsuranceRateDisplay.innerText = healthInsuranceRate;
  taxRateDisplay.innerText = taxRate;
});
