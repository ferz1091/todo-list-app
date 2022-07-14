// Core
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
position: relative;
display: flex;
flex-direction: column;
border: 1px solid black;
font-size: calc(12px + 6 * (1400 / 100vw));
white-space: nowrap;
overflow: auto;
margin-bottom: 5px;
::-webkit-scrollbar {
    width: 0px;
}
.main-btns {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0; left: 0;
}
.lists {
    display: flex;
    flex-direction: column;
}
a {
    padding: 5px 0;
    margin-bottom: 5px;
    background-color: white;
    width: 100%;
    text-align: center;
    text-decoration: none;
}
a:link, a:visited {
    color: black;
}
.active {
    color: red;
}
.add-list {
    width: 100%;
}
@media (max-width: 768px) {
    .short {
        display: none;
    }
}
`;