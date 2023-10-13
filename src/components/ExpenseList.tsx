import React from "react";

const ExpenseList = () => {
  return (
    <div>
      <table>
        <thead>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>Milk</td>
            <td>$5.00</td>
            <td>Groceries</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
