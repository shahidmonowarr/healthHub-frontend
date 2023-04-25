import React from "react";
import AppointmentBanner from "../appointmentBanner/AppointmentBanner";
import Contact from "../contact/Contact";
import Hero from "../hero/Hero";
import InfoCards from "../infoCards/InfoCards";
import Services from "../services/Services";
import Testimonials from "../testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoCards />
      <Services />
      <AppointmentBanner />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
