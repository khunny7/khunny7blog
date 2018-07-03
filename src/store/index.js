import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('postings', store.getState().postings.length)

    result = next(action)

    let { postings } = store.getState()

    console.log(`
        postings: ${postings.length}
    `)

    console.groupEnd()

    return result
}

export default (initialState={}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}