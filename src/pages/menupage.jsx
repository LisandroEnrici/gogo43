import React, { Suspense } from "react";
import Menu from "../sections/menu";
import Footer from "../sections/footer";
import LoadingPage from "../components/loadingPage";

function Menupage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Menu />
      <Footer />
    </Suspense>
  );
}

export default Menupage;
