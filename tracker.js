// const { ExpenseTracker } = require('./script');

// test("adds expense", () => {

//   const tracker = new ExpenseTracker();

//   tracker.addExpense({ id:1, description:"Food", amount:200, category:"food" });

//   expect(tracker.expenses.length).toBe(1);

// });

// class Expense {
// constructor(description, amount, category) {

// this.id = Date.now()

// this.description = description
// this.amount = amount
// this.category = category

// }
// }

// class ExpenseTracker {

// constructor() {

// this.expenses = JSON.parse(localStorage.getItem("expenses")) || []

// }

// addExpense(expense){

// this.expenses = [...this.expenses, expense]

// this.save()

// }

// removeExpense(id){

// this.expenses = this.expenses.filter(exp => exp.id !== id)

// this.save()

// }

// getTotal(){

// return this.expenses.reduce((total, exp) => total + exp.amount, 0)

// }

// filterByCategory(category){

// if(category === "all") return this.expenses

// return this.expenses.filter(exp => exp.category === category)

// }

// save(){

// localStorage.setItem("expenses", JSON.stringify(this.expenses))

// }

// }

// if (typeof module !== "undefined") {

// module.exports = {Expense, ExpenseTracker}

// }

class Expense {
  constructor(description, amount, category) {
    this.id = Date.now()
    this.description = description
    this.amount = amount
    this.category = category
  }
}

class ExpenseTracker {

  constructor() {
    this.expenses = []
  }

  addExpense(expense) {
    this.expenses = [...this.expenses, expense]
  }

  removeExpense(id) {
    this.expenses = this.expenses.filter(exp => exp.id !== id)
  }

  getTotal() {
    return this.expenses.reduce((total, exp) => total + exp.amount, 0)
  }

  filterByCategory(category) {
    if (category === "all") return this.expenses
    return this.expenses.filter(exp => exp.category === category)
  }
}

module.exports = { Expense, ExpenseTracker }