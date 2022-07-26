// Core
import styled from 'styled-components';

// Assets
import dropIcon from '../../../assets/icons/drop-down-white.png';
import upIcon from '../../../assets/icons/drop-up-white.png';
import renameListIcon from '../../../assets/icons/editList.png';
import deleteListIcon from '../../../assets/icons/delete-white.png';
import deleteListHoverIcon from '../../../assets/icons/delete-hover.png';
import renameListHoverIcon from '../../../assets/icons/editList-hover.png';

export const ListWrapper = styled.section`
    .renameList-icon, .deleteList-icon {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        transform: translate(0, -50%);
        background-repeat: no-repeat;
    }
    .renameList-icon {
        right: 35px;
        background-image: url(${renameListIcon});
    }
    .deleteList-icon {
        right: 5px;
        background-image: url(${deleteListIcon});
    }
    .deleteList-icon:hover {
        background-image: url(${deleteListHoverIcon})
    }
    .renameList-icon:hover {
        background-image: url(${renameListHoverIcon})
    }
    .dropIcon, .upIcon {
        position: absolute;
        right: 10px;
        width: 20px;
        height: 20px;
        background-image: url(${upIcon});
    }
    .upIcon {
        background-image: url(${dropIcon});
    }
`;

export const TaskSectionWrapper = styled.div`
margin: 5px 0;
padding: 0 5px;
padding-bottom: ${props => props.isOpen ? '5px;' : '0px;'};
border-radius: 25px;
background-color: rgba(70, 70, 70, 0.85);
`;
