// Core
import styled from 'styled-components';

// Assets
import incompleteHoverIcon from '../../../../assets/icons/not-completed.png';
import incompleteIcon from '../../../../assets/icons/not-completed-hover.png';
import incompleteActiveIcon from '../../../../assets/icons/not-completed-active.png';
import completeIcon from '../../../../assets/icons/completed.png';
import completeHoverIcon from '../../../../assets/icons/completed-hover.png';

export const GeneralWrapper = styled.div`
.task-body {
    .complete-btn, .incomplete-btn {
        background-image: url(${incompleteIcon});
    }
    .complete-btn:hover {
        background-image: url(${incompleteHoverIcon});
    }
    .complete-btn:active {
        background-image: url(${incompleteActiveIcon});
    }
    .incomplete-btn {
        background-image: url(${completeIcon});
    }
    .incomplete-btn:hover {
        background-image: url(${completeHoverIcon});
    }
    .incomplete-btn:active {
        transform: translateY(5%);
    }
}
@media (max-width: 520px) {
    .prop-list {
        display: ${props => props.length > 10 ? 'none' : 'auto'};
    }
}
`;
