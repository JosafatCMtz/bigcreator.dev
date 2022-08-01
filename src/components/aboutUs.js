import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import content from './content'
import Paragraph from './paragraph'

function AboutUs() {
    const title = content.about_us.we_love.title
    const description = content.about_us.we_love.description
    const misionTitle = content.about_us.mision.title
    const misionDescription = content.about_us.mision.description
    const visionTitle = content.about_us.vision.title
    const visionDescription = content.about_us.vision.description
    return (
        <div className="bg-cyber-yellow text-smoky-black">
            <div className='flex flex-row p-6'>
                <div className='basis-1/2 flex items-center justify-center'>
                    <StaticImage alt='A bigcreator guy tech image' src="../images/tech-guy.jpeg" className='rounded-lg w-[540px] duration-700 hover:-translate-y-1 hover:translate-x-1' />
                </div>
                <div className='basis-1/2 p-6'>
                    <h2 className='text-6xl font-headline'>About Us 👋🏻</h2>
                    <div className='basis-1/2 pt-6'>
                        <Paragraph title={title} description={description} />
                    </div>
                    <div className='flex flex-row pt-6'>
                        <div className='basis-1/2 mr-6'>
                            <Paragraph title={misionTitle} description={misionDescription} />
                        </div>
                        <div className='basis-1/2'>
                            <Paragraph title={visionTitle} description={visionDescription} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs