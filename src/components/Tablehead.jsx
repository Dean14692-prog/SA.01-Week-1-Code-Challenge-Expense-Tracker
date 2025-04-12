export default function TableHeader() {
  return (

      <tr className="table table-striped mb-1 container-fluid w-100">
        <th style={{ width: "5%" }}>#</th>
        <th style={{ width: "15%" }}>Expense</th>
        <th style={{ width: "25%" }}>Description</th>
        <th style={{ width: "15%" }}>Category</th>
        <th style={{ width: "15%" }}>Amount</th>
        <th style={{ width: "15%" }}>Date</th>
        <th style={{ width: "10%" }}>Action</th>
      </tr>

  );
}
