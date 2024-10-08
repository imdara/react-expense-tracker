const Form = ({ expense, addExpense, handleChange, categories }) => {
  return (
    <form onSubmit={(e) => addExpense(e)}>
      <div className="formSection">
        <label htmlFor="categoryInp">Select Category: </label>
        <select
          onChange={handleChange}
          name="category"
          id="categoryInp"
          value={expense.category}
          required
        >
          <option value="">--Select Category--</option>
          {categories.map((category, i) => (
            <option key={i + 1} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="formSection">
        <label htmlFor="amountInp">Amount: </label>
        <input
          onChange={handleChange}
          value={expense.amount}
          type="number"
          name="amount"
          id="amountInp"
          placeholder="Enter amount"
          required
        />
      </div>
      <div className="formSection">
        <label htmlFor="dateInp">Date: </label>
        <input
          onChange={handleChange}
          value={expense.date}
          type="date"
          name="date"
          id="dateInp"
          required
        />
      </div>
      <div className="formSection">
        <label htmlFor="descInp">Description: </label>
        <input
          onChange={handleChange}
          value={expense.description}
          type="text"
          name="description"
          id="descInp"
          placeholder="Enter description"
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default Form;
