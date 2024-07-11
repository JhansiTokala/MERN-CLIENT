import React, { useState } from "react";
import "./Todolist.css"; // Import your CSS file for component-specific styles

export default function TodoList() {
  const [formData, setFormData] = useState({ time: "", note: "" });
  const [tableData, setTableData] = useState([]);

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ time: "", note: "" });
  }

  function handleDelete(index) {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  }

  return (
    <div className="todo-list-container">
      <h1>TodoList</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label>
          Time:
          <input
            name="time"
            type="time"
            value={formData.time}
            onChange={handleForm}
          />
        </label>
        <label>
          Note:
          <input
            name="note"
            type="text"
            value={formData.note}
            onChange={handleForm}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <br />
      <table className="todo-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.time}</td>
              <td>{data.note}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
