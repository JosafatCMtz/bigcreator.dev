import React from 'react'

function Paragraph({ description, title }) {
    return (
        <>
            <h3 className='text-2xl font-headline'>{title}</h3>
            <p className='font-body'>{description}</p>
        </>
    )
}

export default Paragraph