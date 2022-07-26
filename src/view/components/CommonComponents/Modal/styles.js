// Core
import styled from 'styled-components';

export const ModalWrapper = styled.div`
position: absolute;
z-index: 999;
top: 0; left: 0;
width: 100vw;
height: 100vh;
.modal {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(70, 70, 70, 0.95);
    color: white;
    width: 40vw;
    padding: 20px;
    border-radius: 20px;
    form {
        display: flex;
        flex-direction: column;
        input, select {
            border-radius: 5px;
            box-sizing: border-box;
            padding: 5px 0;
            margin: 5px 0;
            background-color: rgba(50,50,50, 0.5);
            color: white;
            border: 2px solid gray;
            outline: none;
        }
        input:disabled {
                background-color: rgba(110, 110, 110, 0.85);
                border: 2px solid gray;
        }
        input:focus {
            background-color: rgba(100,100,100, 0.5); 
        }
        .input-error {
            background-color: rgba(255, 0, 0, 0.1);
            border: 2px solid gray;
            outline: none;
        }
        .error {
            color: rgb(250, 0, 0);
            font-weight: 500;
        }
        .submit {
            display: flex;
            justify-content: center;
            padding-top: 5px;
            input {
                background-color: rgba(50,50,50, 0.5);
                padding: 5px;
                color: gray;
                border: 2px solid gray;
                border-radius: 5px;
                transition: all 0.3s ease-in-out;
            }
            input:hover {
                color: white;
                background-color: rgba(110, 110, 110, 0.5);
            }
            input:active {
                background-color: gray;
            }
        }
    }
}
@media (max-width: 768px) {
    .modal {
        width: 70vw;
    }
}
`;
