import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Todos from './Todos'
import NewTodo from './NewTodo'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          todo: 'Work on stuff',
          done: false
        },
        {
          todo: 'Work on more stuff',
          done: true
        },
        {
          todo: 'Work on even more stuff',
          done: false
        },
        {
          todo: 'Work on less stuff?',
          done: true
        }
      ]
    }
  }

  handleAddTodo = (todo) => {
    this.setState({
      todos: this.state.todos.concat([{
        todo: todo,
        completed: false
      }])
    })
  }

  handleDone = (i) => {
    const todos = this.state.todos.slice()
    todos[i].done = true
    this.setState({ todos: todos })
  }

  handleRemove = (i) => {
    const todos = this.state.todos.slice()
    this.setState({ todos: todos.splice(i, 1)})
  }

  render () {
    return (
      <Router>
        <div>
          <nav>
            <div>
              <Link to='/done'>Done</Link>
            </div>
            <div>
              <Link to='/todo'>Todo</Link>
            </div>
            <div>
              <Link to='/all'>All</Link>
            </div>
          </nav>
          <main>
            <NewTodo onSubmit={this.handleAddTodo} />
          </main>
          <Switch>
            <Route path='/done'>
              <Todos
                todos={this.state.todos.filter(todo => todo.done)}
                handleDone={this.handleDone}
                handleRemove={this.handleRemove}
              />
            </Route>
            <Route path='/todo'>
              <Todos
                todos={this.state.todos.filter(todo => !todo.done)}
                handleDone={this.handleDone}
                handleRemove={this.handleRemove}
              />
            </Route>
            <Route path='/all'>
              <Todos
                todos={this.state.todos}
                handleDone={this.handleDone}
                handleRemove={this.handleRemove}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
