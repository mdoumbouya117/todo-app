import React from 'react'
import Form from '../components/Form'
import Todo from '../components/Todo'

export default function ToDoList() {
  const initialTodoList = ["buy a tacos"] // can be from apiCall => DB
  const [toDoList, setToDoList] = React.useState(initialTodoList)

  const addTodo = (todo: string) => {
    setToDoList([...toDoList, todo])
  }
    
  return (
    <div>
        <Form addTodo={addTodo}/>
        <ul>
            {toDoList.map((todo: string, index: number) => <Todo key={index} todo={todo}/>)}
        </ul>
        </div>
  )
}
