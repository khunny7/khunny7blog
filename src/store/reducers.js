import C from '../constants'
import _ from 'lodash'
import { combineReducers } from 'redux'

export const posting = (state= null, action) => {
    if (action.type === C.addPosting) {
        return action.payload
    } else {
        return state
    }
}

export const postings = (state = [], action) => {
    if (action.type === C.addPosting) {
        // check if has posting already

        const newState = [
            ...state,
            posting(null, action)
        ];

        console.log('returning new state' + newState);

        return newState;
    } else if (action.type === C.removePosting) {
        const newState = {}
        _.each(state, (item) => {
            if (item.id !== action.payload) {
                newState[item.id] = item
            }
        })

        return newState
    } else {
        return state
    }
}

export const currentPosting = (state = null, action) => {
    if (action.type === C.setCurrentPosting) {
        return action.payload
    } else {
        return state
    }
}

export default combineReducers({
    // posting,
    postings,
    currentPosting
})