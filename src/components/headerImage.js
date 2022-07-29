import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import Pattern from "../images/pattern.svg"

function HeaderImage() {
    return (
        <>
            <div className=''>
                <div className="wave-container">
                    <h1>Hello, world!</h1>
                    <p>Check out my awesome waves!</p>
                    <Pattern className='' />
                </div>
            </div>
        </>
    )
}

export default HeaderImage