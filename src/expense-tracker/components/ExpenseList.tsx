interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onRemove: (id: number) => void;
}
const ExpenseList = ({ expenses, onRemove }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div>
      <table className="table table-bordered table-hover table-border-secondary">
        <thead>
          <tr>
            <th className="text-center">No</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="text-center">{expense.id}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  onClick={() => onRemove(expense.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="fw-bold"></td>
            <td className="fw-bold">Total</td>
            <td className="fw-bold">
              $
              {expenses
                .reduce(
                  (accumulator, expense) => expense.amount + accumulator,
                  0
                )
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
