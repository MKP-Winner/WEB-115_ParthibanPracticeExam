document.getElementById("calculateBudget").addEventListener("click", function () {
  try {
    const incomeInput = prompt("Enter your total monthly income (no commas):");
    const expensesInput = prompt("Enter your estimated monthly expenses:");
    const monthsInput = prompt("Enter the number of months to project:");

    const income = parseFloat(incomeInput);
    const expenses = parseFloat(expensesInput);
    const months = parseInt(monthsInput);

    if (isNaN(income) || isNaN(expenses) || isNaN(months)) {
      throw new Error("Invalid input: Please enter numeric values only.");
    }
    if (months <= 0) {
      throw new Error("Number of months must be a positive integer.");
    }

    calculateBudget(income, expenses, months);

  } catch (error) {
    alert("Error: " + error.message);
  }
});

function calculateBudget(income, expenses, months) {
  const monthlySavings = income - expenses;
  const totalProjectedSavings = monthlySavings * months;

  const resultsDiv = document.getElementById("budgetResults");
  resultsDiv.innerHTML = "";

  const summary = document.createElement("p");
  summary.innerHTML =
    "Monthly Income: $" + income.toFixed(2) + "<br>" +
    "Monthly Expenses: $" + expenses.toFixed(2) + "<br>" +
    "Monthly Savings: $" + monthlySavings.toFixed(2) + "<br>" +
    "Total Projected Savings: $" + totalProjectedSavings.toFixed(2);
  resultsDiv.appendChild(summary);

  if (monthlySavings < 0) {
    const warning = document.createElement("p");
    warning.textContent = "Warning: Spending exceeds income!";
    resultsDiv.appendChild(warning);
  }

  for (let i = 1; i <= months; i++) {
    const p = document.createElement("p");
    p.textContent = "Month " + i + " Savings: $" + (monthlySavings * i).toFixed(2);
    resultsDiv.appendChild(p);
  }
}