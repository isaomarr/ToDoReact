import { MoreOutlined } from '@ant-design/icons'
import { Button, Checkbox, Dropdown, Typography } from 'antd'
import React from 'react'

const { Text } = Typography

const items = [
    { key: 'edit', label: (<Button variant='text' color='primary'>Edit</Button>) },
    { key: 'delete', label: (<Button variant='text' color='danger'>Delete</Button>) },
]

const Todo = ({todo}) => {
    return (
        <div className='flex items-center justify-between border border-[#eee] p-3 rounded-2xl'>
            <div className='!space-x-2'>
                <Checkbox />
                <Text type='success'>{todo}</Text>
            </div>
            <Dropdown menu={{ items }} trigger={['click']}>
                <Button icon={<MoreOutlined />}></Button>
            </Dropdown>
        </div>
    )
}

export default Todo
