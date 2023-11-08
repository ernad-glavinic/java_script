var calculateBtn = document.getElementById("calculate_btn");

// Get DOM elements for elements that will display variables
let hourlyRateDisplay = document.getElementById("hourly-rate-display");
let displayExpenseRateDisplay = document.getElementById("expense-rate-display");
let displayAmountOfExpensesDisplay = document.getElementById(
  "amount-of-expenses-display"
);
let amountAfterExpensesDisplay = document.getElementById(
  "amount-after-expenses-display"
);
let healthInsuranceRateDisplay = document.getElementById(
  "health-insurance-rate-display"
);
let healthInsuranceAmountDisplay = document.getElementById(
  "health-insurance-amount-display"
);
let taxRateDisplay = document.getElementById("tax-rate-display");
let taxBaseDisplay = document.getElementById("tax-base-display");
let amountOfTaxDisplay = document.getElementById("amount-of-tax-display");
let amountToPayDisplay = document.getElementById("amount-to-pay-display");
let amountLeftDisplay = document.getElementById("amount-left-display");

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
