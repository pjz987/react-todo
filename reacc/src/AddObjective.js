import React from 'react'

export default class AddObjective extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      description: '',
      optional: false
    }
  }

  handleChange = evt => {
    this.setState({ description: evt.target.value })
  }

  handleOptional = evt => {
    console.log(evt.target.checked)
    this.setState({ optional: evt.target.checked })
  }

  handleSubmit = evt => {
    this.props.onSubmit({
      description: this.state.description,
      optional: this.state.optional
    })
    evt.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        <label htmlFor='optional'>Optional:</label>
        <input type='checkbox' name='optional' onChange={this.handleOptional}/>
        <button>Add Objective</button>
      </form>
    )
  }
}
