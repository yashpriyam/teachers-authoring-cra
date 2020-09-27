import React, { useContext, useRef } from "react"
import { AppStateContext } from "../appState/globalState.context"
import './pageTitle.style.css'
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
                className='pagetitle'
                ref={pageTitleRef}
                type='text'
                name='title'
                value={pageTitle.toUpperCase()}
                onChange={onTitleChange} 
                disabled
                placeholder='Add subject name'
            />
        </div>
    )
}

export default PageTitle