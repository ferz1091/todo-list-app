// Core
import React from 'react';

// Hooks
import { useOption, useDay } from '../../../../tools';

// Styles
import { DayWrapper } from './styles';

export const Day = () => {
    const { currentTask, 
            rescheduleExactTime, 
            toggleDayModalActive, 
            resetCurrentTask } = useOption();
    const { date } = useDay();

    return (
        <DayWrapper 
            className='day-modal' 
            onClick={() => {
                toggleDayModalActive(false); 
                resetCurrentTask()
                }
            }
        >
            <div className='modal'>
                <span>
                    {`Task "${currentTask.name}" will be reschedule to`}
                </span>
                <span id='time'>
                    {currentTask.time} {new Date(new Date(currentTask.date).getTime() + 86400000).toDateString()}
                </span>
                <span>
                    <button 
                        onClick={() => { 
                            toggleDayModalActive(false); 
                            resetCurrentTask() 
                            }
                        }
                    >
                        Decline
                    </button>
                    <button 
                        onClick={() => { 
                            rescheduleExactTime({ ...currentTask, date: date }); 
                            resetCurrentTask() 
                            }
                        }
                    >
                        Accept
                    </button>
                </span>
            </div>
        </DayWrapper>
    )
}
