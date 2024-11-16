import React from 'react'

const Hero = () => {
  return (
    <section className='flex justify-center items-center  max-w-[1440px] mx-auto'>
        <div className='flex justify-center items-center w-full -mt-10 h-screen relative'>
            <div className='overflow-hidden w-full h-full absolute'>
                <div className='bg-black/60 h-full w-full absolute'></div>
                <img className='w-full h-full object-cover hidden md:block' src="/images/hero_desktop.webp" alt="" />
                <img className='w-full h-full object-cover md:hidden' src="/images/hero_mobile.webp" alt="" />
            </div>

            <div className='relative w-full '>
                <div className='text-white relative hidden md:flex place-items-end flex-col md:mx-28 '>
                    <div className='max-w-xs'>
                        <h3 className='uppercase font-medium'>we're in nigeria <br /> we're global</h3>
                        <p className='text-xs md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, minus? Earum, ex dolores. Dicta esse consectetur qua repudiandae maiores, consectetur officia?</p>
                    </div>
                </div>
                <div className='uppercase text-white absolute w-full'>
                    <h1 className='text-[3.2em] md:text-[3.2em] font-medium font-mono md:mx-28'>Greysville designs</h1>

                    <div className="overflow-hidden w-full relative">
                        <div className="animate-marquee "> 
                            <span className="uppercase font-semibold  whitespace-nowrap">
                                design + development + Fashion academy + Production +
                            </span>
                            <span className="uppercase font-semibold  whitespace-nowrap">
                                design + development + Fashion academy + Production +
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero