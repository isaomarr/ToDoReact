import { BorderBeam, Card } from 'antd'
import React from 'react'
import Todo from './todo'
import { todos } from './db/todos'

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
                {todos.map((item,index) => <Todo title = {item}/>)}
            </Card>
        </BorderBeam>
    )
}

export default Todos

