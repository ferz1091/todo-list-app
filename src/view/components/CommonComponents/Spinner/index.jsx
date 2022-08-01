// Core
import React from 'react';

// Assets
import spinner from '../../../../assets/spinner.svg';

// Styles
import { SpinnerWrapper } from './styles';

export const Spinner = () => {
    return (
        <SpinnerWrapper 
            className='spinner-bg'
            onClick={(e) => e.stopPropagation()}    
        >
            <img src={spinner} alt='spinner' />
        </SpinnerWrapper>
    )
}
