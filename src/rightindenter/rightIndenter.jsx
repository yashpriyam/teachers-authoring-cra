import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './rightIndenter.style.css'

const RightIndenter = (props) => {
    const { indPos } =  props
    const [ appState, dispatch ] = useContext(AppStateContext)
    let updatedState = [...appState]

    const indentRight = () => {
        console.log(updatedState);
        let taskObj = updatedState[indPos]
        taskObj.level < 3 ? taskObj.level += 1 : Error('No more space')
        return dispatch({ type: 'indentRight', value: updatedState })
      }
      
    return (
        <div>
            <FontAwesomeIcon
                className='arrow'
                onClick={() => indentRight()}
                icon={faArrowRight}
            />
        </div>
    )
}

export default RightIndenter;