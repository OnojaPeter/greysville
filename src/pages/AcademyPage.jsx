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

const AcademyPage = () => {
    return (
        <section id="academy" className=" pb-12 space-y-16">
            {/* Page Header */}
            <header className="relative h-[400px] md:h-[500px] w-full flex justify-center items-center">
                {/* Background Banner Image */}
                <img
                    src="/images/design1.jpg"
                    alt="Fashion Academy Banner"
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                />

                {/* Gradient Overlay for Extra Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>

                {/* Text Content */}
                <div className="relative z-10 text-center text-white space-y-2 md:space-y-4 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Welcome to the Academy</h1>
                    <p className="text-lg md:text-xl">
                        Transforming Creativity into Mastery — Your Journey to Becoming a World-Class Designer Begins Here.
                    </p>
                </div>
            </header>      

            {/* Gallery Section */}
            <section className="max-w-[1440px] mx-auto px-4">
                <h2 className="mb-5 md:mb-12 text-xl md:text-3xl font-bold text-center text-gray-200">Our Academy in Pictures</h2>

                <Card products={images} />

                <div className="text-center mt-5">
                    <button className="bg-neutral-900 text-white py-2 px-6 rounded-lg hover:bg-neutral-700">
                        View More Pictures
                    </button>
                </div>
            </section>

             {/* Things Prospective Students Should Know */}
             <section className="max-w-[1440px] mx-auto px-4 space-y-6">
                <h2 className="text-xl md:text-3xl font-bold text-center text-gray-200">What Prospective Students Should Know</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    <li className="bg-gray-100 p-3 md:p-6 rounded-lg shadow-md">
                        <p className="text-gray-700">All classes are hands-on with practical projects for every level.</p>
                    </li>
                    <li className="bg-gray-100 p-3 md:p-6 rounded-lg shadow-md">
                        <p className="text-gray-700">No prior experience is required for the Beginner class.</p>
                    </li>
                    <li className="bg-gray-100 p-3 md:p-6 rounded-lg shadow-md">
                        <p className="text-gray-700">Our instructors are industry professionals with years of experience.</p>
                    </li>
                    <li className="bg-gray-100 p-3 md:p-6 rounded-lg shadow-md">
                        <p className="text-gray-700">Flexible payment options are available for all classes.</p>
                    </li>
                    <li className="bg-gray-100 p-3 md:p-6 rounded-lg shadow-md">
                        <p className="text-gray-700">You will receive a certification upon successful completion.</p>
                    </li>
                    <li className="bg-gray-100 p-3 md:p-6 rounded-lg shadow-md">
                        <p className="text-gray-700">Access to industry-standard equipment and resources.</p>
                    </li>
                </ul>
            </section>

            {/* Pricing Section */}
            <section className="max-w-[1440px] mx-auto px-4 space-y-5 md:space-y-12">
                <h2 className="text-xl md:text-3xl font-bold text-center text-gray-200">Training Levels & Pricing</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Beginner */}
                    <div className="max-w-sm bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-center text-gray-900">Beginner</h3>
                        <p className="text-center text-gray-600">$300 / Course</p>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>✔️ Introduction to Sewing</li>
                            <li>✔️ Fabric Selection Basics</li>
                            <li>✔️ Fundamental Pattern Drafting</li>
                            <li>✔️ Sewing Machine Operation</li>
                        </ul>
                    </div>

                    {/* Intermediate */}
                    <div className="max-w-sm bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-center text-gray-900">Intermediate</h3>
                        <p className="text-center text-gray-600">$500 / Course</p>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>✔️ Advanced Pattern Drafting</li>
                            <li>✔️ Custom Fitting Techniques</li>
                            <li>✔️ Styling and Finishing</li>
                            <li>✔️ Creating Casual & Office Wears</li>
                        </ul>
                    </div>

                    {/* Advanced */}
                    <div className="max-w-sm bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-center text-gray-900">Advanced</h3>
                        <p className="text-center text-gray-600">$800 / Course</p>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>✔️ Couture Techniques</li>
                            <li>✔️ Bridal and Evening Wear</li>
                            <li>✔️ Professional Portfolio Creation</li>
                            <li>✔️ Entrepreneurship in Fashion</li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default AcademyPage