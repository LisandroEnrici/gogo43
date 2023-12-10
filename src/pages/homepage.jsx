import React, { Suspense, lazy, useState } from "react";
import LoadingPage from "../components/loadingPage";
const TopButtons = lazy(() => import("../components/topButtons"));
const Banner = lazy(() => import("../sections/banner"));
const Footer = lazy(() => import("../sections/footer"));
const MenuAccess = lazy(() => import("../components/menuAccess"));
const FindUs = lazy(() => import("../sections/findUs"));
const AboutUs = lazy(() => import("../sections/aboutUs"));

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <TopButtons />
      <Banner />
      <MenuAccess />
      <AboutUs />
      <FindUs />
      <Footer />
    </Suspense>
  );
}

export default App;
