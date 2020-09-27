import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'

const UploadFile = () => {
    const [ appState, dispatch ] = useContext(AppStateContext)

    const handleFileUpload = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = ev => {
          dispatch({ type: 'jsonFileData', value: JSON.parse(ev.target.result)})
        };
      };
    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    )
}

export default UploadFile