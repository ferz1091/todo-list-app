// Core
import styled from 'styled-components';

// Assets
import upIcon from '../../../../assets/icons/drop-up-white.png';
import downIcon from '../../../../assets/icons/drop-down-white.png';
import upHoverIcon from '../../../../assets/icons/drop-up.png';
import downHoverIcon from '../../../../assets/icons/drop-down.png';

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
    .option, .navigate-btn {
        width: 100%;
        text-align: center;
        padding: calc(2px + 3 * (100vw / 1400)) 0;
        border: 1px solid black;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    .option {
        font-size: calc(12px + 4 * (100vw / 1400));
        background-color: rgba(90, 90, 90, 0.85);
        margin-bottom: calc(2px + 3 * (100vw / 1400));
        border-radius: 5px;
        border: none;
    }
    .option:hover {
        background-color: rgb(75, 75, 75);
    }
    .up-icon, .down-icon {
        padding: 5px;
        margin: 5px 0;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-position: center;
        border: 2px solid gray;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    .up-icon {
        background-image: url(${upIcon});
    }
    .up-icon:hover {
        background-image: url(${upHoverIcon});
    }
    .down-icon {
        background-image: url(${downIcon});
    }
    .down-icon:hover {
        background-image: url(${downHoverIcon});
    }
}
`;
