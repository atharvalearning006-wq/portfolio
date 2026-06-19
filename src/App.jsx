import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {

      setLoading(false);

    }, 900);

  }, []);

  return (

    <div className={loading ? "fade-start" : "fade-end"}>

        <Navbar />

        <Hero />

        <About />

        <Projects />

        <Skills />

       <Contact />

       <Footer />

    </div>

  );

}

export default App;