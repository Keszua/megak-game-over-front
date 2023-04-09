import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination, Zoom } from "swiper";
import baner01 from '../../images/baner01.jpg';
import baner02 from '../../images/baner02.jpg';
import baner03 from '../../images/baner03.jpg';
import baner04 from '../../images/baner04.jpg';
import baner05 from '../../images/baner05.jpg';
import baner06 from '../../images/baner06.jpg';

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
            delay: 5000,
            disableOnInteraction: false,
        }}
        className="mySwiper"
        zoom={true}
        loop={true}
      >
        <SwiperSlide>
            <div className="Slider_container" style={{ backgroundImage:`url(${baner01})`}}>
                <div className="title" >
                    Malownicza okolica
                </div>
                <div className="text" >
                    Wypoczywaj na łonie natury
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="Slider_container" style={{ backgroundImage:`url(${baner02})`}}>
                <div className="title" >
                    Pakiet EKO
                </div>
                <div className="text" >
                    Gwarantujemy najnizsze ceny (gdy sam wykopiesz sobie grób).
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="Slider_container" style={{ backgroundImage:`url(${baner03})`}}>
                <div className="title" >
                    Szeroki wybór trumien
                </div>
                <div className="text" >
                dębowa, bukowa, sosnowa, karton
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="Slider_container" style={{ backgroundImage:`url(${baner04})`}}>
                <div className="title" >
                    Dodatkowe usługi
                </div>
                <div className="text" >
                    Odprowadzimy Cię z pieśnią na ustach: "Shaza doprowadzisz mnie do cmentarza"
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="Slider_container" style={{ backgroundImage:`url(${baner05})`}}>
                <div className="title" >
                    Gwarancja jakości
                </div>
                <div className="text" >
                    Nic nas nie powstrzyma, aby doprwadzić Cię do grobu!
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="Slider_container" style={{ backgroundImage:`url(${baner06})`}}>
                <div className="title" >
                    Pakiet premium
                </div>
                <div className="text" >
                    Dla takiego pogrzebu dasz się zabić! Niech sąsiedzi Ci zazdroszczą!
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}