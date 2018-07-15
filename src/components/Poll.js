import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPercentage} from "../utils/helpers";
import {handleAddPollAnswer} from "../actions/polls";

class Poll extends Component {
    handleAnswer = (answer) => {
        const {poll, authedUser, dispatch} = this.props
        this.answered = true
        console.log("add answer: ", answer)
        dispatch(handleAddPollAnswer({id: poll.id, authedUser, answer,}))
    }


    render() {
        console.log('props', this.props)

        if (this.props.poll === null) {
            return <p>This poll does not exist</p>
        }

        const {poll, authorAvatar, authedUser, vote} = this.props
        const voteOptionKeys = ['aText', 'bText', 'cText', 'dText']
        const voteKeys = ['aVotes', 'bVotes', 'cVotes', 'dVotes']
        const totalVotes = voteKeys.reduce((acc, vote) => acc + poll[vote].length, 0)

        return (
            <div className="poll-container">
                <h1 className="question">{poll.question}</h1>
                <div className="poll-author">
                    By <img src={authorAvatar} alt="Author's Avatar"/>
                </div>
                <ul>

                    { voteOptionKeys.map((option, index) => {

                        let optionVotes = poll[voteKeys[index]].length
                        let chosen = poll[voteKeys[index]].includes(authedUser)

                        return vote === null ?
                            (<li
                                onClick={() => !this.answered ? this.handleAnswer(option[0]) : null}
                                 key={option[0]} className="option">
                                {poll[option]}
                                </li>)

                            : (<li key={option[0]} className={`option ${chosen ? 'chosen' : '' }`}>
                                <div className="result">
                                    <span>{poll[option]}</span>
                                    <span>{`${getPercentage(optionVotes, totalVotes)} % (${optionVotes})`}</span>
                                </div>
                            </li>)
                    }) }
                </ul>
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

