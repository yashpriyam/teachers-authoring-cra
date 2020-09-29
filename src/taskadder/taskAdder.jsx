import React, { useState, useRef, useContext, useEffect } from 'react'
import { AppStateContext } from '../appState/globalState.context'
import { v4 as uuidv4 } from 'uuid';
import './taskAdder.style.css'


const TaskAdder = () => {
    const { stateAndDispatcher } = useContext(AppStateContext)
    const [ appState, dispatch ] = stateAndDispatcher
    
    const [ taskName, setTaskName ] = useState('')
    const [ task, setTask ] = useState({ value: '', level: '', id: ''})
    const taskInput = useRef();

    let updatedState = [...appState] //for forcing state update

    console.log(appState);
    useEffect(() => {
        taskInput.current.focus()
    }, [taskName])

    const onChangeForTaskInput = (e) => {
        setTaskName(e.target.value)
        setTask({
          value: e.target.value,
          level: 1
        })
      }

    const addTaskHandler = () => {
        if (taskName === '') return;
        task.id = uuidv4()
        updatedState.push(task)
        dispatch({ type: 'addTaskObject', value: updatedState })
        setTaskName('')
    }
    
    return (
        <div className='taskadder-container'>
            <div>
                <input className='taskAdder' name='task' type='text' ref={taskInput} onChange={onChangeForTaskInput} value={taskName} placeholder='Add standard here'/>
            </div>
            <button className='addStandard' type='button' onClick={() => addTaskHandler()}>Add a standard</button>
        </div>
    )
}

export default TaskAdder;
