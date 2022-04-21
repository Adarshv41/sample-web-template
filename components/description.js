import Image from 'next/image'
import React from 'react'
import Container from './container'
import SectionTitle from './sectionTitle'

const Description = () => {
  return (
    <div>
        <Container className = "flex justify-between lg:gap-10">
            <div className=''>
                <h1 className='text-4xl font-bold text-gray-800'>  
                    Technology To Make Your
                    Greatest Impact.  
                </h1>
                <p className='py-5'>
                    Stackroots emphasis on investing in human capital and core skills.
                    With continuous innovation & improvement as our motto, 
                    we provide business development services, web-based creative designs and website developments, 
                    effective online marketing solutions thereby helping our clients to materialize their marketing goals. 
                </p>
                    <div className='mt-5'>
                        <a
                            href=''
                            rel='noopener'
                            className='w3-panel ml-4 px-8 py-5 text-lg font-medium text-center text-white bg-indigo-700 hover:bg-indigo-900 rounded-xl'>
                            Get Your Project 
                        </a>
                    </div>
            </div>
            <div className='p-8 mx-auto xl:px-0 w-full elementor-animation-grow flex item-center justify-center lg:w-1/2 '>
                <div className=''>
                    <img
                        src="/img/Icon.png"/>
                </div>
            </div>
        </Container>

        <Container
        className='px-10 py-10 lg:gap-10 justify-center '>
            <h1 className='text-4xl font-bold text-gray-800'>
            We Provides All Support For Better Solutions
            For Your Business
            </h1>
            <p className='mt-5'>
            We have associated with some of the top business brands to create 
            amazing products and solutions. Our eminent clientele is spread 
            across the world. Stackroots is your perfect partner to handle your 
            key operations with a passion to deliver prolific results without 
            compromising on quality at any stage.
            </p>
            <div className='mt-10'>
            <a 
            href=''
            rel='noopener'
            className='rounded-xl ml-4 px-8 py-5 text-lg font-medium text-center text-white bg-indigo-700 hover:bg-indigo-900'>
            Learn More
            </a>
            </div>
        </Container>

        <Container>
            <div>
                <h1 
                className='text-4xl'>
                    Most Affordable Website Development Company In Calicut
                </h1>
                <p 
                className='mt-5'>
                At Stackroots, we are engaged with diversified clients successfully in various verticals 
                such as Healthcare, Manufacturing, Education, Shopping, Logistics and
                 Supply chain, Entertainment, Sports, Fitness and Leisure, 
                 thereby enabling success and growth. Hence we are providing an affordable 
                 pricing for our client’s needs.
                </p>
                <div
                className='mt-10'>
                    <a
                    className='rounded-xl ml-4 px-8 py-5 text-lg text-center text-white bg-indigo-700 hover:bg-indigo:900'>
                        Check Pricing
                    </a>
                </div>
            </div>
        </Container>
        
    </div>
  )
}

export default Description