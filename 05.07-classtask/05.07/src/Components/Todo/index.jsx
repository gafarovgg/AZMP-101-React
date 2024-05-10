import React from "react";

const Todo = () => {
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        type="text"
        placeholder="type here.."
      />
      <button>add</button>
      <hr />
      <ul>
        <li>a</li>
        <li>b</li>
      </ul>
    </div>
  );
};

export default Todo;
