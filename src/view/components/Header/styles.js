// Core
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    grid-area: Header;
    display: flex;
    position: relative;
    justify-content: center;
    background-color: white;
    border: 1px solid black;
    overflow: hidden;
    .Logo {
        position: absolute;
        top: 50%; left: 5%;
        display: flex;
        align-items: center;
        transform: translate(0, -50%);
        img {
            max-height: 100%;
        }
    }
`;