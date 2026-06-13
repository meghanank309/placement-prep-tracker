import API from "../services/api";
import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Coding");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = async () => {
  try {
    await API.post("/", {
      title,
      category,
      priority,
    });

    alert("Task Added Successfully!");

    setTitle("");
    setCategory("Coding");
    setPriority("Medium");

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <h2>Add New Task</h2>

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Coding">Coding</option>
        <option value="Aptitude">Aptitude</option>
        <option value="Resume">Resume</option>
        <option value="Project">Project</option>
      </select>

      <br /><br />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <br /><br />

      <button onClick={handleSubmit}>
  Add Task
</button>

    </div>
  );
}

export default TaskForm;