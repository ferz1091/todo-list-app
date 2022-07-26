// Core
import styled from 'styled-components';

// Assets
import importantIcon from '../../../../assets/icons/important.png';
import notImportantIcon from '../../../../assets/icons/not-important.png';
import completeIcon from '../../../../assets/icons/completed.png';
import incompleteIcon from '../../../../assets/icons/incomplete.png';
import hourIcon from '../../../../assets/icons/hour.png';
import dayIcon from '../../../../assets/icons/day.png';
import changeDateIcon from '../../../../assets/icons/change-date.png';
import clockIcon from '../../../../assets/icons/clock.png';
import moveIcon from '../../../../assets/icons/move-task.png';
import deleteIcon from '../../../../assets/icons/delete-white.png';
import dropRightIcon from '../../../../assets/icons/drop-right-white.png';
import addIcon from '../../../../assets/icons/add-white.png';
import crossIcon from '../../../../assets/icons/cross-white.png';
import moveToIcon from '../../../../assets/icons/moveto-white.png';
import infoIcon from '../../../../assets/icons/info.png';
import editInfoIcon from '../../../../assets/icons/edit.png';

export const ContextMenuWrapper = styled.div`
position: absolute;
left: 5px;
z-index: 999;
background-color: rgb(70, 70, 70);
color: white;
border: 2px solid rgb(90, 90, 90);
border-radius: 5px;
div {
    padding: 5px 0;
    cursor: pointer;
}
.btn {
    transition: all 0.2s ease-in-out;
}
.btn:hover {
    background-color: rgb(90, 90, 90);
}
.option {
    padding-left: 30px;
    padding-right: 5px;
}
.important-icon, .not-important-icon, .completed-icon, .not-completed-icon, .hour-icon, .day-icon, .change-date-icon, .clock-icon, .move-icon, .delete-icon, .add-icon, .cross-icon, .moveTo-icon, .info-icon, .editInfo-icon {
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
.add-icon {
    background-image: url(${addIcon});
}
.cross-icon {
    background-image: url(${crossIcon});
}
.moveTo-icon {
    background-image: url(${moveToIcon});
}
.info-icon {
    background-image: url(${infoIcon});
}
.editInfo-icon {
    background-image: url(${editInfoIcon});
}
.change-list {
    position: relative;
}
.change-list-subpanel {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0; left: 100%;
    z-index: 999;
    background-color: rgb(70, 70, 70);
    color: white;
    border: 2px solid rgb(90, 90, 90);
    border-radius: 5px;
    .option-subpanel, .option-subpanel-disabled {
        white-space: nowrap;
        padding-left: 30px;
        padding-right: 5px;
    }
    .option-subpanel-disabled {
        opacity: 0.3;
    }
}
.drop-right-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 5px;
    background-image: url(${dropRightIcon});
}
@media (max-width: 768px) {
    .change-list-subpanel {
        top: 100%;
        left: auto;
        right: 0;
    }
}
`;
