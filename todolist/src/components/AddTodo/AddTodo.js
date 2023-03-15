import React, { useState } from 'react'
import { v1 as uuid } from 'uuid'
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import s from './AddTodo.module.css'


function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('')
        // console.log(value)

    function saveTodo() {
        setTodo(
            [...todo,
                {
                    id: uuid.v4,
                    title: value,
                    status: true
                }
            ]
        )
        setValue('')


    }
    return ( <
        Row >
        <
        Col className = { s.addTodoForm } >
        <
        FormControl placeholder = 'Введите задачу:'
        value = { value }
        onChange = {
            (e) => setValue(e.target.value)
        }
        />  <
        Button onClick = { saveTodo }
        className = { s.btn } > Сохранить < /Button>  < /
        Col > <
        /Row >
    )
}

export default AddTodo