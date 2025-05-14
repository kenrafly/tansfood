import Feature from "@/components/Feature/Feature";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Hero from "@/components/Hero/Hero";
import ReservationForm from "@/components/ReservatoinForm/ReservationForm";
import Reviews from "@/components/Reviews/Reviews";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col w-screen overflow-clip">
      <Hero />
      <Feature />
      <Reviews />
      <ReservationForm />
    </div>
  );
};

export default page;
