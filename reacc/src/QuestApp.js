import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Quest from './Quest'
import './App.css'
import AddQuest from './AddQuest'

/* globals fetch */

class QuestApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quests: [],
      objectives: []
    }
  }

  componentDidMount () {
    this.getQuests()
  }

  getQuests () {
    fetch('/', {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          quests: data.quests,
          objectives: data.objectives
        }, () => console.log(this.state))
      })
  }

  handleAddQuest = quest => {
    console.log('hehyehyeh')
    fetch('/add-quest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quest: quest })
    }).then(response => {
      this.getQuests()
    })
  }

  render () {
    return (
      <div>
        <h1>Quests</h1>
        <AddQuest onSubmit={this.handleAddQuest} />
        {this.state.quests.map(q => {
          return (
            <Quest
              key={q.id}
              quest={q}
              objectives={this.state.objectives.filter(obj => obj.quest_id === q.id)}
            />
          )
        })}
      </div>
    )
  }
}

export default QuestApp
