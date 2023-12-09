import React from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import "./Styles/style.css";
import "./Styles/utilities.css";

import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
