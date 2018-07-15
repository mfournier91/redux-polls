import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared";
import users from "../reducers/users";
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from "./Poll";

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
          <LoadingBar/>
          {this.props.loading === true
              ? null
          : <Poll match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}}/>
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