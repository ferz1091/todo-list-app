// Core
import styled from 'styled-components';

// Assets
import themeIcon from '../../../../assets/icons/theme.png';
import themeHoverIcon from '../../../../assets/icons/theme-hover.png';
import themeActiveIcon from '../../../../assets/icons/theme-active.png';
import beachBg from '../../../../assets/backgrounds/beach.jpg';
import bayBg from '../../../../assets/backgrounds/bay.jpg';
import boatBg from '../../../../assets/backgrounds/boat.jpg';
import waveBg from '../../../../assets/backgrounds/wave.jpg';
import fieldBg from '../../../../assets/backgrounds/field.jpg';
import mountBg from '../../../../assets/backgrounds/mount.jpg';
import sunsetBg from '../../../../assets/backgrounds/sunset.jpg';

export const HeaderWrapper = styled.header`
@keyframes entering {
    0% {
        right: -210px;
    }
    100% {
        right: 10px;
    }
}
grid-area: Header;
display: flex;
position: relative;
z-index: 10;
justify-content: center;
background-color: rgba(70,70,70, 0.5);
color: white;
font-weight: 500;
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
.theme-icon {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(0, -50%);
    width: 20px;
    height: 20px;
    padding: 10px;
    background-image: url(${themeIcon});
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.1s ease-in-out;
}
.theme-icon:hover {
    background-image: url(${themeHoverIcon});
}
.theme-icon:active {
   background-image: url(${themeActiveIcon});
}
.theme-panel {
    position: absolute;
    top: calc(50% + 15px); right: -210px;
    width: 180px;
    background-color: rgb(70, 70, 70);
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 15px;
    span {
        width: 70px;
        height: 39px;
        margin: 10px;
        border-radius: 10px;
    }
    .beach, .bay, .boat, .wave, .field, .mount, .sunset {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .lawrencium {
        background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    }
    .margo {
        background: linear-gradient(to right, #c9d6ff, #e2e2e2);
    }
    .red-sunset {
        background: linear-gradient(to right, #355c7d, #6c5b7b, #c06c84);
    }
    .crystal {
        background: linear-gradient(to right, #159957, #155799);
    }
    .ibiza {
        background: linear-gradient(to right, #ee0979, #ff6a00);
    }
    .beach {
        background-image: url(${beachBg});
    }
    .bay {
        background-image: url(${bayBg});
    }
    .boat {
        background-image: url(${boatBg});
    }
    .wave {
        background-image: url(${waveBg});
    }
    .field {
        background-image: url(${fieldBg});
    }
    .mount {
        background-image: url(${mountBg});
    }
    .sunset {
        background-image: url(${sunsetBg});
    }
}
.theme-panel.entering {
    animation: entering 0.6s ease-in;
}
.theme-panel.exiting {
    animation: entering 0.6s ease-in reverse;
}
.theme-panel.entered {
    right: 10px;
}
.theme-panel.exited {
    right: -210px;
}
@media (max-height: 400px) {
    .theme-panel {
        width: 160px;
        span {
            margin: 5px;
        }
    }
}
`;
