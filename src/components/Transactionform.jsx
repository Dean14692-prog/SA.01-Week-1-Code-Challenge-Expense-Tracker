import { useState } from "react";

export default function TransactionForm() {
  const [formData, setFormData] = useState({
    expenseName: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  <div></div>

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="container my-4">
      <form>
        <div className="p-1 rounded-3 shadow-sm border">
          <h5 className="card-title">Add Expense</h5>

          <input
            className="form-control mb-1"
            value={formData.expenseName}
            type="text"
            id="expense"
            placeholder="Expense"
            onChange={handleChange}
          />
          <input
            className="form-control mb-1"
            type="text"
            placeholder="Description"
            id="Description"
            value={formData.description}
            onChange={(event) => setFormData(event.target.value)}
          />
          <input
            className="form-control mb-1"
            type="text"
            placeholder="Category"
            id="Category"
            value={formData.category}
            onChange={(event) => setFormData(event.target.value)}
          />
          <input
            className="form-control mb-1"
            type="number"
            placeholder="Amount"
            id="Amount"
            value={formData.date}
            onChange={(event) => setFormData(event.target.value)}
          />
          <input
            className="form-control mb-1"
            type="date"
            id="date"
            value={formData.expenseName}
            onChange={(event) => setFormData(event.target.value)}
          />

          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
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
