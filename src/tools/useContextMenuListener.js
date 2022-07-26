// Core
import { useState, useRef } from 'react';

export const useContextMenuListener = () => {
    const [contextMenuIsOpen, toggleContextMenuIsOpen] = useState(false);
    const optionBtnRef = useRef();
    function contextMenuListener(e) {
        if (e.path[0] !== optionBtnRef.current) {
            toggleContextMenuIsOpen(false);
            document.removeEventListener('click', contextMenuListener)
        }
    }

    return {
        contextMenuIsOpen,
        toggleContextMenuIsOpen,
        optionBtnRef,
        contextMenuListener,
    }
}
