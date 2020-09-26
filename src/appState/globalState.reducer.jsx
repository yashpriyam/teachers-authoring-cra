import React from 'react'


export const appState = []

export const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return state = action.value
        default:
            console.log('some error occurred')
    }
}



