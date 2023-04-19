import React from "react";
import clock from "../../../assets/clock.svg";
import location from "../../../assets/location.svg";
import phone from "../../../assets/phone.svg";

const InfoCards = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white md:pt-20 md:pb-2">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-8 mx-auto xl:px-0">
        <div className="flex w-full h-full">
          <div className="w-full lg:w-3/3">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full cursor-pointer mb-10 sm:w-2/2">
                <div class="relative ml-0 mr-0 sm:mr-10">
                  <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                  <div class="relative p-5 bg-white border-2 border-indigo-500 rounded-lg">
                    <div class="flex items-center -mt-1">
                      <img className=" w-2/12" src={clock} alt="" />
                      <h3 class="my-2 ml-3 text-2xl font-bold text-gray-800">
                        Opening Hours
                      </h3>
                    </div>
                    <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      Monday - Friday
                    </p>
                    <p class="mb-2 text-gray-600">
                      Open from 9:00am to 5:00pm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full cursor-pointer mb-10 sm:w-2/2">
                <div class="relative ml-0 md:mr-10">
                  <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                  <div class="relative p-5 bg-white border-2 border-purple-500 rounded-lg">
                    <div class="flex items-center -mt-1">
                      <img className=" w-2/12" src={location} alt="" />
                      <h3 class="my-2 ml-3 text-2xl font-bold text-gray-800">
                        Visit Our Location
                      </h3>
                    </div>
                    <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      Sony Square Road
                    </p>
                    <p class="mb-2 text-gray-600">
                      Mirpur -2, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full cursor-pointer mb-10 sm:w-2/2">
                <div class="relative ml-0 mr-0 sm:mr-10">
                  <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                  <div class="relative p-5 bg-white border-2 border-blue-400 rounded-lg">
                    <div class="flex items-center -mt-1">
                      <img className=" w-2/12" src={phone} alt="" />
                      <h3 class="my-2 ml-3 text-2xl font-bold text-gray-800">
                        Contact Us Now
                      </h3>
                    </div>
                    <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      +880 123 456 789
                    </p>
                    <p class="mb-2 text-gray-600">
                      shahidmonowar.cse@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
