import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import content from './content'

function Team() {
    const title = content.bigcreatorteam.title
    const ceoTitle = content.bigcreatorteam.ceo.title
    const ceoDescription = content.bigcreatorteam.ceo.description
    const ceoSocial = content.bigcreatorteam.ceo.social_media
    const ctoTitle = content.bigcreatorteam.cto.title
    const ctoDescription = content.bigcreatorteam.cto.description
    const ctoSocial = content.bigcreatorteam.cto.social_media

    return (
        <div id='team' className="bg-cyber-yellow text-smoky-black">
            <div className='flex flex-row p-6 items-center justify-center'>
                <h2 className='justify-items-center text-6xl font-headline'>{title}</h2>
            </div>
            <div className='flex flex-row'>
                <div className='basis-1/2 '>
                    <div className='flex flex-row items-center justify-center'>
                        <StaticImage alt='CEO Image' src='../images/ceo_image.png' className='duration-700 hover:-translate-y-1 hover:translate-x-1' />
                    </div>
                    <div className='flex flex-row items-center justify-center pb-6'>
                        <h3 className='text-2xl font-headline'>{ceoTitle}</h3>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <h4 className='text-xl font-subheadline'>"{ceoDescription}"</h4>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <h4 className='text-lg font-body text-smoky-black/70'>{ceoSocial}</h4>
                    </div>
                </div>
                <div className='basis-1/2 '>
                    <div className='flex flex-row items-center justify-center'>
                        <StaticImage alt='CEO Image' src='../images/cto_image.png' className='duration-700 hover:-translate-y-1 hover:translate-x-1' />
                    </div>
                    <div className='flex flex-row items-center justify-center pb-6'>
                        <h3 className='text-2xl font-headline'>{ctoTitle}</h3>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <h4 className='text-xl font-subheadline'>"{ctoDescription}"</h4>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <h4 className='text-lg font-body text-smoky-black/70'>{ctoSocial}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
