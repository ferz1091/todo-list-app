// Core
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
position: relative;
display: flex;
flex-direction: column;
margin-top: 10px;
background-color: rgba(70,70,70, 0.7);
border-radius: 35px 35px 0 0;
/* border: 2px solid rgba(70,70,70, 0.7); */
font-size: calc(12px + 6 * (1400 / 100vw));
white-space: nowrap;
overflow: hidden;
.main-btns {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0; left: 0;
    z-index: 1;
    border-bottom: ${props => props.length > 0 ? '1px solid rgb(50, 50, 50);' : 'none'};
}
.lists {
    display: flex;
    margin-top: 5px;
    flex-direction: column;
    overflow: auto;
    ::-webkit-scrollbar {
     width: 0px;
    }
}
a {
    display: block;
    box-sizing: border-box;
    padding: 5px 0;
    margin: 5px 0;
    width: 100%;
    text-align: center;
    text-decoration: none;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ease-in-out;
}
a:link, a:visited {
    color: white;
}
a:hover {
    background-color: rgb(90, 90, 90);
    border-radius: 5px;
}
.active {
    background-color: rgb(90, 90, 90);
    border-radius: 5px;
    box-shadow: inset 0px 0px 3px black;
}
.add-list {
    cursor: pointer;
    background-color: rgba(90, 90, 90, 0.85);
    padding: 5px 0;
    color: white;
    font-size: calc(12px + 6 * (1400 / 100vw));
    border: none;
    width: 100%;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ease-in-out;
}
.add-list:hover {
    background-color: rgba(120, 120, 120, 0.85);
}
@media (max-width: 768px) {
    margin-left: 5px;
    .short {
        display: none;
    }
}
`;
