import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'


const DownloadFile = () => {
    const [ appState ] = useContext(AppStateContext)

    const downloadFile = async () => {
        console.log(appState.length);
        if (appState.length === 0) return Error('No data to download')
        const fileName = "file";
        const json = JSON.stringify(appState);
        const blob = new Blob([json],{type:'application/json'});
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        return document.body.removeChild(link);
    }
    return (
        <div>
            <button
                type='button'
                onClick={() => downloadFile()}>
                    DOWNLOAD FILE
            </button>
        </div>
    )
}

export default DownloadFile

  