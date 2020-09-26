import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import LogOutButton from '../user/logoutButton'


const HomePage = () => {
    const [ appState, dispatch ] = useContext(AppStateContext)
    console.log(appState);
    return (
        <>
        <LogOutButton/>
        <button type='button' onClick={() => dispatch({ type: 'inc', value: 23 })}>Click to update the state</button>
        </>
    )
}


export default HomePage;