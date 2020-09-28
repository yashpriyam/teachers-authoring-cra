import React, { useContext, useRef } from "react"
import { AppStateContext } from "../appState/globalState.context"
import './pageTitle.style.css'
const PageTitle = () => {
    const { pageTitleDispatcher } = useContext(AppStateContext)
    const [ pageTitle, dispatch ] = pageTitleDispatcher
    const pageTitleRef = useRef()

    const titleInEditable = () => pageTitleRef.current.disabled = true
    
    const titleEditable = () => {
        pageTitleRef.current.disabled = false
    }

    const onTitleChange = (e) => {
        dispatch(e.target.value)
    }

    return (
        <div onClick={titleEditable} onBlur={titleInEditable}>
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