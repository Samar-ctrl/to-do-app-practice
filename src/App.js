import { React, useState } from "react";
import "./styles.css";
import Task from "./Task";
export default function App() {
  const [entry, setEntry] = useState("");
  const [taskList, setList] = useState([]);
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setEntry(e.target.value);
  };
  const clickHandler = () => {
    setList([...taskList, { item: entry, key: Date.now() }]);
    console.log(taskList);
    setEntry("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="input-wrapper">
            <input
              placeholder="Add an item"
              value={entry}
              onChange={inputHandler}
            />
            <button onClick={clickHandler}>+</button>
          </div>
          <Task taskList={taskList} />
        </div>
      </header>
    </div>
  );
}
