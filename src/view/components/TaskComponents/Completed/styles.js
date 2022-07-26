// Core
import styled from 'styled-components';

// Assets
import completeIcon from '../../../../assets/icons/completed.png';
import completeHoverIcon from '../../../../assets/icons/completed-hover.png';

export const CompletedWrapper = styled.div`
.task-body {
    .complete-btn {
        background-image: url(${completeIcon});
    }
    .complete-btn:hover {
        background-image: url(${completeHoverIcon});
    }
}
`;
