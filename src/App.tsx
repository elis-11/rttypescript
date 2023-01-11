import { useState } from "react";
import "./App.scss";
import { InputField } from "./components/InputField";
import { List } from "./components/List";
import { useAppDispatch } from "./hook";
import { addItem } from "./store/todoSlice";

function App() {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const addTask = () => {
    dispatch(addItem(title));
    setTitle("");
  };

  return (
    <div className="Todo">
      <h2>Redux-Toolkit</h2>
      <InputField title={title} handleInput={setTitle} handleSubmit={addTask} />
      <List />
    </div>
  );
}
export default App;
