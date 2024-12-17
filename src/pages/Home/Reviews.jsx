import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Make sure both modules are imported
import "swiper/css";
import "swiper/css/navigation"; // Ensure this CSS is imported

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../components/SectionTitle";

// Import the fake reviews JSON
import fakeReviews from "../../assets/reviews.json";

const Reviews = () => {
  return (
    <section className="my-20">
      <SectionTitle
        subHeading="What Our Clients Say"
        heading={"Testimonials"}
      ></SectionTitle>

      <Swiper
        navigation={true} // Enables the arrows for navigation
        modules={[Pagination, Navigation]} // Ensure Navigation is added here
        className="mySwiper"
      >
        {fakeReviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
