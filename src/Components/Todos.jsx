import { BorderBeam, Card } from 'antd'
import React from 'react'
import Todo from './todo'
import { todos } from './db/todos'
import NotFoundComponent from './ui/NotFoundComponent'

const Todos = () => {
    return (
        <BorderBeam color={[
            { color: '#1677ff', percent: 0 },
            { color: '#36cfc9', percent: 52 },
            { color: '#95de64', percent: 100 },
        ]

        } >
            <Card style={{
                width: 700
            }} title="Todos">
                {todos.length ? todos.map((item,index) => <Todo todo = {item} key={index}/>): <NotFoundComponent/>}
            </Card>
        </BorderBeam>
    )
}

export default Todos

