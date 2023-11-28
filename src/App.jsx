import React, { Suspense, lazy } from "react";
import TopButtons from "./components/topButtons";
import Banner from "./sections/banner";
import Footer from "./sections/footer";
const Menu = lazy(() => import("./sections/menu"));
const FindUs = lazy(() => import("./sections/findUs"));

function App() {
  return (
    <>
      <TopButtons />
      <Banner />
      <Suspense fallback={<h2 style={{textAlign:'center'}}>Carico...</h2>}>
        <Menu />
        <FindUs />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
