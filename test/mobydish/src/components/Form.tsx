import React from 'react'

interface IProps {
    addTodo: (todo: string) => void
}

export default function Form({ addTodo } : IProps) {

  const [toDo, setToDo] = React.useState<string>('')

  const onSubmit = (event: any) => {

      event.stopPropagation()
      if(toDo) {// add & clean only if we have something
        addTodo(toDo)
          setToDo('')
      }
  }

  return (
    <div>
        <form>
            <input type="text" name='toDo' value={toDo} onChange={(event) => setToDo(event.target.value)}/>
            <button type='button' onClick={(event: React.MouseEvent<HTMLElement>) => onSubmit(event)}>Submit</button>
        </form>
    </div>
  )
}
