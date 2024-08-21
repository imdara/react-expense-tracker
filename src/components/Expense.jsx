import React from "react";

const Expense = ({ expense, expenses, setExpenses }) => {
  const deleteHandler = () => {
    const updatedExpenses = expenses.filter((e) => e.srNo !== expense.srNo);
    setExpenses(updatedExpenses);
  };
  return (
    <div className="expense">
      <div>
        <b>Category:</b> {expense.category}
      </div>
      <div>
        <b>Amount:</b> ₹{expense.amount}
      </div>
      <div>
        <b>Date:</b> {expense.date}
      </div>
      <div>
        <b>Description:</b> {expense.description}
      </div>
      <button onClick={deleteHandler} id="deleteBtn">
        Delete
      </button>
    </div>
  );
};

export default Expense;
