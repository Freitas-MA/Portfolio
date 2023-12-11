import React from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import GlobalStyle from "./globalStyles.jsx";

import { Outlet } from "react-router-dom";
import Cookies from "./components/Cookies/Cookies.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
      <Footer />
      <SpeedInsights />
      <Analytics />
      <Cookies />
    </>
  );
}
