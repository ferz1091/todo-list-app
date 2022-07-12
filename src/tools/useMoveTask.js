// Core
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

export const useMoveTask = () => {
    const [listIndexs, setListIndexs] = useState({ a: 1, b: 0 });
    const lists = useSelector(state => state.general.lists);
    const downRef = useRef();
    const upRef = useRef();

    return {
        listIndexs, 
        setListIndexs,
        lists,
        downRef,
        upRef,
    }
}