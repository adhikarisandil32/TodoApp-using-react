import React, {useState} from 'react';
import context from './context'

export default function TodoState(props){

    //because listOfTodos has a string, we must make sure the string is not empty or else JSON.parse throws an error
    let listOfTodos = localStorage.listOfTodos === '' ? [] : JSON.parse(localStorage.getItem('listOfTodos'));

    let [todos, setTodos] = useState(listOfTodos);

    localStorage.setItem('listOfTodos', JSON.stringify(todos));

    return (
        <context.Provider value={{todos, setTodos}}>
            {props.children}
        </context.Provider>
    )
}
