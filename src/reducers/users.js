import {RECEIVE_USERS} from "../actions/users";
import {ADD_POLL} from "../actions/polls";
import {ADD_ANSWER} from "../actions/polls";

export default function users(state = {}, action) {
    switch (action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_POLL:
            return {
                ...state,
                [action.poll.author]: {
                    ...state[action.poll.author],
                    polls: state[action.poll.author]["polls"].concat(action.poll.id)
                }
            }
        case ADD_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: state[action.authedUser].answers.concat(action.pollId)
                }
            }
        default:
            return state
    }

}