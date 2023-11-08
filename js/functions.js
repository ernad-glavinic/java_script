// Function that calculates the basic amount for expenses based on provided rate
function calculateAmount(baseAmount, rate) {
  return baseAmount * (rate / 100);
}

// Function that display amounts on the page with fixed decimal numbers
function displayAmountWithFixedDecimal(elementOnPage, amountToBeDisplayed) {
  elementOnPage.innerText = amountToBeDisplayed.toFixed(2);
}

// Function that gets all values and calculates and returns all amounts
function getValuesAndCalculateAmounts(
  hourlyRate,
  expensensRate,
  healthInsuranceRate,
  taxRate
) {
  let amountOfExpenses = calculateAmount(hourlyRate, expensensRate);
  let amountAfterExpenses = hourlyRate - amountOfExpenses;
  let amountOfHealthInsurance = calculateAmount(
    amountAfterExpenses,
    healthInsuranceRate
  );
  let taxBase = amountAfterExpenses - amountOfHealthInsurance;
  let amountOfTax = calculateAmount(taxBase, taxRate);
  let amountToPay = amountOfHealthInsurance + amountOfTax;
  let amountLeft = hourlyRate - amountToPay;

  return {
    "Amount of expenses": amountOfExpenses,
    "Amount after expenses": amountAfterExpenses,
    "Amount of health insurance": amountOfHealthInsurance,
    "Tax base": taxBase,
    "Amount of tax": amountOfTax,
    "Amount to pay": amountToPay,
    "Amount left": amountLeft,
  };
}
