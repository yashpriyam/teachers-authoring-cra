export const appState = []
export const pageTitle = ''
export const pageTitleReducer = (state, action) => {
    state = action
    return state
}


export const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'inc':
            state = action.value
            return state
        case 'addTaskObject':
            state = action.value
            return state
        case 'indentLeft':
            state = action.value
            return state
        case 'indentRight':
            state = action.value
            return state
        case 'deleteTask':
            state = action.value
            return state
        case 'moveTask':
            state = action.value
            return state
        case 'jsonFileData':
            state = action.value
            return state
        case 'deleteAll':
                state = action.value
                return state
        default:
            console.log('some error occurred')
    }
}
