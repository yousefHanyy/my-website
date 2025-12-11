import Navbar from "./layout/Navbar.jsx";
import Hero from "./layout/Hero.jsx";
import Footer from "./layout/Footer.jsx";
import About from "./layout/About.jsx";
import Contact from "./layout/Contact.jsx";
import Links from "./layout/Links.jsx";
import Random from "./layout/Random.jsx";
function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col min-w-(--window-width) min-h-(--window-height) border-2 rounded-sm">
        <Navbar />
        <div className="flex flex-col grow justify-center items-center font-sans h-full bg-[#F4F1BB]">
          <Hero />
          <main className="flex flex-wrap gap-5 justify-center m-(--icon-container-margin) min-w-xs">
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
