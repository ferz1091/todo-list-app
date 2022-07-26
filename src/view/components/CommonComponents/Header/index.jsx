// Assets
import Logo from '../../../../assets/icons/logo.png';

// Styles
import { HeaderWrapper } from './styles';

export const Header = () => {
    return (
        <HeaderWrapper className='Header'>
            <div className='Logo'>
                <img
                    src={Logo}
                    alt='logo' 
                />
                TODO
            </div>
        </HeaderWrapper>
    )
}
