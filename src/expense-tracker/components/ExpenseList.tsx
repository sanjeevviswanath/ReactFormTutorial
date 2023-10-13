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
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
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
      </table>
    </div>
  );
};

export default ExpenseList;
