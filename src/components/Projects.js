import React, { useState, useEffect } from 'react';
import './styles/Projects.scss'
import Fade from 'react-reveal/Fade';
import placeholder from '../images/dev.png';
import publicIp from 'public-ip';
import firebase from '../firebase';
import {v4 as uuidv4} from 'uuid';
import dev from '../images/fet.gif';
import crypto from '../images/crypto.png';
import hosting from '../images/datacenter.png';

import reactimg from '../images/react.png';
import firebaseimg from '../images/firebase.png';
import javascriptimg from '../images/javascript.png';
import nodejsimg from '../images/nodejs.png';

const Projects = () => {
    const [details, setDetails] = useState(null);
    const [clientIp, setClientIp] = useState('8.8.8.8');   
    
    const getuserGeolocationDetails = () => {
        fetch("https://geolocation-db.com/json/8f12b5f0-2bc2-11eb-9444-076679b7aeb0")
        .then( response => response.json())
        .then( data => setDetails( data ));
        console.log(details);
    }

    (async () => {
        setClientIp(await publicIp.v4());
        let index = 0;
        let timeoutId;
        const speed = 1;
        const numberOfSlides = 4;
        const carouselContainer = document.querySelector(".carouselContainer");
        const carouselItemWidth = carouselContainer.scrollWidth / numberOfSlides;
        await setInterval(() => {
        carouselContainer.scrollBy(carouselItemWidth, 0);
        timeoutId = setTimeout(() => {
            index = index % numberOfSlides;
            let childToMove = carouselContainer.querySelectorAll(`.carouselItem`)[
            index
            ];
            childToMove.style.order =
            childToMove.style.order && childToMove.style.order === 0
                ? 1
                : +childToMove.style.order + 1;
            index++;
            clearTimeout(timeoutId);
        }, 1000);
        }, speed * 1000);
        })();
      
    function handleLog(clientIp) {
        const info = {
            id: uuidv4(),
            number: clientIp
        }

        if (info.number !== "") {
        const db = firebase.firestore().collection("logger");
        db
        .doc(info.number)
        .set(info)
        .catch((err) => {
            console.log(err);
        });
      }
    };
    
    useEffect(() => {
        getuserGeolocationDetails();
    }, [])


    return (
        <div id="projects-wrapper">
            <div id="projects-container">
                <Fade top >
                    <h1 id="projects-title">EXPLORE CATEGORIES</h1>
                </Fade>
                <Fade left>
                    <div className="project-block">
                        <div>
                            <div className="left-teaser-1">
                                <div className="data-privacy-image">
                                    {details && <ul className="details-list-container">
                                        <h3 className="ip" onLoad={handleLog(clientIp)}>Your IP: {clientIp}</h3>
                                        <li className="details-list-item">Location: { `${details.city}, ${details.country_name}(${details.state})` }</li>
                                        <li className="details-list-item">Estimated Latitude: { `${details.latitude}` }</li>
                                        <li className="details-list-item">Estimated Longitude: { `${details.longitude}` }</li>
                                        </ul>}
                                </div>
                            </div>
                            
                            </div>


                            <div className="right-teaser-1">
                                <h3><u>Data Privacy</u></h3>
                                <small> Websites can access this type of infomation when you join their site.
                                        There are different types of data that websites, firms or individuals may use to learn more about you.
                                        For example if you look to your left, our left "teaser" displays your geolocation. This accuracy of
                                        your geolocation is a near estimate and <b>not</b> an exact location mark, because having your exact 
                                        location mark is <b>illegal</b> (You may read more about cyber law regulations on our Law page,this 
                                        covers the full extent of all cyber rules consumers and producers <b>must</b> follow)



                                </small>
                            </div>
                            <div className="learn-more"><p>Learn more</p></div>
                    </div>
                </Fade>

                <Fade left>
                    <div className="project-block">
                        <div className="left-teaser-1">
                            <img className="development-image" src={dev}></img>
                        </div>
                        <div className="right-teaser-1">
                            <h3><u>Development</u></h3>
                            <small> There are several types of development we will discuss about including the following;
                                Website Development, Mobile Application, Application Development (Plugins), Programming Languages and UI/UX 
                                Designing. The common thing you can identify in all of these, is that all of these require 
                                "Front-End Developing" and "Back-end Developing". They <b>both</b> are <b>needed</b> to <b>produce</b> a high functioning application or 
                                browser. 
                            </small>    
                        </div>
                        <div className="learn-more"><p>Learn more</p></div>
                    </div>
                </Fade>

                <Fade left>
                    <div className="project-block">
                        <div className="left-teaser-1">
                            <img className="development-image" src={crypto}></img>
                        </div>
                        <div className="right-teaser-1">
                            <h3><u>Cyrpto currency</u></h3>
                            <small> A cryptocurrency or crypto is a digital asset designed to work as a medium
                                of exchange where individual coin ownership records are stored in ledger 
                                which exists in the form of a computerized database supported with stong <b>encryption</b> and <b>cryptography </b>
                              to secure transaction records and verify coin ownership. They typically
                                dont have a physical form such as paper money and is not typically issued by central authority.
                                You can also <b>create</b> your own Crypto Currency..!            
                            </small>
                               </div>
                            <div className="learn-more"><p>Learn more</p></div>    
                    </div>
                </Fade>

                <Fade left>
                <div className="project-block">
                        <div className="left-teaser-1">
                            <img className="development-image" src={hosting}></img>
                        </div>
                        <div className="right-teaser-1">
                            <h3><u>Hosting</u></h3>
                            <small>Hosting is to store data or a website onto a server or computer so that it can be 
                                accessed over the internet. Usually and mainly Datacenters host and operate IT operations and
                                have a variety of equipement for the purposes of storing, processing and dissemating data and
                                applications. Datacenters are vital to the continuity of daily operations and have multiple
                                computers that function for its own unique purpose. From this we can host Websites, Game servers
                                Cloud Hosting and Virtual Servers.
                            </small>
                               </div>
                            <div className="learn-more"><p>Learn more</p></div>    
                    </div>
                </Fade>

                <div className="icons-wrapper">
                <div class="carouselWrapper">
                    <div class="carouselContainer">
                        <div class="carouselItem">
                        <img src={reactimg} alt="React" />
                        </div>
                        <div class="carouselItem">
                        <img src={javascriptimg} alt="React" />
                        </div>
                        <div class="carouselItem">
                        <img src={nodejsimg} alt="React" />
                        </div>
                        <div class="carouselItem">
                        <img src={firebaseimg} alt="React" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Projects;