// Core
import styled from 'styled-components';

export const NewTaskWrapper = styled.div`
position: fixed;
top: 0; left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(50,50,50, 0.6);
.modal {
    form {
        .deadline, .deadline-error {
            display: flex;
            justify-content: space-around;
            label {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                span {
                    font-size: calc(12px + 4 * (100vw / 1400));
                    text-align: center;
                }
                input {
                    accent-color: rgb(50, 50, 50);
                }
            }
        }
        .deadline-error {
            background-color: rgba(255, 0, 0, 0.1);
        }
    }
}
@media (max-height: 400px) {
    .modal {
        form {
            label {
                font-size: 12px;
            }
            input {
                padding: 0;
                margin: 0;
                margin-bottom: 5px;
            }
            select {
                padding: 0;
                margin: 0;
                margin-bottom: 5px;
            }
        }
    }
}
`;
