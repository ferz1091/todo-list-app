// Core
import { useFormik } from 'formik';
import { CSSTransition } from 'react-transition-group';

// Hooks
import { usePagesThemeMenu } from '../../../../tools';

// Components
import { Spinner } from '../';

// Styles
import { ThemePagesPanelWrapper, SpinnerWrapper } from './styles';

export const ThemePagesPanel = (props) => {
    const { panelRef, 
            iconRef, 
             
            toggleIsFetching, 
            toggleColor, 
            hexToRgb,
            isFetching,
            themeMenuIsOpen, 
            toggleThemeMenuIsOpen, 
            pageThemeListener,
            toggleListColor } = usePagesThemeMenu();
    const formik = useFormik({
        initialValues: {
            wrapper_color: '#464646',
            task_color: '#464646',
        },
        onSubmit: (values) => {
            toggleIsFetching(true);
            setTimeout(() => {
                if (props.page === 'List') {
                    toggleListColor(`${hexToRgb(values.wrapper_color)}`, `${hexToRgb(values.task_color)}`, `${props.list}`);
                    toggleIsFetching(false);
                } else {
                    toggleColor(`${hexToRgb(values.wrapper_color)}`, `${hexToRgb(values.task_color)}`, `${props.page}`);
                    toggleIsFetching(false);
                }
            }, 700)
        }
    })

    return (
        <>
            <SpinnerWrapper className='spinner-wrapper'>
                <CSSTransition
                    in={isFetching}
                    timeout={500}
                    classNames='spinner'
                    unmountOnExit
                    mountOnEnter
                >
                    <Spinner />
                </CSSTransition>
            </SpinnerWrapper>
            <span
                className='theme-icon'
                ref={iconRef}
                onClick={() => {
                    toggleThemeMenuIsOpen(true);
                    document.addEventListener('click', pageThemeListener);
                }}
            ></span>
            <CSSTransition
                in={themeMenuIsOpen}
                timeout={300}
                classNames='panel'
                unmountOnExit
                mountOnEnter
            >
                <ThemePagesPanelWrapper
                    className='theme-panel'
                    ref={panelRef}>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor='wrapper_color'>
                            Panels
                        </label>
                        <input
                            disabled={isFetching}
                            name='wrapper_color'
                            type='color'
                            id='wrapper_color'
                            onChange={(e) => {
                                formik.handleChange(e);
                                formik.handleSubmit();
                                }
                            }
                            value={formik.values.wrapper_color}
                        />
                        <label htmlFor='task_color'>
                            Tasks
                        </label>
                        <input
                            disabled={isFetching}
                            name='task_color'
                            type='color'
                            id='task_color'
                            onChange={(e) => {
                                formik.handleChange(e);
                                formik.handleSubmit();
                                }
                            }
                            value={formik.values.task_color}
                        />
                    </form>
                </ThemePagesPanelWrapper>
            </CSSTransition>
        </>
    )
}