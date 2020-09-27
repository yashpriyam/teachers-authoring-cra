import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import LogOutButton from '../user/logoutButton'
import TaskAdder from '../taskadder/taskAdder'
import TaskViewer from '../taskviewer/taskViewer'


const HomePage = () => {
    const [ appState, dispatch ] = useContext(AppStateContext)
    console.log(appState);
    return (
        <>
        <LogOutButton/>
        <button type='button' onClick={() => dispatch({ type: 'inc', value: [676] })}>Click to update the state</button>
        <TaskViewer/>
        <TaskAdder/>
        </>
    )
}


export default HomePage;