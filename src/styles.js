// Core
import styled from 'styled-components';

export const AppWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 90vw 1fr;
grid-template-rows: 1fr 90vh;
grid-template-areas: '. Header .'
                    '. Content .';
grid-gap: 5px;
width: 100vw;
height: 100vh;
background-color: #dfdfdf;
@media (max-width: 768px) {
    grid-template-columns: 1fr 100vw 1fr;
    grid-gap: 0px;  
}
`;

export const ContentWrapper = styled.section`
grid-area: Content;
display: grid;
grid-template-columns: 1fr 80%;
background-color: #dfdfdf;
border: 1px solid black;
@media (max-width: 768px) {
    grid-template-columns: 1fr 70%;
}
`;