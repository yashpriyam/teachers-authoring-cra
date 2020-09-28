import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DeleteAllTasks = () => {
    const { stateAndDispatcher } = useContext(AppStateContext)
    const [ appState, dispatch ] = stateAndDispatcher
    console.log(appState);

    return (
        <div className="tooltip">
            <div className='delete-all'>
                <FontAwesomeIcon
                    className='arrow'
                    onClick={() => dispatch({ type: 'deleteAll', value: [] })}
                    icon={faTrashAlt}
                    size='2x'
                />
            </div>
            <span className="tooltiptext">Delete All</span>
        </div>
    )
}

export default DeleteAllTasks