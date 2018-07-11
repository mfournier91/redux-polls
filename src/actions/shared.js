import { getInitialData } from '../utils/api'
import {receivePolls} from "./polls";
import {receiveUsers} from './users'
import {setAuthedUser} from "./authedUser";
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = 'dan_abramov'


export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        getInitialData().then(({users, polls}) => {
            dispatch(receiveUsers(users))
            dispatch(receivePolls(polls))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}
