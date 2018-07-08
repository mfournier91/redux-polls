import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reducer from './reducers/index'
import middleware from './middleware'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(reducer, middleware)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))