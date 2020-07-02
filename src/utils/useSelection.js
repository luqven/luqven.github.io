/**
 * license: MIT
 * author: Luis H. Ball Jr. <luisball@hey.com>
 * 
 * React hook that returns selected text and Selection object.
 * Note: the selection object does not log but is present.
 * 
 * For more on how this works, read the Window.getSelection() documentation:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
 */

import { useState, useEffect } from 'react';

export const useSelection = () => {
    const [selected, setSelected] = useState()

    const handleSelectionChange = () => {
        let selection;
        let text = '';

        if (document.getSelection) {
            selection = document.getSelection();
            text = selection.toString();
        } else if (document.selection && document.selection.type !== 'Control') {
            selection = document.selection.createRange();
            text = selection.text;
        }

        setSelected({ text, selection })
    };

    useEffect(() => {
        // use boolean to 'unsubscribe' event listener on dismount
        let isSubscribed = true;
        document.onselectionchange = () => isSubscribed && handleSelectionChange();

        return () => isSubscribed = false;
    }, [])

    return selected;
}