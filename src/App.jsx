import { useState } from "react";
import "./App.css";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const addEntry = (e) => {
    e.preventDefault();
    if (!isNaN(entry.amount) && entry.amount > 0) {
      setEntries([...entries, entry]);
      if (entry.type === "Expense") setBalance((bal) => bal - +entry.amount);
      if (entry.type === "Income") setBalance((bal) => bal + +entry.amount);
      setEntry({ name: "", type: "", amount: "" });
    } else alert("Please enter a valid amount");
  };
  return (
    <>
      <div className="main">
        <div className="balance">Balance: {balance}</div>
        <Entries entries={entries} />
        <div>
          <Form entry={entry} addEntry={addEntry} handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default App;

const Entries = ({ entries }) => {
  return (
    <div className="entries">
      <h2>Entries: </h2>
      {entries.map((entry, index) => (
        <div key={index} className="entry">
          <div>Name: {entry.name}</div>
          <div>Type: {entry.type}</div>
          <div>Amount: {entry.amount}</div>
        </div>
      ))}
    </div>
  );
};

const Form = ({ entry, addEntry, handleChange }) => {
  return (
    <form onSubmit={(e) => addEntry(e)}>
      <div className="formSection">
        <label htmlFor="typeInp">Name: </label>
        <input
          onChange={handleChange}
          value={entry.name}
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div className="formSection">
        <label htmlFor="typeInp">Select type: </label>
        <select onChange={handleChange} name="type" id="typeInp" required>
          <option value=""> --Select Type-- </option>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
      </div>
      <div className="formSection">
        <label htmlFor="amountInp">Amount: </label>
        <input
          onChange={handleChange}
          value={entry.amount}
          type="number"
          name="amount"
          id="amountInp"
          placeholder="Enter amount"
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};
