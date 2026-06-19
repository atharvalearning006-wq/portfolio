import "./Skills.css";
import ScrollDown from "../ScrollDown/ScrollDown";
function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        <h2 className="skills-title">
          SKILLS
        </h2>

        

        <h3 className="skills-subtitle">
          Tools and technologies I'm continuously learning and using in my
          Data Engineering journey.
        </h3>

        <div className="skills-grid">

    <div className="skills-category">

        <h3>Programming</h3>

        <div className="skill-grid">
            <span>SQL</span>
            <span>Python</span>
            <span>Git</span>
        </div>

    </div>

    <div className="skills-category">

        <h3>Databases</h3>

        <div className="skill-grid">
            <span>MySQL</span>
            <span>PostgreSQL</span>
        </div>

    </div>

    <div className="skills-category">

        <h3>Data Engineering</h3>

        <div className="skill-grid">
            <span>ETL</span>
            <span>Data Warehousing</span>
            <span>Apache Spark</span>
        </div>

    </div>

    <div className="skills-category">

        <h3>Tools</h3>

        <div className="skill-grid">
            <span>Power BI</span>
            <span>Excel</span>
            <span>VS Code</span>
        </div>

    </div>

    <div className="skills-category">

        <h3>Cloud</h3>

        <div className="skill-grid">
            <span>AWS (Learning)</span>
            <span>Docker (Learning)</span>
        </div>

    </div>

</div>
<ScrollDown target="#contact" />
      </div>

    </section>
  );
}

export default Skills;