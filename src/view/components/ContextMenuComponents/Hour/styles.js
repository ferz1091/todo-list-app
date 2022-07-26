// Core
import styled from 'styled-components';

export const HourWrapper = styled.div`
position: fixed;
top: 0; left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(50,50,50, 0.5);
.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        padding: 10px 0;
        text-align: center;
    }
    #time {
        font-weight: 700;
    }
    button {
        background-color: rgba(50,50,50, 0.5);
        color: gray;
        border: 2px solid gray;
        width: 70px;
        height: 25px;
        margin: 5px 10px 0 10px;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
    }
    button:hover {
        color: white;
        background-color: rgba(110, 110, 110, 0.5);
    }
    button:active {
        background-color: gray;
    }
}
`;
