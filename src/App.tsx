// import FormUseRef from "./components/FormuseRef";
// import FormuseState from "./components/FormuseState";
import ExpenseList from "./expense-tracker/components/ExpenseList";
//import Form from "./components/Form";
import { useState } from "react";
// const expenses = ;
function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 5,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Bread",
      amount: 2,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Movie ticket",
      amount: 30,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "Bus ticket",
      amount: 26,
      category: "Utilities",
    },
  ]);
  return (
    <>
      {/* <FormUseRef></FormUseRef>
      <FormuseState></FormuseState>
      <Form></Form> */}
      <ExpenseList
        expenses={expenses}
        onRemove={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      ></ExpenseList>
    </>
  );
}

export default App;
