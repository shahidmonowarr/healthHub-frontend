import React from "react";

const Service = ({ service }) => {
  const { title, description, img } = service;
  return (
    <div class="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
      <div class="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
        <svg
          class="absolute w-full h-full text-gray-100 fill-current"
          viewBox="0 0 358 372"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <path d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z" />
            </g>
          </g>
        </svg>
        <img
          className="relative w-4/6 overflow-hidden shadow-md rounded-2xl p-2"
          src={img}
          alt=""
        />
        <h4 class="relative mt-6 text-lg font-bold">{title}</h4>
        <p class="relative mt-2 text-base text-center text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Service;
