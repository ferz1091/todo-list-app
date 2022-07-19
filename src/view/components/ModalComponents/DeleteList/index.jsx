// Core
import { useLocation, useNavigate } from 'react-router-dom';

// Hooks
import { useOption } from '../../../../tools';

// Styles
import { DeleteListWrapper } from './styles';

export const DeleteList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { toggleDeleteListModalActive, deleteList } = useOption();

    return (
        <DeleteListWrapper 
            className='deleteList-modal' 
            onClick={() => toggleDeleteListModalActive(false)}
        >
            <div 
                className='modal' 
                onClick={(e) => e.stopPropagation()}
            >
                <span>
                    Are you sure you want to delete "{`${location.pathname.replace(/_/g, ' ').replace('/', '') }`}" list?
                </span>
                <span>
                    <button onClick={() => toggleDeleteListModalActive(false)}>
                        No
                    </button>
                    <button onClick={() => {
                        deleteList(location.pathname.replace(/_/g, ' ').replace('/', ''));
                        navigate('/');
                        toggleDeleteListModalActive(false);
                            }   
                        }
                    >
                        Yes
                    </button>
                </span>
            </div>
        </DeleteListWrapper>
    )
}