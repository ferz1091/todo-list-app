// Hooks
import { useOption, useMoveTask } from '../../../../tools';

// Styles
import { MoveTaskWrapper } from './styles';

export const MoveTask = () => {
    const { currentTask, 
            toggleMoveTaskModalActive, 
            resetCurrentTask, 
            deleteTask, 
            addTask } = useOption();
    const { lists, 
            listIndexs, 
            setListIndexs, 
            downRef, 
            upRef } = useMoveTask();
    

    return (
        <MoveTaskWrapper 
            className='moveTask-modal' 
            onClick={(e) => {if (e.target !== downRef.current && e.target !== upRef.current) { 
                toggleMoveTaskModalActive(false); 
                resetCurrentTask()
                    }
                }
            }
        >
            <div className='modal'>
                {lists.filter((list) => lists.name !== currentTask.list).length > 10 && listIndexs.a > 1 ?
                    <span 
                        ref={upRef} 
                        onClick={() => setListIndexs({ a: listIndexs.a - 1, b: listIndexs.b - 5 })} 
                        className='up-icon'>
                    </span>
                    : 
                    null
                }
                {lists.filter((list) => list.name !== currentTask.list)
                    .filter((item, index) => index < 10 * listIndexs.a && index >= 2 * listIndexs.b)
                    .map((list, index) => 
                        <div 
                            key = {index} 
                            className='option'
                            onClick={() => {
                                addTask({ ...currentTask, list: list.name});
                                deleteTask(currentTask.name, currentTask.list);
                                resetCurrentTask()
                            }}
                        >
                                move to {`${list.name}`}
                        </div>
                    )
                }
                {lists.filter((list) => lists.name !== currentTask.list).length > 10 &&
                lists.filter((list, index) => index < 10 * (listIndexs.a + 1) &&
                index >= 2 * (listIndexs.b + 5)).length > 0 ? 
                    <span 
                        ref={downRef} 
                        onClick={() => setListIndexs({ a: listIndexs.a + 1, b: listIndexs.b + 5 })} 
                        className='down-icon'>
                    </span>
                    : 
                    null
                } 
            </div>
        </MoveTaskWrapper>
    )
}
