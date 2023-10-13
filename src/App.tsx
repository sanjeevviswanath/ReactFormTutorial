// import FormUseRef from "./components/FormuseRef";
// import FormuseState from "./components/FormuseState";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
//import Form from "./components/Form";
//import categories from "./expense-tracker/categories";
import { useState } from "react";
// const expenses = ;
type Expense = {
  id: number;
  category: "Groceries" | "Utilities" | "Entertainment";
  description: string;
  amount: number;
};
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([
    // {
    //   id: 0,
    //   description: "",
    //   amount: 0,
    //   category: "",
    // },
  ]);
  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      {/* <FormUseRef></FormUseRef>
      <FormuseState></FormuseState>
      <Form></Form> */}
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([{ ...expense, id: expenses.length + 1 }, ...expenses])
          }
        />
      </div>
      <div className="mb-3">
        {expenses.length !== 0 && (
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        )}
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
