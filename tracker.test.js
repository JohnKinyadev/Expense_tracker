// const {ExpenseTracker} = require("./tracker.test")

// test("adds expense", () => {

// const tracker = new ExpenseTracker()

// tracker.expenses = []

// tracker.addExpense({id:1, description:"Food", amount:100, category:"food"})

// expect(tracker.expenses.length).toBe(1)

// })

// test("removes expense", () => {

// const tracker = new ExpenseTracker()

// tracker.expenses = [{id:1, amount:100}]

// tracker.removeExpense(1)

// expect(tracker.expenses.length).toBe(0)

// })

// test("calculates total expenses", () => {

// const tracker = new ExpenseTracker()

// tracker.expenses = [

// {id:1, amount:100},

// {id:2, amount:200}

// ]

// expect(tracker.getTotal()).toBe(300)

// })

// test("filters expenses", () => {

// const tracker = new ExpenseTracker()

// tracker.expenses = [

// {id:1, category:"food"},

// {id:2, category:"transport"}

// ]

// const result = tracker.filterByCategory("food")

// expect(result.length).toBe(1)

// })

const { ExpenseTracker } = require("./tracker")

test("adds expense", () => {

  const tracker = new ExpenseTracker()

  tracker.addExpense({id:1, description:"Food", amount:100, category:"food"})

  expect(tracker.expenses.length).toBe(1)

})

test("removes expense", () => {

  const tracker = new ExpenseTracker()

  tracker.expenses = [{id:1, amount:100}]

  tracker.removeExpense(1)

  expect(tracker.expenses.length).toBe(0)

})

test("calculates total expenses", () => {

  const tracker = new ExpenseTracker()

  tracker.expenses = [
    {id:1, amount:100},
    {id:2, amount:200}
  ]

  expect(tracker.getTotal()).toBe(300)

})

test("filters expenses", () => {

  const tracker = new ExpenseTracker()

  tracker.expenses = [
    {id:1, category:"food"},
    {id:2, category:"transport"}
  ]

  const result = tracker.filterByCategory("food")

  expect(result.length).toBe(1)

})