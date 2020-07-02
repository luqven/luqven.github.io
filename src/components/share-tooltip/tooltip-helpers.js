/*!
* license: MIT
* Heavily inspired by, Share Selected Text
* url: https://github.com/VincentLoy/share-selected-text
* author: Vincent Loy <vincent.loy1@gmail.com>
* adapted for personal use by: Luis H. Ball Jr. <luisball@hey.com>
*/

import styled from 'styled-components'
// const LIGHT_BLUE = '#6CB4EE'
// const CYAN = '#00FFFF';
const DALLAS_BLUE = '#041E42';
const DALLAS_BLUE_TRANSPARENT = '#041e4254';

// helpers
// accepts string designating link type, returns link url
export const createShareLink = (type, title, description, text, pageUrl) => {
    if (!text) { return '' }

    const twitterUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${description}:%0"${text}"&via=luishbjr1`;
    const emailUrl = `mailto:name@email.com?subject=${title}&body="${text}"%0D%0A...%0D%0A${description}, ${pageUrl}`;
    const shareUrl =  type === 'twitter' ? twitterUrl : emailUrl;

    return shareUrl;
};

// styled components
export const TooltipContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
`;

export const LinksContainer = styled.div`
    top: ${props => props.location.top + 'px'};
    left: ${props => props.location.left + 'px'};
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 120px;
    height: 35px;
    background-color: ${DALLAS_BLUE};
    box-shadow: -1px 1px 4px 1px ${DALLAS_BLUE_TRANSPARENT};
    border-radius: 4px;
    padding-left: 5px;
    padding-right: 5px;
`

export const RotatedSquare = styled.div`
    background: ${DALLAS_BLUE};
    transform: rotate(45deg);
    width: 25px;
    height: 25px;
    position: absolute;
    top: ${props => props.location.top + 15 + 'px'};
    left: ${props => props.location.left + 50 + 'px'};
`
