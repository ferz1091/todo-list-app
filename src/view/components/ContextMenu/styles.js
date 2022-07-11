// Core
import styled from 'styled-components';

// Assets
import importantIcon from '../../../assets/icons/important.png';
import notImportantIcon from '../../../assets/icons/not-important.png';
import completeIcon from '../../../assets/icons/completed.png';
import incompleteIcon from '../../../assets/icons/incomplete.png';
import hourIcon from '../../../assets/icons/hour.png';
import dayIcon from '../../../assets/icons/day.png';
import changeDateIcon from '../../../assets/icons/change-date.png';
import clockIcon from '../../../assets/icons/clock.png';
import moveIcon from '../../../assets/icons/move-task.png';
import deleteIcon from '../../../assets/icons/delete.png';

export const ContextMenuWrapper = styled.div`
position: absolute;
left: 5px;
z-index: 999;
background-color: white;
border: 1px solid black;
div {
    padding: 5px 0;
    cursor: pointer;
}
.option {
    padding-left: 30px;
    padding-right: 5px;
}
.important-icon, .not-important-icon, .completed-icon, .not-completed-icon, .hour-icon, .day-icon, .change-date-icon, .clock-icon, .move-icon, .delete-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 5px;
    background-repeat: no-repeat;
}
.important-icon {
    background-image: url(${notImportantIcon});
}
.not-important-icon {
    background-image: url(${importantIcon});
}
.completed-icon {
    background-image: url(${incompleteIcon});
}
.not-completed-icon {
    background-image: url(${completeIcon});
}
.hour-icon {
    background-image: url(${hourIcon});
}
.day-icon {
    background-image: url(${dayIcon});
}
.change-date-icon {
    background-image: url(${changeDateIcon});
}
.clock-icon {
    background-image: url(${clockIcon});
}
.move-icon {
    background-image: url(${moveIcon});
}
.delete-icon {
    background-image: url(${deleteIcon});
}
`;