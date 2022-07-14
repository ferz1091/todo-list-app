// Core
import styled from 'styled-components';

export const DeleteTaskWrapper = styled.div`
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
    button {
        margin: 5px;
        padding: 5px;
    }
}
`;