import TableHeader from "./Tablehead";
import TransactionForm from "./Transactionform";
import TableRow from "./TableRow";
export default function Table() {
  return (
    <div className="p-1 rounded-3 shadow-sm border ">
      <div className="d-flex">
        <div className="me-4">
          <TransactionForm />
        </div>

        <div className="table-responsive">
          <table className="table table-striped w-100">
            <thead>
              <TableHeader />
            </thead>
            <tbody>
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
