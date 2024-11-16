import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const About = () => {
    const [showCounts, setShowCounts] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowCounts(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);
  return (
    <section 
        id='about' 
        ref={sectionRef}
        className='flex flex-col justify-center items-center max-w-[1440px] mx-auto h-full space-y-8 md:space-y-16 py-20'
    >
        <div className='text-center space-y-3 '>
            <h2 className='text-2xl lg:text-[3em] line-height text-white'>About us</h2>
            <p className='max-w-xs md:max-w-xl mx-auto text-gray-300 text-xs md:text-base'>
                Celebrating creativity and craftsmanship, we specialize in bespoke fashion design and nurturing the next generation of designers through our academy.                 
            </p>
        </div>
        <div className='flex justify-center items-center w-full'>
            <div className='flex flex-col lg:flex-row justify-center md:gap-20 text-gray-300'>
                <div className='max-w-sm space-y-6 flex flex-col items-center md:items-start'>
                    <div className='space-y-2'>
                        {/* <h4 className='capitalize text-base md:text-lg font-medium'>the beginning of our journey</h4> */}
                        <div className='flex  gap-4'>
                            {/* <div className='-rotate-90 flex items-center text-sm md:text-base'><span>-</span> <p>2020</p></div> */}
                            <p className='text-sm md:text-base'>
                                At our core, we create timeless, tailored pieces that combine premium fabrics with intricate craftsmanship. Each design is a blend of elegance, tradition, and modern flair, ensuring every creation tells a unique story.
                            </p>
                        </div>
                    </div>

                    <div className=" z-[-2] h-[100px] md:h-[200px] w-full bg-[radial-gradient(#ffffff55_1px,transparent_1px)] bg-[size:20px_20px]">
                        <div className='flex justify-end items-center h-full'>
                            <div className='flex flex-col mx-5'>
                                {/* <span className='text-3xl md:text-5xl '>100+</span>  */}
                                {showCounts && (
                                        <CountUp
                                            start={1}
                                            end={100}
                                            duration={2.5}
                                            className='text-3xl md:text-5xl'
                                        />
                                )}
                                <h4 className='text-base font-medium'>Graduates Shaping Fashion</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-sm space-y-6 flex flex-col items-center md:items-start'>               
                    <div className=" z-[-2] h-[100px] md:h-[200px] w-full bg-[radial-gradient(#ffffff55_1px,transparent_1px)] bg-[size:20px_20px]">
                        <div className='flex md:justify-end items-center h-full'>
                            <div className='flex flex-col mx-5'>
                                {/* <span className='text-3xl md:text-5xl '>150+</span>  */}
                                {showCounts && (
                                        <CountUp
                                            start={1}
                                            end={150}
                                            duration={3}
                                            className='text-3xl md:text-5xl'
                                        />
                                )}
                                <h4 className='text-base font-medium'>Tailored Creations</h4>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        {/* <h4 className='capitalize text-base md:text-lg font-medium'>who are we now?</h4> */}

                        <div className='flex gap-4'>
                            {/* <div className='-rotate-90 flex items-center text-sm md:text-base'><span>-</span> <p>2024</p></div> */}
                            <p className='text-sm md:text-base'>
                                Beyond creating tailored pieces, our fashion academy is dedicated to training aspiring designers to excel in the world of fashion. We guide them in mastering techniques, building confidence, and pursuing their creative dreams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About