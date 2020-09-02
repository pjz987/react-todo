import React from 'react'

export default class NewTodo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }

  handleChange = (evt) => {
    this.setState({ newTodo: evt.target.value })
  }

  handleSubmit = (evt) => {
    this.props.onSubmit(this.state.newTodo)
    evt.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        <button>Add Todo</button>
      </form>
    )
  }
}
