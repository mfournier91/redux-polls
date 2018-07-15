import {savePoll, savePollAnswer} from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    }
}

export function addPoll (poll) {
    return {
        type: ADD_POLL,
        poll
    }
}

export function addPollAnswer ({id, answer, authedUser}) {
    return {
        type: ADD_ANSWER,
        pollId: id,
        answer,
        authedUser,
    }
}

export function handleAddPollAnswer(args) {
    return (dispatch) => {
        dispatch(showLoading())
        savePollAnswer(args).then(() => {
            dispatch(addPollAnswer(args))
        }).then(() => dispatch(hideLoading()))
    }
}

 export function handleAddPoll(poll) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())
        savePoll({
            ...poll,
            author: authedUser
        }).then((poll) => {
            dispatch(addPoll(poll))
        }).then(() => dispatch(hideLoading()))
    }

 }