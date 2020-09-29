import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import LeftIndenter from '../leftindenter/leftIndenter'
import RightIndenter from '../rightindenter/rightIndenter'
import DeleteTask from '../deletetask/deleteTask'
import DragDropTasks from '../movetask/moveTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import './taskViewer.style.css'
import { useState } from 'react'

const TaskViewer = () => {
    const { stateAndDispatcher } = useContext(AppStateContext)
    const [ appState, dispatch ] = stateAndDispatcher
    const [ taskSearchField, setTaskSearchField ] = useState('')
    let updatedState = [...appState]
    
    const indentLevel = (task) => {
        switch(task.level) {
            case 1:
                return 'parent'
            case 2:
                return 'firstchild'
            case 3:
                return 'secondchild'
            default:
                return null
        }
    }


    const filteredTasks = appState.filter(taskObj =>
        taskObj.value.toLowerCase().includes(taskSearchField.toLowerCase())
    )

    const onSearchFieldChange = (e) => {
        setTaskSearchField(e.target.value)
    }

    const onTaskChange = (e, editedTaskIndex) => {
        updatedState[editedTaskIndex].value = e.target.value
        dispatch({ type: 'editTask', value: updatedState })
    }


    return (
        <>
        <div className='search-container'>
            <input className='search-box' type='text' onChange={onSearchFieldChange} placeholder='Search here'/>
        </div>
        <div className='task-view'>
            {filteredTasks.map((task, ind) => {
                return (
                    <div className='task-controller' key={task.id}>
                        <DragDropTasks indPos={ind}>
                            <div className='task-control-buttons'>
                                <FontAwesomeIcon
                                    className='arrow'
                                    icon={faExpandArrowsAlt}
                                    transform={{ rotate: 45 }}
                                />
                                <LeftIndenter indPos={ind}/>
                                <RightIndenter indPos={ind}/>
                                <DeleteTask indPos={ind} />
                            </div>
                            <div className={`${indentLevel(task)}`}>
                                <div className='indent-positon'></div>
                                <input
                                    className='taskName'
                                    value={task.value}
                                    onChange={(e) => onTaskChange(e, ind)}
                                />
                            </div>
                        </DragDropTasks>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default TaskViewer;