import Navbar from "./layout/Navbar.jsx";
import Hero from "./layout/Hero.jsx";
import Footer from "./layout/Footer.jsx";
import About from "./layout/About.jsx";
import Contact from "./layout/Contact.jsx";
import Links from "./layout/Links.jsx";
import Random from "./layout/Random.jsx";
function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div>
        <Hero />
        <main className="flex justify-between">
          <About />
          <Links />
          <Contact />
          <Random />
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default App;
