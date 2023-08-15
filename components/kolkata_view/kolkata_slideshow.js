"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import styles from './kolkata_slideshow.module.scss'

const SlideShow = () => {
    return (
        <div className={styles.slideshow}>
            <h2>Discover <span>Kolkata</span>: Where Tradition Meets Progress - Immerse Yourself in the Vibrant Setting of Our Conference Destination!</h2>
            <Swiper
                className={styles.swiper}
                spaceBetween={10}
                slidesPerView={2}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                //pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className='sl-img-wrapper'>
                        <img style={{ 'width': '100%', 'height': '30vw' }}
                            src="/victoria.jpg" alt='victoria' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sl-img-wrapper'>
                        <img style={{ 'width': '100%', 'height': '30vw' }}
                            src="/orange_taxi.jpg" alt='taxi' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sl-img-wrapper'>
                        <img style={{ 'width': '100%', 'height': '30vw' }}
                            src="/biswa_bangla.jpg" alt='biswa_bangla' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sl-img-wrapper'>
                        <img style={{ 'width': '100%', 'height': '30vw' }}
                            src="/howrah_bridge.jpg" alt='howrah_bridge' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sl-img-wrapper'>
                        <img style={{ 'width': '100%', 'height': '30vw' }}
                            src="/dalhousie.jpg" alt='dalhousie' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sl-img-wrapper'>
                        <img style={{ 'width': '100%', 'height': '30vw' }}
                            src="/princep.jpg" alt='princep' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SlideShow