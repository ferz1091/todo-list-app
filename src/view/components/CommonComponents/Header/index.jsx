// Core
import React from 'react';

// Core
import { Transition } from 'react-transition-group';

// Hooks
import { useThemeMenu } from '../../../../tools';

// Assets
import Logo from '../../../../assets/icons/logo.png';

// Styles
import { HeaderWrapper } from './styles';

export const Header = () => {
    const { panelRef, 
            iconRef, 
            toggleBackground, 
            themeMenuIsOpen, 
            toggleThemeMenuIsOpen, 
            themeMenuListener } = useThemeMenu();

    return (
        <HeaderWrapper className='Header'>
            <div className='Logo'>
                <img
                    src={Logo}
                    alt='logo'
                />
                TODO
            </div>
            <span
                className='theme-icon'
                ref={iconRef}
                onClick={() => {
                    if (!themeMenuIsOpen) {
                        toggleThemeMenuIsOpen(true);
                        document.addEventListener('click', themeMenuListener);
                    }
                }
                }
            >
            </span>
            <Transition
                in={themeMenuIsOpen}
                timeout={600}
                mountOnEnter
                unmountOnExit
            >
                {state => <div className={`theme-panel ${state}`} ref={panelRef}>
                    <span
                        className='lawrencium'
                        onClick={() => toggleBackground('lawrencium')}
                    >
                    </span>
                    <span
                        className='margo'
                        onClick={() => toggleBackground('margo')}
                    >
                    </span>
                    <span
                        className='red-sunset'
                        onClick={() => toggleBackground('red-sunset')}
                    >
                    </span>
                    <span
                        className='crystal'
                        onClick={() => toggleBackground('crystal')}
                    >
                    </span>
                    <span
                        className='ibiza'
                        onClick={() => toggleBackground('ibiza')}
                    >
                    </span>
                    <span
                        className='beach'
                        onClick={() => toggleBackground('beach')}
                    >
                    </span>
                    <span
                        className='bay'
                        onClick={() => toggleBackground('bay')}
                    >
                    </span>
                    <span
                        className='boat'
                        onClick={() => toggleBackground('boat')}
                    >
                    </span>
                    <span
                        className='wave'
                        onClick={() => toggleBackground('wave')}
                    >
                    </span>
                    <span
                        className='field'
                        onClick={() => toggleBackground('field')}
                    >
                    </span>
                    <span
                        className='mount'
                        onClick={() => toggleBackground('mount')}
                    >
                    </span>
                    <span
                        className='sunset'
                        onClick={() => toggleBackground('sunset')}
                    >
                    </span>
                </div>}
            </Transition>
        </HeaderWrapper>
    )
}
