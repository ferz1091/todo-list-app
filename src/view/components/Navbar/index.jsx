// Core
import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

// Bus
import { useModal } from '../../../bus/modal';
import { useGeneral } from '../../../bus/general';

// Styles
import { NavbarWrapper } from './styles';

export const Navbar = () => {
    const { toggleNewListModalActive } = useModal();
    const { toggleListIsOpen } = useGeneral();
    const [listsOpen, setListsOpen] = useState(true);
    const lists = useSelector(state => state.general.lists);

    return (
        <NavbarWrapper className='Navbar'>
            <div onClick={() => setListsOpen(!listsOpen)}>
                <span>
                    Lists ({`${lists.length}`})
                </span>
                <button onClick={(e) => {
                    toggleNewListModalActive(true);
                    e.stopPropagation();
                }}>+</button>
            </div>
            {listsOpen && lists.length !== 0 ? lists.map((list, index) =>
                <div key={index}>
                    <div onClick={() => toggleListIsOpen(list.name)}>
                        {list.name}
                    </div>
                    {list.isOpen ? list.tasks.map((task, index) => <div key={index}>{task.name}</div>) : null}
                </div>)
                : null}
        </NavbarWrapper>
    )
}