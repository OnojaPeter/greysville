import React from 'react'

const WhyChoose = () => {
    return (
        <section id="why-choose-us" className="py-10 md:py-20 px-4 md:px-16">
            <div className="text-center space-y-6 mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-[3rem] text-white">
                    Why Choose Us?
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
                    Discover why our tailored designs and academy training set us apart from the competition.
                    We focus on delivering excellence, inspiring creativity, and empowering individuals to express themselves.
                </p>
            </div>

            <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {[
                    {
                        title: "Premium Quality",
                        description: "Every piece is crafted with attention to detail and the highest standards.",
                    },
                    {
                        title: "Tailored Designs",
                        description: "Our custom designs are made to fit your style, size, and personality.",
                    },
                    {
                        title: "Experienced Instructors",
                        description: "Our fashion academy is led by skilled professionals passionate about teaching.",
                    },
                    {
                        title: "Affordable Pricing",
                        description: "Enjoy competitive prices without compromising on quality.",
                    },
                    {
                        title: "Creative Environment",
                        description: "Learn and design in a space that fosters innovation and individuality.",
                    },
                    {
                        title: "Proven Success",
                        description: "With numerous satisfied clients and graduates, our track record speaks for itself.",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-neutral-800 text-white p-3 md:p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
                    >
                        <h4 className="md:text-xl font-medium md:font-semibold md:mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default WhyChoose