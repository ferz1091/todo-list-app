// Core
import styled from 'styled-components';

// Assets
import completeHoverIcon from '../../../../assets/icons/not-completed.png';
import completeIcon from '../../../../assets/icons/not-completed-hover.png';
import completeActiveIcon from '../../../../assets/icons/not-completed-active.png';

export const ListWrapper = styled.div`
.complete-btn {
    background-image: url(${completeIcon});
}
.complete-btn:hover {
    background-image: url(${completeHoverIcon});
}
.complete-btn:active {
    background-image: url(${completeActiveIcon});
}
`;
