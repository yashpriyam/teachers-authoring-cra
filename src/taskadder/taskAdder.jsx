import React, { useState, useRef, useContext, useEffect } from 'react'
import { AppStateContext } from '../appState/globalState.context'

const TaskAdder = () => {
    const [ appState, dispatch ] = useContext(AppStateContext)
    const [ taskName, setTaskName ] = useState('')
    const [ task, setTask ] = useState({ value: '', level: ''})
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
        updatedState.push(task)
        dispatch({ type: 'addTaskObject', value: updatedState })
        setTaskName('')
    }
    
    return (
        <div>
            <div>
                <input name='task' type='text' ref={taskInput} onChange={onChangeForTaskInput} value={taskName} placeholder='Add standard here'/>
            </div>
            <button type='button' onClick={() => addTaskHandler()}>ADD STANDARD</button>
        </div>
    )
}

export default TaskAdder;