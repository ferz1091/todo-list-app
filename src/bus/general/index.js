// Core
import { useDispatch } from 'react-redux';

// Actions
import { generalActions } from './slice';

export const useGeneral = () => {
    const dispatch = useDispatch();
    function addTask(task) {
        dispatch(generalActions.addTask(task))
    }
    function addList(list) {
        dispatch(generalActions.addList(list))
    }
    function toggleUncompletedListIsOpen(name) {
        dispatch(generalActions.toggleUncompletedListIsOpen(name))
    }
    function toggleCompletedListIsOpen(name) {
        dispatch(generalActions.toggleCompletedListIsOpen(name))
    }
    function toggleTaskImportant(name, list) {
        dispatch(generalActions.toggleTaskImportant({name, list}))
    }
    function toggleIsCompleted(name, list, date) {
        dispatch(generalActions.toggleIsCompleted({name, list, date}))
    }
    function rescheduleExactTime(task) {
        dispatch(generalActions.rescheduleExactTime(task))
    }
    function changeTaskInfo(task, prevName) {
        dispatch(generalActions.changeTaskInfo({task, prevName}))
    }
    function deleteTask(name, list) {
        dispatch(generalActions.deleteTask({name, list}))
    }
    function renameList(name, prevName) {
        dispatch(generalActions.renameList({name, prevName}))
    }
    function deleteList(list) {
        dispatch(generalActions.deleteList(list))
    }
    return {
        addTask,
        addList,
        toggleUncompletedListIsOpen,
        toggleCompletedListIsOpen,
        toggleTaskImportant,
        toggleIsCompleted,
        rescheduleExactTime,
        changeTaskInfo,
        deleteTask,
        renameList,
        deleteList,
    }
}
