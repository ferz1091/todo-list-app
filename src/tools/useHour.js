// Core
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const useHour = () => {
    const currentTask = useSelector(state => state.modal.currentTask);
    const newDate = new Date(new Date(`${currentTask.date}T${currentTask.time}`).getTime() + 3600000);
    const date = `${newDate.getFullYear()}-${Math.trunc((newDate.getMonth() + 1) / 10)}${Math.round((((newDate.getMonth() + 1) / 10) - Math.trunc((newDate.getMonth() + 1) / 10)) * 10)}-${Math.trunc(newDate.getDate() / 10)}${Math.round(((newDate.getDate() / 10) - Math.trunc(newDate.getDate() / 10)) * 10)}`
    const time = newDate.toLocaleTimeString().slice(0, 5);
    const displayDate = newDate.toDateString();
    
    return {
        date,
        time,
        displayDate,
    }
}
