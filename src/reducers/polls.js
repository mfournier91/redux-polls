import {RECEIVE_POLLS, ADD_POLL, ADD_ANSWER} from "../actions/polls";
import authedUser from "./authedUser";

export default function polls(state = {}, action) {
    switch (action.type){
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls,
            }
        case ADD_POLL:
            return {
                ...state,
                [action.poll.id]: action.poll,
            }
        case ADD_ANSWER:
            const {pollId, answer, authedUser} = action
            const voteKey = answer + 'Votes'
            return {
                ...state,
                [pollId]: {
                    ...state[pollId],
                    [voteKey] : state[pollId][voteKey].concat(authedUser)
                }
            }
        default:
            return state
    }
}