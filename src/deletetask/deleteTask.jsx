import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DeleteTask = (props) => {
    const { indPos } =  props
    const { stateAndDispatcher } = useContext(AppStateContext)
    const [ appState, dispatch ] = stateAndDispatcher
    
    let updatedState = [...appState]

    const deleteTaskWithChildren = () => {
        const taskObj = updatedState[indPos]
        let splicingIndex = 1;
        for (let pos = indPos + 1; pos < updatedState.length; pos += 1) {
            if (updatedState[pos].level > taskObj.level) {
                splicingIndex += 1;
                continue;
            }
            break;
        }
        updatedState.splice(indPos, splicingIndex)
        dispatch({ type: 'deleteTask', value: updatedState });
      }

    return (
        <div className="tooltip">
            <FontAwesomeIcon
                className='arrow'
                onClick={() => deleteTaskWithChildren()}
                icon={faTrashAlt}
            />
            <span className="tooltiptext">Delete</span>
        </div>
    )
}

export default DeleteTask
