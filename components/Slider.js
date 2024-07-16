'use client'

// import React from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';

// export default function CCMS_Slider() {
//     const images = [
//         '6.png',
//         '7.png'
//     ]
//     return (
//         <>
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 loop={true}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 navigation={true}
//                 modules={[Pagination, Navigation]}
//                 className={styles.swiper}
//             >
//                 {
//                     (images) ?
//                         images.map((image) => (
//                             <SwiperSlide className={styles.swiperSlide}>
//                                 <img
//                                     className={styles.swiperSlideImg}
//                                     key={image}
//                                     src={`/CCMS/${image}`} // Assuming no extensions in filenames
//                                     alt={`Image ${image}`}

//                                 />
//                             </SwiperSlide>
//                         ))
//                         :
//                         <div>Loading...</div>
//                 }

//             </Swiper>
//         </>
//     );
// }

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import styles from "../app/page.module.css";

export default function Slider({ images }) {

    return (
        <>
            <Swiper
                loop={true}
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className={styles.swiper}
            >
                {
                    (images) ?
                        images.map((image) => (
                            <SwiperSlide key={image} className={styles.swiperSlide}>
                                <img
                                    className={styles.swiperSlideImg}
                                    key={image}
                                    src={`/${image}`}
                                    alt={`Image ${image}`}
                                />
                            </SwiperSlide>
                        ))
                        :
                        <div>Loading...</div>
                }
            </Swiper>
        </>
    );
}

