import React from "react";

const Entry = ({ entry, entries, setEntries, setBalance, balance }) => {
  const deleteHandler = () => {
    if (entry.type === "Expense") setBalance(balance + +entry.amount);
    if (entry.type === "Income") setBalance(balance - +entry.amount);
    const updatedEntries = entries.filter((e) => e.srNo !== entry.srNo);
    setEntries(updatedEntries);
  };
  return (
    <div className="entry">
      <div>Name: {entry.name}</div>
      <div>Type: {entry.type}</div>
      <div>Amount: {entry.amount}</div>
      <button onClick={deleteHandler} id="deleteBtn">
        Delete
      </button>
    </div>
  );
};

export default Entry;
