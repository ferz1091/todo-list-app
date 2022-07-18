// Core
import styled from 'styled-components';

export const EditInfoWrapper = styled.div`
position: fixed;
top: 0; left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(50,50,50, 0.5);
.modal {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 50vw;
    padding: 20px;
    border-radius: 20px;
    .submit {
            display: flex;
            justify-content: center;
            padding-top: 5px;
            input {
                padding: 5px;
            }
        }
    .desc-input, .name-input {
        display: flex;
        justify-content: center;
        input[type=text] {
            width: 100%;
        }
    }
    .error {
        color: red;
    }
    input {
        border-radius: 5px;
        box-sizing: border-box;
        padding: 5px 0;
        margin: 5px 0;
        border: 1px solid black;
        outline: none;
    }
    input:disabled {
        background-color: rgba(50,50,50, 0.3);
        border: 1px solid gray;
    }
    .input-error, .input-error:disabled {
            background-color: rgba(255, 0, 0, 0.2);
            border: 1px solid rgba(255, 0, 0, 0.5);
            outline: none;
    }
    .input-error:disabled {
        background-color: rgba(50,50,50, 0.3);
    }
    .input-error:focus {
        background-color: white;
    }
    input[type=checkbox] {
        margin: 5px;
        transform: scale(1.5);
    }
}
@media (max-width: 768px) {
    .modal {
        width: 80vw;
    }
}
`;