// import FormUseRef from "./components/FormuseRef";
// import FormuseState from "./components/FormuseState";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import Form from "./components/Form";
const expenses = [
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
];
function App() {
  return (
    <>
      {/* <FormUseRef></FormUseRef>
      <FormuseState></FormuseState>
      <Form></Form> */}
      <ExpenseList expenses={expenses}></ExpenseList>
    </>
  );
}

export default App;
