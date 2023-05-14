import React from 'react'
import TodoInputForm from './components/TodoInputForm'
import Heading from './components/Heading'
import TodoListsComp from './components/TodoListsComp'
import TodoState from './context/TodoState'

function App() {
  return (
    <div
      className="px-2 w-[min(100%,500px)] mx-auto bg-slate-300"
    >
      <TodoState>
        <Heading />
        <TodoInputForm />
        <TodoListsComp />
      </TodoState>
    </div>
  );
}

export default App;
