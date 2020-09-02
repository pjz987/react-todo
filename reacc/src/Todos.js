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
                ? <button onClick={props.remove(i)}>Remove</button>
                : (
                  <span>
                    <button onClick={props.remove(i)}>Remove</button>
                    <button onClick={props.done(i)}>Done</button>
                  </span>
                )}
            </li>
          )
        })}
    </ul>
  )
}
