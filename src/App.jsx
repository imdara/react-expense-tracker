import { useState, useEffect } from "react";
import Entries from "./components/Entries";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const [balance, setBalance] = useState(() => {
    let localBal = localStorage.getItem("BALANCE");
    return localBal ? localBal : 0;
  });
  const [entries, setEntries] = useState(() => {
    let localItems = localStorage.getItem("ITEMS");
    return localItems ? JSON.parse(localItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("BALANCE", balance);
    localStorage.setItem("ITEMS", JSON.stringify(entries));
  }, [entries]);
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
      setEntry({ srNo: entries.length + 1, name: "", type: "", amount: "" });
    } else alert("Please enter a valid amount");
  };

  return (
    <>
      <div className="main">
        <div className="balance">Balance: {balance}</div>
        <Entries
          entries={entries}
          setEntries={setEntries}
          setBalance={setBalance}
          balance={balance}
        />
        <div>
          <Form entry={entry} addEntry={addEntry} handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default App;
