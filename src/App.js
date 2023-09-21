import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="wrappe">
      <div className="nav-bar">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
