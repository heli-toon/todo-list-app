import { useState } from "react";

export default function Form({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);

    setNewItem("");
  }
  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Todo List</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoitem">Add New Todo Item</label>
        <input
          type="text"
          id="todoitem"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          Add
        </button>
      </form>
    </div>
  );
}