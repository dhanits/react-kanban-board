import React, { useEffect, useState } from 'react';
// import './Todo.css';
import axios from 'axios';
axios.defaults.headers.common = {'Authorization': 'bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMTIsImV4cCI6MTY4MjU3MDU4OX0.TT2yZMWcD0WFF70PKSP4KYkdG7FsPz-gSxGW4TwaCWU'}


const Card = ({todoId}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get(`https://todo-api-18-140-52-65.rakamin.com/todos/${todoId}/items`)
            .then(res => setItem(res.data))
            .catch(err => console.log(err));
    }, [])


    console.log(item);

  return (
    <div>Card {todoId}</div>
  )
}

export default Card
