import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Vendor from "./components/Vendor";
import Supplier from "./components/Supplier";
function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/vendor" || location.pathname === "/supplier";


  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="how-it-works"><HowItWorks /></section>
              <section id="vendor" className="py-20 text-center text-xl">Vendor Section (Coming Soon)</section>
              <section id="supplier" className="py-20 text-center text-xl">Supplier Section (Coming Soon)</section>
              <Footer />
            </div>
          }
        />
         <Route path="/supplier" element={<Supplier />} />
        <Route path="/vendor" element={<Vendor />} />
       
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
