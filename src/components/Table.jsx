import { useState } from "react";
import TableHeader from "./Tablehead";
import TransactionForm from "./Transactionform";
import TableRow from "./TableRow";

export default function Table() {
  const [expenses, setExpenses] = useState([]);
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
  
  return (
    <div className="p-1 rounded-3 shadow-sm border ">
      <div className="d-flex">
        <div className="me-4">
          <TransactionForm addExpense={addExpense} />
        </div>

        <div className="table-responsive">
          <table className="table table-striped w-100">
            <thead>
              <TableHeader />
            </thead>

            <tbody>
              {expenses.map((expense) => (
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
  );
}
