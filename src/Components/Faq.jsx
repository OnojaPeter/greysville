import React, { useState } from 'react'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'

const faqs = [
    { 
        question: 'what states are you located in?', 
        answer: 'Benue, Makurdi  Nigeria' },
    { 
        question: 'do you offer oline programmes?', 
        answer: 'Unfortunately, online classes arent available' },
    { 
        question: 'do you teach unisex fashion design?', 
        answer: "we offer just women's fashion design training" },
    { 
        question: 'can i join the training whenever i want?', 
        answer: 'we register & admit in batches' },
    { 
        question: 'what days are classes?', 
        answer: 'mondays to wednesdays are lecture days.' },
    { 
        question: 'are part time or weekend programmes available?', 
        answer: "no, they aren't available" },

    { 
        question: 'can i pay in installments?', 
        answer: 'full payment upfront only' },
    // { 
    //     question: 'What materials are the clothes made from?', 
    //     answer: 'I use high-quality Native wears and plain materials known for their durability and vibrant patterns.' 
    // },
    // { 
    //     question: 'Are there any current promotions or discounts', 
    //     answer: 'Yes! I periodically offer discounts on selected items or when purchasing multiple pieces. Please check my [website/social media] for current offers.' 
    // },
]

const Faq = () => {
    const [indexClicked, setIndexClicked] = useState(null)

    const handleClick = (index) => {
        if (index === indexClicked) {
            return setIndexClicked(null)
        }
        setIndexClicked(index)
    }

    return (
        <section id='faqs' className='py-10 flex justify-center items-center max-w-[1440px] mx-auto h-full bg-transparent'>

            <div className='flex justify-center items-center w-full '>
                <div className='space-y-10'>
                    {/* <h2 className='text-center text-2xl lg:text-[3em] line-height text-white'>FAQs</h2> */}

                    <div className='max-w-4xl w-full text-gray-300'>
                        <h5 className='mb-2 font-bold md:text-2xl'>For Academy:</h5>
                        {faqs.slice(0, 7).map((faq, index) => {
                            return (
                                <div key={index} className='space-y-2 border border-gray-800 p-2 '>
                                    <div onClick={() => handleClick(index)} className='flex items-start w-full cursor-pointer border border-gray-600 p-2'>
                                        <h4 className='max-w-[300px] w-full md:w-[600px] md:max-w-[600px] md:uppercase text-sm font-semibold'>{faq.question}</h4>
                                        <button className=''><MdOutlineArrowDropDownCircle className={`text-2xl text-gray-300 ${indexClicked === index && 'rotate-180'}`} /></button>
                                    </div>
                                    {indexClicked === index &&
                                        <p className='max-w-[300px] w-full md:w-[600px] md:max-w-[600px] px-2 text-sm md:text-base'>{faq.answer}</p>
                                    }
                                </div>
                            )
                        })}

                        {/* <h5 className='my-2 font-bold'>For Designs:</h5>
                        {faqs.slice(7, 9).map((faq, index) => {
                            return (
                                <div key={index} className='space-y-2 border border-gray-800 p-2 '>
                                    <div onClick={() => handleClick(index)} className='flex items-start w-full cursor-pointer border border-gray-600 p-2'>
                                        <h4 className='max-w-[300px] w-full md:max-w-[500px] md:uppercase text-sm font-semibold'>{faq.question}</h4>
                                        <button className=''><MdOutlineArrowDropDownCircle className={`text-2xl text-gray-300 ${indexClicked === index && 'rotate-180'}`} /></button>
                                    </div>
                                    {indexClicked === index &&
                                        <p className='max-w-[300px] w-full md:max-w-[500px] px-2 text-sm md:text-base '>{faq.answer}</p>
                                    }
                                </div>
                            )
                        })} */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq