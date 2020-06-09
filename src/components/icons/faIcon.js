import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkedIn = ({ icon, size }) => {
    return (
        <div style={{padding: 5}}>
            <FontAwesomeIcon icon={icon} size={size} />
        </div>
    )
}

export default LinkedIn
