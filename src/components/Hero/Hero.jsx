import "./Hero.css";
import profile from "../../assets/profile.png";

import { TypeAnimation } from "react-type-animation";
import { FaChevronDown } from "react-icons/fa";
import ScrollDown from "../ScrollDown/ScrollDown";
function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">

          <div className="profile-border">

            <img src={profile} alt="Atharva Mhatre" />

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <h2 className="hero-intro">

            Hi, I'm

          </h2>

          <h1>

            <b>Atharva Mhatre</b> <br />

            

          </h1>

          <h2>

            Data Engineer

          </h2>

          <div className="typing-wrapper">

            <TypeAnimation
              sequence={[
                "Building Data Pipelines",
                2000,
                "Creating ETL Workflows",
                2000,              
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing"
            />

          </div>

        </div>

      </div>

      <ScrollDown target="#about" />

              
    </section>
  );
}

export default Hero;