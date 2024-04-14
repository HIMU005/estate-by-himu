import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import { useContext } from 'react';
// import { AuthContext } from '../routes/provider/AuthProvider';
// import Slide from './Slide';

const Banner = () => {
    // const { fakeData } = useContext(AuthContext);
    // console.log(typeof fakeData);
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >


                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default Banner;