import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/Model';




const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(), todo:todo, isDone:false}])
      setTodo("")
    }
    
  }

  console.log("list todo",todos)
  
  return (
    <div className="App">
      <>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      </>
    </div>
  );
}

export default App;
