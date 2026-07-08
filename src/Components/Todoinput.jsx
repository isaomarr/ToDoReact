import React from 'react'
import{PlusOutlined} from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons';
import {Button, Input } from 'antd';

const Todoinput = () => {
  return (
    <div className='flex items-center gap-3'>
      <Input onFocus={true}
      style={{
        width:400,
      }} placeholder="Add Todo" />
      <Button type="primary"><PlusOutlined />Add ToDo</Button>
      <Button type='solid' color='danger' variant='solid'> <DeleteOutlined />Delete Al to do</Button>
    </div>
  )
}

export default Todoinput
