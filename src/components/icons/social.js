import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

import FaIcon from "./faIcon"

const Social = () => {
    return (
        <div className="social-icons" style={{ display: 'flex', flexDirection: 'row' }}>
            <a href="https://github.com/luqven">
                <FaIcon icon={faGithub} size="2x" />
                <p style={{ paddingRight: 15 }}>GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/luisballjr/">
                <FaIcon icon={faLinkedinIn} size="2x" />
                <p style={{ paddingRight: 15 }}>LinkedIn</p>
            </a>
            <a href="https://drive.google.com/file/d/1ENwQMcwDOktyqNsOCMdTMVHKt69JLOs0/view?usp=sharing">
                <FaIcon icon={faFileAlt} size="2x" />
                <p style={{ paddingRight: 15 }}>Resume</p>
            </a>
            <a href="mailto:luishballjr@gmail.com">
                <FaIcon icon={faMailBulk} size="2x" />
                <p style={{ paddingRight: 15 }}>Contact Me</p>
            </a>
        </div>
    )
}

export default Social
