import "./About.css";
import aboutImage from "../../assets/about.png";
import ScrollDown from "../ScrollDown/ScrollDown";
function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* LEFT */}

        <div className="about-content">

          <h2 className="section-title">
            ABOUT
          </h2>

          

          {/* ABOUT TEXT */}

          <div className="about-text">

            <h3>
              I'm <span>Atharva Mhatre</span>, a Data Science student with a
              strong interest in <strong>Data Engineering</strong>. I enjoy
              designing scalable data pipelines, writing efficient SQL queries,
              working with Python, and learning modern cloud technologies to
              solve real-world data problems.
            </h3>
<br />
            <h3>
              My goal is to become a skilled Data Engineer by building practical
              projects, strengthening my problem-solving abilities, and
              continuously learning industry-standard tools used in modern data
              platforms.
            </h3>

          </div>
          {/* SKILLS */}
          <div className="skills">
            <span>SQL</span>
            <span>Python</span>
            <span>MySQL</span>
            <span>ETL</span>
            <span>Git</span>
            <span>Power BI</span>
            <span>AWS</span>
            <span>Data Warehousing</span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-image">

          <div className="image-wrapper">

            <img
              src={aboutImage}
              alt="Atharva Mhatre"
            />

          </div>

        </div>

      </div>

      <ScrollDown target="#projects" />

    </section>
  );
}

export default About;