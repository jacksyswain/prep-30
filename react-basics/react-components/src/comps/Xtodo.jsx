import React, { useState } from "react";

function Xtodo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAdd = () => {
    if (!input.trim()) return;
    setTodo((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <h1>My Todo App</h1>
     <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
      </div>

      <table border="1" style={{width:"300px"}}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Todo</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {todo.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td>
                <button
                  onClick={() =>
                    setTodo(todo.filter((_, i) => i !== index))
                  }
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Xtodo;
