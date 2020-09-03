import React from 'react'

// function getObjectives (quest_id) {

// }

// function Objectives (_props) {

// }

export default function Quest (props) {
  return (
    <div>
      <h2>{props.quest.name}</h2>
      <ul>
        {props.objectives.map(obj => {
          return (
            <li key={obj.id}>
              {obj.description}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
