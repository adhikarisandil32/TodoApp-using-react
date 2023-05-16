import React,{ useContext } from 'react';
import context from '../context/context'
     
export default function TodoListsComp() {

  let {todos, setTodos} = useContext(context)

  const todoClickedForEdit = (e) => {
    e.target.contentEditable = true;
    e.target.focus();
  }

  const whenOutOfFocus = (e, idx) => {
    e.target.contentEditable = false;
    let updatedTodos = todos.map(each => {
      return each
    })

    updatedTodos[idx].title = e.target.innerText === '' ? updatedTodos[idx].title : e.target.innerText

    setTodos(updatedTodos)
  }

  const editingTitle = (e, idx) => {
    if(e.key === 'Enter') {
      e.preventDefault()
      whenOutOfFocus(e, idx) // idx use गरेको कुन indexमा title update गर्ने भनेर whenOutOfFocus लाई info पठाउन 
    }
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
          onClick={todoClickedForEdit}
          onBlur={(event) => {
            whenOutOfFocus(event, index)
          }}
          onKeyDown={(event) => {
            editingTitle(event, index)
          }}
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
