// Core
import styled from 'styled-components';

// Assets
import optionsIcon from '../../../../assets/icons/menu.png';
import completeIcon from '../../../../assets/icons/not-completed.png';
import completeHoverIcon from '../../../../assets/icons/not-completed-hover.png';
import completeActiveIcon from '../../../../assets/icons/not-completed-active.png';

export const UnsortedWrapper = styled.div`
.task-body {
    position: relative;
    display: flex;
    border-bottom: 1px solid black;
    .prop-name {
        padding-left: 5px;
    }
    .prop-time {
        position: absolute;
        right: 30px;
    }
    .important-btn {
        padding-left: 30px;
    }
    .options-btn {
        position: absolute;
        left: 5px;
        width: 20px;
        height: 20px;
        background-image: url(${optionsIcon});
        background-repeat: no-repeat;
    }
    .options-btn:active {
        transform: translateY(5%);
    }
    .complete-btn {
        position: absolute;
        right: 5px;
        width: 20px;
        height: 20px;
        background-image: url(${completeIcon});
        background-repeat: no-repeat;
    }
    .complete-btn:hover {
        background-image: url(${completeHoverIcon});
    }
    .complete-btn:active {
        background-image: url(${completeActiveIcon});
        transform: translateY(5%);
    }
    .options {
        position: absolute;
        left: 30px;
        background-color: white;
        z-index: 999;
        display: flex;
        flex-direction: column;
    }
}
`;