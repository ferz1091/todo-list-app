import styled from 'styled-components';

export const ListWrapper = styled.div`
.task {
    position: relative;
    display: flex;
    .prop {
        padding-left: 5px;
    }
    .desc-prop, .desc-prop-hidden {
        display: block;
        width: 100%;
        position: absolute;
        top: 100%;
        z-index: 999;
        background-color: white;
        padding-left: 5px;
        box-sizing: border-box;
        border-bottom: 1px solid black;
    }
    .desc-prop-hidden {
        display: none;
    }
    img {
        padding-left: 5px;
    }
}
`;