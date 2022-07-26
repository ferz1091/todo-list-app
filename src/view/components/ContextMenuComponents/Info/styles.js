// Core
import styled from 'styled-components';

export const InfoWrapper = styled.div`
position: fixed;
top: 0; left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(50,50,50, 0.5);
.modal {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 30vw;
    padding: 20px;
    border-radius: 20px;
    span {
        padding: 5px 0 5px 15px;
        word-break: break-all;
    }
}
@media (max-width: 768px) {
    .modal {
        width: 80vw;
    }
}
`;
