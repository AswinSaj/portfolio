import React, { useState, useEffect, lazy, Suspense } from "react";
import GridLoader from "react-spinners/GridLoader";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Hi from "./components/Hi";

const LazySpline = lazy(() => import("./components/Spline"));

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
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
    <div className="wrappe">
      <div className="nav-bar">
        <Navbar />
        <Suspense fallback={<div>Loading Spline...</div>}>
          <LazySpline />
        </Suspense>
        <Hi />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
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
