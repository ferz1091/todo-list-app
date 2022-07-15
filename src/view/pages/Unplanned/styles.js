// Core
import styled from 'styled-components';

// Assets
import dropIcon from '../../../assets/icons/drop-down.png';
import upIcon from '../../../assets/icons/drop-up.png';

export const UnplannedWrapper = styled.section`
position: relative;
background-color: white;
margin: 0 10px 5px 10px;
.Empty-tasks-div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}
.task-body {
    border-bottom: 1px solid black;
}
.title, .sorted, .unsorted, .list {
    background-color: rgba(100,100,100, 0.5);
    border: 1px solid black;
    padding-left: 5px;
}
.sorted, .unsorted {
    background-color: rgba(255,0,0, 0.3);
}
.list {
    background-color: rgba(0, 0, 255, 0.3);
}
.completed {
    background-color: rgba(0, 255, 0, 0.3);
    border: 1px solid black;
    padding-left: 5px;
}
.title {
    font-size: 12px;
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
`;