// Core
import styled from 'styled-components';

// Assets
import upIcon from '../../../assets/icons/drop-up.png';
import downIcon from '../../../assets/icons/drop-down.png';

export const MoveTaskWrapper = styled.div`
position: fixed;
top: 0; left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(50,50,50, 0.5);
.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 50vw;
    padding: 20px;
    border-radius: 20px;
    .option, .navigate-btn {
        width: 100%;
        text-align: center;
        padding: 5px 0;
        border: 1px solid black;
        cursor: pointer;
    }
    .up-icon, .down-icon {
        padding: 5px;
        margin: 5px 0;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-position: center;
        border: 1px solid black;
        border-radius: 50%;
        cursor: pointer;
    }
    .up-icon {
        background-image: url(${upIcon});
    }
    .down-icon {
        background-image: url(${downIcon});
    }
}    
`;