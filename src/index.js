import React, { useId } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useEffect, useState, useContext, createContext, useReducer } from 'react';

function ToDoListTitle() {
  return <h1>Todo List using JavaScript</h1>
}

const InputField = (props) => {
  const [inputBusiness, changeInput] = useState('');

  const handleChange = (event) => {
    changeInput(event.target.value);
  };
  const handleSave = () => {
    props.setToDoList([...props.toDoList, {id: Math.random().toString(36).substr(2, 9), text: inputBusiness, status: false}]);
  }

  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <button onClick={() => {
        handleSave()
      }}>add</button>
    </div>
  );
}

const BusinessDisplay = (props) => {
  const outputList = props.toDoList.map((element, index) => {
    return (
      <li key={element.id}>
        <button onClick={() => handleCompleteTask(element.id)}>
          {index + ' ' + element.text + ' ' + element.status}
        </button>
        <button onClick={() => handleDeleteBtn(element.id)}>delete</button>
      </li>
    )
  });

  function handleCompleteTask(changeId) {
    props.setTodoList(props.toDoList.map(item => item.id == changeId 
      ? {...item, status: !item.status} : item));

  }

  function handleDeleteBtn(deleteId) {
    const buf = props.toDoList.filter(element => element.id != deleteId);  
    props.setTodoList(buf);
  }

  return (
    <div>
      <ul>
        {outputList}
      </ul>     
    </div>
  )
}

const Main = () => {
  const [toDoList, setTodoList] = useState([]);
  
  console.log('В самом начале');
  console.log(toDoList);

  return (
    <div>
      <ToDoListTitle/>
      <InputField toDoList={toDoList} setToDoList={setTodoList}/>
      <BusinessDisplay toDoList={toDoList} setTodoList={setTodoList}/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();