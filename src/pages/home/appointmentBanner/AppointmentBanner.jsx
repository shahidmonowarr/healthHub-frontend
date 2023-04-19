import React from "react";
import { Link } from "react-router-dom";
import appointment from "../../../assets/appointmentbg.jpg";
import doctor from "../../../assets/doctor.png";

const AppointmentBanner = () => {
  return (
    <section
      className="relative w-full my-20 px-8 min-w-min:my-10 md:my-20"
      style={{
        backgroundImage: `url(${appointment})`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto sm:flex-row sm:justify-between">
        <div className="relative flex flex-col items-start justify-center w-full mb-10 sm:w-5/6 sm:mb-0 sm:pr-10">
          <div className="">
            <img
              src={doctor}
              alt="Screen shot of Flare"
              className="object-cover lg:w-3/4 -mt-32 h-full"
            />
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-center w-full mb-10 sm:w-5/6 sm:mb-0 sm:pr-10">
          <h2 className="mb-5 text-2xl font-black leading-tight xl:text-4xl">
            Get Started With HealthHub
          </h2>
          <p className="mb-8 text-base text-yellow-900 xl:text-xl md:max-w-lg">
            You can get started with HealthHub by creating an account. It's free
            to get appointments and you can cancel at any time.
          </p>
          <Link to="/" className="relative">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded"></span>
            <span className="relative inline-block w-full h-full px-5 py-3 text-lg font-bold transition duration-100 bg-white border-2 border-black rounded fold-bold hover:bg-yellow-500 hover:text-white">
              GET APPOINTMENT
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
