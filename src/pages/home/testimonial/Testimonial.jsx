import React from "react";

const Testimonial = ({ testimonial }) => {
  const { name, comment, img } = testimonial;

  return (
    <div class="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 sm:w-2/2">
      <div class=" w-full h-full p-20 mr-5 rounded-lg">
        <img
          className="relative w-4/6 p-2 overflow-hidden shadow-md rounded-2xl"
          src={img}
          alt=""
        />
        <h4 class="relative mt-6 text-lg font-bold">{name}</h4>
        <p class="relative mt-2 text-base text-center text-gray-600">
          {comment}
        </p>
      </div>
    </div>
    // <div className="w-full max-w-md p-4 mx-auto lg:w-1/3">
    //   <blockquote className="relative flex flex-col-reverse items-center justify-center w-full col-span-2 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:text-left hover:bg-white hover:shadow ease">
    //     <div className="flex flex-col pr-10">
    //       <div className="relative pl-12">
    //         <svg
    //           className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 100 125"
    //         >
    //           <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    //         </svg>
    //         <p className="mt-2 text-base text-gray-600">{comment}</p>
    //       </div>
    //       <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
    //         {name}
    //       </h3>
    //       <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
    //     </div>
    //     <img
    //       className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
    //       src={img}
    //       alt=""
    //     />
    //   </blockquote>
    // </div>
  );
};

export default Testimonial;
