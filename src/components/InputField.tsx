import React from 'react';
import './styles.css';

type PropsType = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}


const InputField = ({todo, setTodo, handleAdd} : PropsType) => {
  return (
    
        <form className='input' onSubmit={handleAdd}>
          <>
            <input type='input' placeholder='Enter a task'  value={todo} onChange={(e)=>setTodo(e.target.value)} className="input__box"/>
            <button className='input__submit' type='submit'>Go</button>
            {/* {console.log("from input:", todo )} */}
          </>
        </form>
    
  )
}

export default InputField