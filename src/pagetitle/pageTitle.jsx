import React, { useContext, useRef } from "react"
import { AppStateContext } from "../appState/globalState.context"

const PageTitle = () => {
    const { pageTitleDispatcher } = useContext(AppStateContext)
    const [ pageTitle, dispatch ] = pageTitleDispatcher
    const pageTitleRef = useRef()

    const disableInput = () => pageTitleRef.current.disabled = true
    
    let inputTimer;
    const titleEditable = () => {
        pageTitleRef.current.disabled = false
        clearTimeout(inputTimer)
        inputTimer = setTimeout(disableInput, 4000)
    }

    const onTitleChange = (e) => {
        dispatch(e.target.value)
        clearTimeout(inputTimer)
        inputTimer = setTimeout(() => disableInput(), 4000)
    }

    return (
        <div onClick={titleEditable}>
            <input
                ref={pageTitleRef}
                type='text'
                name='title'
                value={pageTitle}
                onChange={onTitleChange} 
                disabled
            />
        </div>
    )
}

export default PageTitle