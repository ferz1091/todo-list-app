// Core
import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
position: fixed;
top: 0; left: 0;
width: 100vw;
height: 100vh;
z-index: 999;
img {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(0, -50%);
}
`;