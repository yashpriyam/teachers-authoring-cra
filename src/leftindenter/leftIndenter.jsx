import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const LeftIndenter = (props) => {
    const { indPos } =  props
    const { stateAndDispatcher } = useContext(AppStateContext)
    const [ appState, dispatch ] = stateAndDispatcher
    
    let updatedState = [...appState]

    const indentLeft = () => {
        console.log(updatedState);
        let taskObj = updatedState[indPos];
        taskObj.level > 1 ? taskObj.level -= 1 : Error('No more space')
        return dispatch({ type: 'indentLeft', value: updatedState })
      }
      
    return (
        <div>
            <FontAwesomeIcon
                className='arrow'
                onClick={() => indentLeft()}
                icon={faArrowLeft}
            />
        </div>
    )
}

export default LeftIndenter;
