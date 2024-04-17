import { useContext, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AuthContext } from '../routes/provider/AuthProvider';
import Slide from './Slide';


const Banner = () => {
    const { fakeData } = useContext(AuthContext)

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='max-w-90vw'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                scrollbar={{ draggable: true }}
            >
                {
                    fakeData.map(fakeDatum => <SwiperSlide key={fakeDatum.id}>
                        <Slide fakeDatum={fakeDatum}></Slide>
                    </SwiperSlide>)
                }

                {/* timer part here */}
                <div className="autoplay-progress w-16 h-16" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" className='text-xs'>
                            <tspan ref={progressContent}></tspan>
                        </text>
                    </svg>
                </div>
            </Swiper>
        </div >
    );
};

export default Banner;