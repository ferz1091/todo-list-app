// Core
import styled from 'styled-components';

// Assets
import dropIcon from '../../../assets/icons/drop-down-white.png';
import upIcon from '../../../assets/icons/drop-up-white.png';

export const UnplannedWrapper = styled.section`
.title {
    background-color: rgba(100,100,100, 0.5);
    border: 1px solid black;
    padding-left: 5px;
}
.title {
    font-size: 12px;
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
.control-panel {
    h1 {
        background-color: ${props => `rgba(${props.colorWrapper}, 0.4)`};
    }
}
`;

export const TaskSectionWrapper = styled.div`
margin: 5px 0;
padding: 0 5px;
padding-bottom: ${props => props.isOpen ? '5px;' : '0px;'};
border-radius: 25px;
background-color: ${props => `rgba(${props.colorWrapper}, 0.4)`};
.task-body {
    background-color: ${props => `rgba(${props.colorTask}, 0.7)`};
}
.task-body:hover {
    background-color: ${props => `rgba(${props.colorTask}, 0.9)`};
}
`;
