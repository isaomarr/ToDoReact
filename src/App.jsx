import React from 'react'
import Todoinput from './Components/Todoinput'
import Todo from './Components/Todo'
import Todos from './Components/Todos'

const App = () => {
  return (
    <div className='flex items-center justify-center flex-col min-h-screen space-y-3'>
      <Todoinput/>
      <Todos/>

    </div>
  )
}

export default App

