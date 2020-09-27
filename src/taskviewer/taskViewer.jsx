import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import LeftIndenter from '../leftindenter/leftIndenter'
import RightIndenter from '../rightindenter/rightIndenter'
import DeleteTask from '../deletetask/deleteTask'
import DragDropTasks from '../movetask/moveTask'
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
        <div>
            {appState.map((task, ind) => {
                return (
                    <div key={task.value}>
                        <DragDropTasks indPos={ind}>
                            <LeftIndenter indPos={ind}/>
                            <RightIndenter indPos={ind}/>
                            <DeleteTask indPos={ind} />
                            <div
                                className={indentLevel(task)}
                            >
                                <input
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