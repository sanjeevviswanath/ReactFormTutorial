// import FormUseRef from "./components/FormuseRef";
// import FormuseState from "./components/FormuseState";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
//import Form from "./components/Form";
import { useState } from "react";
// const expenses = ;
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
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
  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      {/* <FormUseRef></FormUseRef>
      <FormuseState></FormuseState>
      <Form></Form> */}
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={filteredExpenses}
        onRemove={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      ></ExpenseList>
    </>
  );
}

export default App;
