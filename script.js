// class Expense {
//   constructor(description, amount, category) {
//     this.id = Date.now();
//     this.description = description;
//     this.amount = amount;
//     this.category = category;
//   }
// }

// class ExpenseTracker {
//   constructor() {
//     this.expenses = JSON.parse(localStorage.getItem("expenses")) || [];
//   }

//   addExpense(expense) {
//     this.expenses = [...this.expenses, expense];
//     this.save();
//   }

//   removeExpense(id) {
//     this.expenses = this.expenses.filter(exp => exp.id !== id);
//     this.save();
//   }

//   getTotal() {
//     return this.expenses.reduce((total, exp) => total + exp.amount, 0);
//   }

//   filterByCategory(category) {
//     if (category === "all") return this.expenses;
//     return this.expenses.filter(exp => exp.category === category);
//   }

//   save() {
//     localStorage.setItem("expenses", JSON.stringify(this.expenses));
//   }
// }


// const tracker = new ExpenseTracker();

// const descriptionInput = document.getElementById("description");
// const amountInput = document.getElementById("amount");
// const categoryInput = document.getElementById("category");
// const expenseList = document.getElementById("expenseList");
// const totalDisplay = document.getElementById("total");
// const filterSelect = document.getElementById("filter");

// function render(expenses) {
//   expenseList.innerHTML = "";

//   expenses.forEach(({ id, description, amount, category }) => {

//     const li = document.createElement("li");

//     li.innerHTML = `
//       ${description} - Ksh ${amount} (${category})
//       <button onclick="deleteExpense(${id})">Delete</button>
//     `;

//     expenseList.appendChild(li);
//   });

//   totalDisplay.textContent = tracker.getTotal();
// }

// document.getElementById("addBtn").addEventListener("click", () => {

//   const description = descriptionInput.value;
//   const amount = Number(amountInput.value);
//   const category = categoryInput.value;

//   const expense = new Expense(description, amount, category);

//   tracker.addExpense(expense);

//   render(tracker.expenses);
// });

// function deleteExpense(id) {
//   tracker.removeExpense(id);
//   render(tracker.expenses);
// }

// filterSelect.addEventListener("change", () => {

//   const filtered = tracker.filterByCategory(filterSelect.value);

//   render(filtered);
// });

// window.onload = () => {
//   render(tracker.expenses);
// };

const tracker = new ExpenseTracker()

const descriptionInput = document.getElementById("description")
const amountInput = document.getElementById("amount")
const categoryInput = document.getElementById("category")

const expenseList = document.getElementById("expenseList")

const totalDisplay = document.getElementById("total")

const filterSelect = document.getElementById("filter")

function render(expenses){

expenseList.innerHTML = ""

expenses.forEach(({id, description, amount, category}) => {

const li = document.createElement("li")

li.innerHTML = `

<span>${description} - Ksh ${amount} (${category})</span>

<button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteExpense(${id})">

Delete

</button>

`

expenseList.appendChild(li)

})

totalDisplay.textContent = tracker.getTotal()

}

document.getElementById("addBtn").addEventListener("click", () => {

const description = descriptionInput.value

const amount = Number(amountInput.value)

const category = categoryInput.value

if(!description || !amount) return alert("Fill all fields")

const expense = new Expense(description, amount, category)

tracker.addExpense(expense)

render(tracker.expenses)

descriptionInput.value = ""

amountInput.value = ""

})

function deleteExpense(id){

tracker.removeExpense(id)

render(tracker.expenses)

}

filterSelect.addEventListener("change", () => {

const filtered = tracker.filterByCategory(filterSelect.value)

render(filtered)

})

window.onload = () => {

render(tracker.expenses)

}