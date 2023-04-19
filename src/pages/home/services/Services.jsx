import React from "react";
import cavity from "../../../assets/cavity.svg";
import fluoride from "../../../assets/fluoride.svg";
import whitening from "../../../assets/whitening.svg";
import Service from "./Service";

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
      <div class="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
        <h2 class="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
          Our Features
        </h2>
        <h3 class="max-w-xl px-5 mt-2 text-2xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-2xl">
          We provide the best services
        </h3>
        <div class="flex flex-col w-full mt-0 lg:flex-row sm:mt-5 lg:mt-10">
          {servicesData.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
