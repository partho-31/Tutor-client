import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselSlide from "./CarouselSlide";
import img from '../photo/IMG-20230126-WA0078.jpg'
import img2 from '../photo/IMG-20230316-WA0079.jpg'
import img3 from '../photo/IMG-20230315-WA0028.jpg'

const Carousel = () => {
  const slides = [
    {
      Name: "Partho",
      Image: img,
      Subject: "Mathematics (Class 9–12)",
      Experience: "10+ Years",
      Statement: "Math is not just numbers, it’s logic, creativity, and fun!",
    },
    {
      Name: "Shahnoor",
      Image: img2,
      Subject: "English Language & Literature",
      Experience: "8 Years",
      Statement: "Language is power. Let’s unlock it together",
    },
    {
      Name: "Tanjil",
      Image: img3,
      Subject: " Physics (HSC & Admission)",
      Experience: "12+ Years Teaching",
      Statement: "Behind every phenomenon, there’s physics waiting to be discovered",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-pink-50 to-pink-100 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide
              name={slide.Name}
              image={slide.Image}
              sub={slide.Subject}
              experience={slide.Experience}
              statement={slide.Statement}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
