// Core
import styled from 'styled-components';

export const ThemePagesPanelWrapper = styled.div`
`;

export const SpinnerWrapper = styled.div`
@keyframes enter {
    0% {
        left: 0%;
        opacity: 0;
    }
    100% {
        left: 50%;
        opacity: 1;
    }
}
@keyframes exit {
    0% {
        left: 50%;
        opacity: 1;
    }
    100% {
        left: 100%;
        opacity: 0;
    }
}
.spinner-enter-active {
    img {
        animation: enter 0.2s linear;
    }
}
.spinner-enter {
    img {
        left: 50%;
    }
}
.spinner-exit-active {
    img {
        animation: exit 0.2s linear;
    }
}
.spinner-exit {
    img {
        left: 100%;
    }
}
`;