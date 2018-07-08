import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared";
import users from "../reducers/users";

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        Starter Code.
      </div>
    )
  }
}

export default connect((state)=> ({
    users: state.users,
    authedUser: state.authedUser
}))(App)