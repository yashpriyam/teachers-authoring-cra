import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import LeftIndenter from '../leftindenter/leftIndenter'
import RightIndenter from '../rightindenter/rightIndenter'
import DeleteTask from '../deletetask/deleteTask'
import DragDropTasks from '../movetask/moveTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import './taskViewer.style.css'

const TaskViewer = () => {
    const { stateAndDispatcher } = useContext(AppStateContext)
    const [ appState ] = stateAndDispatcher
    
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

    return (
        <div className='task-view'>
            {appState.map((task, ind) => {
                return (
                    <div className='task-controller' key={task.value}>
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
                                    disabled
                                />
                            </div>
                        </DragDropTasks>
                    </div>
                )
            })}
        </div>
    )
}

export default TaskViewer;