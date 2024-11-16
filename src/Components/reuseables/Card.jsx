import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Card = ({ products }) => {
    return (
        <div className='card-container'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                className='product-carousel'
                breakpoints={{
                    // when window width is >= 640px (mobile)
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px (tablet)
                    768: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 1024px (desktop)
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide className='mb-10 lg:mb-16' key={index}>
                        <div className="slide-content">
                            <div className='h-[300px] md:h-[400px] '>
                                <img className='object-cover h-full w-full ' src={`images/${product.image}`} alt="" />
                            </div>

                            <h3 className="mt-5 uppercase text-lg">{product.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Card