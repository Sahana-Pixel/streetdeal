import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <section id="home" ><Home/></section>
      <section id="about" ><About/></section>
      <section id="how-it-works" ><HowItWorks/></section>
      <section id="vendor" ></section>
      <section id="supplier" ></section>
      </div>
      <Footer/>
    </>
  );
}

export default App;