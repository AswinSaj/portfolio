import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div className="rounded-full w-80 h-80">
      <Spline
        className="flex justify-center "
        scene="https://prod.spline.design/swf2eviBrsDgviUr/scene.splinecode"
      />
    </div>
  );
}
