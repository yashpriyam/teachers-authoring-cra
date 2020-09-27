import React, { createContext, useReducer } from 'react'
import { reducer, appState, pageTitle, pageTitleReducer } from './globalState.reducer';



export const AppStateContext = createContext()

export const AppStateProvider = ({ children }) => {
    const stateAndDispatcher = useReducer(reducer, appState);
    const pageTitleDispatcher = useReducer(pageTitleReducer, pageTitle);
    return (
        <AppStateContext.Provider value={{stateAndDispatcher, pageTitleDispatcher}}>
            {children}
        </AppStateContext.Provider>
    )
}

