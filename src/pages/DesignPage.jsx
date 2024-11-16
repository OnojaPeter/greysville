import Card from "../Components/reuseables/Card"

const images = [
    { image: 'img_2.webp', name: '' },
    { image: 'img_3.webp', name: '' },
    { image: 'img_4.webp', name: '' },
    { image: "img_5.webp", name: "" },
    { image: "img_9.webp", name: "" },
    { image: 'img_10.webp', name: '' },
    { image: 'img_11.webp', name: '' },
    { image: "img_12.webp", name: "" },
]

const DesignPage = () => {
    return (
        <div className="w-full h-full">
            {/* Header Banner */}
            <header className="relative h-[400px] md:h-[500px] w-full flex justify-center items-center">
                <img
                    src="/images/img_2.webp"
                    alt="Custom Designs Banner"
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
                <div className="relative z-10 text-center text-white space-y-2 md:space-y-4 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Tailored to Perfection</h1>
                    <p className="text-lg md:text-xl">
                        Explore our custom designs and bring your unique vision to life.
                    </p>
                </div>
            </header>

            {/* Description Section */}
            <section className="py-12 px-4 md:px-20 text-center space-y-3 md:space-y-6">
                <h2 className="text-xl md:text-3xl font-bold text-neutral-200">Create Your Perfect Outfit</h2>
                <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
                    At our studio, we specialize in creating bespoke clothing that reflects your personality and style. From initial sketches to the final masterpiece, our designers work with you every step of the way to ensure your outfit is truly one-of-a-kind. Whether it's for a wedding, formal event, or everyday elegance, we craft designs tailored to your exact measurements and preferences.
                </p>
                <button
                    className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition duration-300">
                    Contact Us for Your Custom Design
                </button>
            </section>

            {/* Design Gallery Section */}
            <section className="max-w-[1440px] mx-auto py-12 px-4 space-y-6">
                <h2 className="text-xl md:text-3xl font-bold text-center text-neutral-200">Our Creations</h2>
                <Card products={images} />
                <div className="text-center">
                    <button
                        className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition duration-300">
                        View More Designs
                    </button>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-12 px-4 md:px-20 bg-gray-100 space-y-3 md:space-y-6">
                <h2 className="text-xl md:text-3xl font-bold text-center text-neutral-900">Ready to Get Started?</h2>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto text-center">
                    Let's create something extraordinary together! Contact us today to discuss your ideas, share your measurements, and begin crafting your dream outfit.
                </p>
                <div className="text-center">
                    <button
                        className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition duration-300">
                        Contact Us
                    </button>
                </div>
            </section>
        </div>

    )
}

export default DesignPage