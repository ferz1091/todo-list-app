// Hooks
import { useModalElement } from '../../../../tools';

// Components
import { NewTask, NewList, ExactTime, Hour, Day, ChangeDate, DeleteTask, MoveTask } from '../../';

// Styles
import { ModalWrapper } from './styles';

export const Modal = () => {
    const { modalIsActive, addTask, addList, deleteTask, toggleNewTaskModalActive, toggleNewListModalActive, resetCurrentTask } = useModalElement();
    return (
        <ModalWrapper>
            {modalIsActive.NewTask ?
                <NewTask
                    addTask={addTask}
                    toggleNewTaskModalActive={toggleNewTaskModalActive}
                />
                :
                null
            }
            {modalIsActive.NewList ?
                <NewList
                    addList={addList}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    resetCurrentTask={resetCurrentTask}
                    toggleNewListModalActive={toggleNewListModalActive}
                />
                :
                null
            }
            {modalIsActive.ExactTime ?
                <ExactTime />
                :
                null
            }
            {modalIsActive.Hour ?
                <Hour />
                :
                null
            }
            {modalIsActive.Day ?
                <Day />
                :
                null
            }
            {modalIsActive.changeDate ?
                <ChangeDate />
                :
                null
            }
            {modalIsActive.deleteTask ?
                <DeleteTask />
                :
                null
            }
            {modalIsActive.moveTask ?
                <MoveTask />
                :
                null
            }
        </ModalWrapper>
    )
}