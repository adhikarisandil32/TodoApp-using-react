import React,{ useContext } from 'react';
import context from '../context/context'

export default function TodoListsComp() {

  let {todos, setTodos} = useContext(context)

  const editClickedTodo = (e) => {
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
        className="mt-2 flex justify-between items-center"
        key={item.id}
      >
        <div
          className="w-full"
          onClick={editClickedTodo}
        >
          {item.title}
        </div>
        <div>
          <button
            className="px-2 py-1 bg-red-600 text-white rounded-md"
            onClick={ () => {
                removeTodo(index);
              }
            }
          >Remove</button>
        </div>
      </li>
    )
  })
  return (
    <div className="mt-2"> {/*container*/}
      <div> {/* each element */}
        {todoLists}
      </div>
    </div>
  )
}
