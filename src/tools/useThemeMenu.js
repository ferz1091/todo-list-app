// Core
import { useState, useRef } from 'react';

// Bus
import { useTheme } from '../bus/theme';

export const useThemeMenu = () => {
    const panelRef = useRef();
    const iconRef = useRef();
    const { toggleBackground } = useTheme();
    const [themeMenuIsOpen, toggleThemeMenuIsOpen] = useState(false);
    function themeMenuListener(e) {
        if (e.path[0] !== panelRef.current && e.path[1] !== panelRef.current && e.path[0] !== iconRef.current) {
            toggleThemeMenuIsOpen(false);
            document.removeEventListener('click', themeMenuListener);
        }
    }
    return {
        panelRef,
        iconRef,
        toggleBackground,
        themeMenuIsOpen,
        toggleThemeMenuIsOpen,
        themeMenuListener
    }
}