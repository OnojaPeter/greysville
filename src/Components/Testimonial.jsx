import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {

    return (
        <section id="testimonials" className=" py-20 px-4 md:px-16">
            <div className="text-center space-y-5 mb-6 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-[3rem] line-height text-white">
                    Testimonials
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
                    Hear what our clients and students have to say about their experiences with us.
                </p>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="max-w-4xl mx-auto"
            >
                {[
                    {
                        message:
                            "I absolutely love the custom dress I got from them. The fit was perfect, and the attention to detail was outstanding!",
                        name: "Sophia Johnson",
                    },
                    {
                        message:
                            "The academy has been a life-changing experience for me. I've learned so much, and I feel ready to start my own fashion brand.",
                        name: "Gift",
                    },
                    {
                        message:
                            "The designs are unique, and the team is so professional. Highly recommend for anyone looking for top-notch quality!",
                        name: "Amina",
                    },
                ].map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-center text-black px-6 py-6 md:py-12 bg-neutral-200 rounded-lg shadow-lg">
                            <p className="text-lg italic mb-4">"{testimonial.message}"</p>
                            <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonial