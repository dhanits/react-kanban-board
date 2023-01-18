import React, { useEffect, useState } from 'react';
import './Todo.css';
import axios from 'axios';
axios.defaults.headers.common = {'Authorization': 'bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMTIsImV4cCI6MTY4MjU3MDU4OX0.TT2yZMWcD0WFF70PKSP4KYkdG7FsPz-gSxGW4TwaCWU'}

const data = [
    {
        id : 1,
        text : 'asdsad'
    },
    {
        id : 1,
        text : 'asdsad'
    }
]
const Todo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://todo-api-18-140-52-65.rakamin.com/todos')
            .then(res => setTodos(res.data))
            .catch(err => console.log(err));
    }, [])

    console.log(todos);

  return (
    <div class="todos-area">
        {/* Kanban */}
        {
            todos.map(element => {
                return (
                    <div class="todos">{element.title}</div>
                )
            })
        }
    </div>
  )
}

export default Todo
