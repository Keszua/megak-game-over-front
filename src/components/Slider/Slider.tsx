// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination, Zoom } from "swiper";

export const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination, Zoom]}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        className="mySwiper"
        zoom={true}
        loop={true}
      >
        <SwiperSlide>
            <div className="Slider_container" style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}>
                <div className="title" >
                    Slide 1
                </div>
                <div className="text" >
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                </div>
            </div>
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}

        </SwiperSlide>

        <SwiperSlide>
            <div className="Slider_container" style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-2.jpg)",
          }}>
                <div className="title" >
                    Slide 1
                </div>
                <div className="text" >
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                </div>
            </div>
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}

        </SwiperSlide>

        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}