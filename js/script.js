var calculateBtn = document.getElementById("calculate_btn");

// Get DOM elements for the input elements
let hourlyRate = document.getElementById("hourly-rate");
let expensensRate = document.getElementById("expenseRate");
let healthInsuranceRate = document.getElementById("health-insurance-rate");
let taxRate = document.getElementById("tax-rate");

// Get DOM elements for elements that will display variables
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
  // Get values from input elements
  hourlyRate = hourlyRate.value;
  expensensRate = expensensRate.value;
  healthInsuranceRate = healthInsuranceRate.value;
  taxRate = taxRate.value;

  // Calculate amounts
  let amountOfExpenses = hourlyRate * (expensensRate / 100);
  let amountAfterExpenses = hourlyRate - amountOfExpenses;
  let amountOfHealthInsurance =
    amountAfterExpenses * (healthInsuranceRate / 100);
  let taxBase = amountAfterExpenses - amountOfHealthInsurance;
  let amountOfTax = taxBase * (taxRate / 100);
  let amountToPay = amountOfHealthInsurance + amountOfTax;
  let amountLeft = hourlyRate - amountToPay;

  // Display variables on page
  displayExpenseRateDisplay.innerText = expensensRate;
  displayAmountOfExpensesDisplay.innerText = amountOfExpenses.toFixed(2);
  amountAfterExpensesDisplay.innerText = amountAfterExpenses.toFixed(2);
  healthInsuranceRateDisplay.innerText = healthInsuranceRate;
  healthInsuranceAmountDisplay.innerText = amountOfHealthInsurance.toFixed(2);
  taxBaseDisplay.innerText = taxBase.toFixed(2);
  amountOfTaxDisplay.innerText = amountOfTax.toFixed(2);
  taxRateDisplay.innerText = taxRate;
  amountToPayDisplay.innerText = amountToPay.toFixed(2);
  amountLeftDisplay.innerText = amountLeft.toFixed(2);
});
