import React, { useContext, useRef } from "react"
import { AppStateContext } from "../appState/globalState.context"
import { v4 as uuidv4 } from 'uuid';
import './fileUpload.style.css'
const UploadFile = () => {
  const { stateAndDispatcher, pageTitleDispatcher } = useContext(AppStateContext)
  const [appState, dispatch] = stateAndDispatcher
  const [ pageTitle, titleDispatch ] = pageTitleDispatcher
  
  const fileInputRef = useRef()
  let updatedState = [...appState]
  console.log(pageTitle);


  const handleFileUpload = (e) => {
    const fileReader = new FileReader()
    titleDispatch(e.target.files[0].name)
    fileReader.readAsText(e.target.files[0], "UTF-8")
    fileReader.onload = (ev) => {
      updatedState = JSON.parse(ev.target.result)
      updatedState.forEach(taskObj => {
        if (taskObj.id === undefined) {
          taskObj.id = uuidv4()
        }
      })
      console.log(updatedState);
      dispatch({ type: "jsonFileData", value: updatedState })
      fileInputRef.current.value = ''
    }
  }
  return (
    <div className='fileupload-container' onClick={() => fileInputRef.current.click()}>
      <div className='upload-btn-text'>UPLOAD FILE</div>
      <input className='fileupload' ref={fileInputRef} type="file" onChange={handleFileUpload} />
    </div>
  )
}

export default UploadFile
