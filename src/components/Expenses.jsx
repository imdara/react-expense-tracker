import Expense from "./Expense";

const Expenses = ({ expenses, setExpenses }) => {
  return (
    <div className="expenses">
      <h2>Expenses: </h2>
      <div className="expenseList">
        {expenses.map((expense, index) => (
          <Expense
            key={index}
            expense={expense}
            expenses={expenses}
            setExpenses={setExpenses}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
