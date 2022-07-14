// Core
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

// Bus
import { useModal } from '../../../bus/modal';

// Styles
import { NavbarWrapper } from './styles';

export const Navbar = () => {
    const { toggleNewListModalActive } = useModal();
    const lists = useSelector(state => state.general.lists);

    return (
        <NavbarWrapper className='Navbar'>
            <div className='main-btns'>
                <button onClick={() => toggleNewListModalActive(true)} className='add-list'>Add list</button>
                <NavLink to='/'>
                    <span>
                        Today
                    </span>
                    <span className='short'>
                        {` `}tasks
                    </span>
                </NavLink>
                <NavLink to='/i'>
                    Important
                </NavLink>
                <NavLink to='/p'>
                    Planned
                </NavLink>
                <NavLink to='/u'>
                    Unplanned
                </NavLink>
                <NavLink to='/h'>
                    History
                </NavLink>
            </div>
            <div className='lists'>
                {lists.length !== 0 ? lists.map((list, index) => <NavLink key={index} to={`/${list.name}`}>{list.name}</NavLink>) : null}
            </div>
        </NavbarWrapper>
    )
}