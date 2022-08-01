// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Hooks
import { useTasks } from '../../../../tools/';

// Styles
import { NavbarWrapper } from './styles';

export const Navbar = () => {
    const { lists, toggleNewListModalActive } = useTasks();

    return (
        <NavbarWrapper 
            className='Navbar' 
            length={lists.length}
        >
            <div className='main-btns'>
                <button 
                    onClick={() => toggleNewListModalActive(true)} 
                    className='add-list'>
                        Add list
                    </button>
                <NavLink to='/'>
                    <span>
                        Today
                    </span>
                    <span className='short'>
                        {` `}tasks
                    </span>
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
                {lists.length !== 0 ? lists.map((list, index) => 
                    <NavLink 
                        key={index} 
                        to={`/${list.name.replace(/ /g, '_')}`}>
                            {list.name}
                        </NavLink>) 
                        : 
                        null
                    }
            </div>
        </NavbarWrapper>
    )
}
