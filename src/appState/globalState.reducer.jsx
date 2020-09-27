export const appState = []

export const reducer = (state, action) => {
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
        default:
            console.log('some error occurred')
    }
}