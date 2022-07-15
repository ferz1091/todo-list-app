// Core
import styled from 'styled-components';

// Assets
import optionsIcon from '../../../../assets/icons/menu.png';
import incompleteIcon from '../../../../assets/icons/not-completed.png';
import incompleteHoverIcon from '../../../../assets/icons/not-completed-hover.png';
import incompleteActiveIcon from '../../../../assets/icons/not-completed-active.png';
import completeIcon from '../../../../assets/icons/completed.png';
import completeHoverIcon from '../../../../assets/icons/completed-hover.png';
import dropIcon from '../../../../assets/icons/drop-down.png';
import upIcon from '../../../../assets/icons/drop-up.png';

export const GeneralWrapper = styled.div`
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
    .prop-list {
        position: absolute;
        right: 75px;
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
    .complete-btn, .incomplete-btn {
        position: absolute;
        right: 5px;
        width: 20px;
        height: 20px;
        background-image: url(${incompleteIcon});
        background-repeat: no-repeat;
    }
    .complete-btn:hover {
        background-image: url(${incompleteHoverIcon});
    }
    .complete-btn:active {
        background-image: url(${incompleteActiveIcon});
        transform: translateY(5%);
    }
    .incomplete-btn {
        background-image: url(${completeIcon});
    }
    .incomplete-btn:hover {
        background-image: url(${completeHoverIcon});
    }
    .incomplete-btn:active {
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
.title {
        background-color: rgba(100,100,100, 0.5);
        border: 1px solid black;
        padding-left: 5px;
}
.dropIcon, .upIcon {
    position: absolute;
    right: 5px;
    width: 20px;
    height: 20px;
    background-image: url(${upIcon});
}
.upIcon {
    background-image: url(${dropIcon});
}
@media (max-width: 520px) {
    .prop-list {
        display: ${props => props.length > 10 ? 'none' : 'auto'};
    }
}
`;