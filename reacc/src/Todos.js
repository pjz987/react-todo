import React from 'react'

export default function Todos (props) {
  return (
    <ul>
      {props.todos
        .map((todo, i) => {
          return (
            <li
              key={i}
              style={todo.done ? { textDecoration: 'line-through' } : {}}
            >{todo.todo}
              {todo.done
                ? <button onClick={() => props.handleRemove(i)}>Remove</button>
                : (
                  <span>
                    <button onClick={() => props.handleRemove(i)}>Remove</button>
                    <button onClick={() => props.handleDone(i)}>Done</button>
                  </span>
                )}
            </li>
          )
        })}
    </ul>
  )
}
