import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared";
import users from "../reducers/users";
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
          {this.props.loading === true
              ? null
          : <Dashboard/>
          }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)