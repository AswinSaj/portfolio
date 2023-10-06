import React, { useState, useEffect, lazy, Suspense } from "react";
import GridLoader from "react-spinners/GridLoader";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Hi from "./components/Hi";
import { BrowserRouter } from "react-router-dom";

const LazySpline = lazy(() => import("./components/Spline"));

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-700"
          style={{ zIndex: 9999 }}
        >
          <GridLoader color={"#63A7C6"} loading={loading} size={30} />
        </div>
      ) : null}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="wrappe">
        <div className="nav-bar">
          <Navbar />
          <Suspense fallback={<div>Loading Spline...</div>}>
            <LazySpline />
          </Suspense>
          <Hi />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default function Main() {
  return (
    <div>
      <Loading />
      <App />
    </div>
  );
}
