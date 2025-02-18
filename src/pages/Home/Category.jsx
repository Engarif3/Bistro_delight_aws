import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <section className="mx-16">
      <SectionTitle
        subHeading={"From 10.00 am to 10.00 pm"}
        heading={"Check Different Categories"}
      ></SectionTitle>
      <Swiper
        slidesPerView={5}
        spaceBetween={24}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            <p className="mb-4">Salads</p>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            <p className="mb-4">Pizzas</p>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            <p className="mb-4"> Soups</p>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            <p className="mb-4">Desserts</p>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            <p className="mb-4">Noodles</p>
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
