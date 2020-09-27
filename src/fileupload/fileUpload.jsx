import React, { useContext, useRef } from "react"
import { AppStateContext } from "../appState/globalState.context"

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
      dispatch({ type: "jsonFileData", value: updatedState })
      fileInputRef.current.value = ''
    }
  }
  return (
    <div>
      <input ref={fileInputRef} type="file" onChange={handleFileUpload} />
    </div>
  )
}

export default UploadFile
