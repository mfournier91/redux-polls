import React, {Component} from 'react'
import {connect} from 'react-redux'

class Poll extends Component {
    render() {
        console.log('props', this.props)
        return (
            <div className="poll-container">
                Poll
            </div>
        )
    }
}

function mapStateToProps ({polls, authedUser, users}, ownprops) {
    const poll = polls[ownprops.match.params.id]

    if (!poll) {
        return {
            poll: null
        }
    }

    const authorAvatar = users[poll.author].avatarURL

    // const authedUserVoted = poll.aVotes.includes(authedUser)
    //     || poll.bVotes.includes(authedUser)
    //     || poll.cVotes.includes(authedUser)
    //     || poll.dVotes.includes(authedUser)
    //
    // const vote =  !authedUserVoted ? null
    //     : poll.aVotes.includes(authedUser) ? 'a'
    //         : poll.bVotes.includes(authedUser) ? 'b'
    //             : poll.cVotes.includes(authedUser) ? 'c' : 'd'

    const vote = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce((vote, key) => {
        return poll[key].includes(authedUser) ? key[0] : vote

    }, null)

    return {
        poll,
        authorAvatar,
        authedUser,
        vote,
    }
}

export default connect(mapStateToProps)(Poll)

