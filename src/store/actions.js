import C from '../constants'

export const addPosting = (title, content) => {
    return {
        type: C.addPosting,
        payload: {
            title,
            content,
            date: (new Date()).toString(),
            id: (new Date()).toString()
        }
    }
}

export const removePosting = (id) => {
    return {
        type: C.removePosting,
        payload: id,
    }
}

export const addPostingAsync = (title, content) => (dispatch, getState) => {
    setTimeout(() => {
        dispatch({
            type: C.addPosting,
            payload: {
                title,
                content,
                date: (new Date()).toString(),
                id: (new Date()).toString()
            }
        })
    }, 4000)
}