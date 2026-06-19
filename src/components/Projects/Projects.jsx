import "./Projects.css";

import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ScrollDown from "../ScrollDown/ScrollDown";
function Projects() {

    return (

        <section className="projects" id="projects">

            <div className="projects-container">

                <h2 className="projects-title">
                    Selected Work
                </h2>

                

                <h3 className="projects-subtitle">
                    A collection of projects showcasing my skills in SQL,
                    Python, Data Engineering and Frontend Development.
                </h3>

                {/* Featured Project */}

                <div className="featured-project">

                    <div className="featured-image">

                        <img src={project1} alt="SQL Data Warehouse" />

                    </div>

                    <div className="featured-content">

                        <h3>SQL Data Warehouse</h3>

                        <p>
                            Built an end-to-end SQL Data Warehouse using
                            ETL pipelines, star schema modelling and
                            analytical queries.
                        </p>

                        <div className="project-tags">

                            <span>SQL</span>
                            <span>MySQL</span>
                            <span>ETL</span>
                            <span>Data Warehouse</span>

                        </div>

                        <div className="project-links">

                            <a href="#">
                                <FaGithub /> GitHub
                            </a>

                            <a href="#">
                                View Project
                                <FaExternalLinkAlt />
                            </a>

                        </div>

                    </div>

                </div>

                {/* Small Cards */}

                <div className="small-projects">

                    <div className="project-card">

                        <img src={project2} alt="" />

                        <div className="card-content">

                            <h3>Olist SQL Analysis</h3>

                            <p>
                                SQL analysis on a real-world ecommerce dataset.
                            </p>

                            <div className="project-tags">

                                <span>SQL</span>
                                <span>Python</span>
                                <span>Power BI</span>

                            </div>

                        </div>

                    </div>

                    <div className="project-card">

                        <img src={project3} alt="" />

                        <div className="card-content">

                            <h3>Portfolio Website</h3>

                            <p>
                                Personal portfolio built using React and CSS.
                            </p>

                            <div className="project-tags">

                                <span>React</span>
                                <span>CSS</span>
                                <span>JavaScript</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <ScrollDown target="#skills" />

        </section>

    );

}

export default Projects;