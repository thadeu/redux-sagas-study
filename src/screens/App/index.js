import React, { Component } from 'react'
import './styles.sass'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Div } from 'glamorous'

import TodosList from '@screens/TodosList'

class App extends Component {
  render() {
    return (
      <Div className="App">
        <Div className="App-header">
          <h1 className="App-title">TodosList ({this.props.todos.data.length})</h1>
        </Div>

        <Div className="container">
          <TodosList />
        </Div>
      </Div>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos })

// const mapDispatchToProps = dispatch => bindActionCreators(todosActions, dispatch)

export default connect(mapStateToProps)(App)
