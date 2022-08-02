import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import ContactForm from './contactForm'
import content from './content'

function Contact() {
    const title = content.contact.title
    return (
        <div id="contact" className="bg-coltured text-smoky-black">
            <div className="flex flex-row">
                <div className="basis-1/2 flex items-center justify-center">
                    <StaticImage src="../images/telephone-cover.png" alt="A telephone image" className="w-[540px] h-[540px]" />
                </div>
                <div className='basis-1/2 pt-6 '>
                    <h2 className='text-6xl font-headline pb-6'>{title}</h2>
                    <div className="flex flex-row items-center justify-center">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact