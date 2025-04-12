// import React, { useState } from "react";
// export default function ExpenseRow() {
//     const [expenses, setExpense] = useState([

//     ])
//}
export default function TableRow({ expense }) {
   if (!expense) return null; 
  return (
    <tr className="table table-striped mb-1 container-fluid w-100">
      <td style={{ width: "5%" }}>{expense.id}</td>
      <td style={{ width: "15%" }}>{expense.expense}</td>
      <td style={{ width: "25%" }}>{expense.description}</td>
      <td style={{ width: "15%" }}>{expense.category}</td>
      <td style={{ width: "15%" }}>KSh.{expense.amount}</td>
      <td style={{ width: "15%" }}>{expense.date}</td>
      <td style={{ width: "10%" }}>{expense.action}</td>
    </tr>

  );
}


