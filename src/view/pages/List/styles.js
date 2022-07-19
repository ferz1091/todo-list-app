// Core
import styled from 'styled-components';

// Assets
import renameListIcon from '../../../assets/icons/editList.png';
import deleteListIcon from '../../../assets/icons/delete.png';
import deleteListHoverIcon from '../../../assets/icons/delete-hover.png';
import renameListHoverIcon from '../../../assets/icons/editList-hover.png';

export const ListWrapper = styled.section`
position: relative;
background-color: white;
margin: 0 10px 5px 10px;
overflow: auto;
::-webkit-scrollbar {
    width: 0px;
}
.Empty-tasks-div {
    position: absolute;
    top: 0; left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}
.control-panel {
    position: relative;
    z-index: 999;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    h1 {
        margin: 0;
    }
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
        background-image: url(${deleteListHoverIcon});
    }
    .deleteList-icon:hover {
        background-image: url(${deleteListIcon})
    }
    .renameList-icon:hover {
        background-image: url(${renameListHoverIcon})
    }
}
`;