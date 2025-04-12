import { useState } from "react";

export default function TransactionForm(addExpense) {
  const [formData, setFormData] = useState({
    expense: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });
// On the form I want to prevent default behavior of the form/ reloading of the page
  const handleSubmit = (event) => {
    event.preventDefault();
}

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
