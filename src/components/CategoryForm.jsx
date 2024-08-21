import { useState } from "react";

const CategoryForm = ({ categories, setCategories }) => {
  const [category, setCategory] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (!category) return;
    const updatedCategories = [...categories, category];
    setCategories(updatedCategories);
    localStorage.setItem("CATEGORIES", JSON.stringify(updatedCategories));
    setCategory("");
  };
  return (
    <form type="submit" onSubmit={(e) => submitHandler(e)}>
      <div className="formSection">
        <label htmlFor="catInp">Category name: </label>
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          type="text"
          name="Category"
          id="catInp"
          placeholder="Enter Category Name"
          required
        />
      </div>
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
