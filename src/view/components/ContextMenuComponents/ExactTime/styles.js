// Core
import styled from 'styled-components';

export const ExactTimeWrapper = styled.div`
position: fixed;
top: 0; left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(50,50,50, 0.5);
.modal {
    .date-input {
        display: flex;
        justify-content: center;
        input[type=date] {
            width: 100%;
        }
    }
    input[type=checkbox] {
        accent-color: rgb(50, 50, 50);
        margin: 5px;
        transform: scale(1.5);
    }
}
`;
