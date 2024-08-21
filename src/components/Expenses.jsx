import { useState } from "react";
import Expense from "./Expense";

const Expenses = ({ expenses, setExpenses, categories }) => {
  const [filterBy, setFilterBy] = useState("");
  const [sortByPrice, setsortByPricePrice] = useState("");
  return (
    <div className="expenses">
      <h2>Expenses: </h2>
      <div className="filterSortSection">
        <p>
          Filter by:{" "}
          <select
            onChange={(e) => setFilterBy(e.target.value)}
            name="filterBy"
            id="filterBy"
          >
            <option value="">--Select Category--</option>
            {categories.map((category, i) => (
              <option key={i + 1} value={category}>
                {category}
              </option>
            ))}
          </select>
        </p>
        <p style={{ marginLeft: "2rem" }}>
          Sort by:{" "}
          <select
            onChange={(e) => setsortByPricePrice(e.target.value)}
            name="sortByPrice"
            id="sortByPrice"
          >
            <option value="">--Select Category--</option>
            <option value="lowToHigh">Price low to high</option>
            <option value="highToLow">Price high to low</option>
          </select>
        </p>
      </div>
      <div className="expenseList">
        {filterBy
          ? sortByPrice
            ? expenses
                .filter((e) => e.category === filterBy)
                .sort((a, b) =>
                  sortByPrice === "lowToHigh"
                    ? a.amount - b.amount
                    : b.amount - a.amount
                )
                .map((expense, index) => (
                  <Expense
                    key={index}
                    expense={expense}
                    expenses={expenses}
                    setExpenses={setExpenses}
                  />
                ))
            : expenses
                .filter((e) => e.category === filterBy)
                .map((expense, index) => (
                  <Expense
                    key={index}
                    expense={expense}
                    expenses={expenses}
                    setExpenses={setExpenses}
                  />
                ))
          : sortByPrice
          ? expenses
              .sort((a, b) =>
                sortByPrice === "lowToHigh"
                  ? a.amount - b.amount
                  : b.amount - a.amount
              )
              .map((expense, index) => (
                <Expense
                  key={index}
                  expense={expense}
                  expenses={expenses}
                  setExpenses={setExpenses}
                />
              ))
          : expenses.map((expense, index) => (
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
