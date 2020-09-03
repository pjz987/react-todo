import React from 'react'
import AddObjective from './AddObjective'

export default class AddQuest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      objectives: []
    }
  }

  handleChange = evt => {
    this.setState({ name: evt.target.value })
  }

  handleSubmit = evt => {
    this.props.onSubmit({
      name: this.state.name,
      objectives: this.state.objectives
    })
    evt.preventDefault()
  }

  handleAddObjective = objective => {
    this.setState({ objectives: this.state.objectives.concat(objective) })
  }

  render () {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <button>Add Quest</button>
        <input onChange={this.handleChange} />
        <ul>
        {this.state.objectives.map((obj, i) => <li key={i}>{obj.description}</li>)}
        </ul>
      </form>
        <AddObjective onSubmit={this.handleAddObjective} />
      </div>
    )
  }
}
