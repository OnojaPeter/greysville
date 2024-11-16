import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from 'react-icons/go'

const Deal = () => {
  return (
    <section className='flex justify-center items-center max-w-[1440px] mx-auto h-full py-3 md:py-20 bg-gray-100'>
        <div className='flex flex-col md:flex-row gap-3 md:gap-10 justify-center items-center w-full mx-3'>
            <Link to='academy' className='relative max-w-[600px] rounded-md overflow-hidden'>
                <div className='h-full w-full bg-black/50 md:bg-black/50 absolute top-0'></div>
                <img className='w-full md:h-[350px] md:w-[600px] object-cover object-top ' src="/images/design1.jpg" alt="" />
                <div className='absolute bottom-5 px-5 z-10 flex items-center justify-between w-full'>
                    <h4 className='uppercase  text-white font-normal text-3xl md:text-4xl'>fashion academy</h4>
                    <span className='flex items-center justify-center w-10 h-10 bg-transparent border-2 border-white rounded-full'>
                        <GoArrowUpRight className='text-white text-2xl' />
                    </span>
                </div>
            </Link>

            <Link to='design' className='relative md:max-w-[400px] w-full rounded-md overflow-hidden'>
                <div className='h-full w-full bg-black/40 md:bg-black/40 absolute top-0'></div>
                <img className='h-[250px] w-full md:h-[350px] md:w-[400px] object-cover object-center ' src="/images/img_2.webp" alt="" />

                <div className='absolute bottom-5 px-5 z-10 flex items-center justify-between w-full'>
                    <h4 className='uppercase  text-white font-normal text-3xl md:text-4xl'>fashion design</h4>
                    <span className='flex items-center justify-center w-10 h-10 bg-transparent border-2 border-white rounded-full'>
                        <GoArrowUpRight className='text-white text-2xl' />
                    </span>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default Deal