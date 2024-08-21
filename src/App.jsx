import { useState, useEffect } from "react";
import Expenses from "./components/Expenses";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenses, setExpenses] = useState(() => {
    let localItems = localStorage.getItem("ITEMS");
    return localItems ? JSON.parse(localItems) : [];
  });

  useEffect(() => {
    expenses.length
      ? setTotalExpense(
          expenses.map((item) => item.amount).reduce((a, b) => a + +b, 0)
        )
      : setTotalExpense(0);
    localStorage.setItem("ITEMS", JSON.stringify(expenses));
  }, [expenses]);

  const [expense, setExpense] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const addExpense = (e) => {
    e.preventDefault();
    console.log(expense);
    if (!isNaN(expense.amount) && expense.amount > 0) {
      setExpenses([...expenses, expense]);
      // setTotalExpense((tot) => tot + +expense.amount);
      setExpense({
        srNo: expenses.length + 1,
        category: "",
        amount: "",
        date: "",
        description: "",
      });
    } else alert("Please enter a valid amount");
  };

  return (
    <>
      <div className="main">
        <div className="totalExpense">Total Expense: {totalExpense}</div>
        <Expenses
          expenses={expenses}
          setExpenses={setExpenses}
          setTotalExpense={setTotalExpense}
          totalExpense={totalExpense}
        />
        <div>
          <Form
            expense={expense}
            addExpense={addExpense}
            handleChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default App;
