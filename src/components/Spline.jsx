import React, { lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Scene() {
  return (
    <div className="relative h-screen w-screen ">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/OuTgKD4-C0b6ZDln/scene.splinecode" />
      </Suspense>
    </div>
  );
}
