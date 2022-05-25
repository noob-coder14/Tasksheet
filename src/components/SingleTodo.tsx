import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
import { Todo } from './Model';
import './styles.css';

type SingleTodoType = {
    singletodo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({singletodo, todos, setTodos}: SingleTodoType) => {
  return (
    <>
        <form className='todos__single'>
            <span className="todos__single--text"> 
                {singletodo.todo}
            </span>
            <div>
                <span className='icon'><AiFillEdit/></span>
                <span className='icon'><AiFillDelete/></span>
                <span className='icon'><MdOutlineDone/></span>
            </div>
        </form>
    </>
  )
}

export default SingleTodo