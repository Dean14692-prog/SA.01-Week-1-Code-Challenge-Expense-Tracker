import { useState } from "react";
import TableHeader from "./Tablehead";
import TransactionForm from "./Transactionform";
import TableRow from "./TableRow";
import NavBar from "./NavBar";

export default function Table() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  /***
   * Here we are focusing on a function that will add the new expense in the list of already existing expenses
   * setExpenses is the function provided by React's useState hook to update the state of expenses.
   * setExpenses is used to modify the list of expenses that are stored in the component's state -useState([])
   * old expenses are stored in a currentExpense constant
   * an updated list of expenses is created that compromises the old expenses- expenses and new expenses -newExpense then stored in a const updatedExpenses
   * e-render the component with the new expense -updatedExpense list of expenses so that the UI reflects the updated data -setExpenses.
   */
  function addExpense(newExpense) {
    // 1. Get the current list of expenses
    const currentExpenses = expenses;

    // 2. Add the new expense to the end of the list
    const updatedExpenses = [...currentExpenses, newExpense];

    // 3. Save the new list into state
    setExpenses(updatedExpenses);
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Searching functionality, 
  // I am searching while typing
  const filteredExpenses = expenses.filter((expense) => {
    // Step 1: Convert the search term to lowercase to make the search case-insensitive
    const term = searchTerm.toLowerCase();

    // Step 2: Check if the search term appears in any of the fields of the expense item
    return (
      // Check if the ID of the expense contains the search term (converted to lowercase)
      expense.id.toLowerCase().includes(term) ||
      expense.expense.toLowerCase().includes(term) ||
      // Check if the category of the expense contains the search term (converted to lowercase)
      expense.category.toLowerCase().includes(term) ||
      // Check if the description of the expense contains the search term (converted to lowercase)
      expense.description.toLowerCase().includes(term) ||
      // Check if the date of the expense contains the search term (converted to lowercase)
      expense.date.toLowerCase().includes(term) ||
      // Convert the amount to a string, then to lowercase, and check if it includes the search term
      // This is necessary because amount is a number and includes() works on strings
      expense.amount.toString().toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <div>
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="p-1 rounded-3 shadow-sm border ">
        <div className="d-flex">
          <div className="me-4">
            <TransactionForm addExpense={addExpense} />
          </div>

          <div className="table-responsive">
            <table className="table table-hover table-striped w-100">
              <thead>
                <TableHeader />
              </thead>

              <tbody>
                {filteredExpenses.map((expense) => (
                  <TableRow
                    key={expense.id}
                    expense={expense}
                    onDelete={deleteExpense}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
