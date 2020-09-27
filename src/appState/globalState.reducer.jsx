export const appState = []

export const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            state = action.value
            return state
        case 'addTaskObject':
            state = action.value
            return state
        default:
            console.log('some error occurred')
    }
}