import React from 'react'
import TodoInputForm from './components/TodoInputForm'
import Heading from './components/Heading'
import TodoListsComp from './components/TodoListsComp'
import TodoState from './context/TodoState'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#B0E0E6] to-[#F4A460]'>
      <div
        className="px-2 w-[min(100%,500px)] mx-auto"
      >
        <TodoState>
          <Heading />
          <TodoInputForm />
          <TodoListsComp />
        </TodoState>
      </div>
    </div>
  );
}

export default App;
