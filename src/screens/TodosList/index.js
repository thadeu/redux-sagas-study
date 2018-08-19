import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todosActions from '@actions/todos'

import glamorous, { Div, Input, Button, Form } from 'glamorous'

const List = glamorous.ul({
  margin: 0,
  padding: 0
})

const ListItem = glamorous.li({
  listStyle: 'none',
  padding: '10px 0px',
  margin: '2px 0'
})

class TodosList extends React.Component {
  state = {
    todoText: '',
    buttonText: 'Criar TODO'
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  componentDidMount() {
    this.props.fetchAll()
  }

  async handleChange(event) {
    await this.setState({todoText: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({todoText: ''})
  }

  async handleAddTodo() {
    if (!!this.state.todoText){
      this.props.addTodo(this.state.todoText)
    }
    return
  }

  render() {
    const { todos, isFetching, isLoading } = this.props

    if(isLoading) {
      return <p>Carregando TODOS...</p>
    }

    return (
      <List>
        <Div>
          <Form onSubmit={this.handleSubmit}>
            <Input type="text" value={this.state.todoText} onChange={this.handleChange} />
            <Button className="btn tomato" onClick={this.handleAddTodo}>{isFetching ? 'Criando TODO...' : this.state.buttonText}</Button>
          </Form>
        </Div>
      
        { todos.length ? todos.map(todo => (
          <ListItem key={todo.id}>
            {todo.concluded ? String(" ✅ ") : String(" 🕑 ")}
            {todo.text}
            <small> ({new Date(todo.created_at).toLocaleString('pt-BR', {weekday: 'long', month: 'short', day: 'numeric'})})</small>
          </ListItem>
        )) : <p>Sem items para visualização</p> }
      </List>
    )
  }
}

const mapStateToProps = state => ({ 
  todos: state.todos.data, 
  isFetching: state.todos.isFetching,
  isLoading: state.todos.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators(todosActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
