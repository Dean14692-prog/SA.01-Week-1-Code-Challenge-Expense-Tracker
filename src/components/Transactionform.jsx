import { useState } from "react";

export default function TransactionForm({ addExpense }) {
  const [formData, setFormData] = useState({
    expense: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  /**
   * On my form submission I am focusing on
   * 1. Preventing Default Behavior of the form/ reloading of the form
   * 2. Validation of my form to prevent adding blank transactions
   * 3. Clearing my form inputs when after submission
   * 4. Adding a newExpense object
   * */

  // 1. Prevent default behavior of the form/ reloading of the page
  const handleSubmit = (event) => {
    event.preventDefault();

    // 2. Prevent adding empty/blank expenses
    if (
      !formData.amount ||
      !formData.date ||
      !formData.category ||
      !formData.description ||
      !formData.expense
    ) {
      alert("Please fill in all required fields");
      return;
    }
    /***
     * I am generating Id for my expenses such that when i click delete button it only deletes the current row
     * I named my function as generateCustomId
     * I chose to use 4 letter id such that M represents Marine, B represents Bank and 2 rando generated numbers
     *
     */
    function uniqueId(id) {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      id = `M${num1}${num2}B`;
      return id;
    }
    // The new expense object
    const newExpense = {
      id: uniqueId(),
      expense: formData.expense,
      description: formData.description,
      category: formData.category,
      amount: formData.amount,
      date: formData.date,
    };

    // 3. Clearing all my inputs after submission
    setFormData({
      expense: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });

    // 4. Call the parent function to add the new expense to the list
    if (addExpense) {
      addExpense(newExpense);
    }
  };

  /*
   * On handleChange function focus is
   * 1. Get the id of input and store it in a const i.e const id = event.target.id
   * 2. Get the value of input and store it in a const i.e const value = event.target.value
   * 3. Keep the old data using setFormData i.e (...formData)
   * 4. Update the new input i.e [id]:value
   */
  const handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <div className="p-1 rounded-3 shadow-sm border">
          <h5 className="card-title">Add Expense</h5>

          <input
            className="form-control mb-1"
            value={formData.expense}
            type="text"
            id="expense"
            placeholder="Expense"
            onChange={handleChange}
          />
          <input
            className="form-control mb-1"
            type="text"
            placeholder="Description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            className="form-control mb-1"
            type="text"
            placeholder="Category"
            id="category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            className="form-control mb-1"
            type="number"
            placeholder="Amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
          />
          <input
            className="form-control mb-1"
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
          />

          <div className="d-flex justify-content-center mt-3">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              style={{ width: "350px" }}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
