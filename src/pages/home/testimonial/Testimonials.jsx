import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://i.ibb.co/7bQQYkX/customer-1.png",
    },
    {
      id: 2,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://i.ibb.co/7bQQYkX/customer-1.png",
    },
    {
      id: 3,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://i.ibb.co/7bQQYkX/customer-1.png",
    },
    {
      id: 4,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://i.ibb.co/7bQQYkX/customer-1.png",
    },
    {
      id: 5,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://i.ibb.co/7bQQYkX/customer-1.png",
    },
  ];
  return (
    <div className="container">
      <div class="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
        <p class="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
          Our customers loves our Services
        </p>
        <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
          Testimonials
        </h2>
        <p class="my-6 text-xl font-medium text-gray-500">
          Don't just take our word for it, read from our extensive list of case
          studies and customer testimonials.
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
              <div className="flex flex-col pr-8">
                <div className="relative pl-12">
                  <svg
                    className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                  </svg>
                  <p className="mt-2 text-base text-gray-600">
                    {testimonial.comment}
                  </p>
                </div>

                <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                  {testimonial.name}{" "}
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                    - Patient
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
              </div>
              <img
                className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                src={testimonial.img}
                alt=""
              />
            </blockquote>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
