// Core
import React from 'react';

// Hooks
import { useModalElement } from '../../../../tools';

export const AddNewTaskBtn = () => {
    const { toggleNewTaskModalActive } = useModalElement();
    return (
        <button 
            className='add-task-btn' 
            onClick={() => toggleNewTaskModalActive(true)}
        >
            +
        </button>
    )
}
