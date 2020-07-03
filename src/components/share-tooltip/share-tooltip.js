/*!
* ShareTooltip Component
* license: MIT
* author: Luis H. Ball Jr. <luisball@hey.com>
* heavily inspired by: Share Selected Text, url: https://github.com/VincentLoy/share-selected-text
*/

import React, { useState, useEffect } from 'react'

import { useSelection } from "../../utils/useSelection"
import {
    createShareLink,
    TooltipContainer,
    LinksContainer,
    RotatedSquare } from "./tooltip-helpers"

// constants
const TOOLTIP_HEIGHT = 35;
const FACTOR = 1.33;

const ShareTooltip = ({ postTitle, postDescription }) => {
    const selected = useSelection();
    const [location, setLocation] = useState({top: '', left: ''});
    const [pageUrl, setPageUrl] = useState('');
    const [shareApi, setShareApi] = useState({supported: false, navigator: null});

    // store the page url
    useEffect(() => {
        setPageUrl(window.location.href)
        setShareApi({supported: !!navigator.share, navigator: navigator, clicked: false})
    }, [])

    // whenever selection changes calculate new top & left offsets
    useEffect(() => {
        const position = document.documentElement.scrollTop || document.body.scrollTop;
        const body = document.querySelector('body');

        if (selected && selected.text.length) {
            let range = selected.selection.getRangeAt(0);
            let rect = range.getBoundingClientRect();
            setLocation({
                top: position + rect.top - TOOLTIP_HEIGHT * FACTOR,
                left: rect.left + rect.width / 2 - body.getBoundingClientRect().width / 15,
            })
        }

    }, [selected])

    // open share window on icon click
    const shareLink = (e, type) => {
        e.preventDefault();
        const url = e.currentTarget.href;

        if (type === 'shareButton') {
            navigator.share({ url: pageUrl, title: postTitle })
        } else {
            const windowFeatures = 'status=no,menubar=no,location=no,scrollbars=no,width=720,height=540';
            window.open(url, 'Share this post', windowFeatures);
        }
    }

    // if no current selection render nothing
    if (!selected || !selected.text || !selected.text.length || selected.text.length < 1) {
        return null;
    }

    return (
        <TooltipContainer className={`share-tooltip-container ${selected ? '' : 'hidden'}`}>
            <RotatedSquare location={location}/>
            <LinksContainer location={location}>
                <a href={createShareLink('twitter', postTitle, postDescription, selected.text, pageUrl)} onClick={(e) => shareLink(e)}>
                    <p style={{ marginTop: 10, color: 'white' }}>
                        <span className="emoji" aria-label="twitter" role="img">🐦</span>
                    </p>
                </a>
                <a href={createShareLink('email', postTitle, postDescription, selected.text, pageUrl)} onClick={(e) => shareLink(e)}>
                    <p style={{ marginTop: 10, color: 'white' }}>
                        <span className="emoji" aria-label="email" role="img">✉️</span>
                    </p>
                </a>
                {shareApi.supported && 
                <a href={createShareLink('email', postTitle, postDescription, selected.text, pageUrl)} onClick={(e) => shareLink(e, 'shareButton')}>
                    <p style={{ marginTop: 10, color: 'white' }}>
                        <span className="emoji" aria-label="email" role="img">🧰</span>
                    </p>
                </a>}
            </LinksContainer>
        </TooltipContainer>
    )
}

export default ShareTooltip
