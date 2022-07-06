// Core
import { useState, useEffect } from 'react';

export const useModal = () => {
    const [modalNewTaskActive, setModalNewTaskActive] = useState(false);
    const [modalNewListActive, setModalNewListActive] = useState(true);
    useEffect(() => {
        console.log('+');
    }, [modalNewListActive])
    
    return {
        modalNewTaskActive,
        setModalNewTaskActive,
        modalNewListActive,
        setModalNewListActive,
    }
}