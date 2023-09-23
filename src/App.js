import Spline from "./components/Spline";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="wrappe">
      <div className="nav-bar">
        {/* <Navbar /> */}
        <Spline />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
