// Core
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
grid-area: Header;
display: flex;
position: relative;
justify-content: center;
background-color: rgba(70,70,70, 0.5);
color: white;
font-weight: 500;
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
@media (max-width: 768px) {
    margin-bottom: 5px;
}
`;
