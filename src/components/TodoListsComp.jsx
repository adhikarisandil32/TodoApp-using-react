import React,{ useContext, useRef } from 'react';
import context from '../context/context'
     
export default function TodoListsComp() {

  let {todos, setTodos} = useContext(context)

  const todoClickedForEdit = (e) => {
    e.target.contentEditable = true;
    e.target.focus();
  }

  const removeTodo = (idxRemoveFrom) => {
    let updatedTodos = todos.filter((item, idx) => {
      return idx !== idxRemoveFrom
    })
    setTodos(updatedTodos);
  }

  let todoLists = todos.map((item, index) => {
    return (
      <li
        className="mt-2 flex justify-between items-center border border-black"
        key={item.id}
      >
        <div
          className="w-full border border-black"
          onClick={todoClickedForEdit}
        >
          {item.title}
        </div>
        <div>
          <button
            className="px-2 py-1 bg-red-600 text-white rounded-md"
            onClick={ () => {
                removeTodo(index)
              }
            }
          >Remove</button>
        </div>
      </li>
    )
  })

  return (
    <div className="py-2 mt-2"> {/*container*/}
      <div> {/* each element */}
        {todoLists}
      </div>
    </div>
  )
}
