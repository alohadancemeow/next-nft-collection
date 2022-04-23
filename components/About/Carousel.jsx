import React from 'react'
import styled from 'styled-components'
import { Image } from 'antd';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

import { ImageData } from './Data'


const Carousel = () => {
    return (
        <Container>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                pagination={{
                    type: 'fraction'
                }}
                scrollbar={{
                    draggable: true
                }}
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {ImageData.map(item => (
                    <SwiperSlide key={item.id}>
                        <ImageBox
                            src={item.src}
                            alt={item.name}
                            preview={false}
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
        </Container>
    )
}

export default Carousel

// styles here.
const Container = styled.div`
    width: 30vw;
    height: 50vh;

    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-color: ${({ theme }) => theme.textColors.carouselColor};
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-button-next {
        color: ${({ theme }) => theme.textColors.text};
        right: 0;
        width: 3.5rem;
        background-image: url('/Arrow.svg');
        background-position: center;
        background-size: cover;

        &::after {
            display: none;
        }
    }
    .swiper-button-prev {
        color: ${({ theme }) => theme.textColors.text};
        left: 0;
        width: 3.5rem;
        background-image: url('/Arrow.svg');
        background-position: center;
        background-size: cover;
        transform: rotate(180deg);

        &::after {
            display: none;
        }
    }
`

const ImageBox = styled(Image)`
     &.ant-image-img {
        /* width: 580px;
        height: 675px; */
        object-fit: cover;
    }
`