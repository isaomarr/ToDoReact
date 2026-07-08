import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';


const Todoinput = () => {
  const [inputValue, setInputValue] = useState('')
  const addTODO = () => {

  }
  return (
    <div className='flex items-center gap-3'>
      <Input onChange={(e) => {
        setInputValue(e.target.value)


      }}
        style={{
          width: 400,
        }} placeholder="Add Todo" />
      <Button onClick={addTODO} type="primary"><PlusOutlined />Add ToDo</Button>
      <Button type='solid' color='danger' variant='solid'> <DeleteOutlined />Delete Al to do</Button>
    </div>
  )
}

export default Todoinput
