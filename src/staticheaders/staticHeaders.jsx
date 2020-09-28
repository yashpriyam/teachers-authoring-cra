import React from 'react'
import DeleteAllTasks from '../deleteall/deleteAll'
import '../staticheaders/staticHeaders.style.scss'

const StaticHeader = () => {
    return (
        <div className='head-container'>
            <div className="subjects-heading">
                <div className="heading-wrapper">
                    <div className="main-heading">Actions</div>
                    <div className="sub-heading">Move, Indent, Outdent, Delete </div>
                </div>
                <div className="heading-wrapper standard">
                    <div className="main-heading">Standard</div>
                    <div className="sub-heading">The text of the standard</div>
                </div>
            </div>
            <div className='delete-all-container'>
                <DeleteAllTasks/>
            </div>
        </div>
    )
}

export default StaticHeader