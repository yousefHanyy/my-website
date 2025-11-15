import Navbar from "./layout/Navbar.jsx";
import Hero from "./layout/Hero.jsx";
import Footer from "./layout/Footer.jsx";
import About from "./layout/About.jsx";
import Contact from "./layout/Contact.jsx";
import Links from "./layout/Links.jsx";
import Random from "./layout/Random.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Links />
        <Contact />
        <Random />
      </main>
      <Footer />
    </div>
  );
}
export default App;
