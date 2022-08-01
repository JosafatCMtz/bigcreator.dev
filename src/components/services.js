import React from 'react'
import content from './content'
import Paragraph from './paragraph'
import { StaticImage } from 'gatsby-plugin-image'

export default function Services() {

    const title = content.services.title
    const technologytTtle = content.services.technology.title
    const technologyDescription = content.services.technology.description
    const creativitytTtle = content.services.creativity.title
    const creativityDescription = content.services.creativity.description
    const mobileAppStrategytTtle = content.services.mobile_app_strategy.title
    const mobileAppStrategyDescription = content.services.mobile_app_strategy.description
    return (
        <div className="bg-coltured text-smoky-black">
            <div className='flex flex-row p-6'>
                <div className='basis-1/2 p-6'>
                    <h2 className='text-6xl font-headline'>{title}</h2>
                    <div className='basis-1/2 pt-6'>
                        <Paragraph title={technologytTtle} description={technologyDescription} />
                    </div>
                    <div className='flex flex-row pt-6'>
                        <div className='basis-1/2 mr-6'>
                            <Paragraph title={creativitytTtle} description={creativityDescription} />
                        </div>
                        <div className='basis-1/2'>
                            <Paragraph title={mobileAppStrategytTtle} description={mobileAppStrategyDescription} />
                        </div>
                    </div>
                </div>
                <div className='basis-1/2 flex items-center justify-center'>
                    <StaticImage alt='A bigcreator guy tech image' src="../images/services-guys.jpeg" className='rounded-lg h-[360px] w-[540px] duration-700 hover:translate-y-1 hover:translate-x-1' />
                </div>
            </div>
        </div>
    )
}
