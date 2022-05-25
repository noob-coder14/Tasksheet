import React from 'react';
import { Todo } from './Model';
import SingleTodo from './SingleTodo';
import './styles.css';

type TodosType = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}: TodosType) => {
  return (
    
    <div className='todos'>
        {todos.map((item)=>
            <SingleTodo key={item.id} singletodo={item} todos={todos} setTodos={setTodos}/>
        )}
    </div>
  )
}

export default TodoList