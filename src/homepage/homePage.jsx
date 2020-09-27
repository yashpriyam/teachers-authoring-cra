import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import LogOutButton from '../user/logoutButton'
import TaskAdder from '../taskadder/taskAdder'
import TaskViewer from '../taskviewer/taskViewer'
import DownloadFile from '../filedownload/fileDownload'
import UploadFile from '../fileupload/fileUpload'
import PageTitle from '../pagetitle/pageTitle'


const HomePage = () => {
    const { stateAndDispatcher } = useContext(AppStateContext)
    const [ appState ] = stateAndDispatcher
    console.log(appState);
    return (
        <>
        <LogOutButton/>
        <PageTitle/>
        <TaskViewer/>
        <TaskAdder/>
        <DownloadFile />
        <UploadFile/>
        </>
    )
}


export default HomePage;