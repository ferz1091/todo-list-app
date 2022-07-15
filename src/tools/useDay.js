// Core
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const useDay = () => {
    const currentTask = useSelector(state => state.modal.currentTask);
    const newDate = new Date(new Date(`${currentTask.date}T${currentTask.time}`).getTime() + 86400000);
    const date = `${newDate.getFullYear()}-${Math.trunc((newDate.getMonth() + 1) / 10)}${Math.round((((newDate.getMonth() + 1) / 10) - Math.trunc((newDate.getMonth() + 1) / 10)) * 10)}-${Math.trunc(newDate.getDate() / 10)}${((newDate.getDate() / 10) - Math.trunc(newDate.getDate() / 10)) * 10}`;
    console.log(date);
  
    return {
        date
    }
}