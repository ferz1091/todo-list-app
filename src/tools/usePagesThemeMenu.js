// Core
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

// Bus
import { useTheme } from '../bus/theme';
import { useGeneral } from '../bus/general';

export const usePagesThemeMenu = () => {
    const panelRef = useRef();
    const iconRef = useRef();
    const colors = useSelector(state => state.theme.colors);
    const [themeMenuIsOpen, toggleThemeMenuIsOpen] = useState(false);
    const [isFetching, toggleIsFetching] = useState(false);
    const { toggleColor } = useTheme();
    const { toggleListColor } = useGeneral();
    function hexToRgb(hex) {
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    }
    function pageThemeListener(e) {
        if (e.path[0] !== iconRef.current) {
            if (!e.path.some(el => el === panelRef.current)) {
                toggleThemeMenuIsOpen(false);
                document.removeEventListener('click', pageThemeListener);
            }
        }
    }

    return {
        colors,
        hexToRgb,
        toggleColor,
        isFetching,
        toggleIsFetching,
        themeMenuIsOpen,
        toggleThemeMenuIsOpen,
        panelRef,
        iconRef,
        pageThemeListener,
        toggleListColor,
    }
}