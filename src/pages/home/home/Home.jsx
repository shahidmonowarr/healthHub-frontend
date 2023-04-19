import React from "react";
import AppointmentBanner from "../appointmentBanner/AppointmentBanner";
import Hero from "../hero/Hero";
import InfoCards from "../infoCards/InfoCards";
import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoCards />
      <Services />
      <AppointmentBanner />
    </div>
  );
};

export default Home;
