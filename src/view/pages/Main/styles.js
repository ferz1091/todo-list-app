// Core
import styled from 'styled-components';

export const MainWrapper = styled.div`
position: relative;
border-radius: 15px;
background-color: white;
margin: 0 10px 5px 10px;
.Empty-tasks-div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}
.Empty-tasks-div:hover {
    border: 2px solid rgb(0,166,186);
    border-radius: 15px;
    background-color: rgba(0,166,186, 0.1);
}
button {
    position: absolute;
    bottom: 5%; right: 5%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 30px;
    background-color: #0ed145;
    color: white;
    border: none;
}
button:hover {
    background-color: #0b9a33;
}
button:active {
  transform: translateY(4px);
  box-shadow: 0 2px 2px #666;
}
`;