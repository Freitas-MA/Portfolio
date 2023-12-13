import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Works from "./My_work/works.jsx";
import Contact from "./Contact/contacts.jsx";
import Background from "../../components/Background/Background";
import { hero } from "../../assets/API/DataObjects";

export default function Home() {
  return (
    <div>
      <Background />
      <Hero props={hero} />
      <Works />
      <Contact />
    </div>
  );
}
