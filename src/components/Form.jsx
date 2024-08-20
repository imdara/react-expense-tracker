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
        <select
          onChange={handleChange}
          name="type"
          id="typeInp"
          value={entry.type}
          required
        >
          <option value="">--Select Type--</option>
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

export default Form;
