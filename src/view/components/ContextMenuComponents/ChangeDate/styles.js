// Core
import styled from 'styled-components';

export const ChangeDateWrapper = styled.div`
position: fixed;
top: 0; left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(50,50,50, 0.5);
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
`;
