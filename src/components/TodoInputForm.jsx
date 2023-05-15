import React, {useState, useContext} from 'react'
import context from '../context/context'

export default function TodoInputForm() {

  let [inputValue, setInputValue] = useState('');
  let {todos, setTodos} = useContext(context)

  let handleInput = (e) => {
    setInputValue(e.target.value);
  }

  let addTodo = (e) => {
    e.preventDefault();
    if(inputValue.trim() === ''){
      setInputValue('');
      return
    }

    let updatedTodos = [...todos];
    updatedTodos.push({
      'id': todos.length === 0 ? 1 : todos[todos.length-1].id+1,
      'title': inputValue
    })
    
    setTodos(updatedTodos)
    
    setInputValue('');
  }

  return (
      <form>
        <div className="flex">
          <input
            className="p-2 w-full outline-none border-2 border-black rounded-md"
            type="text"
            placeholder="Enter Your Todo"
            value={inputValue}
            onChange={handleInput}
          />
          <button
            type="submit"
            className="py-2 px-5 font-bold bg-blue-500 text-white rounded-md border-2 border-blue-400"
            onClick={addTodo}
          >Add</button>
        </div>
      </form>
  )
}
