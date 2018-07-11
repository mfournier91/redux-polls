import React from 'react'
import { connect } from 'react-redux'


function Leaderboard ({users}) {

        return (
            <div>
                <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id} className="user">
                        <img src={user.avatarURL} alt={`Avatar for ${user.name}`}/>
                            <div>
                            <h1>{user.name}</h1>
                            <p>{user.polls} polls</p>
                            <p>{user.answers} answers</p>
                            </div>
                        </li>
                    )
                })}
                </ul>
            </div>
        )

}

function mapStateToProps ({users}) {
    return {
        users: Object.keys(users)
            .map((id) => {
            const { name, avatarURL, polls, answers} = users[id]
            return {
                id,
                name,
                avatarURL,
                polls: polls.length,
                answers: answers.length,
            }
        })
            .sort((a,b) => b.answers + b.polls > a.answers + a.polls)
    }
}

export default connect(mapStateToProps)(Leaderboard)