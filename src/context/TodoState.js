import React, {useState} from 'react';
import context from './context'

export default function TodoState(props){
    let [todos, setTodos] = useState([
        {id: 1, title: 'make a video'},
        {id: 2, title: 'edit the video'},
        {id: 3, title: 'post the video on youtube'}
    ]);

    return (
        <context.Provider value={{todos, setTodos}}>
            {props.children}
        </context.Provider>
    )
}
