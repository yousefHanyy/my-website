import Navbar from "./layout/Navbar.jsx";
import Hero from "./layout/Hero.jsx";
import Footer from "./layout/Footer.jsx";
import About from "./layout/About.jsx";
import Contact from "./layout/Contact.jsx";
import Links from "./layout/Links.jsx";
import Random from "./layout/Random.jsx";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="font-sans w-[50vw] m-auto h-[50vh]">
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
      </div>
      <Footer />
    </div>
  );
}
export default App;
