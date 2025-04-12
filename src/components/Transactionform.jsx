import { useState } from "react";

export default function TransactionForm(addExpense) {
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
   * */

  // 1. Prevent default behavior of the form/ reloading of the page
  const handleSubmit = (event) => {
    event.preventDefault();
    // 2.Pevent adding empty/blank expenses
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

    //3.Clearing all my inputs after Submission
    setFormData({
      expense: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
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
            placeholder="category"
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
