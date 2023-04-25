import React from "react";
import cavity from "../../../assets/cavity.svg";
import fluoride from "../../../assets/fluoride.svg";
import whitening from "../../../assets/whitening.svg";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description:
        "Fluoride helps prevent tooth decay by making tooth enamel more resistant to acids in mouth.",
      img: fluoride,
    },
    {
      id: 2,
      title: "Cavity Filling",
      description:
        "A dental filling is a way to restore your tooth back to its normal shape and size.",
      img: cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      description:
        "Teeth whitening is a popular dental procedure that can lighten the color of your teeth.",
      img: whitening,
    },
  ];

  return (
    <div
      id="features"
      class="relative w-full px-8 md:py-5 lg:py-10 xl:py-20 xl:px-0"
    >
      <div class="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
        <p class="my-3 text-base font-medium tracking-tight text-indigo-500 uppercase">
          Best Medical Services
        </p>
        <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
          Our Services
        </h2>
        <p class="my-4 text-xl font-medium text-gray-500">
          We provide the best dental care services in the world.
        </p>
      </div>
    </div>
  );
};

export default Services;
