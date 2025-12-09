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
      <div className="flex flex-col font-sans w-[45vw] m-auto h-[50vh]">
        <Navbar />
        <div className="flex flex-col grow">
          <Hero />
          <main className="flex grow justify-around items-center bg-[#F4F1BB]">
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
