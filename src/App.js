import "./App.css";
import InputField from "./components/Input";
import Display from "./components/Display";
import { useState } from "react";

function App() {
    const [toDoList, setTodoList] = useState([]);

    const handleSave = (text) => {
        setTodoList([
            ...toDoList,
            {
                id: Math.random().toString(36).substr(2, 9),
                text: text,
                status: false,
            },
        ]);
    };

    function handleCompleteTask(changeId) {
        setTodoList(
            toDoList.map((item) =>
                item.id === changeId ? { ...item, status: !item.status } : item
            )
        );
    }

    function handleDeleteBtn(deleteId) {
        setTodoList(toDoList.filter((element) => element.id !== deleteId));
    }

    return (
        <div className="App">
            <h1>Todo List using JavaScript</h1>
            <InputField handleSave={handleSave} />
            <Display
                toDoList={toDoList}
                handleCompleteTask={handleCompleteTask}
                handleDeleteBtn={handleDeleteBtn}
            />
        </div>
    );
}

export default App;
