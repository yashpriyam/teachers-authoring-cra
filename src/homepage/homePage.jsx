import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import LogOutButton from '../user/logoutButton'
import TaskAdder from '../taskadder/taskAdder'
import TaskViewer from '../taskviewer/taskViewer'
import DownloadFile from '../filedownload/fileDownload'
import UploadFile from '../fileupload/fileUpload'
import PageTitle from '../pagetitle/pageTitle'
import StaticHeader from '../staticheaders/staticHeaders'
import './homepage.style.css'


const HomePage = () => {
    const { stateAndDispatcher } = useContext(AppStateContext)
    const [ appState ] = stateAndDispatcher
    console.log(appState);
    return (
        <div className='homepage-container'>
            <div className='homepage-btns'>
                <LogOutButton/>
                <div className='file-action-btns'>
                    <DownloadFile />
                    <UploadFile/>
                </div>
            </div>
            <PageTitle/>
            <StaticHeader/>
            <TaskViewer/>
            <TaskAdder/>
        </div>
    )
}


export default HomePage;