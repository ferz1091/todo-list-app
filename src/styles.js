// Core
import styled from 'styled-components';

// Assets
import optionsIcon from './assets/icons/menu-white.png';
import themeIcon from './assets/icons/theme.png';
import themeHoverIcon from './assets/icons/theme-hover.png';
import themeActiveIcon from './assets/icons/theme-active.png';
import beachBg from './assets/backgrounds/beach.jpg';
import bayBg from './assets/backgrounds/bay.jpg';
import boatBg from './assets/backgrounds/boat.jpg';
import waveBg from './assets/backgrounds/wave.jpg';
import fieldBg from './assets/backgrounds/field.jpg';
import mountBg from './assets/backgrounds/mount.jpg';
import sunsetBg from './assets/backgrounds/sunset.jpg';

export const AppWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 90vw 1fr;
grid-template-rows: 1fr 90vh;
grid-template-areas: 'Header Header Header'
                    '. Content .';
width: 100vw;
height: 100vh;
background-image: ${props => props.background === 'beach' ? `url(${beachBg})` :
                        props.background === 'bay' ? `url(${bayBg})` :
                            props.background === 'boat' ? `url(${boatBg})` : 
                                props.background === 'wave' ? `url(${waveBg})` :
                                    props.background === 'field' ? `url(${fieldBg})` :
                                        props.background === 'mount' ? `url(${mountBg})` :
                                            props.background === 'sunset' ? `url(${sunsetBg})` :
                                                props.background === 'lawrencium' ? `linear-gradient(to right, #0f0c29, #302b63, #24243e)` :
                                                    props.background === 'margo' ? `linear-gradient(to right, #c9d6ff, #e2e2e2)` : 
                                                        props.background === 'red-sunset' ? `linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)` :
                                                            props.background === 'crystal' ? `linear-gradient(to right, #159957, #155799)` :
                                                                `linear-gradient(to right, #ee0979, #ff6a00)`};
background-size: cover;
overflow: hidden;
@media (max-width: 768px) {
    grid-template-columns: 1fr 100vw 1fr; 
}
`;

export const ContentWrapper = styled.section`
grid-area: Content;
display: grid;
grid-template-columns: 1fr 80%;
overflow: hidden;
.page {
    position: relative;
    margin: 0 0 5px 5px;
    border-radius: 0 0 25px 0;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 0px;
    }
    .task-body, .task-body-overdue {
        position: relative;
        display: flex;
        padding: 5px 0;
        margin: 5px 0;
        /* background-color: rgba(70, 70, 70, 0.7); */
        color: white;
        border-radius: 10px;
        .prop-name {
            padding-left: 5px;
        }
        .prop-time {
            position: absolute;
            right: 30px;
        }
        .prop-list {
            position: absolute;
            right: 75px;
        }
        .important-btn {
            cursor: pointer;
            padding-left: 30px;
        }
        .options-btn {
            cursor: pointer;
            position: absolute;
            left: 5px;
            width: 20px;
            height: 20px;
            background-image: url(${optionsIcon});
            background-repeat: no-repeat;
        }
        .options-btn:active {
            transform: translateY(5%);
        }
        .complete-btn, .incomplete-btn {
            cursor: pointer;
            position: absolute;
            right: 5px;
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
        }
        .complete-btn:active {
            transform: translateY(5%);
        }
        .options {
            cursor: pointer;
            position: absolute;
            left: 30px;
            background-color: white;
            z-index: 999;
            display: flex;
            flex-direction: column;
        }
    }
    .task-body-overdue {
        background-color: rgba(255, 0, 0, 0.1);
    }
    /* .task-body:hover {
        background-color: rgba(85,85,85);
    } */
    .Completed {
            background-color: rgba(0, 250, 0, 0.2);
            border-radius: 25px;
            .Completed {
                background-color: rgba(0, 250, 0, 0);
            }
    }
    .header {
        cursor: pointer;
        padding: 5px 0;
        margin: 5px 0;
        padding-left: 15px;
        color: white;
        font-weight: 500;
        text-shadow: 1px 1px 3px black;
    }
    .Empty-tasks-div {
        position: absolute;
        top: 0; left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 15px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        color: white;
        text-shadow: 2px 2px 5px black;
        font-weight: 700;
    }
    .control-panel {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        margin: 10px 0;
        h1 {
            width: 100%;
            text-align: center;
            margin: 0;
            padding: 5px 15px;
            border-radius: 25px;
            box-shadow: inset 0px 0px 3px rgb(30,30,30);
            color: white;
        }
        .theme-icon {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translate(0, -50%);
            width: 20px;
            height: 20px;
            background-image: url(${themeIcon});
        }
        .theme-icon:hover {
            background-image: url(${themeHoverIcon});
        }
        .theme-icon:active {
            background-image: url(${themeActiveIcon});
        }
        .theme-panel {
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgb(70, 70, 70);
            padding: 10px;
            border-radius: 15px;
            overflow: hidden;
            input {
                width: 50px;
                height: 50px;
                border-radius: 5px;
                margin: 5px 0;
            }
            label {
                display: block;
                font-size: 12px;
                width: 100%;
                text-align: center;
                color: white;
            }
        }
        @keyframes enter-panel {
        0% {
            width: 0px;
            opacity: 0;

        }
        100% {
            width: 50px;
            opacity: 1;
        }
        }
        .panel-enter-active {
            animation: enter-panel 0.3s linear;
        }
        .panel-exit-active {
            animation: enter-panel 0.3s linear reverse;
        }
        .panel-exit {
            opacity: 0;
        }
    }
}
.add-task-btn {
    position: absolute;
    bottom: 10%; right: 10%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 30px;
    background-color: #0ed145;
    color: white;
    border: none;
    box-shadow: inset 0px 0px 2px black;
}
.add-task-btn:hover {
    background-color: #0b9a33;
}
.add-task-btn:active {
  transform: translateY(4px);
  box-shadow: 0 2px 2px white;
}
@media (max-width: 768px) {
    grid-template-columns: 1fr 70%;
    .page {
        margin-right: 5px;
    }
}
`;