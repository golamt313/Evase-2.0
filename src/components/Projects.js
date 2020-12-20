import React from 'react';
import './styles/Projects.css'
import Fade from 'react-reveal/Fade';
import placeholder from '../images/dev.png';


const Projects = () => {

    return (
        <div id="projects-wrapper">
            <div id="projects-container">
                <Fade top >
                    <h1 id="projects-title">EXPLORE CATEGORIES</h1>
                </Fade>
                <Fade left>
                    <div className="project-block">
                        <img className="placeholder" src={placeholder} alt={'placeholder'}></img>
                    </div>
                </Fade>
                <Fade left>
                    <div className="project-block">
                        <img className="placeholder" src={placeholder} alt={'placeholder'}></img>
                    </div>
                </Fade>
                <Fade left>
                    <div className="project-block">
                        <img className="placeholder" src={placeholder} alt={'placeholder'}></img>
                    </div>
                </Fade>
                <Fade left>
                    <div className="project-block">
                        <img className="placeholder" src={placeholder} alt={'placeholder'}></img>
                    </div>
                </Fade>
                <Fade left>
                    <div className="project-block">
                        <img className="placeholder" src={placeholder} alt={'placeholder'}></img>
                    </div>
                </Fade>
                <Fade left>
                    <div className="project-block">
                        <img className="placeholder" src={placeholder} alt={'placeholder'}></img>
                    </div>
                </Fade>
            </div>
        </div>
    );

};

export default Projects;