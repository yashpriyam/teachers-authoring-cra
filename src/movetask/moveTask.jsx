import React, { useContext } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'

const DragDropTasks = (props) => {
    const { children, indPos } = props
    const [ appState, dispatch ] = useContext(AppStateContext)
    let updatedState = [...appState]
    let task = updatedState[indPos]

    const onDragStart = (e, taskObj) => {
        e.dataTransfer.setData("taskObj", taskObj.value)
    }

    const onDragOver = (e) => {
        e.preventDefault()
    }

    const onDrop = (e, landingTask) => {
        const draggedTaskName = e.dataTransfer.getData("taskObj")
        const tempTaskList = updatedState;
        updatedState.map((taskObj, i) => {
            if (taskObj.value === draggedTaskName) {
                let splicingIndex = 1;
                if (i === tempTaskList.length - 1) { //last element, no children
                const hangingTask = tempTaskList.pop()
                const landingTaskIndex = tempTaskList.findIndex(onetask => onetask.value === landingTask.value)
                tempTaskList.splice(landingTaskIndex, 0, hangingTask)
                } else {
                for (let pos = i + 1; pos < tempTaskList.length; pos += 1) {
                    if ( tempTaskList[pos].level > tempTaskList[i].level ) {
                    splicingIndex += 1;
                    continue
                    }
                    break;
                }
                const hangingTasksArray = tempTaskList.splice(i, splicingIndex)
                const landingTaskIndex = tempTaskList.findIndex(onetask => onetask.value === landingTask.value)
                tempTaskList.splice(landingTaskIndex, 0, ...hangingTasksArray)
                }
            }
        return dispatch({ type: 'moveTask', value: tempTaskList });
        })
      }
    
    
    return (
        <div className='drag-drop' key={task.value} onDragOver={e => onDragOver(e)} onDrop={e => onDrop(e, task)}>
            <hr></hr>
            <div
              className='task-container'
              onDragStart={e => onDragStart(e, task)}
              draggable
            >
              <FontAwesomeIcon
                className='arrow'
                icon={faExpandArrowsAlt}
                transform={{ rotate: 45 }}
              />
                {children}
            </div>
        </div>
    )
}

export default DragDropTasks;