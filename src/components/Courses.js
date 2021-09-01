import React, {useState, useEffect} from 'react';
import './styles/Courses.scss'
import Fade from 'react-reveal/Fade';
import axios from 'axios';

function Courses() {
    const url = 'http://localhost:1337/global';
	const [state, setState] = useState(null)
	
    useEffect(() => {
		axios.get(url)
		.then(res => {setState(res.data)})
	}, [url])

    if(state) {
        return (
            <div className="courses-wrapper">
                
                <Fade top><h1 className="courses-title">Courses</h1></Fade>
                <Fade left>
                    <div className="course-block">
                        <h1>Javascript/React.JS</h1>
                        <h3>Programming Language and Framework</h3>
                        <button>Learn React</button>
                    </div>
                </Fade>
                <Fade right>
                    <div className="course-block">
                        <h1>HTML/CSS</h1>
                        <h3>Web Development Fundamentals</h3>
                        <button>Learn HTML/CSS</button>
                    </div>
                </Fade>
                <Fade left>
                    <div className="course-block">
                        <h1>React Native</h1>
                        <h3>Mobile Development Fundamentals</h3>
                        <button>Learn React Native</button>
                    </div>
                </Fade>
                <Fade right>
                    <div className="course-block">
                        <h1>C++</h1>
                        <h3>Intro to OOP Programming</h3>
                        <button>Learn C++</button>
                    </div>
                </Fade>
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default Courses;